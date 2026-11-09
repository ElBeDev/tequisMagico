// Atributos de <img> para las fotos del sitio.
// - Fotos de Wikimedia Commons con copia en nuestro servidor (commons-mirror.json, la llena
//   deploy/mirror-commons.mjs): pasan por el optimizador de Next desde esa copia, en WebP, al ancho
//   del srcset y con caché de 30 días. Commons manda sus fotos sin Cache-Control, solo en JPG, y
//   responde 429 a quien le pide muchas seguidas (a PageSpeed, y al VPS cuando el optimizador se
//   las pedía directo): por eso la copia y no Wikimedia detrás del optimizador.
// - Commons sin copia (una foto nueva del panel, hasta correr el script): srcset con los anchos
//   estándar de Wikimedia. Con crossOrigin="anonymous" el navegador no guarda su cookie de
//   seguimiento (WMF-Uniq); Commons responde con Access-Control-Allow-Origin: *.
// - Sitios de negocios y fotos subidas desde el panel: optimizador de Next. Solo los hosts de
//   OPTIMIZED_HOSTS; cualquier otro se pide tal cual, porque el optimizador rechaza hosts que no
//   estén en next.config.
import MIRROR from './commons-mirror.json';

/** Hosts que pasan por `/_next/image`. next.config.ts arma `images.remotePatterns` con esta lista. */
export const OPTIMIZED_HOSTS = ['vuelaenglobo.com', 'salavive.mx', 'panel.tequismagico.com'];
/** Donde Caddy sirve la copia de Commons (/srv/tequis/uploads/commons en el VPS). */
const MIRROR_BASE = 'https://panel.tequismagico.com/uploads/commons';
const mirror: Record<string, number> = MIRROR;

const COMMONS = /^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/(?:thumb\/)?([0-9a-f]\/[0-9a-f]{2})\/([^/]+?\.(?:jpe?g|png|webp))(?:\/\d+px-[^/]+)?$/i;
// Anchos estándar de las miniaturas de Wikimedia (250 y 330 sirven a las fotos chicas: miniaturas
// de las listas y del mega menú, que antes bajaban la de 500).
const COMMONS_WIDTHS = [250, 330, 500, 960, 1280, 1920];
// Deben estar en `images.imageSizes` o `images.deviceSizes` de Next (estos son de las listas por
// defecto). Los chicos son para las miniaturas: sin ellos, una foto de 64 px bajaba la de 640.
const OPTIMIZER_WIDTHS = [128, 256, 384, 640, 828, 1200, 1920];

/** `sizes` de las tarjetas en cuadrícula de 1, 2 o 3 columnas. */
export const GRID_SIZES = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw';

function optimizable(url: URL): boolean {
  return OPTIMIZED_HOSTS.some((h) => (h.startsWith('*.') ? url.hostname.endsWith(h.slice(1)) : url.hostname === h));
}

function decode(s: string): string {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

export type PhotoAttrs = {
  src: string;
  srcSet?: string;
  sizes?: string;
  crossOrigin?: 'anonymous';
  referrerPolicy: 'no-referrer';
};

/** srcset por el optimizador de Next, sin ofrecer anchos mayores que el original (no agranda). */
function optimized(src: string, sizes: string, max = Infinity): PhotoAttrs {
  const at = (w: number) => `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=75`;
  const candidates: [string, number][] = OPTIMIZER_WIDTHS.filter((w) => w < max).map((w) => [at(w), w]);
  const above = OPTIMIZER_WIDTHS.find((w) => w >= max);
  if (above && Number.isFinite(max)) candidates.push([at(above), max]); // Next lo entrega a su ancho real
  const fallback = [...candidates].reverse().find(([, w]) => w <= 1200) ?? candidates[0];
  return { src: fallback[0], srcSet: candidates.map(([u, w]) => `${u} ${w}w`).join(', '), sizes, referrerPolicy: 'no-referrer' };
}

export function photoAttrs(src: string, sizes = '100vw'): PhotoAttrs {
  const commons = src.match(COMMONS);
  if (commons) {
    const [, dir, file] = commons;
    const name = decode(file);
    const width = mirror[`${dir}/${name}`];
    if (width) return optimized(`${MIRROR_BASE}/${dir}/${encodeURIComponent(name)}`, sizes, width);
    const at = (w: number) => `https://upload.wikimedia.org/wikipedia/commons/thumb/${dir}/${file}/${w}px-${file}`;
    return {
      src: at(960),
      srcSet: COMMONS_WIDTHS.map((w) => `${at(w)} ${w}w`).join(', '),
      sizes,
      crossOrigin: 'anonymous',
      referrerPolicy: 'no-referrer',
    };
  }
  let url: URL | null = null;
  try {
    url = new URL(src);
  } catch {}
  if (url && optimizable(url)) return optimized(src, sizes);
  return { src, referrerPolicy: 'no-referrer' };
}

/** Lo mismo, como atributos HTML para las ventanas del mapa (que se arman como texto). */
export function photoAttrsHtml(src: string, sizes: string, escape: (s: string) => string): string {
  const a = photoAttrs(src, sizes);
  return [
    `src="${escape(a.src)}"`,
    a.srcSet && `srcset="${escape(a.srcSet)}" sizes="${escape(sizes)}"`,
    a.crossOrigin && `crossorigin="anonymous"`,
    `referrerpolicy="no-referrer"`,
  ]
    .filter(Boolean)
    .join(' ');
}

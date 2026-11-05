// Atributos de <img> para las fotos del sitio, que son todas hotlink (como en la app).
// - Wikimedia Commons: srcset con los anchos estándar de Wikimedia, para que un celular no baje
//   la versión de 1920 px. Con crossOrigin="anonymous" el navegador no guarda la cookie de
//   seguimiento de Wikimedia (WMF-Uniq); Commons responde con Access-Control-Allow-Origin: *.
// - Sitios de negocios y fotos subidas desde el panel: pasan por el optimizador de imágenes de
//   Next, que sí las reduce. Solo los hosts de OPTIMIZED_HOSTS; cualquier otro se
//   pide tal cual, porque el optimizador rechaza hosts que no estén en next.config.

/** Hosts que pasan por `/_next/image`. next.config.ts arma `images.remotePatterns` con esta lista. */
export const OPTIMIZED_HOSTS = ['vuelaenglobo.com', 'salavive.mx', 'panel.tequismagico.com'];

const COMMONS = /^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/(?:thumb\/)?([0-9a-f]\/[0-9a-f]{2})\/([^/]+?\.(?:jpe?g|png|webp))(?:\/\d+px-[^/]+)?$/i;
const COMMONS_WIDTHS = [500, 960, 1280, 1920];
// Deben estar en `images.deviceSizes` de Next (estos son de la lista por defecto).
const OPTIMIZER_WIDTHS = [640, 828, 1200, 1920];

/** `sizes` de las tarjetas en cuadrícula de 1, 2 o 3 columnas. */
export const GRID_SIZES = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw';

function optimizable(url: URL): boolean {
  return OPTIMIZED_HOSTS.some((h) => (h.startsWith('*.') ? url.hostname.endsWith(h.slice(1)) : url.hostname === h));
}

export type PhotoAttrs = {
  src: string;
  srcSet?: string;
  sizes?: string;
  crossOrigin?: 'anonymous';
  referrerPolicy: 'no-referrer';
};

export function photoAttrs(src: string, sizes = '100vw'): PhotoAttrs {
  const commons = src.match(COMMONS);
  if (commons) {
    const [, dir, file] = commons;
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
  if (url && optimizable(url)) {
    const at = (w: number) => `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=75`;
    return { src: at(1200), srcSet: OPTIMIZER_WIDTHS.map((w) => `${at(w)} ${w}w`).join(', '), sizes, referrerPolicy: 'no-referrer' };
  }
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

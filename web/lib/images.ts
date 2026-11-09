// Atributos de <img> para las fotos del sitio. Las de Wikimedia Commons, las de sitios de negocios y
// las subidas desde el panel pasan por el optimizador de imágenes de Next (`/_next/image`): las da
// en WebP, al ancho que pide el `srcset` y con caché de 30 días (`minimumCacheTTL` en next.config).
// Commons manda sus fotos sin Cache-Control, solo en JPG y sin anchos entre 500 y 960 px, así que
// en celular una tarjeta de 412 px bajaba la de 960. Como el navegador ya no le pide nada a
// Wikimedia, tampoco recibe su cookie de seguimiento (WMF-Uniq).
// Cualquier otro host se pide tal cual, porque el optimizador rechaza hosts que no estén en
// next.config.

/** Hosts que pasan por `/_next/image`. next.config.ts arma `images.remotePatterns` con esta lista. */
export const OPTIMIZED_HOSTS = ['vuelaenglobo.com', 'salavive.mx', 'panel.tequismagico.com'];
/** Commons va aparte: solo su carpeta de archivos, para que el optimizador no sirva de proxy abierto. */
export const COMMONS_PREFIX = 'https://upload.wikimedia.org/wikipedia/commons/';

// Deben estar en `images.imageSizes` o `images.deviceSizes` de Next (estos son de las listas por
// defecto). Los chicos son para las miniaturas: sin ellos, una foto de 64 px bajaba la de 640.
const OPTIMIZER_WIDTHS = [128, 256, 384, 640, 828, 1200, 1920];

/** `sizes` de las tarjetas en cuadrícula de 1, 2 o 3 columnas. */
export const GRID_SIZES = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw';

function optimizable(url: URL): boolean {
  return OPTIMIZED_HOSTS.some((h) => (h.startsWith('*.') ? url.hostname.endsWith(h.slice(1)) : url.hostname === h));
}

export type PhotoAttrs = {
  src: string;
  srcSet?: string;
  sizes?: string;
  referrerPolicy: 'no-referrer';
};

export function photoAttrs(src: string, sizes = '100vw'): PhotoAttrs {
  const commons = src.startsWith(COMMONS_PREFIX);
  let url: URL | null = null;
  try {
    url = new URL(src);
  } catch {}
  if (!commons && !(url && optimizable(url))) return { src, referrerPolicy: 'no-referrer' };

  // Las de Commons ya llegan como miniatura (…/960px-Archivo.jpg, ver commonsThumb en data.ts y
  // commons() en photos.ts), y Next no agranda: no se ofrecen anchos mayores que ese, o el
  // navegador elegiría uno "de 1920" que en realidad mide 960.
  const max = Number(src.match(/\/(\d+)px-[^/]+$/)?.[1] ?? Infinity);
  const at = (w: number) => `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=75`;
  const candidates: [string, number][] = OPTIMIZER_WIDTHS.filter((w) => w < max).map((w) => [at(w), w]);
  const above = OPTIMIZER_WIDTHS.find((w) => w >= max);
  if (above && Number.isFinite(max)) candidates.push([at(above), max]); // Next lo entrega a su ancho real
  const fallback = [...candidates].reverse().find(([, w]) => w <= 1200) ?? candidates[0];
  return {
    src: fallback[0],
    srcSet: candidates.map(([u, w]) => `${u} ${w}w`).join(', '),
    sizes,
    referrerPolicy: 'no-referrer',
  };
}

/** Lo mismo, como atributos HTML para las ventanas del mapa (que se arman como texto). */
export function photoAttrsHtml(src: string, sizes: string, escape: (s: string) => string): string {
  const a = photoAttrs(src, sizes);
  return [`src="${escape(a.src)}"`, a.srcSet && `srcset="${escape(a.srcSet)}" sizes="${escape(sizes)}"`, `referrerpolicy="no-referrer"`]
    .filter(Boolean)
    .join(' ');
}

// Idiomas del sitio. El español va sin prefijo (las URLs de siempre); el inglés vive en /en con
// rutas en inglés (/en/places/food-and-drink). Las carpetas de app/[lang] usan los nombres en
// español: proxy.ts traduce la URL visible en inglés a la interna antes de renderizar, y todos
// los links del sitio pasan por `href()` para salir en el idioma de la página.

import { TYPE_SLUGS_EN } from './tipos';

export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];
export const isLang = (v: string): v is Lang => v === 'es' || v === 'en';
export const LOCALE: Record<Lang, string> = { es: 'es-MX', en: 'en-US' };

// Primer segmento de la ruta, y para algunos, el segundo (categorías, rutas temáticas, guías).
const FIRST: Record<string, string> = {
  lugares: 'places',
  lugar: 'place',
  eventos: 'events',
  evento: 'event',
  rutas: 'routes',
  mapa: 'map',
  'por-que-tequis': 'why-tequis',
  'guia-practica': 'travel-tips',
  guias: 'guides',
  'mi-viaje': 'my-trip',
  app: 'app',
  creditos: 'credits',
  privacidad: 'privacy',
  terminos: 'terms',
};
const SECOND: Record<string, Record<string, string>> = {
  lugares: {
    'sitios-turisticos': 'sights',
    experiencias: 'experiences',
    gastronomia: 'food-and-drink',
    hospedaje: 'where-to-stay',
    compras: 'shopping',
    eventos: 'events',
    rutas: 'routes',
  },
  rutas: { 'vino-y-queso': 'wine-and-cheese', artesanal: 'crafts', historica: 'history', aventura: 'adventure' },
  guias: { 'fin-de-semana': 'weekend', 'vinedos-y-quesos': 'wineries-and-cheese', 'en-familia': 'with-kids', 'pena-de-bernal': 'pena-de-bernal' },
};

// Tercer segmento de /lugares/<categoría>/<tipo> (páginas por tipo, lib/tipos.ts).
const THIRD: Record<string, Record<string, string>> = { lugares: TYPE_SLUGS_EN };

const invert = (m: Record<string, string>) => Object.fromEntries(Object.entries(m).map(([k, v]) => [v, k]));
const FIRST_ES = invert(FIRST);
const THIRD_ES: Record<string, Record<string, string>> = Object.fromEntries(Object.entries(THIRD).map(([k, m]) => [k, invert(m)]));
const SECOND_ES: Record<string, Record<string, string>> = Object.fromEntries(Object.entries(SECOND).map(([k, m]) => [k, invert(m)]));

function splitPath(path: string): [string, string] {
  const i = path.search(/[?#]/);
  return i === -1 ? [path, ''] : [path.slice(0, i), path.slice(i)];
}

/** Ruta en español del sitio (`/lugares/gastronomia?tipo=x#y`) → la misma en el idioma pedido. */
export function href(lang: Lang, esPath: string): string {
  if (lang === 'es' || !esPath.startsWith('/')) return esPath;
  const [path, rest] = splitPath(esPath);
  const segs = path.split('/').filter(Boolean);
  if (segs.length === 0) return `/en${rest}`;
  const [a, b, c, ...tail] = segs;
  const out = [FIRST[a] ?? a];
  if (b !== undefined) out.push(SECOND[a]?.[b] ?? b);
  if (c !== undefined) out.push(THIRD[a]?.[c] ?? c);
  return `/en/${[...out, ...tail].join('/')}${rest.replace('?tipo=', '?type=')}`;
}

/** Ruta visible en inglés sin el `/en` (`/places/food-and-drink`) → ruta interna en español. */
export function enToEs(enPath: string): string {
  const segs = enPath.split('/').filter(Boolean);
  if (segs.length === 0) return '/';
  const [a, b, c, ...tail] = segs;
  const first = FIRST_ES[a] ?? a;
  const out = [first];
  if (b !== undefined) out.push(SECOND_ES[first]?.[b] ?? b);
  if (c !== undefined) out.push(THIRD_ES[first]?.[c] ?? c);
  return `/${[...out, ...tail].join('/')}`;
}

/**
 * La URL que ve la persona. Las páginas en español se generan como `/es/...` y `proxy.ts` las
 * reescribe, así que `usePathname()` devuelve `/es/lugares` en una página que se ve como `/lugares`.
 * Todo lo que compare la ruta o arme links con ella tiene que pasar por aquí.
 */
export function visiblePath(pathname: string): string {
  if (pathname === '/es') return '/';
  return pathname.startsWith('/es/') ? pathname.slice(3) : pathname;
}

/** La misma página en el otro idioma, a partir de la URL visible (para el botón ES/EN). */
export function otherLangPath(pathname: string): { lang: Lang; path: string } {
  if (pathname === '/en' || pathname.startsWith('/en/')) return { lang: 'es', path: enToEs(pathname.slice(3)) };
  return { lang: 'en', path: href('en', pathname) };
}

/** Para `alternates` en los metadatos: la ruta canónica en cada idioma. */
export function alternates(lang: Lang, esPath: string) {
  return {
    canonical: href(lang, esPath),
    languages: { 'es-MX': esPath, en: href('en', esPath), 'x-default': esPath },
  };
}

/** Elige el texto del idioma: `pick(lang, { es: '…', en: '…' })`. */
export function pick<T>(lang: Lang, v: { es: T; en: T }): T {
  return v[lang];
}

/** El idioma de los `params` de una página (ya validado por el layout; 'es' por si acaso). */
export function langOf(params: { lang: string }): Lang {
  return isLang(params.lang) ? params.lang : 'es';
}

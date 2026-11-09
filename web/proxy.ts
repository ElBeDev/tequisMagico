import { NextResponse, type NextRequest } from 'next/server';
import { enToEs, href } from './lib/i18n';
import { PLACE_REDIRECTS } from './lib/redirects';

// Las páginas viven en app/[lang]/ con carpetas en español. El español se sirve sin prefijo
// (las URLs de siempre): /lugares → /es/lugares por dentro. El inglés llega con /en y rutas en
// inglés: /en/places/food-and-drink → /en/lugares/gastronomia por dentro. La URL que ve la
// persona no cambia (es un rewrite, no una redirección).
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const moved = currentPath(pathname, search);
  if (moved) return NextResponse.redirect(new URL(moved, request.url), 308);

  const url = request.nextUrl.clone();

  // Solo llega aquí /es/opengraph-image (el og:image de las páginas en español).
  if (pathname === '/es' || pathname.startsWith('/es/')) return NextResponse.next();

  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const internal = enToEs(pathname.slice(3));
    if (internal === pathname.slice(3) || (internal === '/' && pathname === '/en')) return NextResponse.next();
    url.pathname = `/en${internal === '/' ? '' : internal}`;
    return NextResponse.rewrite(url);
  }

  url.pathname = `/es${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

/** URLs que Google ya conoce y cambiaron → la URL actual, en una sola redirección. */
function currentPath(pathname: string, search: string): string | null {
  let path = pathname;
  let query = search;

  if (path === '/es' || path.startsWith('/es/')) {
    // /es/... es la ruta interna del español, pero también respondía por fuera: un duplicado de
    // cada página (los filtros la arrastraron del 2 al 5 nov 2026). El og:image sí va con /es.
    if (path.startsWith('/es/opengraph-image')) return null;
    path = path.slice(3) || '/';
  } else if (path === '/en/es' || path.startsWith('/en/es/')) {
    // Del 2 al 5 nov 2026 el botón EN de las páginas en español llevaba a /en/es/... (404).
    path = href('en', path.slice(6) || '/');
    query = query.replace('?tipo=', '?type=');
  }

  const place = path.match(/^(\/lugar|\/en\/place)\/([^/]+)$/);
  if (place && PLACE_REDIRECTS[place[2]]) path = `${place[1]}/${PLACE_REDIRECTS[place[2]]}`;

  return path === pathname && query === search ? null : path + query;
}

export const config = {
  // Fuera: internos de Next y Vercel, y cualquier archivo con extensión (sitemap.xml,
  // robots.txt, íconos, el worker de MapLibre).
  matcher: ['/((?!_next/|_vercel/|api/|.*\\.[a-z0-9]+$).*)'],
};

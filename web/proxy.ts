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

  // /es/... NO se redirige: en el servidor, el rewrite de abajo sale como http://localhost:3000/es/...
  // y Next lo trata como externo (se pide a sí mismo esa URL, que pasa otra vez por aquí). Redirigir
  // /es → / ahí hace un ciclo infinito en todo el español (pasó el 9 nov 2026). Su canónica basta.
  if (path === '/en/es' || path.startsWith('/en/es/')) {
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

import { NextResponse, type NextRequest } from 'next/server';
import { enToEs } from './lib/i18n';

// Las páginas viven en app/[lang]/ con carpetas en español. El español se sirve sin prefijo
// (las URLs de siempre): /lugares → /es/lugares por dentro. El inglés llega con /en y rutas en
// inglés: /en/places/food-and-drink → /en/lugares/gastronomia por dentro. La URL que ve la
// persona no cambia (es un rewrite, no una redirección).
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
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

export const config = {
  // Fuera: internos de Next y Vercel, y cualquier archivo con extensión (sitemap.xml,
  // robots.txt, íconos, el worker de MapLibre).
  matcher: ['/((?!_next/|_vercel/|api/|.*\\.[a-z0-9]+$).*)'],
};

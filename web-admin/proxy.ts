import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ADMIN_SESSION_COOKIE, expectedSessionToken } from '@/lib/adminAuth';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // El login debe quedar accesible sin sesión.
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // La app iOS lee /api/places y /api/events sin login — solo se protegen las escrituras.
  const isApiWrite =
    (pathname.startsWith('/api/places') || pathname.startsWith('/api/events')) &&
    request.method !== 'GET';
  const isProtectedPath =
    pathname.startsWith('/admin') || pathname.startsWith('/api/upload') || isApiWrite;

  if (!isProtectedPath) {
    return NextResponse.next();
  }

  const expected = await expectedSessionToken();
  const session = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const authenticated = !!expected && session === expected;

  if (authenticated) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/api/')) {
    return NextResponse.json({ success: false, error: 'No autorizado' }, { status: 401 });
  }

  return NextResponse.redirect(new URL('/admin/login', request.url));
}

export const config = {
  matcher: ['/admin/:path*', '/api/places/:path*', '/api/events/:path*', '/api/upload/:path*'],
};

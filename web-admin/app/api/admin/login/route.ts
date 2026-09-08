import { NextResponse } from 'next/server';
import { ADMIN_SESSION_COOKIE, hashPassword } from '@/lib/adminAuth';

export async function POST(request: Request) {
  const { password } = await request.json();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || typeof password !== 'string' || password !== adminPassword) {
    return NextResponse.json({ success: false, error: 'Contraseña incorrecta' }, { status: 401 });
  }

  const token = await hashPassword(adminPassword);
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}

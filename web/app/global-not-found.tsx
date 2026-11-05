import type { Metadata } from 'next';
import Link from 'next/link';
import { Gilda_Display, Outfit } from 'next/font/google';
import { BalloonMark } from '@/components/Logo';
import './globals.css';

// 404 de URLs que no coinciden con ninguna ruta (con el layout en app/[lang] no hay un layout
// raíz desde el cual armarla). Sin header ni datos: solo el aviso en los dos idiomas.
const outfit = Outfit({ variable: '--font-outfit', subsets: ['latin'] });
const gilda = Gilda_Display({ variable: '--font-gilda', subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Página no encontrada · Page not found',
};

export default function GlobalNotFound() {
  return (
    <html lang="es-MX" className={`${outfit.variable} ${gilda.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col items-center justify-center bg-bg px-5 text-center font-sans text-ink">
        <BalloonMark className="mb-8 h-40 w-[120px]" />
        <h1 className="heading">No encontramos esta página</h1>
        <p className="mt-3 text-muted" lang="en">We couldn’t find this page.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn">Ir al inicio</Link>
          <Link href="/en" lang="en" className="btn-outline">Go to the English site</Link>
        </div>
      </body>
    </html>
  );
}

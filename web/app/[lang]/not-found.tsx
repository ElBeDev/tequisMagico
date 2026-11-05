'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BalloonMark } from '@/components/Logo';

// not-found no recibe `params`: el idioma sale de la URL visible.
export default function NotFound() {
  const en = /^\/en(\/|$)/.test(usePathname() ?? '');
  return (
    <div className="mx-auto max-w-xl px-5 pb-10 pt-44 text-center">
      <BalloonMark className="mx-auto mb-8 h-40 w-[120px]" />
      <h1 className="heading">{en ? 'We couldn’t find this page' : 'No encontramos esta página'}</h1>
      <p className="mt-3 text-muted">{en ? 'The place or event may no longer be listed.' : 'Puede que el lugar o evento ya no esté publicado.'}</p>
      <Link href={en ? '/en/places' : '/lugares'} className="btn-outline mt-8">
        {en ? 'See all places' : 'Ver todos los lugares'}
      </Link>
    </div>
  );
}

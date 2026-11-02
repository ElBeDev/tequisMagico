import type { ReactNode } from 'react';
import type { Photo } from '@/lib/photos';

/** Portada con foto para las páginas editoriales (el header va transparente encima). */
export function PageHero({ photo, alt, eyebrow, title, serif }: { photo: Photo; alt: string; eyebrow: string; title: string; serif: string }) {
  return (
    <section className="relative flex h-[78svh] min-h-[480px] items-end overflow-hidden bg-black text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={alt} referrerPolicy="no-referrer" fetchPriority="high" className="kenburns absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/65" />
      <div className="relative mx-auto w-full max-w-[1140px] px-5 pb-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
          {title}
          <span className="mt-2 block font-display text-[2.6rem] font-normal leading-tight sm:text-6xl">{serif}</span>
        </h1>
      </div>
    </section>
  );
}

/** Bloque de texto e imagen lado a lado, alternando el lado. */
export function Feature({
  id,
  photo,
  alt,
  eyebrow,
  title,
  serif,
  reverse = false,
  children,
}: {
  id?: string;
  photo: Photo;
  alt: string;
  eyebrow: string;
  title: string;
  serif?: string;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto grid max-w-[1140px] scroll-mt-24 items-center gap-12 px-5 py-20 md:grid-cols-2 md:gap-16">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={alt} loading="lazy" referrerPolicy="no-referrer" className={`aspect-[4/5] w-full object-cover md:aspect-[4/5] ${reverse ? 'md:order-2' : ''}`} />
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-[clamp(1.9rem,3vw,2.4rem)] font-bold leading-tight">
          {title}
          {serif && <span className="mt-2 block font-display font-normal">{serif}</span>}
        </h2>
        <div className="mt-6 space-y-4 text-[17px] leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

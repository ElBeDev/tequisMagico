import type { ReactNode } from 'react';
import type { Photo } from '@/lib/photos';
import { ArchPhoto } from './Frame';
import { photoAttrs } from '@/lib/images';

/** Portada con foto para las páginas editoriales (el header va transparente encima). */
export function PageHero({ photo, alt, title, lead }: { photo: Photo; alt: string; title: string; lead?: string }) {
  return (
    <section className="relative flex h-[82svh] min-h-[520px] items-end overflow-hidden bg-black text-white">
      <div data-parallax="0.4" className="absolute inset-0 -top-[10%] h-[120%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img {...photoAttrs(photo.src)} alt={alt} fetchPriority="high" className="kenburns size-full object-cover" />
      </div>
      {/* Velo neutro solo bajo el texto: la única degradación que se permite. */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/65 to-transparent" />
      <div className="frame relative pb-14 sm:pb-20">
        <h1 data-split="lines" data-delay="0.35" className="display max-w-[12ch]">{title}</h1>
        {lead && <p data-reveal="up" className="mt-6 max-w-[40ch] text-lead leading-snug text-white/90">{lead}</p>}
      </div>
    </section>
  );
}

/** Bloque de texto e imagen lado a lado, alternando el lado. */
export function Feature({
  id,
  photo,
  alt,
  title,
  reverse = false,
  children,
}: {
  id?: string;
  photo: Photo;
  alt: string;
  title: string;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className="frame grid scroll-mt-28 grid-cols-1 items-center gap-12 py-24 md:grid-cols-2 md:gap-20">
      <ArchPhoto
        src={photo.src}
        alt={alt}
        ratio="aspect-[4/5]"
        className={`w-full max-w-[560px] ${reverse ? 'md:order-2 md:justify-self-end' : ''}`}
      />
      <div>
        <h2 data-split="lines" className="heading max-w-[14ch]">{title}</h2>
        <div data-reveal="stagger" className="mt-8 max-w-[56ch] space-y-4">{children}</div>
      </div>
    </section>
  );
}

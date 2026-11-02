'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { BalloonMark } from './Logo';

export type Activity = { title: string; image: string; detail: string; cta: string; href: string };

/** Banda verde: foto grande a la izquierda y la actividad en turno a la derecha, con flechas. */
export default function Activities({ items }: { items: Activity[] }) {
  const [index, setIndex] = useState(0);
  const go = (delta: number) => setIndex((i) => (i + delta + items.length) % items.length);
  const item = items[index];
  if (!item) return null;

  return (
    <section className="on-dark overflow-hidden bg-green text-white" aria-roledescription="carrusel" aria-label="Experiencias">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[640px]">
          {items.map((a, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={a.image + i}
              src={a.image}
              alt={i === index ? a.title : ''}
              loading="lazy"
              referrerPolicy="no-referrer"
              className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>

        <div className="relative flex flex-col items-center justify-center px-6 py-16 text-center sm:px-16">
          <BalloonMark className="pointer-events-none absolute size-[420px] text-white/[0.06]" />
          <p className="eyebrow relative">Nuestras experiencias</p>
          <h2 key={item.title} className="fade-up relative mt-3 font-display text-5xl sm:text-6xl">{item.title}</h2>
          <p key={item.detail} className="fade-up relative mt-6 max-w-md text-[17px] leading-relaxed text-white/90">{item.detail}</p>
          <Link href={item.href} className="btn-outline relative mt-8">
            {item.cta}
          </Link>
          <Link href="/lugares/experiencias" className="relative mt-10 text-[15px] font-semibold hover:underline">
            Todas las experiencias →
          </Link>

          <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 sm:right-10">
            <button type="button" onClick={() => go(-1)} aria-label="Anterior" className="p-1 hover:opacity-70">
              <ArrowUp className="size-5" aria-hidden />
            </button>
            <div className="flex flex-col gap-1.5" aria-hidden>
              {items.map((a, i) => (
                <span key={a.title} className={`w-[2px] transition-all ${i === index ? 'h-8 bg-white' : 'h-4 bg-white/35'}`} />
              ))}
            </div>
            <button type="button" onClick={() => go(1)} aria-label="Siguiente" className="p-1 hover:opacity-70">
              <ArrowDown className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

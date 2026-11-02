'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BalloonMark } from './Logo';

export type HeroSlide = { src: string; alt: string; promise: string };

/**
 * Portada a pantalla completa: fotos que se alternan con un acercamiento lento y la frase
 * "La promesa de…" que cambia con cada una (en la referencia es un video).
 */
export default function Hero({
  slides,
  card,
}: {
  slides: HeroSlide[];
  card?: { eyebrow: string; title: string; text: string; href: string };
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-black text-white">
      {slides.map((s, i) => (
        <div key={s.src} className={`absolute inset-0 transition-opacity duration-[1500ms] ${i === index ? 'opacity-100' : 'opacity-0'}`} aria-hidden={i !== index}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.src}
            alt={s.alt}
            referrerPolicy="no-referrer"
            fetchPriority={i === 0 ? 'high' : 'low'}
            className={`size-full object-cover ${i === index ? 'kenburns' : ''}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/60" />

      <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1440px] flex-col gap-8 px-5 pb-10 sm:px-14 sm:pb-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex items-end gap-5">
          <BalloonMark className="hidden size-28 shrink-0 text-white/60 sm:block" />
          <p key={index} className="fade-up" aria-live="polite">
            <span className="block text-2xl font-bold sm:text-[2rem]">La promesa de</span>
            <span className="block font-display text-[2.2rem] leading-tight sm:text-[3.4rem]">{slides[index]?.promise}</span>
          </p>
        </div>

        {card && (
          <Link href={card.href} className="block w-full max-w-[260px] border border-white/80 p-6 transition hover:bg-white/10">
            <p className="eyebrow !text-[12px]">{card.eyebrow}</p>
            <p className="mt-1.5 font-display text-xl leading-snug">{card.title}</p>
            <p className="mt-1 text-[15px] text-white/85">{card.text}</p>
          </Link>
        )}
      </div>

      <a href="#bienvenidos" className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] text-white/80 hover:text-white lg:block">
        Explora
      </a>
    </section>
  );
}

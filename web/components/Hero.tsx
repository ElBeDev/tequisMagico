'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BalloonMark } from './Logo';
import { EASE, SplitText, gsap, prefersReducedMotion, useGSAP } from '@/lib/motion';

export type HeroSlide = { src: string; alt: string; promise: string };

const SLIDE_SECONDS = 6.5;

/**
 * Portada a pantalla completa. Cada foto entra como cortina con un acercamiento lento,
 * la frase "La promesa de…" se arma letra por letra, abajo corre la barra de la foto
 * en turno, y al bajar la foto se queda atrás (parallax) mientras el texto se desvanece.
 */
export default function Hero({
  slides,
  card,
}: {
  slides: HeroSlide[];
  card?: { eyebrow: string; title: string; text: string; href: string };
}) {
  const [index, setIndex] = useState(0);
  const root = useRef<HTMLElement>(null);
  const reduced = useRef(false);

  // Intro + parallax de scroll (una sola vez).
  useGSAP(
    () => {
      reduced.current = prefersReducedMotion();
      if (reduced.current) return;
      gsap.timeline({ delay: 0.15 })
        .from('[data-hero-slide="0"] img', { scale: 1.3, duration: 2.4, ease: 'expo.out' })
        .from('[data-hero-mark]', { scale: 0.6, rotate: -20, autoAlpha: 0, duration: 1.2, ease: EASE }, 0.5)
        .from('[data-hero-lead]', { yPercent: 110, duration: 1, ease: 'expo.out' }, 0.6)
        .from('[data-hero-card], [data-hero-ui]', { y: 30, autoAlpha: 0, duration: 1, ease: EASE, stagger: 0.1 }, 1);

      gsap.to('[data-hero-media]', {
        yPercent: 22, scale: 1.08, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('[data-hero-content]', {
        yPercent: -40, autoAlpha: 0, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: '60% top', scrub: true },
      });
    },
    { scope: root },
  );

  // Cambio de foto: la nueva entra como cortina encima de la anterior (las demás quedan
  // abajo), la frase se arma letra por letra y la barra de progreso dispara la siguiente.
  const prev = useRef<number | null>(null);
  useEffect(() => {
    const el = root.current!;
    const slide = el.querySelector<HTMLElement>(`[data-hero-slide="${index}"]`)!;
    el.querySelectorAll<HTMLElement>('[data-hero-slide]').forEach((s) => {
      s.style.zIndex = s === slide ? '2' : s.dataset.heroSlide === String(prev.current) ? '1' : '0';
    });
    const next = () => setIndex((i) => (i + 1) % slides.length);
    const first = prev.current === null;
    prev.current = index;

    if (reduced.current) {
      gsap.set(slide, { clipPath: 'inset(0% 0% 0% 0%)' });
      const t = setTimeout(next, SLIDE_SECONDS * 1000);
      return () => clearTimeout(t);
    }

    const tweens: gsap.core.Animation[] = [];
    if (!first) {
      tweens.push(
        gsap.fromTo(slide, { clipPath: 'inset(0% 0% 0% 100%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut' }),
        gsap.fromTo(slide.querySelector('img'), { scale: 1.25 }, { scale: 1.05, duration: 2.6, ease: 'expo.out' }),
      );
    }
    const split = SplitText.create(el.querySelector('[data-hero-promise]'), {
      type: 'chars,words',
      mask: 'chars',
      onSplit: (self) => gsap.from(self.chars, { yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.022, delay: first ? 0.75 : 0.45 }),
    });
    tweens.push(gsap.fromTo(el.querySelector('[data-hero-progress]'), { scaleX: 0 }, { scaleX: 1, duration: SLIDE_SECONDS, ease: 'none', onComplete: next }));
    return () => {
      tweens.forEach((t) => t.progress(1, true).kill()); // true: sin disparar onComplete (no avanzar de foto)
      split.revert();
    };
  }, [index, slides.length]);

  return (
    <section ref={root} className="relative h-[100svh] min-h-[560px] overflow-hidden bg-black text-white">
      <div data-hero-media className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.src}
            data-hero-slide={i}
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)' }}
            aria-hidden={i !== index}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={s.alt} referrerPolicy="no-referrer" fetchPriority={i === 0 ? 'high' : 'low'} className="size-full scale-105 object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/45 via-black/10 to-black/65" />
      </div>

      <div data-hero-content className="absolute inset-x-0 bottom-0 z-20 mx-auto flex max-w-[1440px] flex-col gap-8 px-5 pb-12 sm:px-14 sm:pb-16 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex items-end gap-5">
          <span data-hero-mark className="hidden sm:block">
            <BalloonMark className="size-28 shrink-0 text-white/60" />
          </span>
          <p aria-live="polite">
            <span className="block overflow-hidden">
              <span data-hero-lead className="block text-2xl font-bold sm:text-[2rem]">La promesa de</span>
            </span>
            <span key={index} data-hero-promise className="block font-display text-[2.2rem] leading-tight sm:text-[3.6rem]">
              {slides[index]?.promise}
            </span>
          </p>
        </div>

        {card && (
          <Link
            href={card.href}
            data-hero-card
            className="group block w-full max-w-[270px] border border-white/80 p-6 backdrop-blur-[2px] transition-colors duration-500 hover:bg-white hover:text-ink"
          >
            <p className="eyebrow !text-[12px]">{card.eyebrow}</p>
            <p className="mt-1.5 font-display text-xl leading-snug">{card.title}</p>
            <p className="mt-1 text-[15px] opacity-85">{card.text}</p>
          </Link>
        )}
      </div>

      {/* Contador y barra de la foto en turno */}
      <div data-hero-ui className="absolute left-5 top-28 z-20 flex items-center gap-3 text-[12px] font-semibold tracking-[0.15em] sm:left-14 sm:top-32">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span className="relative h-px w-16 bg-white/35">
          <span data-hero-progress className="absolute inset-0 origin-left bg-white" />
        </span>
        <span className="text-white/60">{String(slides.length).padStart(2, '0')}</span>
      </div>

      <a href="#bienvenidos" data-hero-ui aria-label="Bajar a la bienvenida" className="absolute bottom-0 left-1/2 z-20 hidden h-12 w-px -translate-x-1/2 overflow-hidden bg-white/30 lg:block">
        <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_1.8s_ease-in-out_infinite] bg-white" />
      </a>
    </section>
  );
}

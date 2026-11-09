'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { EASE, SplitText, gsap, prefersReducedMotion, useGSAP } from '@/lib/motion';
import { photoAttrs } from '@/lib/images';

export type HeroSlide = { src: string; alt: string; promise: string };

const SLIDE_SECONDS = 6.5;

/**
 * Portada a pantalla completa. El nombre del pueblo es el h1, en grande; debajo, la frase "La
 * promesa de…" se arma letra por letra con cada foto, que entra como cortina con un acercamiento
 * lento. Las barras de abajo son el control de las fotos (la de turno se llena). Al bajar, la foto
 * se queda atrás (parallax) mientras el texto se desvanece.
 */
export default function Hero({
  title,
  lead,
  slides,
  actions,
  promisePrefix = 'La promesa de',
  photosLabel = 'Fotos de la portada',
  photoLabel = 'Foto',
}: {
  title: string;
  lead: string;
  slides: HeroSlide[];
  actions?: { label: string; href: string }[];
  promisePrefix?: string;
  photosLabel?: string;
  photoLabel?: string;
}) {
  const [index, setIndex] = useState(0);
  const root = useRef<HTMLElement>(null);
  const reduced = useRef(false);
  // Las fotos 2 en adelante se piden cuando ya cargó la primera (la segunda se ve a los 6.5 s). Si
  // van en el HTML, React las precarga todas y en celular compiten con la primera, que es la que se ve.
  const [restReady, setRestReady] = useState(false);
  const firstImg = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (firstImg.current?.complete) setRestReady(true); // ya había cargado antes de hidratar
  }, []);

  // Intro + parallax de scroll (una sola vez).
  useGSAP(
    () => {
      reduced.current = prefersReducedMotion();
      if (reduced.current) return;
      // El título y el texto son el LCP de la portada: entran solo con movimiento, sin ocultarse
      // (ni opacidad 0 ni recorte completo). Si se ocultan, Chrome no cuenta su pintado hasta que
      // carga y corre este JS, y en celular el LCP pasaba de 5 s.
      gsap.timeline({ delay: 0.15 })
        .from('[data-hero-slide="0"] img', { scale: 1.3, duration: 2.4, ease: 'expo.out' })
        .from('[data-hero-title] > span', { yPercent: 40, duration: 1.3, ease: 'expo.out' }, 0.3)
        .from('[data-hero-lead]', { y: 24, duration: 1, ease: EASE }, 0.7)
        .from('[data-hero-ui], [data-hero-action]', { y: 24, autoAlpha: 0, duration: 1, ease: EASE, stagger: 0.08 }, 0.9);

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
      gsap.set(el.querySelectorAll('[data-hero-progress]'), { scaleX: 0 });
      gsap.set(el.querySelector(`[data-hero-progress="${index}"]`), { scaleX: 1 });
      const t = setTimeout(next, SLIDE_SECONDS * 1000);
      return () => clearTimeout(t);
    }

    const tweens: gsap.core.Animation[] = [];
    if (!first) {
      tweens.push(gsap.fromTo(slide, { clipPath: 'inset(0% 0% 0% 100%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut' }));
      // Puede no estar todavía si tocan una barra antes de que cargue la primera foto.
      const img = slide.querySelector('img');
      if (img) tweens.push(gsap.fromTo(img, { scale: 1.25 }, { scale: 1.05, duration: 2.6, ease: 'expo.out' }));
    }
    gsap.set(el.querySelectorAll('[data-hero-progress]'), { scaleX: 0 });
    const split = SplitText.create(el.querySelector('[data-hero-promise]'), {
      type: 'chars,words',
      mask: 'chars',
      aria: 'none', // el texto para lectores de pantalla va en el <span className="sr-only"> de al lado
      onSplit: (self) => gsap.from(self.chars, { yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.022, delay: first ? 0.75 : 0.45 }),
    });
    tweens.push(gsap.fromTo(el.querySelector(`[data-hero-progress="${index}"]`), { scaleX: 0 }, { scaleX: 1, duration: SLIDE_SECONDS, ease: 'none', onComplete: next }));
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
            {i === 0 ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                ref={firstImg}
                {...photoAttrs(s.src)}
                alt={s.alt}
                fetchPriority="high"
                onLoad={() => setRestReady(true)}
                onError={() => setRestReady(true)}
                className="size-full scale-105 object-cover"
              />
            ) : (
              restReady && (
                // eslint-disable-next-line @next/next/no-img-element
                <img {...photoAttrs(s.src)} alt={s.alt} fetchPriority="low" className="size-full scale-105 object-cover" />
              )
            )}
          </div>
        ))}
        {/* Velo neutro: arriba para el header, abajo para el texto. */}
        <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-black/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-[70%] bg-gradient-to-t from-black/75 to-transparent" />
      </div>

      <div data-hero-content className="frame absolute inset-x-0 bottom-0 z-20 pb-10 sm:pb-14">
        <h1 data-hero-title className="display overflow-hidden pb-[0.08em] text-[clamp(3rem,14vw,11rem)]!">
          <span className="block">{title}</span>
        </h1>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p data-hero-lead aria-live="polite" className="max-w-[34ch] text-lead leading-snug">
            {lead} {promisePrefix}{' '}
            <span className="sr-only">{slides[index]?.promise}</span>
            <span key={index} data-hero-promise aria-hidden className="inline-block font-medium">
              {slides[index]?.promise}
            </span>
            .
          </p>
          {actions && actions.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {actions.map((a, i) => (
                <Link
                  key={a.href}
                  href={a.href}
                  data-hero-action
                  className={`rounded-full px-6 py-3.5 font-medium transition-colors duration-300 ${
                    i === 0 ? 'bg-white text-ink hover:bg-ochre' : 'bg-white/15 hover:bg-white hover:text-ink'
                  }`}
                >
                  {a.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Una barra por foto: se llena la de turno y cualquiera lleva a su foto. */}
        <div data-hero-ui className="mt-10 flex gap-2" role="group" aria-label={photosLabel}>
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${photoLabel} ${i + 1}: ${s.alt}`}
              aria-current={i === index}
              className="group/bar relative h-6 flex-1 sm:max-w-24"
            >
              <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/30 transition-colors group-hover/bar:bg-white/50">
                <span data-hero-progress={i} className="absolute inset-0 origin-left scale-x-0 bg-white" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { ScrollTrigger, SplitText, gsap, isDesktop, prefersReducedMotion, useGSAP } from '@/lib/motion';
import { photoAttrs } from '@/lib/images';

export type Activity = { title: string; image: string; detail: string; cta: string; href: string };

/**
 * Banda verde de experiencias. En escritorio la sección se queda fija y el scroll va
 * pasando de una actividad a otra (foto que entra como cortina, título letra por letra);
 * las flechas llevan a la posición de scroll de cada una. En el celular, flechas y deslizar.
 */
export default function Activities({ items }: { items: Activity[] }) {
  const [index, setIndex] = useState(0);
  const root = useRef<HTMLElement>(null);
  const pin = useRef<ScrollTrigger | null>(null);
  const shown = useRef(0);
  const touchX = useRef<number | null>(null);

  // Fijar la sección y mapear el avance del scroll a la actividad en turno.
  useGSAP(
    () => {
      if (!isDesktop() || prefersReducedMotion() || items.length < 2) return;
      pin.current = ScrollTrigger.create({
        trigger: root.current,
        start: 'top top',
        end: () => `+=${(items.length - 1) * window.innerHeight * 0.75}`,
        pin: true,
        anticipatePin: 1,
        snap: { snapTo: 1 / (items.length - 1), duration: { min: 0.2, max: 0.6 }, delay: 0.05, ease: 'power2.inOut' },
        onUpdate: (self) => setIndex(Math.round(self.progress * (items.length - 1))),
      });
    },
    { scope: root },
  );

  // Transición al cambiar de actividad.
  useGSAP(
    () => {
      const from = shown.current;
      shown.current = index;
      if (from === index || prefersReducedMotion()) return;
      const el = root.current!;
      const img = el.querySelector<HTMLElement>(`[data-act-img="${index}"]`)!;
      el.querySelectorAll<HTMLElement>('[data-act-img]').forEach((n) => {
        n.style.zIndex = n === img ? '2' : n.dataset.actImg === String(from) ? '1' : '0';
      });
      const down = index > from;
      gsap.fromTo(img, { clipPath: down ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'expo.inOut' });
      gsap.fromTo(img.querySelector('img'), { scale: 1.3, yPercent: down ? 8 : -8 }, { scale: 1, yPercent: 0, duration: 1.5, ease: 'expo.out' });
      SplitText.create(el.querySelector('[data-act-title]'), {
        type: 'chars',
        mask: 'chars',
        onSplit: (self) => gsap.from(self.chars, { yPercent: down ? 110 : -110, duration: 0.9, ease: 'expo.out', stagger: 0.025 }),
      });
      gsap.from(el.querySelectorAll('[data-act-fade]'), { y: down ? 24 : -24, autoAlpha: 0, duration: 0.8, ease: 'power3.out', stagger: 0.06, delay: 0.15 });
    },
    { scope: root, dependencies: [index] },
  );

  const go = (delta: number) => {
    const target = Math.max(0, Math.min(items.length - 1, index + delta));
    const st = pin.current;
    if (st && window.__lenis) {
      window.__lenis.scrollTo(st.start + (target / (items.length - 1)) * (st.end - st.start), { duration: 1.1 });
    } else {
      setIndex((target + items.length) % items.length);
    }
  };

  const item = items[index];
  if (!item) return null;

  return (
    <section
      ref={root}
      data-cursor-dark
      className="on-dark relative overflow-hidden bg-green text-white"
      aria-roledescription="carrusel"
      aria-label="Experiencias"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) setIndex((i) => (i + (dx < 0 ? 1 : -1) + items.length) % items.length);
        touchX.current = null;
      }}
    >
      <div className="grid lg:h-screen lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full">
          {items.map((a, i) => (
            <div key={a.title} data-act-img={i} className="absolute inset-0 overflow-hidden" style={{ zIndex: i === 0 ? 2 : 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img {...photoAttrs(a.image, '(min-width: 1024px) 50vw, 100vw')} alt={i === index ? a.title : ''} loading="lazy" className="size-full object-cover" />
            </div>
          ))}
        </div>

        <div className="relative flex flex-col justify-center px-[var(--margin)] py-16 pr-20 sm:pr-28 lg:pl-20">
          <h2 key={item.title} data-act-title className="relative font-display text-[clamp(3rem,6.6vw,7rem)] leading-[0.95] tracking-[-0.03em]">{item.title}</h2>
          <p key={item.detail} data-act-fade className="relative mt-8 max-w-[38ch] text-lead leading-snug">{item.detail}</p>
          <span data-act-fade className="relative mt-10 flex flex-wrap items-center gap-6">
            <Link href={item.href} className="btn">{item.cta}</Link>
            <Link href="/lugares/experiencias" className="font-medium underline-offset-4 hover:underline">
              Todas las experiencias
            </Link>
          </span>

          <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 sm:right-10">
            <button type="button" onClick={() => go(-1)} aria-label="Anterior" className="p-1 transition hover:-translate-y-0.5 hover:opacity-70">
              <ArrowUp className="size-5" aria-hidden />
            </button>
            <div className="flex flex-col gap-2" aria-hidden>
              {items.map((a, i) => (
                <span key={a.title} className={`size-2 rounded-full transition-colors duration-500 ${i === index ? 'bg-white' : 'bg-white/30'}`} />
              ))}
            </div>
            <button type="button" onClick={() => go(1)} aria-label="Siguiente" className="p-1 transition hover:translate-y-0.5 hover:opacity-70">
              <ArrowDown className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap, isDesktop, useGSAP } from '@/lib/motion';

export type BigWord = { label: string; href: string; image: string; caption: string };

/**
 * Palabras gigantes en serif (el "Nature / Culture & patrimoine" de la referencia). Al pasar
 * el mouse, la palabra se rellena y una foto sigue al cursor; en el celular cada palabra
 * lleva su foto en miniatura.
 */
export default function BigWords({ items }: { items: BigWord[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const follow = useRef<{ x: (v: number) => void; y: (v: number) => void } | null>(null);
  const pointer = useRef({ x: 0, y: 0 });

  // Coloca la foto junto al cursor. Se llama al mover el mouse, al entrar a una palabra y al
  // hacer scroll: si la palabra pasa por debajo de un cursor quieto, igual queda bien puesta.
  const place = (clientX = pointer.current.x, clientY = pointer.current.y) => {
    pointer.current = { x: clientX, y: clientY };
    const box = root.current?.getBoundingClientRect();
    if (!box) return;
    follow.current?.x(clientX - box.left);
    follow.current?.y(clientY - box.top);
  };

  useGSAP(
    () => {
      if (!isDesktop()) return;
      const card = root.current!.querySelector<HTMLElement>('[data-follow]')!;
      follow.current = {
        x: gsap.quickTo(card, 'x', { duration: 0.6, ease: 'power3' }),
        y: gsap.quickTo(card, 'y', { duration: 0.6, ease: 'power3' }),
      };
      const onScroll = () => place();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    },
    { scope: root },
  );

  useGSAP(
    () => {
      const card = root.current!.querySelector<HTMLElement>('[data-follow]');
      if (!card) return;
      gsap.to(card, { autoAlpha: active === null ? 0 : 1, scale: active === null ? 0.85 : 1, rotate: active === null ? -4 : 0, duration: 0.45, ease: 'power3.out' });
      if (active !== null) {
        const img = card.querySelector(`[data-follow-img="${active}"]`);
        gsap.fromTo(img, { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.2 }, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 0.7, ease: 'expo.out' });
        card.querySelectorAll<HTMLElement>('[data-follow-img]').forEach((el) => (el.style.zIndex = el === img ? '2' : '1'));
      }
    },
    { scope: root, dependencies: [active] },
  );

  return (
    <div
      ref={root}
      className="relative"
      onPointerMove={(e) => place(e.clientX, e.clientY)}
      onPointerLeave={() => setActive(null)}
    >
      <ul data-reveal="stagger">
        {items.map((w, i) => (
          <li key={w.label}>
            <Link
              href={w.href}
              onPointerEnter={(e) => {
                place(e.clientX, e.clientY);
                setActive(i);
              }}
              data-cursor="Ver"
              className={`group flex items-center gap-5 py-3 transition-colors duration-500 sm:py-4 ${active !== null && active !== i ? 'text-ink/25' : 'text-ink'} hover:text-ink`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={w.image} alt="" loading="lazy" referrerPolicy="no-referrer" className="h-20 w-16 shrink-0 rounded-t-full object-cover lg:hidden" />
              <span className="font-display text-[clamp(2.6rem,8.5vw,8rem)] leading-[0.95] tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-4">
                {w.label}
              </span>
              <span className="ml-auto hidden max-w-[22ch] text-right leading-snug lg:block">{w.caption}</span>
              <ArrowUpRight className="size-8 shrink-0 -translate-x-3 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100" strokeWidth={1.2} aria-hidden />
            </Link>
          </li>
        ))}
      </ul>

      <div
        data-follow
        className="pointer-events-none invisible absolute left-0 top-0 z-10 -ml-[150px] -mt-[190px] hidden h-[380px] w-[300px] overflow-hidden rounded-t-[999px] lg:block"
        aria-hidden
      >
        {items.map((w, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={w.label} data-follow-img={i} src={w.image} alt="" referrerPolicy="no-referrer" className="absolute inset-0 size-full object-cover" />
        ))}
      </div>
    </div>
  );
}

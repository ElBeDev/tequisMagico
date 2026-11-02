'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, isDesktop, prefersReducedMotion } from '@/lib/motion';

/**
 * Cursor propio (solo escritorio con mouse): un punto que sigue al puntero y, sobre un
 * elemento con data-cursor="Ver" (o "Arrastra", "Explorar"…), se vuelve un círculo con esa
 * etiqueta. Sobre links y botones sin etiqueta solo crece un poco.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (!isDesktop() || prefersReducedMotion()) return;
    const el = dot.current!;
    el.classList.replace('hidden', 'cursor');
    document.documentElement.classList.add('has-cursor');
    const xTo = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3' });

    const onMove = (e: PointerEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      const target = (e.target as Element | null)?.closest<HTMLElement>('[data-cursor], a, button, [role="button"]');
      const text = target?.dataset.cursor ?? '';
      setLabel(text);
      el.dataset.state = text ? 'label' : target ? 'link' : '';
      el.dataset.dark = target?.closest('[data-cursor-dark]') ? '1' : '';
    };
    const onLeave = () => gsap.to(el, { autoAlpha: 0, duration: 0.2 });
    const onEnter = () => gsap.to(el, { autoAlpha: 1, duration: 0.2 });
    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerleave', onLeave);
    document.addEventListener('pointerenter', onEnter);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('pointerenter', onEnter);
      document.documentElement.classList.remove('has-cursor');
      el.classList.replace('cursor', 'hidden');
    };
  }, []);

  // Siempre el mismo nodo (el efecto guarda la referencia); solo se muestra en escritorio.
  return (
    <div ref={dot} className="hidden" aria-hidden>
      <span>{label}</span>
    </div>
  );
}

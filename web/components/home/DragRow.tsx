'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/motion';

/**
 * Fila horizontal que se arrastra con el mouse (con inercia), además del scroll nativo en
 * touch y trackpad. Mientras se arrastra, las tarjetas se inclinan un poco según la velocidad.
 */
export default function DragRow({ children, cursor = 'Arrastra', className = '' }: { children: ReactNode; cursor?: string; className?: string }) {
  const row = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = row.current!;
    let down = false;
    let moved = false;
    let startX = 0;
    let startLeft = 0;
    let lastX = 0;
    let velocity = 0;
    let lastT = 0;
    const skew = gsap.quickTo(el.children, 'skewX', { duration: 0.5, ease: 'power3' });

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      down = true;
      moved = false;
      startX = lastX = e.clientX;
      startLeft = el.scrollLeft;
      lastT = performance.now();
      velocity = 0;
      gsap.killTweensOf(el);
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = startLeft - dx;
      const now = performance.now();
      velocity = (e.clientX - lastX) / Math.max(1, now - lastT);
      lastX = e.clientX;
      lastT = now;
      if (!prefersReducedMotion()) skew(gsap.utils.clamp(-6, 6, -velocity * 4));
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      skew(0);
      if (Math.abs(velocity) > 0.05) gsap.to(el, { scrollLeft: el.scrollLeft - velocity * 420, duration: 1.1, ease: 'power3.out' });
    };
    // Si fue arrastre, que no cuente como clic en la tarjeta.
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };
    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    el.addEventListener('click', onClick, true);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      el.removeEventListener('click', onClick, true);
    };
  }, []);

  return (
    <div
      ref={row}
      data-cursor={cursor}
      className={`no-scrollbar flex select-none overflow-x-auto [&_img]:pointer-events-none ${className}`}
      onDragStart={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
}

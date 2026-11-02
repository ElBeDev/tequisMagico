'use client';

import { useRef, type ReactNode } from 'react';
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/motion';

/**
 * Cambia el color de fondo de la sección mientras se sale de ella por abajo (hueso → verde
 * salvia), para que la llegada a la banda verde de experiencias no sea un corte seco.
 */
export default function ColorShift({ to, children, className = '' }: { to: string; children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(root.current, { backgroundColor: 'rgba(238,237,234,0)' }, {
        backgroundColor: to, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'bottom 95%', end: 'bottom 35%', scrub: true },
      });
    },
    { scope: root },
  );
  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}

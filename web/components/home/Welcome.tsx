'use client';

import { useRef } from 'react';
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/motion';

/**
 * Bienvenida: la foto entra casi a pantalla completa y se va encogiendo hasta quedar
 * enmarcada al centro mientras bajas (como el video que se achica en la referencia), y la
 * palabra gigante "Bienvenidos" se desliza de lado.
 */
export default function Welcome({ image, alt }: { image: string; alt: string }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const frame = root.current!.querySelector<HTMLElement>('[data-welcome-frame]')!;
      const clip = frame.querySelector<HTMLElement>('[data-welcome-clip]')!;
      const grow = () => Math.max(1, Math.min(window.innerWidth / frame.offsetWidth, 2.6));
      const st = { trigger: frame, start: 'top bottom', end: 'center 55%', scrub: 0.6, invalidateOnRefresh: true };
      // Al encogerse, el rectángulo se vuelve arco de portal.
      gsap.fromTo(frame, { scale: grow }, { scale: 1, ease: 'none', scrollTrigger: st });
      gsap.fromTo(clip, { borderRadius: '0px 0px 0px 0px' }, {
        borderRadius: () => `${frame.offsetWidth / 2}px ${frame.offsetWidth / 2}px 24px 24px`, ease: 'power1.in', scrollTrigger: st,
      });
      gsap.fromTo('[data-welcome-outline]', { autoAlpha: 0, x: 0, y: 0 }, {
        autoAlpha: 1, x: 18, y: 18, ease: 'none',
        scrollTrigger: { trigger: frame, start: 'center 70%', end: 'center 45%', scrub: true },
      });
      gsap.fromTo(frame.querySelector('img'), { scale: 1 }, {
        scale: 1.25, ease: 'none',
        scrollTrigger: { trigger: frame, start: 'top bottom', end: 'center 55%', scrub: 0.6 },
      });
      gsap.fromTo('[data-welcome-word]', { xPercent: 12 }, {
        xPercent: -12, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true },
      });
      gsap.fromTo('[data-welcome-line]', { scaleY: 0 }, {
        scaleY: 1, ease: 'none', transformOrigin: 'top',
        scrollTrigger: { trigger: root.current, start: 'top 85%', end: 'top 35%', scrub: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="bienvenidos" className="relative overflow-hidden px-5 pb-28 pt-28 text-center">
      <span data-welcome-line className="mx-auto mb-10 block h-24 w-px bg-ink" aria-hidden />
      <p
        aria-hidden
        data-welcome-word
        className="pointer-events-none absolute inset-x-0 top-40 select-none whitespace-nowrap font-display leading-none text-black/[0.07]"
        style={{ fontSize: 'clamp(5rem, 17vw, 16rem)' }}
      >
        Bienvenidos
      </p>
      <h1 data-split="chars" className="relative font-display text-[clamp(2.6rem,4.5vw,3.4rem)] leading-tight">Tequisquiapan</h1>
      <p data-reveal="up" className="eyebrow relative mt-3">Pueblo Mágico de Querétaro</p>
      <div data-welcome-frame className="relative z-10 mx-auto mt-12 aspect-[4/3] w-full max-w-[520px] origin-top">
        <span
          data-welcome-outline
          aria-hidden
          className="invisible absolute inset-0 rounded-t-[999px] rounded-b-[24px] border border-ink/35"
        />
        <div className="relative size-full drop-shadow-[0_34px_44px_rgba(31,26,23,0.3)]">
          <div data-welcome-clip className="size-full overflow-hidden rounded-t-[999px] rounded-b-[24px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={alt} referrerPolicy="no-referrer" loading="lazy" className="size-full object-cover" />
          </div>
        </div>
      </div>
      <div data-reveal="stagger" className="relative mx-auto mt-14 max-w-xl space-y-1 text-[17px] leading-relaxed">
        <p>Descubre un pueblo de calles empedradas y portales de cantera,</p>
        <p>donde el agua termal hizo nacer balnearios y el mimbre se vuelve arte.</p>
        <p>Aquí los viñedos y las queserías marcan el ritmo del fin de semana,</p>
        <p>y cada fiesta del año llena la plaza de música y color.</p>
        <p className="pt-2 font-semibold">Ven a caminarlo. Ven a probarlo.</p>
      </div>
    </section>
  );
}

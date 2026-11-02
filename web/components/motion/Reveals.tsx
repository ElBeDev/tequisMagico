'use client';

import { usePathname } from 'next/navigation';
import { EASE, ScrollTrigger, SplitText, gsap, prefersReducedMotion, useGSAP } from '@/lib/motion';

/**
 * Anima por atributos lo que traen las páginas (que siguen siendo Server Components):
 *
 *   data-reveal="up"       sube y aparece al entrar a pantalla (en lote, escalonado)
 *   data-reveal="fade"     solo aparece
 *   data-reveal="image"    se descubre de abajo hacia arriba y la foto se des-acerca
 *   data-reveal="stagger"  sus hijos aparecen uno tras otro
 *   data-split="lines|words|chars"  el texto entra por renglón/palabra/letra con máscara
 *   data-parallax="0.2"    se desplaza en vertical más lento/rápido que el scroll
 *   data-parallax-x="-0.2" igual pero en horizontal
 *   data-draw              los <path> dentro se dibujan al entrar
 *
 * El CSS los oculta antes del primer pintado solo si hay JS y movimiento (clase `motion`
 * en <html>, puesta por el script de layout.tsx); si algo falla, ese script los muestra.
 */
export default function Reveals() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const html = document.documentElement;
      if (prefersReducedMotion()) {
        html.classList.remove('motion');
        return;
      }
      const inView = (el: Element) => el.getBoundingClientRect().top < window.innerHeight * 0.92;
      const above = (el: Element) => el.getBoundingClientRect().bottom < 0;

      // Entrada suave del contenido nuevo al navegar.
      gsap.fromTo('main', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6, ease: 'power1.out' });

      // up / fade: en lotes, para que una cuadrícula entre escalonada.
      for (const kind of ['up', 'fade'] as const) {
        const els = gsap.utils.toArray<HTMLElement>(`[data-reveal="${kind}"]`);
        // `fade` solo toca la opacidad: si GSAP anima `y`, borra el `translate` de Tailwind del
        // elemento (p. ej. el contorno desplazado de los marcos en arco).
        const from = kind === 'up' ? { y: 50, autoAlpha: 0 } : { autoAlpha: 0 };
        const to = kind === 'up' ? { y: 0, autoAlpha: 1 } : { autoAlpha: 1 };
        els.filter(above).forEach((el) => gsap.set(el, to));
        ScrollTrigger.batch(els.filter((el) => !above(el)), {
          start: 'top 92%',
          once: true,
          onEnter: (batch) => gsap.fromTo(batch, from, { ...to, duration: 1.1, ease: EASE, stagger: 0.09, overwrite: true }),
        });
      }

      gsap.utils.toArray<HTMLElement>('[data-reveal="stagger"]').forEach((el) => {
        gsap.set(el, { autoAlpha: 1 });
        gsap.fromTo(el.children, { y: 40, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 1, ease: EASE, stagger: 0.08,
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal="image"]').forEach((el) => {
        const img = el.querySelector('img');
        gsap.set(el, { autoAlpha: 1 });
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
        tl.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.out' });
        if (img) tl.fromTo(img, { scale: 1.3 }, { scale: 1, duration: 1.8, ease: 'expo.out' }, 0);
      });

      gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
        const type = (el.dataset.split as 'lines' | 'words' | 'chars') || 'lines';
        gsap.set(el, { autoAlpha: 1 });
        SplitText.create(el, {
          type: type === 'lines' ? 'lines' : `lines,${type}`,
          mask: type,
          autoSplit: true,
          onSplit: (self) => {
            const parts = type === 'chars' ? self.chars : type === 'words' ? self.words : self.lines;
            const anim = { yPercent: 0, duration: type === 'chars' ? 1 : 1.2, ease: 'expo.out', stagger: type === 'chars' ? 0.025 : 0.08 };
            if (inView(el)) {
              return gsap.fromTo(parts, { yPercent: 110 }, { ...anim, delay: Number(el.dataset.delay ?? 0.1) });
            }
            return gsap.fromTo(parts, { yPercent: 110 }, { ...anim, scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = Number(el.dataset.parallax) || 0.2;
        gsap.fromTo(el, { yPercent: -speed * 50 }, {
          yPercent: speed * 50, ease: 'none',
          scrollTrigger: { trigger: el.parentElement ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-parallax-x]').forEach((el) => {
        const speed = Number(el.dataset.parallaxX) || 0.2;
        gsap.fromTo(el, { xPercent: -speed * 50 }, {
          xPercent: speed * 50, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });

      gsap.utils.toArray<SVGElement>('[data-draw]').forEach((el) => {
        gsap.fromTo(el.querySelectorAll('path'), { drawSVG: '0%' }, {
          drawSVG: '100%', duration: 2.4, ease: 'power2.inOut',
          scrollTrigger: { trigger: el, start: 'top 80%', once: true },
        });
      });

      html.classList.add('motion-ready');
      // Las fotos cambian la altura de la página al cargar: recalcular posiciones.
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener('load', refresh);
      const t = setTimeout(refresh, 800);
      return () => {
        window.removeEventListener('load', refresh);
        clearTimeout(t);
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}

'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { MX_PATH, MX_VIEWBOX, NEIGHBORS_PATH, TEQUIS_POINT, projectLatLng } from '@/lib/mexico-outline';
import { ScrollTrigger, gsap, prefersReducedMotion, useGSAP } from '@/lib/motion';

export type MapPlace = { slug: string; name: string; subcategory: string; lat: number; lng: number };

const [VB_W, VB_H] = MX_VIEWBOX.split(' ').slice(2).map(Number);
// Gota de mapa con la punta en (0,0), en unidades del lienzo a zoom completo.
const PIN = 'M0 0C-1.2-4.3-6.5-7.6-6.5-12.6a6.5 6.5 0 0 1 13 0C6.5-7.6 1.2-4.3 0 0Z';

/**
 * El mapa de la referencia (mundo → islas), con México → Tequis. La sección se queda fija
 * y el scroll dibuja el contorno, marca Tequis, hace zoom hasta el pueblo y deja caer los
 * pines de los lugares reales; cada pin lleva a su ficha.
 */
export default function MapStory({ places, count }: { places: MapPlace[]; count: number }) {
  const root = useRef<HTMLElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<{ name: string; sub: string; x: number; y: number } | null>(null);

  const pins = useMemo(() => places.map((p) => ({ ...p, xy: projectLatLng(p.lat, p.lng) })), [places]);

  // Encuadre final: el 90% central de los lugares (casi todos están a menos de 1 km de la
  // plaza; los pocos lejanos, como algún viñedo, abrirían tanto el cuadro que los pines del
  // centro se amontonarían). Esos quedan fuera de cuadro aquí, pero sí están en /mapa.
  const target = useMemo(() => {
    const q = (arr: number[], f: number) => [...arr].sort((a, b) => a - b)[Math.floor(f * (arr.length - 1))];
    const xs = pins.map((p) => p.xy[0]).concat(TEQUIS_POINT[0]);
    const ys = pins.map((p) => p.xy[1]).concat(TEQUIS_POINT[1]);
    const [x0, x1, y0, y1] = [q(xs, 0.05), q(xs, 0.95), q(ys, 0.05), q(ys, 0.95)];
    const cx = (x0 + x1) / 2;
    const cy = (y0 + y1) / 2;
    let w = Math.max(x1 - x0, 0.6) * 2.4;
    let h = Math.max(y1 - y0, 0.6) * 2.4;
    if (w / h > VB_W / VB_H) h = (w * VB_H) / VB_W;
    else w = (h * VB_W) / VB_H;
    return { x: cx - w / 2, y: cy - h / 2 + h * 0.06, w, h };
  }, [pins]);

  useGSAP(
    () => {
      const el = root.current!;
      const s = svg.current!;
      const pinEls = gsap.utils.toArray<SVGGElement>('[data-pin]', el);
      const view = { t: 0 };
      const apply = () => {
        const t = view.t;
        const w = VB_W + (target.w - VB_W) * t;
        const h = VB_H + (target.h - VB_H) * t;
        const x = target.x * t;
        const y = target.y * t;
        s.setAttribute('viewBox', `${x} ${y} ${w} ${h}`);
        const k = w / VB_W; // los pines y el marcador conservan su tamaño en pantalla
        pinEls.forEach((p) => p.setAttribute('transform', `translate(${p.dataset.x} ${p.dataset.y}) scale(${k})`));
        el.querySelector('[data-tequis]')?.setAttribute('transform', `translate(${TEQUIS_POINT[0]} ${TEQUIS_POINT[1]}) scale(${k})`);
      };

      if (prefersReducedMotion()) {
        view.t = 1;
        apply();
        gsap.set('[data-map-final]', { autoAlpha: 1 });
        return;
      }
      apply();

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: el, start: 'top top', end: '+=260%', pin: true, scrub: 0.8, anticipatePin: 1 },
      });
      tl.fromTo('[data-mx]', { drawSVG: '0%' }, { drawSVG: '100%', duration: 3 })
        .fromTo('[data-neighbors]', { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 }, 0.5)
        .fromTo('[data-tequis-inner]', { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.8, ease: 'back.out(2)' }, 2.6)
        .to('[data-map-title]', { autoAlpha: 0, y: -40, duration: 1 }, 3.6)
        .to(view, { t: 1, duration: 4, ease: 'power2.inOut', onUpdate: apply }, 3.6)
        .to('[data-mx], [data-neighbors]', { strokeOpacity: 0.35, duration: 2 }, 5.5)
        .to('[data-tequis-label]', { autoAlpha: 0, duration: 0.6 }, 6.8)
        .fromTo(pinEls.map((p) => p.firstElementChild), { scale: 0, transformOrigin: '50% 100%' }, { scale: 1, duration: 0.5, ease: 'back.out(3)', stagger: 0.04 }, 7)
        .fromTo('[data-map-final]', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 }, 8.6)
        .to({}, { duration: 1 });

      return () => ScrollTrigger.refresh();
    },
    { scope: root, dependencies: [target] },
  );

  const showTip = (e: React.PointerEvent, p: (typeof pins)[number]) => {
    const box = root.current!.getBoundingClientRect();
    const r = (e.currentTarget as Element).getBoundingClientRect();
    setHover({ name: p.name, sub: p.subcategory, x: r.left + r.width / 2 - box.left, y: r.top - box.top });
  };

  return (
    <section ref={root} className="relative h-[100svh] min-h-[600px] overflow-hidden bg-bg">
      <div data-map-title className="absolute inset-x-0 top-24 z-10 px-5 text-center sm:top-28">
        <p className="eyebrow">Descubre Tequis</p>
        <h2 className="mt-3 text-[clamp(1.9rem,3.2vw,2.6rem)] font-bold leading-tight">
          En el corazón
          <span className="mt-2 block font-display font-normal">de México</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed">
          A unos 180 km de la Ciudad de México y 60 km de Querétaro. En 1916, Carranza lo declaró centro geográfico del país.
        </p>
      </div>

      <svg ref={svg} viewBox={MX_VIEWBOX} preserveAspectRatio="xMidYMid meet" className="absolute inset-x-0 bottom-0 top-[22%] mx-auto h-[78%] w-full max-w-[1200px] overflow-hidden" role="img" aria-label={`Mapa de México que se acerca a Tequisquiapan y sus ${count} lugares`}>
        <path data-neighbors d={NEIGHBORS_PATH} fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
        <path data-mx d={MX_PATH} fill="none" stroke="currentColor" strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
        <g data-tequis transform={`translate(${TEQUIS_POINT[0]} ${TEQUIS_POINT[1]})`}>
          <g data-tequis-inner>
            <circle r="20" fill="none" stroke="currentColor" strokeOpacity="0.5" style={{ transformBox: 'fill-box', transformOrigin: 'center', animation: 'pulse-ring 2.4s ease-out infinite' }} />
            <circle r="9" fill="none" stroke="currentColor" strokeOpacity="0.4" />
            <circle r="4.5" fill="currentColor" />
            <text data-tequis-label x="16" y="6" className="fill-current font-display" fontSize="22">Tequisquiapan</text>
          </g>
        </g>
        {pins.map((p) => (
          <a key={p.slug} href={`/lugar/${p.slug}`} aria-label={p.name}>
            {/* fuera: posición y escala (apply); en medio: el "pop" de GSAP; dentro: el hover de CSS */}
            <g data-pin data-x={p.xy[0]} data-y={p.xy[1]} transform={`translate(${p.xy[0]} ${p.xy[1]})`}>
              <g>
                <g
                  className="cursor-pointer transition-transform duration-300 hover:scale-150"
                  style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}
                  onPointerEnter={(e) => showTip(e, p)}
                  onPointerLeave={() => setHover(null)}
                >
                  <path d={PIN} fill="var(--ink)" stroke="var(--bg)" strokeWidth="1.2" />
                  <circle cy="-12.6" r="2.3" fill="var(--bg)" />
                </g>
              </g>
            </g>
          </a>
        ))}
      </svg>

      {hover && (
        <div className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full bg-ink px-3 py-2 text-center text-bg" style={{ left: hover.x, top: hover.y - 8 }}>
          <p className="font-display text-lg leading-tight">{hover.name}</p>
          <p className="text-xs opacity-75">{hover.sub}</p>
        </div>
      )}

      <div data-map-final className="invisible absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-4 px-5 text-center sm:bottom-12">
        <p className="font-display text-2xl sm:text-3xl">{count} lugares para descubrir</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/mapa" className="btn-outline bg-bg">Explorar el mapa</Link>
          <Link href="/guia-practica#como-llegar" className="btn-outline bg-bg">Cómo llegar</Link>
        </div>
      </div>
    </section>
  );
}

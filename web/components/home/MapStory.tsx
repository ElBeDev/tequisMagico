'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';
import type { Map as MLMap } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MX_PATH, MX_PROJ, MX_VIEWBOX, NEIGHBORS_PATH, TEQUIS_POINT, projectLatLng } from '@/lib/mexico-outline';
import { loadMapLibre, tequisMapStyle } from '@/lib/mapStyle';
import { ScrollTrigger, gsap, prefersReducedMotion, useGSAP } from '@/lib/motion';
import { pinElement, popupHtml } from '@/components/PlacesMap';

export type MapPlace = { slug: string; name: string; subcategory: string; lat: number; lng: number; image: string | null };

const [VB_W, VB_H] = MX_VIEWBOX.split(' ').slice(2).map(Number);

// Encuadre final: el centro del pueblo, ~2.5 km de lado alrededor de la plaza.
const TOWN = { lat: 20.5218, lng: -99.8917, dLat: 0.011, dLng: 0.016 };

// Las dos ciudades de referencia del texto, con su distancia por carretera. Aparecen antes del
// zoom y se abren hacia los lados hasta salir del encuadre mientras se acerca al pueblo.
const CITIES = [
  { key: 'cdmx', name: 'Ciudad de México', km: 'unos 180 km', at: projectLatLng(19.4326, -99.1332), dx: 14, anchor: 'start' },
  { key: 'qro', name: 'Querétaro', km: 'unos 60 km', at: projectLatLng(20.5888, -100.3899), dx: -14, anchor: 'end' },
] as const;

function unproject(x: number, y: number): [number, number] {
  const lng = ((x - MX_PROJ.tx) / MX_PROJ.k) * (180 / Math.PI);
  const lat = (2 * Math.atan(Math.exp((MX_PROJ.ty - y) / MX_PROJ.k)) - Math.PI / 2) * (180 / Math.PI);
  return [lng, lat];
}

/**
 * Mapa de la portada (en la referencia: mundo → islas; aquí: México → Tequis). La sección
 * se queda fija y el scroll dibuja el contorno de México, marca Tequis y hace zoom hasta el
 * pueblo; ahí el dibujo se funde con el mapa real (MapLibre, alineado al mismo encuadre
 * porque ambos son Mercator) y caen los pines de los lugares, que llevan a su ficha.
 */
export default function MapStory({ places, count }: { places: MapPlace[]; count: number }) {
  const root = useRef<HTMLElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const townRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MLMap | null>(null);
  const pinsRef = useRef<HTMLElement[]>([]);
  const pinsProgress = useRef(0);
  const router = useRouter();

  // Caja final en coordenadas del lienzo, con la proporción del lienzo.
  const target = useMemo(() => {
    const [x0, y1] = projectLatLng(TOWN.lat - TOWN.dLat, TOWN.lng - TOWN.dLng);
    const [x1, y0] = projectLatLng(TOWN.lat + TOWN.dLat, TOWN.lng + TOWN.dLng);
    let w = x1 - x0;
    let h = y1 - y0;
    const cx = (x0 + x1) / 2;
    const cy = (y0 + y1) / 2;
    if (w / h > VB_W / VB_H) h = (w * VB_H) / VB_W;
    else w = (h * VB_W) / VB_H;
    return { x: cx - w / 2, y: cy - h / 2, w, h };
  }, []);

  /** Pone los pines según el avance (0→1) de su caída, escalonados. */
  const applyPins = (p: number) => {
    pinsProgress.current = p;
    const n = pinsRef.current.length;
    const ease = gsap.parseEase('back.out(2.4)');
    pinsRef.current.forEach((el, i) => {
      const local = gsap.utils.clamp(0, 1, p * (n * 0.25 + 1) - i * 0.25);
      el.style.transform = `translateY(${(1 - local) * -28}px) scale(${ease(local)})`;
      el.style.opacity = String(Math.min(1, local * 2));
    });
  };

  /** Alinea el mapa real con el dibujo: el recuadro del <svg> muestra exactamente `target`. */
  const fitTown = () => {
    const map = mapRef.current;
    const s = svg.current;
    const sec = root.current;
    if (!map || !s || !sec) return;
    const box = s.getBoundingClientRect();
    const secBox = sec.getBoundingClientRect();
    const scale = Math.min(box.width / target.w, box.height / target.h); // preserveAspectRatio="meet"
    const visW = box.width / scale;
    const visH = box.height / scale;
    const cx = target.x + target.w / 2;
    const cy = target.y + target.h / 2;
    const sw = unproject(cx - visW / 2, cy + visH / 2);
    const ne = unproject(cx + visW / 2, cy - visH / 2);
    map.resize();
    map.fitBounds([sw, ne], {
      duration: 0,
      padding: {
        top: box.top - secBox.top,
        left: box.left - secBox.left,
        right: secBox.right - box.right,
        bottom: secBox.bottom - box.bottom,
      },
    });
  };

  // El mapa real se crea cuando la sección se acerca (no antes: pesa).
  useEffect(() => {
    const el = root.current!;
    let cancelled = false;
    const io = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || mapRef.current) return;
        io.disconnect();
        try {
          const [{ Map, Marker, Popup }, style] = await Promise.all([loadMapLibre(), tequisMapStyle()]);
          if (cancelled || !townRef.current) return;
          const map = new Map({ container: townRef.current, style, interactive: false, attributionControl: { compact: true }, center: [TOWN.lng, TOWN.lat], zoom: 14 });
          mapRef.current = map;
          map.on('load', () => {
            fitTown();
            pinsRef.current = places.map((p) => {
              const pin = pinElement('var(--ink)', p.name);
              const popup = new Popup({ offset: [0, -30], closeButton: false, closeOnClick: false, maxWidth: '260px', className: 'map-popup' }).setHTML(
                popupHtml({ name: p.name, subtitle: p.subcategory, href: `/lugar/${p.slug}`, image: p.image }),
              );
              new Marker({ element: pin, anchor: 'bottom' }).setLngLat([p.lng, p.lat]).addTo(map);
              pin.addEventListener('mouseenter', () => popup.setLngLat([p.lng, p.lat]).addTo(map));
              pin.addEventListener('mouseleave', () => popup.remove());
              pin.addEventListener('click', () => router.push(`/lugar/${p.slug}`));
              return pin.firstElementChild as HTMLElement;
            });
            applyPins(prefersReducedMotion() ? 1 : pinsProgress.current);
          });
        } catch {
          // Sin mapa real: el dibujo y el botón "Explorar el mapa" siguen funcionando.
        }
      },
      { rootMargin: '150% 0px' },
    );
    io.observe(el);
    const onRefresh = () => fitTown();
    ScrollTrigger.addEventListener('refresh', onRefresh);
    return () => {
      cancelled = true;
      io.disconnect();
      ScrollTrigger.removeEventListener('refresh', onRefresh);
      mapRef.current?.remove();
      mapRef.current = null;
    };
    // Se monta una vez; places/target no cambian en la vida de la página.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useGSAP(
    () => {
      const el = root.current!;
      const s = svg.current!;
      const view = { t: 0 };
      const apply = () => {
        const t = view.t;
        // Zoom geométrico: la velocidad aparente es pareja de lejos y de cerca.
        const w = VB_W * Math.pow(target.w / VB_W, t);
        const h = VB_H * Math.pow(target.h / VB_H, t);
        const k = (VB_W - w) / (VB_W - target.w);
        const cx = VB_W / 2 + (target.x + target.w / 2 - VB_W / 2) * k;
        const cy = VB_H / 2 + (target.y + target.h / 2 - VB_H / 2) * k;
        s.setAttribute('viewBox', `${cx - w / 2} ${cy - h / 2} ${w} ${h}`);
        el.querySelector('[data-tequis]')?.setAttribute('transform', `translate(${TEQUIS_POINT[0]} ${TEQUIS_POINT[1]}) scale(${w / VB_W})`);
        el.querySelectorAll<SVGGElement>('[data-city-mark]').forEach((g, i) => {
          g.setAttribute('transform', `translate(${CITIES[i].at[0]} ${CITIES[i].at[1]}) scale(${w / VB_W})`);
        });
      };

      if (prefersReducedMotion()) {
        view.t = 1;
        apply();
        gsap.set('[data-town], [data-map-final]', { autoAlpha: 1 });
        gsap.set('[data-map-title], [data-tequis], [data-mx], [data-mx-fill], [data-neighbors], [data-city]', { autoAlpha: 0 });
        return;
      }
      apply();

      const pins = { p: 0 };
      gsap
        .timeline({
          defaults: { ease: 'none' },
          scrollTrigger: { trigger: el, start: 'top top', end: '+=280%', pin: true, scrub: 0.8, anticipatePin: 1 },
        })
        .fromTo('[data-mx]', { drawSVG: '0% 35%' }, { drawSVG: '0% 100%', duration: 3 })
        .fromTo('[data-neighbors]', { autoAlpha: 0.4 }, { autoAlpha: 1, duration: 2 }, 0.5)
        .fromTo('[data-tequis-inner]', { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.8, ease: 'back.out(2)' }, 2.6)
        .fromTo('[data-city]', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8, stagger: 0.3 }, 3)
        .to('[data-city]', { autoAlpha: 0, duration: 0.6 }, 5.6)
        .to('[data-map-title]', { autoAlpha: 0, y: -40, duration: 1 }, 3.6)
        // El relleno se va antes de que el zoom lo agrande más allá del recuadro del <svg> (si no, se ve su borde).
        .to('[data-mx-fill]', { autoAlpha: 0, duration: 0.6 }, 3.4)
        .to(view, { t: 1, duration: 4, ease: 'power1.inOut', onUpdate: apply }, 3.6)
        .to('[data-tequis-label]', { autoAlpha: 0, duration: 0.6 }, 5.6)
        // El dibujo se funde con el mapa real del pueblo.
        .fromTo('[data-town]', { autoAlpha: 0, scale: 1.04 }, { autoAlpha: 1, scale: 1, duration: 1.2, ease: 'power1.out' }, 7.2)
        .to('[data-mx], [data-neighbors], [data-tequis]', { autoAlpha: 0, duration: 0.8 }, 7.6)
        .to(pins, { p: 1, duration: 1.6, onUpdate: () => applyPins(pins.p) }, 8.2)
        .fromTo('[data-map-final]', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 }, 9.4)
        .to({}, { duration: 1 });
    },
    { scope: root, dependencies: [target] },
  );

  return (
    <section ref={root} className="relative h-[100svh] min-h-[600px] overflow-hidden bg-bg">
      {/* MapLibre le pone position:relative a su contenedor; por eso va dentro de una caja absoluta y mide 100%. */}
      <div data-town className="invisible absolute inset-0" aria-hidden>
        <div ref={townRef} className="size-full" />
      </div>

      <div data-map-title className="absolute inset-x-0 top-28 z-10 px-5 text-center sm:top-32">
        <h2 className="heading mx-auto max-w-[14ch]">En el corazón de México</h2>
        <p className="mx-auto mt-6 max-w-[44ch]">
          A unos 180 km de la Ciudad de México y 60 km de Querétaro. En 1916, Carranza lo declaró centro geográfico del país.
        </p>
      </div>

      <svg
        ref={svg}
        viewBox={MX_VIEWBOX}
        preserveAspectRatio="xMidYMid meet"
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[22%] mx-auto h-[78%] w-full max-w-[1200px] overflow-hidden"
        role="img"
        aria-label={`Mapa de México que se acerca a Tequisquiapan y sus ${count} lugares`}
      >
        <path data-neighbors d={NEIGHBORS_PATH} fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
        {/* El relleno está desde el principio: el contorno se dibuja encima de una forma que ya se ve. */}
        <path data-mx-fill d={MX_PATH} className="fill-surface" />
        <path data-mx d={MX_PATH} fill="none" stroke="currentColor" strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
        {CITIES.map((c) => (
          <g key={c.key} data-city className="invisible">
            <path
              d={`M${c.at[0]},${c.at[1]}L${TEQUIS_POINT[0]},${TEQUIS_POINT[1]}`}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.6"
              strokeDasharray="2 5"
              vectorEffect="non-scaling-stroke"
            />
            <g data-city-mark transform={`translate(${c.at[0]} ${c.at[1]})`}>
              <circle r="4" fill="currentColor" />
              <text x={c.dx} y="6" textAnchor={c.anchor} fontSize="18" className="fill-current font-display">{c.name}</text>
              <text x={c.dx} y="26" textAnchor={c.anchor} fontSize="14" className="fill-muted">{c.km}</text>
            </g>
          </g>
        ))}
        <g data-tequis transform={`translate(${TEQUIS_POINT[0]} ${TEQUIS_POINT[1]})`}>
          <g data-tequis-inner>
            <circle r="9" fill="none" stroke="currentColor" strokeOpacity="0.4" />
            <circle r="4.5" fill="currentColor" />
            <text data-tequis-label x="16" y="6" className="fill-current font-display" fontSize="22">Tequisquiapan</text>
          </g>
        </g>
      </svg>

      <div data-map-final className="invisible absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-4 px-5 text-center sm:bottom-12">
        <p className="font-display text-title leading-none">{count} lugares para descubrir</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/mapa" className="btn">Explorar el mapa</Link>
          <Link href="/guia-practica#como-llegar" className="btn bg-bg! text-ink!">Cómo llegar</Link>
        </div>
      </div>
    </section>
  );
}

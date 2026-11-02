'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { mapsDirectionsUrl } from '@/lib/data';
import type { Nearby } from '@/lib/surroundings';
import { SectionTitle } from '@/components/Section';

const VB_W = 700;
const VB_H = 460;
// Margen para los nombres: Querétaro (arriba de su punto, a la izquierda) y Tequis y Cadereyta (a la derecha).
const PAD = { left: 100, right: 190, top: 60, bottom: 50 };
const RINGS_KM = [15, 30];

/** Proyección equirectangular centrada en Tequis, escalada para que todo quepa en el lienzo. */
function makeProjection(center: { lat: number; lng: number }, places: { lat: number; lng: number }[]) {
  const cos = Math.cos((center.lat * Math.PI) / 180);
  const raw = (lat: number, lng: number) => [(lng - center.lng) * cos, center.lat - lat] as const;
  const pts = [raw(center.lat, center.lng), ...places.map((p) => raw(p.lat, p.lng))];
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const k = Math.min((VB_W - PAD.left - PAD.right) / (x1 - x0), (VB_H - PAD.top - PAD.bottom) / (y1 - y0));
  const ox = PAD.left + (VB_W - PAD.left - PAD.right - (x1 - x0) * k) / 2 - x0 * k;
  const oy = PAD.top + (VB_H - PAD.top - PAD.bottom - (y1 - y0) * k) / 2 - y0 * k;
  // Grados de latitud ≈ 111 km: sirve para dibujar los anillos de distancia.
  return { project: (lat: number, lng: number) => { const [x, y] = raw(lat, lng); return [x * k + ox, y * k + oy] as const; }, pxPerKm: k / 111 };
}

/** Carretera ligeramente curva entre dos puntos. */
function road([ax, ay]: readonly [number, number], [bx, by]: readonly [number, number]) {
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const nx = -(by - ay) * 0.12;
  const ny = (bx - ax) * 0.12;
  return `M${ax.toFixed(1)} ${ay.toFixed(1)} Q${(mx + nx).toFixed(1)} ${(my + ny).toFixed(1)} ${bx.toFixed(1)} ${by.toFixed(1)}`;
}

/**
 * "Cerca de Tequis", como el "Unmissable destinations" de la referencia: lista con foto de
 * cada lugar y un esquema de carreteras que se dibuja al entrar a pantalla, sobre dos círculos de
 * tono (15 y 30 km alrededor del pueblo). Pasar el cursor por uno resalta el otro.
 */
export default function Surroundings({ center, places }: { center: { lat: number; lng: number }; places: Nearby[] }) {
  const [active, setActive] = useState<string | null>(null);
  const { project, pxPerKm } = makeProjection(center, places);
  const home = project(center.lat, center.lng);
  const pos = Object.fromEntries(places.map((p) => [p.key, project(p.lat, p.lng)]));

  return (
    <section className="frame pt-40" aria-labelledby="cerca-title">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionTitle id="cerca-title" title="Cerca de Tequis" lead="Pueblos a menos de una hora que no te puedes perder." />
          <ul className="mt-12 space-y-2" onMouseLeave={() => setActive(null)}>
            {places.map((p) => (
              <li
                key={p.key}
                data-reveal="up"
                onMouseEnter={() => setActive(p.key)}
                className={`-mx-4 flex gap-5 px-4 py-4 transition-colors duration-300 ${active === p.key ? 'bg-surface' : ''}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} loading="lazy" referrerPolicy="no-referrer" className="aspect-[4/3] w-24 shrink-0 object-cover sm:w-36" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-display text-lead leading-none">
                      {p.href ? <Link href={p.href} className="hover:underline">{p.name}</Link> : p.name}
                    </h3>
                    <span className="meta text-muted">unos {p.km} km</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-muted">{p.text}</p>
                  <a
                    href={mapsDirectionsUrl(p.lat, p.lng)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meta mt-2 inline-flex items-center gap-1 hover:underline"
                  >
                    Cómo llegar <ArrowUpRight className="size-3.5" aria-hidden />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="relative w-full" role="img" aria-label="Esquema de carreteras de Tequisquiapan a los pueblos cercanos">
            {[...RINGS_KM].reverse().map((km) => (
              <g key={km}>
                <circle cx={home[0]} cy={home[1]} r={km * pxPerKm} className="fill-surface" fillOpacity={km === RINGS_KM[0] ? 1 : 0.55} />
                <text x={home[0]} y={home[1] - km * pxPerKm + 18} textAnchor="middle" fontSize="13" className="fill-muted">{km} km</text>
              </g>
            ))}
            <g data-draw fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              {places.map((p) => (
                <path key={p.key} d={road(p.via ? pos[p.via] : home, pos[p.key])} strokeOpacity={active === p.key ? 1 : 0.55} className="transition-[stroke-opacity] duration-300" />
              ))}
            </g>
            {places.map((p) => {
              const [x, y] = pos[p.key];
              const on = active === p.key;
              const label = ({
                left: { x: x - 16, y: y + 5, anchor: 'end' },
                right: { x: x + 16, y: y + 5, anchor: 'start' },
                top: { x, y: y - 18, anchor: 'middle' },
              } as const)[p.label];
              return (
                <g key={p.key} onMouseEnter={() => setActive(p.key)} onMouseLeave={() => setActive(null)} className="cursor-default">
                  <circle cx={x} cy={y} r={on ? 11 : 7} className={`transition-all duration-300 ${on ? 'fill-ochre' : 'fill-bg'}`} stroke="currentColor" strokeWidth="1.6" />
                  <text x={label.x} y={label.y} textAnchor={label.anchor} fontSize="17" className="fill-current font-display">
                    {p.name}
                  </text>
                </g>
              );
            })}
            <g>
              <circle cx={home[0]} cy={home[1]} r="9" className="fill-forest" />
              <text x={home[0] + 18} y={home[1] + 26} fontSize="20" className="fill-current font-display">Tequisquiapan</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}

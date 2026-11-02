'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import type { Map as LeafletMap, LayerGroup } from 'leaflet';

export type MapPoint = {
  id: string;
  name: string;
  href: string;
  subtitle: string;
  lat: number;
  lng: number;
  color: string;
  group?: string;
};

// Centro del pueblo (Plaza Miguel Hidalgo).
const TEQUIS_CENTER: [number, number] = [20.5218, -99.8917];

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]!);
}

/** Mapa con Leaflet + teselas de OpenStreetMap. `groups` agrega filtros por categoría. */
export default function PlacesMap({
  points,
  groups,
  className = 'h-[70vh]',
  zoom = 15,
}: {
  points: MapPoint[];
  groups?: { key: string; label: string; color: string }[];
  className?: string;
  zoom?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const layerRef = useRef<LayerGroup | null>(null);
  const [hidden, setHidden] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);

  const visible = useMemo(() => points.filter((p) => !p.group || !hidden.has(p.group)), [points, hidden]);

  useEffect(() => {
    let cancelled = false;
    import('leaflet').then((L) => {
      if (cancelled || !containerRef.current || mapRef.current) return;
      const center: [number, number] = points.length === 1 ? [points[0].lat, points[0].lng] : TEQUIS_CENTER;
      const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView(center, zoom);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);
      layerRef.current = L.layerGroup().addTo(map);
      mapRef.current = map;
      setReady(true);
    });
    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
    // El mapa se crea una sola vez; los marcadores se actualizan en el efecto de abajo.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!ready) return;
    import('leaflet').then((L) => {
      const layer = layerRef.current;
      if (!layer) return;
      layer.clearLayers();
      for (const p of visible) {
        L.circleMarker([p.lat, p.lng], { radius: 8, color: '#fff', weight: 2, fillColor: p.color, fillOpacity: 1 })
          .bindPopup(
            `<strong>${escapeHtml(p.name)}</strong><br><span style="opacity:.7">${escapeHtml(p.subtitle)}</span><br><a href="${p.href}">Ver detalles →</a>`,
          )
          .addTo(layer);
      }
    });
  }, [ready, visible]);

  return (
    <div>
      {groups && (
        <div className="mb-5 flex flex-wrap justify-center gap-2">
          {groups.map((g) => {
            const off = hidden.has(g.key);
            return (
              <button
                key={g.key}
                type="button"
                aria-pressed={!off}
                onClick={() =>
                  setHidden((prev) => {
                    const next = new Set(prev);
                    if (next.has(g.key)) next.delete(g.key);
                    else next.add(g.key);
                    return next;
                  })
                }
                className={`inline-flex items-center gap-2 border px-3.5 py-1.5 text-[15px] transition ${
                  off ? 'border-line text-muted opacity-60' : 'border-ink'
                }`}
              >
                <span className="size-2.5 rounded-full" style={{ background: off ? 'transparent' : g.color, outline: `2px solid ${g.color}` }} />
                {g.label}
              </button>
            );
          })}
        </div>
      )}
      <div ref={containerRef} className={`w-full overflow-hidden border border-line ${className}`} />
    </div>
  );
}

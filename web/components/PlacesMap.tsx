'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { Map as MLMap, Marker } from 'maplibre-gl';
import { loadMapLibre, tequisMapStyle } from '@/lib/mapStyle';
import { photoAttrsHtml } from '@/lib/images';
import { dict } from '@/lib/dict';
import type { Lang } from '@/lib/i18n';

export type MapPoint = {
  id: string;
  name: string;
  href: string;
  subtitle: string;
  lat: number;
  lng: number;
  color: string;
  image?: string | null;
  group?: string;
};

// Centro del pueblo (Plaza Miguel Hidalgo).
const TEQUIS_CENTER: [number, number] = [-99.8917, 20.5218];

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]!);
}

/** Gota de mapa en HTML (para Marker de MapLibre). Se reutiliza en la portada. */
export function pinElement(color: string, label?: string) {
  const el = document.createElement('div');
  el.className = 'map-pin';
  // __drop lo anima la portada (caída de pines); __body tiene el hover. Separados para que
  // la animación por JS y la transición CSS no se pisen.
  el.innerHTML = `<span class="map-pin__drop"><span class="map-pin__body" style="--pin:${color}"><svg viewBox="0 0 26 34" aria-hidden="true"><path d="M13 33C11 26 1 20.5 1 12.6a12 12 0 0 1 24 0C25 20.5 15 26 13 33Z"/><circle cx="13" cy="12.6" r="4.4"/></svg></span></span>`;
  if (label) el.setAttribute('aria-label', label);
  return el;
}

/** Contenido de la ventana de un lugar: foto, nombre, tipo y link. */
export function popupHtml(p: Pick<MapPoint, 'name' | 'subtitle' | 'href' | 'image'>, cta = dict('es').viewPlace) {
  const img = p.image ? `<img ${photoAttrsHtml(p.image, '240px', escapeHtml)} alt="" loading="lazy">` : '';
  return `<a class="map-card" href="${escapeHtml(p.href)}">${img}<span class="map-card__body"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(p.subtitle)}</span><em>${escapeHtml(cta)}</em></span></a>`;
}

function fitPoints(map: MLMap, points: MapPoint[], zoom: number, duration: number) {
  if (points.length === 0) return;
  if (points.length === 1) {
    map.easeTo({ center: [points[0].lng, points[0].lat], zoom: Math.max(zoom, 16), duration });
    return;
  }
  const lngs = points.map((p) => p.lng);
  const lats = points.map((p) => p.lat);
  map.fitBounds([[Math.min(...lngs), Math.min(...lats)], [Math.max(...lngs), Math.max(...lats)]], { padding: 70, maxZoom: Math.max(zoom, 16), duration });
}

/**
 * Mapa vectorial (MapLibre + OpenFreeMap) con la paleta del sitio, pines propios y
 * ventanas con foto. `wheelZoom` solo en el mapa grande; en los chicos el scroll sigue
 * bajando la página y se acerca con ctrl/⌘ + rueda o con dos dedos.
 *
 * `activeId` agranda el pin de ese punto (la tarjeta bajo el cursor en "Explora Tequis").
 * `fitOnChange` vuelve a encuadrar cuando cambian los puntos (al cambiar de filtro).
 * `frame={false}` quita el marco redondeado para usarlo de orilla a orilla.
 */
export default function PlacesMap({
  points,
  groups,
  className = 'h-[70vh]',
  zoom = 15,
  wheelZoom = false,
  activeId = null,
  fitOnChange = false,
  frame = true,
  lang = 'es',
}: {
  points: MapPoint[];
  groups?: { key: string; label: string; color: string }[];
  className?: string;
  zoom?: number;
  wheelZoom?: boolean;
  activeId?: string | null;
  fitOnChange?: boolean;
  frame?: boolean;
  lang?: Lang;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MLMap | null>(null);
  const markersRef = useRef<Map<string, Marker>>(new Map());
  const firstFit = useRef(true);
  const [hidden, setHidden] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  const visible = useMemo(() => points.filter((p) => !p.group || !hidden.has(p.group)), [points, hidden]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [{ Map, NavigationControl }, style] = await Promise.all([loadMapLibre(), tequisMapStyle()]);
        if (cancelled || !containerRef.current) return;
        const center: [number, number] = points.length === 1 ? [points[0].lng, points[0].lat] : TEQUIS_CENTER;
        const map = new Map({
          container: containerRef.current,
          style,
          center,
          zoom,
          attributionControl: { compact: true },
          cooperativeGestures: !wheelZoom,
          scrollZoom: wheelZoom,
          dragRotate: false,
          pitchWithRotate: false,
        });
        map.addControl(new NavigationControl({ showCompass: false }), 'top-right');
        mapRef.current = map;
        map.on('load', () => {
          if (cancelled) return;
          // Encuadrar todos los puntos (si hay varios) con margen.
          if (points.length > 1) fitPoints(map, points, zoom, 0);
          setReady(true);
        });
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();
    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
    // El mapa se crea una sola vez; los marcadores se actualizan en el efecto de abajo.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!ready || !map) return;
    let cancelled = false;
    loadMapLibre().then(({ Marker, Popup }) => {
      if (cancelled) return;
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = new Map(
        visible.map((p) => {
          const popup = new Popup({ offset: [0, -30], closeButton: false, maxWidth: '260px', className: 'map-popup' }).setHTML(popupHtml(p, dict(lang).viewPlace));
          const marker = new Marker({ element: pinElement(p.color, p.name), anchor: 'bottom' }).setLngLat([p.lng, p.lat]).setPopup(popup).addTo(map);
          return [p.id, marker];
        }),
      );
      if (fitOnChange && !firstFit.current) fitPoints(map, visible, zoom, 900);
      firstFit.current = false;
    });
    return () => {
      cancelled = true;
    };
  }, [ready, visible, fitOnChange, zoom, lang]);

  useEffect(() => {
    markersRef.current.forEach((m, id) => m.getElement().classList.toggle('is-active', id === activeId));
  }, [activeId, visible, ready]);

  return (
    <div className={frame ? '' : 'h-full'}>
      {groups && (
        <div className="mb-5 flex flex-wrap gap-2">
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
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 transition-colors ${
                  off ? 'bg-surface text-muted' : 'bg-ink text-bg'
                }`}
              >
                <span className="size-2.5 rounded-full" style={{ background: g.color, outline: off ? `2px solid ${g.color}` : 'none' }} />
                {g.label}
              </button>
            );
          })}
        </div>
      )}
      <div
        className={`relative w-full overflow-hidden bg-surface ${className}`}
        {...(wheelZoom ? { 'data-lenis-prevent': true } : {})}
      >
        {/* MapLibre le pone position:relative a su contenedor; por eso va dentro de una caja absoluta y mide 100%. */}
        <div className="absolute inset-0">
          <div ref={containerRef} className="size-full" />
        </div>
        {failed && (
          <p className="absolute inset-0 flex items-center justify-center p-6 text-center text-muted">
            {lang === 'en' ? 'We couldn’t load the map. Check your connection and try again.' : 'No pudimos cargar el mapa. Revisa tu conexión e intenta de nuevo.'}
          </p>
        )}
      </div>
    </div>
  );
}

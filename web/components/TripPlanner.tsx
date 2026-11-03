'use client';

import Link from 'next/link';
import { Heart, Navigation, Trash2 } from 'lucide-react';
import { CATEGORIES, eventKey, placeKey, type PlaceSummary, type TequisEvent } from '@/lib/data';
import { useFavorites } from '@/lib/favorites';
import { href, type Lang } from '@/lib/i18n';
import { EventTile, PlaceCard } from './Cards';
import PlacesMap from './PlacesMap';

// Google Maps acepta hasta 9 paradas intermedias en un link de ruta.
const MAX_WAYPOINTS = 9;

/** Link de Google Maps con todas las paradas, desde donde esté la persona. */
function routeUrl(stops: PlaceSummary[]): string {
  const coords = stops.slice(0, MAX_WAYPOINTS + 1).map((p) => `${p.latitude},${p.longitude}`);
  const destination = coords.pop()!;
  const url = new URL('https://www.google.com/maps/dir/');
  url.searchParams.set('api', '1');
  url.searchParams.set('destination', destination);
  if (coords.length) url.searchParams.set('waypoints', coords.join('|'));
  return url.toString();
}

/**
 * "Mi viaje": lo que la persona guardó con el corazón (en su navegador), con el mapa de los
 * lugares y un link para abrir la ruta en Google Maps.
 */
export default function TripPlanner({ places, events, today, lang }: { places: PlaceSummary[]; events: TequisEvent[]; today: string; lang: Lang }) {
  const en = lang === 'en';
  const { ids, clear } = useFavorites();
  // En el orden en que se guardaron (así la ruta sigue ese orden).
  const savedPlaces = ids.flatMap((k) => places.filter((p) => placeKey(p.id) === k));
  const savedEvents = ids.flatMap((k) => events.filter((e) => eventKey(e.id) === k));
  const total = savedPlaces.length + savedEvents.length;

  if (total === 0) {
    return (
      <div className="frame">
        <div className="flex size-20 items-center justify-center rounded-full bg-sage">
          <Heart className="size-8" aria-hidden />
        </div>
        <p className="mt-8 font-display text-lead leading-none">{en ? 'You haven’t saved anything yet' : 'Todavía no has guardado nada'}</p>
        <p className="mt-4 max-w-[52ch]">
          {en
            ? 'Tap the heart on any place or event and it will show up here, with its map and a route ready to open in Google Maps. It’s saved only in this browser.'
            : 'Toca el corazón en cualquier lugar o evento y aparecerá aquí, con su mapa y la ruta lista para abrir en Google Maps. Se guarda solo en este navegador.'}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={href(lang, '/lugares')} className="btn-outline">{en ? 'Things to do' : 'Qué hacer'}</Link>
          <Link href={href(lang, '/eventos')} className="btn-outline">{en ? 'Events' : 'Eventos'}</Link>
          <Link href={href(lang, '/rutas')} className="btn-outline">{en ? 'Routes' : 'Rutas'}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="frame">
      <div className="flex flex-col gap-4 bg-surface px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <strong className="font-semibold">{total}</strong> {en ? 'saved' : total === 1 ? 'guardado' : 'guardados'}
          {savedPlaces.length > 0 && savedEvents.length > 0 && (
            <span className="text-muted">
              {' · '}
              {en ? `${savedPlaces.length} places and ${savedEvents.length} events` : `${savedPlaces.length} lugares y ${savedEvents.length} eventos`}
            </span>
          )}
        </p>
        <div className="flex flex-wrap gap-3">
          {savedPlaces.length > 0 && (
            <a href={routeUrl(savedPlaces)} target="_blank" rel="noopener noreferrer" className="btn">
              <Navigation className="size-4" aria-hidden /> {en ? 'Open route in Google Maps' : 'Abrir ruta en Google Maps'}
            </a>
          )}
          <button
            type="button"
            onClick={() => {
              if (window.confirm(en ? 'Remove everything from your trip?' : '¿Quitar todo de tu viaje?')) clear();
            }}
            className="btn-outline"
          >
            <Trash2 className="size-4" aria-hidden /> {en ? 'Clear' : 'Vaciar'}
          </button>
        </div>
      </div>
      {savedPlaces.length > MAX_WAYPOINTS + 1 && (
        <p className="meta mt-3 text-muted">
          {en ? `Google Maps opens the route with the first ${MAX_WAYPOINTS + 1} stops.` : `Google Maps abre la ruta con las primeras ${MAX_WAYPOINTS + 1} paradas.`}
        </p>
      )}

      <div className={`mt-12 grid gap-14 ${savedPlaces.length ? 'lg:grid-cols-[minmax(0,1fr)_440px]' : ''}`}>
        <div className="space-y-16">
          {savedPlaces.length > 0 && (
            <section>
              <h2 className="font-display text-lead leading-none">{en ? 'Places' : 'Lugares'}</h2>
              <div className="mt-6 grid gap-x-8 gap-y-12 sm:grid-cols-2">
                {savedPlaces.map((p) => (
                  <PlaceCard key={p.id} place={p} lang={lang} reveal={false} />
                ))}
              </div>
            </section>
          )}
          {savedEvents.length > 0 && (
            <section>
              <h2 className="font-display text-lead leading-none">{en ? 'Events' : 'Eventos'}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {savedEvents.map((e) => (
                  <EventTile key={e.id} event={e} today={today} lang={lang} reveal={false} />
                ))}
              </div>
            </section>
          )}
        </div>
        {savedPlaces.length > 0 && (
          <div className="lg:sticky lg:top-28 lg:self-start">
            <PlacesMap
              key={savedPlaces.map((p) => p.id).join()}
              className="h-[60vh] lg:h-[70vh]"
              lang={lang}
              points={savedPlaces.map((p, i) => ({
                id: p.id,
                name: `${i + 1}. ${p.name}`,
                href: href(lang, `/lugar/${p.slug}`),
                subtitle: p.subcategory,
                lat: p.latitude,
                lng: p.longitude,
                color: CATEGORIES[p.category].color,
                image: p.thumbnailUrl,
              }))}
            />
          </div>
        )}
      </div>
    </div>
  );
}

import Link from 'next/link';
import { CATEGORIES, PRICE_RANGES, eventKey, eventStatus, formatDateRange, placeKey, type Place, type PlaceSummary, type TequisEvent } from '@/lib/data';
import SaveButton from './SaveButton';

/** Foto del lugar/evento o, si no hay, un bloque liso con el nombre de su categoría. */
export function Photo({ src, alt, label, className = '' }: { src: string | null; alt: string; label?: string; className?: string }) {
  if (!src) {
    return (
      <div className={`flex items-end bg-stone p-4 font-display text-lg text-white ${className}`} aria-hidden>
        {label}
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading="lazy" referrerPolicy="no-referrer" className={`object-cover ${className}`} />;
}

export function CategoryPill({ category, className = '' }: { category: Place['category']; className?: string }) {
  return <span className={`meta ${className}`}>{CATEGORIES[category].label}</span>;
}

/**
 * Tarjeta de lugar: foto con esquinas rectas, el tipo encima de la foto y el corazón. `boxed` la
 * pone sobre un paso de tono (para fondos oscuros), sin sombra ni borde.
 */
export function PlaceCard({ place, variant = 'plain', reveal = true }: { place: PlaceSummary; variant?: 'plain' | 'boxed'; reveal?: boolean }) {
  const price = PRICE_RANGES[place.priceRange];
  const boxed = variant === 'boxed';
  return (
    <article {...(reveal ? { 'data-reveal': 'up' } : {})} className="group relative h-full">
      <Link href={`/lugar/${place.slug}`} data-cursor="Ver" className={`flex h-full flex-col ${boxed ? 'bg-bg text-ink' : ''}`}>
        <div className="relative overflow-hidden bg-surface">
          <Photo
            src={place.thumbnailUrl}
            alt={place.name}
            label={place.subcategory}
            className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-105"
          />
          {place.subcategory && (
            <span className="meta absolute bottom-3 left-3 rounded-full bg-bg px-3 py-1 text-ink">{place.subcategory}</span>
          )}
        </div>
        <div className={`flex flex-1 flex-col ${boxed ? 'p-5 sm:p-6' : 'pt-4'}`}>
          <h3 className="font-display text-lead leading-[1.05] tracking-[-0.01em] decoration-1 group-hover:underline">{place.name}</h3>
          {place.shortDescription && <p className="mt-2 line-clamp-2 text-muted">{place.shortDescription}</p>}
          <p className="meta mt-auto pt-3 text-muted">
            {CATEGORIES[place.category].label}
            {price && <> · {price.symbol}</>}
          </p>
        </div>
      </Link>
      <SaveButton id={placeKey(place.id)} name={place.name} className="absolute right-3 top-3" />
    </article>
  );
}

/** Tarjeta vertical con el arco de portal y el título encima de la foto (rutas, ideas de viaje). */
export function StoryCard({ href, image, title, kicker, cursor = 'Ver' }: { href: string; image: string | null; title: string; kicker?: string; cursor?: string }) {
  return (
    <Link href={href} data-cursor={cursor} className="group relative block aspect-[3/4] w-[260px] shrink-0 overflow-hidden rounded-t-[999px] bg-stone sm:w-[300px]">
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
      )}
      {/* Velo neutro solo bajo el texto. */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="font-display text-lead leading-[1.05]">{title}</p>
        {kicker && <p className="meta mt-2 text-white/85">{kicker}</p>}
      </div>
    </Link>
  );
}

const STATUS_LABEL = { upcoming: 'Próximamente', happening: 'Está pasando', past: 'Ya pasó' } as const;

/** Renglón de evento: la fecha grande a la izquierda, sin líneas; el paso de tono aparece al pasar el cursor. */
export function EventCard({ event, today }: { event: TequisEvent; today: string }) {
  const status = eventStatus(event, today);
  const start = new Date(`${event.startDate}T00:00:00Z`);
  return (
    <Link href={`/evento/${event.slug}`} data-cursor="Ver" data-reveal="up" className="group -mx-4 flex items-center gap-6 px-4 py-5 transition-colors duration-300 hover:bg-surface">
      <div className="w-20 shrink-0">
        <p className="font-display text-5xl leading-none tracking-[-0.02em]">{start.getUTCDate()}</p>
        <p className="meta mt-1 text-muted">{new Intl.DateTimeFormat('es-MX', { month: 'long', timeZone: 'UTC' }).format(start)}</p>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lead leading-[1.05]">{event.title}</h3>
        <p className="mt-1.5 text-muted">
          <span className={status === 'happening' ? 'font-medium text-ok' : ''}>{STATUS_LABEL[status]}</span>
          {' · '}
          {formatDateRange(event.startDate, event.endDate)}
          {event.locationName && <> · {event.locationName}</>}
        </p>
      </div>
      <div className="hidden w-44 shrink-0 overflow-hidden sm:block">
        <Photo src={event.thumbnailUrl} alt={event.title} label={event.category} className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-105" />
      </div>
    </Link>
  );
}

/** Evento con foto grande (el primero de la agenda de la portada, "Mi viaje"). */
export function EventTile({ event, today, reveal = true, large = false }: { event: TequisEvent; today: string; reveal?: boolean; large?: boolean }) {
  const status = eventStatus(event, today);
  return (
    <article {...(reveal ? { 'data-reveal': 'up' } : {})} className="group relative h-full">
      <Link href={`/evento/${event.slug}`} data-cursor="Ver" className="flex h-full flex-col">
        <div className="overflow-hidden bg-surface">
          <Photo src={event.thumbnailUrl} alt={event.title} label={event.category} className={`${large ? 'aspect-[16/11]' : 'aspect-[4/3]'} w-full transition-transform duration-700 group-hover:scale-105`} />
        </div>
        <div className="pt-5">
          <p className="text-muted">
            <span className={status === 'happening' ? 'font-medium text-ok' : ''}>{status === 'happening' ? 'Está pasando' : event.category}</span>
            {' · '}
            {formatDateRange(event.startDate, event.endDate)}
          </p>
          <h3 className={`mt-2 font-display leading-[1.02] tracking-[-0.015em] group-hover:underline ${large ? 'text-[clamp(2rem,3.4vw,3rem)]' : 'text-[1.75rem]'}`}>{event.title}</h3>
          {event.shortDescription && <p className="mt-2 line-clamp-2 max-w-[48ch] text-muted">{event.shortDescription}</p>}
        </div>
      </Link>
      <SaveButton id={eventKey(event.id)} name={event.title} className="absolute right-3 top-3" />
    </article>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

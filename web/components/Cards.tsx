import Link from 'next/link';
import { CATEGORIES, PRICE_RANGES, eventStatus, formatDateRange, type Place, type TequisEvent } from '@/lib/data';

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
  return <span className={`eyebrow !text-[11px] ${className}`}>{CATEGORIES[category].label}</span>;
}

export function PlaceCard({ place }: { place: Place }) {
  const price = PRICE_RANGES[place.priceRange];
  return (
    <Link href={`/lugar/${place.slug}`} data-cursor="Ver" data-reveal="up" className="group block">
      <div className="overflow-hidden rounded-[22px] shadow-[0_18px_30px_-22px_rgba(31,26,23,0.5)] transition-shadow duration-500 group-hover:shadow-[0_28px_40px_-22px_rgba(31,26,23,0.6)]">
        <Photo
          src={place.thumbnailUrl}
          alt={place.name}
          label={place.subcategory}
          className="aspect-[4/3] w-full transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="pt-4">
        <CategoryPill category={place.category} className="text-muted" />
        <h3 className="mt-1.5 font-display text-2xl leading-snug group-hover:underline">{place.name}</h3>
        <p className="mt-1 line-clamp-2 text-[15px] text-muted">{place.shortDescription}</p>
        <p className="mt-2 text-sm text-muted">
          {place.subcategory}
          {price && <> · {price.symbol}</>}
        </p>
      </div>
    </Link>
  );
}

/** Tarjeta vertical con el texto en serif encima de la foto (las "ideas de viaje" de la referencia). */
export function StoryCard({ href, image, title, kicker, cursor = 'Ver' }: { href: string; image: string | null; title: string; kicker?: string; cursor?: string }) {
  return (
    <Link
      href={href}
      data-cursor={cursor}
      className="group relative block aspect-[3/4] w-[260px] shrink-0 overflow-hidden rounded-t-[999px] rounded-b-[22px] bg-stone shadow-[0_24px_40px_-24px_rgba(31,26,23,0.55)] sm:w-[300px]"
    >
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        {kicker && <p className="eyebrow !text-[11px] text-white/80">{kicker}</p>}
        <p className="mt-2 font-display text-[1.7rem] leading-[1.1] transition-transform duration-500 group-hover:-translate-y-1">{title}</p>
      </div>
    </Link>
  );
}

const STATUS_LABEL = { upcoming: 'Próximamente', happening: 'Está pasando', past: 'Ya pasó' } as const;

export function EventCard({ event, today }: { event: TequisEvent; today: string }) {
  const status = eventStatus(event, today);
  const start = new Date(`${event.startDate}T00:00:00Z`);
  return (
    <Link href={`/evento/${event.slug}`} data-cursor="Ver" data-reveal="up" className="group flex gap-5 border-t border-line py-6 transition-[padding] duration-500 hover:px-3">
      <div className="w-16 shrink-0 text-center">
        <p className="font-display text-4xl leading-none">{start.getUTCDate()}</p>
        <p className="eyebrow mt-1 !text-[11px]">{new Intl.DateTimeFormat('es-MX', { month: 'short', timeZone: 'UTC' }).format(start).replace('.', '')}</p>
      </div>
      <div className="min-w-0 flex-1">
        <p className={`eyebrow !text-[11px] ${status === 'happening' ? 'text-ok' : 'text-muted'}`}>
          {STATUS_LABEL[status]} · {event.category}
        </p>
        <h3 className="mt-1 font-display text-2xl leading-snug group-hover:underline">{event.title}</h3>
        <p className="mt-1 text-[15px] text-muted">
          {formatDateRange(event.startDate, event.endDate)}
          {event.locationName && <> · {event.locationName}</>}
        </p>
      </div>
      <div className="hidden w-40 shrink-0 overflow-hidden rounded-2xl sm:block">
        <Photo src={event.thumbnailUrl} alt={event.title} label={event.category} className="aspect-[4/3] w-full transition duration-700 group-hover:scale-105" />
      </div>
    </Link>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, MapPin, Navigation, Repeat, Ticket, User } from 'lucide-react';
import { SITE_URL, eventKey, eventStatus, formatDateRange, getEvent, getEvents, mapsDirectionsUrl, todayInTequis } from '@/lib/data';
import { dict } from '@/lib/dict';
import { LANGS, alternates, href, langOf } from '@/lib/i18n';
import { JsonLd, Photo } from '@/components/Cards';
import SaveButton from '@/components/SaveButton';
import PlacesMap from '@/components/PlacesMap';

export const revalidate = 300;

export async function generateStaticParams() {
  const events = await getEvents();
  return LANGS.flatMap((lang) => events.map((e) => ({ lang, slug: e.slug })));
}

export async function generateMetadata({ params }: PageProps<'/[lang]/evento/[slug]'>): Promise<Metadata> {
  const p = await params;
  const lang = langOf(p);
  const event = await getEvent(p.slug, lang);
  if (!event) return {};
  const en = lang === 'en';
  const year = Number(event.startDate.slice(0, 4));
  const range = formatDateRange(event.startDate, event.endDate, lang);
  // Un evento anual que ya pasó no lleva el año en el título: la gente ya busca el siguiente
  // ("feria del queso y vino 2027") y "… 2026" se ve viejo. La descripción dice cuándo fue la
  // última edición y que la siguiente fecha no se ha anunciado (lo mismo que dice la ficha).
  const pastRecurring = event.isRecurring && eventStatus(event, todayInTequis()) === 'past';
  const town = en ? 'in Tequisquiapan' : 'en Tequisquiapan';
  const oneDay = event.startDate === event.endDate;
  const description = pastRecurring
    ? en
      ? `${event.shortDescription}. The ${year} edition ${oneDay ? 'was held on' : 'ran'} ${range}; ${year + 1} dates have not been announced yet. Tequisquiapan, Querétaro, Mexico.`
      : `${event.shortDescription}. La edición ${year} se celebró ${oneDay ? 'el' : 'del'} ${range}; las fechas de ${year + 1} aún no se anuncian. Tequisquiapan, Querétaro.`
    : `${event.shortDescription}. ${range} ${en ? 'in Tequisquiapan, Querétaro, Mexico.' : 'en Tequisquiapan, Querétaro.'}`;
  return {
    title: pastRecurring ? `${event.title} ${town}` : `${event.title} ${year} ${town}`,
    description,
    alternates: alternates(lang, `/evento/${event.slug}`),
    openGraph: { title: event.title, description, images: event.thumbnailUrl ? [event.thumbnailUrl] : undefined },
  };
}

export default async function EventoPage({ params }: PageProps<'/[lang]/evento/[slug]'>) {
  const p = await params;
  const lang = langOf(p);
  const t = dict(lang);
  const en = lang === 'en';
  const event = await getEvent(p.slug, lang);
  if (!event) notFound();
  const status = eventStatus(event, todayInTequis());
  const hasLocation = event.latitude != null && event.longitude != null;
  const pageUrl = `${SITE_URL}${href(lang, `/evento/${event.slug}`)}`;
  // Precio solo de la base, lo mismo que dice la ficha: gratis → 0 (como lo pide Google) y "Desde
  // $350" → 350. Sin precio ni boletos, no hay offers. No hay organizer.url, performer ni validFrom
  // porque la base no los tiene: Search Console los marca como recomendados, pero no se inventan.
  const price = event.isFree ? 0 : priceFrom(event.ticketPrice);
  const offers =
    price != null || event.ticketUrl
      ? {
          '@type': 'Offer',
          url: event.ticketUrl ?? pageUrl,
          ...(price != null && { price, priceCurrency: 'MXN' }),
          availability: 'https://schema.org/InStock',
        }
      : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.fullDescription || event.shortDescription,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: pageUrl,
    inLanguage: lang === 'en' ? 'en' : 'es-MX',
    image: event.imageUrls.length ? event.imageUrls : undefined,
    isAccessibleForFree: event.isFree,
    location: {
      '@type': 'Place',
      name: event.locationName ?? 'Tequisquiapan',
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.address ?? undefined,
        addressLocality: 'Tequisquiapan',
        addressRegion: 'Querétaro',
        addressCountry: 'MX',
      },
      geo: hasLocation ? { '@type': 'GeoCoordinates', latitude: event.latitude, longitude: event.longitude } : undefined,
    },
    organizer: event.organizerName ? { '@type': 'Organization', name: event.organizerName } : undefined,
    offers,
  };

  return (
    <article>
      <JsonLd data={jsonLd} />
      <header className="frame pb-12 pt-40 sm:pt-48">
        <nav className="meta text-muted" aria-label={t.breadcrumb}>
          <Link href={href(lang, '/eventos')} className="hover:text-ink">{en ? 'Events' : 'Eventos'}</Link> · {event.category}
        </nav>
        <h1 data-split="lines" className="display mt-6 max-w-[13ch]">{event.title}</h1>
        <p className="mt-6 text-lead">
          {status === 'happening' && <span className="font-medium text-ok">{t.happeningNow}: </span>}
          {formatDateRange(event.startDate, event.endDate, lang)}
          {event.locationName && <>, {event.locationName}</>}
        </p>
        {status === 'past' && (
          <p className="mt-3 max-w-[60ch] text-muted">
            {en
              ? `This event already happened${event.isRecurring ? '. It takes place every year; we’ll post the next date as soon as it’s announced.' : '.'}`
              : `Este evento ya pasó${event.isRecurring ? '. Se celebra cada año; publicaremos la próxima fecha en cuanto se anuncie.' : '.'}`}
          </p>
        )}
        {status !== 'past' && <SaveButton id={eventKey(event.id)} name={event.title} lang={lang} variant="full" className="mt-6" />}
      </header>

      <div className="frame">
        <div data-reveal="image" className="overflow-hidden">
          <Photo src={event.thumbnailUrl} alt={event.title} label={event.category} sizes="100vw" className="aspect-[16/9] w-full" />
        </div>
      </div>

      <div className="frame mt-20 grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-24">
        <div>
          {event.shortDescription && <p className="max-w-[26ch] font-display text-title leading-[1.15] tracking-[-0.01em]">{event.shortDescription}</p>}
          {event.fullDescription && <p className="mt-6 max-w-[62ch]">{event.fullDescription}</p>}

          {hasLocation && (
            <section className="mt-12">
              <h2 className="font-display text-lead leading-none tracking-[-0.01em]">{en ? 'Where' : 'Dónde'}</h2>
              <div className="mt-4">
                <PlacesMap
                  className="h-80"
                  zoom={16}
                  lang={lang}
                  points={[{ id: event.id, name: event.locationName ?? event.title, href: href(lang, `/evento/${event.slug}`), subtitle: event.address ?? '', lat: event.latitude!, lng: event.longitude!, color: '#38492a', image: event.thumbnailUrl }]}
                />
              </div>
            </section>
          )}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <ul className="space-y-4 bg-surface p-6">
            <li className="flex gap-3"><CalendarDays className="mt-0.5 size-4 shrink-0" aria-hidden /> {formatDateRange(event.startDate, event.endDate, lang)}</li>
            {event.locationName && <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden /> {event.locationName}</li>}
            <li className="flex gap-3">
              <Ticket className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>
                {event.isFree ? (en ? 'Free entry' : 'Entrada libre') : event.ticketPrice ?? (en ? 'Paid entry' : 'Con costo')}
                {event.requiresReservation && (en ? ' · reservation required' : ' · requiere reservación')}
              </span>
            </li>
            {event.isRecurring && <li className="flex gap-3"><Repeat className="mt-0.5 size-4 shrink-0" aria-hidden /> {en ? 'Takes place every year' : 'Se celebra cada año'}</li>}
            {event.organizerName && <li className="flex gap-3"><User className="mt-0.5 size-4 shrink-0" aria-hidden /> {event.organizerName}</li>}
            {hasLocation && (
              <li>
                <a href={mapsDirectionsUrl(event.latitude!, event.longitude!)} target="_blank" rel="noopener" className="btn mt-2 w-full justify-center">
                  <Navigation className="size-4" aria-hidden /> {t.directions}
                </a>
              </li>
            )}
            {event.ticketUrl && (
              <li>
                <a href={event.ticketUrl} target="_blank" rel="noopener" className="btn-outline w-full justify-center">{en ? 'Tickets' : 'Boletos'}</a>
              </li>
            )}
          </ul>
        </aside>
      </div>
    </article>
  );
}

/** Primera cifra de un precio escrito a mano ("Desde $350", "$1,200 por persona") o null. */
function priceFrom(text: string | null): number | null {
  const m = text?.match(/\d[\d,]*(?:\.\d+)?/);
  return m ? Number(m[0].replace(/,/g, '')) : null;
}

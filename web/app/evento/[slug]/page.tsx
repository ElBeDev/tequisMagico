import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, MapPin, Navigation, Repeat, Ticket, User } from 'lucide-react';
import { SITE_URL, eventKey, eventStatus, formatDateRange, getEvent, getEvents, mapsDirectionsUrl, todayInTequis } from '@/lib/data';
import { JsonLd, Photo } from '@/components/Cards';
import SaveButton from '@/components/SaveButton';
import PlacesMap from '@/components/PlacesMap';

export const revalidate = 300;

export async function generateStaticParams() {
  return (await getEvents()).map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<'/evento/[slug]'>): Promise<Metadata> {
  const event = await getEvent((await params).slug);
  if (!event) return {};
  const description = `${event.shortDescription}. ${formatDateRange(event.startDate, event.endDate)} en Tequisquiapan, Querétaro.`;
  return {
    title: `${event.title} ${event.startDate.slice(0, 4)}`,
    description,
    alternates: { canonical: `/evento/${event.slug}` },
    openGraph: { title: event.title, description, images: event.thumbnailUrl ? [event.thumbnailUrl] : undefined },
  };
}

export default async function EventoPage({ params }: PageProps<'/evento/[slug]'>) {
  const event = await getEvent((await params).slug);
  if (!event) notFound();
  const status = eventStatus(event, todayInTequis());
  const hasLocation = event.latitude != null && event.longitude != null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.fullDescription || event.shortDescription,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: `${SITE_URL}/evento/${event.slug}`,
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
    offers: event.ticketUrl ? { '@type': 'Offer', url: event.ticketUrl, availability: 'https://schema.org/InStock' } : undefined,
  };

  return (
    <article>
      <JsonLd data={jsonLd} />
      <header className="frame pb-12 pt-40 sm:pt-48">
        <nav className="meta text-muted" aria-label="Ruta de navegación">
          <Link href="/eventos" className="hover:text-ink">Eventos</Link> · {event.category}
        </nav>
        <h1 data-split="lines" className="display mt-6 max-w-[13ch]">{event.title}</h1>
        <p className="mt-6 text-lead">
          {status === 'happening' && <span className="font-medium text-ok">Está pasando: </span>}
          {formatDateRange(event.startDate, event.endDate)}
          {event.locationName && <>, {event.locationName}</>}
        </p>
        {status === 'past' && (
          <p className="mt-3 max-w-[60ch] text-muted">
            Este evento ya pasó{event.isRecurring ? '. Se celebra cada año; publicaremos la próxima fecha en cuanto se anuncie.' : '.'}
          </p>
        )}
        {status !== 'past' && <SaveButton id={eventKey(event.id)} name={event.title} variant="full" className="mt-6" />}
      </header>

      <div className="frame">
        <div data-reveal="image" className="overflow-hidden">
          <Photo src={event.thumbnailUrl} alt={event.title} label={event.category} sizes="100vw" className="aspect-[16/9] w-full" />
        </div>
      </div>

      <div className="frame mt-20 grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-24">
        <div>
          {event.shortDescription && <p className="max-w-[26ch] font-display text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.15] tracking-[-0.01em]">{event.shortDescription}</p>}
          {event.fullDescription && <p className="mt-6 max-w-[62ch]">{event.fullDescription}</p>}

          {hasLocation && (
            <section className="mt-12">
              <h2 className="font-display text-lead leading-none tracking-[-0.01em]">Dónde</h2>
              <div className="mt-4">
                <PlacesMap
                  className="h-80"
                  zoom={16}
                  points={[{ id: event.id, name: event.locationName ?? event.title, href: `/evento/${event.slug}`, subtitle: event.address ?? '', lat: event.latitude!, lng: event.longitude!, color: '#38492a', image: event.thumbnailUrl }]}
                />
              </div>
            </section>
          )}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <ul className="space-y-4 bg-surface p-6">
            <li className="flex gap-3"><CalendarDays className="mt-0.5 size-4 shrink-0" aria-hidden /> {formatDateRange(event.startDate, event.endDate)}</li>
            {event.locationName && <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden /> {event.locationName}</li>}
            <li className="flex gap-3">
              <Ticket className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>
                {event.isFree ? 'Entrada libre' : event.ticketPrice ?? 'Con costo'}
                {event.requiresReservation && ' · requiere reservación'}
              </span>
            </li>
            {event.isRecurring && <li className="flex gap-3"><Repeat className="mt-0.5 size-4 shrink-0" aria-hidden /> Se celebra cada año</li>}
            {event.organizerName && <li className="flex gap-3"><User className="mt-0.5 size-4 shrink-0" aria-hidden /> {event.organizerName}</li>}
            {hasLocation && (
              <li>
                <a href={mapsDirectionsUrl(event.latitude!, event.longitude!)} target="_blank" rel="noopener" className="btn mt-2 w-full justify-center">
                  <Navigation className="size-4" aria-hidden /> Cómo llegar
                </a>
              </li>
            )}
            {event.ticketUrl && (
              <li>
                <a href={event.ticketUrl} target="_blank" rel="noopener" className="btn-outline w-full justify-center">Boletos</a>
              </li>
            )}
          </ul>
        </aside>
      </div>
    </article>
  );
}

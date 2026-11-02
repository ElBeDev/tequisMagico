import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, MapPin, Navigation, Repeat, Ticket, User } from 'lucide-react';
import { SITE_URL, eventStatus, formatDateRange, getEvent, getEvents, mapsDirectionsUrl, todayInTequis } from '@/lib/data';
import { JsonLd, Photo } from '@/components/Cards';
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
      <header className="mx-auto max-w-3xl px-5 pb-10 pt-36 text-center sm:pt-44">
        <nav className="eyebrow !text-[12px] text-muted" aria-label="Ruta de navegación">
          <Link href="/eventos" className="hover:text-ink">Eventos</Link> · {event.category}
        </nav>
        <h1 data-split="lines" className="mt-4 font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05]">{event.title}</h1>
        <p className="mt-4 text-lg">{formatDateRange(event.startDate, event.endDate)}</p>
        {status === 'happening' && <p className="eyebrow mt-3 text-ok">Está pasando ahora</p>}
        {status === 'past' && (
          <p className="mt-3 text-[15px] text-muted">
            Este evento ya pasó{event.isRecurring ? '. Se celebra cada año; publicaremos la próxima fecha en cuanto se anuncie.' : '.'}
          </p>
        )}
      </header>

      <div className="mx-auto max-w-[1240px] px-5">
        <div data-reveal="image" className="overflow-hidden">
          <Photo src={event.thumbnailUrl} alt={event.title} label={event.category} className="aspect-[16/9] w-full" />
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1140px] grid-cols-1 gap-14 px-5 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div>
          {event.shortDescription && <p className="font-display text-[1.7rem] leading-snug">{event.shortDescription}</p>}
          {event.fullDescription && <p className="mt-5 text-[17px] leading-relaxed">{event.fullDescription}</p>}

          {hasLocation && (
            <section className="mt-12">
              <h2 className="eyebrow">Dónde</h2>
              <div className="mt-4">
                <PlacesMap
                  className="h-80"
                  zoom={16}
                  points={[{ id: event.id, name: event.locationName ?? event.title, href: `/evento/${event.slug}`, subtitle: event.address ?? '', lat: event.latitude!, lng: event.longitude!, color: '#38492a' }]}
                />
              </div>
            </section>
          )}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <ul className="space-y-4 border border-ink p-6 text-[15px]">
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
                <a href={mapsDirectionsUrl(event.latitude!, event.longitude!)} target="_blank" rel="noopener" className="btn-outline mt-2 w-full justify-center">
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

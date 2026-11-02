import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BadgeCheck, Globe, Info, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { CATEGORIES, PRICE_RANGES, SITE_URL, getPlace, getPlaces, mapsDirectionsUrl, type Place } from '@/lib/data';
import { openingHoursSpec, scheduleEntries } from '@/lib/schedule';
import { JsonLd, Photo, PlaceCard } from '@/components/Cards';
import { SectionTitle } from '@/components/Section';
import OpenNow from '@/components/OpenNow';
import PlacesMap from '@/components/PlacesMap';

export const revalidate = 300;

export async function generateStaticParams() {
  return (await getPlaces()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<'/lugar/[slug]'>): Promise<Metadata> {
  const place = await getPlace((await params).slug);
  if (!place) return {};
  const description = place.shortDescription
    ? `${place.shortDescription}. ${place.subcategory} en Tequisquiapan, Querétaro.`
    : `${place.subcategory} en Tequisquiapan, Querétaro.`;
  return {
    title: `${place.name} · ${place.subcategory} en Tequisquiapan`,
    description,
    alternates: { canonical: `/lugar/${place.slug}` },
    openGraph: { title: place.name, description, images: place.thumbnailUrl ? [place.thumbnailUrl] : undefined, type: 'website' },
  };
}

function schemaType(place: Place): string {
  const sub = place.subcategory.toLowerCase();
  switch (place.category) {
    case 'gastronomia':
      if (sub.includes('caf')) return 'CafeOrCoffeeShop';
      if (sub.includes('bar')) return 'BarOrPub';
      return 'Restaurant';
    case 'hospedaje':
      return sub.includes('hotel') ? 'Hotel' : 'LodgingBusiness';
    case 'compras':
      return 'Store';
    case 'experiencias':
      if (sub.includes('viñedo')) return 'Winery';
      if (sub.includes('spa')) return 'DaySpa';
      return 'TouristAttraction';
    default:
      return 'TouristAttraction';
  }
}

function whatsappLink(number: string): string {
  const digits = number.replace(/\D/g, '');
  return `https://wa.me/${digits.length === 10 ? `52${digits}` : digits}`;
}

function distanceKm(a: Place, b: Place): number {
  const rad = (d: number) => (d * Math.PI) / 180;
  const dLat = rad(b.latitude - a.latitude);
  const dLng = rad(b.longitude - a.longitude);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.latitude)) * Math.cos(rad(b.latitude)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

export default async function LugarPage({ params }: PageProps<'/lugar/[slug]'>) {
  const { slug } = await params;
  const places = await getPlaces();
  const place = places.find((p) => p.slug === slug);
  if (!place) notFound();

  const c = CATEGORIES[place.category];
  const price = PRICE_RANGES[place.priceRange];
  const schedule = scheduleEntries(place.schedule);
  const photos = place.imageUrls.length ? place.imageUrls : place.thumbnailUrl ? [place.thumbnailUrl] : [];
  const nearby = places
    .filter((p) => p.id !== place.id)
    .map((p) => ({ p, d: distanceKm(place, p) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, 3)
    .map(({ p }) => p);

  // A Google solo se le pasan teléfono y horario cuando están confirmados (content_verified):
  // lo que Google muestra en sus resultados se replica mucho más que la página misma.
  const hours = place.contentVerified ? openingHoursSpec(place.schedule) : null;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': schemaType(place),
    name: place.name,
    description: place.fullDescription || place.shortDescription,
    url: `${SITE_URL}/lugar/${place.slug}`,
    image: photos.length ? photos : undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: place.address || undefined,
      addressLocality: 'Tequisquiapan',
      addressRegion: 'Querétaro',
      addressCountry: 'MX',
    },
    geo: { '@type': 'GeoCoordinates', latitude: place.latitude, longitude: place.longitude },
    telephone: place.contentVerified && place.phoneNumber ? place.phoneNumber : undefined,
    sameAs: place.website ?? undefined,
    priceRange: price?.symbol !== 'Gratis' ? price?.symbol : undefined,
    isAccessibleForFree: place.priceRange === 'free' ? true : undefined,
    openingHours: hours ?? undefined,
    amenityFeature: place.amenities.length
      ? place.amenities.map((a) => ({ '@type': 'LocationFeatureSpecification', name: a, value: true }))
      : undefined,
  };

  return (
    <article>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Lugares', item: `${SITE_URL}/lugares` },
            { '@type': 'ListItem', position: 2, name: c.label, item: `${SITE_URL}/lugares/${c.slug}` },
            { '@type': 'ListItem', position: 3, name: place.name },
          ],
        }}
      />

      <header className="mx-auto max-w-3xl px-5 pb-10 pt-36 text-center sm:pt-44">
        <nav className="eyebrow !text-[12px] text-muted" aria-label="Ruta de navegación">
          <Link href="/lugares" className="hover:text-ink">Lugares</Link> · <Link href={`/lugares/${c.slug}`} className="hover:text-ink">{c.label}</Link>
        </nav>
        <h1 data-split="lines" className="mt-4 font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.05]">{place.name}</h1>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[15px] text-muted">
          <span>{place.subcategory}</span>
          {price && <span>· {price.symbol}{price.symbol !== price.label && ` · ${price.label}`}</span>}
          {place.isVerified && (
            <span className="inline-flex items-center gap-1 font-medium text-ink">
              <BadgeCheck className="size-4" aria-hidden /> Verificado
            </span>
          )}
          <OpenNow schedule={place.schedule} />
        </div>
      </header>

      <div className={`mx-auto grid max-w-[1240px] grid-cols-1 gap-2 px-5 ${photos.length > 1 ? 'sm:grid-cols-[2fr_1fr]' : ''}`}>
        <div data-reveal="image" className="overflow-hidden rounded-[28px]">
          <Photo src={photos[0] ?? null} alt={place.name} label={place.subcategory} className="aspect-[16/9] w-full" />
        </div>
        {photos.length > 1 && (
          <div className={`hidden gap-2 sm:grid ${photos.length > 2 ? 'grid-rows-2' : ''}`}>
            {photos.slice(1, 3).map((src) => (
              <Photo key={src} src={src} alt={place.name} className="size-full rounded-[28px]" />
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto mt-16 grid max-w-[1140px] grid-cols-1 gap-14 px-5 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div>
          {place.shortDescription && <p data-split="lines" className="font-display text-[1.7rem] leading-snug">{place.shortDescription}</p>}
          {place.fullDescription && <p data-reveal="up" className="mt-5 text-[17px] leading-relaxed">{place.fullDescription}</p>}

          {place.amenities.length > 0 && (
            <section className="mt-12">
              <h2 className="eyebrow">Servicios</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {place.amenities.map((a) => (
                  <li key={a} className="border border-line px-3 py-1.5 text-[15px]">{a}</li>
                ))}
              </ul>
            </section>
          )}

          {schedule.length > 0 && (
            <section className="mt-12">
              <h2 className="eyebrow">Horarios</h2>
              <dl className="mt-4 divide-y divide-line border-y border-line">
                {schedule.map((s) => (
                  <div key={s.day} className="flex justify-between gap-4 py-3 text-[15px]">
                    <dt className="font-medium">{s.day}</dt>
                    <dd className="text-right text-muted">{s.hours}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <section className="mt-12">
            <h2 className="eyebrow">Ubicación</h2>
            <div className="mt-4">
              <PlacesMap
                className="h-80"
                zoom={16}
                points={[{ id: place.id, name: place.name, href: `/lugar/${place.slug}`, subtitle: place.address, lat: place.latitude, lng: place.longitude, color: '#38492a', image: place.thumbnailUrl }]}
              />
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div data-reveal="up" className="space-y-4 rounded-[24px] border border-ink/80 p-6 text-[15px]">
            {place.address && (
              <p className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden /> {/tequisquiapan/i.test(place.address) ? place.address : `${place.address}, Tequisquiapan, Qro.`}</p>
            )}
            {place.phoneNumber && (
              <a href={`tel:${place.phoneNumber.replace(/[^\d+]/g, '')}`} className="flex gap-3 hover:underline">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden /> {place.phoneNumber}
              </a>
            )}
            {place.whatsappNumber && (
              <a href={whatsappLink(place.whatsappNumber)} target="_blank" rel="noopener" className="flex gap-3 hover:underline">
                <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden /> WhatsApp
              </a>
            )}
            {place.website && (
              <a href={place.website} target="_blank" rel="noopener" className="flex gap-3 break-all hover:underline">
                <Globe className="mt-0.5 size-4 shrink-0" aria-hidden /> {place.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
              </a>
            )}
            {place.email && (
              <a href={`mailto:${place.email}`} className="flex gap-3 break-all hover:underline">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden /> {place.email}
              </a>
            )}
            <a href={mapsDirectionsUrl(place.latitude, place.longitude)} target="_blank" rel="noopener" className="btn-outline mt-2 w-full justify-center">
              <Navigation className="size-4" aria-hidden /> Cómo llegar
            </a>
          </div>

          {!place.contentVerified && (
            <p className="flex gap-3 rounded-[20px] bg-surface p-5 text-sm text-muted">
              <Info className="size-4 shrink-0" aria-hidden />
              Todavía no confirmamos el teléfono y el horario de este lugar con el negocio. Llama antes de ir.
            </p>
          )}

          {place.tags.length > 0 && (
            <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
              {place.tags.map((t) => (
                <li key={t}>#{t}</li>
              ))}
            </ul>
          )}
        </aside>
      </div>

      {nearby.length > 0 && (
        <section className="mx-auto mt-28 max-w-[1240px] px-5">
          <SectionTitle eyebrow="Muy cerca" title="Cerca de aquí" serif="para seguir el paseo" />
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((p) => (
              <PlaceCard key={p.id} place={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

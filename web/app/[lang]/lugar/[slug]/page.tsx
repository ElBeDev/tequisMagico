import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BadgeCheck, Globe, Info, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { SITE_URL, categoryInfo, getPlace, getPlaces, isIndexable, mapsDirectionsUrl, placeKey, priceInfo, type Place } from '@/lib/data';
import { dict } from '@/lib/dict';
import { LANGS, alternates, href, langOf, type Lang } from '@/lib/i18n';
import { openingHoursSpec, scheduleEntries } from '@/lib/schedule';
import { JsonLd, Photo, PlaceCard } from '@/components/Cards';
import { SectionTitle } from '@/components/Section';
import OpenNow from '@/components/OpenNow';
import { FacebookIcon, InstagramIcon, instagramHandle } from '@/components/SocialIcons';
import SaveButton from '@/components/SaveButton';
import PlacesMap from '@/components/PlacesMap';

export const revalidate = 300;

export async function generateStaticParams() {
  const places = await getPlaces();
  return LANGS.flatMap((lang) => places.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: PageProps<'/[lang]/lugar/[slug]'>): Promise<Metadata> {
  const p = await params;
  const lang = langOf(p);
  const place = await getPlace(p.slug, lang);
  if (!place) return {};
  const description = metaDescription(place, lang);
  return {
    title: `${place.name} · ${place.subcategory} ${lang === 'en' ? 'in' : 'en'} Tequisquiapan`,
    description,
    alternates: alternates(lang, `/lugar/${place.slug}`),
    // Ficha delgada (lib/data.ts): visible en el sitio, pero no en Google. `follow` para que siga los links.
    robots: isIndexable(place) ? undefined : { index: false, follow: true },
    openGraph: { title: place.name, description, images: place.thumbnailUrl ? [place.thumbnailUrl] : undefined, type: 'website' },
  };
}

// Galería de la ficha. Las fotos de los negocios vienen en cualquier proporción (horizontales,
// cuadradas, verticales), así que el bloque tiene alto fijo y cada foto se recorta a su celda: si
// cada una toma su alto natural, la columna derecha no cuadra con la principal. En pantalla ancha:
// la principal a la izquierda y hasta tres a la derecha (una arriba y dos abajo). En celular: la
// principal y las demás como miniaturas cuadradas debajo.
const SIDE_COLS = ['', 'grid-cols-1', 'grid-cols-2', 'grid-cols-3'];
// Lugar de cada foto de la derecha según cuántas hay (1, 2 o 3) en la rejilla de 2 × 2.
const SIDE_CELLS = [[], ['sm:col-span-2 sm:row-span-2'], ['sm:col-span-2', 'sm:col-span-2'], ['sm:col-span-2', '', '']];

function Gallery({ photos, name, label }: { photos: string[]; name: string; label: string }) {
  const [main = null, ...rest] = photos;
  const side = rest.slice(0, 3);
  if (side.length === 0) {
    return (
      <div className="frame">
        <div data-reveal="image" className="overflow-hidden">
          <Photo src={main} alt={name} label={label} sizes="100vw" className="aspect-[16/9] w-full" />
        </div>
      </div>
    );
  }
  return (
    <div className="frame grid grid-cols-1 gap-2 sm:aspect-[16/7] sm:grid-cols-[2fr_1fr]">
      <div data-reveal="image" className="min-h-0 overflow-hidden">
        <Photo src={main} alt={name} label={label} sizes="(min-width: 640px) 66vw, 100vw" className="aspect-[4/3] w-full sm:aspect-auto sm:h-full" />
      </div>
      <div className={`grid min-h-0 gap-2 ${SIDE_COLS[side.length]} sm:grid-cols-2 sm:grid-rows-2`}>
        {side.map((src, i) => (
          <div key={src} data-reveal="image" className={`aspect-square min-h-0 overflow-hidden sm:aspect-auto ${SIDE_CELLS[side.length][i]}`}>
            <Photo src={src} alt={name} sizes="(min-width: 640px) 33vw, 33vw" className="size-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Lo que sale en Google bajo el título. Search Console (nov 2026) mostraba fichas en la posición 5–8
// sin un solo clic con "Corazón del pueblo mágico. Plaza en Tequisquiapan, Querétaro.": no decía qué
// trae la ficha. Ahora lo dice, pero solo lo que de verdad muestra: precios (si la descripción los da),
// teléfono, horario, fotos del propio negocio (no la genérica de Commons), mapa y cómo llegar.
function metaDescription(place: Place, lang: Lang): string {
  const en = lang === 'en';
  const has = [
    /\$\s?\d/.test(place.fullDescription) && (en ? 'prices' : 'precios'),
    place.phoneNumber && (en ? 'phone' : 'teléfono'),
    place.scheduleText && Object.keys(place.scheduleText).length > 0 && (en ? 'opening hours' : 'horario'),
    place.imageUrls.some((u) => !u.includes('wikimedia.org') && !u.includes('/uploads/commons/')) && (en ? 'photos' : 'fotos'),
  ].filter(Boolean) as string[];
  const list = [...has, en ? 'map and directions' : 'mapa y cómo llegar'].join(', ');
  const lead = place.shortDescription ? `${place.shortDescription}. ` : '';
  return en
    ? `${lead}${place.subcategory} in Tequisquiapan, Querétaro, Mexico: ${list}.`
    : `${lead}${place.subcategory} en Tequisquiapan, Querétaro: ${list}.`;
}

function schemaType(place: Place): string {
  const sub = place.subcategoryKey.toLowerCase();
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

export default async function LugarPage({ params }: PageProps<'/[lang]/lugar/[slug]'>) {
  const { slug, lang: rawLang } = await params;
  const lang = langOf({ lang: rawLang });
  const t = dict(lang);
  const en = lang === 'en';
  const places = await getPlaces(lang);
  const place = places.find((p) => p.slug === slug);
  if (!place) notFound();

  const c = categoryInfo(lang, place.category);
  const price = priceInfo(lang, place.priceRange);
  const schedule = scheduleEntries(place.scheduleText, lang);
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
    url: `${SITE_URL}${href(lang, `/lugar/${place.slug}`)}`,
    inLanguage: lang === 'en' ? 'en' : 'es-MX',
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
    // Web y cuentas oficiales: Google las usa para unir la ficha con el perfil del negocio.
    sameAs: [place.website, place.instagramUrl, place.facebookUrl].some(Boolean) ? [place.website, place.instagramUrl, place.facebookUrl].filter(Boolean) : undefined,
    priceRange: place.priceRange !== 'free' ? price?.symbol : undefined,
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
            { '@type': 'ListItem', position: 1, name: en ? 'Places' : 'Lugares', item: `${SITE_URL}${href(lang, '/lugares')}` },
            { '@type': 'ListItem', position: 2, name: c.label, item: `${SITE_URL}${href(lang, `/lugares/${c.slug}`)}` },
            { '@type': 'ListItem', position: 3, name: place.name },
          ],
        }}
      />

      <header className="frame pb-12 pt-40 sm:pt-48">
        <nav className="meta text-muted" aria-label={t.breadcrumb}>
          <Link href={href(lang, '/lugares')} className="hover:text-ink">{en ? 'Places' : 'Lugares'}</Link> ·{' '}
          <Link href={href(lang, `/lugares/${c.slug}`)} className="hover:text-ink">{c.label}</Link>
        </nav>
        <h1 data-split="lines" className="display mt-6 max-w-[13ch]">{place.name}</h1>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-lead text-muted">
          <span>{place.subcategory}</span>
          {price && <span>· {price.symbol}{price.symbol !== price.label && ` · ${price.label}`}</span>}
          {place.isVerified && (
            <span className="inline-flex items-center gap-1 font-medium text-ink">
              <BadgeCheck className="size-4" aria-hidden /> {en ? 'Verified' : 'Verificado'}
            </span>
          )}
          <OpenNow schedule={place.schedule} lang={lang} />
        </div>
        <SaveButton id={placeKey(place.id)} name={place.name} lang={lang} variant="full" className="mt-6" />
      </header>

      <Gallery photos={photos} name={place.name} label={place.subcategory} />

      <div className="frame mt-20 grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-24">
        <div>
          {place.shortDescription && <p data-split="lines" className="max-w-[26ch] font-display text-title leading-[1.15] tracking-[-0.01em]">{place.shortDescription}</p>}
          {place.fullDescription && <p data-reveal="up" className="mt-6 max-w-[62ch]">{place.fullDescription}</p>}

          {place.amenities.length > 0 && (
            <section className="mt-12">
              <h2 className="font-display text-lead leading-none tracking-[-0.01em]">{en ? 'Amenities' : 'Servicios'}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {place.amenities.map((a) => (
                  <li key={a} className="rounded-full bg-surface px-4 py-1.5">{a}</li>
                ))}
              </ul>
            </section>
          )}

          {schedule.length > 0 && (
            <section className="mt-12">
              <h2 className="font-display text-lead leading-none tracking-[-0.01em]">{en ? 'Hours' : 'Horarios'}</h2>
              <dl className="mt-4 space-y-1">
                {schedule.map((s) => (
                  <div key={s.day} className="flex max-w-md justify-between gap-4 py-2">
                    <dt className="font-medium">{s.day}</dt>
                    <dd className="text-right text-muted">{s.hours}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <section className="mt-12">
            <h2 className="font-display text-lead leading-none tracking-[-0.01em]">{en ? 'Location' : 'Ubicación'}</h2>
            <div className="mt-4">
              <PlacesMap
                className="h-80"
                zoom={16}
                lang={lang}
                points={[{ id: place.id, name: place.name, href: href(lang, `/lugar/${place.slug}`), subtitle: place.address, lat: place.latitude, lng: place.longitude, color: '#38492a', image: place.thumbnailUrl }]}
              />
            </div>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div data-reveal="up" className="space-y-4 bg-surface p-6">
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
            {place.instagramUrl && (
              <a href={place.instagramUrl} target="_blank" rel="noopener" className="flex gap-3 break-all hover:underline">
                <InstagramIcon className="mt-0.5 size-4 shrink-0" /> {instagramHandle(place.instagramUrl)}
              </a>
            )}
            {place.facebookUrl && (
              <a href={place.facebookUrl} target="_blank" rel="noopener" className="flex gap-3 hover:underline">
                <FacebookIcon className="mt-0.5 size-4 shrink-0" /> Facebook
              </a>
            )}
            {place.email && (
              <a href={`mailto:${place.email}`} className="flex gap-3 break-all hover:underline">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden /> {place.email}
              </a>
            )}
            <a href={mapsDirectionsUrl(place.latitude, place.longitude)} target="_blank" rel="noopener" className="btn mt-2 w-full justify-center">
              <Navigation className="size-4" aria-hidden /> {t.directions}
            </a>
          </div>

          {!place.contentVerified && (
            <p className="flex gap-3 bg-ochre/40 p-5">
              <Info className="size-4 shrink-0" aria-hidden />
              {en
                ? 'We haven’t confirmed this place’s phone number and hours with the business yet. Call before you go.'
                : 'Todavía no confirmamos el teléfono y el horario de este lugar con el negocio. Llama antes de ir.'}
            </p>
          )}

          {place.tags.length > 0 && (
            <ul className="meta flex flex-wrap gap-x-3 gap-y-1 text-muted">
              {place.tags.map((t) => (
                <li key={t}>#{t}</li>
              ))}
            </ul>
          )}
        </aside>
      </div>

      {nearby.length > 0 && (
        <section className="frame mt-40">
          <SectionTitle title={en ? 'Nearby' : 'Cerca de aquí'} />
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((p) => (
              <PlaceCard key={p.id} place={p} lang={lang} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

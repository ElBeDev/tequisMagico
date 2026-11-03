import Link from 'next/link';
import { SITE_NAME, SITE_URL, THEMATIC_ROUTES, eventStatus, getEvents, getPlaces, placesForRoute, toSummary, todayInTequis } from '@/lib/data';
import { GUIDES } from '@/lib/guides';
import { PHOTOS } from '@/lib/photos';
import { NEARBY, TEQUIS } from '@/lib/surroundings';
import { EventCard, EventTile, JsonLd, StoryCard } from '@/components/Cards';
import Hero from '@/components/Hero';
import Activities, { type Activity } from '@/components/Activities';
import EventStrip from '@/components/home/EventStrip';
import Intro from '@/components/home/Intro';
import ExploreTequis from '@/components/home/ExploreTequis';
import Featured from '@/components/home/Featured';
import BigWords from '@/components/home/BigWords';
import ColorShift from '@/components/home/ColorShift';
import DragRow from '@/components/home/DragRow';
import MapStory from '@/components/home/MapStory';
import Surroundings from '@/components/home/Surroundings';
import AppInvite from '@/components/home/AppInvite';
import { MoreLink, SectionTitle } from '@/components/Section';

export const revalidate = 300;

const HERO_SLIDES = [
  { src: PHOTOS.parroquiaAtardecer.src, alt: 'Parroquia de Santa María de la Asunción al atardecer', promise: 'un pueblo de cantera' },
  { src: PHOTOS.globoValle.src, alt: 'Globo aerostático sobre el valle de Tequisquiapan', promise: 'un amanecer en globo' },
  { src: PHOTOS.vinedosDeCote.src, alt: 'Viñedos y olivos cerca de Tequisquiapan', promise: 'un brindis entre viñedos' },
  { src: PHOTOS.artesanias.src, alt: 'Artesanías de mimbre en Tequisquiapan', promise: 'manos que tejen mimbre' },
  { src: PHOTOS.parroquiaNoche.src, alt: 'La parroquia iluminada de noche', promise: 'noches de leyenda' },
];

// Experiencias de la banda verde: cada una lleva al lugar real (o a la lista) de esa subcategoría.
const ACTIVITY_DEFS = [
  { title: 'Viñedos', subcategory: 'Viñedo', image: PHOTOS.vinedosDeCote.src, detail: 'Catas y recorridos en la Ruta Arte, Queso y Vino. Los viñedos del municipio están a menos de 20 minutos del centro.', cta: 'Descubrir los viñedos' },
  { title: 'Queserías', subcategory: 'Quesería', image: PHOTOS.cata.src, detail: 'Quesos artesanales de vaca y de cabra que se prueban en el lugar donde se hacen.', cta: 'Descubrir las queserías' },
  { title: 'Globo', subcategory: 'Globo Aerostático', image: PHOTOS.globoValle.src, detail: 'Vuelos al amanecer sobre el valle. Cada diciembre, la Fiesta en el Aire llena el cielo de globos.', cta: 'Volar en globo' },
  { title: 'Balnearios', subcategory: 'Balneario', image: PHOTOS.alberca.src, detail: 'Las aguas termales hicieron de Tequis un destino de descanso desde los años cincuenta.', cta: 'Ver balnearios' },
  { title: 'Cestería', subcategory: 'Artesanías', image: PHOTOS.artesanias.src, detail: 'Canastas, muebles y figuras de vara de sauz y mimbre: por algo le dicen el Paraíso de la Cestería.', cta: 'Ver artesanías' },
];

const BIG_WORDS = [
  { label: 'Historia', href: '/por-que-tequis#historia', image: PHOTOS.parroquiaTarde.src, caption: 'Fundado en 1551, casi cinco siglos alrededor del agua' },
  { label: 'Cestería', href: '/por-que-tequis#tradiciones', image: PHOTOS.mercadoTequesquicalli.src, caption: 'El Paraíso de la Cestería: vara de sauz y mimbre' },
  { label: 'Queso & vino', href: '/por-que-tequis#sabores', image: PHOTOS.feriaQuesoVino.src, caption: 'Más de 60 etiquetas en la zona y feria desde 1976' },
  { label: 'Peña de Bernal', href: '/por-que-tequis#alrededores', image: PHOTOS.penaBernal.src, caption: 'El monolito, a unos 35 km' },
];

const APP_PHOTOS = [
  PHOTOS.portalesPlaza, PHOTOS.feriaQuesoVino, PHOTOS.globos, PHOTOS.callejonPiojo,
  PHOTOS.parroquiaNoche, PHOTOS.mercadoTequesquicalli, PHOTOS.quiosco, PHOTOS.cata,
].map((p) => ({ src: p.src, alt: p.title }));

/** Un destacado con información confirmada; cambia cada día entre los que haya. */
function pickFeatured<T extends { isFeatured: boolean; contentVerified: boolean; thumbnailUrl: string | null }>(places: T[], today: string): T | undefined {
  const pool = places.filter((p) => p.isFeatured && p.contentVerified && p.thumbnailUrl);
  if (!pool.length) return undefined;
  const day = Math.floor(Date.parse(`${today}T00:00:00Z`) / 86_400_000);
  return pool[day % pool.length];
}

export default async function Home() {
  const [places, events] = await Promise.all([getPlaces(), getEvents()]);
  const today = todayInTequis();
  const current = events.filter((e) => eventStatus(e, today) !== 'past');
  const nextEvent = current[0];
  const featured = pickFeatured(places, today);

  const activities: Activity[] = ACTIVITY_DEFS.flatMap((a) => {
    const matches = places.filter((p) => p.subcategory === a.subcategory);
    if (!matches.length) return [];
    return [{
      title: a.title,
      detail: a.detail,
      cta: a.cta,
      image: a.image,
      href: matches.length === 1 ? `/lugar/${matches[0].slug}` : `/lugares/${matches[0].category === 'compras' ? 'compras' : 'experiencias'}`,
    }];
  });

  const count = (...cats: string[]) => places.filter((p) => cats.includes(p.category)).length;
  const doors = [
    { label: 'Qué hacer', href: '/lugares', image: PHOTOS.globoValle.src, alt: 'Globo aerostático sobre el valle', count: count('turistico', 'experiencias') },
    { label: 'Dónde comer', href: '/lugares/gastronomia', image: PHOTOS.cata.src, alt: 'Cata de quesos y vino', count: count('gastronomia') },
    { label: 'Dónde dormir', href: '/lugares/hospedaje', image: PHOTOS.portalesPlaza.src, alt: 'Portales de la plaza de Tequisquiapan', count: count('hospedaje') },
  ];

  const routeCards = THEMATIC_ROUTES.map((r) => ({ r, stops: placesForRoute(r, places) })).filter((x) => x.stops.length > 0);

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: SITE_URL, inLanguage: 'es-MX' }} />

      <Hero
        title="Tequisquiapan"
        lead="Pueblo Mágico de Querétaro, a dos horas de la Ciudad de México."
        slides={HERO_SLIDES}
        actions={[
          { label: '¿Qué hay este mes?', href: '/eventos' },
          { label: 'Qué hacer', href: '/lugares' },
        ]}
      />

      {nextEvent && <EventStrip event={nextEvent} today={today} />}

      <Intro doors={doors} />

      <ExploreTequis places={places.map(toSummary)} />

      {featured && <Featured place={featured} />}

      {/* Agenda: el evento más cercano en grande y los siguientes en lista */}
      {current.length > 0 && (
        <section className="frame pt-40" aria-labelledby="agenda-title">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle id="agenda-title" title="Fiestas y eventos" />
            <MoreLink href="/eventos">Calendario completo</MoreLink>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <EventTile event={current[0]} today={today} large />
            {current.length > 1 && (
              <div className="self-start">
                {current.slice(1, 5).map((e) => (
                  <EventCard key={e.id} event={e} today={today} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Por qué Tequis: palabras gigantes; el fondo se vuelve verde salvia al salir */}
      <ColorShift to="#a3ad94" className="pb-40 pt-40">
        <section className="frame" aria-labelledby="porque-title">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
            <SectionTitle id="porque-title" title="Un pueblo de agua, cantera y mimbre" />
            <p data-reveal="up" className="max-w-[48ch] text-lead leading-snug">
              Fundado en 1551 y Pueblo Mágico desde 2012, Tequisquiapan creció alrededor de sus aguas termales. Hoy se camina entre portales
              de cantera, talleres de cestería, viñedos, queserías y casi cien fiestas patronales al año.
            </p>
          </div>
          <div className="mt-16">
            <BigWords items={BIG_WORDS} />
          </div>
        </section>
      </ColorShift>

      {activities.length > 0 && <Activities items={activities} />}

      {/* Ideas de viaje: campo ocre de orilla a orilla con las rutas para arrastrar */}
      <section className="overflow-hidden bg-ochre py-28" aria-labelledby="ideas-title">
        <div className="frame grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 id="ideas-title" data-split="lines" className="heading max-w-[12ch]">Rutas y guías</h2>
            <p data-reveal="up" className="mt-6 max-w-[40ch] text-lead leading-snug">
              {routeCards.length} rutas con paradas en orden y mapa, y {GUIDES.length} guías para planear el viaje.
            </p>
            <div data-reveal="up" className="mt-8 flex flex-wrap gap-3">
              <Link href="/rutas" className="btn">Ver las rutas</Link>
              <Link href="/guias" className="btn-outline">Las guías</Link>
            </div>
          </div>
          <DragRow className="-mr-[var(--margin)] gap-5 pr-[var(--margin)]">
            {routeCards.map(({ r, stops }) => (
              <StoryCard key={r.slug} href={`/rutas/${r.slug}`} image={stops[0].thumbnailUrl} title={r.title} kicker={`${stops.length} paradas`} cursor="Arrastra" />
            ))}
            {GUIDES.map((g) => (
              <StoryCard key={g.slug} href={`/guias/${g.slug}`} image={g.photo.src} title={g.title} kicker="Guía" cursor="Arrastra" />
            ))}
          </DragRow>
        </div>
      </section>

      <div>
        <MapStory
          count={places.length}
          places={places.map((p) => ({ slug: p.slug, name: p.name, subcategory: p.subcategory, lat: p.latitude, lng: p.longitude, image: p.thumbnailUrl }))}
        />
      </div>

      <Surroundings center={TEQUIS} places={NEARBY} />

      <AppInvite photos={APP_PHOTOS} />
    </>
  );
}

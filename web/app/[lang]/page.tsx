import type { Metadata } from 'next';
import Link from 'next/link';
import {
  SITE_LOGO,
  SITE_NAME,
  SITE_URL,
  THEMATIC_ROUTES,
  eventStatus,
  getEvents,
  getPlaces,
  placesForRoute,
  routeText,
  toSummary,
  todayInTequis,
} from '@/lib/data';
import { dict } from '@/lib/dict';
import { GUIDES, guidesFor } from '@/lib/guides';
import { LOCALE, alternates, href, langOf } from '@/lib/i18n';
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

export async function generateMetadata({ params }: PageProps<'/[lang]'>): Promise<Metadata> {
  return { alternates: alternates(langOf(await params), '/') };
}

const COPY = {
  es: {
    lead: 'Pueblo Mágico de Querétaro, a dos horas de la Ciudad de México.',
    promisePrefix: 'La promesa de',
    photosLabel: 'Fotos de la portada',
    photoLabel: 'Foto',
    promises: ['un pueblo de cantera', 'un amanecer en globo', 'un brindis entre viñedos', 'manos que tejen mimbre', 'noches de leyenda'],
    heroAlts: [
      'Parroquia de Santa María de la Asunción al atardecer',
      'Globo aerostático sobre el valle de Tequisquiapan',
      'Viñedos y olivos cerca de Tequisquiapan',
      'Artesanías de mimbre en Tequisquiapan',
      'La parroquia iluminada de noche',
    ],
    thisMonth: '¿Qué hay este mes?',
    thingsToDo: 'Qué hacer',
    activities: [
      { title: 'Viñedos', detail: 'Catas y recorridos en la Ruta Arte, Queso y Vino. Los viñedos del municipio están a menos de 20 minutos del centro.', cta: 'Descubrir los viñedos' },
      { title: 'Queserías', detail: 'Quesos artesanales de vaca y de cabra que se prueban en el lugar donde se hacen.', cta: 'Descubrir las queserías' },
      { title: 'Globo', detail: 'Vuelos al amanecer sobre el valle. Cada diciembre, la Fiesta en el Aire llena el cielo de globos.', cta: 'Volar en globo' },
      { title: 'Balnearios', detail: 'Las aguas termales hicieron de Tequis un destino de descanso desde los años cincuenta.', cta: 'Ver balnearios' },
      { title: 'Cestería', detail: 'Canastas, muebles y figuras de vara de sauz y mimbre: por algo le dicen el Paraíso de la Cestería.', cta: 'Ver artesanías' },
    ],
    bigWords: [
      { label: 'Historia', caption: 'Fundado en 1551, casi cinco siglos alrededor del agua' },
      { label: 'Cestería', caption: 'El Paraíso de la Cestería: vara de sauz y mimbre' },
      { label: 'Queso & vino', caption: 'Más de 60 etiquetas en la zona y feria desde 1976' },
      { label: 'Peña de Bernal', caption: 'El monolito, a unos 35 km' },
    ],
    doors: [
      { label: 'Qué hacer', alt: 'Globo aerostático sobre el valle' },
      { label: 'Dónde comer', alt: 'Cata de quesos y vino' },
      { label: 'Dónde dormir', alt: 'Portales de la plaza de Tequisquiapan' },
    ],
    events: 'Fiestas y eventos',
    fullCalendar: 'Calendario completo',
    whyTitle: 'Un pueblo de agua, cantera y mimbre',
    whyText:
      'Fundado en 1551 y Pueblo Mágico desde 2012, Tequisquiapan creció alrededor de sus aguas termales. Hoy se camina entre portales de cantera, talleres de cestería, viñedos, queserías y casi cien fiestas patronales al año.',
    ideasTitle: 'Rutas y guías',
    ideasText: (routes: number, guides: number) => `${routes} rutas con paradas en orden y mapa, y ${guides} guías para planear el viaje.`,
    seeRoutes: 'Ver las rutas',
    theGuides: 'Las guías',
    stops: (n: number) => `${n} paradas`,
    guide: 'Guía',
  },
  en: {
    lead: 'A Pueblo Mágico in Querétaro, two hours from Mexico City.',
    promisePrefix: 'The promise of',
    photosLabel: 'Cover photos',
    photoLabel: 'Photo',
    promises: ['a town of carved stone', 'a sunrise balloon ride', 'a toast among the vines', 'hands that weave wicker', 'nights of legends'],
    heroAlts: [
      'Parish church of Santa María de la Asunción at sunset',
      'Hot-air balloon over the Tequisquiapan valley',
      'Vineyards and olive trees near Tequisquiapan',
      'Wicker crafts in Tequisquiapan',
      'The parish church lit up at night',
    ],
    thisMonth: 'What’s on this month?',
    thingsToDo: 'Things to do',
    activities: [
      { title: 'Wineries', detail: 'Tastings and tours on the Art, Cheese and Wine Route. The town’s vineyards are less than 20 minutes from the center.', cta: 'Discover the wineries' },
      { title: 'Cheese', detail: 'Artisanal cow and goat cheeses you taste right where they’re made.', cta: 'Discover the cheese makers' },
      { title: 'Balloons', detail: 'Sunrise flights over the valley. Every December, the Fiesta en el Aire fills the sky with balloons.', cta: 'Fly in a balloon' },
      { title: 'Hot springs', detail: 'Its thermal waters made Tequis a place to unwind since the 1950s.', cta: 'See hot springs' },
      { title: 'Basketry', detail: 'Baskets, furniture and figures of willow and wicker: there’s a reason it’s called the Paradise of Basketry.', cta: 'See crafts' },
    ],
    bigWords: [
      { label: 'History', caption: 'Founded in 1551, nearly five centuries around water' },
      { label: 'Basketry', caption: 'The Paradise of Basketry: willow and wicker' },
      { label: 'Cheese & wine', caption: 'More than 60 wine labels in the area and a fair since 1976' },
      { label: 'Peña de Bernal', caption: 'The monolith, about 35 km away' },
    ],
    doors: [
      { label: 'Things to do', alt: 'Hot-air balloon over the valley' },
      { label: 'Where to eat', alt: 'Cheese and wine tasting' },
      { label: 'Where to stay', alt: 'Arcades on the Tequisquiapan plaza' },
    ],
    events: 'Festivals and events',
    fullCalendar: 'Full calendar',
    whyTitle: 'A town of water, stone and wicker',
    whyText:
      'Founded in 1551 and a Pueblo Mágico since 2012, Tequisquiapan grew around its hot springs. Today you walk among stone arcades, basket-weaving workshops, wineries, cheese makers and nearly a hundred patron saint feasts a year.',
    ideasTitle: 'Routes and guides',
    ideasText: (routes: number, guides: number) => `${routes} routes with stops in order and a map, and ${guides} guides to plan your trip.`,
    seeRoutes: 'See the routes',
    theGuides: 'The guides',
    stops: (n: number) => `${n} stops`,
    guide: 'Guide',
  },
};

const HERO_PHOTOS = [PHOTOS.parroquiaAtardecer, PHOTOS.globoValle, PHOTOS.vinedosDeCote, PHOTOS.artesanias, PHOTOS.parroquiaNoche];

// Experiencias de la banda verde: cada una lleva al lugar real (o a la lista) de esa subcategoría.
const ACTIVITY_DEFS = [
  { subcategory: 'Viñedo', image: PHOTOS.vinedosDeCote.src },
  { subcategory: 'Quesería', image: PHOTOS.cata.src },
  { subcategory: 'Globo Aerostático', image: PHOTOS.globoValle.src },
  { subcategory: 'Balneario', image: PHOTOS.alberca.src },
  { subcategory: 'Artesanías', image: PHOTOS.artesanias.src },
];

const BIG_WORD_DEFS = [
  { href: '/por-que-tequis#historia', image: PHOTOS.parroquiaTarde.src },
  { href: '/por-que-tequis#tradiciones', image: PHOTOS.mercadoTequesquicalli.src },
  { href: '/por-que-tequis#sabores', image: PHOTOS.feriaQuesoVino.src },
  { href: '/por-que-tequis#alrededores', image: PHOTOS.penaBernal.src },
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

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const lang = langOf(await params);
  const c = COPY[lang];
  const t = dict(lang);
  const h = (path: string) => href(lang, path);
  const [places, events] = await Promise.all([getPlaces(lang), getEvents(lang)]);
  const today = todayInTequis();
  const current = events.filter((e) => eventStatus(e, today) !== 'past');
  const nextEvent = current[0];
  const featured = pickFeatured(places, today);
  const guides = guidesFor(lang);

  const activities: Activity[] = ACTIVITY_DEFS.flatMap((a, i) => {
    const matches = places.filter((p) => p.subcategoryKey === a.subcategory);
    if (!matches.length) return [];
    return [{
      ...c.activities[i],
      image: a.image,
      href: h(matches.length === 1 ? `/lugar/${matches[0].slug}` : `/lugares/${matches[0].category === 'compras' ? 'compras' : 'experiencias'}`),
    }];
  });

  const count = (...cats: string[]) => places.filter((p) => cats.includes(p.category)).length;
  const doors = [
    { href: h('/lugares'), image: PHOTOS.globoValle.src, count: count('turistico', 'experiencias') },
    { href: h('/lugares/gastronomia'), image: PHOTOS.cata.src, count: count('gastronomia') },
    { href: h('/lugares/hospedaje'), image: PHOTOS.portalesPlaza.src, count: count('hospedaje') },
  ].map((d, i) => ({ ...d, ...c.doors[i] }));

  const routeCards = THEMATIC_ROUTES.map((r) => ({ r, stops: placesForRoute(r, places) })).filter((x) => x.stops.length > 0);

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: `${SITE_URL}${h('/')}`, inLanguage: LOCALE[lang], publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL, logo: SITE_LOGO } }} />

      <Hero
        title="Tequisquiapan"
        lead={c.lead}
        promisePrefix={c.promisePrefix}
        photosLabel={c.photosLabel}
        photoLabel={c.photoLabel}
        slides={HERO_PHOTOS.map((p, i) => ({ src: p.src, alt: c.heroAlts[i], promise: c.promises[i] }))}
        actions={[
          { label: c.thisMonth, href: h('/eventos') },
          { label: c.thingsToDo, href: h('/lugares') },
        ]}
      />

      {nextEvent && <EventStrip event={nextEvent} today={today} lang={lang} />}

      <Intro doors={doors} lang={lang} />

      <ExploreTequis places={places.map(toSummary)} lang={lang} />

      {featured && <Featured place={featured} lang={lang} />}

      {/* Agenda: el evento más cercano en grande y los siguientes en lista */}
      {current.length > 0 && (
        <section className="frame pt-40" aria-labelledby="agenda-title">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle id="agenda-title" title={c.events} />
            <MoreLink href={h('/eventos')}>{c.fullCalendar}</MoreLink>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <EventTile event={current[0]} today={today} lang={lang} large />
            {current.length > 1 && (
              <div className="self-start">
                {current.slice(1, 5).map((e) => (
                  <EventCard key={e.id} event={e} today={today} lang={lang} />
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
            <SectionTitle id="porque-title" title={c.whyTitle} />
            <p data-reveal="up" className="max-w-[48ch] text-lead leading-snug">
              {c.whyText}
            </p>
          </div>
          <div className="mt-16">
            <BigWords items={BIG_WORD_DEFS.map((w, i) => ({ ...w, ...c.bigWords[i], href: h(w.href) }))} cursor={t.cursorView} />
          </div>
        </section>
      </ColorShift>

      {activities.length > 0 && <Activities items={activities} lang={lang} />}

      {/* Ideas de viaje: campo ocre de orilla a orilla con las rutas y las guías para arrastrar */}
      <section className="overflow-hidden bg-ochre py-28" aria-labelledby="ideas-title">
        <div className="frame grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 id="ideas-title" data-split="lines" className="heading max-w-[12ch]">{c.ideasTitle}</h2>
            <p data-reveal="up" className="mt-6 max-w-[40ch] text-lead leading-snug">
              {c.ideasText(routeCards.length, GUIDES.length)}
            </p>
            <div data-reveal="up" className="mt-8 flex flex-wrap gap-3">
              <Link href={h('/rutas')} className="btn">{c.seeRoutes}</Link>
              <Link href={h('/guias')} className="btn-outline">{c.theGuides}</Link>
            </div>
          </div>
          <DragRow cursor={t.cursorDrag} className="-mr-[var(--margin)] gap-5 pr-[var(--margin)]">
            {routeCards.map(({ r, stops }) => (
              <StoryCard
                key={r.slug}
                href={h(`/rutas/${r.slug}`)}
                image={stops[0].thumbnailUrl}
                title={routeText(lang, r).title}
                kicker={c.stops(stops.length)}
                cursor={t.cursorDrag}
              />
            ))}
            {GUIDES.map((g, i) => (
              <StoryCard key={g.slug} href={h(`/guias/${g.slug}`)} image={g.photo.src} title={guides[i].title} kicker={c.guide} cursor={t.cursorDrag} />
            ))}
          </DragRow>
        </div>
      </section>

      <div>
        <MapStory
          count={places.length}
          lang={lang}
          places={places.map((p) => ({ slug: p.slug, name: p.name, subcategory: p.subcategory, lat: p.latitude, lng: p.longitude, image: p.thumbnailUrl }))}
        />
      </div>

      <Surroundings center={TEQUIS} places={NEARBY} lang={lang} />

      <AppInvite photos={APP_PHOTOS} lang={lang} />
    </>
  );
}

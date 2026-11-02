import Link from 'next/link';
import { SITE_NAME, SITE_URL, THEMATIC_ROUTES, eventStatus, formatDateRange, getEvents, getPlaces, placesForRoute, todayInTequis } from '@/lib/data';
import { PHOTOS } from '@/lib/photos';
import { EventCard, JsonLd, StoryCard } from '@/components/Cards';
import Hero from '@/components/Hero';
import Activities, { type Activity } from '@/components/Activities';
import Welcome from '@/components/home/Welcome';
import BigWords from '@/components/home/BigWords';
import ColorShift from '@/components/home/ColorShift';
import DragRow from '@/components/home/DragRow';
import MapStory from '@/components/home/MapStory';
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

export default async function Home() {
  const [places, events] = await Promise.all([getPlaces(), getEvents()]);
  const today = todayInTequis();
  const current = events.filter((e) => eventStatus(e, today) !== 'past');
  const nextEvent = current[0];

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

  const routeCards = THEMATIC_ROUTES.map((r) => ({ r, stops: placesForRoute(r, places) })).filter((x) => x.stops.length > 0);
  const hotels = places.filter((p) => p.category === 'hospedaje');

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: SITE_URL, inLanguage: 'es-MX' }} />

      <Hero
        slides={HERO_SLIDES}
        card={
          nextEvent
            ? {
                eyebrow: eventStatus(nextEvent, today) === 'happening' ? 'Está pasando' : 'Próximo evento',
                title: nextEvent.title,
                text: formatDateRange(nextEvent.startDate, nextEvent.endDate),
                href: `/evento/${nextEvent.slug}`,
              }
            : undefined
        }
      />

      <Welcome image={PHOTOS.portalesPlaza.src} alt="Portales de la plaza de Tequisquiapan" />

      {/* Por qué Tequis: palabras gigantes; el fondo se vuelve verde salvia al salir */}
      <ColorShift to="#a3ad94" className="pb-32">
        <section className="mx-auto max-w-[1140px] px-5">
          <SectionTitle eyebrow="¿Por qué Tequis?" title="Un pueblo" serif="de agua, cantera y mimbre" />
          <p data-reveal="up" className="mx-auto mt-8 max-w-xl text-center text-[17px] leading-relaxed">
            Fundado en 1551 y Pueblo Mágico desde 2012, Tequisquiapan creció alrededor de sus aguas termales. Hoy se camina entre portales
            de cantera, talleres de cestería, viñedos, queserías y casi cien fiestas patronales al año.
          </p>
          <div className="mt-16">
            <BigWords items={BIG_WORDS} />
          </div>
        </section>
      </ColorShift>

      {activities.length > 0 && <Activities items={activities} />}

      {/* Ideas de viaje */}
      <section className="overflow-hidden py-28">
        <SectionTitle eyebrow="Ideas de viaje" title="Un viaje a Tequis" serif="a tu medida" className="px-5" />
        <DragRow className="mt-14 gap-8 px-5 pb-2 sm:px-[max(1.25rem,calc((100vw-1140px)/2))]">
          {routeCards.map(({ r, stops }) => (
            <StoryCard key={r.slug} href={`/rutas/${r.slug}`} image={stops[0].thumbnailUrl} title={r.title} kicker={`${stops.length} paradas`} cursor="Arrastra" />
          ))}
          <StoryCard href="/eventos" image={PHOTOS.parroquiaNoche.src} title="Fiestas y tradiciones" kicker="Calendario" cursor="Arrastra" />
          <StoryCard href="/por-que-tequis#alrededores" image={PHOTOS.penaBernal.src} title="La Peña de Bernal, a media hora" kicker="Alrededores" cursor="Arrastra" />
          <StoryCard href="/guia-practica" image={PHOTOS.calleNinosHeroes.src} title="Un fin de semana en Tequis" kicker="Guía práctica" cursor="Arrastra" />
        </DragRow>
        <div className="mx-auto mt-8 flex max-w-[1140px] justify-end px-5">
          <MoreLink href="/rutas">Todas las ideas</MoreLink>
        </div>
      </section>

      {/* Hospedaje: banda con foto en parallax y collage que se mueve a distintas velocidades */}
      {hotels.length > 0 && (
        <section data-cursor-dark className="on-dark relative overflow-hidden text-white">
          <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-5 py-28 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img data-parallax="0.35" src={PHOTOS.alberca.src} alt="" referrerPolicy="no-referrer" loading="lazy" className="absolute inset-0 -top-[15%] h-[130%] w-full object-cover" />
            <div className="absolute inset-0 bg-black/45" />
            <p data-reveal="up" className="eyebrow relative">Dónde dormir</p>
            <p data-split="chars" className="relative mt-2 font-display text-[clamp(4rem,11vw,9rem)] leading-none tracking-[0.06em]">Hospedaje</p>
            <Link href="/lugares/hospedaje" data-reveal="up" className="btn-outline relative mt-8">Descubrir</Link>
          </div>
          <div className="relative bg-bg text-ink">
            <div className="mx-auto grid max-w-[1140px] items-start gap-10 px-5 pb-28 md:grid-cols-[0.8fr_1fr_1.2fr]">
              <div data-parallax="-0.4" className="-mt-24 hidden md:block">
                <div data-reveal="image" className="aspect-[3/4] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={PHOTOS.portalesPlaza.src} alt="Portales de la plaza" referrerPolicy="no-referrer" loading="lazy" className="size-full object-cover" />
                </div>
              </div>
              <div data-parallax="0.25" className="-mt-40">
                <div data-reveal="image" className="aspect-[3/4] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={PHOTOS.parroquiaNoche.src} alt="El centro de Tequis de noche" referrerPolicy="no-referrer" loading="lazy" className="size-full object-cover" />
                </div>
              </div>
              <div className="pt-6">
                <p data-reveal="up" className="text-[17px] leading-relaxed">
                  Casonas convertidas en hotel boutique, posadas a unos pasos de la plaza y hoteles con alberca para quedarse el fin de
                  semana. En temporada alta (Semana Santa, la Feria del Queso y el Vino, la Villa Navideña) se llenan: reserva con tiempo.
                </p>
                <ul className="mt-6 space-y-2">
                  {hotels.map((h) => (
                    <li key={h.id} data-reveal="up">
                      <Link href={`/lugar/${h.slug}`} data-cursor="Ver" className="group inline-flex items-baseline gap-2">
                        <span className="font-display text-2xl transition group-hover:translate-x-2">{h.name}</span>
                        <span className="text-sm text-muted">{h.subcategory}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <MapStory
        count={places.length}
        places={places.map((p) => ({ slug: p.slug, name: p.name, subcategory: p.subcategory, lat: p.latitude, lng: p.longitude }))}
      />

      {/* Eventos */}
      {current.length > 0 && (
        <section className="mx-auto max-w-[1000px] px-5 pt-28">
          <SectionTitle eyebrow="Agenda" title="Fiestas y eventos" serif="lo que viene en Tequis" />
          <div className="mt-12 border-b border-line">
            {current.slice(0, 4).map((e) => (
              <EventCard key={e.id} event={e} today={today} />
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <MoreLink href="/eventos">Calendario completo</MoreLink>
          </div>
        </section>
      )}

      {/* App */}
      <section className="mx-auto max-w-[1140px] px-5 pt-28">
        <div data-reveal="image" data-cursor-dark className="on-dark relative overflow-hidden bg-green px-8 py-20 text-center text-white">
          <div data-reveal="stagger" className="relative flex flex-col items-center gap-6">
            <p className="eyebrow">La app</p>
            <p className="text-3xl font-bold">Tequis en tu bolsillo</p>
            <p className="-mt-3 font-display text-3xl">aunque falle la señal</p>
            <p className="max-w-lg text-[17px] text-white/90">
              La app de {SITE_NAME} tiene la misma información que este sitio, más &quot;cerca de mí&quot;, favoritos y uso sin conexión.
            </p>
            <Link href="/app" className="btn-outline">Conocer la app</Link>
          </div>
        </div>
      </section>
    </>
  );
}

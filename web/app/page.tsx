import Link from 'next/link';
import { SITE_NAME, SITE_URL, THEMATIC_ROUTES, eventStatus, formatDateRange, getEvents, getPlaces, placesForRoute, todayInTequis, type Place } from '@/lib/data';
import { PHOTOS } from '@/lib/photos';
import { EventCard, JsonLd, StoryCard } from '@/components/Cards';
import Hero from '@/components/Hero';
import Activities, { type Activity } from '@/components/Activities';
import MexicoMap from '@/components/MexicoMap';
import { MoreLink, SectionTitle } from '@/components/Section';

export const revalidate = 300;

const HERO_SLIDES = [
  { src: PHOTOS.parroquiaAtardecer.src, alt: 'Parroquia de Santa María de la Asunción al atardecer', promise: 'un pueblo de cantera' },
  { src: PHOTOS.globoValle.src, alt: 'Globo aerostático sobre el valle de Tequisquiapan', promise: 'un amanecer en globo' },
  { src: PHOTOS.vinedosDeCote.src, alt: 'Viñedos y olivos cerca de Tequisquiapan', promise: 'un brindis entre viñedos' },
  { src: PHOTOS.artesanias.src, alt: 'Artesanías de mimbre en Tequisquiapan', promise: 'manos que tejen mimbre' },
  { src: PHOTOS.parroquiaNoche.src, alt: 'La parroquia iluminada de noche', promise: 'noches de leyenda' },
];

// Experiencias de la banda verde: cada una lleva al primer lugar real de esa subcategoría.
const ACTIVITY_DEFS = [
  { title: 'Viñedos', subcategory: 'Viñedo', detail: 'Catas y recorridos en la Ruta Arte, Queso y Vino. Los viñedos del municipio están a menos de 20 minutos del centro.', cta: 'Descubrir los viñedos' },
  { title: 'Queserías', subcategory: 'Quesería', detail: 'Quesos artesanales de vaca y de cabra que se prueban en el lugar donde se hacen.', cta: 'Descubrir las queserías' },
  { title: 'Globo aerostático', subcategory: 'Globo Aerostático', detail: 'Vuelos al amanecer sobre el valle. Cada diciembre, la Fiesta en el Aire llena el cielo de globos.', cta: 'Volar en globo' },
  { title: 'Balnearios', subcategory: 'Balneario', detail: 'Las aguas termales hicieron de Tequis un destino de descanso desde los años cincuenta.', cta: 'Ver balnearios' },
  { title: 'Cestería', subcategory: 'Artesanías', detail: 'Canastas, muebles y figuras de vara de sauz y mimbre: por algo le dicen el Paraíso de la Cestería.', cta: 'Ver artesanías' },
];

function firstImage(places: Place[], fallback: string) {
  return places.find((p) => p.thumbnailUrl)?.thumbnailUrl ?? fallback;
}

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
      image: firstImage(matches, PHOTOS.portales.src),
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

      {/* Bienvenida */}
      <section id="bienvenidos" className="relative overflow-hidden px-5 pb-24 pt-28 text-center">
        <span className="mx-auto mb-10 block h-24 w-px bg-ink" aria-hidden />
        <p aria-hidden className="pointer-events-none absolute inset-x-0 top-40 select-none whitespace-nowrap font-display leading-none text-black/[0.07]" style={{ fontSize: 'clamp(5rem, 17vw, 16rem)' }}>
          Bienvenidos
        </p>
        <h1 className="relative font-display text-[clamp(2.6rem,4.5vw,3.4rem)] leading-tight">Tequisquiapan</h1>
        <p className="eyebrow relative mt-3">Pueblo Mágico de Querétaro</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PHOTOS.portalesPlaza.src} alt="Portales de la plaza de Tequisquiapan" referrerPolicy="no-referrer" loading="lazy" className="relative mx-auto mt-12 aspect-[16/10] w-full max-w-[560px] object-cover" />
        <div className="relative mx-auto mt-12 max-w-xl space-y-1 text-[17px] leading-relaxed">
          <p>Descubre un pueblo de calles empedradas y portales de cantera,</p>
          <p>donde el agua termal hizo nacer balnearios y el mimbre se vuelve arte.</p>
          <p>Aquí los viñedos y las queserías marcan el ritmo del fin de semana,</p>
          <p>y cada fiesta del año llena la plaza de música y color.</p>
          <p className="pt-2 font-semibold">Ven a caminarlo. Ven a probarlo.</p>
        </div>
      </section>

      {/* Por qué Tequis */}
      <section className="mx-auto max-w-[1140px] px-5 pb-28">
        <SectionTitle eyebrow="¿Por qué Tequis?" title="Un pueblo" serif="de agua, cantera y mimbre" />
        <p className="mx-auto mt-8 max-w-xl text-center text-[17px] leading-relaxed">
          Fundado en 1551 y Pueblo Mágico desde 2012, Tequisquiapan creció alrededor de sus aguas termales. Hoy se camina entre portales
          de cantera, talleres de cestería, viñedos, queserías y casi cien fiestas patronales al año.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <IntroCard href="/por-que-tequis#historia" image={PHOTOS.parroquiaTarde.src} title="Historia y patrimonio" cta="Descubrir" />
          <IntroCard href="/por-que-tequis#sabores" image={PHOTOS.feriaQuesoVino.src} title="Queso, vino y sabores" cta="Probar" />
        </div>
      </section>

      {activities.length > 0 && <Activities items={activities} />}

      {/* Ideas de viaje */}
      <section className="py-28">
        <SectionTitle eyebrow="Ideas de viaje" title="Un viaje a Tequis" serif="a tu medida" className="px-5" />
        <div className="no-scrollbar mt-14 flex gap-8 overflow-x-auto px-5 sm:px-[max(1.25rem,calc((100vw-1140px)/2))]">
          {routeCards.map(({ r, stops }) => (
            <StoryCard key={r.slug} href={`/rutas/${r.slug}`} image={stops[0].thumbnailUrl} title={r.title} kicker={`${stops.length} paradas`} />
          ))}
          <StoryCard href="/eventos" image={PHOTOS.parroquiaNoche.src} title="Fiestas y tradiciones" kicker="Calendario" />
          <StoryCard href="/por-que-tequis#alrededores" image={PHOTOS.penaBernal.src} title="La Peña de Bernal, a media hora" kicker="Alrededores" />
          <StoryCard href="/guia-practica" image={PHOTOS.calleNinosHeroes.src} title="Un fin de semana en Tequis" kicker="Guía práctica" />
        </div>
        <div className="mx-auto mt-8 flex max-w-[1140px] justify-end px-5">
          <MoreLink href="/rutas">Todas las ideas</MoreLink>
        </div>
      </section>

      {/* Hospedaje */}
      {hotels.length > 0 && (
        <section className="on-dark bg-stone pt-24 text-white">
          <div className="text-center">
            <p className="eyebrow">Dónde dormir</p>
            <p className="mt-2 font-display text-[clamp(4rem,9vw,7rem)] leading-none tracking-[0.06em]">Hospedaje</p>
            <Link href="/lugares/hospedaje" className="btn-outline mt-8">Descubrir</Link>
          </div>
          <div className="mx-auto mt-16 grid max-w-[1140px] items-center gap-12 px-5 pb-24 md:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={firstImage(hotels, PHOTOS.alberca.src)} alt="Alberca de un hotel en Tequisquiapan" referrerPolicy="no-referrer" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div>
              <p className="text-[17px] leading-relaxed">
                Casonas convertidas en hotel boutique, posadas a unos pasos de la plaza y hoteles con alberca para quedarse el fin de
                semana. En temporada alta (Semana Santa, la Feria del Queso y el Vino, la Villa Navideña) se llenan: reserva con tiempo.
              </p>
              <ul className="mt-6 space-y-2">
                {hotels.map((h) => (
                  <li key={h.id}>
                    <Link href={`/lugar/${h.slug}`} className="font-display text-2xl hover:underline">{h.name}</Link>
                    <span className="ml-2 text-sm opacity-75">{h.subcategory}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* En el centro de México */}
      <section className="overflow-hidden px-5 pt-28">
        <SectionTitle eyebrow="Descubre Tequis" title="En el corazón" serif="de México" />
        <p className="mx-auto mt-6 max-w-lg text-center text-[17px] leading-relaxed">
          En el sureste de Querétaro, a unos 180 km de la Ciudad de México (de 2 a 3 horas en auto) y a unos 60 km de la capital del
          estado. En 1916, Venustiano Carranza lo declaró centro geográfico del país.
        </p>
        <div className="mx-auto mt-6 max-w-[1000px]">
          <MexicoMap />
        </div>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Link href="/mapa" className="btn-outline">Ver el mapa del pueblo</Link>
          <Link href="/guia-practica#como-llegar" className="btn-outline">Cómo llegar</Link>
        </div>
      </section>

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
        <div className="on-dark flex flex-col items-center gap-6 bg-green px-8 py-16 text-center text-white">
          <p className="eyebrow">La app</p>
          <p className="text-3xl font-bold">Tequis en tu bolsillo</p>
          <p className="-mt-3 font-display text-3xl">aunque falle la señal</p>
          <p className="max-w-lg text-[17px] text-white/90">
            La app de {SITE_NAME} tiene la misma información que este sitio, más &quot;cerca de mí&quot;, favoritos y uso sin conexión.
          </p>
          <Link href="/app" className="btn-outline">Conocer la app</Link>
        </div>
      </section>
    </>
  );
}

function IntroCard({ href, image, title, cta }: { href: string; image: string; title: string; cta: string }) {
  return (
    <Link href={href} className="group relative block aspect-[4/3] overflow-hidden bg-stone text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/45" />
      <div className="relative flex h-full flex-col items-center justify-center gap-5 p-8 text-center">
        <p className="font-display text-4xl">{title}</p>
        <span className="btn-outline">{cta}</span>
      </div>
    </Link>
  );
}

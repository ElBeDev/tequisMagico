import type { Metadata } from 'next';
import Link from 'next/link';
import { PHOTOS } from '@/lib/photos';
import { alternates, href, langOf } from '@/lib/i18n';
import { Feature, PageHero } from '@/components/PageHero';
import { SectionTitle } from '@/components/Section';

export async function generateMetadata({ params }: PageProps<'/[lang]/guia-practica'>): Promise<Metadata> {
  const lang = langOf(await params);
  return lang === 'en'
    ? {
        title: 'Travel tips: getting to Tequisquiapan and when to go',
        description: 'How to get to Tequisquiapan from Mexico City and Querétaro by car or bus, weather, high seasons and useful tips for your visit.',
        alternates: alternates(lang, '/guia-practica'),
      }
    : {
        title: 'Guía práctica: cómo llegar y cuándo ir a Tequisquiapan',
        description: 'Cómo llegar a Tequisquiapan desde la Ciudad de México y Querétaro en auto o autobús, clima, temporadas altas y datos útiles para tu visita.',
        alternates: alternates(lang, '/guia-practica'),
      };
}

// Distancias, rutas y autobuses: Wikipedia, queretaro.travel y Chilango (2023); clima: INEGI;
// temporadas: tequis.travel y prensa local. Ver la investigación en docs/web/plan-sitio-web.md.
const COPY = {
  es: {
    heroAlt: 'Calle Niños Héroes en Tequisquiapan',
    title: 'Guía práctica',
    lead: 'Cómo llegar, cuándo ir y lo que conviene saber antes de salir.',
    gettingThere: 'Cómo llegar',
    gettingThereLead: 'En el sureste de Querétaro, a unos 180 km de la Ciudad de México.',
    routes: [
      {
        from: 'Desde la Ciudad de México',
        lines: [
          'Unos 180 km, de 2 a 3 horas según el tráfico.',
          'Autopista México–Querétaro (57D) hasta San Juan del Río y de ahí la carretera federal 120 hacia Tequisquiapan.',
          'Hay casetas en el camino; lleva efectivo o tag.',
        ],
      },
      {
        from: 'Desde Querétaro',
        lines: ['Unos 60 km, alrededor de 50 minutos.', 'Por la carretera estatal 200 Querétaro–Tequisquiapan, la misma de los viñedos.'],
      },
      {
        from: 'En autobús',
        lines: [
          'Desde la Ciudad de México: ETN Turistar sale directo de la Central del Norte.',
          'Desde Querétaro: Flecha Amarilla y Flecha Azul salen de la Terminal de Autobuses (TAQ).',
          'La terminal de Tequis está junto al Parador Artesanal.',
        ],
      },
    ],
    routesNote: 'Tiempos y precios de casetas o autobuses cambian; confírmalos antes de salir.',
    whenAlt: 'Plaza y quiosco de Tequisquiapan',
    when: 'Cuándo ir',
    whenP1:
      'El clima es semiseco templado, con unos 17 °C de promedio anual. Llueve sobre todo de junio a septiembre; diciembre y enero son los meses más fríos y secos, así que lleva abrigo para las noches.',
    whenP2:
      'Entre semana el pueblo está tranquilo. Los fines de semana, los puentes y estas temporadas se llenan, así que conviene reservar hospedaje con tiempo:',
    seasons: [
      { when: 'Marzo y abril', what: 'Feria del Toro de Lidia, Festival del Artesano y Semana Santa, con Vía Crucis y quema de Judas.' },
      { when: 'Mayo y junio', what: 'Festival Internacional del Arte, Queso y Vino en el Parque La Pila, los fines de semana.' },
      { when: '15 de agosto', what: 'Fiesta patronal de Santa María de la Asunción, con danzas y castillo.' },
      { when: 'Fin de octubre', what: 'Tejedores de Luz: Día de Muertos con figuras de mimbre.' },
      { when: 'Diciembre y enero', what: 'Fiesta en el Aire con globos, posadas y la Villa Navideña. La ocupación hotelera llega al 100%.' },
    ],
    calendar: 'Ver el calendario',
    infoAlt: 'Callejón del Piojo',
    info: 'Información útil',
    tips: [
      'El centro se recorre a pie: calles empedradas y callejones como el del Piojo. Lleva calzado cómodo.',
      'Sol fuerte y aire seco: protector solar, sombrero y agua.',
      'El Parador Artesanal, el mercado de artesanías más grande, abre solo fines de semana y días festivos.',
      'Los horarios pueden cambiar en temporada. En cada ficha te decimos si ya confirmamos el horario con el negocio; si no, llama antes de ir.',
      'La Presa Centenario cambia mucho de nivel de un año a otro: hay temporadas en que está casi vacía.',
    ],
    phones: 'Teléfonos',
    emergencies: 'Emergencias',
    tourism: 'Turismo municipal',
    office: 'Oficina de turismo: Andador Independencia 1, Centro.',
    mapTitle: 'Ya en el pueblo, todo en el mapa',
    seeMap: 'Ver el mapa',
    stay: 'Dónde dormir',
    eat: 'Dónde comer',
  },
  en: {
    heroAlt: 'Calle Niños Héroes in Tequisquiapan',
    title: 'Travel tips',
    lead: 'How to get there, when to go and what to know before you leave.',
    gettingThere: 'Getting there',
    gettingThereLead: 'In southeastern Querétaro, about 180 km from Mexico City.',
    routes: [
      {
        from: 'From Mexico City',
        lines: [
          'About 180 km, 2 to 3 hours depending on traffic.',
          'Take the Mexico–Querétaro highway (57D) to San Juan del Río, then federal highway 120 toward Tequisquiapan.',
          'There are toll booths on the way; bring cash or a toll tag.',
        ],
      },
      {
        from: 'From Querétaro',
        lines: ['About 60 km, roughly 50 minutes.', 'Take state highway 200 Querétaro–Tequisquiapan, the same road as the wineries.'],
      },
      {
        from: 'By bus',
        lines: [
          'From Mexico City: ETN Turistar runs direct from the Central del Norte bus station.',
          'From Querétaro: Flecha Amarilla and Flecha Azul leave from the bus terminal (TAQ).',
          'The Tequis bus terminal is next to the Parador Artesanal.',
        ],
      },
    ],
    routesNote: 'Travel times and toll or bus prices change; check them before you leave.',
    whenAlt: 'Plaza and bandstand in Tequisquiapan',
    when: 'When to go',
    whenP1:
      'The climate is mild and semi-dry, averaging about 17 °C (63 °F) a year. Most rain falls from June to September; December and January are the coldest and driest months, so bring a jacket for the evenings.',
    whenP2: 'Weekdays are quiet. Weekends, long weekends and these seasons fill up, so book your stay early:',
    seasons: [
      { when: 'March and April', what: 'Fighting Bull Fair, Artisan Festival and Holy Week, with the Stations of the Cross and the burning of Judas.' },
      { when: 'May and June', what: 'International Art, Cheese and Wine Festival in Parque La Pila, on weekends.' },
      { when: 'August 15', what: 'Patron saint feast of Santa María de la Asunción, with dances and fireworks.' },
      { when: 'Late October', what: 'Tejedores de Luz: Day of the Dead with wicker figures.' },
      { when: 'December and January', what: 'Fiesta en el Aire with hot-air balloons, posadas and the Christmas village. Hotels fill up completely.' },
    ],
    calendar: 'See the calendar',
    infoAlt: 'Callejón del Piojo',
    info: 'Useful info',
    tips: [
      'The center is best on foot: cobblestone streets and alleys like the Callejón del Piojo. Wear comfortable shoes.',
      'Strong sun and dry air: sunscreen, a hat and water.',
      'The Parador Artesanal, the largest crafts market, opens only on weekends and holidays.',
      'Hours may change in high season. Each listing says whether we’ve confirmed the hours with the business; if not, call before you go.',
      'The water level of the Presa Centenario reservoir varies a lot from year to year: some seasons it is almost empty.',
    ],
    phones: 'Phone numbers',
    emergencies: 'Emergencies',
    tourism: 'Municipal tourism office',
    office: 'Tourism office: Andador Independencia 1, Centro.',
    mapTitle: 'Once in town, it’s all on the map',
    seeMap: 'See the map',
    stay: 'Where to stay',
    eat: 'Where to eat',
  },
};

export default async function GuiaPracticaPage({ params }: PageProps<'/[lang]/guia-practica'>) {
  const lang = langOf(await params);
  const c = COPY[lang];
  return (
    <>
      <PageHero photo={PHOTOS.calleNinosHeroes} alt={c.heroAlt} title={c.title} lead={c.lead} />

      <section id="como-llegar" className="frame scroll-mt-28 pt-32">
        <SectionTitle title={c.gettingThere} lead={c.gettingThereLead} />
        <div data-reveal="stagger" className="mt-14 space-y-2">
          {c.routes.map(({ from, lines }) => (
            <div key={from} className="grid grid-cols-1 gap-4 bg-surface p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-12">
              <h3 className="self-start font-display text-lead leading-none tracking-[-0.01em]">{from}</h3>
              <ul className="max-w-[60ch] space-y-2">
                {lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="meta mt-6 text-muted">{c.routesNote}</p>
      </section>

      <Feature id="cuando-ir" photo={PHOTOS.quiosco} alt={c.whenAlt} title={c.when}>
        <p>{c.whenP1}</p>
        <p>{c.whenP2}</p>
        <dl className="space-y-1">
          {c.seasons.map((s) => (
            <div key={s.when} className="grid gap-1 py-2 sm:grid-cols-[140px_1fr] sm:gap-4">
              <dt className="font-medium">{s.when}</dt>
              <dd>{s.what}</dd>
            </div>
          ))}
        </dl>
        <Link href={href(lang, '/eventos')} className="btn-outline">{c.calendar}</Link>
      </Feature>

      <Feature id="info-util" photo={PHOTOS.callejonPiojo} alt={c.infoAlt} title={c.info} reverse>
        <ul className="list-disc space-y-3 pl-5">
          {c.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
        <div className="space-y-2 bg-surface p-6">
          <h3 className="font-display text-lead leading-none">{c.phones}</h3>
          <p className="pt-2">{c.emergencies}: <a href="tel:911" className="font-medium underline">911</a></p>
          <p>{c.tourism}: <a href="tel:+524142651999" className="font-medium underline">414 265 1999</a></p>
          <p className="meta text-muted">{c.office}</p>
        </div>
      </Feature>

      <section data-cursor-dark className="on-dark -mb-40 mt-16 bg-green py-28 text-white" aria-labelledby="mapa-title">
        <div className="frame">
          <h2 id="mapa-title" data-split="lines" className="heading max-w-[14ch]">{c.mapTitle}</h2>
          <div data-reveal="up" className="mt-10 flex flex-wrap gap-3">
            <Link href={href(lang, '/mapa')} className="btn">{c.seeMap}</Link>
            <Link href={href(lang, '/lugares/hospedaje')} className="btn-outline">{c.stay}</Link>
            <Link href={href(lang, '/lugares/gastronomia')} className="btn-outline">{c.eat}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

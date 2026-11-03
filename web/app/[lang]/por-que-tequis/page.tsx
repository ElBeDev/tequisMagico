import type { Metadata } from 'next';
import Link from 'next/link';
import { PHOTOS } from '@/lib/photos';
import { alternates, href, langOf } from '@/lib/i18n';
import { Feature, PageHero } from '@/components/PageHero';
import { SectionTitle } from '@/components/Section';

export async function generateMetadata({ params }: PageProps<'/[lang]/por-que-tequis'>): Promise<Metadata> {
  const lang = langOf(await params);
  return lang === 'en'
    ? {
        title: 'Why visit Tequisquiapan, a Pueblo Mágico',
        description:
          'History of Tequisquiapan since 1551, the origin of its name, why it is a Pueblo Mágico, basket weaving, the Art, Cheese and Wine Route and Peña de Bernal.',
        alternates: alternates(lang, '/por-que-tequis'),
      }
    : {
        title: 'Por qué visitar Tequisquiapan, Pueblo Mágico',
        description:
          'Historia de Tequisquiapan desde 1551, el origen de su nombre, por qué es Pueblo Mágico, la cestería, la Ruta Arte, Queso y Vino y la Peña de Bernal.',
        alternates: alternates(lang, '/por-que-tequis'),
      };
}

// Datos tomados de Wikipedia, tequis.travel, gob.mx/Sectur, INEGI y prensa (investigación de
// noviembre 2026). Donde las fuentes no coinciden (el día exacto de la fundación, la edad de
// la tradición cestera), el texto se queda con lo que sí coincide.
const COPY = {
  es: {
    heroAlt: 'Parroquia de Santa María de la Asunción',
    title: 'Por qué Tequis',
    lead: 'Un Pueblo Mágico de agua, cantera y mimbre.',
    quote: 'Desde el 17 de octubre de 2012, Tequisquiapan es Pueblo Mágico: el cuarto de Querétaro, después de Bernal, Jalpan y Cadereyta.',
    intro:
      'Lo que lo hace distinto cabe en un paseo de fin de semana: un centro de portales y cantera, el oficio de la cestería, la tradición termal que lo convirtió en destino turístico, los viñedos y queserías de la Ruta Arte, Queso y Vino, y una agenda de fiestas que casi no se detiene en todo el año.',
    name: 'El nombre',
    words: [
      { k: 'Tequixquitl', v: 'tequesquite, el salitre mineral' },
      { k: 'Atl', v: 'agua' },
      { k: 'Apan', v: 'lugar' },
    ],
    nameText: (
      <>
        El nombre viene del náhuatl y se suele traducir como <em>lugar sobre el río de tequesquite</em>. En otomí, el pueblo se llama
        <em> Nthe</em>.
      </>
    ),
    history: 'Historia',
    historyLead: 'Casi cinco siglos alrededor del agua.',
    timeline: [
      { year: 'Antes de 1551', text: 'Tierra de pueblos otomíes junto al río San Juan.' },
      { year: '1551', text: 'Se funda el pueblo en los barrios de San Juan y La Magdalena; la misa de fundación se celebra en el templo de Santa María Magdalena.' },
      { year: '1567', text: 'Se construye la pila de agua que hoy da nombre al Parque La Pila.' },
      { year: '1656', text: 'Una cédula real fija el nombre de Santa María de la Asunción de Tequisquiapan.' },
      { year: '1874', text: 'Se termina la segunda etapa de la parroquia de Santa María de la Asunción; su reloj es de 1897 y la cúpula se levantó en 1921 con trabajo voluntario de los vecinos.' },
      { year: '1902', text: 'Según el municipio, se inaugura la Estación Bernal del ferrocarril, a las afueras del pueblo; se llama así por su vista a la Peña.' },
      { year: '1916', text: 'Venustiano Carranza, asiduo a sus aguas termales, decreta a Tequisquiapan centro geográfico del país. El monumento del péndulo lo recuerda (el centro geográfico real está en Zacatecas).' },
      { year: 'Años 50', text: 'Auge de los balnearios de aguas termales: Tequis se vuelve destino de descanso para la Ciudad de México y el Bajío.' },
      { year: '2012', text: 'El 17 de octubre recibe el nombramiento de Pueblo Mágico, el cuarto de Querétaro.' },
    ],
    heritageAlt: 'Templo de Santa María Magdalena',
    heritage: 'Templos, barrios y capillas',
    heritageP: [
      'La parroquia de Santa María de la Asunción, neoclásica y de cantera, preside la Plaza Miguel Hidalgo con sus portales, su quiosco y sus sabinos. A unas calles, el templo de Santa María Magdalena guarda la memoria de la fundación.',
      'Entre los barrios de San Juan y La Magdalena hay capillas de indios como la de la Cruz Verde, y a lo largo del año se celebran casi cien fiestas patronales en templos y capillas.',
    ],
    historicRoute: 'Ruta Histórica',
    craftsAlt: 'Mercado de Artesanías Tequesquicalli',
    crafts: 'El Paraíso de la cestería',
    craftsP: [
      'Tequis se ganó el apodo por sus canastas, muebles y figuras tejidas con vara de sauz, mimbre, carrizo y raíz de sabino. La mayoría de los talleres están en el Barrio de la Magdalena.',
      'Para comprar: el mercado Tequesquicalli, el más antiguo; el Telésforo Trejo, con más de 60 locales en dos pisos; y el Parador Artesanal, que abre fines de semana y días festivos junto a la terminal de autobuses.',
      'El mimbre también sale a las fiestas: en Tejedores de Luz (Día de Muertos) y en la Villa Navideña, las figuras tejidas llenan las plazas.',
    ],
    craftsRoute: 'Ruta Artesanal',
    flavorsAlt: 'Feria del Queso y el Vino en Tequisquiapan',
    flavors: 'Queso, vino y cocina de pueblo',
    flavorsP: [
      'Tequis es parada de la Ruta Arte, Queso y Vino de Querétaro. En la zona se producen más de 60 etiquetas, y los viñedos del municipio están a menos de 20 minutos del centro. Las queserías hacen quesos frescos y madurados, de vaca y de cabra.',
      'Desde 1976, la Feria Nacional del Queso y el Vino (hoy Festival Internacional del Arte, Queso y Vino) reúne bodegas y queserías en el Parque La Pila entre mayo y junio.',
      'En la mesa: barbacoa de borrego con su consomé, enchiladas queretanas, gorditas de maíz quebrado y, de postre, charamuscas y dulces de leche; para tomar, pulque o curado de tuna.',
    ],
    wineRoute: 'Ruta del Vino y Queso',
    bernalAlt: 'Peña de Bernal',
    bernal: 'La Peña de Bernal',
    bernalP: [
      'A unos 35 km, en el municipio de Ezequiel Montes, se levanta la Peña de Bernal: un monolito de unos 350 metros sobre el pueblo del mismo nombre, también Pueblo Mágico.',
      'Desde 2009, los lugares de memoria y tradiciones vivas de los otomí-chichimecas de Tolimán, que incluyen la Peña, son Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO.',
    ],
    gettingThere: 'Cómo llegar',
    plan: 'Arma tu fin de semana',
    thingsToDo: 'Qué hacer',
    events: 'Fiestas y eventos',
    tips: 'Guía práctica',
  },
  en: {
    heroAlt: 'Parish church of Santa María de la Asunción',
    title: 'Why Tequis',
    lead: 'A Pueblo Mágico of water, stone and wicker.',
    quote: 'Since October 17, 2012, Tequisquiapan has been a Pueblo Mágico, the fourth in Querétaro after Bernal, Jalpan and Cadereyta.',
    intro:
      'What makes it different fits into a weekend: a center of stone arcades, the craft of basket weaving, the hot-spring tradition that made it a getaway, the wineries and cheese makers of the Art, Cheese and Wine Route, and a calendar of festivals that barely stops all year.',
    name: 'The name',
    words: [
      { k: 'Tequixquitl', v: 'tequesquite, a mineral salt' },
      { k: 'Atl', v: 'water' },
      { k: 'Apan', v: 'place' },
    ],
    nameText: (
      <>
        The name comes from Nahuatl and is usually translated as <em>place on the river of tequesquite</em>. In Otomí, the town is called
        <em> Nthe</em>.
      </>
    ),
    history: 'History',
    historyLead: 'Nearly five centuries around water.',
    timeline: [
      { year: 'Before 1551', text: 'Land of Otomí villages along the San Juan River.' },
      { year: '1551', text: 'The town is founded in the San Juan and La Magdalena neighborhoods; the founding Mass is held in the church of Santa María Magdalena.' },
      { year: '1567', text: 'The water tank that gives Parque La Pila its name is built.' },
      { year: '1656', text: 'A royal decree sets the name Santa María de la Asunción de Tequisquiapan.' },
      { year: '1874', text: 'The second stage of the parish church of Santa María de la Asunción is finished; its clock dates from 1897 and the dome was raised in 1921 by volunteer neighbors.' },
      { year: '1902', text: 'According to the municipality, the Bernal railway station opens on the outskirts of town; it is named for its view of the Peña.' },
      { year: '1916', text: 'Venustiano Carranza, a regular at its hot springs, declares Tequisquiapan the geographic center of the country. The pendulum monument recalls it (the actual geographic center is in Zacatecas).' },
      { year: '1950s', text: 'The heyday of the hot-spring resorts: Tequis becomes a getaway for Mexico City and the Bajío.' },
      { year: '2012', text: 'On October 17 it is named a Pueblo Mágico, the fourth in Querétaro.' },
    ],
    heritageAlt: 'Church of Santa María Magdalena',
    heritage: 'Churches, neighborhoods and chapels',
    heritageP: [
      'The neoclassical stone parish church of Santa María de la Asunción presides over Plaza Miguel Hidalgo with its arcades, bandstand and cypress trees. A few streets away, the church of Santa María Magdalena keeps the memory of the founding.',
      'Between the San Juan and La Magdalena neighborhoods there are Indigenous chapels such as the Cruz Verde, and close to a hundred patron saint feasts are held in churches and chapels throughout the year.',
    ],
    historicRoute: 'Historic Route',
    craftsAlt: 'Tequesquicalli crafts market',
    crafts: 'The basket-weaving capital',
    craftsP: [
      'Tequis earned the nickname “Paradise of Basketry” for its baskets, furniture and figures woven from willow, wicker, reed and cypress root. Most workshops are in the Barrio de la Magdalena.',
      'Where to buy: the Tequesquicalli market, the oldest; the Telésforo Trejo, with more than 60 stalls on two floors; and the Parador Artesanal, open on weekends and holidays next to the bus terminal.',
      'Wicker also comes out for the festivals: during Tejedores de Luz (Day of the Dead) and the Christmas village, woven figures fill the plazas.',
    ],
    craftsRoute: 'Crafts Route',
    flavorsAlt: 'Cheese and Wine Fair in Tequisquiapan',
    flavors: 'Cheese, wine and small-town cooking',
    flavorsP: [
      'Tequis is a stop on Querétaro’s Art, Cheese and Wine Route. More than 60 wine labels are made in the area, and the town’s vineyards are less than 20 minutes from the center. Cheese makers produce fresh and aged cheeses from cow and goat milk.',
      'Since 1976, the National Cheese and Wine Fair (now the International Art, Cheese and Wine Festival) has brought wineries and cheese makers to Parque La Pila between May and June.',
      'At the table: lamb barbacoa with its consommé, enchiladas queretanas, gorditas de maíz quebrado and, for dessert, charamuscas and milk sweets; to drink, pulque or prickly-pear curado.',
    ],
    wineRoute: 'Wine and Cheese Route',
    bernalAlt: 'Peña de Bernal',
    bernal: 'Peña de Bernal',
    bernalP: [
      'About 35 km away, in the municipality of Ezequiel Montes, rises the Peña de Bernal: a monolith of about 350 meters above the town of the same name, also a Pueblo Mágico.',
      'Since 2009, the places of memory and living traditions of the Otomí-Chichimeca people of Tolimán, which include the Peña, have been UNESCO Intangible Cultural Heritage of Humanity.',
    ],
    gettingThere: 'Getting there',
    plan: 'Plan your weekend',
    thingsToDo: 'Things to do',
    events: 'Festivals and events',
    tips: 'Travel tips',
  },
};

export default async function PorQueTequisPage({ params }: PageProps<'/[lang]/por-que-tequis'>) {
  const lang = langOf(await params);
  const c = COPY[lang];
  return (
    <>
      <PageHero photo={PHOTOS.parroquiaTarde} alt={c.heroAlt} title={c.title} lead={c.lead} />

      <section className="frame grid grid-cols-1 gap-10 pt-32 lg:grid-cols-2 lg:gap-24">
        <p data-split="lines" className="max-w-[24ch] font-display text-title leading-[1.15] tracking-[-0.01em]">
          {c.quote}
        </p>
        <p data-reveal="up" className="max-w-[56ch] self-end">
          {c.intro}
        </p>
      </section>

      <section id="nombre" className="frame mt-32 scroll-mt-28" aria-labelledby="nombre-title">
        <h2 id="nombre-title" data-split="lines" className="heading">{c.name}</h2>
        <div data-reveal="stagger" className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-3">
          {c.words.map((w) => (
            <div key={w.k} className="bg-surface p-8 sm:p-10">
              <p className="font-display text-title leading-none tracking-[-0.02em]">{w.k}</p>
              <p className="mt-4">{w.v}</p>
            </div>
          ))}
        </div>
        <p data-reveal="up" className="mt-8 max-w-[60ch]">
          {c.nameText}
        </p>
      </section>

      <section id="historia" className="frame scroll-mt-28 pt-40">
        <SectionTitle title={c.history} lead={c.historyLead} />
        <ol className="mt-14 space-y-10">
          {c.timeline.map((t) => (
            <li key={t.year} data-reveal="up" className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1fr)_2fr] sm:gap-12">
              <p className="font-display text-title leading-none tracking-[-0.02em]">{t.year}</p>
              <p className="max-w-[60ch]">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <Feature id="patrimonio" photo={PHOTOS.temploMagdalena} alt={c.heritageAlt} title={c.heritage}>
        {c.heritageP.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <Link href={href(lang, '/rutas/historica')} className="btn-outline">{c.historicRoute}</Link>
      </Feature>

      <Feature id="tradiciones" photo={PHOTOS.mercadoTequesquicalli} alt={c.craftsAlt} title={c.crafts} reverse>
        {c.craftsP.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <Link href={href(lang, '/rutas/artesanal')} className="btn-outline">{c.craftsRoute}</Link>
      </Feature>

      <Feature id="sabores" photo={PHOTOS.feriaQuesoVino} alt={c.flavorsAlt} title={c.flavors}>
        {c.flavorsP.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <Link href={href(lang, '/rutas/vino-y-queso')} className="btn-outline">{c.wineRoute}</Link>
      </Feature>

      <Feature id="alrededores" photo={PHOTOS.penaBernal} alt={c.bernalAlt} title={c.bernal} reverse>
        {c.bernalP.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <Link href={href(lang, '/guia-practica#como-llegar')} className="btn-outline">{c.gettingThere}</Link>
      </Feature>

      <section data-cursor-dark className="on-dark -mb-40 mt-24 bg-green py-28 text-white" aria-labelledby="listo-title">
        <div className="frame">
          <h2 id="listo-title" data-split="lines" className="heading max-w-[14ch]">{c.plan}</h2>
          <div data-reveal="up" className="mt-10 flex flex-wrap gap-3">
            <Link href={href(lang, '/lugares')} className="btn">{c.thingsToDo}</Link>
            <Link href={href(lang, '/eventos')} className="btn-outline">{c.events}</Link>
            <Link href={href(lang, '/guia-practica')} className="btn-outline">{c.tips}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

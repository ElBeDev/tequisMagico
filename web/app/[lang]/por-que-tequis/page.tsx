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
          'History of Tequisquiapan since 1551, what its name means, population and altitude, why it is a Pueblo Mágico, Cantinflas’s “El Profe” and basket weaving.',
        alternates: alternates(lang, '/por-que-tequis'),
      }
    : {
        title: 'Por qué visitar Tequisquiapan, Pueblo Mágico',
        description:
          'Historia de Tequisquiapan desde 1551, qué significa su nombre, población y altitud, por qué es Pueblo Mágico, Cantinflas y “El Profe”, y la cestería.',
        alternates: alternates(lang, '/por-que-tequis'),
      };
}

// Datos tomados de Wikipedia, tequis.travel, gob.mx/Sectur, INEGI y prensa (investigación de
// noviembre 2026). Donde las fuentes no coinciden (el día exacto de la fundación, la edad de
// la tradición cestera), el texto se queda con lo que sí coincide. Nombre, datos e historia se
// revisaron contra docs/datos/investigacion-destino-2026-11.md (10 nov 2026): se quitaron el
// "centro real en Zacatecas", Carranza "asiduo" a los baños, el "auge de los años 50" y el
// nombre otomí "Nthe", que no tienen fuente; lo de 1916 se cuenta como lo cuenta el municipio.
// Población: 72,201 es el municipio y 34,955 la cabecera (Wikipedia da la de la cabecera).
const ITER_2020 = 'https://www.inegi.org.mx/contenidos/programas/ccpv/2020/datosabiertos/iter/iter_22_cpv2020_csv.zip';
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
      { k: 'Tequixqui', v: 'tequesquite, el salitre mineral' },
      { k: 'Atl', v: 'agua' },
      { k: 'Apan', v: 'lugar' },
    ],
    nameText: (
      <>
        El nombre viene del náhuatl y, según el portal de turismo del municipio, significa <em>lugar sobre el río de tequesquite</em>,
        una sal mineral.
      </>
    ),
    facts: 'Datos de Tequis',
    factsList: [
      { k: 'Querétaro', v: 'es el estado. El municipio y su cabecera se llaman Tequisquiapan.' },
      { k: '1,870 m', v: 'de altitud sobre el nivel del mar, en la cabecera.' },
      { k: '72,201', v: 'habitantes en todo el municipio, según el Censo 2020 del INEGI.' },
      { k: '34,955', v: 'habitantes en la cabecera, el pueblo, según el mismo censo.' },
      { k: '1551', v: 'año de su fundación, según el municipio.' },
      { k: '2012', v: 'Pueblo Mágico desde el 17 de octubre: el 61.º del país.' },
    ],
    history: 'Historia',
    historyLead: 'Casi cinco siglos alrededor del agua.',
    timeline: [
      { year: '1551', text: 'Se funda el pueblo en los barrios de San Juan y La Magdalena; la misa de fundación se celebra en el templo de Santa María Magdalena, restaurado en 2022.' },
      { year: '1567', text: 'La pila que hoy da nombre al Parque La Pila ya almacena el agua del pueblo.' },
      { year: '1656', text: 'Para entonces, el pueblo ya se llama Tequisquiapan.' },
      { year: '1874', text: 'Se termina la segunda etapa de la parroquia de Santa María de la Asunción; su reloj es de 1897 y la cúpula se levantó en 1921 con trabajo voluntario de los vecinos.' },
      { year: '1902', text: 'Según el municipio, se inaugura la Estación Bernal del ferrocarril, a las afueras del pueblo; se llama así por su vista a la Peña.' },
      { year: '1916', text: 'Según el municipio, el presidente Venustiano Carranza decreta a Tequisquiapan centro geográfico del país. Lo recuerda un monumento en forma de péndulo en la calle Niños Héroes, con una placa colocada en 1978.' },
      { year: '1971', text: 'Cantinflas filma aquí “El Profe”. Según el municipio, la película se grabó toda en Tequis, que en la historia se llama El Romeral, y en ella se ven el Centro Geográfico y la escuela primaria Rafael Zamorano. Desde 2018, una escultura del actor, de tamaño natural, está en el Jardín del Arte.' },
      { year: '2012', text: 'El 17 de octubre recibe el nombramiento de Pueblo Mágico: el 61.º del país y el cuarto de Querétaro.' },
    ],
    sources: 'Fuentes',
    sourcesList: [
      { label: 'INEGI: Censo 2020, localidades de Querétaro', url: ITER_2020 },
      { label: 'tequis.travel: Sitios históricos', url: 'https://tequis.travel/historicos_tequisquiapan/' },
      { label: 'tequis.travel: Iglesias', url: 'https://tequis.travel/iglesias_tequisquiapan/' },
      { label: 'tequis.travel: Cantinflas y “El profe”', url: 'https://tequis.travel/cantinflas_el_profe_tequisquiapan/' },
      { label: 'Expansión: los nuevos Pueblos Mágicos (octubre de 2012)', url: 'https://expansion.mx/salud/2012/10/17/huichapan-y-tequisquiapan-los-dos-nuevos-pueblos-magicos-de-mexico' },
      { label: 'Wikipedia en español', url: 'https://es.wikipedia.org/wiki/Tequisquiapan' },
      { label: 'Wikipedia en inglés', url: 'https://en.wikipedia.org/wiki/Tequisquiapan' },
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
      { k: 'Tequixqui', v: 'tequesquite, a mineral salt' },
      { k: 'Atl', v: 'water' },
      { k: 'Apan', v: 'place' },
    ],
    nameText: (
      <>
        The name comes from Nahuatl and, according to the municipal tourism portal, means <em>place on the river of tequesquite</em>,
        a mineral salt.
      </>
    ),
    facts: 'Tequis at a glance',
    factsList: [
      { k: 'Querétaro', v: 'is the state. Both the municipality and its main town are called Tequisquiapan.' },
      { k: '1,870 m', v: 'above sea level (6,135 ft), in the main town.' },
      { k: '72,201', v: 'people live in the whole municipality, according to INEGI’s 2020 census.' },
      { k: '34,955', v: 'people live in the main town itself, according to the same census.' },
      { k: '1551', v: 'the year it was founded, according to the municipality.' },
      { k: '2012', v: 'a Pueblo Mágico since October 17: the 61st in Mexico.' },
    ],
    history: 'History',
    historyLead: 'Nearly five centuries around water.',
    timeline: [
      { year: '1551', text: 'The town is founded in the San Juan and La Magdalena neighborhoods; the founding Mass is held in the church of Santa María Magdalena, restored in 2022.' },
      { year: '1567', text: 'The water tank that gives Parque La Pila its name is already storing the town’s water.' },
      { year: '1656', text: 'By then, the town is already called Tequisquiapan.' },
      { year: '1874', text: 'The second stage of the parish church of Santa María de la Asunción is finished; its clock dates from 1897 and the dome was raised in 1921 by volunteer neighbors.' },
      { year: '1902', text: 'According to the municipality, the Bernal railway station opens on the outskirts of town; it is named for its view of the Peña.' },
      { year: '1916', text: 'According to the municipality, President Venustiano Carranza declares Tequisquiapan the geographic center of the country. A pendulum-shaped monument on Niños Héroes street, with a plaque placed in 1978, recalls it.' },
      { year: '1971', text: 'Cantinflas films “El Profe” here. According to the municipality, the movie was shot entirely in Tequis, which appears in the story as El Romeral, and it shows the Centro Geográfico and the Rafael Zamorano elementary school. Since 2018, a life-size statue of the actor has stood in the Jardín del Arte.' },
      { year: '2012', text: 'On October 17 it is named a Pueblo Mágico: the 61st in Mexico and the fourth in Querétaro.' },
    ],
    sources: 'Sources',
    sourcesList: [
      { label: 'INEGI: 2020 census, Querétaro localities', url: ITER_2020 },
      { label: 'tequis.travel: Historic sites', url: 'https://tequis.travel/historicos_tequisquiapan/' },
      { label: 'tequis.travel: Churches', url: 'https://tequis.travel/iglesias_tequisquiapan/' },
      { label: 'tequis.travel: Cantinflas and “El profe”', url: 'https://tequis.travel/cantinflas_el_profe_tequisquiapan/' },
      { label: 'Expansión: the new Pueblos Mágicos (October 2012)', url: 'https://expansion.mx/salud/2012/10/17/huichapan-y-tequisquiapan-los-dos-nuevos-pueblos-magicos-de-mexico' },
      { label: 'Wikipedia (Spanish)', url: 'https://es.wikipedia.org/wiki/Tequisquiapan' },
      { label: 'Wikipedia (English)', url: 'https://en.wikipedia.org/wiki/Tequisquiapan' },
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

      <section id="datos" className="frame scroll-mt-28 pt-40" aria-labelledby="datos-title">
        <h2 id="datos-title" data-split="lines" className="heading">{c.facts}</h2>
        <div data-reveal="stagger" className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-3">
          {c.factsList.map((f) => (
            <div key={f.k} className="bg-surface p-8 sm:p-10">
              <p className="font-display text-title leading-none tracking-[-0.02em]">{f.k}</p>
              <p className="mt-4">{f.v}</p>
            </div>
          ))}
        </div>
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
        <p className="meta mt-14 max-w-[80ch] text-muted">
          {c.sources}:{' '}
          {c.sourcesList.map((s, i) => (
            <span key={s.url}>
              {i > 0 && ' · '}
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:underline">{s.label}</a>
            </span>
          ))}
        </p>
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

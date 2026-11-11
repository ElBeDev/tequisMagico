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
        // Las búsquedas en inglés son "mexico city to tequisquiapan", con shuttle, transfer o drop off
        // (Search Console, nov 2026). La guía habla de traslados privados sin recomendar a nadie.
        title: 'Mexico City to Tequisquiapan: bus, car, airport and transfers',
        description: 'How to get from Mexico City to Tequisquiapan: the direct ETN bus, driving and tolls, from the airport, private door-to-door transfers, and Querétaro and Bernal.',
        alternates: alternates(lang, '/guia-practica'),
      }
    : {
        title: 'Cómo llegar a Tequisquiapan desde la CDMX y cuándo ir',
        description: 'Cómo llegar a Tequisquiapan desde la CDMX: autobús directo ETN, en auto y casetas, desde el aeropuerto, traslado privado puerta a puerta, y desde Querétaro y Bernal.',
        alternates: alternates(lang, '/guia-practica'),
      };
}

// Cómo llegar: docs/datos/investigacion-transporte-2026-11.md (ETN, SICT, AICM, AIQ; nov 2026). Las
// cifras van fechadas porque cambian. No se recomienda ninguna empresa de traslados por nombre: la
// única con web y precios tiene pocas reseñas. Clima: INEGI y la normal 1971-2000 del SMN
// (estación 22025 Presa Centenario, 17.9 °C de media); temporadas: tequis.travel y prensa
// local, corregidas con docs/datos/investigacion-eventos-2027.md.
// "Preguntas antes de ir" (seguridad, sin auto, tren, inundaciones): docs/datos/investigacion-
// destino-2026-11.md, secciones 3 a 5, con las fuentes en `faqSources`. Las cifras de delitos son
// carpetas del SESNSP (denuncias); las tasas por 100 mil son cálculo propio con el Censo 2020.
// No se publica: el nivel de EE. UU. para Querétaro (el texto oficial no abrió), que DiDi opere en
// Tequis, la ubicación de la estación de San Juan del Río ni la fecha de 2027 del tren (todo
// eso viene de fuentes que no se pudieron revisar).
const COPY = {
  es: {
    heroAlt: 'Calle Niños Héroes en Tequisquiapan',
    title: 'Guía práctica',
    lead: 'Cómo llegar, cuándo ir y lo que conviene saber antes de salir.',
    gettingThere: 'Cómo llegar',
    gettingThereLead: 'En el sureste de Querétaro, a unos 175 km de la Ciudad de México.',
    routes: [
      {
        from: 'Desde la CDMX en autobús',
        lines: [
          'La única línea directa es ETN Turistar: sale de la Central de Autobuses del Norte, hace unas 3 horas y tiene varias salidas al día.',
          'En 2026 el boleto costaba desde unos 420 pesos comprado con anticipación, en etn.com.mx o en taquilla.',
          'Llega a la terminal de Tequis, junto al Parador Artesanal. El regreso a la CDMX sale de la misma terminal.',
        ],
      },
      {
        from: 'Desde la CDMX en auto',
        lines: [
          'Unos 175 km, de 2 h 30 min a 3 horas según el tráfico.',
          'Autopista México–Querétaro (57D) hasta San Juan del Río y de ahí la carretera federal 120 hacia Tequisquiapan (20 km).',
          'Dos casetas, Tepotzotlán y Palmillas: 226 pesos en auto en 2026. Si el GPS te manda por el Circuito Exterior Mexiquense, son cuatro.',
        ],
      },
      {
        from: 'Desde el aeropuerto',
        lines: [
          'Ningún aeropuerto tiene autobús directo a Tequis.',
          'Del aeropuerto de la CDMX (AICM), Primera Plus va a Querétaro y a San Juan del Río; de ahí sigues en ETN o en taxi.',
          'El más cercano es el de Querétaro (AIQ), a unos 40 minutos en taxi autorizado o Uber.',
        ],
      },
      {
        from: 'Traslado privado',
        lines: [
          'Algunas empresas de la CDMX hacen el viaje puerta a puerta, sencillo o redondo, en sedán o camioneta, y cobran por vehículo: en 2026, desde unos 270 dólares el sencillo.',
          'Pide el precio total, con casetas y tiempo de espera.',
        ],
      },
      {
        from: 'Desde Querétaro',
        lines: [
          'Unos 60 km, alrededor de 50 minutos, por la carretera estatal 200, la misma de los viñedos.',
          'En autobús: Flecha Amarilla y Flecha Azul salen de la Terminal de Autobuses (TAQ).',
        ],
      },
      {
        from: 'A la Peña de Bernal',
        lines: ['Unos 40 minutos en auto o Uber.', 'En transporte público no hay ruta directa: camioneta a Ezequiel Montes y ahí otra a Bernal.'],
      },
    ],
    routesNote: 'Tiempos y precios de casetas o autobuses cambian; confírmalos antes de salir.',
    whenAlt: 'Plaza y quiosco de Tequisquiapan',
    when: 'Cuándo ir',
    whenP1:
      'El clima es semiseco templado, con unos 18 °C de promedio anual. Llueve sobre todo de junio a septiembre; diciembre y enero son los meses más fríos y casi no llueve, así que lleva abrigo para las noches.',
    whenP2:
      'Entre semana el pueblo está tranquilo. Los fines de semana, los puentes y estas temporadas se llenan, así que conviene reservar hospedaje con tiempo:',
    seasons: [
      { when: 'Marzo y abril', what: 'Feria del Toro de Lidia, Festival del Artesano y Semana Santa, con Vía Crucis y quema de Judas.' },
      { when: 'Mayo', what: 'Festival Internacional del Arte, Queso y Vino en el Parque La Pila y el centro, con entrada libre.' },
      { when: '15 de agosto', what: 'Fiesta patronal de Santa María de la Asunción, con danzas y castillo.' },
      { when: 'Fin de octubre', what: 'Tejedores de Luz: Día de Muertos con figuras de mimbre.' },
      { when: 'Diciembre y enero', what: 'Posadas y la Villa Navideña, con figuras de mimbre. La ocupación hotelera llega al 100%.' },
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
    capta: 'Atención al turista del estado (CAPTA)',
    office: 'Oficina de turismo: Andador Independencia 1, Centro.',
    faq: 'Preguntas antes de ir',
    faqLead: 'Seguridad, cómo moverse sin auto, el tren y las lluvias, con cifras oficiales y su fecha.',
    faqs: [
      {
        id: 'seguridad',
        q: '¿Es seguro Tequis?',
        lines: [
          'En 2025 se abrieron 1,483 carpetas de investigación por delitos del fuero común en el municipio, según el Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública (SESNSP): 10.6% menos que en 2024.',
          'Con la población del Censo 2020, son unas 2,054 por cada 100 mil habitantes: menos que el promedio del estado de Querétaro (2,388) y que San Juan del Río (2,219), y más que Ezequiel Montes (unas 1,387). Hubo 3 homicidios dolosos.',
          'Lo más denunciado fueron robos, amenazas, lesiones y violencia familiar. Son delitos denunciados, no todos los que ocurren, y el INEGI no mide la percepción de inseguridad en el municipio.',
          'Canadá pide “un alto grado de precaución” en todo México y no incluye a Querétaro entre las regiones con aviso especial (octubre de 2026).',
          'En temporada vacacional, el Centro de Atención y Protección al Turista (CAPTA) del estado pone módulos en Tequis: 442 238 5033.',
        ],
      },
      {
        id: 'sin-auto',
        q: 'Moverse sin auto',
        lines: [
          'El centro se recorre a pie, y la terminal de autobuses queda a 1.3 km de la parroquia.',
          'Uber funciona, pero la espera puede ser larga. Hay taxis, aunque no encontramos un sitio con teléfono publicado: el directorio municipal de 2025 no los incluye.',
          'No pudimos confirmar que DiDi opere en Tequis.',
          'El tranvía turístico recorre el pueblo en una hora u hora y media; en 2026 salía de viernes a domingo, entre las 11 y las 17 h.',
        ],
      },
      {
        id: 'tren',
        q: 'El tren México–Querétaro',
        lines: [
          'Está en construcción y no tiene estación en Tequis. Según la Secretaría de Infraestructura, Comunicaciones y Transportes (SICT, diciembre de 2025), sus estaciones serán Huehuetoca, Tula, San Juan del Río, Querétaro Central, El Marqués y La Corregidora.',
          'La más cercana a Tequis será la de San Juan del Río, a unos 30 minutos en auto. La SICT calcula 1 h 20 min de la Ciudad de México a San Juan del Río y unas 2 horas a Querétaro.',
          'Todavía no funciona ni tiene tarifas publicadas. En julio de 2025, la Presidencia informó que la obra avanzaba y que la prospección arqueológica con el INAH iba en 99%.',
        ],
      },
      {
        id: 'inundaciones',
        q: '¿Se inunda Tequis?',
        lines: [
          'No cada año. Pasó del 18 al 21 de septiembre y del 1 al 3 de octubre de 2021, y el 7 de septiembre de 2025: lluvias extraordinarias en la cuenca llenaron la Presa Centenario, río arriba del pueblo, y el río San Juan se desbordó.',
          'Se afecta lo que está junto al río: el Parque La Pila, calles del centro cercanas al cauce, Los Sabinos, La Magdalena, Los Claustros y algunos hoteles y balnearios de la ribera. En los dos años, el agua llegó también al centro histórico.',
          'En 2025 se evacuaron las zonas de riesgo; según la prensa, cerca del 10% de los hoteles tomó medidas preventivas y la mayoría de los atractivos siguió abierta.',
          'En 2026 no encontramos reportes de inundaciones en el pueblo. Si viajas en septiembre o a principios de octubre y ha llovido fuerte, revisa los avisos de Protección Civil de Tequisquiapan y de la Conagua.',
        ],
      },
    ],
    sourcesLabel: 'Fuentes',
    faqSources: [
      { label: 'SESNSP: incidencia delictiva municipal (septiembre de 2026)', url: 'https://www.gob.mx/sesnsp/acciones-y-programas/datos-abiertos-de-incidencia-delictiva' },
      { label: 'INEGI: Censo 2020 en Querétaro', url: 'https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2021/EstSociodemo/ResultCenso2020_Qro.pdf' },
      { label: 'INEGI: Censo 2020, localidades', url: 'https://www.inegi.org.mx/contenidos/programas/ccpv/2020/datosabiertos/iter/iter_22_cpv2020_csv.zip' },
      { label: 'Gobierno de Canadá: México (octubre de 2026)', url: 'https://travel.gc.ca/destinations/mexico' },
      { label: 'queretaro.travel: CAPTA', url: 'https://queretaro.travel/lugares/get-to-know-capture-and-improve-your-experience-in-queretaro/?lang=en' },
      { label: 'Uber: Tequisquiapan', url: 'https://www.uber.com/global/en/r/cities/tequisquiapan-qt-mx/' },
      { label: 'Directorio Tequisquiapan 2025 (PDF)', url: 'https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf' },
      { label: 'tequis.travel: Qué hacer (tranvía)', url: 'https://tequis.travel/que_hacer_tequisquiapan/' },
      { label: 'SICT: Tren Ciudad de México–Querétaro (diciembre de 2025)', url: 'http://www.gob.mx/sict/prensa/tren-ciudad-de-mexico-queretaro-beneficiara-a-10-millones-de-pasajeros-al-ano-artf' },
      { label: 'Presidencia: avance de la obra (julio de 2025)', url: 'http://www.gob.mx/presidencia/prensa/avanza-construccion-de-trenes-mexico-pachuca-y-mexico-queretaro-generaran-260-mil-empleos-este-ano' },
      { label: 'Uno TV: inundación de septiembre de 2021', url: 'https://www.unotv.com/estados/queretaro/queretaro-tequisquiapan-comienza-a-levantarse-tras-inundacion/' },
      { label: 'Uno TV: alerta roja de octubre de 2021', url: 'https://www.unotv.com/estados/queretaro/tequisquiapan-y-san-juan-del-rio-en-alerta-roja-por-posibles-inundaciones/' },
      { label: 'N+: evacuación del centro (septiembre de 2025)', url: 'https://www.nmas.com.mx/queretaro/clima/desbordamiento-de-la-presa-centenario-genero-la-evacuacion-del-centro-de-tequisquiapan/' },
      { label: 'La Verdad: desbordamiento de la Presa Centenario (septiembre de 2025)', url: 'https://laverdadnoticias.com/ultimas-noticias/mexico/inundaciones-en-tequisquiapan-viviendas-afectadas-tras-el-desbordamiento-de-la-presa-el-centenario' },
      { label: 'El Congresista: turismo tras la inundación (septiembre de 2025)', url: 'https://elcongresista.mx/politica/nacional/tequisquiapan-control-inundaciones-turismo' },
    ],
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
    gettingThereLead: 'In southeastern Querétaro, about 175 km from Mexico City.',
    routes: [
      {
        from: 'Mexico City by bus',
        lines: [
          "The only direct line is ETN Turistar: it leaves from Mexico City's Central del Norte bus station, takes about 3 hours and runs several times a day.",
          'In 2026 tickets started at around 420 pesos when booked early, on etn.com.mx or at the counter.',
          'Buses arrive at the Tequis terminal, next to the Parador Artesanal crafts market. Buses back to Mexico City leave from the same terminal.',
        ],
      },
      {
        from: 'Mexico City by car',
        lines: [
          'About 175 km, 2.5 to 3 hours depending on traffic.',
          'Take the Mexico–Querétaro highway (57D) to San Juan del Río, then federal highway 120 to Tequisquiapan (20 km).',
          'Two toll booths, Tepotzotlán and Palmillas: 226 pesos for a car in 2026. If your GPS routes you over the Circuito Exterior Mexiquense, you pay four.',
        ],
      },
      {
        from: 'From the airport',
        lines: [
          'No airport has a direct bus to Tequis.',
          'From Mexico City airport (AICM), Primera Plus buses go to Querétaro and San Juan del Río; continue from there by ETN or taxi.',
          'The closest airport is Querétaro (QRO), about 40 minutes away by authorized airport taxi or Uber.',
        ],
      },
      {
        from: 'Private transfer',
        lines: [
          'Some Mexico City companies offer door-to-door transfers, one way or round trip, by sedan or van, priced per vehicle: in 2026, from about US$270 one way.',
          'Ask for the total price, including tolls and waiting time.',
        ],
      },
      {
        from: 'From Querétaro',
        lines: ['About 60 km, roughly 50 minutes, on state highway 200, the same road as the wineries.', 'By bus: Flecha Amarilla and Flecha Azul leave from the bus terminal (TAQ).'],
      },
      {
        from: 'To the Peña de Bernal',
        lines: ['About 40 minutes by car or Uber.', 'There is no direct public transport: take a van to Ezequiel Montes and change there for Bernal.'],
      },
    ],
    routesNote: 'Travel times and toll or bus prices change; check them before you leave.',
    whenAlt: 'Plaza and bandstand in Tequisquiapan',
    when: 'When to go',
    whenP1:
      'The climate is mild and semi-dry, averaging about 18 °C (64 °F) a year. Most rain falls from June to September; December and January are the coldest months and barely see any rain, so bring a jacket for the evenings.',
    whenP2: 'Weekdays are quiet. Weekends, long weekends and these seasons fill up, so book your stay early:',
    seasons: [
      { when: 'March and April', what: 'Fighting Bull Fair, Artisan Festival and Holy Week, with the Stations of the Cross and the burning of Judas.' },
      { when: 'May', what: 'International Art, Cheese and Wine Festival in Parque La Pila and downtown, with free admission.' },
      { when: 'August 15', what: 'Patron saint feast of Santa María de la Asunción, with dances and fireworks.' },
      { when: 'Late October', what: 'Tejedores de Luz: Day of the Dead with wicker figures.' },
      { when: 'December and January', what: 'Posadas and the Christmas village, with wicker figures. Hotels fill up completely.' },
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
    capta: 'State tourist assistance (CAPTA)',
    office: 'Tourism office: Andador Independencia 1, Centro.',
    faq: 'Questions before you go',
    faqLead: 'Safety, getting around without a car, the train and the rains, with official figures and their dates.',
    faqs: [
      {
        id: 'seguridad',
        q: 'Is Tequis safe?',
        lines: [
          'In 2025, 1,483 criminal investigations into state-level (fuero común) crimes were opened in the municipality, according to the SESNSP, Mexico’s national public security system: 10.6% fewer than in 2024.',
          'Using the 2020 census population, that is about 2,054 per 100,000 residents: below the Querétaro state average (2,388) and San Juan del Río (2,219), and above Ezequiel Montes (about 1,387). There were 3 intentional homicides.',
          'The most reported crimes were theft, threats, assault and domestic violence. These are reported crimes, not every crime that happens, and INEGI does not measure perceived insecurity in the municipality.',
          'Canada advises “a high degree of caution” for all of Mexico and does not list Querétaro among the regions with a specific advisory (October 2026).',
          'During vacation periods, the state’s Tourist Assistance and Protection Center (CAPTA) sets up booths in Tequis: 442 238 5033.',
        ],
      },
      {
        id: 'sin-auto',
        q: 'Getting around without a car',
        lines: [
          'The center is walkable, and the bus terminal is 1.3 km from the parish church.',
          'Uber works, but the wait can be long. There are taxis, though we couldn’t find a taxi stand with a published phone number: the 2025 municipal directory doesn’t list any.',
          'We couldn’t confirm that DiDi operates in Tequis.',
          'The tourist trolley tours the town in an hour to an hour and a half; in 2026 it ran Friday to Sunday, between 11 a.m. and 5 p.m.',
        ],
      },
      {
        id: 'tren',
        q: 'The Mexico City–Querétaro train',
        lines: [
          'It is under construction and has no station in Tequis. According to the federal transportation ministry (SICT, December 2025), its stations will be Huehuetoca, Tula, San Juan del Río, Querétaro Central, El Marqués and La Corregidora.',
          'The closest to Tequis will be San Juan del Río, about 30 minutes away by car. The SICT estimates 1 h 20 min from Mexico City to San Juan del Río and about 2 hours to Querétaro.',
          'It is not running yet and has no published fares. In July 2025, the Mexican presidency reported that construction was moving forward and that the archaeological survey with INAH was 99% complete.',
        ],
      },
      {
        id: 'inundaciones',
        q: 'Does Tequis flood?',
        lines: [
          'Not every year. It happened from September 18 to 21 and October 1 to 3, 2021, and on September 7, 2025: extraordinary rain in the watershed filled the Presa Centenario reservoir, upstream of town, and the San Juan River overflowed.',
          'What floods is what lies along the river: Parque La Pila, downtown streets near the riverbed, Los Sabinos, La Magdalena, Los Claustros and some riverside hotels and balnearios. Both years, the water also reached the historic center.',
          'In 2025 the risk areas were evacuated; according to the press, about 10% of hotels took precautions and most attractions stayed open.',
          'We found no reports of flooding in town in 2026. If you travel in September or early October after heavy rain, check the alerts from Tequisquiapan Civil Protection and Conagua, the national water authority.',
        ],
      },
    ],
    sourcesLabel: 'Sources',
    faqSources: [
      { label: 'SESNSP: crime by municipality (September 2026)', url: 'https://www.gob.mx/sesnsp/acciones-y-programas/datos-abiertos-de-incidencia-delictiva' },
      { label: 'INEGI: 2020 census in Querétaro', url: 'https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2021/EstSociodemo/ResultCenso2020_Qro.pdf' },
      { label: 'INEGI: 2020 census, localities', url: 'https://www.inegi.org.mx/contenidos/programas/ccpv/2020/datosabiertos/iter/iter_22_cpv2020_csv.zip' },
      { label: 'Government of Canada: Mexico (October 2026)', url: 'https://travel.gc.ca/destinations/mexico' },
      { label: 'queretaro.travel: CAPTA', url: 'https://queretaro.travel/lugares/get-to-know-capture-and-improve-your-experience-in-queretaro/?lang=en' },
      { label: 'Uber: Tequisquiapan', url: 'https://www.uber.com/global/en/r/cities/tequisquiapan-qt-mx/' },
      { label: 'Tequisquiapan 2025 directory (PDF)', url: 'https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf' },
      { label: 'tequis.travel: What to do (trolley)', url: 'https://tequis.travel/que_hacer_tequisquiapan/' },
      { label: 'SICT: Mexico City–Querétaro train (December 2025)', url: 'http://www.gob.mx/sict/prensa/tren-ciudad-de-mexico-queretaro-beneficiara-a-10-millones-de-pasajeros-al-ano-artf' },
      { label: 'Presidency: construction progress (July 2025)', url: 'http://www.gob.mx/presidencia/prensa/avanza-construccion-de-trenes-mexico-pachuca-y-mexico-queretaro-generaran-260-mil-empleos-este-ano' },
      { label: 'Uno TV: September 2021 flood', url: 'https://www.unotv.com/estados/queretaro/queretaro-tequisquiapan-comienza-a-levantarse-tras-inundacion/' },
      { label: 'Uno TV: October 2021 red alert', url: 'https://www.unotv.com/estados/queretaro/tequisquiapan-y-san-juan-del-rio-en-alerta-roja-por-posibles-inundaciones/' },
      { label: 'N+: downtown evacuation (September 2025)', url: 'https://www.nmas.com.mx/queretaro/clima/desbordamiento-de-la-presa-centenario-genero-la-evacuacion-del-centro-de-tequisquiapan/' },
      { label: 'La Verdad: Presa Centenario overflows (September 2025)', url: 'https://laverdadnoticias.com/ultimas-noticias/mexico/inundaciones-en-tequisquiapan-viviendas-afectadas-tras-el-desbordamiento-de-la-presa-el-centenario' },
      { label: 'El Congresista: tourism after the flood (September 2025)', url: 'https://elcongresista.mx/politica/nacional/tequisquiapan-control-inundaciones-turismo' },
    ],
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
          <p>{c.capta}: <a href="tel:+524422385033" className="font-medium underline">442 238 5033</a></p>
          <p className="meta text-muted">{c.office}</p>
        </div>
      </Feature>

      <section id="preguntas" className="frame scroll-mt-28 pt-16">
        <SectionTitle title={c.faq} lead={c.faqLead} />
        <div data-reveal="stagger" className="mt-14 space-y-2">
          {c.faqs.map(({ id, q, lines }) => (
            <div key={id} id={id} className="grid scroll-mt-28 grid-cols-1 gap-4 bg-surface p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-12">
              <h3 className="self-start font-display text-lead leading-none tracking-[-0.01em]">{q}</h3>
              <ul className="max-w-[60ch] space-y-2">
                {lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="meta mt-6 max-w-[80ch] text-muted">
          {c.sourcesLabel}:{' '}
          {c.faqSources.map((s, i) => (
            <span key={s.url}>
              {i > 0 && ' · '}
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:underline">{s.label}</a>
            </span>
          ))}
        </p>
      </section>

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

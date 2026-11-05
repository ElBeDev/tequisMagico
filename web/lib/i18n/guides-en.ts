import { PHOTOS } from '../photos';
import type { Guide } from '../guides';

// English versions of the guides in lib/guides.ts, same order. `slug` is the English slug;
// `places` keep the exact Spanish place names (they are looked up in the API by name).
const TT = (page: string) => `https://tequis.travel/${page}/`;

export const GUIDES_EN: Guide[] = [
  {
    slug: 'weekend',
    title: 'A weekend in Tequis',
    heroTitle: 'A weekend in Tequis',
    lead: 'Saturday in town, Sunday in the air and among the vineyards.',
    description:
      'Two days in Tequisquiapan: markets, the plaza and the parish church on Saturday; a sunrise balloon flight, cheese and wine on Sunday. With times and tips.',
    searchSubtitle: 'A Saturday and Sunday itinerary',
    photo: PHOTOS.quiosco,
    photoAlt: 'The bandstand in Plaza Miguel Hidalgo',
    updated: 'November 2026',
    updatedISO: '2026-11-02',
    intro: [
      "Tequis is a town you explore on foot, and it fits in two days. It’s best to arrive Friday night or early Saturday and stay two nights: that way Saturday is for the town and Sunday is for the balloon and the vineyards, which are on the way to the Peña de Bernal.",
      'Nights are cool almost all year, even when the day is hot: bring something warm.',
    ],
    sections: [
      {
        id: 'sabado-manana',
        title: 'Saturday morning',
        paragraphs: [
          'Have breakfast at the Mercado Guadalupano, on Ezequiel Montes street: fruit, antojitos and regional food from nine o’clock. From there it’s a short walk to [Plaza Miguel Hidalgo](/en/place/plaza-miguel-hidalgo), with its stone arcades, the bandstand and the sabino trees.',
          'The parish church of Santa María de la Asunción presides over the plaza. It is built of cantera stone, went up in stages between the 16th and 19th centuries, and its clock dates from 1897. A few streets away, at Niños Héroes 17, the pendulum commemorates the 1916 decree that made Tequis the geographic center of the country.',
          'Then head down to La Pila, the town’s water reservoir since 1567, and to the Callejón del Piojo, where the public washhouses used to be.',
        ],
        places: ['Plaza Miguel Hidalgo', 'Templo de Santa María de la Asunción', 'La Pila'],
        photo: PHOTOS.callejonPiojo,
        photoAlt: 'The Callejón del Piojo',
      },
      {
        id: 'sabado-tarde',
        title: 'Saturday afternoon',
        paragraphs: [
          'Time for basketry. The Telésforo Trejo market, near the plaza, has more than 60 stalls on two floors: willow switch, sabino root, opal and textiles from Bernal. The Tequesquicalli, on Independencia, is the oldest crafts market. And the Parador Artesanal, next to the bus terminal, is open only on Saturdays, Sundays and holidays.',
          'For lunch in the center, try Querétaro food: ayocotadas, enmoladas and mole de olla. If you don’t want to walk any more, the tourist trolley takes an hour to an hour and a half to tour the town; it runs Friday to Sunday, leaving between 11 a.m. and 5 p.m.',
        ],
        places: ["K'puchinos Restaurant", 'Mercado Artesanal Telésforo Trejo'],
        tip: 'Bring cash for the markets and, if you plan to buy cheese on Sunday, a cooler in the car.',
        photo: PHOTOS.mercadoTequesquicalli,
        photoAlt: 'The Tequesquicalli crafts market',
      },
      {
        id: 'sabado-noche',
        title: 'Saturday night',
        paragraphs: [
          'On Saturdays there is something going on in the plaza after dinner. The Noches de Leyendas walk the streets with actors who tell stories of the town; they start from one side of the parish church. On the first Saturday of every month there is a callejoneada, a street procession with a student band, and some nights a video mapping show is projected on the church facade.',
          'If you are flying in a balloon the next day, eat dinner early: the alarm goes off before dawn.',
        ],
        photo: PHOTOS.parroquiaNoche,
        photoAlt: 'The parish church lit up at night',
      },
      {
        id: 'domingo-globo',
        title: 'Sunday at sunrise',
        paragraphs: [
          'The balloons take off at first light, when the air is calmest. The flight lasts between 45 minutes and an hour, and the whole experience about two and a half hours. The operator gives you the exact meeting time; expect to get up around four.',
          'The pilot cancels if there is wind, rain or fog, and in that case the flight is rescheduled. That’s why it’s better to plan it for Sunday and not for the last moment of your trip.',
          'A local fact: Tequis has its own balloon factory, which has been running since 1982 and describes itself as the only one in Mexico certified by the aviation authority.',
        ],
        places: ['Globos Aerostáticos Tequisquiapan'],
        photo: PHOTOS.globoValle,
        photoAlt: 'A hot-air balloon over the Tequisquiapan valley',
      },
      {
        id: 'domingo-vino',
        title: 'Sunday: cheese and wine',
        paragraphs: [
          'After the balloon, take the highway to Ezequiel Montes. There, half an hour from the center, are the big wineries: Freixenet, with its cellar 25 meters underground, and Viñedos Azteca, right across the road, whose winery can only be visited on weekends. Tours leave every hour and sell out on weekends: buy your ticket ahead of time.',
          'For cheese, the [Cava Bocanegra](https://www.cavabocanegra.com/), on state highway 200, offers visits to its underground cellar every hour until four. All of this is in the [wineries and cheese guide](/en/guides/wineries-and-cheese).',
        ],
        places: ['Freixenet México', 'Viñedos Azteca'],
        photo: PHOTOS.vinedosDeCote,
        photoAlt: 'Vineyards and olive trees near Tequisquiapan',
      },
      {
        id: 'cuando',
        title: 'When to go',
        paragraphs: [
          'Any weekend works, but some change the mood. In May and June, the Festival Internacional del Arte, Queso y Vino (International Art, Cheese and Wine Festival) fills Parque La Pila and the plaza, with free admission. July to September is harvest season. In late October and November, Tejedores de Luz fills the town with wicker figures for Day of the Dead, and December brings the Villa Navideña and the Fiesta en el Aire, with balloons.',
          'Those dates are also when hotels fill up: book early. The [events calendar](/en/events) and the [travel tips](/en/travel-tips) cover the rest.',
        ],
      },
    ],
    sources: [
      { label: 'tequis.travel: What to do in Tequisquiapan', url: TT('que_hacer_tequisquiapan') },
      { label: 'tequis.travel: Historic sites', url: TT('historicos_tequisquiapan') },
      { label: 'tequis.travel: Markets', url: TT('mercados_tequisquiapan') },
      { label: 'tequis.travel: Must-sees (tourist trolley)', url: TT('imperdibles_tequisquiapan') },
      { label: 'tequis.travel: Festivals and events', url: TT('fiestas_y_eventos_tequisquiapan') },
      { label: 'tequis.travel: Travel tips', url: TT('tips_de_viaje_tequisquiapan') },
      { label: 'Vuela en Globo: frequently asked questions', url: 'https://vuelaenglobo.com/preguntas-frecuentes/' },
      { label: 'Vuela en Globo: history', url: 'https://vuelaenglobo.com/historia/' },
      { label: "K'puchinos", url: 'https://kpuchinos.com.mx' },
      { label: 'Sala Vivé (Freixenet México)', url: 'https://salavive.mx' },
      { label: 'Cava de Quesos Bocanegra', url: 'https://www.cavabocanegra.com/' },
    ],
  },
  {
    slug: 'wineries-and-cheese',
    title: 'Wineries and cheesemakers near Tequis',
    heroTitle: 'Wineries and cheese',
    lead: 'Underground cellars, tours with tastings and the harvest season.',
    description:
      'Visiting the wineries and cheesemakers near Tequisquiapan: Freixenet, Viñedos Azteca, De Cote, Los Rosales, Cava Bocanegra and Finca VAI. Tours, bookings, harvests.',
    searchSubtitle: 'The Art, Cheese and Wine Route',
    photo: PHOTOS.vinedosDeCote,
    photoAlt: 'Olive trees and vineyards at De Cote, near Tequisquiapan',
    updated: 'November 2026',
    updatedISO: '2026-11-02',
    intro: [
      'Tequis is a stop on Querétaro’s Ruta Arte, Queso y Vino (Art, Cheese and Wine Route). The best-known vineyards are not in town but in Ezequiel Montes, half an hour away, on the highway that continues to the Peña de Bernal. The cheesemakers are closer, some just a few minutes from the center.',
    ],
    sections: [
      {
        id: 'como-funciona',
        title: 'How a visit works',
        paragraphs: [
          'Almost every estate offers a guided tour of the vineyard and the winery that ends with a tasting. The big ones sell timed tickets online, and they sell out on weekends; special experiences, such as pairings or private cellars, always need a reservation.',
          'In 2026, tours cost roughly 250 to 750 pesos per person, depending on how many wines are included. Entering the vineyard or sitting down to eat is usually free. Minors are not served alcohol, but several wineries have a kids’ rate or a kids’ activity.',
        ],
        tip: 'If nobody wants to drive back, local wine tourism agencies run tours with transportation from Tequis.',
      },
      {
        id: 'freixenet',
        title: 'Freixenet: the cellar 25 meters down',
        paragraphs: [
          'Freixenet came to Querétaro in 1979, planted its vineyards in 1982 and released its first sparkling wine, Sala Vivé, in 1984. Today it describes itself as the largest sparkling wine producer in Mexico.',
          'What sets the visit apart is the descent into the cellar, 25 meters below ground, where the temperature stays at 18 °C or below: bring a sweater even if it’s hot outside. The tour lasts about 45 minutes with a tasting; on weekends it leaves every hour between 11 a.m. and 5 p.m. There is a kids’ rate and free parking.',
        ],
        places: ['Freixenet México'],
        photo: PHOTOS.cata,
        photoAlt: 'A cheese and wine tasting',
      },
      {
        id: 'azteca',
        title: 'Viñedos Azteca',
        paragraphs: [
          'Across the highway from Freixenet, Viñedos Azteca has the feel of a Mexican hacienda, with gardens and lakes. Besides wine it makes vermouth, with its own tour.',
          'Tours run from one hour to almost two, with one to five glasses. The vineyard is open all week, but the winery can only be visited on Saturday and Sunday. For kids there is a bottle-painting workshop that doesn’t require a reservation.',
        ],
        places: ['Viñedos Azteca'],
      },
      {
        id: 'otros-vinedos',
        title: 'De Cote, Los Rosales and others',
        paragraphs: [
          '[De Cote](https://decote.mx), also in Ezequiel Montes, covers more than 50 hectares and tours the vineyard on foot, by bike or by train, every day from 11 a.m. to 5 p.m.',
          'Los Rosales is the closest to town, about ten minutes away. It has had a vineyard for more than forty years but has made its own wine only since 2011; its oldest vine came from Bordeaux. It doesn’t publish opening hours: call before you go.',
          'Viñedos La Redonda, one of the oldest in the region (1975) and known for its harvest festival with grape stomping, suspended operations in late 2025 because of a legal dispute. Before going, check whether it has reopened.',
        ],
        places: ['Bodegas De Cote', 'Los Rosales Viñedos'],
      },
      {
        id: 'queserias',
        title: 'Cheesemakers',
        paragraphs: [
          'The [Cava de Quesos Bocanegra](https://www.cavabocanegra.com/), on state highway 200, was the first cheese cellar in Tequis. It ages the European-recipe cheeses of the Néole brand. The visit lasts 40 minutes, leaves every hour from 10 a.m. to 4 p.m. and can be done with wine, beer or no drink; children under five are free.',
          '[Finca VAI](https://www.quesosvai.com/) is half an hour away, at kilometer 30 of the toll-free highway to Querétaro (already in the municipality of Colón). It is a family ranch: you see the cows, goats and sheep, the factory and the aging cellar, and there is a tasting at the end. Small groups don’t need to book.',
          'Without leaving the center, Quesos Quiroz has sold cheese on Andador Morelos since 1972.',
        ],
        places: ['Cava de Quesos Bocanegra', 'Finca VAI'],
        photo: PHOTOS.feriaQuesoVino,
        photoAlt: 'Stalls at the Cheese and Wine Fair',
      },
      {
        id: 'temporada',
        title: 'Harvests and the festival',
        paragraphs: [
          'The vendimia, the harvest festival, runs from July to September: each vineyard sets its own date, with grape stomping, music and food, and almost always a separate ticket. In 2026 the calendar ran from early June to mid-September and closed with the Festival del Vino Queretano in October, in Tequis.',
          'In May and June, the [Festival Internacional del Arte, Queso y Vino](/en/events) brings wineries and cheesemakers together in town, with free admission. It is the easiest way to try many of them in a single afternoon.',
        ],
      },
    ],
    sources: [
      { label: 'tequis.travel: Wines', url: TT('vinedos_tequisquiapan') },
      { label: 'tequis.travel: Cheeses', url: TT('quesos_tequisquiapan') },
      { label: 'Sala Vivé: history', url: 'https://salavive.mx/inicio-2/nuestra-historia/' },
      { label: 'Sala Vivé: visits and frequently asked questions', url: 'https://salavive.mx/inicio-2/preguntas-frecuentes/' },
      { label: 'Viñedos Azteca: 2026 tours (PDF)', url: 'https://vinedosazteca.com/kowine/wp-content/uploads/2026/05/RECORRIDOS-2026.pdf' },
      { label: 'De Cote', url: 'https://decote.mx' },
      { label: 'queretaro.travel: Los Rosales', url: 'https://queretaro.travel/fichas/los-rosales-tx/' },
      { label: 'Uno TV: Los Rosales (June 2024)', url: 'https://www.unotv.com/turismo/que-vinedos-visitar-en-queretaro-los-rosales/' },
      { label: 'El Financiero: La Redonda (February 2026)', url: 'https://www.elfinanciero.com.mx/food-and-drink/2026/02/12/la-historia-de-la-redonda-vinedo-cateado-en-queretaro/' },
      { label: 'Cava de Quesos Bocanegra: experiences', url: 'https://www.cavabocanegra.com/experiencias' },
      { label: 'Finca VAI: cheese tour', url: 'https://www.quesosvai.com/tourvai.html' },
      { label: 'El Universal Querétaro: 2026 harvest festivals', url: 'https://www.eluniversalqueretaro.mx/municipios/vendimias-2026-conoce-el-calendario-de-eventos-en-los-vinedos-de-queretaro/' },
    ],
  },
  {
    slug: 'with-kids',
    title: 'Tequis with kids',
    heroTitle: 'Tequis with kids',
    lead: 'Balloons, farms, hot-spring pools and a town you can walk.',
    description:
      'Tequisquiapan with kids: minimum age for balloon flights, farms and cheesemakers with animals, hot-spring pools, workshops, a miniatures museum and festivals.',
    searchSubtitle: 'Plans for a family trip',
    photo: PHOTOS.plazaLetras,
    photoAlt: 'The colorful letters in the Tequisquiapan plaza',
    updated: 'November 2026',
    updatedISO: '2026-11-02',
    intro: [
      'Tequis works well with kids because almost everything is close: the center is walkable, the hot-spring pools are less than twenty minutes away, and several farms and cheesemakers show where the food comes from.',
    ],
    sections: [
      {
        id: 'globo',
        title: 'Balloon flights with kids',
        paragraphs: [
          'The town’s operator accepts children from age 4, although it recommends waiting until 6. Children under 12 fly with an adult, and there is a special rate up to age 9. Some resellers ask for a minimum age of 5: confirm when you book.',
          'Think about the time: the meeting is before dawn and the flight can be canceled because of wind. With small children, it is sometimes better to watch the balloons from the ground, especially in December, during the Fiesta en el Aire.',
        ],
        places: ['Globos Aerostáticos Tequisquiapan'],
        photo: PHOTOS.globos,
        photoAlt: 'Hot-air balloons in Querétaro',
      },
      {
        id: 'granjas',
        title: 'Farms, cheese and lavender',
        paragraphs: [
          'At [Finca VAI](https://www.quesosvai.com/) you meet the cows, goats and sheep that give the milk, see the factory and taste the cheese at the end; children under 4 are free.',
          'Closer to town, Ranchito TX, on the highway to Querétaro, lets you feed the farm animals, and [Granja Lavyn](https://www.lavyn.mx) has guided visits to its lavender field, workshops and picnics.',
        ],
      },
      {
        id: 'pueblo',
        title: 'In town',
        paragraphs: [
          'The tourist trolley tours the town in an hour to an hour and a half, Friday to Sunday. On 5 de Mayo street, the Museo ¡México me encanta! tells the story of Mexican festivals with more than 500 miniature figures.',
          'For something hands-on, Hecho en Babu runs glass workshops for all ages (by reservation only). And in [Plaza Miguel Hidalgo](/en/place/plaza-miguel-hidalgo) there are always nieves and sweets from the stalls under the arcades.',
        ],
        places: ['Plaza Miguel Hidalgo'],
      },
      {
        id: 'balnearios',
        title: 'Hot-spring pools',
        paragraphs: [
          'Tequis became a destination because of its hot springs, and there are still several balnearios (hot-spring pool parks) less than twenty minutes from town. Termas del Rey is a water park with thirteen pools and a kids’ area; El Oasis, on the highway to Ezequiel Montes, has thermal pools at 36 °C; and La Vega, in the Barrio de la Magdalena, is right in town.',
          'Outside summer, almost all of them open only Friday to Sunday, and none of the three publishes its hours on its own website: call before you go.',
        ],
        photo: PHOTOS.alberca,
        photoAlt: 'A hotel pool in Tequisquiapan',
      },
      {
        id: 'vinedos',
        title: 'At the wineries, too',
        paragraphs: [
          'Taking kids to a winery makes sense: Viñedos Azteca has a bottle-painting workshop, Freixenet has a kids’ rate with a souvenir included, and at the Cava Bocanegra children under five are free. They are not served wine, of course. More in the [wineries and cheese guide](/en/guides/wineries-and-cheese).',
        ],
        places: ['Viñedos Azteca', 'Freixenet México'],
      },
      {
        id: 'fechas',
        title: 'Dates for a family trip',
        paragraphs: [
          'The Festival del Arte, Queso y Vino in May and June is free and has a play area for kids. In December, the Villa Navideña fills the town with wicker figures and family shows. The dates are in the [calendar](/en/events).',
        ],
      },
    ],
    sources: [
      { label: 'Vuela en Globo: terms and conditions (minimum age)', url: 'https://vuelaenglobo.com/terminos-y-condiciones/' },
      { label: 'Finca VAI: cheese tour', url: 'https://www.quesosvai.com/tourvai.html' },
      { label: 'tequis.travel: Must-sees (farms, museum, workshops, trolley)', url: TT('imperdibles_tequisquiapan') },
      { label: 'tequis.travel: Festivals and events', url: TT('fiestas_y_eventos_tequisquiapan') },
      { label: 'Granja Lavyn', url: 'https://www.lavyn.mx' },
      { label: 'Luz Noticias: Termas del Rey (July 2026)', url: 'https://www.luznoticias.mx/2026-07-27/mexico/este-balneario-cuenta-con-13-albercas-y-cuesta-solo-200-pesos-la-entrada-donde-esta/298594' },
      { label: 'adn40: El Oasis (October 2026)', url: 'https://www.adn40.mx/tiempo-libre/2026-10-18/las-aguas-termales-a-36-grados-en-queretaro-que-siguen-abiertas-en-otono-cuanto-cuesta-entrar-a-40-minutos-de-la-capital/' },
      { label: 'adn40: Balneario La Vega (August 2026)', url: 'https://www.adn40.mx/mexico/2026-08-25/que-hacer-el-dia-del-abuelo-2026-el-balneario-de-tequisquiapan-queretaro-abre-los-7-dias-de-la-semana-y-es-ideal-para-ir-con-toda-la-familia/' },
      { label: 'Viñedos Azteca: 2026 tours (PDF)', url: 'https://vinedosazteca.com/kowine/wp-content/uploads/2026/05/RECORRIDOS-2026.pdf' },
    ],
  },
  {
    slug: 'pena-de-bernal',
    title: 'Peña de Bernal from Tequis',
    heroTitle: 'Peña de Bernal',
    lead: 'About 40 minutes away: how to climb it, when to go and what to eat below.',
    description:
      'Getting to the Peña de Bernal from Tequisquiapan: distance, transportation, how high you can climb without gear, the best time, Bernal town and its gorditas.',
    searchSubtitle: 'A day trip from Tequis',
    photo: PHOTOS.penaBernal,
    photoAlt: 'The Peña de Bernal',
    updated: 'November 2026',
    updatedISO: '2026-11-02',
    intro: [
      'The Peña de Bernal is one of the largest monoliths in the world: some 350 meters of rock above the town of the same name, also a Pueblo Mágico. Since 2009, the places of memory of the Otomí-Chichimeca people of Tolimán, which include the Peña, have been on UNESCO’s list of Intangible Cultural Heritage. From Tequis it is the obvious half-day trip.',
    ],
    sections: [
      {
        id: 'como-llegar',
        title: 'Getting there',
        paragraphs: [
          'By car it takes about 40 minutes: highway 120 to Ezequiel Montes and from there to Bernal, which belongs to that municipality. The big wineries are on the way, so you can come back via Freixenet or Viñedos Azteca (they are in the [wineries guide](/en/guides/wineries-and-cheese)).',
          'There is no direct bus from Tequis: you would have to go to Ezequiel Montes and take local transportation from there. The practical options are to drive or join a tour.',
        ],
      },
      {
        id: 'subir',
        title: 'Climbing the Peña',
        paragraphs: [
          'Without gear, a trail goes up to the cross, halfway up the rock. It takes between 45 minutes and an hour and a quarter, depending on your fitness; wear shoes with good grip. Above that it is rock climbing, with gear and a certified guide.',
          'The trail was closed for almost a year because of the risk of rockslides and reopened in March 2026, with a weekly visitor limit. Access has gone from a token fee to free; it is open during daylight hours. Check before you go, because this has changed several times.',
        ],
        tip: 'Start between 7:30 and 8:30 a.m. and come down before 11: from March to May the sun is strong from mid-morning, and from June to September storms roll in during the afternoon. Bring at least a liter of water per person, a cap and sunscreen.',
        photo: PHOTOS.penaBernalNoche,
        photoAlt: 'The Peña de Bernal at night',
      },
      {
        id: 'equinoccio',
        title: 'The equinox',
        paragraphs: [
          'From March 19 to 21, thousands of people climb up to welcome spring. If you go on those dates, start before six or avoid the busiest days. In May, the Santa Cruz festival also goes up to the summit.',
        ],
      },
      {
        id: 'pueblo',
        title: 'The town of Bernal',
        paragraphs: [
          'Down in the town of Bernal are the church of San Sebastián Mártir (early 18th century), El Castillo, from the 17th century and with a German clock, the Capilla de las Ánimas and the Museo de la Máscara (Mask Museum).',
          'What people buy here are wool textiles woven on looms more than a hundred years old: rebozos, rugs, cushions and jackets.',
        ],
      },
      {
        id: 'gorditas',
        title: 'Gorditas de maíz quebrado',
        paragraphs: [
          'They are Bernal’s signature food. The corn dough is not ground fine on the metate, and that’s why the gorditas come out crunchy on the outside and soft inside. They are split open, filled and fried. The classic fillings are cheese, queso enchilado or chicharrón crumbs, always with molcajete salsa.',
          'The food market on Benito Juárez street, near the highway, is open every day.',
        ],
      },
      {
        id: 'desde-tequis',
        title: 'The Peña seen from Tequis',
        paragraphs: [
          'On clear days you can see the Peña in the distance from Tequis. The old train station on the outskirts of town is called Estación Bernal precisely because of that view, although the building is run-down today.',
        ],
      },
    ],
    sources: [
      { label: 'Wikipedia: Peña de Bernal', url: 'https://es.wikipedia.org/wiki/Pe%C3%B1a_de_Bernal' },
      { label: 'Wikipedia: San Sebastián Bernal', url: 'https://es.wikipedia.org/wiki/San_Sebasti%C3%A1n_Bernal' },
      { label: 'Alternativo: climbing the Peña and the best times (May 2026)', url: 'https://alternativo.mx/pena-bernal-queretaro-subida-monolito-mejores-horarios/' },
      { label: 'N+: trail to the summit reopens (March 2026)', url: 'https://www.nmas.com.mx/queretaro/reabren-sendero-a-la-cima-de-la-pena-de-bernal-para-el-equinoccio-tras-un-ano-cerrado/' },
      { label: 'Quadratín: visitor limit (January 2026)', url: 'https://queretaro.quadratin.com.mx/solo-podran-subir-16-mil-personas-a-la-pena-de-bernal/' },
      { label: 'Food & Pleasure: gorditas de maíz quebrado (July 2026)', url: 'https://foodandpleasure.com/gorditas-maiz-quebrado/' },
      { label: 'tequis.travel: Historic sites (Estación Bernal)', url: TT('historicos_tequisquiapan') },
      { label: 'Gaceta Parlamentaria: Estación Bernal (October 2026)', url: 'https://gaceta.diputados.gob.mx/Gaceta/66/2026/oct/20261028-III-1.html' },
    ],
  },
];

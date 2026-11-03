import { PHOTOS, type Photo } from './photos';

// Guías editoriales (/guias). El texto se escribió a partir de una investigación con fuentes
// (noviembre 2026), que se citan al final de cada guía. Reglas:
// - Solo se recomiendan por nombre lugares con información confirmada (content_verified) o
//   fuentes oficiales; `places` debe usar el nombre exacto que tiene en el panel.
// - Precios y horarios cambian: se redactan sin cifra exacta o con el año de la fuente.
// - Los párrafos aceptan links con la forma [texto](/ruta).

export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  /** Nombres exactos de lugares del panel; se muestran como renglones con su ficha. */
  places?: string[];
  tip?: string;
  photo?: Photo;
  photoAlt?: string;
};

export type Guide = {
  slug: string;
  title: string;
  /** Título corto para la portada de la guía (dos renglones como máximo). */
  heroTitle: string;
  lead: string;
  description: string;
  searchSubtitle: string;
  photo: Photo;
  photoAlt: string;
  updated: string;
  updatedISO: string;
  intro: string[];
  sections: GuideSection[];
  sources: { label: string; url: string }[];
};

const TT = (page: string) => `https://tequis.travel/${page}/`;

export const GUIDES: Guide[] = [
  {
    slug: 'fin-de-semana',
    title: 'Un fin de semana en Tequis',
    heroTitle: 'Un fin de semana en Tequis',
    lead: 'Sábado en el pueblo, domingo en el aire y entre viñedos.',
    description:
      'Itinerario de dos días en Tequisquiapan: mercados, plaza y parroquia el sábado; globo al amanecer, queso y vino el domingo. Con horarios y consejos.',
    searchSubtitle: 'Itinerario de sábado y domingo',
    photo: PHOTOS.quiosco,
    photoAlt: 'El quiosco de la Plaza Miguel Hidalgo',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-02',
    intro: [
      'Tequis se recorre a pie y cabe en dos días. Conviene llegar el viernes en la noche o el sábado temprano y quedarse dos noches: así el sábado es para el pueblo y el domingo para el globo y los viñedos, que quedan de camino a la Peña de Bernal.',
      'Por la noche refresca casi todo el año, incluso cuando el día es caluroso: lleva algo para abrigarte.',
    ],
    sections: [
      {
        id: 'sabado-manana',
        title: 'Sábado por la mañana',
        paragraphs: [
          'Desayuna en el Mercado Guadalupano, en la calle Ezequiel Montes: fruta, antojitos y comida de la región desde las nueve. De ahí se camina a la [Plaza Miguel Hidalgo](/lugar/plaza-miguel-hidalgo), con sus portales de cantera, el quiosco y los sabinos.',
          'La parroquia de Santa María de la Asunción preside la plaza. Es de cantera, se construyó por etapas entre los siglos XVI y XIX y su reloj es de 1897. A unas calles, en Niños Héroes 17, el péndulo recuerda el decreto de 1916 que hizo de Tequis el centro geográfico del país.',
          'Baja después hacia La Pila, el depósito de agua del pueblo desde 1567, y al Callejón del Piojo, donde estaban los lavaderos públicos.',
        ],
        places: ['Plaza Miguel Hidalgo', 'Templo de Santa María de la Asunción', 'La Pila'],
        photo: PHOTOS.callejonPiojo,
        photoAlt: 'El Callejón del Piojo',
      },
      {
        id: 'sabado-tarde',
        title: 'Sábado por la tarde',
        paragraphs: [
          'Es la hora de la cestería. El Telésforo Trejo, cerca de la plaza, tiene más de 60 locales en dos pisos: vara de sauz, raíz de sabino, ópalo y textiles de Bernal. El Tequesquicalli, en Independencia, es el mercado de artesanías más antiguo. Y el Parador Artesanal, junto a la terminal de autobuses, solo abre sábados, domingos y festivos.',
          'Para comer en el centro, comida queretana: ayocotadas, enmoladas y mole de olla. Si no quieres caminar más, el tranvía turístico hace un recorrido de una hora a hora y media por el pueblo; sale de viernes a domingo entre las 11 y las 17 h.',
        ],
        places: ["K'puchinos Restaurant"],
        tip: 'Lleva efectivo para los mercados y, si vas a comprar queso el domingo, una hielera en el auto.',
        photo: PHOTOS.mercadoTequesquicalli,
        photoAlt: 'Mercado de Artesanías Tequesquicalli',
      },
      {
        id: 'sabado-noche',
        title: 'Sábado por la noche',
        paragraphs: [
          'Los sábados hay algo en la plaza después de cenar. Las Noches de Leyendas recorren las calles con actores que cuentan historias del pueblo; salen de un costado de la parroquia. El primer sábado de cada mes hay callejoneada con estudiantina, y algunas noches se proyecta un video mapping en la fachada de la parroquia.',
          'Si vas a volar en globo al día siguiente, cena temprano: el despertador suena de madrugada.',
        ],
        photo: PHOTOS.parroquiaNoche,
        photoAlt: 'La parroquia iluminada de noche',
      },
      {
        id: 'domingo-globo',
        title: 'Domingo al amanecer',
        paragraphs: [
          'Los globos despegan con la primera luz, que es cuando el aire está más quieto. El vuelo dura entre 45 minutos y una hora, y la experiencia completa, unas dos horas y media. La hora exacta de la cita la da el operador; cuenta con levantarte alrededor de las cuatro.',
          'El piloto cancela si hay viento, lluvia o neblina, y en ese caso el vuelo se reprograma. Por eso conviene dejarlo para el domingo y no para el último momento del viaje.',
          'Un dato del pueblo: Tequis tiene su propia fábrica de globos, que funciona desde 1982 y se presenta como la única de México certificada por la autoridad de aviación.',
        ],
        places: ['Globos Aerostáticos Tequisquiapan'],
        photo: PHOTOS.globoValle,
        photoAlt: 'Globo aerostático sobre el valle de Tequisquiapan',
      },
      {
        id: 'domingo-vino',
        title: 'Domingo: queso y vino',
        paragraphs: [
          'Después del globo, toma la carretera a Ezequiel Montes. Ahí, a media hora del centro, están las bodegas grandes: Freixenet, con su cava a 25 metros bajo tierra, y Viñedos Azteca, justo enfrente, cuya bodega solo se visita en fin de semana. Los recorridos salen cada hora y en fin de semana se agotan: compra el boleto antes.',
          'Para el queso, la [Cava Bocanegra](https://www.cavabocanegra.com/), sobre la carretera estatal 200, tiene visitas a su cava subterránea cada hora hasta las cuatro. Todo esto está en la [guía de viñedos y queserías](/guias/vinedos-y-quesos).',
        ],
        places: ['Freixenet México', 'Viñedos Azteca'],
        photo: PHOTOS.vinedosDeCote,
        photoAlt: 'Viñedos y olivos cerca de Tequisquiapan',
      },
      {
        id: 'cuando',
        title: 'Cuándo ir',
        paragraphs: [
          'Cualquier fin de semana funciona, pero algunos cambian el ambiente. En mayo y junio, el Festival Internacional del Arte, Queso y Vino llena el Parque La Pila y la plaza, con entrada libre. De julio a septiembre son las vendimias. A fin de octubre y en noviembre, Tejedores de Luz llena el pueblo de figuras de mimbre por Día de Muertos, y en diciembre llegan la Villa Navideña y la Fiesta en el Aire, con globos.',
          'Esas fechas son también las de los hoteles llenos: reserva con tiempo. El [calendario de eventos](/eventos) y la [guía práctica](/guia-practica) tienen lo demás.',
        ],
      },
    ],
    sources: [
      { label: 'tequis.travel: Qué hacer en Tequisquiapan', url: TT('que_hacer_tequisquiapan') },
      { label: 'tequis.travel: Sitios históricos', url: TT('historicos_tequisquiapan') },
      { label: 'tequis.travel: Mercados', url: TT('mercados_tequisquiapan') },
      { label: 'tequis.travel: Imperdibles (tranvía turístico)', url: TT('imperdibles_tequisquiapan') },
      { label: 'tequis.travel: Fiestas y eventos', url: TT('fiestas_y_eventos_tequisquiapan') },
      { label: 'tequis.travel: Tips de viaje', url: TT('tips_de_viaje_tequisquiapan') },
      { label: 'Vuela en Globo: preguntas frecuentes', url: 'https://vuelaenglobo.com/preguntas-frecuentes/' },
      { label: 'Vuela en Globo: historia', url: 'https://vuelaenglobo.com/historia/' },
      { label: "K'puchinos", url: 'https://kpuchinos.com.mx' },
      { label: 'Sala Vivé (Freixenet México)', url: 'https://salavive.mx' },
      { label: 'Cava de Quesos Bocanegra', url: 'https://www.cavabocanegra.com/' },
    ],
  },
  {
    slug: 'vinedos-y-quesos',
    title: 'Viñedos y queserías cerca de Tequis',
    heroTitle: 'Viñedos y queserías',
    lead: 'Cavas bajo tierra, recorridos con cata y la temporada de vendimia.',
    description:
      'Cómo visitar los viñedos y queserías cerca de Tequisquiapan: Freixenet, Viñedos Azteca, De Cote, Los Rosales, Cava Bocanegra y Finca VAI. Recorridos, reservas y vendimias.',
    searchSubtitle: 'Ruta Arte, Queso y Vino',
    photo: PHOTOS.vinedosDeCote,
    photoAlt: 'Olivos y viñedos de De Cote, cerca de Tequisquiapan',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-02',
    intro: [
      'Tequis es parada de la Ruta Arte, Queso y Vino de Querétaro. Los viñedos más conocidos no están en el pueblo sino en Ezequiel Montes, a media hora, sobre la carretera que sigue hacia la Peña de Bernal. Las queserías quedan más cerca, algunas a pocos minutos del centro.',
    ],
    sections: [
      {
        id: 'como-funciona',
        title: 'Cómo funciona una visita',
        paragraphs: [
          'Casi todas las casas ofrecen un recorrido guiado por el viñedo y la bodega que termina en una cata. Las grandes venden boletos en línea por horario, y en fin de semana se agotan; las experiencias especiales, como maridajes o cavas privadas, se reservan siempre.',
          'Los recorridos cuestan, en 2026, entre unos 250 y 750 pesos por persona según cuántos vinos incluyan. Entrar al viñedo o sentarse a comer suele ser libre. A los menores no se les sirve alcohol, pero varias bodegas tienen tarifa o actividad para niños.',
        ],
        tip: 'Si nadie quiere manejar de regreso, hay agencias locales de enoturismo que organizan recorridos con transporte desde Tequis.',
      },
      {
        id: 'freixenet',
        title: 'Freixenet: la cava a 25 metros',
        paragraphs: [
          'Freixenet llegó a Querétaro en 1979, plantó sus viñedos en 1982 y en 1984 sacó su primer espumoso, el Sala Vivé. Hoy se presenta como la bodega de vino espumoso más grande de México.',
          'Lo que distingue la visita es la bajada a la cava, a 25 metros de profundidad, donde la temperatura no pasa de 18 °C: lleva un suéter aunque afuera haga calor. El recorrido dura unos 45 minutos con cata; en fin de semana sale cada hora entre las 11 y las 17 h. Tiene tarifa para niños y estacionamiento gratis.',
        ],
        places: ['Freixenet México'],
        photo: PHOTOS.cata,
        photoAlt: 'Cata de quesos y vino',
      },
      {
        id: 'azteca',
        title: 'Viñedos Azteca',
        paragraphs: [
          'Enfrente de Freixenet, cruzando la carretera, Viñedos Azteca tiene aire de hacienda mexicana, con jardines y lagos. Además de vino hace vermut, con su propio recorrido.',
          'Hay recorridos de una hora a casi dos, con una a cinco copas. Al viñedo se entra toda la semana, pero la bodega solo se visita sábado y domingo. Para los niños hay un taller de pintar botellas que no necesita reserva.',
        ],
        places: ['Viñedos Azteca'],
      },
      {
        id: 'otros-vinedos',
        title: 'De Cote, Los Rosales y otros',
        paragraphs: [
          '[De Cote](https://decote.mx), también en Ezequiel Montes, tiene más de 50 hectáreas y recorre el viñedo a pie, en bicicleta o en tren, todos los días de 11 a 17 h.',
          'Los Rosales es el más cercano al pueblo, a unos diez minutos. Lleva más de cuarenta años con viñedo pero hace vino propio solo desde 2011; su vid más vieja vino de Burdeos. No publica horarios: llama antes de ir.',
          'Viñedos La Redonda, de los más antiguos de la región (1975) y famoso por su vendimia con pisado de uva, suspendió su operación a fines de 2025 por un conflicto legal. Antes de ir, confirma si ya reabrió.',
        ],
        places: ['Los Rosales Viñedos'],
      },
      {
        id: 'queserias',
        title: 'Queserías',
        paragraphs: [
          'La [Cava de Quesos Bocanegra](https://www.cavabocanegra.com/), sobre la carretera estatal 200, fue la primera cava de quesos de Tequis. Ahí maduran los quesos de receta europea de la marca Néole. La visita dura 40 minutos, sale cada hora de 10 a 16 h y se puede hacer con vino, cerveza o sin bebida; los menores de cinco años no pagan.',
          '[Finca VAI](https://www.quesosvai.com/) queda a media hora, en el kilómetro 30 de la carretera libre a Querétaro (ya en el municipio de Colón). Es un rancho familiar: se ven las vacas, cabras y borregas, la fábrica y el sótano de maduración, y al final hay degustación. Los grupos pequeños no necesitan reservar.',
          'Sin salir del centro, Quesos Quiroz vende queso en el Andador Morelos desde 1972, y en los alrededores hay quesos de cabra al estilo francés, como los de [La Biquette](https://labiquette.mx).',
        ],
        photo: PHOTOS.feriaQuesoVino,
        photoAlt: 'Puestos de la Feria del Queso y el Vino',
      },
      {
        id: 'temporada',
        title: 'Vendimias y festival',
        paragraphs: [
          'La vendimia, la fiesta de la cosecha, va de julio a septiembre: cada viñedo pone su fecha, con pisado de uva, música y comida, y casi siempre con boleto aparte. En 2026 el calendario fue de principios de junio a mediados de septiembre, y cerró con el Festival del Vino Queretano en octubre, en Tequis.',
          'En mayo y junio, el [Festival Internacional del Arte, Queso y Vino](/eventos) reúne bodegas y queserías en el pueblo, con entrada libre. Es la forma más fácil de probar muchos en una sola tarde.',
        ],
      },
    ],
    sources: [
      { label: 'tequis.travel: Vinos', url: TT('vinedos_tequisquiapan') },
      { label: 'tequis.travel: Quesos', url: TT('quesos_tequisquiapan') },
      { label: 'Sala Vivé: historia', url: 'https://salavive.mx/inicio-2/nuestra-historia/' },
      { label: 'Sala Vivé: visita y preguntas frecuentes', url: 'https://salavive.mx/inicio-2/preguntas-frecuentes/' },
      { label: 'Viñedos Azteca: recorridos 2026 (PDF)', url: 'https://vinedosazteca.com/kowine/wp-content/uploads/2026/05/RECORRIDOS-2026.pdf' },
      { label: 'De Cote', url: 'https://decote.mx' },
      { label: 'queretaro.travel: Los Rosales', url: 'https://queretaro.travel/fichas/los-rosales-tx/' },
      { label: 'Uno TV: Los Rosales (junio 2024)', url: 'https://www.unotv.com/turismo/que-vinedos-visitar-en-queretaro-los-rosales/' },
      { label: 'El Financiero: La Redonda (febrero 2026)', url: 'https://www.elfinanciero.com.mx/food-and-drink/2026/02/12/la-historia-de-la-redonda-vinedo-cateado-en-queretaro/' },
      { label: 'Cava de Quesos Bocanegra: experiencias', url: 'https://www.cavabocanegra.com/experiencias' },
      { label: 'Finca VAI: recorrido del queso', url: 'https://www.quesosvai.com/tourvai.html' },
      { label: 'El Universal Querétaro: vendimias 2026', url: 'https://www.eluniversalqueretaro.mx/municipios/vendimias-2026-conoce-el-calendario-de-eventos-en-los-vinedos-de-queretaro/' },
    ],
  },
  {
    slug: 'en-familia',
    title: 'Tequis con niños',
    heroTitle: 'Tequis con niños',
    lead: 'Globo, granjas, balnearios termales y un pueblo que se camina.',
    description:
      'Qué hacer en Tequisquiapan con niños: edad mínima para el globo, granjas y queserías con animales, balnearios termales, talleres, museo de miniaturas y fiestas familiares.',
    searchSubtitle: 'Planes para ir en familia',
    photo: PHOTOS.plazaLetras,
    photoAlt: 'Las letras de colores en la plaza de Tequisquiapan',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-02',
    intro: [
      'Tequis funciona bien con niños porque casi todo queda cerca: el centro se camina, los balnearios están a menos de veinte minutos y varias granjas y queserías enseñan de dónde sale lo que se come.',
    ],
    sections: [
      {
        id: 'globo',
        title: 'Volar en globo con niños',
        paragraphs: [
          'El operador del pueblo acepta niños a partir de los 4 años, aunque recomienda esperar a los 6. Los menores de 12 vuelan con un adulto y hasta los 9 años hay tarifa especial. Algunos revendedores piden 5 años como mínimo: confírmalo al reservar.',
          'Piensa en la hora: la cita es de madrugada y el vuelo puede cancelarse por viento. Con niños chicos, a veces es mejor ver los globos desde tierra, sobre todo en diciembre, durante la Fiesta en el Aire.',
        ],
        places: ['Globos Aerostáticos Tequisquiapan'],
        photo: PHOTOS.globos,
        photoAlt: 'Globos aerostáticos en Querétaro',
      },
      {
        id: 'granjas',
        title: 'Granjas, quesos y lavanda',
        paragraphs: [
          'En [Finca VAI](https://www.quesosvai.com/) se conocen las vacas, cabras y borregas que dan la leche, se ve la fábrica y se prueba el queso al final; los menores de 4 años no pagan.',
          'Más cerca del pueblo, el Ranchito TX, sobre la carretera a Querétaro, deja alimentar a los animales de granja, y [Granja Lavyn](https://www.lavyn.mx) tiene visitas guiadas por su campo de lavanda, talleres y picnic.',
        ],
      },
      {
        id: 'pueblo',
        title: 'En el pueblo',
        paragraphs: [
          'El tranvía turístico recorre el pueblo en una hora u hora y media, de viernes a domingo. En la calle 5 de Mayo, el Museo ¡México me encanta! cuenta las fiestas mexicanas con más de 500 personajes en miniatura.',
          'Para hacer algo con las manos, Hecho en Babu da talleres de vidrio para todas las edades (solo con reserva). Y en la [Plaza Miguel Hidalgo](/lugar/plaza-miguel-hidalgo) siempre hay nieves y dulces de los puestos de los portales.',
        ],
        places: ['Plaza Miguel Hidalgo'],
      },
      {
        id: 'balnearios',
        title: 'Balnearios termales',
        paragraphs: [
          'Tequis se hizo destino por sus aguas termales, y alrededor del pueblo sigue habiendo varios balnearios a menos de veinte minutos. Termas del Rey es un parque acuático con trece albercas y área infantil; El Oasis, en la carretera a Ezequiel Montes, tiene albercas termales a 36 °C; y La Vega, en el Barrio de la Magdalena, está en el mismo pueblo.',
          'Fuera del verano casi todos abren solo de viernes a domingo, y ninguno de los tres publica sus horarios en un sitio propio: llama antes de ir.',
        ],
        photo: PHOTOS.alberca,
        photoAlt: 'Alberca de un hotel en Tequisquiapan',
      },
      {
        id: 'vinedos',
        title: 'También en los viñedos',
        paragraphs: [
          'Ir a un viñedo con niños tiene sentido: en Viñedos Azteca hay un taller para pintar botellas, Freixenet tiene tarifa infantil con recuerdo incluido y en la Cava Bocanegra los menores de cinco años no pagan. A ellos, claro, no se les sirve vino. Más en la [guía de viñedos y queserías](/guias/vinedos-y-quesos).',
        ],
        places: ['Viñedos Azteca', 'Freixenet México'],
      },
      {
        id: 'fechas',
        title: 'Fechas para ir en familia',
        paragraphs: [
          'El Festival del Arte, Queso y Vino de mayo y junio es gratuito y tiene ludoteca. En diciembre, la Villa Navideña llena el pueblo de figuras de mimbre y espectáculos familiares. Las fechas están en el [calendario](/eventos).',
        ],
      },
    ],
    sources: [
      { label: 'Vuela en Globo: términos y condiciones (edad mínima)', url: 'https://vuelaenglobo.com/terminos-y-condiciones/' },
      { label: 'Finca VAI: recorrido del queso', url: 'https://www.quesosvai.com/tourvai.html' },
      { label: 'tequis.travel: Imperdibles (granjas, museo, talleres, tranvía)', url: TT('imperdibles_tequisquiapan') },
      { label: 'tequis.travel: Fiestas y eventos', url: TT('fiestas_y_eventos_tequisquiapan') },
      { label: 'Granja Lavyn', url: 'https://www.lavyn.mx' },
      { label: 'Luz Noticias: Termas del Rey (julio 2026)', url: 'https://www.luznoticias.mx/2026-07-27/mexico/este-balneario-cuenta-con-13-albercas-y-cuesta-solo-200-pesos-la-entrada-donde-esta/298594' },
      { label: 'adn40: El Oasis (octubre 2026)', url: 'https://www.adn40.mx/tiempo-libre/2026-10-18/las-aguas-termales-a-36-grados-en-queretaro-que-siguen-abiertas-en-otono-cuanto-cuesta-entrar-a-40-minutos-de-la-capital/' },
      { label: 'adn40: Balneario La Vega (agosto 2026)', url: 'https://www.adn40.mx/mexico/2026-08-25/que-hacer-el-dia-del-abuelo-2026-el-balneario-de-tequisquiapan-queretaro-abre-los-7-dias-de-la-semana-y-es-ideal-para-ir-con-toda-la-familia/' },
      { label: 'Viñedos Azteca: recorridos 2026 (PDF)', url: 'https://vinedosazteca.com/kowine/wp-content/uploads/2026/05/RECORRIDOS-2026.pdf' },
    ],
  },
  {
    slug: 'pena-de-bernal',
    title: 'La Peña de Bernal desde Tequis',
    heroTitle: 'La Peña de Bernal',
    lead: 'A unos 40 minutos: cómo subir, a qué hora y qué comer abajo.',
    description:
      'Cómo ir a la Peña de Bernal desde Tequisquiapan: distancia, transporte, hasta dónde se sube sin equipo, la mejor hora, el pueblo de Bernal y las gorditas de maíz quebrado.',
    searchSubtitle: 'Excursión de un día desde Tequis',
    photo: PHOTOS.penaBernal,
    photoAlt: 'La Peña de Bernal',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-02',
    intro: [
      'La Peña de Bernal es uno de los monolitos más grandes del mundo: unos 350 metros de roca sobre el pueblo del mismo nombre, también Pueblo Mágico. Desde 2009, los lugares de memoria de los otomí-chichimecas de Tolimán, que incluyen la Peña, son Patrimonio Cultural Inmaterial de la UNESCO. Desde Tequis es la excursión de medio día más obvia.',
    ],
    sections: [
      {
        id: 'como-llegar',
        title: 'Cómo llegar',
        paragraphs: [
          'En auto son unos 40 minutos: la carretera 120 hasta Ezequiel Montes y de ahí a Bernal, que pertenece a ese municipio. En el camino quedan los viñedos grandes, así que se puede volver por Freixenet o Viñedos Azteca (están en la [guía de viñedos](/guias/vinedos-y-quesos)).',
          'No hay autobús directo desde Tequis: habría que ir a Ezequiel Montes y tomar ahí el transporte local. Lo práctico es ir en auto o con un tour.',
        ],
      },
      {
        id: 'subir',
        title: 'Subir la Peña',
        paragraphs: [
          'Sin equipo se sube por un sendero hasta la cruz, a media peña. Toma entre 45 minutos y hora y cuarto, según la condición de cada quien; usa calzado con buen agarre. Más arriba ya es escalada, con equipo y guía certificado.',
          'El sendero estuvo cerrado casi un año por riesgo de deslaves y reabrió en marzo de 2026, con un límite de visitantes por semana. El acceso ha pasado de una cuota simbólica a ser gratis; el horario es de día. Confírmalo antes, porque ha cambiado varias veces.',
        ],
        tip: 'Sal entre las 7:30 y las 8:30 y baja antes de las 11: de marzo a mayo el sol pega fuerte desde media mañana, y de junio a septiembre las tormentas llegan por la tarde. Lleva al menos un litro de agua por persona, gorra y bloqueador.',
        photo: PHOTOS.penaBernalNoche,
        photoAlt: 'La Peña de Bernal de noche',
      },
      {
        id: 'equinoccio',
        title: 'El equinoccio',
        paragraphs: [
          'Del 19 al 21 de marzo, miles de personas suben a recibir la primavera. Si vas en esas fechas, sal antes de las seis o evita los días centrales. En mayo, la fiesta de la Santa Cruz también sube a la cumbre.',
        ],
      },
      {
        id: 'pueblo',
        title: 'El pueblo de Bernal',
        paragraphs: [
          'Abajo, en el pueblo de Bernal, están el templo de San Sebastián Mártir (de principios del siglo XVIII), El Castillo, del siglo XVII y con reloj alemán, la Capilla de las Ánimas y el Museo de la Máscara.',
          'Lo que se compra son textiles de lana tejidos en telares de más de cien años: rebozos, tapetes, cojines y chamarras.',
        ],
      },
      {
        id: 'gorditas',
        title: 'Gorditas de maíz quebrado',
        paragraphs: [
          'Es lo típico de Bernal. La masa no se muele fina en el metate, y por eso las gorditas quedan crujientes por fuera y suaves por dentro. Se abren, se rellenan y se fríen. Las clásicas son de queso, queso enchilado o migajas de chicharrón, siempre con salsa de molcajete.',
          'El mercado gastronómico de la calle Benito Juárez, cerca de la carretera, abre todos los días.',
        ],
      },
      {
        id: 'desde-tequis',
        title: 'La Peña vista desde Tequis',
        paragraphs: [
          'Desde Tequis la Peña se ve a lo lejos en días despejados. La antigua estación de tren de las afueras del pueblo se llama Estación Bernal justo por esa vista, aunque hoy el edificio está descuidado.',
        ],
      },
    ],
    sources: [
      { label: 'Wikipedia: Peña de Bernal', url: 'https://es.wikipedia.org/wiki/Pe%C3%B1a_de_Bernal' },
      { label: 'Wikipedia: San Sebastián Bernal', url: 'https://es.wikipedia.org/wiki/San_Sebasti%C3%A1n_Bernal' },
      { label: 'Alternativo: subir la Peña y mejores horarios (mayo 2026)', url: 'https://alternativo.mx/pena-bernal-queretaro-subida-monolito-mejores-horarios/' },
      { label: 'N+: reabren el sendero a la cima (marzo 2026)', url: 'https://www.nmas.com.mx/queretaro/reabren-sendero-a-la-cima-de-la-pena-de-bernal-para-el-equinoccio-tras-un-ano-cerrado/' },
      { label: 'Quadratín: límite de visitantes (enero 2026)', url: 'https://queretaro.quadratin.com.mx/solo-podran-subir-16-mil-personas-a-la-pena-de-bernal/' },
      { label: 'Food & Pleasure: gorditas de maíz quebrado (julio 2026)', url: 'https://foodandpleasure.com/gorditas-maiz-quebrado/' },
      { label: 'tequis.travel: Sitios históricos (Estación Bernal)', url: TT('historicos_tequisquiapan') },
      { label: 'Gaceta Parlamentaria: Estación Bernal (octubre 2026)', url: 'https://gaceta.diputados.gob.mx/Gaceta/66/2026/oct/20261028-III-1.html' },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}


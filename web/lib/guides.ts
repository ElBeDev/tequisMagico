import type { Lang } from './i18n';
import { GUIDES_EN } from './i18n/guides-en';
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
        places: ['Plaza Miguel Hidalgo', 'Templo de Santa María de la Asunción', 'Parque La Pila'],
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
        places: ["K'puchinos Restaurant", 'Mercado Artesanal Telésforo Trejo'],
        tip: 'Lleva efectivo para los mercados y, si vas a comprar queso el domingo, una hielera en el auto.',
        photo: PHOTOS.mercadoTequesquicalli,
        photoAlt: 'Mercado de Artesanías Tequesquicalli',
      },
      {
        id: 'sabado-noche',
        title: 'Sábado por la noche',
        paragraphs: [
          'Los sábados hay algo en la plaza después de cenar. Las Noches de Leyendas recorren las calles con actores que cuentan historias del pueblo; salen de un costado de la parroquia.',
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
          'Cualquier fin de semana funciona, pero algunos cambian el ambiente. En mayo y junio, el Festival Internacional del Arte, Queso y Vino llena el Parque La Pila y la plaza, con entrada libre. De julio a septiembre son las vendimias. A fin de octubre y en noviembre, Tejedores de Luz llena el pueblo de figuras de mimbre por Día de Muertos, y de mediados de diciembre al 6 de enero está la [Villa Navideña](/guias/navidad).',
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
    slug: 'en-un-dia',
    title: 'Tequis en un día',
    heroTitle: 'Tequis en un día',
    lead: 'Si vienes y te vas el mismo día, desde la CDMX o desde Querétaro.',
    description:
      'Itinerario de un día en Tequisquiapan desde la CDMX o Querétaro: cómo llegar, desayuno, centro, mercados, comida y una tarde de queso, vino o alberca. Con horarios.',
    searchSubtitle: 'Ida y vuelta desde la CDMX o Querétaro',
    photo: PHOTOS.portales,
    photoAlt: 'Los portales de Tequisquiapan',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-10',
    intro: [
      'Si solo tienes un día, llega temprano y quédate casi todo el tiempo en el centro, que se recorre a pie. Por la tarde, si traes auto, da para una cava de quesos o un viñedo; si no, para una alberca.',
      'El globo y la Peña de Bernal piden más tiempo: el globo despega al amanecer y la Peña queda a unos 40 minutos. Están en la [guía de fin de semana](/guias/fin-de-semana) y en la de la [Peña de Bernal](/guias/pena-de-bernal).',
      'Los horarios de esta guía son los que se publicaban en noviembre de 2026.',
    ],
    sections: [
      {
        id: 'llegar',
        title: 'Cómo llegar',
        paragraphs: [
          'En auto desde la CDMX, toma la autopista México–Querétaro y sal en San Juan del Río hacia Tequis por la carretera 120. Son unos 175 km, dos casetas y de 2 h 30 min a 3 h, según el tráfico.',
          'En autobús, ETN sale de la Central del Norte y tarda unas 3 horas, con varias salidas al día. La terminal de Tequis está junto al Parador Artesanal, a poco más de un kilómetro de la parroquia. Desde la central de Querétaro, Flecha Azul y Flecha Amarilla tardan de una hora a hora y cuarto. Detalles en [cómo llegar](/guia-practica).',
        ],
        tip: 'Antes de planear la tarde, revisa en etn.com.mx a qué hora sale el último autobús de regreso.',
      },
      {
        id: 'manana',
        title: 'Desayuno y centro',
        paragraphs: [
          'Desayuna en el Mercado Guadalupano, que abre a las 9, o en el centro: Rincón Austriaco, pastelería y cafetería desde 1998, abre todos los días a las 8, y La Valentina, en el portal de la plaza, a las 7:30. Hay más en [desayunos](/lugares/gastronomia/desayunos).',
          'Luego, la plaza y la parroquia, el péndulo del Centro Geográfico, La Pila y el Callejón del Piojo: el recorrido está en la [guía de fin de semana](/guias/fin-de-semana). Si te da tiempo, sigue al Barrio de la Magdalena, a su templo, donde se celebró la misa de fundación del pueblo en 1551.',
        ],
        places: ['Mercado Guadalupano Municipal', 'Rincón Austriaco', 'La Valentina', 'Templo de Santa María Magdalena'],
        photo: PHOTOS.pendulo,
        photoAlt: 'El péndulo del Centro Geográfico',
      },
      {
        id: 'media-manana',
        title: 'Museo, mercados y tranvía',
        paragraphs: [
          'El Museo ¡México me encanta!, en 5 de Mayo 11, tiene escenas en miniatura de la vida mexicana que hace su directora, Teresa Cisneros. Para comprar artesanía, el Mercado Artesanal Telésforo Trejo, cerca de la plaza, abre todos los días; el Parador Artesanal, solo en fin de semana y festivos.',
          'Si no quieres caminar, el tranvía turístico recorre el pueblo en una hora u hora y media, de viernes a domingo. MD Turismo y Experiencias tiene además un recorrido a pie de hora y media por el centro histórico, su Free Tour.',
        ],
        places: ['Museo ¡México me encanta!', 'Mercado Artesanal Telésforo Trejo', 'MD Turismo y Experiencias'],
        photo: PHOTOS.artesanias,
        photoAlt: 'Artesanías en Tequisquiapan',
      },
      {
        id: 'comida',
        title: 'Comida',
        paragraphs: [
          "Para comer en el centro: K'puchinos, en Independencia 7, hace comida típica queretana; El Maravillas, de cocina mexicana creativa y con terraza, abre desde la 1 de la tarde de miércoles a domingo, y ORIGENS, de cocina mediterránea, de jueves a domingo. Si vienes en lunes o martes, revisa antes qué está abierto.",
        ],
        places: ["K'puchinos Restaurant", 'El Maravillas', 'ORIGENS'],
        photo: PHOTOS.gastronomia,
        photoAlt: 'Platillos de comida mexicana',
      },
      {
        id: 'tarde',
        title: 'La tarde',
        paragraphs: [
          'Con auto, la tarde da para una cava o un viñedo. La Cava de Quesos Bocanegra, sobre la carretera estatal 200, tiene visitas de 40 minutos cada hora hasta las 4, todos los días. Los viñedos grandes de Ezequiel Montes quedan a media hora; en fin de semana compra el boleto antes. Todo está en la [guía de viñedos y queserías](/guias/vinedos-y-quesos).',
          'Si vienes de Querétaro, la Finca VAI queda a medio camino, en el kilómetro 30 de la carretera libre: el recorrido del queso se hace de 10 a 16 h entre semana y hasta las 17 h en fin de semana.',
          'Sin auto, el Balneario La Vega está en el pueblo y abre todos los días de 8 a 18 h. Los parques acuáticos de la carretera a Ezequiel Montes se alcanzan en camioneta, pero fuera del verano solo abren los fines de semana; están en [balnearios](/lugares/experiencias/balnearios).',
          'Otra tarde posible: las minas de ópalo de La Trinidad, a unos diez minutos. Son privadas y se entra solo con guía, en 4x4.',
        ],
        places: ['Cava de Quesos Bocanegra', 'Finca VAI', 'Balneario La Vega', 'Mina de Ópalos El Redentor'],
      },
      {
        id: 'entre-semana',
        title: 'Si vienes entre semana',
        paragraphs: [
          'Entre semana cierran varias cosas: el tranvía funciona de viernes a domingo, el Parador Artesanal solo sábados, domingos y festivos, ORIGENS abre de jueves a domingo, la bodega de Viñedos Azteca solo se visita sábado y domingo y el restaurante de la Cava Bocanegra cierra los martes.',
          'Abren todos los días la plaza y los templos, los mercados Telésforo Trejo, Tequesquicalli y Guadalupano, el Balneario La Vega y las visitas de la Cava Bocanegra y de la Finca VAI.',
        ],
      },
      {
        id: 'noche',
        title: 'Si te quedas a cenar',
        paragraphs: [
          'La callejoneada de leyendas sale de la plaza los viernes y sábados en la noche, y de jueves a domingo hay restaurantes abiertos hasta tarde: está todo en [Tequis de noche](/guias/de-noche). Si regresas en autobús, revisa antes a qué hora sale el último.',
        ],
      },
    ],
    sources: [
      { label: 'tequis.travel: Tips de viaje', url: TT('tips_de_viaje_tequisquiapan') },
      { label: 'ETN: boletos a Tequisquiapan', url: 'https://etn.com.mx/boletos-autobus/tequisquiapan.html' },
      { label: 'ETN: terminal de Tequisquiapan', url: 'https://etn.com.mx/destinos-y-terminales/terminal-central-tequisquiapan.html' },
      { label: 'SICT: Traza tu ruta', url: 'https://app.sct.gob.mx/sibuac_internet/ControllerUI?action=cmdEscogeRuta' },
      { label: 'queretaro.travel: en autobús por Querétaro', url: 'https://queretaro.travel/lugares/enjoying-queretaro-by-bus/?lang=en' },
      { label: 'adn40: Querétaro–Tequis en autobús (septiembre 2026)', url: 'https://www.adn40.mx/mexico/2026-09-09/el-balneario-de-tequisquiapan-queretaro-con-descuento-inapam-al-que-llegas-en-autobus-por-60-en-septiembre-2026-rutas-y-transporte-publico/' },
      { label: 'tequis.travel: Mercados', url: TT('mercados_tequisquiapan') },
      { label: 'Rincón Austriaco', url: 'https://rinconaustriaco.com.mx/' },
      { label: 'Hotel La Plaza: restaurantes', url: 'https://hotelplazatequis.com/restaurantes-en-tequisquiapan/' },
      { label: 'tequis.travel: Iglesias', url: TT('iglesias_tequisquiapan') },
      { label: 'queretaro.travel: Museo ¡México me encanta!', url: 'https://queretaro.travel/lugares/a-museum-to-fall-in-love-with-mexico/?lang=en' },
      { label: 'tequis.travel: Imperdibles (tranvía turístico)', url: TT('imperdibles_tequisquiapan') },
      { label: 'MD Turismo: Free Tour', url: 'https://www.mdturismoyexperiencias.com/productos/free-tour-tequisquapan-1jdzp/' },
      { label: "K'puchinos", url: 'https://kpuchinos.com.mx' },
      { label: 'tequis.travel: El Maravillas (horario)', url: TT('el_maravillas_tequisquiapan') },
      { label: 'ORIGENS', url: 'https://origens.mx' },
      { label: 'Cava de Quesos Bocanegra: experiencias', url: 'https://www.cavabocanegra.com/experiencias' },
      { label: 'Finca VAI: recorrido del queso', url: 'https://www.quesosvai.com/tourvai.html' },
      { label: 'Balneario La Vega: contacto y horario', url: 'https://balneariolavega.mx/index.php/contactenos' },
      { label: 'Food & Pleasure: minas de ópalo (marzo 2026)', url: 'https://foodandpleasure.com/minas-de-opalo-en-tequisquiapan/' },
      { label: 'Viñedos Azteca: recorridos 2026 (PDF)', url: 'https://vinedosazteca.com/kowine/wp-content/uploads/2026/05/RECORRIDOS-2026.pdf' },
    ],
  },
  {
    slug: 'navidad',
    title: 'Navidad y Año Nuevo en Tequis',
    heroTitle: 'Navidad y Año Nuevo',
    lead: 'La Villa Navideña, el desfile, las posadas y la noche del 31.',
    description:
      'Qué hacer en Tequisquiapan en Navidad y Año Nuevo 2026-27: la Villa Navideña del 13 de diciembre al 6 de enero, el desfile del 18, posadas y Reyes.',
    searchSubtitle: 'Diciembre y enero, temporada 2026-27',
    photo: PHOTOS.parroquiaNoche,
    photoAlt: 'La parroquia de Tequisquiapan iluminada de noche',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-10',
    intro: [
      'En diciembre, la temporada gira alrededor de la Villa Navideña, que organiza el municipio y es gratis. En 2026 va del 13 de diciembre al 6 de enero.',
      'Al 10 de noviembre solo se habían anunciado dos fechas: las de la Villa y la del desfile navideño del 18 de diciembre. Para lo demás va aquí cómo fue en 2025, que sirve de pauta pero no es promesa.',
    ],
    sections: [
      {
        id: 'villa',
        title: 'La Villa Navideña',
        paragraphs: [
          'La [Villa Navideña](/evento/villa-navidena) abre el domingo 13 de diciembre de 2026 y cierra el 6 de enero de 2027. Repite el tema de 2025, los productos mexicanos: venden productores locales y hay un carrusel de dos pisos, también gratis. En 2025 la visitaron 700 mil personas, según el municipio, y en FITUR 2026 la reconocieron como la Mejor Villa Navideña de México 2025.',
          'La sede de 2026 todavía no se anuncia. En 2025 ocupó la Plaza Miguel Hidalgo, la Plaza Santa Cecilia, el Parque La Pila y el Auditorio Municipal. En la plaza principal estaban el carrusel, un mercadito navideño de productores locales y los talleres “Manitas en acción”, y todas las noches había “nevadas”: nieve artificial con proyección, en varias funciones entre las 19:00 y las 22:00.',
        ],
        places: ['Plaza Miguel Hidalgo', 'Parque La Pila'],
        photo: PHOTOS.quiosco,
        photoAlt: 'El quiosco de la Plaza Miguel Hidalgo',
      },
      {
        id: 'encendido',
        title: 'El encendido del árbol',
        paragraphs: [
          'La Villa se inaugura con el encendido de un árbol artesanal en la Plaza Miguel Hidalgo. En 2024 era de cestería: unas 500 piezas tejidas por unas 35 familias de artesanos, y después del encendido hubo pirotecnia.',
          'En 2024 y en 2025 el encendido fue el 14 de diciembre; en 2025, a las 20:00. La fecha de 2026 aún no se publica. Como la Villa abre el domingo 13, lo probable es que sea ese día.',
        ],
        photo: PHOTOS.artesanias,
        photoAlt: 'Artesanías de Tequisquiapan',
      },
      {
        id: 'desfile',
        title: 'El desfile navideño',
        paragraphs: [
          'El viernes 18 de diciembre de 2026, a las 19:00, pasa por Tequis el desfile del Festival Alegría, el festival navideño del estado, que este año va del 28 de noviembre al 6 de enero. Recorre la avenida Juárez hasta la calle Francisco Martínez Elías y es gratis.',
          'Tequis cierra la ronda de desfiles del estado, que empieza el 9 de diciembre en San Juan del Río. Lo que no habrá este año en el pueblo es pista de hielo: el calendario estatal solo las pone en San Juan del Río, del 28 de noviembre al 12 de diciembre, y en Corregidora, del 17 al 31 de diciembre.',
        ],
      },
      {
        id: 'posadas',
        title: 'Las posadas',
        paragraphs: [
          'Del 16 al 23 de diciembre hay [posadas](/evento/posadas-navidenas) en las calles del centro. No aparecen en el programa municipal de 2025: en 2019 las coordinaba un comité ciudadano de voluntarios, y cada noche, a las 19:00, una familia del centro hacía de anfitriona.',
          'En 2024 el municipio hizo además una posada del pueblo, con concierto, el 15 de diciembre en el Parque La Pila.',
        ],
      },
      {
        id: 'conciertos',
        title: 'Conciertos gratis',
        paragraphs: [
          'El resto del programa de 2026 no se ha publicado; en 2025 salió completo el 12 de diciembre. Ese año, todo gratis, hubo conciertos en la Plaza Santa Cecilia y el Parque La Pila del 18 de diciembre al 2 de enero: la Banda de Música del Estado, un festival de rock, un homenaje a José José, Los Guardianes del Amor el 26 de diciembre y Los Yaguarú el 2 de enero.',
          'Hubo también palo encebado en la plaza principal el 20 de diciembre, y una exposición en el Auditorio Municipal del 21 de diciembre al 6 de enero.',
        ],
        photo: PHOTOS.portalesPlaza,
        photoAlt: 'Los portales de la plaza de Tequisquiapan',
      },
      {
        id: 'ano-nuevo',
        title: 'Año Nuevo',
        paragraphs: [
          'El 31 de diciembre de 2025 hubo cuenta regresiva gratis en el centro, desde las 22:00. El programa municipal la puso en la Plaza Santa Cecilia, y Gaceta Queretana, en la Plaza Miguel Hidalgo, con pirotecnia y música en vivo. El programa de 2026 aún no se publica.',
          'Las cenas de Año Nuevo las organizan hoteles y restaurantes por su cuenta, y cambian cada año. Fuera del municipio, la vinícola Donato vende la suya, Año Nuevo Entre Viñedos, el 31 de diciembre de 20:00 a 2:00; en noviembre de 2026, [su web](https://donato.com.mx/producto/ano-nuevo-entre-vinedos-mesa-2-personas-800-pm/) pedía $3,200 por persona.',
        ],
      },
      {
        id: 'reyes',
        title: 'Día de Reyes',
        paragraphs: [
          'El 5 y el 6 de enero de 2026 hubo globos aerostáticos con las cartas a los Reyes en el Parque La Pila, con más de 500 niñas y niños. Lo organizaron la Dirección de Turismo y Vuela en Globo, el operador de globos del pueblo. El programa de diciembre lo había anunciado para el 27 y 28 de diciembre, así que la fecha de 2027 está por confirmar.',
          'Esa temporada hubo también un buzón de los Reyes Magos en la Plaza Miguel Hidalgo, del 20 de diciembre al 5 de enero, y un mago el 6 de enero en la Plaza Santa Cecilia.',
          'De 2022 a 2025 no hubo fiesta de globos en diciembre: la última fue el 18 de diciembre de 2021 en el Parque La Pila, por el aniversario de la llegada de los globos aerostáticos al pueblo.',
        ],
        places: ['Globos Aerostáticos Tequisquiapan'],
        photo: PHOTOS.globoValle,
        photoAlt: 'Globo aerostático sobre el valle de Tequisquiapan',
      },
      {
        id: 'barrios',
        title: 'Fiestas de barrio',
        paragraphs: [
          'Diciembre también es de fiestas patronales en las comunidades. Según el calendario del municipio, la Virgen de Guadalupe se celebra del 10 al 14 de diciembre en La Tortuga, Fuentezuelas, La Laja, Hacienda Grande y Bordo Blanco; el Niño Dios, del 23 al 27 en Santillán, y San Juan Evangelista, el 25 y el 26 en el Barrio de San Juan.',
        ],
        tip: 'Sedes y horarios de 2026 aún no se anuncian: confírmalos en el [calendario de eventos](/eventos) antes de ir. Si vas a principios de enero, revisa también que la Villa siga abierta, porque su fecha de cierre puede cambiar.',
      },
    ],
    sources: [
      { label: 'AlertaQro: vuelve la Villa Navideña (noviembre 2026)', url: 'https://www.alertaqronoticias.com/2026/11/09/volvera-la-villa-navidena-a-tequisquiapan-en-diciembre/' },
      { label: 'AlertaQro: Festival Alegría 2026', url: 'https://www.alertaqronoticias.com/2026/11/04/desfiles-pistas-de-hielo-y-un-pino-monumental-vuelve-el-festival-alegria/' },
      { label: 'Tiempo Libre Querétaro: calendario del Festival Alegría 2026', url: 'https://tiempolibreqro.com/anuncian-el-calendario-del-festival-alegria-2026-desfiles-pistas-de-hielo-y-pino-monumental-en-queretaro/' },
      { label: 'AlertaQro: programa navideño 2025', url: 'https://www.alertaqronoticias.com/2025/12/12/asi-se-vivira-la-navidad-en-tequisquiapan/' },
      { label: 'Amanecer: programa de la Villa Navideña 2025', url: 'https://amanecerqro.com/tequisquiapan-2025-vive-la-villa-navidena-con-eventos-y-cultura/' },
      { label: 'Amanecer: Mejor Villa Navideña 2025 (enero 2026)', url: 'https://amanecerqro.com/tequisquiapan-es-reconocida-como-mejor-villa-navidena-2025/' },
      { label: 'Amanecer: el árbol de los artesanos (diciembre 2024)', url: 'https://amanecerqro.com/tequisquiapan-hace-homenaje-a-sus-artesanos-en-villa-navidena/' },
      { label: 'Al Minuto: encendido y posada del pueblo (diciembre 2024)', url: 'https://www.alminutonoticias.com.mx/tequisquiapan/la-magia-de-la-navidad-llego-a-tequisquiapan-con-el-encendido-del-arbol-artesanal/2024/12/15/' },
      { label: 'tequis.travel: Fiestas y eventos', url: TT('fiestas_y_eventos_tequisquiapan') },
      { label: 'Tiempo Libre Querétaro: posadas (diciembre 2019)', url: 'https://tiempolibreqro.com/disfruta-las-ultimas-posadas-en-tequisquiapan/' },
      { label: 'Al Minuto: Los Guardianes del Amor (diciembre 2025)', url: 'https://www.alminutonoticias.com.mx/tequisquiapan/programan-concierto-gratuito-de-los-guardianes-del-amor-para-este-viernes-en-tequisquiapan/2025/12/25/' },
      { label: 'Gaceta Queretana: Año Nuevo 2025-2026', url: 'https://www.gacetaqueretana.com.mx/2025/12/30/tequisquiapan-se-enciende-para-recibir-el-ano-nuevo-con-fiesta-musica-y-fuegos-artificiales-%F0%9F%8E%86%E2%9C%A8/' },
      { label: 'Donato: Año Nuevo Entre Viñedos', url: 'https://donato.com.mx/producto/ano-nuevo-entre-vinedos-mesa-2-personas-800-pm/' },
      { label: 'Amanecer: cartas a los Reyes en globo (enero 2026)', url: 'https://amanecerqro.com/la-ninez-tequisquiapense-volo-sus-deseos-en-globo-aerostatico/' },
      { label: 'Tiempo Libre Querétaro: aniversario de los globos (diciembre 2021)', url: 'https://tiempolibreqro.com/globos-aerostaticos-surcaran-el-cielo-de-tequisquiapan/' },
      { label: 'Municipio: fiestas patronales comunitarias (PDF)', url: 'https://tequis.travel/wp-content/uploads/2025/10/Principales-fiestas-patronales-comunitarias.pdf' },
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
      'La lista completa de [viñedos en Tequisquiapan y Ezequiel Montes](/lugares/experiencias/vinedos), con mapa, horarios y cómo llegar, está en la sección de experiencias.',
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
        title: 'De Cote y Los Rosales',
        paragraphs: [
          '[De Cote](https://decote.mx), también en Ezequiel Montes, tiene más de 50 hectáreas y recorre el viñedo a pie, en bicicleta o en tren, todos los días de 11 a 17 h.',
          'Los Rosales es el más cercano al pueblo, a unos diez minutos. Lleva más de cuarenta años con viñedo pero hace vino propio solo desde 2011; su vid más vieja vino de Burdeos. No publica horarios: llama antes de ir.',
        ],
        places: ['Bodegas De Cote', 'Los Rosales Viñedos'],
      },
      {
        id: 'queserias',
        title: 'Queserías',
        paragraphs: [
          'La [Cava de Quesos Bocanegra](https://www.cavabocanegra.com/), sobre la carretera estatal 200, fue la primera cava de quesos de Tequis. Ahí maduran los quesos de receta europea de la marca Néole. La visita dura 40 minutos, sale cada hora de 10 a 16 h y se puede hacer con vino, cerveza o sin bebida; los menores de cinco años no pagan.',
          '[Finca VAI](https://www.quesosvai.com/) queda a media hora, en el kilómetro 30 de la carretera libre a Querétaro (ya en el municipio de Colón). Es un rancho familiar: se ven las vacas, cabras y borregas, la fábrica y el sótano de maduración, y al final hay degustación. Los grupos pequeños no necesitan reservar.',
          'Sin salir del centro, Quesos Quiroz vende queso en el Andador Morelos desde 1972.',
        ],
        places: ['Cava de Quesos Bocanegra', 'Finca VAI'],
        photo: PHOTOS.feriaQuesoVino,
        photoAlt: 'Puestos de la Feria del Queso y el Vino',
      },
      {
        id: 'temporada',
        title: 'Vendimias y festival',
        paragraphs: [
          'La vendimia, la fiesta de la cosecha, va de julio a septiembre: cada viñedo pone su fecha, con pisado de uva, música y comida, y casi siempre con boleto aparte. En 2026 el calendario fue de principios de junio a mediados de septiembre.',
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
      { label: 'Cava de Quesos Bocanegra: experiencias', url: 'https://www.cavabocanegra.com/experiencias' },
      { label: 'Finca VAI: recorrido del queso', url: 'https://www.quesosvai.com/tourvai.html' },
      { label: 'El Universal Querétaro: vendimias 2026', url: 'https://www.eluniversalqueretaro.mx/municipios/vendimias-2026-conoce-el-calendario-de-eventos-en-los-vinedos-de-queretaro/' },
    ],
  },
  {
    slug: 'balnearios',
    title: 'Balnearios en Tequis: precios 2026',
    heroTitle: 'Balnearios en Tequis',
    lead: 'Precios de noviembre de 2026, días de apertura, camping y dónde hay agua termal.',
    description:
      'Balnearios en Tequisquiapan con precios de noviembre de 2026: Termas del Rey, El Oasis y La Vega. Horarios, descuentos INAPAM, camping y aguas termales.',
    searchSubtitle: 'Precios, horarios y camping',
    photo: PHOTOS.alberca,
    photoAlt: 'Alberca de un hotel en Tequisquiapan',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-10',
    intro: [
      'Casi todos los balnearios de Tequis están en el corredor de parques acuáticos de la carretera 120, rumbo a Ezequiel Montes, entre los kilómetros 9 y 10. La Vega es el único dentro del pueblo.',
      'Los precios cambian con la temporada y en internet circulan notas viejas, algunas de 2023. Aquí van los que publicaba cada balneario en noviembre de 2026 o, si no publica precios, los más recientes de la prensa, con su fecha y su fuente.',
    ],
    sections: [
      {
        id: 'termas-del-rey',
        title: 'Termas del Rey',
        paragraphs: [
          'Está en el kilómetro 10 de la carretera 120. En noviembre de 2026, [su web](https://www.termasdelrey.com) pedía $199 por adulto y $125 por niño; con campamento, $340 y $290. Los menores de 90 cm no pagan. Hasta qué estatura se paga como niño depende de la fuente: 1.20 m según adn40 (agosto de 2026) y 1.30 m según Telediario (abril de 2026).',
          'Comprando en línea hay hasta 15 % de descuento, pero el comprobante se canjea en taquilla, así que no te ahorras la fila. Su web anuncia descuentos para adultos mayores, estudiantes, maestros, cumpleañeros, grupos y personas con discapacidad, sin dar montos. Según adn40, en agosto de 2026 eran del 50 % con INAPAM ($99.50) y del 30 % para estudiantes y maestros ($139.30), y no se combinaban con el de la compra en línea.',
          'En noviembre de 2026 abría viernes, sábado y domingo, de 9 a 18 h. En el verano de 2026 abrió de miércoles a domingo, y en Semana Santa, todos los días. Tiene albercas, toboganes, palapas, lagos, cancha de voleibol, baños con agua caliente y una zona VIP con asador, que se paga aparte y se reserva. No tiene hotel.',
          'A pesar del nombre, su web no dice que el agua sea termal.',
        ],
        places: ['Termas del Rey'],
      },
      {
        id: 'el-oasis',
        title: 'El Oasis: agua termal',
        paragraphs: [
          'El Parque Acuático El Oasis está en el mismo kilómetro 10, en El Sauz. Es el único que publica en su web que su agua es termal: a 36 °C.',
          'En noviembre de 2026, [su web](https://eloasistequisquiapan.com) pedía $190 por adulto, $150 por niño de 1.00 a 1.40 m y $150 para la tercera edad; con campamento, $250 por adulto y $220 por niño. En la prensa de 2026 salen precios más bajos: $150 por adulto en agosto, según adn40, y una promoción de $120 para todos en octubre que su web ya no muestra. En temporada baja suele haber promociones.',
          'Su web dice que abre sábado y domingo de 9 a 18 h, más vacaciones y días festivos; en octubre, adn40 decía de viernes a domingo. Tiene toboganes, zona infantil, tirolesa acuática, alberca olímpica, palapas y canchas de futbol. El campamento tiene área de asador y estacionamiento propio; adn40 contó 262 lugares. No tiene hotel ni cabañas.',
        ],
        places: ['Parque Acuático El Oasis'],
      },
      {
        id: 'la-vega',
        title: 'La Vega, en el pueblo',
        paragraphs: [
          'El Balneario La Vega está en el Barrio de la Magdalena, dentro del pueblo, así que no hace falta tomar carretera. Es el único que abre toda la semana: de lunes a domingo, de 8 a 18 h, según [su web](https://balneariolavega.mx/index.php/contactenos) en noviembre de 2026.',
          'Su web no publica precios. Según sus redes, citadas por adn40 en agosto de 2026, la entrada general costaba $100 y $50 para menores de 12 años: el más barato de los que tienen precio publicado. Tiene alberca olímpica, chapoteadero y toboganes. Ninguna fuente dice que su agua sea termal.',
        ],
        places: ['Balneario La Vega'],
      },
      {
        id: 'camping',
        title: 'Camping y hospedaje',
        paragraphs: [
          'Los tres tienen campamento. Termas del Rey y El Oasis publican su precio en su web, y Termas del Rey renta además casas de campaña y asadores. En La Vega también se puede acampar, según adn40; su web anuncia habitaciones, campamento y palapas o cabañas, pero sin precios ni detalles, así que pregunta por teléfono.',
          'Si buscas balneario con hotel, ninguno de los del corredor tiene hotel propio confirmado. Fantasía Acuática, en el kilómetro 9, tiene hospedaje y área para acampar según su ficha de tequis.travel, pero no tiene web ni precio ni horario publicados.',
        ],
      },
      {
        id: 'como-llegar',
        title: 'Cómo llegar sin auto',
        paragraphs: [
          'A Termas del Rey y El Oasis se llega en la QroVan que va de Tequis a Ezequiel Montes: pasa cada 5 a 10 minutos y, según adn40, en septiembre de 2026 costaba unos $20. Pide que te bajen en el kilómetro 10. A La Vega se llega desde el centro sin transporte.',
          'Con niños, hay más ideas en [Tequis con niños](/guias/en-familia). Todos los balnearios del sitio están en [balnearios](/lugares/experiencias/balnearios).',
        ],
        tip: 'Precios y días de apertura cambian con la temporada, y la prensa repite cifras de otros años. Antes de ir, revisa la web del balneario o llama.',
      },
    ],
    sources: [
      { label: 'Termas del Rey: precios', url: 'https://www.termasdelrey.com' },
      { label: 'Termas del Rey: horario', url: 'https://www.termasdelrey.com/contacto' },
      { label: 'Termas del Rey: instalaciones', url: 'https://www.termasdelrey.com/nosotros' },
      { label: 'Termas del Rey: promociones', url: 'https://www.termasdelrey.com/promociones' },
      { label: 'adn40: descuentos de Termas del Rey (agosto 2026)', url: 'https://www.adn40.mx/mexico/2026-08-10/el-balneario-a-pocos-minutos-de-un-pueblo-magico-de-queretaro-que-da-50-de-descuento-a-mayores-de-60-anos-y-30-a-maestros-y-estudiantes/' },
      { label: 'Telediario: Termas del Rey (abril 2026)', url: 'https://www.telediario.mx/comunidad/parque-acuatico-termas-del-rey-queretaro-precios-horarios-y-ubicacion' },
      { label: 'adn40: cómo llegar en transporte público (septiembre 2026)', url: 'https://www.adn40.mx/mexico/2026-09-09/el-balneario-de-tequisquiapan-queretaro-con-descuento-inapam-al-que-llegas-en-autobus-por-60-en-septiembre-2026-rutas-y-transporte-publico/' },
      { label: 'Parque Acuático El Oasis', url: 'https://eloasistequisquiapan.com' },
      { label: 'adn40: El Oasis (agosto 2026)', url: 'https://www.adn40.mx/mexico/2026-08-30/el-parque-acuatico-de-queretaro-con-aguas-termales-a-36-grados-y-asadores-donde-los-adultos-mayores-tienen-descuento-para-septiembre-2026/' },
      { label: 'adn40: El Oasis (octubre 2026)', url: 'https://www.adn40.mx/tiempo-libre/2026-10-18/las-aguas-termales-a-36-grados-en-queretaro-que-siguen-abiertas-en-otono-cuanto-cuesta-entrar-a-40-minutos-de-la-capital/' },
      { label: 'Balneario La Vega: contacto y horario', url: 'https://balneariolavega.mx/index.php/contactenos' },
      { label: 'adn40: Balneario La Vega (agosto 2026)', url: 'https://www.adn40.mx/mexico/2026-08-25/que-hacer-el-dia-del-abuelo-2026-el-balneario-de-tequisquiapan-queretaro-abre-los-7-dias-de-la-semana-y-es-ideal-para-ir-con-toda-la-familia/' },
      { label: 'tequis.travel: Corredor de parques acuáticos', url: 'https://tequis.travel/directorio/experiencias/corredor-de-parques-acuaticos/' },
      { label: 'tequis.travel: Fantasía Acuática', url: 'https://tequis.travel/directorio/parques-acuaticos/fantasia-acuatica/' },
    ],
  },
  {
    slug: 'vuelo-en-globo',
    title: 'Cuánto cuesta volar en globo en Tequis',
    heroTitle: 'Volar en globo en Tequis',
    lead: 'Precios de noviembre de 2026, qué incluye, a qué hora se sale y qué pasa si hay viento.',
    description:
      'Cuánto cuesta un vuelo en globo aerostático en Tequisquiapan: precios de noviembre de 2026, qué incluye, hora y punto de salida, edad mínima y cancelaciones.',
    searchSubtitle: 'Precios y qué incluye cada vuelo',
    photo: PHOTOS.globoValle,
    photoAlt: 'Globo aerostático sobre el valle de Tequisquiapan',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-10',
    intro: [
      'El operador con base en el pueblo es Vuela en Globo, que también vuela en San Miguel de Allende. Otros operadores y agencias venden vuelos en Tequis a precios parecidos. Estos son los precios que publicaba cada uno el 10 de noviembre de 2026.',
    ],
    sections: [
      {
        id: 'precios',
        title: 'Cuánto cuesta',
        paragraphs: [
          'En noviembre de 2026, [la web de Vuela en Globo](https://vuelaenglobo.com/tequisquiapan/) pedía $2,799 por persona en vuelo compartido. Los privados costaban $8,499 en pareja, $12,999 para cuatro personas y $17,999 de cinco a ocho.',
          'Hay además un vuelo Deluxe de $15,499, uno pet friendly de $8,999 y uno con cabalgata de $4,449. La web no dice para cuántas personas es cada uno de esos tres: pregúntalo al reservar.',
          'El 10 de noviembre de 2026 no tenía ninguna promoción publicada. Las de 2×1 que salen en los buscadores son de un sitio agregador y no se pueden verificar.',
        ],
        places: ['Globos Aerostáticos Tequisquiapan'],
        photo: PHOTOS.globos,
        photoAlt: 'Globos aerostáticos en Querétaro',
      },
      {
        id: 'que-incluye',
        title: 'Qué incluye',
        paragraphs: [
          'El vuelo compartido incluye la recepción, el traslado del punto de reunión al globopuerto, acceso a cafetería móvil y souvenirs, la inducción de seguridad y el vuelo, de 45 minutos a una hora. Más abajo, la misma página dice que el vuelo incluye brindis, certificado de vuelo, seguro y desayuno. No queda claro si el desayuno entra en el compartido: confírmalo al reservar.',
          'Se vuela entre 150 y 800 metros sobre el suelo, en globos para 2, 4 u 8 pasajeros.',
        ],
      },
      {
        id: 'hora-y-salida',
        title: 'A qué hora y desde dónde',
        paragraphs: [
          'Los globos salen al amanecer, porque es cuando el clima es estable. La hora exacta te la da el operador al reservar; Turismo municipal sugiere levantarte alrededor de las cuatro de la mañana.',
          'El punto de reunión de Vuela en Globo está en la calle Jazmín 35, en Pedregal de Hacienda Grande. De ahí te llevan al globopuerto, que está incluido; su ubicación no se publica.',
        ],
      },
      {
        id: 'ninos-y-mascotas',
        title: 'Niños y mascotas',
        paragraphs: [
          'Vuela en Globo acepta niños mayores de 4 años acompañados por un adulto, aunque sus términos no lo recomiendan para menores de 6. Hasta los 9 años hay tarifa especial, sin precio publicado. Las embarazadas no vuelan.',
          'Las mascotas sí pueden volar, con una plática previa, y hay un vuelo pet friendly. Más planes en familia en [Tequis con niños](/guias/en-familia).',
        ],
      },
      {
        id: 'viento',
        title: 'Si hay viento',
        paragraphs: [
          'Con viento de más de 12 km/h, lluvia o neblina, el vuelo se reagenda. Si en lugar de reagendar pides el reembolso, se cobra un 30 % del total, según sus preguntas frecuentes en noviembre de 2026. Sus términos dicen que la reprogramación no cuesta y vale dentro del año.',
        ],
        tip: 'No dejes el globo para la última mañana del viaje: si el clima lo cancela, necesitas otro día para volver a intentarlo. Y confirma precio y hora con el operador antes de pagar, porque cambian.',
      },
      {
        id: 'otros',
        title: 'Otros operadores',
        paragraphs: [
          '[Globos Aerostáticos MX](https://globosaerostaticosmx.com/tours/subir-a-un-globo-en-tequisquiapan/), con teléfono de la Ciudad de México, dice volar en Teotihuacán y en Tequis. En noviembre de 2026 pedía $2,800 por persona en compartido, $3,800 por persona en un fin de semana con vuelo y hotel, y $4,600 por persona en privado.',
          'Su vuelo dura de 45 a 60 minutos, a unos 400 metros; la experiencia completa, unas cuatro horas, con brindis al aterrizar y seguro de viajero. No vuela con menores de 5 años ni con embarazadas. No da dirección en Tequis: el punto de encuentro lo confirma por WhatsApp el día anterior. También aclara que el globo no despega de una vinícola ni aterriza en una cata.',
          'En el centro, la agencia Viajes y Enoturismo vende el vuelo de las 6:00 por $2,799, el mismo precio de Vuela en Globo, en una página con precios marcados como válidos en 2025.',
        ],
      },
    ],
    sources: [
      { label: 'Vuela en Globo: Tequisquiapan (precios)', url: 'https://vuelaenglobo.com/tequisquiapan/' },
      { label: 'Vuela en Globo: preguntas frecuentes', url: 'https://vuelaenglobo.com/preguntas-frecuentes/' },
      { label: 'Vuela en Globo: términos y condiciones', url: 'https://vuelaenglobo.com/terminos-y-condiciones/' },
      { label: 'tequis.travel: Qué hacer en Tequisquiapan', url: TT('que_hacer_tequisquiapan') },
      { label: 'Globos Aerostáticos MX: vuelo en Tequisquiapan', url: 'https://globosaerostaticosmx.com/tours/subir-a-un-globo-en-tequisquiapan/' },
      { label: 'Viajes y Enoturismo: tours', url: 'https://www.viajesyenoturismo.com.mx/descripci%C3%B3n-tours/' },
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
          'Piensa en la hora: la cita es de madrugada y el vuelo puede cancelarse por viento. Con niños chicos, a veces es mejor ver los globos desde tierra.',
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
    slug: 'en-pareja',
    title: 'Tequis en pareja',
    heroTitle: 'Tequis en pareja',
    lead: 'Globo para dos, cabalgata, picnic entre lavandas, temazcal y dónde dormir.',
    description:
      'Qué hacer en Tequisquiapan en pareja: vuelo privado en globo, cabalgata con almuerzo, picnic en la lavanda, temazcal, catas para dos y hoteles con jacuzzi o área solo adultos.',
    searchSubtitle: 'Planes para dos',
    photo: PHOTOS.parroquiaAtardecer,
    photoAlt: 'La parroquia de Tequisquiapan al atardecer',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-10',
    intro: [
      'Tequis tiene planes para dos a cualquier hora: un globo al amanecer, una cabalgata o un picnic por la mañana, una cata por la tarde y una cena en el centro. Casi todo se reserva antes.',
      'Los precios y horarios son de noviembre de 2026 y cambian seguido.',
    ],
    sections: [
      {
        id: 'globo',
        title: 'Un globo para dos',
        paragraphs: [
          'Vuela en Globo, el operador del pueblo, vende un vuelo privado en pareja. En noviembre de 2026 costaba 8,499 pesos; el compartido, 2,799 por persona. También tiene un paquete que combina el globo con una cabalgata.',
          'A qué hora se vuela y qué pasa si hay viento está en la [guía de fin de semana](/guias/fin-de-semana).',
        ],
        places: ['Globos Aerostáticos Tequisquiapan'],
        photo: PHOTOS.globoValle,
        photoAlt: 'Globo aerostático sobre el valle de Tequisquiapan',
      },
      {
        id: 'cabalgata',
        title: 'A caballo',
        paragraphs: [
          'Cabalgando en Tequis sale los sábados y domingos a las 9 de la mañana, con café y conchas con nata. Son unas dos horas y media a caballo entre ejidos y sembradíos y, al volver, un almuerzo de consomé de carnero, barbacoa y tortillas hechas a mano. Sirve para quien nunca ha montado.',
          'Solo recibe con reserva. En noviembre de 2026 su tienda en línea la vendía en 2,200 pesos, o en 3,700 con hospedaje; no aclara si el precio es por persona.',
        ],
        places: ['Cabalgando en Tequis'],
      },
      {
        id: 'lavanda',
        title: 'Picnic entre lavandas',
        paragraphs: [
          'En la Granja Lavyn, a las afueras, el picnic entre lavandas y romeros dura dos horas. Costaba 1,000 pesos para dos o tres personas, y 500 cada botella adicional; se aparta con la mitad por adelantado.',
          'La granja también da, de viernes a domingo y con reserva, un taller de dos horas para destilar aceites esenciales (500 pesos por persona).',
        ],
        places: ['Granja Lavyn'],
      },
      {
        id: 'temazcal',
        title: 'Temazcal y spa',
        paragraphs: [
          'El Temazcal Tonatiu Iquzayampa está en la comunidad de Fuentezuelas. Turismo del estado lo describe así: una plática para empezar, comida de bienvenida, piedras calentadas sin gas, infusiones de hierbas y una meditación guiada. Lleva toalla, sandalias y traje de baño, y reserva antes; no publica precio ni horario.',
          'Espacio Sense, el spa de La Casona Tequisquiapan Hotel & Spa, está en el área solo para adultos del hotel. Tiene sauna, temazcal, jacuzzi cerrado y cabina para masajes en pareja.',
        ],
        places: ['Temazcal Tonatiu Iquzayampa', 'Espacio Sense Spa – La Casona'],
      },
      {
        id: 'catas',
        title: 'Catas para dos',
        paragraphs: [
          'La Cava de Quesos Bocanegra tiene una experiencia para pareja, Queso, Amor & Vino, que costaba 1,300 pesos. Para algo más privado está Para Nosotros, en una cava privada, de 3,600 a 7,500 pesos y solo con reserva.',
          'En CR Vinos MX, sobre el camino a San José La Laja, hay un picnic de dos horas en un tipi frente al viñedo: 1,100 pesos (su web no dice si es por persona). Y en Viñedos Azteca, el recorrido VIP, con cinco vinos y sommelier, costaba 750 pesos en 2026. Hay más en la [guía de viñedos y queserías](/guias/vinedos-y-quesos).',
        ],
        places: ['Cava de Quesos Bocanegra', 'CR Vinos MX', 'Viñedos Azteca'],
        photo: PHOTOS.cata,
        photoAlt: 'Cata de quesos y vino',
      },
      {
        id: 'cenar',
        title: 'Una cena',
        paragraphs: [
          "Para el atardecer, Grupo Animal recomienda La Luna Terraza, en la azotea de K'puchinos. Para cenar, El Maravillas tiene terraza en el centro, y ORIGENS, una vinoteca con más de 50 etiquetas, de jueves a domingo.",
          'MD Turismo y Experiencias tiene además un tour nocturno con cena, solo para adultos. Horarios y más opciones en [Tequis de noche](/guias/de-noche).',
        ],
        places: ['La Luna Terraza', 'El Maravillas', 'ORIGENS'],
      },
      {
        id: 'dormir',
        title: 'Dónde dormir',
        paragraphs: [
          'La Casona Tequisquiapan Hotel & Spa, en Hacienda Grande, tiene seis suites en su área solo para adultos y un paquete romántico con cena de tres tiempos en la cava. En el centro, el Hotel Quinta Tequisquiapan llama a su suite con jacuzzi privado “nuestra suite más romántica”; costaba desde 2,650 pesos la noche para dos.',
          'A unos pasos de la plaza, cuatro master suites de Suites Poza Real tienen una poza privada que se llena con agua de manantial. Fuera del pueblo, Salterra Glamping, en La Trinidad, tiene una tienda Deluxe con jacuzzi privado en la terraza y un tipi para parejas, y en La Casona de San Juanito, dentro de la Vinícola San Juanito, la noche incluye las comidas, un recorrido y una cata de tres vinos.',
          'Hay más en [hoteles románticos](/lugares/hospedaje/romanticos).',
        ],
        places: ['La Casona Tequisquiapan Hotel & Spa', 'Hotel Quinta Tequisquiapan', 'Suites Poza Real', 'Salterra Glamping', 'La Casona de San Juanito'],
        photo: PHOTOS.alberca,
        photoAlt: 'Alberca de un hotel en Tequisquiapan',
      },
    ],
    sources: [
      { label: 'Vuela en Globo: Tequisquiapan (precios)', url: 'https://vuelaenglobo.com/tequisquiapan/' },
      { label: 'Cabalgando en Tequis', url: 'https://cabalgandoentequis.com/' },
      { label: 'Cabalgando en Tequis: cabalgata matutina (precio)', url: 'https://cabalgandoentequis.com/products/cabalgata-matutina-tequisquiapan-alegrando-tu-manana' },
      { label: 'Granja Lavyn: picnic entre lavandas', url: 'https://lavyn.mx/pages/picnic-entre-lavandas-y-romeros' },
      { label: 'Granja Lavyn: taller de destilación', url: 'https://lavyn.mx/pages/taller-destilacion-aceites-esenciales' },
      { label: 'queretaro.travel: Temazcal Tonatiu Iquzayampa', url: 'https://queretaro.travel/lugares/temazcal-tonatiu-iquzayampa-a-bath-of-the-aztec-king/?lang=en' },
      { label: 'La Casona: Espacio Sense', url: 'https://lacasonatequisquiapan.mx/es/espacio-sense' },
      { label: 'La Casona: habitaciones', url: 'https://lacasonatequisquiapan.mx/es/habitaciones' },
      { label: 'Cava de Quesos Bocanegra: experiencias', url: 'https://www.cavabocanegra.com/experiencias' },
      { label: 'CR Vinos MX: experiencias', url: 'https://crvinosmx.com/enotourism/experiences' },
      { label: 'Viñedos Azteca: recorridos 2026 (PDF)', url: 'https://vinedosazteca.com/kowine/wp-content/uploads/2026/05/RECORRIDOS-2026.pdf' },
      { label: 'Grupo Animal: dónde comer en Tequisquiapan', url: 'https://grupoanimal.mx/gastronomia/recetas/donde-comer-en-tequisquiapan' },
      { label: 'ORIGENS', url: 'https://origens.mx' },
      { label: 'MD Turismo: tour nocturno Sabor de la noche', url: 'https://www.mdturismoyexperiencias.com/productos/tour-nocturno-gastronomico-sabor-de-la-noche-en-tequisquiapan/' },
      { label: 'Hotel Quinta Tequisquiapan: habitaciones', url: 'http://quintatequisquiapan.mx/habitaciones/' },
      { label: 'Suites Poza Real', url: 'https://www.pozareal.com.mx' },
      { label: 'adn40: Suites Poza Real (octubre 2026)', url: 'https://www.adn40.mx/tiempo-libre/2026-10-18/cuanto-cuesta-dormir-en-el-hotel-a-50-pasos-de-la-plaza-de-este-pueblo-magico-de-queretaro-el-lugar-tiene-poza-privada-de-agua-de-manantial-en-la-habitacion/' },
      { label: 'Salterra Glamping: tiendas', url: 'https://www.salterraglamping.com/nuestras-tiendas' },
      { label: 'Vinícola San Juanito: La Casona', url: 'https://www.sanjuanito.com.mx/la-casona/' },
    ],
  },
  {
    slug: 'de-noche',
    title: 'Tequis de noche',
    heroTitle: 'Tequis de noche',
    lead: 'Cenas en el centro, una azotea, cerveza artesanal y leyendas a pie.',
    description:
      'Qué hacer en Tequisquiapan de noche: dónde cenar en el centro, bares y una azotea con vista, la callejoneada de leyendas, un tour con cena y cómo volver al hotel.',
    searchSubtitle: 'Cenas, bares y recorridos de noche',
    photo: PHOTOS.parroquiaNoche,
    photoAlt: 'La parroquia iluminada de noche',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-10',
    intro: [
      'De noche, en Tequis se sale a cenar, a tomar una copa o a caminar el centro con un grupo que cuenta leyendas. Casi todo queda a unas cuadras de la Plaza Miguel Hidalgo, y lo que abre hasta tarde lo hace, sobre todo, de jueves a domingo.',
      'Los horarios de esta guía son los que cada lugar publicaba en noviembre de 2026 y cambian seguido: confírmalos antes de ir. Y lleva algo para abrigarte: en diciembre, la temperatura mínima promedio ronda los 6 °C.',
    ],
    sections: [
      {
        id: 'cenar',
        title: 'Dónde cenar',
        paragraphs: [
          'En la plaza, La Valentina, el restaurante del Hotel La Plaza, tiene mesas en el portal y sirve hasta las 22:30 todos los días. En el mismo hotel, Las Brasas hace carnes al carbón en la segunda planta, con vista a la plaza.',
          "A unos pasos, El Maravillas, de cocina mexicana creativa, tiene terraza y de miércoles a sábado cierra a medianoche. ORIGENS, junto al Centro Geográfico, hace cocina mediterránea con ingredientes de la región y tiene una vinoteca con más de 50 etiquetas; abre de jueves a domingo hasta las 22 h. K'puchinos, en Independencia, cierra a medianoche los viernes y sábados.",
        ],
        places: ['La Valentina', 'Las Brasas', 'El Maravillas', 'ORIGENS', "K'puchinos Restaurant"],
        photo: PHOTOS.portalesPlaza,
        photoAlt: 'Los portales de la plaza de Tequisquiapan',
      },
      {
        id: 'copa',
        title: 'Una copa',
        paragraphs: [
          "La Luna Terraza está en la azotea de K'puchinos. De jueves a sábado abre hasta la medianoche, con karaoke, y los domingos sirve brunch. Grupo Animal la recomienda por la vista del centro y para ver el atardecer. Su web publica dos horarios distintos: llama antes.",
          'La Cantina es el bar del Hotel La Plaza, a un costado de la parroquia; los fines de semana cierra a las 2 de la mañana. Si prefieres cerveza, Borúma, en Morelos Norte, es una cervecería independiente de estilo europeo que fundó un inglés.',
          'Hay más en el listado de [bares](/lugares/gastronomia/bares).',
        ],
        places: ['La Luna Terraza', 'La Cantina', 'Borúma'],
      },
      {
        id: 'leyendas',
        title: 'Leyendas a pie',
        paragraphs: [
          'La callejoneada teatral de leyendas sale de la Plaza Miguel Hidalgo, en la esquina con la Plaza Santa Cecilia. En una hora, cinco actores cuentan seis leyendas del pueblo. Es para toda la familia y se puede ir con mascota.',
          'Según Turismo municipal, en 2026 salía los viernes, sábados y días festivos a las 20:45 y costaba 100 pesos por adulto y 60 por niño o con credencial del INAPAM. El operador no tiene web, así que confirma antes de ir.',
          'Si vienes en grupo, Callejoneadas Tequisquiapan organiza callejoneadas privadas con mariachi, banda sinaloense o estudiantina, muñecos gigantes y jarritos.',
        ],
        places: ['Callejoneadas Tequisquiapan'],
        photo: PHOTOS.calleNinosHeroes,
        photoAlt: 'La calle Niños Héroes, en el centro de Tequisquiapan',
      },
      {
        id: 'tour',
        title: 'Un tour con cena',
        paragraphs: [
          'MD Turismo y Experiencias tiene un tour nocturno, Sabor de la noche, de jueves a domingo y solo para adultos. Dura cuatro horas y media e incluye una cena de pizza y una copa de vino. Su web no publica el precio.',
        ],
        places: ['MD Turismo y Experiencias'],
      },
      {
        id: 'diciembre',
        title: 'Las noches de diciembre',
        paragraphs: [
          'La Villa Navideña de 2026 va del 13 de diciembre al 6 de enero. En 2025 todo su programa fue gratis: cada noche caía nieve artificial en la Plaza Miguel Hidalgo y varias noches hubo conciertos en la Plaza Santa Cecilia. Las fechas de cada año están en el [calendario de eventos](/eventos).',
        ],
      },
      {
        id: 'volver',
        title: 'Para volver',
        paragraphs: [
          'Si cenas fuera del centro o vas a tomar, hay taxis y hay Uber, aunque el Uber puede tardar en llegar: en fin de semana conviene programarlo con anticipación.',
          'Y si al día siguiente vuelas en globo, cena temprano: la cita es de madrugada. Está en la [guía de fin de semana](/guias/fin-de-semana).',
        ],
      },
    ],
    sources: [
      { label: 'Hotel La Plaza: restaurantes y bar', url: 'https://hotelplazatequis.com/restaurantes-en-tequisquiapan/' },
      { label: 'El Maravillas', url: 'https://www.elmaravillas.com.mx' },
      { label: 'tequis.travel: El Maravillas (horario)', url: TT('el_maravillas_tequisquiapan') },
      { label: 'ORIGENS', url: 'https://origens.mx' },
      { label: "K'puchinos", url: 'https://kpuchinos.com.mx' },
      { label: "K'puchinos: La Luna Terraza", url: 'https://www.kpuchinos.com.mx/la-luna-terraza/' },
      { label: 'Grupo Animal: dónde comer en Tequisquiapan', url: 'https://grupoanimal.mx/gastronomia/recetas/donde-comer-en-tequisquiapan' },
      { label: 'queretaro.travel: Borúma', url: 'https://queretaro.travel/lugares/boruma-where-flavors-intertwine-with-passion/?lang=en' },
      { label: 'tequis.travel: Tours (callejoneada de leyendas)', url: TT('tours_tequisquiapan') },
      { label: 'Callejoneadas Tequisquiapan', url: 'https://callejoneadastequisquiapan.com/' },
      { label: 'MD Turismo: tour nocturno Sabor de la noche', url: 'https://www.mdturismoyexperiencias.com/productos/tour-nocturno-gastronomico-sabor-de-la-noche-en-tequisquiapan/' },
      { label: 'AlertaQro: Villa Navideña 2026 (noviembre 2026)', url: 'https://www.alertaqronoticias.com/2026/11/09/volvera-la-villa-navidena-a-tequisquiapan-en-diciembre/' },
      { label: 'AlertaQro: programa navideño 2025', url: 'https://www.alertaqronoticias.com/2025/12/12/asi-se-vivira-la-navidad-en-tequisquiapan/' },
      { label: 'Uber: Tequisquiapan', url: 'https://www.uber.com/global/en/r/cities/tequisquiapan-qt-mx/' },
      { label: 'SMN: normales de la estación Presa Centenario', url: 'https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales7100/qro/nor7100_22025.txt' },
    ],
  },
  {
    slug: 'gratis',
    title: 'Tequis gratis o con poco dinero',
    heroTitle: 'Tequis con poco dinero',
    lead: 'Lo que no cuesta nada y lo que cuesta poco, con precios de 2026.',
    description:
      'Qué hacer gratis en Tequisquiapan: plaza, templos, Centro Geográfico, Jardín del Arte y festivales. Y por poco dinero: lavanda, museo, viñedos, balneario y transporte.',
    searchSubtitle: 'Planes gratis y baratos',
    photo: PHOTOS.plaza,
    photoAlt: 'La plaza principal de Tequisquiapan',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-10',
    intro: [
      'En el centro de Tequis casi nada cobra entrada: la plaza, los templos, los monumentos y los callejones se recorren a pie y sin pagar. Lo que cuesta, en general, cuesta poco.',
      'Los precios y horarios de esta guía son de 2026 y cambian seguido: tómalos como referencia.',
    ],
    sections: [
      {
        id: 'centro',
        title: 'El centro, sin pagar',
        paragraphs: [
          'La [Plaza Miguel Hidalgo](/lugar/plaza-miguel-hidalgo) está abierta día y noche, igual que el Monumento al Centro Geográfico, el péndulo de Niños Héroes 17 que recuerda el decreto de 1916. El recorrido por la plaza, la parroquia, La Pila y el Callejón del Piojo está en la [guía de fin de semana](/guias/fin-de-semana).',
          'Los templos son de entrada libre. En el Barrio de la Magdalena, el templo de Santa María Magdalena es donde se celebró la misa de fundación del pueblo, en 1551; su restauración terminó en 2022. En el límite con el Barrio de San Juan quedan las Capillas de Indios, de la época colonial.',
        ],
        places: ['Plaza Miguel Hidalgo', 'Monumento al Centro Geográfico de México', 'Templo de Santa María Magdalena', 'Capillas de Indios'],
        photo: PHOTOS.temploMagdalena,
        photoAlt: 'Templo de Santa María Magdalena',
      },
      {
        id: 'arte',
        title: 'Arte y cultura',
        paragraphs: [
          'Los fines de semana, el Jardín del Arte, en San Joaquín, tiene pintura en exhibición y venta, conciertos y talleres para todas las edades, sin costo, según Turismo municipal.',
          'El Centro Cultural Gloria Michaus, en De los Sauces 1, programa conferencias, cine, teatro, exposiciones y talleres, aunque no publica su cartelera. Y la Casa del Artesano exhibe y vende artesanía del pueblo.',
        ],
        places: ['Jardín del Arte', 'Centro Cultural Gloria Michaus', 'Casa del Artesano'],
        photo: PHOTOS.artesanias,
        photoAlt: 'Artesanías en Tequisquiapan',
      },
      {
        id: 'mercados',
        title: 'Mercados y antojitos',
        paragraphs: [
          'Recorrer los mercados no cuesta. Para comer barato, Turismo municipal recomienda el Mercado Guadalupano, con platillos regionales “a excelentes precios”, y el corredor de antojitos que está detrás del Parador Artesanal, que solo abre sábados, domingos, puentes y festivos. Lleva efectivo.',
          'Los cuatro mercados del pueblo están en el listado de [mercados](/lugares/compras/mercados).',
        ],
        places: ['Mercado Guadalupano Municipal', 'Parador Artesanal Luis Donaldo Colosio'],
      },
      {
        id: 'poco-dinero',
        title: 'Por poco dinero',
        paragraphs: [
          'En la Granja Lavyn, un campo de lavanda a las afueras, la visita guiada de una hora costaba 100 pesos en noviembre de 2026, con degustación de tés. Los menores de 12 años no pagan y los mayores de 60 pagan 80. Sale cada hora en punto; la última, a las 4 de la tarde.',
          'En el centro, el Museo ¡México me encanta!, en 5 de Mayo 11, tiene escenas en miniatura de la vida mexicana, como un mercado, un circo o una boda, y su entrada es económica.',
          'Para nadar, el Balneario La Vega está en el mismo pueblo, en el Barrio de la Magdalena, y abre todos los días. En agosto de 2026 la entrada costaba 100 pesos, y 50 para menores de 12.',
        ],
        places: ['Granja Lavyn', 'Museo ¡México me encanta!', 'Balneario La Vega'],
      },
      {
        id: 'vinedos',
        title: 'Viñedos sin gastar mucho',
        paragraphs: [
          'En Freixenet no se paga por entrar al viñedo ni por sentarse a comer: se paga el recorrido, que en noviembre de 2026 costaba 310 pesos con cata, y 210 para niños. El de la Vinícola San Juanito, en San José de la Laja, costaba 190, y los menores de 12 no pagan. En Viñedos Azteca, el recorrido más sencillo, con una degustación, costaba 295 en 2026.',
          'Más en la [guía de viñedos y queserías](/guias/vinedos-y-quesos).',
        ],
        places: ['Freixenet México', 'Vinícola San Juanito', 'Viñedos Azteca'],
        photo: PHOTOS.vinedosDeCote,
        photoAlt: 'Viñedos y olivos cerca de Tequisquiapan',
      },
      {
        id: 'fiestas',
        title: 'Fiestas con entrada libre',
        paragraphs: [
          'En mayo y junio, el Festival Internacional del Arte, Queso y Vino tiene entrada libre; para las degustaciones de 2026 había que registrarse antes en línea. A fines de julio o en agosto, la Expo Cactus llena el Parque La Pila de plantas del semidesierto, también gratis. Y en diciembre, la Villa Navideña, que en 2026 va del 13 de diciembre al 6 de enero, tiene carrusel gratis.',
          'Las fechas de cada año están en el [calendario](/eventos).',
        ],
        photo: PHOTOS.feriaQuesoVino,
        photoAlt: 'Puestos de la Feria del Queso y el Vino',
      },
      {
        id: 'llegar',
        title: 'Llegar sin gastar de más',
        paragraphs: [
          'En auto desde la CDMX, por la autopista México–Querétaro y saliendo en San Juan del Río, se pagan dos casetas: 226 pesos en 2026. Si el GPS te manda por el Circuito Exterior Mexiquense, son cuatro.',
          'En autobús, ETN sale de la Central del Norte y en 2026 el boleto costaba desde unos 420 pesos comprado con anticipación. Desde la central de Querétaro, Flecha Azul y Flecha Amarilla cuestan alrededor de 60. Ya en Tequis, la camioneta a Ezequiel Montes, que pasa por los balnearios de la carretera, cuesta unos 20 pesos. Lo demás está en [cómo llegar](/guia-practica).',
        ],
      },
    ],
    sources: [
      { label: 'tequis.travel: Sitios históricos', url: TT('historicos_tequisquiapan') },
      { label: 'tequis.travel: Iglesias', url: TT('iglesias_tequisquiapan') },
      { label: 'tequis.travel: Arte (Jardín del Arte)', url: TT('arte_tequisquiapan') },
      { label: 'tequis.travel: Imperdibles (Centro Cultural)', url: TT('imperdibles_tequisquiapan') },
      { label: 'tequis.travel: Artesanías (Casa del Artesano)', url: TT('artesanias_tequisquiapan') },
      { label: 'tequis.travel: Mercados', url: TT('mercados_tequisquiapan') },
      { label: 'tequis.travel: Tips de viaje', url: TT('tips_de_viaje_tequisquiapan') },
      { label: 'tequis.travel: Fiestas y eventos', url: TT('fiestas_y_eventos_tequisquiapan') },
      { label: 'Granja Lavyn: visita guiada', url: 'https://lavyn.mx/pages/visita-guiada' },
      { label: 'queretaro.travel: Museo ¡México me encanta!', url: 'https://queretaro.travel/lugares/a-museum-to-fall-in-love-with-mexico/?lang=en' },
      { label: 'Balneario La Vega: contacto y horario', url: 'https://balneariolavega.mx/index.php/contactenos' },
      { label: 'adn40: Balneario La Vega (agosto 2026)', url: 'https://www.adn40.mx/mexico/2026-08-25/que-hacer-el-dia-del-abuelo-2026-el-balneario-de-tequisquiapan-queretaro-abre-los-7-dias-de-la-semana-y-es-ideal-para-ir-con-toda-la-familia/' },
      { label: 'Sala Vivé: visita y precios', url: 'https://salavive.mx/inicio-2/enoturismo/visita-sala-vive/' },
      { label: 'Sala Vivé: preguntas frecuentes', url: 'https://salavive.mx/inicio-2/preguntas-frecuentes/' },
      { label: 'Vinícola San Juanito: visitas guiadas', url: 'https://www.sanjuanito.com.mx/visitas-guiadas/' },
      { label: 'Viñedos Azteca: recorridos 2026 (PDF)', url: 'https://vinedosazteca.com/kowine/wp-content/uploads/2026/05/RECORRIDOS-2026.pdf' },
      { label: 'Posta: registro para las degustaciones del festival 2026', url: 'https://www.posta.com.mx/cdmx/festival-del-arte-queso-y-vino-2026-en-tequisquiapan/vl2190148' },
      { label: 'Al Minuto: Expo Cactus 2026', url: 'https://www.alminutonoticias.com.mx/tequisquiapan/tequisquiapan-florece-con-la-quinta-edicion-de-la-expo-cactus-y-otras-suculentas-2026/2026/07/29/' },
      { label: 'AlertaQro: Villa Navideña 2026 (noviembre 2026)', url: 'https://www.alertaqronoticias.com/2026/11/09/volvera-la-villa-navidena-a-tequisquiapan-en-diciembre/' },
      { label: 'Maya Comunicación: casetas México–Querétaro 2026', url: 'https://mayacomunicacion.com.mx/puente-dia-de-muertos-2026-clima-casetas-salir-cdmx/' },
      { label: 'ETN: boletos a Tequisquiapan', url: 'https://etn.com.mx/boletos-autobus/tequisquiapan.html' },
      { label: 'queretaro.travel: en autobús por Querétaro', url: 'https://queretaro.travel/lugares/enjoying-queretaro-by-bus/?lang=en' },
      { label: 'adn40: transporte a los balnearios (septiembre 2026)', url: 'https://www.adn40.mx/mexico/2026-09-09/el-balneario-de-tequisquiapan-queretaro-con-descuento-inapam-al-que-llegas-en-autobus-por-60-en-septiembre-2026-rutas-y-transporte-publico/' },
    ],
  },
  {
    slug: 'que-comer',
    title: 'Qué comer en Tequis',
    heroTitle: 'Qué comer en Tequis',
    lead: 'Barbacoa de borrego, gorditas de maíz quebrado, mole, pulque y dulces de leche.',
    description:
      'Qué comer en Tequisquiapan y dónde: barbacoa de borrego, gorditas de maíz quebrado, mole, pulque, dulces típicos, nieves y queso. Mercados y restaurantes.',
    searchSubtitle: 'Platillos típicos y dónde probarlos',
    photo: PHOTOS.feriaQuesoVino,
    photoAlt: 'Puestos de la Feria del Queso y el Vino',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-10',
    intro: [
      'La página de gastronomía de Turismo municipal recomienda la barbacoa de borrego, las gorditas de maíz quebrado, el mole, el pulque y los dulces típicos. Casi todo se encuentra en los mercados del centro y en unos cuantos restaurantes que lo tienen en su carta.',
      'Para elegir dónde comer, están todos los [restaurantes en Tequisquiapan](/lugares/gastronomia/restaurantes) en un mapa.',
    ],
    sections: [
      {
        id: 'barbacoa',
        title: 'Barbacoa de borrego',
        paragraphs: [
          'Turismo municipal la llama “la tan solicitada barbacoa de borrego”: se acompaña de consomé o menudo, y la distinguen sus tortillas azules hechas a mano.',
          '[El Atorón](https://restauranteelatoron.com.mx/), en Niños Héroes 49, a unos cinco minutos del centro, recomienda en su web la barbacoa y el consomé de borrego, y su lema es “¡La mejor barbacoa de Querétaro!”. Su carta tiene también chilaquiles, pancita de res y arrachera, y hay área de juegos para niños. En el centro, El Maravillas tiene en su carta tacos de barbacoa de borrego.',
        ],
        places: ['El Maravillas'],
      },
      {
        id: 'gorditas',
        title: 'Gorditas y mercados',
        paragraphs: [
          'Turismo municipal recomienda “una buena selección de gorditas de maíz quebrado”. Son también lo típico de Bernal, y la [guía de la Peña de Bernal](/guias/pena-de-bernal) explica cómo se hacen. En Tequis las sirve Gorditas Las Crucitas, de comida típica queretana, en la avenida Benito Juárez. Otras guías mencionan también las tostadas de maíz quebrado.',
          'Para comer lo de aquí sin gastar mucho, Turismo municipal recomienda el Mercado Guadalupano, en la calle Ezequiel Montes, para desayunar o comer platillos regionales “a excelentes precios”; abre todos los días de 9 a 18 h y se remodeló en 2026. El Parador Artesanal, junto a la terminal de autobuses, tiene atrás un corredor de antojitos mexicanos que abre sábados, domingos, puentes y festivos, de 10 a 18 h.',
        ],
        places: ['Mercado Guadalupano Municipal', 'Parador Artesanal Luis Donaldo Colosio'],
      },
      {
        id: 'mole',
        title: 'Mole y otros platillos',
        paragraphs: [
          'Para Turismo municipal, el mole es uno de los platillos más tradicionales de Tequis, sobre todo en fechas especiales, y la comunidad de La Trinidad es un referente internacional de este platillo. La Secretaría de Turismo del estado menciona el mole queretano; la página del municipio, el mole de guajolote.',
          "Si quieres aprender a hacerlo, K'puchinos da un taller de mole de unas cuatro horas, con visita al mercado y degustación. En temporada baja es de lunes a jueves y se reserva con una semana de anticipación.",
          'En la misma lista del municipio están las carnitas de cerdo y las enchiladas queretanas. Otras guías de viaje agregan el asado de puerco y las tortillas pintadas de colores.',
        ],
        places: ["K'puchinos Restaurant"],
      },
      {
        id: 'bebidas',
        title: 'Pulque y cerveza',
        paragraphs: [
          'Para beber, el municipio recomienda pulque, curado de tuna o un atole de frutas de temporada.',
          'Para cerveza artesanal, Bacha & Co, en la calle 20 de Noviembre, acompaña su pizza de masa árabe con más de 40 cervezas artesanales mexicanas, y el Ranchito TX, sobre la carretera a Querétaro, sirve cecina con cerveza artesanal junto a su granja. El vino tiene su propia [guía de viñedos y queserías](/guias/vinedos-y-quesos).',
        ],
      },
      {
        id: 'dulces',
        title: 'Dulces típicos',
        paragraphs: [
          'Turismo municipal pide no irse sin probar las charamuscas, los dulces de leche y las pepitorias. La guía de Pueblos Mágicos de BBVA suma los buñuelos blancos con miel de piloncillo y las galletas de piloncillo.',
          'Se venden en los puestos de dulces típicos de la plaza y en el Mercado Telésforo Trejo. Fuera del pueblo, sobre la carretera 120, Nuestra Rompopería es un taller artesanal de dulces típicos y rompope.',
        ],
        places: ['Mercado Artesanal Telésforo Trejo'],
        photo: PHOTOS.portalesPlaza,
        photoAlt: 'Los portales de la plaza de Tequisquiapan',
      },
      {
        id: 'nieves',
        title: 'Nieves y helados',
        paragraphs: [
          'En la [Plaza Miguel Hidalgo](/lugar/plaza-miguel-hidalgo), dice Turismo municipal, nadie debe perderse las nieves artesanales. En el centro, Las Charly Charly hace helados y paletas de fruta natural con menos azúcar y sin conservadores, y Dulce Fusión, en Tequis desde 2010, se presenta como pionera del helado de vino en México.',
          'Las fresas con crema son el “postre estrella” de [Rincón Mexicano](https://rinconmexicano.com.mx/menu/postres/), a unos pasos de la plaza, y la especialidad de Fresas & Cho, en la Plaza Relox.',
        ],
        places: ['Plaza Miguel Hidalgo'],
      },
      {
        id: 'queso',
        title: 'Queso y vino',
        paragraphs: [
          'Las queserías del centro se recorren a pie. Quesos Quiroz, en el Andador Morelos, se presenta como pionera del queso en Tequis desde 1972, y su restaurante, La Carreta, tiene platillos hechos con sus quesos, pequeñas catas en fin de semana y música en vivo sábado y domingo. ORIGENS tiene también un deli con quesos.',
          'Fuera del centro, el restaurante de la Cava de Quesos Bocanegra hace del queso su ingrediente estelar; cierra los martes. Cavas, queserías y viñedos están en la [guía de viñedos y queserías](/guias/vinedos-y-quesos).',
        ],
        places: ['ORIGENS', 'Cava de Quesos Bocanegra'],
        tip: 'Los horarios de mercados y restaurantes cambian, sobre todo entre semana y fuera de temporada. Antes de ir, confírmalos por teléfono o en su web.',
        photo: PHOTOS.cata,
        photoAlt: 'Cata de quesos y vino',
      },
    ],
    sources: [
      { label: 'tequis.travel: Gastronomía', url: TT('gastronomia_tequisquiapan') },
      { label: 'tequis.travel: Mercados', url: TT('mercados_tequisquiapan') },
      { label: 'tequis.travel: Sitios históricos (nieves y dulces de la plaza)', url: TT('historicos_tequisquiapan') },
      { label: 'tequis.travel: Taller de mole', url: TT('taller_de_mole_artesanal_tequisquiapan') },
      { label: 'tequis.travel: Quesos', url: TT('quesos_tequisquiapan') },
      { label: 'tequis.travel: Imperdibles (Ranchito TX, Nuestra Rompopería)', url: TT('imperdibles_tequisquiapan') },
      { label: 'tequis.travel: Restaurantes y cafeterías', url: TT('restaurantes_tequisquiapan') },
      { label: 'queretaro.travel: Tequisquiapan', url: 'https://queretaro.travel/lugares/tequisquiapan/?lang=en' },
      { label: 'Food & Pleasure: pueblos para comer en Querétaro (abril 2024)', url: 'https://foodandpleasure.com/pueblos-para-comer-en-queretaro/' },
      { label: 'BBVA Pueblos Mágicos: Tequisquiapan', url: 'https://www.bbva.mx/pueblos-magicos/estados/Queretaro/tequisquiapan.html' },
      { label: 'El Atorón', url: 'https://restauranteelatoron.com.mx/' },
      { label: 'El Maravillas', url: 'https://www.elmaravillas.com.mx' },
      { label: 'Rincón Mexicano: postres', url: 'https://rinconmexicano.com.mx/menu/postres/' },
      { label: 'Cava de Quesos Bocanegra', url: 'https://www.cavabocanegra.com/' },
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
  {
    slug: 'alrededores',
    title: 'Qué visitar cerca de Tequis',
    heroTitle: 'Cerca de Tequis',
    lead: 'Pueblos Mágicos, jardines de cactáceas, ciudades patrimonio y la Sierra Gorda, con lo que se tarda en llegar.',
    description:
      'Qué visitar cerca de Tequisquiapan: Ezequiel Montes, Cadereyta, San Juan del Río, Querétaro, la Sierra Gorda y más. Distancias, qué ver y cuáles son Pueblo Mágico.',
    searchSubtitle: 'Excursiones de medio día, de un día y con noche',
    photo: PHOTOS.cadereytaPlaza,
    photoAlt: 'La plaza principal de Cadereyta de Montes',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-10',
    intro: [
      'Alrededor de Tequis hay pueblos y ciudades para todo tipo de excursión. De medio día: Ezequiel Montes y sus viñedos, la Peña de Bernal, Cadereyta y San Juan del Río. De un día: la ciudad de Querétaro, Colón y Amealco. Con al menos una noche: San Miguel de Allende, San Joaquín, la Sierra Gorda y Xilitla.',
      'Las distancias y los tiempos los calculamos con OpenStreetMap desde la Plaza Miguel Hidalgo, en auto y sin tráfico, así que en la práctica suele tomar un poco más. En la Sierra Gorda, por las curvas, bastante más.',
    ],
    sections: [
      {
        id: 'pena-de-bernal',
        title: 'La Peña de Bernal',
        paragraphs: [
          'Es la excursión más cercana y la más conocida: unos 30 km, unos 40 minutos. Bernal es Pueblo Mágico y pertenece al municipio de Ezequiel Montes.',
          'Cómo subir, a qué hora ir y qué comer abajo está en la [guía de la Peña de Bernal](/guias/pena-de-bernal).',
        ],
        photo: PHOTOS.penaBernal,
        photoAlt: 'La Peña de Bernal',
      },
      {
        id: 'ezequiel-montes',
        title: 'Ezequiel Montes',
        paragraphs: [
          'A unos 18 km, unos 20 minutos. Es el municipio vecino, entre los valles centrales y el semidesierto, y concentra bodegas de la Ruta Arte, Queso y Vino como Finca Sala Vivé by Freixenet, De Cote, Viñedos Azteca y Bodegas Vaivén. Están en la [guía de viñedos y queserías](/guias/vinedos-y-quesos).',
          'Fuera de los viñedos, Villa Progreso tiene capillas otomíes y talleres de ixtle y cerámica.',
          'No es Pueblo Mágico: en este municipio, el nombramiento es solo de Bernal.',
        ],
        photo: PHOTOS.ezequielMontesParroquia,
        photoAlt: 'La parroquia de San Sebastián Mártir, en Ezequiel Montes',
      },
      {
        id: 'san-juan-del-rio',
        title: 'San Juan del Río',
        paragraphs: [
          'A unos 23 km, unos 27 minutos: es la ciudad por la que se pasa al venir de la Ciudad de México. No es Pueblo Mágico.',
          'Según el INAH, su centro histórico es parte del Camino Real de Tierra Adentro, Patrimonio de la Humanidad desde 2010. Para ver: el Puente de la Historia (1710-1711), el templo de Santo Domingo, el Jesusito de la Portería, el Portal del Diezmo y la Casa de las Diligencias.',
          'Ahí estará la estación más cercana del tren México–Querétaro, que está en construcción (más en la [guía práctica](/guia-practica#tren)).',
        ],
        photo: PHOTOS.sanJuanDelRio,
        photoAlt: 'El templo de San Juan de Dios, en San Juan del Río',
      },
      {
        id: 'cadereyta',
        title: 'Cadereyta de Montes',
        paragraphs: [
          'Pueblo Mágico desde 2011, a unos 29 km, unos 38 minutos. Lo que lo distingue son sus dos colecciones de plantas del semidesierto.',
          'La Quinta Fernando Schmoll es un vivero que fundaron Fernando Schmoll y Carolina Wagner, hoy en manos de la familia, con unas 4,500 variedades de cactáceas, suculentas y euforbias y visita guiada. El Jardín Botánico Regional, a unos 42 minutos de Tequis, tiene 15 hectáreas, 1,200 m² de invernaderos y colecciones de cactáceas, agaváceas y fabáceas.',
          'En el municipio están también la parroquia de San Pedro y San Pablo, la presa Zimapán con la isla Tzibanzá, el mármol de Vizarrón y viñedos. La zona arqueológica de Toluquilla está cerrada desde el 10 de octubre de 2025 “hasta nuevo aviso”, según el INAH.',
        ],
        tip: 'Las guías publicadas no coinciden en los horarios de los dos jardines: confírmalos antes de ir.',
      },
      {
        id: 'colon',
        title: 'Colón y Soriano',
        paragraphs: [
          'A unos 42 km, unos 47 minutos. La Basílica de Nuestra Señora de los Dolores de Soriano, construida entre 1880 y 1912, es santuario de peregrinación y tiene al lado un museo comunitario. Sus fiestas son el Viernes de Dolores y el 15 de septiembre.',
          'Colón no es Pueblo Mágico. En este municipio está también el aeropuerto de Querétaro.',
        ],
      },
      {
        id: 'amealco',
        title: 'Amealco de Bonfil',
        paragraphs: [
          'Pueblo Mágico desde 2018, a unos 61 km, una hora y diez minutos. Es la tierra de la muñeca otomí: la Lele de Santiago Mexquititlán y la Dönxu de San Ildefonso Tultepec, las dos con Indicación Geográfica del IMPI.',
          'Tiene un Museo de la Muñeca y un Festival Nacional de la Muñeca; confirma sus fechas antes de ir.',
        ],
      },
      {
        id: 'queretaro',
        title: 'Santiago de Querétaro',
        paragraphs: [
          'La capital del estado, a unos 62 km, una hora. Su Zona de Monumentos Históricos es Patrimonio de la Humanidad desde el 7 de diciembre de 1996: unos 1,400 monumentos en 4 km², según el INAH.',
          'El acueducto, del siglo XVIII, tiene 74 arcos, unos 1,280 m de largo y más de 23 m de alto. En el centro: el Palacio de Gobierno (Casa de la Corregidora), la Casa de la Marquesa, los ex conventos de San Agustín y Santa Clara, la Fuente de Neptuno y el Jardín Zenea.',
        ],
        photo: PHOTOS.acueductoQueretaro,
        photoAlt: 'El acueducto de Querétaro',
      },
      {
        id: 'san-joaquin',
        title: 'San Joaquín',
        paragraphs: [
          'Pueblo Mágico desde 2015, a unos 86 km. El cálculo da casi dos horas, pero por las curvas de la sierra suele ser más. Se llega por la carretera Vizarrón–San Joaquín, que sale de la federal 120.',
          'Campo Alegre es una zona boscosa con palapas y asadores. A principios de abril es el Concurso Nacional de Huapango: en 1982, Bellas Artes le dio a San Joaquín el título de “Catedral del Huapango”.',
          'La zona arqueológica de Ranas, con más de 180 estructuras en lo alto de dos cerros, está cerrada desde el 10 de octubre de 2025, según el INAH. Confirma antes si ya reabrió.',
        ],
      },
      {
        id: 'sierra-gorda',
        title: 'Sierra Gorda y Jalpan',
        paragraphs: [
          'La Reserva de la Biosfera Sierra Gorda, decretada en 1997, cubre 383,567 hectáreas, el 32% del estado, en Arroyo Seco, Jalpan, Landa, Peñamiller y Pinal de Amoles. Se llega por la federal 120, la carretera San Juan del Río–Xilitla que pasa por el entronque de Tequis; en temporada de lluvias hay derrumbes a la altura de Pinal de Amoles.',
          'Pinal de Amoles (unos 114 km, algo más de dos horas sin tráfico) es Pueblo Mágico desde 2023. Jalpan de Serra (unos 153 km, casi tres horas) lo es desde 2010; su misión se construyó entre 1751 y 1758 y su presa es sitio Ramsar desde 2004.',
          'Las misiones franciscanas de la Sierra Gorda (Jalpan, Tancoyol, Landa, Tilaco y Concá) son Patrimonio de la Humanidad desde 2003.',
          'Más cerca, en Peñamiller (unos 87 km, casi dos horas), el Cañón del Paraíso tiene paredes de mármol negro de unos 700 m con el río Extoraz adentro, y es lugar para hacer rapel. Peñamiller no es Pueblo Mágico.',
        ],
        tip: 'Es viaje para quedarse al menos una noche: los tiempos del cálculo no cuentan las curvas de la sierra.',
      },
      {
        id: 'san-miguel-de-allende',
        title: 'San Miguel de Allende',
        paragraphs: [
          'Ya en Guanajuato, a unos 115 km, casi dos horas. No es Pueblo Mágico, pero es Patrimonio de la Humanidad desde el 7 de julio de 2008, junto con el Santuario de Jesús Nazareno de Atotonilco.',
          'Para ver: la parroquia de San Miguel Arcángel, el Oratorio de San Felipe Neri, el Centro Cultural El Nigromante, el Museo Casa de Allende y el Teatro Ángela Peralta. A unos 14 km, el Santuario de Atotonilco (1740-1776), con murales de Martínez de Pocasangre, es al que llaman la “Capilla Sixtina mexicana”.',
          'Por la distancia, se disfruta más en un viaje de varios días que en una excursión desde Tequis.',
        ],
      },
      {
        id: 'xilitla',
        title: 'Xilitla y Las Pozas',
        paragraphs: [
          'Xilitla, en San Luis Potosí, es Pueblo Mágico desde 2011 y está a unos 239 km, más de cuatro horas y media sin tráfico: es viaje de al menos una noche, no una excursión de un día.',
          'Lo que se va a ver es el [Jardín Escultórico Edward James – Las Pozas](https://laspozasxilitla.org.mx): estructuras que se empezaron en 1962, con obras hasta 1984, abierto al público desde 1991 y Monumento Artístico desde 2012.',
          'En 2026 cerraba los martes y pedía reservación previa: confírmalo en su sitio antes de ir.',
        ],
      },
      {
        id: 'pueblos-magicos',
        title: 'Pueblos Mágicos',
        paragraphs: [
          'Querétaro tiene siete: Bernal, Jalpan de Serra (2010), Cadereyta (2011), Tequisquiapan (2012), San Joaquín (2015), Amealco (2018) y Pinal de Amoles (2023). La página de la Secretaría de Turismo federal todavía lista seis, sin Pinal de Amoles.',
          'Ezequiel Montes, San Juan del Río, Colón y Peñamiller no son Pueblo Mágico.',
        ],
        tip: 'Los nombramientos se revisan: en julio de 2026 ninguno de los siete quedó como “consolidado” en la evaluación de la Secretaría de Turismo, que en noviembre de 2026 define si alguno lo pierde.',
      },
    ],
    sources: [
      { label: 'Distancias: cálculo propio con OpenStreetMap (OSRM)', url: 'https://www.openstreetmap.org/' },
      { label: 'Secretaría de Turismo: Pueblos Mágicos', url: 'https://www.gob.mx/sectur/articulos/pueblos-magicos-206528' },
      { label: 'Publimetro: evaluación de los Pueblos Mágicos de Querétaro (julio de 2026)', url: 'https://www.publimetro.com.mx/queretaro/2026/07/31/queretaro-no-logro-tener-pueblos-magicos-consolidados-en-noviembre-se-define-si-pierde-nombramientos/' },
      { label: 'INAH: cierre de Ranas y Toluquilla (Boletín 529, octubre de 2025)', url: 'https://inah.gob.mx/images/boletines/2025/529/Boletin%20529.pdf' },
      { label: 'N+: el Pueblo Mágico es Bernal, no todo Ezequiel Montes', url: 'https://www.nmas.com.mx/queretaro/sociedad/pueblo-magico-corresponde-a-pena-de-bernal-y-no-a-todo-ezequiel-montes-esto-sabemos/' },
      { label: 'queretaro.travel: Ezequiel Montes', url: 'https://queretaro.travel/lugares/ezequiel-montes/?lang=en' },
      { label: 'INAH: San Juan del Río', url: 'https://lugares.inah.gob.mx/en/node/4812' },
      { label: 'queretaro.travel: Cadereyta de Montes', url: 'https://queretaro.travel/lugares/cadereyta-de-montes/?lang=en' },
      { label: 'México Desconocido: Quinta Fernando Schmoll', url: 'https://escapadas.mexicodesconocido.com.mx/atractivos/invernaderos-quinta-fernando-schmoll/' },
      { label: 'BGCI: Jardín Botánico Regional de Cadereyta', url: 'https://tools.bgci.org/garden.php?id=2169' },
      { label: 'queretaro.travel: Colón', url: 'https://queretaro.travel/lugares/colon-captivating-and-classic/?lang=en' },
      { label: 'El Financiero: Amealco, capital de la muñeca otomí', url: 'https://www.elfinanciero.com.mx/bajio/amealco-capital-de-la-muneca-otomi/' },
      { label: 'Uno TV: la muñeca Lele y el IMPI (febrero de 2026)', url: 'https://www.unotv.com/cultura/impi-reconoce-a-la-muneca-lele-como-patrimonio-de-amealco-queretaro/' },
      { label: 'México Desconocido: Festival Nacional de la Muñeca', url: 'https://www.mexicodesconocido.com.mx/festival-nacional-munecas-artesanales-amealco.html' },
      { label: 'INAH: Zona de Monumentos de Querétaro', url: 'https://lugares.inah.gob.mx/en/node/6144' },
      { label: 'México Desconocido: el acueducto de Querétaro', url: 'https://www.mexicodesconocido.com.mx/acueducto-de-queretaro.html' },
      { label: 'El Financiero: San Joaquín, Pueblo Mágico (septiembre de 2015)', url: 'https://www.elfinanciero.com.mx/bajio/san-joaquin-el-nuevo-pueblo-magico-del-estado-de-queretaro/' },
      { label: 'queretaro.travel: San Joaquín', url: 'https://queretaro.travel/fichas/san-joaquin-sierra-gorda-queretaro/?lang=en' },
      { label: 'queretaro.travel: la Catedral del Huapango', url: 'https://queretaro.travel/eventos/san-joaquin-the-cathedral-of-huapango/?lang=en' },
      { label: 'INAH: zona arqueológica de Ranas', url: 'https://lugares.inah.gob.mx/en/node/4355' },
      { label: 'DOF: decreto de la Reserva de la Biosfera Sierra Gorda (1997)', url: 'https://dof.gob.mx/nota_detalle_popup.php?codigo=2054567' },
      { label: 'México Desconocido: misiones de la Sierra Gorda', url: 'https://www.mexicodesconocido.com.mx/misiones-de-la-sierra-gorda-patimonio-cultural-de-la-humanidad.html' },
      { label: 'Jalpan de Serra: sitio de turismo', url: 'https://jalpan.travel/en/' },
      { label: 'Expansión: 45 nuevos Pueblos Mágicos (junio de 2023)', url: 'https://expansion.mx/empresas/2023/06/26/45-nuevos-pueblos-magicos' },
      { label: 'N+: derrumbe en la carretera 120 en Pinal de Amoles', url: 'https://www.nmas.com.mx/queretaro/carretera-federal-120-san-juan-del-rio-xilitla-cerrada-por-derrumbe-en-pinal-de-amoles' },
      { label: 'queretaro.travel: Peñamiller', url: 'https://queretaro.travel/lugares/penamiller/?lang=en' },
      { label: 'Ciudades Patrimonio: San Miguel de Allende', url: 'https://ciudadespatrimonio.mx/san-miguel-de-allende/?lang=en' },
      { label: 'National Geographic: el Santuario de Atotonilco (agosto de 2025)', url: 'https://www.nationalgeographicla.com/viajes/2025/08/capilla-sixtina-mexicana-donde-esta-y-cual-es-la-historia-de-este-sitio-reconocido-por-la-unesco' },
      { label: 'Las Pozas: sitio oficial', url: 'https://laspozasxilitla.org.mx' },
      { label: 'Gobierno de San Luis Potosí: Xilitla (infografía)', url: 'https://cefimslp.gob.mx/infografias/2023/57-Xilitla.pdf' },
    ],
  },
  {
    slug: 'clima',
    title: 'Clima en Tequisquiapan por mes',
    heroTitle: 'El clima por mes',
    lead: 'Cuánto calor hace, cuándo llueve y qué temporada conviene para tu viaje.',
    description:
      'Clima en Tequisquiapan por mes: temperatura máxima y mínima, lluvia y días con lluvia según el SMN, qué llevar y cuándo conviene ir según las fiestas del año.',
    searchSubtitle: 'Temperatura y lluvia de enero a diciembre',
    photo: PHOTOS.parroquiaAtardecer,
    photoAlt: 'La parroquia de Tequisquiapan al atardecer',
    updated: 'noviembre de 2026',
    updatedISO: '2026-11-10',
    intro: [
      'Tequis tiene un clima templado y seco: días tibios casi todo el año, noches frescas y casi toda la lluvia entre junio y septiembre. En promedio caen unos 471 mm al año, repartidos en unos 53 días, y la temperatura media anual es de 17.9 °C.',
      'Las cifras de esta guía son la normal climatológica 1971-2000 del Servicio Meteorológico Nacional (SMN) para la estación 22025 Presa Centenario, dentro del municipio. Es la única normal publicada de Tequisquiapan: ninguna estación del municipio tiene la de 1991-2020. Son promedios de 27 a 30 años de datos por mes, no un pronóstico.',
    ],
    sections: [
      {
        id: 'invierno',
        title: 'Diciembre a febrero',
        paragraphs: [
          'Días templados y noches frías. Diciembre tiene una máxima media de 22.4 °C y una mínima de 5.6 °C; enero, el mes más frío, 22.3 °C y 4.7 °C; febrero, 24.2 °C y 5.9 °C.',
          'Casi no llueve: 7 mm en diciembre, 12 mm en enero y menos de 6 mm en febrero, el mes más seco del año. A veces hiela: en esa estación se registraron −6 °C en enero de 1975 y en diciembre de 1989, y −6.5 °C en febrero de 1976.',
          'En diciembre llega la Villa Navideña, que el municipio anuncia con “la emoción de la nieve”: es parte de la feria, no una nevada.',
        ],
        tip: 'Lleva chamarra: de día está tibio, pero en la noche y la madrugada la temperatura baja a unos 5 °C.',
        photo: PHOTOS.portalesPlaza,
        photoAlt: 'Los portales de la plaza de Tequisquiapan',
      },
      {
        id: 'primavera',
        title: 'Marzo a mayo',
        paragraphs: [
          'Lo más seco y caluroso del año. Marzo tiene una máxima media de 27.1 °C y una mínima de 8.5 °C; abril, 28.9 °C y 11.3 °C; mayo, el mes más caluroso, 29.8 °C de máxima y 21.7 °C de media.',
          'Llueve poco: 7.5 mm en marzo y 17 mm en abril. En mayo empiezan las primeras lluvias, con 39 mm en unos seis días. El récord de calor de la estación, 39 °C, fue en abril de 2000.',
          'En marzo es el Festival Internacional del Artesano, en la Plaza Miguel Hidalgo, y en mayo empieza el Festival Internacional del Arte, Queso y Vino.',
        ],
        photo: PHOTOS.feriaQuesoVino,
        photoAlt: 'La Feria del Queso y el Vino en Tequisquiapan',
      },
      {
        id: 'lluvias',
        title: 'Junio a septiembre',
        paragraphs: [
          'Es la temporada de lluvias. Junio tiene 27.7 °C de máxima y 14.5 °C de mínima, las noches más templadas del año, y 83 mm en unos nueve días con lluvia. Julio es el mes más lluvioso: 100 mm en unos nueve días, con 26.4 °C y 13.9 °C.',
          'Agosto tiene 26.2 °C y 13.7 °C, con 82 mm en unos siete días; septiembre, 25.2 °C y 13.1 °C, con 75 mm en unos siete días.',
          'Coincide con las vendimias de los viñedos de la región (están en la [guía de viñedos y queserías](/guias/vinedos-y-quesos)).',
          'En septiembre de 2021 y de 2025, lluvias extraordinarias en la cuenca desbordaron la Presa Centenario y el río San Juan. No pasa cada año; lo que conviene saber está en la [guía práctica](/guia-practica#inundaciones).',
        ],
        photo: PHOTOS.vinedosDeCote,
        photoAlt: 'Viñedos cerca de Tequisquiapan',
      },
      {
        id: 'otono',
        title: 'Octubre y noviembre',
        paragraphs: [
          'Se acaban las lluvias. Octubre tiene 24.1 °C de máxima y 10.2 °C de mínima, con 34 mm; noviembre, 23.7 °C y 7.5 °C, con 8.5 mm.',
          'En octubre se celebra el aniversario del nombramiento de Pueblo Mágico, que Tequis recibió el 17 de octubre de 2012, y entre fin de octubre y noviembre, Tejedores de Luz llena el pueblo de figuras de mimbre.',
        ],
        photo: PHOTOS.artesanias,
        photoAlt: 'Artesanías en Tequisquiapan',
      },
      {
        id: 'cuando-ir',
        title: 'Cuándo conviene ir',
        paragraphs: [
          'Depende de lo que busques. Para caminar el pueblo con cielo seco, de noviembre a abril, con máximas de 22 a 29 °C y noches frías en invierno. De junio a septiembre las noches son las más templadas, pero es la temporada de lluvias. Mayo es el mes más caluroso.',
          'El portal de turismo del municipio lo resume así: la temporada seca va de noviembre a abril, hace más calor entre abril y junio, y las lluvias, moderadas, caen entre junio y octubre.',
          'Por las fiestas: marzo para el Festival del Artesano; mayo para el Festival del Arte, Queso y Vino; octubre y noviembre para el aniversario del Pueblo Mágico y Tejedores de Luz, y diciembre para la Villa Navideña. Las fechas de cada año están en el [calendario](/eventos).',
        ],
      },
      {
        id: 'hoy',
        title: 'El clima de hoy',
        paragraphs: [
          'Para saber qué tiempo hará hoy o el fin de semana, consulta el [pronóstico por municipio del SMN](https://smn.conagua.gob.mx/es/pronostico-del-tiempo-por-municipios). Los datos de esta guía son promedios, no un pronóstico.',
        ],
      },
      {
        id: 'san-juan-del-rio',
        title: 'Una normal más reciente',
        paragraphs: [
          'La estación con normal 1991-2020 más cercana es la 22022 San Juan del Río, a unos 20 km al suroeste y a 1,933 m de altitud. Ahí los días son 1 o 2 °C más cálidos que en la Presa Centenario: la máxima media anual es de 27.3 °C y la mínima, de 10.8 °C.',
          'Ojo con su lluvia: la normal oficial dice 628 mm al año, pero trae un error de captura, febrero de 2017 con 3,547.7 mm en un solo mes. Por eso febrero aparece con 135.9 mm. Sin ese dato, febrero queda en unos 14 mm y el año en unos 506 mm, según nuestro cálculo.',
        ],
      },
    ],
    sources: [
      { label: 'SMN: normal climatológica 1971-2000, estación 22025 Presa Centenario', url: 'https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales7100/qro/nor7100_22025.txt' },
      { label: 'SMN: normal climatológica 1991-2020, estación 22022 San Juan del Río', url: 'https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/qro/nor9120_22022.txt' },
      { label: 'SMN: estadística mensual de la estación 22022 (febrero de 2017)', url: 'https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Mensuales/qro/mes22022.txt' },
      { label: 'SMN: pronóstico del tiempo por municipios', url: 'https://smn.conagua.gob.mx/es/pronostico-del-tiempo-por-municipios' },
      { label: 'tequis.travel: Tips de viaje', url: TT('tips_de_viaje_tequisquiapan') },
      { label: 'tequis.travel: Fiestas y eventos', url: TT('fiestas_y_eventos_tequisquiapan') },
      { label: 'Expansión: los nuevos Pueblos Mágicos (octubre de 2012)', url: 'https://expansion.mx/salud/2012/10/17/huichapan-y-tequisquiapan-los-dos-nuevos-pueblos-magicos-de-mexico' },
    ],
  },
];

/** Las guías en el idioma pedido (mismo orden en los dos: la posición las empareja). */
export function guidesFor(lang: Lang): Guide[] {
  return lang === 'en' ? GUIDES_EN : GUIDES;
}

/** Una guía por su slug en español (el de la carpeta interna), en el idioma pedido. */
export function getGuide(esSlug: string, lang: Lang = 'es'): Guide | undefined {
  const i = GUIDES.findIndex((g) => g.slug === esSlug);
  return i === -1 ? undefined : guidesFor(lang)[i];
}


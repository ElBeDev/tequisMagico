// Páginas por tipo de lugar: /lugares/experiencias/balnearios, /en/places/experiences/hot-springs.
// Existen porque la gente busca por tipo ("balnearios tequisquiapan", "viñedos tequisquiapan",
// "restaurantes en tequisquiapan"; Search Console, nov 2026) y el filtro ?tipo= de las categorías
// tiene la categoría como canónica, así que Google no indexa esos listados.
//
// Una página solo se publica con MIN_PLACES lugares o más (con uno sería casi vacía): las de abajo
// que hoy no llegan (mariscos, dulcerías, spas…) aparecen solas cuando se den de alta más lugares
// en el panel. Los textos solo dicen qué hay en el listado; no agregues datos sin fuente.
// Este archivo no importa nada en tiempo de ejecución (i18n.ts lo usa para traducir las rutas).
import type { Lang } from './i18n';
import type { PlaceCategory } from './data';

export const MIN_PLACES = 2;

export type TypePage = {
  /** Segmento en español (`balnearios`) y en inglés (`hot-springs`). */
  slug: string;
  slugEn: string;
  category: PlaceCategory;
  /** Subcategorías (clave en español) que entran. La primera es la que enlaza el menú. */
  keys: string[];
  /** Páginas por necesidad ("hoteles con alberca"): también entran los lugares de la categoría
   *  con alguna de estas amenidades o etiquetas (en español, vocabulario de
   *  docs/datos/: Alberca, Pet Friendly, Centro…). Una página con `keys: []` es solo por necesidad
   *  y no la enlaza el menú. Se marcan solo con fuente (la web del lugar o la investigación). */
  features?: string[];
  label: Record<Lang, string>;
  title: Record<Lang, string>;
  description: Record<Lang, (n: number) => string>;
  intro: Record<Lang, string>;
};

export const TYPE_PAGES: TypePage[] = [
  {
    slug: 'vinedos',
    slugEn: 'wineries',
    category: 'experiencias',
    keys: ['Viñedo'],
    label: { es: 'Viñedos', en: 'Wineries' },
    title: { es: 'Viñedos cerca de Tequisquiapan: recorridos y catas', en: 'Wineries near Tequisquiapan: tours and tastings' },
    description: {
      es: (n) => `${n} viñedos en Tequisquiapan y Ezequiel Montes, en la Ruta del Vino y Queso de Querétaro: recorridos, catas, horarios y cómo llegar.`,
      en: (n) => `${n} wineries in and around Tequisquiapan on Querétaro's Wine and Cheese Route: tours, tastings, opening hours and directions.`,
    },
    intro: {
      es: 'Los viñedos de la Ruta del Vino y Queso, en Tequisquiapan y Ezequiel Montes, rumbo a Bernal.',
      en: 'The wineries of the Wine and Cheese Route, in Tequisquiapan and Ezequiel Montes, on the way to Bernal.',
    },
  },
  {
    slug: 'queserias',
    slugEn: 'cheese-makers',
    category: 'experiencias',
    keys: ['Quesería'],
    label: { es: 'Queserías', en: 'Cheese makers' },
    title: { es: 'Queserías en Tequisquiapan: cavas y recorridos', en: 'Cheese makers in Tequisquiapan: cellars and tours' },
    description: {
      es: (n) => `${n} queserías y cavas de queso en Tequisquiapan y alrededores, con recorrido y degustación: horarios y cómo llegar.`,
      en: (n) => `${n} cheese makers and cheese cellars around Tequisquiapan with tours and tastings: opening hours and directions.`,
    },
    intro: {
      es: 'Cavas y ranchos queseros de la Ruta del Vino y Queso, con recorrido y degustación.',
      en: 'Cheese cellars and dairy farms on the Wine and Cheese Route, with tours and tastings.',
    },
  },
  {
    slug: 'balnearios',
    slugEn: 'hot-springs',
    category: 'experiencias',
    keys: ['Balneario'],
    label: { es: 'Balnearios', en: 'Hot springs and water parks' },
    title: { es: 'Balnearios en Tequisquiapan', en: 'Hot springs and water parks in Tequisquiapan' },
    description: {
      es: (n) => `${n} balnearios y parques acuáticos en Tequisquiapan, Querétaro: precios, días de apertura, camping y cómo llegar.`,
      en: (n) => `${n} water parks and hot springs in Tequisquiapan, Querétaro: prices, opening days, camping and directions.`,
    },
    intro: {
      es: 'Balnearios y parques acuáticos del municipio. Precios de 2026 en la [guía de balnearios](/guias/balnearios); confírmalos antes de ir, cambian con la temporada.',
      en: 'Water parks and spring-fed pools in the municipality. 2026 prices are in the [hot springs guide](/guias/balnearios); check them before you go, they change with the season.',
    },
  },
  {
    slug: 'spas',
    slugEn: 'spas',
    category: 'experiencias',
    keys: ['Spa'],
    label: { es: 'Spas', en: 'Spas' },
    title: { es: 'Spas en Tequisquiapan', en: 'Spas in Tequisquiapan' },
    description: {
      es: (n) => `${n} spas en Tequisquiapan, Querétaro: ubicación, contacto y cómo llegar.`,
      en: (n) => `${n} spas in Tequisquiapan, Querétaro: location, contact and directions.`,
    },
    intro: { es: 'Spas del pueblo y sus alrededores.', en: 'Spas in and around town.' },
  },
  {
    slug: 'restaurantes',
    slugEn: 'restaurants',
    category: 'gastronomia',
    keys: ['Restaurante', 'Mariscos', 'Pizzería', 'Parrilla'],
    label: { es: 'Restaurantes', en: 'Restaurants' },
    title: { es: 'Restaurantes en Tequisquiapan: dónde comer', en: 'Restaurants in Tequisquiapan: where to eat' },
    description: {
      es: (n) => `${n} restaurantes en Tequisquiapan: cocina queretana, mexicana e internacional, mariscos y pizza, casi todos en el centro, con mapa y cómo llegar.`,
      en: (n) => `${n} restaurants in Tequisquiapan: Querétaro, Mexican and international food, seafood and pizza, most of them downtown, with a map and directions.`,
    },
    intro: {
      es: 'Dónde comer en Tequis: restaurantes del centro y de los alrededores.',
      en: 'Where to eat in Tequis: restaurants in the town center and nearby.',
    },
  },
  {
    slug: 'mariscos',
    slugEn: 'seafood',
    category: 'gastronomia',
    keys: ['Mariscos'],
    features: ['Mariscos'],
    label: { es: 'Mariscos', en: 'Seafood' },
    title: { es: 'Mariscos en Tequisquiapan', en: 'Seafood restaurants in Tequisquiapan' },
    description: {
      es: (n) => `${n} marisquerías en Tequisquiapan, Querétaro, con mapa y cómo llegar.`,
      en: (n) => `${n} seafood restaurants in Tequisquiapan, Querétaro, with a map and directions.`,
    },
    intro: { es: 'Dónde comer mariscos en Tequis.', en: 'Where to eat seafood in Tequis.' },
  },
  {
    slug: 'cafeterias',
    slugEn: 'cafes',
    category: 'gastronomia',
    keys: ['Cafetería'],
    label: { es: 'Cafeterías', en: 'Cafés' },
    title: { es: 'Cafeterías en Tequisquiapan', en: 'Cafés in Tequisquiapan' },
    description: {
      es: (n) => `${n} cafeterías en Tequisquiapan, Querétaro, con mapa y cómo llegar.`,
      en: (n) => `${n} cafés in Tequisquiapan, Querétaro, with a map and directions.`,
    },
    intro: { es: 'Dónde tomar un café en Tequis.', en: 'Where to get coffee in Tequis.' },
  },
  {
    slug: 'bares',
    slugEn: 'bars',
    category: 'gastronomia',
    keys: ['Bar', 'Wine Bar'],
    label: { es: 'Bares', en: 'Bars' },
    title: { es: 'Bares y bares de vino en Tequisquiapan', en: 'Bars and wine bars in Tequisquiapan' },
    description: {
      es: (n) => `${n} bares y bares de vino en Tequisquiapan, Querétaro, con mapa y cómo llegar.`,
      en: (n) => `${n} bars and wine bars in Tequisquiapan, Querétaro, with a map and directions.`,
    },
    intro: { es: 'Bares y bares de vino para la noche en Tequis.', en: 'Bars and wine bars for a night out in Tequis.' },
  },
  {
    slug: 'mercados',
    slugEn: 'markets',
    category: 'compras',
    keys: ['Mercado'],
    label: { es: 'Mercados', en: 'Markets' },
    title: { es: 'Mercados de artesanías en Tequisquiapan', en: 'Craft markets in Tequisquiapan' },
    description: {
      es: (n) => `${n} mercados de Tequisquiapan: artesanías, cestería, comida regional y el Parador Artesanal, con horarios y cómo llegar.`,
      en: (n) => `${n} markets in Tequisquiapan: crafts, basketry, regional food and the Parador Artesanal, with opening hours and directions.`,
    },
    intro: {
      es: 'Los mercados de artesanías y el mercado municipal, casi todos a unas cuadras de la plaza. Lleva efectivo.',
      en: 'The craft markets and the municipal market, most of them a few blocks from the main square. Bring cash.',
    },
  },
  {
    slug: 'artesanias',
    slugEn: 'crafts',
    category: 'compras',
    keys: ['Artesanías'],
    label: { es: 'Artesanías', en: 'Crafts' },
    title: { es: 'Artesanías en Tequisquiapan: cestería y mimbre', en: 'Crafts in Tequisquiapan: basketry and wicker' },
    description: {
      es: (n) => `${n} tiendas de artesanías en Tequisquiapan: cestería, mimbre y artesanía otomí, con mapa y cómo llegar.`,
      en: (n) => `${n} craft shops in Tequisquiapan: basketry, wicker and Otomí crafts, with a map and directions.`,
    },
    intro: {
      es: 'Tiendas de cestería, mimbre y artesanía, el oficio por el que se conoce a Tequis.',
      en: 'Basketry, wicker and craft shops, the trade Tequis is known for.',
    },
  },
  {
    slug: 'dulcerias',
    slugEn: 'sweet-shops',
    category: 'compras',
    keys: ['Dulcería'],
    label: { es: 'Dulcerías', en: 'Sweet shops' },
    title: { es: 'Dulcerías y dulces típicos en Tequisquiapan', en: 'Traditional sweet shops in Tequisquiapan' },
    description: {
      es: (n) => `${n} dulcerías de dulces típicos en Tequisquiapan, Querétaro, con mapa y cómo llegar.`,
      en: (n) => `${n} traditional sweet shops in Tequisquiapan, Querétaro, with a map and directions.`,
    },
    intro: { es: 'Dónde comprar dulces típicos en Tequis.', en: 'Where to buy traditional Mexican sweets in Tequis.' },
  },
  {
    slug: 'hoteles-boutique',
    slugEn: 'boutique-hotels',
    category: 'hospedaje',
    keys: ['Hotel Boutique'],
    label: { es: 'Hoteles boutique', en: 'Boutique hotels' },
    title: { es: 'Hoteles boutique en Tequisquiapan', en: 'Boutique hotels in Tequisquiapan' },
    description: {
      es: (n) => `${n} hoteles boutique en Tequisquiapan, Querétaro, en el centro y en las afueras, con mapa y web.`,
      en: (n) => `${n} boutique hotels in Tequisquiapan, Querétaro, downtown and on the outskirts, with a map and website.`,
    },
    intro: { es: 'Hoteles boutique del pueblo y de las afueras.', en: 'Boutique hotels in town and on the outskirts.' },
  },  {
    slug: 'pizzerias',
    slugEn: 'pizza',
    category: 'gastronomia',
    keys: ['Pizzería'],
    features: ['Pizza'],
    label: { es: 'Pizza', en: 'Pizza' },
    title: { es: 'Pizza en Tequisquiapan: dónde comer', en: 'Pizza in Tequisquiapan: where to eat' },
    description: {
      es: (n) => `${n} lugares para comer pizza en Tequisquiapan, Querétaro, con mapa y cómo llegar.`,
      en: (n) => `${n} places to eat pizza in Tequisquiapan, Querétaro, with a map and directions.`,
    },
    intro: { es: 'Pizzerías y restaurantes con pizza en Tequis.', en: 'Pizzerias and restaurants serving pizza in Tequis.' },
  },
  {
    slug: 'cortes',
    slugEn: 'steakhouses',
    category: 'gastronomia',
    keys: ['Parrilla'],
    features: ['Cortes'],
    label: { es: 'Cortes y parrilla', en: 'Steaks and grill' },
    title: { es: 'Dónde comer cortes en Tequisquiapan', en: 'Steakhouses and grills in Tequisquiapan' },
    description: {
      es: (n) => `${n} restaurantes de cortes y parrilla en Tequisquiapan, Querétaro, con mapa y cómo llegar.`,
      en: (n) => `${n} steakhouses and grill restaurants in Tequisquiapan, Querétaro, with a map and directions.`,
    },
    intro: { es: 'Dónde comer carne y cortes a la parrilla en Tequis.', en: 'Where to eat steak and grilled meats in Tequis.' },
  },
  {
    slug: 'desayunos',
    slugEn: 'breakfast',
    category: 'gastronomia',
    keys: [],
    features: ['Desayunos'],
    label: { es: 'Desayunos', en: 'Breakfast' },
    title: { es: 'Dónde desayunar en Tequisquiapan', en: 'Where to have breakfast in Tequisquiapan' },
    description: {
      es: (n) => `${n} lugares para desayunar en Tequisquiapan, Querétaro, con horario y mapa.`,
      en: (n) => `${n} places to have breakfast in Tequisquiapan, Querétaro, with opening hours and a map.`,
    },
    intro: {
      es: 'Restaurantes y cafés que sirven desayuno, según su web o el directorio municipal. Revisa el horario de cada uno: varios desayunan solo en fin de semana.',
      en: 'Restaurants and cafés that serve breakfast, according to their website or the town directory. Check each one’s hours: several serve breakfast only on weekends.',
    },
  },
  {
    slug: 'con-ninos',
    slugEn: 'kid-friendly',
    category: 'gastronomia',
    keys: [],
    features: ['Área de juegos', 'Familiar'],
    label: { es: 'Con niños', en: 'Kid-friendly' },
    title: { es: 'Restaurantes para ir con niños en Tequisquiapan', en: 'Kid-friendly restaurants in Tequisquiapan' },
    description: {
      es: (n) => `${n} restaurantes de Tequisquiapan para ir en familia o con área de juegos, con mapa y cómo llegar.`,
      en: (n) => `${n} family-friendly restaurants in Tequisquiapan, some with a play area, with a map and directions.`,
    },
    intro: { es: 'Dónde comer en Tequis con niños.', en: 'Where to eat in Tequis with kids.' },
  },
  {
    slug: 'pet-friendly',
    slugEn: 'pet-friendly',
    category: 'gastronomia',
    keys: [],
    features: ['Pet Friendly'],
    label: { es: 'Pet friendly', en: 'Pet-friendly' },
    title: { es: 'Restaurantes pet friendly en Tequisquiapan', en: 'Pet-friendly restaurants in Tequisquiapan' },
    description: {
      es: (n) => `${n} restaurantes y cafés de Tequisquiapan que aceptan mascotas, con mapa y cómo llegar.`,
      en: (n) => `${n} restaurants and cafés in Tequisquiapan that welcome pets, with a map and directions.`,
    },
    intro: {
      es: 'Dónde comer en Tequis con tu perro. Casi siempre es en terraza: confírmalo al llegar.',
      en: 'Where to eat in Tequis with your dog. It is almost always on the terrace: check when you arrive.',
    },
  },
  {
    slug: 'con-alberca',
    slugEn: 'with-pool',
    category: 'hospedaje',
    keys: [],
    features: ['Alberca', 'Alberca techada', 'Alberca climatizada'],
    label: { es: 'Con alberca', en: 'With a pool' },
    title: { es: 'Hoteles con alberca en Tequisquiapan', en: 'Hotels with a pool in Tequisquiapan' },
    description: {
      es: (n) => `${n} hoteles y cabañas con alberca en Tequisquiapan, Querétaro, con mapa, teléfono y web.`,
      en: (n) => `${n} hotels and cabins with a pool in Tequisquiapan, Querétaro, with a map, phone and website.`,
    },
    intro: {
      es: 'Hoteles con alberca en Tequis. Solo los marcamos cuando el hotel lo dice en su propia web.',
      en: 'Hotels with a pool in Tequis. We only list a pool when the hotel says so on its own website.',
    },
  },
  {
    slug: 'en-el-centro',
    slugEn: 'downtown',
    category: 'hospedaje',
    keys: [],
    features: ['Centro'],
    label: { es: 'En el centro', en: 'Downtown' },
    title: { es: 'Hoteles en el centro de Tequisquiapan', en: 'Hotels in downtown Tequisquiapan' },
    description: {
      es: (n) => `${n} hoteles en el centro de Tequisquiapan, a pie de la Plaza Miguel Hidalgo, con mapa y cómo llegar.`,
      en: (n) => `${n} hotels in downtown Tequisquiapan, within walking distance of Plaza Miguel Hidalgo, with a map and directions.`,
    },
    intro: {
      es: 'Hoteles a pie de la plaza, para dejar el coche y moverse caminando.',
      en: 'Hotels within walking distance of the main square, so you can park the car and get around on foot.',
    },
  },
  {
    slug: 'con-jacuzzi',
    slugEn: 'with-hot-tub',
    category: 'hospedaje',
    keys: [],
    features: ['Jacuzzi', 'Jacuzzi privado', 'Pozas privadas'],
    label: { es: 'Con jacuzzi', en: 'With a hot tub' },
    title: { es: 'Hoteles con jacuzzi en Tequisquiapan', en: 'Hotels with a hot tub in Tequisquiapan' },
    description: {
      es: (n) => `${n} hoteles de Tequisquiapan con jacuzzi o pozas, algunos privados en la habitación, con mapa y web.`,
      en: (n) => `${n} hotels in Tequisquiapan with a hot tub or plunge pools, some private in the room, with a map and website.`,
    },
    intro: {
      es: 'Hoteles con jacuzzi o pozas. En cada ficha dice si es privado o compartido, según la web del hotel.',
      en: 'Hotels with a hot tub or plunge pools. Each listing says whether it is private or shared, according to the hotel’s website.',
    },
  },
  {
    slug: 'con-spa',
    slugEn: 'with-spa',
    category: 'hospedaje',
    keys: [],
    features: ['Spa', 'Temazcal'],
    label: { es: 'Con spa', en: 'With a spa' },
    title: { es: 'Hoteles con spa en Tequisquiapan', en: 'Hotels with a spa in Tequisquiapan' },
    description: {
      es: (n) => `${n} hoteles con spa o temazcal en Tequisquiapan, Querétaro, con mapa y web.`,
      en: (n) => `${n} hotels with a spa or temazcal in Tequisquiapan, Querétaro, with a map and website.`,
    },
    intro: { es: 'Hoteles con spa o temazcal propio.', en: 'Hotels with their own spa or temazcal.' },
  },
  {
    slug: 'pet-friendly',
    slugEn: 'pet-friendly',
    category: 'hospedaje',
    keys: [],
    features: ['Pet Friendly'],
    label: { es: 'Pet friendly', en: 'Pet-friendly' },
    title: { es: 'Hoteles pet friendly en Tequisquiapan', en: 'Pet-friendly hotels in Tequisquiapan' },
    description: {
      es: (n) => `${n} hoteles de Tequisquiapan que aceptan mascotas, con mapa y web.`,
      en: (n) => `${n} hotels in Tequisquiapan that accept pets, with a map and website.`,
    },
    intro: {
      es: 'Hoteles que aceptan mascotas, según su web. Las reglas (tamaño, cargo extra) cambian: pregúntalas al reservar.',
      en: 'Hotels that accept pets, according to their website. The rules (size, extra fee) vary: ask when you book.',
    },
  },
  {
    slug: 'familiares',
    slugEn: 'family-friendly',
    category: 'hospedaje',
    keys: [],
    features: ['Familiar'],
    label: { es: 'Familiares', en: 'Family-friendly' },
    title: { es: 'Hoteles familiares en Tequisquiapan', en: 'Family-friendly hotels in Tequisquiapan' },
    description: {
      es: (n) => `${n} hoteles para ir en familia en Tequisquiapan, Querétaro, con mapa y web.`,
      en: (n) => `${n} family-friendly hotels in Tequisquiapan, Querétaro, with a map and website.`,
    },
    intro: { es: 'Hoteles para ir con niños.', en: 'Hotels to stay at with kids.' },
  },
  {
    slug: 'romanticos',
    slugEn: 'romantic',
    category: 'hospedaje',
    keys: [],
    features: ['Romántico', 'Solo adultos'],
    label: { es: 'Románticos', en: 'Romantic' },
    title: { es: 'Hoteles románticos en Tequisquiapan', en: 'Romantic hotels in Tequisquiapan' },
    description: {
      es: (n) => `${n} hoteles para ir en pareja en Tequisquiapan: solo adultos, suites con jacuzzi o paquetes románticos, con mapa y web.`,
      en: (n) => `${n} hotels for couples in Tequisquiapan: adults only, suites with a hot tub or romantic packages, with a map and website.`,
    },
    intro: {
      es: 'Hoteles que se anuncian para parejas: solo adultos o con paquetes románticos en su web.',
      en: 'Hotels that market themselves to couples: adults only or with romantic packages on their website.',
    },
  },
  {
    slug: 'con-desayuno',
    slugEn: 'breakfast-included',
    category: 'hospedaje',
    keys: [],
    features: ['Desayuno incluido', 'Comidas incluidas'],
    label: { es: 'Con desayuno', en: 'Breakfast included' },
    title: { es: 'Hoteles con desayuno incluido en Tequisquiapan', en: 'Hotels with breakfast included in Tequisquiapan' },
    description: {
      es: (n) => `${n} hoteles de Tequisquiapan con desayuno o comidas incluidas, según su web, con mapa.`,
      en: (n) => `${n} hotels in Tequisquiapan with breakfast or meals included, according to their website, with a map.`,
    },
    intro: {
      es: 'Hoteles cuya tarifa incluye el desayuno, o todas las comidas, según su web. Algunos lo incluyen solo en ciertos paquetes.',
      en: 'Hotels whose rate includes breakfast, or all meals, according to their website. Some include it only in certain packages.',
    },
  },
  {
    slug: 'cabanas',
    slugEn: 'cabins',
    category: 'hospedaje',
    keys: ['Cabañas'],
    label: { es: 'Cabañas', en: 'Cabins' },
    title: { es: 'Cabañas en Tequisquiapan', en: 'Cabins in Tequisquiapan' },
    description: {
      es: (n) => `${n} cabañas para rentar en Tequisquiapan, Querétaro, con mapa, teléfono y web.`,
      en: (n) => `${n} cabins to rent in Tequisquiapan, Querétaro, with a map, phone and website.`,
    },
    intro: { es: 'Cabañas en Tequis y sus alrededores.', en: 'Cabins in and around Tequis.' },
  },
  {
    slug: 'camping',
    slugEn: 'camping',
    category: 'experiencias',
    keys: [],
    features: ['Camping'],
    label: { es: 'Camping', en: 'Camping' },
    title: { es: 'Dónde acampar en Tequisquiapan', en: 'Where to camp in Tequisquiapan' },
    description: {
      es: (n) => `${n} balnearios y lugares para acampar en Tequisquiapan, Querétaro, con mapa y cómo llegar.`,
      en: (n) => `${n} water parks and places to camp in Tequisquiapan, Querétaro, with a map and directions.`,
    },
    intro: { es: 'Balnearios y lugares con zona de camping, según su web.', en: 'Water parks and places with a camping area, according to their website.' },
  },
  {
    slug: 'temazcal',
    slugEn: 'temazcal',
    category: 'experiencias',
    keys: ['Temazcal'],
    label: { es: 'Temazcal', en: 'Temazcal' },
    title: { es: 'Temazcal en Tequisquiapan', en: 'Temazcal sweat lodges in Tequisquiapan' },
    description: {
      es: (n) => `${n} lugares para tomar un temazcal en Tequisquiapan, Querétaro, con mapa y contacto.`,
      en: (n) => `${n} places to experience a temazcal (traditional sweat lodge) in Tequisquiapan, Querétaro, with a map and contact details.`,
    },
    intro: { es: 'Dónde tomar un baño de temazcal en Tequis.', en: 'Where to take a temazcal (traditional sweat lodge) in Tequis.' },
  },
  {
    slug: 'tours',
    slugEn: 'tours',
    category: 'experiencias',
    keys: ['Tour', 'Cabalgata', 'Mina de ópalo'],
    label: { es: 'Tours', en: 'Tours' },
    title: { es: 'Tours en Tequisquiapan: recorridos, cabalgatas y minas de ópalo', en: 'Tours in Tequisquiapan: guided trips, horseback rides and opal mines' },
    description: {
      es: (n) => `${n} tours y recorridos en Tequisquiapan: cabalgatas, minas de ópalo y operadores locales, con contacto y mapa.`,
      en: (n) => `${n} tours in Tequisquiapan: horseback rides, opal mines and local operators, with contact details and a map.`,
    },
    intro: { es: 'Recorridos guiados, cabalgatas y visitas a minas de ópalo.', en: 'Guided tours, horseback rides and opal mine visits.' },
  },
  {
    slug: 'globo',
    slugEn: 'hot-air-balloons',
    category: 'experiencias',
    keys: ['Globo Aerostático'],
    label: { es: 'Vuelo en globo', en: 'Hot air balloons' },
    title: { es: 'Vuelo en globo en Tequisquiapan', en: 'Hot air balloon rides in Tequisquiapan' },
    description: {
      es: (n) => `${n} empresas de vuelo en globo en Tequisquiapan, Querétaro, con web y contacto.`,
      en: (n) => `${n} hot air balloon companies in Tequisquiapan, Querétaro, with website and contact details.`,
    },
    intro: { es: 'Vuelos en globo al amanecer sobre Tequis y los viñedos.', en: 'Sunrise balloon flights over Tequis and the vineyards.' },
  },
  {
    slug: 'iglesias',
    slugEn: 'churches',
    category: 'turistico',
    keys: ['Templo'],
    label: { es: 'Iglesias', en: 'Churches' },
    title: { es: 'Iglesias de Tequisquiapan', en: 'Churches of Tequisquiapan' },
    description: {
      es: (n) => `${n} iglesias y capillas de Tequisquiapan, Querétaro, con su historia, mapa y cómo llegar.`,
      en: (n) => `${n} churches and chapels in Tequisquiapan, Querétaro, with their history, a map and directions.`,
    },
    intro: { es: 'La parroquia, los templos de barrio y las capillas del pueblo.', en: 'The parish church, the neighborhood churches and the town’s chapels.' },
  },
  {
    slug: 'museos',
    slugEn: 'museums',
    category: 'turistico',
    keys: ['Museo', 'Galería'],
    label: { es: 'Museos', en: 'Museums' },
    title: { es: 'Museos de Tequisquiapan', en: 'Museums in Tequisquiapan' },
    description: {
      es: (n) => `${n} museos y galerías en Tequisquiapan, Querétaro, con mapa y cómo llegar.`,
      en: (n) => `${n} museums and galleries in Tequisquiapan, Querétaro, with a map and directions.`,
    },
    intro: { es: 'Museos y galerías del pueblo.', en: 'Museums and galleries in town.' },
  },
  {
    slug: 'haciendas',
    slugEn: 'haciendas',
    category: 'turistico',
    keys: ['Hacienda'],
    label: { es: 'Haciendas', en: 'Haciendas' },
    title: { es: 'Haciendas de Tequisquiapan', en: 'Haciendas of Tequisquiapan' },
    description: {
      es: (n) => `${n} haciendas históricas de Tequisquiapan, Querétaro, con su historia y mapa.`,
      en: (n) => `${n} historic haciendas in Tequisquiapan, Querétaro, with their history and a map.`,
    },
    intro: { es: 'Haciendas históricas del municipio.', en: 'Historic haciendas in the municipality.' },
  },
];

/** Página de un tipo por su segmento en español. */
export function typePage(category: PlaceCategory, slug: string): TypePage | undefined {
  return TYPE_PAGES.find((t) => t.category === category && t.slug === slug);
}

type Matchable = { category: string; subcategoryKey: string | null; featureKeys?: string[] };

/** Lugares de un tipo: por la subcategoría en español o, en las páginas por necesidad, por amenidad o etiqueta. */
export function placesOfType<T extends Matchable>(t: TypePage, places: T[]): T[] {
  return places.filter(
    (p) =>
      p.category === t.category &&
      ((p.subcategoryKey != null && t.keys.includes(p.subcategoryKey)) || (t.features?.some((f) => p.featureKeys?.includes(f)) ?? false)),
  );
}

/** ¿Es una página por necesidad (con alberca, pet friendly…) y no por tipo de lugar? */
export const isNeedPage = (t: TypePage) => t.keys.length === 0;

/** Páginas de tipo publicadas (con MIN_PLACES lugares o más). */
export function activeTypePages<T extends Matchable>(places: T[]): TypePage[] {
  return TYPE_PAGES.filter((t) => placesOfType(t, places).length >= MIN_PLACES);
}

/** Subcategoría (clave en español) → página por tipo publicada que la tiene como principal (`keys[0]`).
 *  Lo usan el menú y los filtros de los listados para enlazar a la página indexable y no a `?tipo=`. */
export function typePageByKey<T extends Matchable>(category: PlaceCategory, places: T[]): Map<string, TypePage> {
  return new Map(activeTypePages(places).filter((t) => t.category === category && t.keys.length > 0).map((t) => [t.keys[0], t]));
}

/** Segmentos español → inglés, para lib/i18n.ts. */
export const TYPE_SLUGS_EN: Record<string, string> = Object.fromEntries(TYPE_PAGES.map((t) => [t.slug, t.slugEn]));

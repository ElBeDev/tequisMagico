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
    title: { es: 'Balnearios en Tequisquiapan: aguas termales', en: 'Hot springs and water parks in Tequisquiapan' },
    description: {
      es: (n) => `${n} balnearios y parques acuáticos con aguas termales en Tequisquiapan, Querétaro: ubicación, días de apertura y cómo llegar.`,
      en: (n) => `${n} thermal water parks and hot springs in Tequisquiapan, Querétaro: location, opening days and directions.`,
    },
    intro: {
      es: 'Balnearios y parques acuáticos con albercas de aguas termales. Confirma días y precios antes de ir: cambian con la temporada.',
      en: 'Water parks with thermal pools. Check opening days and prices before you go: they change with the season.',
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
    keys: ['Restaurante', 'Mariscos', 'Pizzería'],
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
      es: (n) => `${n} hoteles boutique en el centro de Tequisquiapan, Querétaro, con mapa y cómo llegar.`,
      en: (n) => `${n} boutique hotels in downtown Tequisquiapan, Querétaro, with a map and directions.`,
    },
    intro: { es: 'Hoteles boutique en el centro del pueblo.', en: 'Boutique hotels in the town center.' },
  },
];

/** Página de un tipo por su segmento en español. */
export function typePage(category: PlaceCategory, slug: string): TypePage | undefined {
  return TYPE_PAGES.find((t) => t.category === category && t.slug === slug);
}

/** Lugares de un tipo (por la subcategoría en español). */
export function placesOfType<T extends { category: string; subcategoryKey: string | null }>(t: TypePage, places: T[]): T[] {
  return places.filter((p) => p.category === t.category && p.subcategoryKey != null && t.keys.includes(p.subcategoryKey));
}

/** Páginas de tipo publicadas (con MIN_PLACES lugares o más). */
export function activeTypePages<T extends { category: string; subcategoryKey: string | null }>(places: T[]): TypePage[] {
  return TYPE_PAGES.filter((t) => placesOfType(t, places).length >= MIN_PLACES);
}

/** Segmentos español → inglés, para lib/i18n.ts. */
export const TYPE_SLUGS_EN: Record<string, string> = Object.fromEntries(TYPE_PAGES.map((t) => [t.slug, t.slugEn]));

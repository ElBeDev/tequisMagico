import {
  THEMATIC_ROUTES,
  categoryInfo,
  eventStatus,
  formatDateRange,
  placesForRoute,
  routeText,
  subcategoriesOf,
  subcategoryHref,
  subcategoryPlural,
  type Place,
  type PlaceCategory,
  type TequisEvent,
} from './data';
import { GUIDES, guidesFor } from './guides';
import { href, pick, type Lang } from './i18n';
import { PHOTOS } from './photos';
import { activeTypePages } from './tipos';

// Menú principal al estilo de visitshropshire.co.uk: una fila de secciones y, al pasar el
// mouse, un panel con columnas de links (armadas con los datos reales: subcategorías con su
// conteo, próximos eventos) y una tarjeta destacada con foto. Los `href` ya salen en el idioma
// de la página.

export type NavLink = { href: string; label: string; meta?: string };
export type NavGroup = { title: string; href?: string; links: NavLink[] };
export type NavFeature = { image: string; eyebrow: string; title: string; href: string; cta: string };
export type NavSection = { label: string; href: string; groups: NavGroup[]; feature?: NavFeature; all: NavLink };

function typeHref(category: PlaceCategory, key: string, places: Place[]): string | undefined {
  const t = activeTypePages(places).find((x) => x.category === category && x.keys[0] === key);
  return t && `/lugares/${categoryInfo('es', category).slug}/${t.slug}`;
}

function categoryGroup(lang: Lang, places: Place[], category: PlaceCategory, title = categoryInfo(lang, category).label): NavGroup {
  const inCategory = places.filter((p) => p.category === category);
  return {
    title,
    href: href(lang, `/lugares/${categoryInfo(lang, category).slug}`),
    links: subcategoriesOf(inCategory).map((s) => ({
      // A la página por tipo si existe (lib/tipos.ts) y esta es su subcategoría principal; si no, al filtro.
      href: href(lang, typeHref(category, s.key, inCategory) ?? subcategoryHref(category, s.key)),
      label: subcategoryPlural(s.key, lang),
      meta: String(s.count),
    })),
  };
}

/** Un lugar destacado y con información confirmada de la categoría, para la tarjeta del panel. */
function featuredFeature(lang: Lang, places: Place[], category: PlaceCategory): NavFeature | undefined {
  const p = places.find((x) => x.category === category && x.isFeatured && x.contentVerified && x.thumbnailUrl);
  if (!p) return undefined;
  return {
    image: p.thumbnailUrl!,
    eyebrow: pick(lang, { es: 'Destacado', en: 'Featured' }),
    title: p.name,
    href: href(lang, `/lugar/${p.slug}`),
    cta: pick(lang, { es: 'Ver detalles', en: 'See details' }),
  };
}

export function buildNav(places: Place[], events: TequisEvent[], today: string, lang: Lang = 'es'): NavSection[] {
  const L = (es: string, en: string) => (lang === 'en' ? en : es);
  const h = (path: string) => href(lang, path);
  const upcoming = events.filter((e) => eventStatus(e, today) !== 'past');
  const next = upcoming[0];
  const routes = THEMATIC_ROUTES.map((r) => ({ r, n: placesForRoute(r, places).length })).filter((x) => x.n > 0);
  const guides = guidesFor(lang);

  return [
    {
      label: L('Qué hacer', 'Things to do'),
      href: h('/lugares'),
      groups: [categoryGroup(lang, places, 'experiencias'), categoryGroup(lang, places, 'turistico')],
      feature: featuredFeature(lang, places, 'experiencias') ?? {
        image: PHOTOS.vinedosDeCote.src,
        eyebrow: L('Ruta', 'Route'),
        title: routeText(lang, THEMATIC_ROUTES[0]).title,
        href: h('/rutas/vino-y-queso'),
        cta: L('Ver la ruta', 'See the route'),
      },
      all: { href: h('/lugares'), label: L('Todo lo que hacer en Tequis', 'Everything to do in Tequis') },
    },
    {
      label: L('Comer y beber', 'Food & drink'),
      href: h('/lugares/gastronomia'),
      groups: [categoryGroup(lang, places, 'gastronomia', L('Dónde comer', 'Where to eat'))],
      feature: featuredFeature(lang, places, 'gastronomia') ?? {
        image: PHOTOS.cata.src,
        eyebrow: L('Sabores', 'Flavors'),
        title: L('Queso y vino de la región', 'Local cheese and wine'),
        href: h('/por-que-tequis#sabores'),
        cta: L('Leer más', 'Read more'),
      },
      all: { href: h('/lugares/gastronomia'), label: L('Todos los restaurantes', 'All restaurants') },
    },
    {
      label: L('Dónde dormir', 'Where to stay'),
      href: h('/lugares/hospedaje'),
      groups: [categoryGroup(lang, places, 'hospedaje', L('Hospedaje', 'Hotels'))],
      feature: featuredFeature(lang, places, 'hospedaje') ?? {
        image: PHOTOS.alberca.src,
        eyebrow: L('Consejo', 'Tip'),
        title: L('En temporada alta, reserva con tiempo', 'Book early in high season'),
        href: h('/guia-practica#cuando-ir'),
        cta: L('Cuándo ir', 'When to go'),
      },
      all: { href: h('/lugares/hospedaje'), label: L('Todo el hospedaje', 'All places to stay') },
    },
    {
      label: L('Compras', 'Shopping'),
      href: h('/lugares/compras'),
      groups: [categoryGroup(lang, places, 'compras', L('Compras y artesanías', 'Shopping and crafts'))],
      feature: {
        image: PHOTOS.mercadoTequesquicalli.src,
        eyebrow: L('Tradición', 'Tradition'),
        title: L('El Paraíso de la Cestería', 'The basket-weaving capital'),
        href: h('/por-que-tequis#tradiciones'),
        cta: L('Conocer la historia', 'Read the story'),
      },
      all: { href: h('/lugares/compras'), label: L('Todas las tiendas', 'All shops') },
    },
    {
      label: L('Eventos', 'Events'),
      href: h('/eventos'),
      groups: [
        {
          title: L('Próximos', 'Coming up'),
          href: h('/eventos'),
          links: upcoming.slice(0, 6).map((e) => ({ href: h(`/evento/${e.slug}`), label: e.title, meta: formatDateRange(e.startDate, e.endDate, lang) })),
        },
      ],
      feature: next && {
        image: next.thumbnailUrl ?? PHOTOS.parroquiaNoche.src,
        eyebrow: eventStatus(next, today) === 'happening' ? L('Está pasando', 'Happening now') : L('Próximo evento', 'Next event'),
        title: next.title,
        href: h(`/evento/${next.slug}`),
        cta: L('Ver evento', 'View event'),
      },
      all: { href: h('/eventos'), label: L('Calendario completo', 'Full calendar') },
    },
    {
      label: L('Rutas', 'Routes'),
      href: h('/rutas'),
      groups: [
        {
          title: L('Rutas temáticas', 'Themed routes'),
          href: h('/rutas'),
          links: routes.map(({ r, n }) => ({ href: h(`/rutas/${r.slug}`), label: routeText(lang, r).title, meta: L(`${n} paradas`, `${n} stops`) })),
        },
      ],
      feature: {
        image: PHOTOS.calleNinosHeroes.src,
        eyebrow: L('Mi viaje', 'My trip'),
        title: L('Guarda lo que te guste y arma tu ruta', 'Save what you like and plan your route'),
        href: h('/mi-viaje'),
        cta: L('Ver mi viaje', 'See my trip'),
      },
      all: { href: h('/rutas'), label: L('Todas las rutas', 'All routes') },
    },
    {
      label: L('¿Por qué Tequis?', 'Why Tequis?'),
      href: h('/por-que-tequis'),
      groups: [
        {
          title: L('Un Pueblo Mágico', 'A Pueblo Mágico'),
          href: h('/por-que-tequis'),
          links: [
            { href: h('/por-que-tequis#historia'), label: L('Historia', 'History') },
            { href: h('/por-que-tequis#tradiciones'), label: L('Cestería y tradiciones', 'Basketry and traditions') },
            { href: h('/por-que-tequis#sabores'), label: L('Queso y vino', 'Cheese and wine') },
            { href: h('/por-que-tequis#alrededores'), label: L('Peña de Bernal y alrededores', 'Peña de Bernal and around') },
          ],
        },
      ],
      feature: {
        image: PHOTOS.penaBernal.src,
        eyebrow: L('Alrededores', 'Nearby'),
        title: L('La Peña de Bernal, a media hora', 'Peña de Bernal, half an hour away'),
        href: h('/por-que-tequis#alrededores'),
        cta: L('Leer más', 'Read more'),
      },
      all: { href: h('/por-que-tequis'), label: L('Por qué venir a Tequis', 'Why visit Tequis') },
    },
    {
      label: L('Guía práctica', 'Plan your trip'),
      href: h('/guia-practica'),
      groups: [
        {
          title: L('Antes de ir', 'Before you go'),
          href: h('/guia-practica'),
          links: [
            { href: h('/guia-practica#como-llegar'), label: L('Cómo llegar', 'Getting there') },
            { href: h('/guia-practica#cuando-ir'), label: L('Cuándo visitar', 'When to visit') },
            { href: h('/guia-practica#info-util'), label: L('Información útil', 'Useful info') },
            { href: h('/mapa'), label: L('Mapa del pueblo', 'Town map') },
            { href: h('/app'), label: L('La app', 'The app') },
          ],
        },
        {
          title: L('Guías', 'Guides'),
          href: h('/guias'),
          links: GUIDES.map((g, i) => ({ href: h(`/guias/${g.slug}`), label: guides[i].title })),
        },
      ],
      feature: {
        image: PHOTOS.pendulo.src,
        eyebrow: L('Dato', 'Fun fact'),
        title: L('El centro geográfico de México', 'The geographic center of Mexico'),
        href: h('/por-que-tequis#historia'),
        cta: L('Leer más', 'Read more'),
      },
      all: { href: h('/guia-practica'), label: L('Toda la guía práctica', 'All travel tips') },
    },
  ];
}

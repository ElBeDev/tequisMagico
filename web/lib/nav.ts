import {
  CATEGORIES,
  THEMATIC_ROUTES,
  eventStatus,
  formatDateRange,
  placesForRoute,
  subcategoriesOf,
  subcategoryHref,
  subcategoryPlural,
  type Place,
  type PlaceCategory,
  type TequisEvent,
} from './data';
import { GUIDES } from './guides';
import { PHOTOS } from './photos';

// Menú principal al estilo de visitshropshire.co.uk: una fila de secciones y, al pasar el
// mouse, un panel con columnas de links (armadas con los datos reales: subcategorías con su
// conteo, próximos eventos) y una tarjeta destacada con foto.

export type NavLink = { href: string; label: string; meta?: string };
export type NavGroup = { title: string; href?: string; links: NavLink[] };
export type NavFeature = { image: string; eyebrow: string; title: string; href: string; cta: string };
export type NavSection = { label: string; href: string; groups: NavGroup[]; feature?: NavFeature; all: NavLink };

function categoryGroup(places: Place[], category: PlaceCategory, title = CATEGORIES[category].label): NavGroup {
  const inCategory = places.filter((p) => p.category === category);
  return {
    title,
    href: `/lugares/${CATEGORIES[category].slug}`,
    links: subcategoriesOf(inCategory).map((s) => ({ href: subcategoryHref(category, s.name), label: subcategoryPlural(s.name), meta: String(s.count) })),
  };
}

/** Un lugar destacado y con información confirmada de la categoría, para la tarjeta del panel. */
function featuredFeature(places: Place[], category: PlaceCategory): NavFeature | undefined {
  const p = places.find((x) => x.category === category && x.isFeatured && x.contentVerified && x.thumbnailUrl);
  if (!p) return undefined;
  return { image: p.thumbnailUrl!, eyebrow: 'Destacado', title: p.name, href: `/lugar/${p.slug}`, cta: 'Ver detalles' };
}

export function buildNav(places: Place[], events: TequisEvent[], today: string): NavSection[] {
  const upcoming = events.filter((e) => eventStatus(e, today) !== 'past');
  const next = upcoming[0];
  const routes = THEMATIC_ROUTES.map((r) => ({ r, n: placesForRoute(r, places).length })).filter((x) => x.n > 0);

  return [
    {
      label: 'Qué hacer',
      href: '/lugares',
      groups: [categoryGroup(places, 'experiencias'), categoryGroup(places, 'turistico')],
      feature: featuredFeature(places, 'experiencias') ?? {
        image: PHOTOS.vinedosDeCote.src, eyebrow: 'Ruta', title: 'Ruta del Vino y Queso', href: '/rutas/vino-y-queso', cta: 'Ver la ruta',
      },
      all: { href: '/lugares', label: 'Todo lo que hacer en Tequis' },
    },
    {
      label: 'Comer y beber',
      href: '/lugares/gastronomia',
      groups: [categoryGroup(places, 'gastronomia', 'Dónde comer')],
      feature: featuredFeature(places, 'gastronomia') ?? {
        image: PHOTOS.cata.src, eyebrow: 'Sabores', title: 'Queso y vino de la región', href: '/por-que-tequis#sabores', cta: 'Leer más',
      },
      all: { href: '/lugares/gastronomia', label: 'Todos los restaurantes' },
    },
    {
      label: 'Dónde dormir',
      href: '/lugares/hospedaje',
      groups: [categoryGroup(places, 'hospedaje', 'Hospedaje')],
      feature: featuredFeature(places, 'hospedaje') ?? {
        image: PHOTOS.alberca.src, eyebrow: 'Consejo', title: 'En temporada alta, reserva con tiempo', href: '/guia-practica#cuando-ir', cta: 'Cuándo ir',
      },
      all: { href: '/lugares/hospedaje', label: 'Todo el hospedaje' },
    },
    {
      label: 'Compras',
      href: '/lugares/compras',
      groups: [categoryGroup(places, 'compras', 'Compras y artesanías')],
      feature: {
        image: PHOTOS.mercadoTequesquicalli.src, eyebrow: 'Tradición', title: 'El Paraíso de la Cestería', href: '/por-que-tequis#tradiciones', cta: 'Conocer la historia',
      },
      all: { href: '/lugares/compras', label: 'Todas las tiendas' },
    },
    {
      label: 'Eventos',
      href: '/eventos',
      groups: [
        {
          title: 'Próximos',
          href: '/eventos',
          links: upcoming.slice(0, 6).map((e) => ({ href: `/evento/${e.slug}`, label: e.title, meta: formatDateRange(e.startDate, e.endDate) })),
        },
      ],
      feature: next && {
        image: next.thumbnailUrl ?? PHOTOS.parroquiaNoche.src,
        eyebrow: eventStatus(next, today) === 'happening' ? 'Está pasando' : 'Próximo evento',
        title: next.title,
        href: `/evento/${next.slug}`,
        cta: 'Ver evento',
      },
      all: { href: '/eventos', label: 'Calendario completo' },
    },
    {
      label: 'Rutas',
      href: '/rutas',
      groups: [{ title: 'Rutas temáticas', href: '/rutas', links: routes.map(({ r, n }) => ({ href: `/rutas/${r.slug}`, label: r.title, meta: `${n} paradas` })) }],
      feature: { image: PHOTOS.calleNinosHeroes.src, eyebrow: 'Mi viaje', title: 'Guarda lo que te guste y arma tu ruta', href: '/mi-viaje', cta: 'Ver mi viaje' },
      all: { href: '/rutas', label: 'Todas las rutas' },
    },
    {
      label: '¿Por qué Tequis?',
      href: '/por-que-tequis',
      groups: [
        {
          title: 'Un Pueblo Mágico',
          href: '/por-que-tequis',
          links: [
            { href: '/por-que-tequis#historia', label: 'Historia' },
            { href: '/por-que-tequis#tradiciones', label: 'Cestería y tradiciones' },
            { href: '/por-que-tequis#sabores', label: 'Queso y vino' },
            { href: '/por-que-tequis#alrededores', label: 'Peña de Bernal y alrededores' },
          ],
        },
      ],
      feature: { image: PHOTOS.penaBernal.src, eyebrow: 'Alrededores', title: 'La Peña de Bernal, a media hora', href: '/por-que-tequis#alrededores', cta: 'Leer más' },
      all: { href: '/por-que-tequis', label: 'Por qué venir a Tequis' },
    },
    {
      label: 'Guía práctica',
      href: '/guia-practica',
      groups: [
        {
          title: 'Antes de ir',
          href: '/guia-practica',
          links: [
            { href: '/guia-practica#como-llegar', label: 'Cómo llegar' },
            { href: '/guia-practica#cuando-ir', label: 'Cuándo visitar' },
            { href: '/guia-practica#info-util', label: 'Información útil' },
            { href: '/mapa', label: 'Mapa del pueblo' },
            { href: '/app', label: 'La app' },
          ],
        },
        { title: 'Guías', href: '/guias', links: GUIDES.map((g) => ({ href: `/guias/${g.slug}`, label: g.title })) },
      ],
      feature: { image: PHOTOS.pendulo.src, eyebrow: 'Dato', title: 'El centro geográfico de México', href: '/por-que-tequis#historia', cta: 'Leer más' },
      all: { href: '/guia-practica', label: 'Toda la guía práctica' },
    },
  ];
}

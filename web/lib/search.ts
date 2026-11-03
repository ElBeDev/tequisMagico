import { CATEGORIES, THEMATIC_ROUTES, foldText, formatDateRange, type Place, type TequisEvent } from './data';
import { GUIDES } from './guides';

// Índice del buscador del header: lugares, eventos y páginas del sitio. Se arma en el
// servidor (layout) y la búsqueda corre en el navegador, sin pedir nada al API.

export type SearchItem = {
  kind: 'Lugares' | 'Eventos' | 'Páginas';
  title: string;
  subtitle: string;
  href: string;
  image: string | null;
  /** Todo el texto buscable, ya sin acentos y en minúsculas. */
  haystack: string;
};

const PAGES: Omit<SearchItem, 'kind' | 'haystack' | 'image'>[] = [
  { title: 'Por qué venir a Tequis', subtitle: 'Pueblo Mágico, historia y tradiciones', href: '/por-que-tequis' },
  { title: 'Historia de Tequisquiapan', subtitle: 'Fundación, aguas termales y centro geográfico', href: '/por-que-tequis#historia' },
  { title: 'Cestería y tradiciones', subtitle: 'Mimbre, vara de sauz y fiestas', href: '/por-que-tequis#tradiciones' },
  { title: 'Queso y vino', subtitle: 'Ruta Arte, Queso y Vino', href: '/por-que-tequis#sabores' },
  { title: 'Peña de Bernal y alrededores', subtitle: 'A media hora de Tequis', href: '/por-que-tequis#alrededores' },
  { title: 'Cómo llegar', subtitle: 'En auto y en autobús', href: '/guia-practica#como-llegar' },
  { title: 'Cuándo visitar', subtitle: 'Clima y temporadas', href: '/guia-practica#cuando-ir' },
  { title: 'Información útil', subtitle: 'Consejos y teléfonos de emergencia', href: '/guia-practica#info-util' },
  { title: 'Mapa de Tequisquiapan', subtitle: 'Todos los lugares en el mapa', href: '/mapa' },
  { title: 'Calendario de eventos', subtitle: 'Fiestas y ferias del año', href: '/eventos' },
  { title: 'Mi viaje', subtitle: 'Lo que guardaste con el corazón', href: '/mi-viaje' },
  { title: 'La app', subtitle: 'Tequis en tu bolsillo, sin conexión', href: '/app' },
  ...THEMATIC_ROUTES.map((r) => ({ title: r.title, subtitle: r.subtitle, href: `/rutas/${r.slug}` })),
  { title: 'Guías de viaje', subtitle: 'Para planear tu visita', href: '/guias' },
  ...GUIDES.map((g) => ({ title: g.title, subtitle: g.searchSubtitle, href: `/guias/${g.slug}` })),
];

export function buildSearchIndex(places: Place[], events: TequisEvent[]): SearchItem[] {
  return [
    ...places.map((p) => ({
      kind: 'Lugares' as const,
      title: p.name,
      subtitle: `${p.subcategory} · ${CATEGORIES[p.category].label}`,
      href: `/lugar/${p.slug}`,
      image: p.thumbnailUrl,
      haystack: foldText([p.name, p.subcategory, CATEGORIES[p.category].label, p.shortDescription, ...p.tags].join(' ')),
    })),
    ...events.map((e) => ({
      kind: 'Eventos' as const,
      title: e.title,
      subtitle: formatDateRange(e.startDate, e.endDate),
      href: `/evento/${e.slug}`,
      image: e.thumbnailUrl,
      haystack: foldText([e.title, e.category, e.shortDescription, e.locationName ?? '', ...e.tags].join(' ')),
    })),
    ...PAGES.map((p) => ({ ...p, kind: 'Páginas' as const, image: null, haystack: foldText(`${p.title} ${p.subtitle}`) })),
  ];
}

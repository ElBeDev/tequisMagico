import { THEMATIC_ROUTES, categoryInfo, foldText, formatDateRange, routeText, type Place, type TequisEvent } from './data';
import { GUIDES, guidesFor } from './guides';
import { href, type Lang } from './i18n';

// Índice del buscador del header: lugares, eventos y páginas del sitio. Se arma en el
// servidor (layout) y la búsqueda corre en el navegador, sin pedir nada al API. `kind` es la
// clave del grupo (en español); el título del grupo sale de dict().searchGroups.

export type SearchItem = {
  kind: 'Lugares' | 'Eventos' | 'Páginas';
  title: string;
  subtitle: string;
  href: string;
  image: string | null;
  /** Todo el texto buscable, ya sin acentos y en minúsculas. */
  haystack: string;
};

type PageEntry = Omit<SearchItem, 'kind' | 'haystack' | 'image'>;

const PAGES: Record<Lang, PageEntry[]> = {
  es: [
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
    { title: 'Guías de viaje', subtitle: 'Para planear tu visita', href: '/guias' },
  ],
  en: [
    { title: 'Why visit Tequis', subtitle: 'Pueblo Mágico, history and traditions', href: '/por-que-tequis' },
    { title: 'History of Tequisquiapan', subtitle: 'Founding, hot springs and the geographic center', href: '/por-que-tequis#historia' },
    { title: 'Basketry and traditions', subtitle: 'Wicker, willow and festivals', href: '/por-que-tequis#tradiciones' },
    { title: 'Cheese and wine', subtitle: 'Art, Cheese and Wine Route', href: '/por-que-tequis#sabores' },
    { title: 'Peña de Bernal and around', subtitle: 'Half an hour from Tequis', href: '/por-que-tequis#alrededores' },
    { title: 'Getting there', subtitle: 'By car and by bus', href: '/guia-practica#como-llegar' },
    { title: 'When to visit', subtitle: 'Weather and seasons', href: '/guia-practica#cuando-ir' },
    { title: 'Useful info', subtitle: 'Tips and emergency numbers', href: '/guia-practica#info-util' },
    { title: 'Map of Tequisquiapan', subtitle: 'Every place on the map', href: '/mapa' },
    { title: 'Events calendar', subtitle: 'Festivals and fairs of the year', href: '/eventos' },
    { title: 'My trip', subtitle: 'What you saved with the heart', href: '/mi-viaje' },
    { title: 'The app', subtitle: 'Tequis in your pocket, offline', href: '/app' },
    { title: 'Travel guides', subtitle: 'To plan your visit', href: '/guias' },
  ],
};

export function buildSearchIndex(places: Place[], events: TequisEvent[], lang: Lang = 'es'): SearchItem[] {
  const guides = guidesFor(lang);
  const pages: PageEntry[] = [
    ...PAGES[lang],
    ...THEMATIC_ROUTES.map((r) => ({ ...routeText(lang, r), href: `/rutas/${r.slug}` })),
    ...GUIDES.map((g, i) => ({ title: guides[i].title, subtitle: guides[i].searchSubtitle, href: `/guias/${g.slug}` })),
  ];
  return [
    ...places.map((p) => {
      const category = categoryInfo(lang, p.category).label;
      return {
        kind: 'Lugares' as const,
        title: p.name,
        subtitle: `${p.subcategory} · ${category}`,
        href: href(lang, `/lugar/${p.slug}`),
        image: p.thumbnailUrl,
        // Se busca también por la subcategoría en español: "viñedo" encuentra viñedos en inglés.
        haystack: foldText([p.name, p.subcategory, p.subcategoryKey, category, p.shortDescription, ...p.tags].join(' ')),
      };
    }),
    ...events.map((e) => ({
      kind: 'Eventos' as const,
      title: e.title,
      subtitle: formatDateRange(e.startDate, e.endDate, lang),
      href: href(lang, `/evento/${e.slug}`),
      image: e.thumbnailUrl,
      haystack: foldText([e.title, e.category, e.shortDescription, e.locationName ?? '', ...e.tags].join(' ')),
    })),
    ...pages.map((p) => ({ ...p, href: href(lang, p.href), kind: 'Páginas' as const, image: null, haystack: foldText(`${p.title} ${p.subtitle}`) })),
  ];
}

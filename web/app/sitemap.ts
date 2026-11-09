import type { MetadataRoute } from 'next';
import { CATEGORIES, SITE_URL, THEMATIC_ROUTES, getEvents, getPlaces } from '@/lib/data';
import { GUIDES } from '@/lib/guides';
import { LANGS, href } from '@/lib/i18n';
import { activeTypePages } from '@/lib/tipos';

export const revalidate = 3600;

// Cada página va dos veces (español sin prefijo e inglés en /en), y cada una declara a la otra
// como versión alterna para que Google las empareje.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [places, events] = await Promise.all([getPlaces(), getEvents()]);
  const page = (path: string, priority: number, lastModified?: string): MetadataRoute.Sitemap => {
    const languages = { 'es-MX': `${SITE_URL}${path || '/'}`, en: `${SITE_URL}${href('en', path || '/')}` };
    return LANGS.map((lang) => ({
      url: `${SITE_URL}${lang === 'es' ? path : href('en', path || '/')}`,
      priority,
      lastModified,
      alternates: { languages },
    }));
  };
  return [
    ...page('', 1),
    ...page('/lugares', 0.9),
    ...page('/eventos', 0.9),
    ...page('/mapa', 0.6),
    ...page('/rutas', 0.7),
    ...page('/app', 0.5),
    ...page('/por-que-tequis', 0.8),
    ...page('/guia-practica', 0.8),
    ...page('/guias', 0.8),
    ...GUIDES.flatMap((g) => page(`/guias/${g.slug}`, 0.8, g.updatedISO)),
    ...Object.values(CATEGORIES).flatMap((c) => page(`/lugares/${c.slug}`, 0.8)),
    ...activeTypePages(places).flatMap((t) => page(`/lugares/${CATEGORIES[t.category].slug}/${t.slug}`, 0.8)),
    ...THEMATIC_ROUTES.flatMap((r) => page(`/rutas/${r.slug}`, 0.6)),
    ...places.flatMap((p) => page(`/lugar/${p.slug}`, 0.7, p.updatedAt)),
    ...events.flatMap((e) => page(`/evento/${e.slug}`, 0.7)),
  ];
}

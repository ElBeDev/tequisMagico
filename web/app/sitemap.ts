import type { MetadataRoute } from 'next';
import { CATEGORIES, SITE_URL, THEMATIC_ROUTES, getEvents, getPlaces } from '@/lib/data';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [places, events] = await Promise.all([getPlaces(), getEvents()]);
  const page = (path: string, priority: number, lastModified?: string): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    priority,
    lastModified,
  });
  return [
    page('', 1),
    page('/lugares', 0.9),
    page('/eventos', 0.9),
    page('/mapa', 0.6),
    page('/rutas', 0.7),
    page('/app', 0.5),
    page('/por-que-tequis', 0.8),
    page('/guia-practica', 0.8),
    ...Object.values(CATEGORIES).map((c) => page(`/lugares/${c.slug}`, 0.8)),
    ...THEMATIC_ROUTES.map((r) => page(`/rutas/${r.slug}`, 0.6)),
    ...places.map((p) => page(`/lugar/${p.slug}`, 0.7, p.updatedAt)),
    ...events.map((e) => page(`/evento/${e.slug}`, 0.7)),
  ];
}

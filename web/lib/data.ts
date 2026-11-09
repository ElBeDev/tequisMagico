// Lee del mismo API público que usa la app iOS (`GET /api/places` y `GET /api/events` de
// web-admin), así la web y la app muestran exactamente lo mismo. El panel sigue siendo el
// único lugar donde se edita; aquí todo es solo lectura.

import type { Lang } from './i18n';
import { EVENTS_EN, PLACES_EN, SUBCATEGORIES_EN, TERMS_EN } from './i18n/data-en';

const API_BASE = process.env.TEQUIS_API_URL ?? 'https://panel.tequismagico.com';

// Cada cuántos segundos se vuelve a pedir al API (ISR). Lo que se edite en el panel tarda
// como máximo esto en verse en la web.
export const REVALIDATE_SECONDS = 300;

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tequismagico.com';
export const SITE_NAME = 'Tequisquiapan Mágico';
export const SITE_LOGO = `${SITE_URL}/logo/icono-512.png`;

export type PlaceCategory = 'turistico' | 'experiencias' | 'gastronomia' | 'hospedaje' | 'eventos' | 'compras' | 'rutas';

export type Place = {
  id: string;
  slug: string;
  name: string;
  category: PlaceCategory;
  /** Subcategoría en el idioma de la página (lo que se muestra). */
  subcategory: string;
  /** Subcategoría en español, tal cual viene del API: es la clave para rutas y filtros. */
  subcategoryKey: string;
  latitude: number;
  longitude: number;
  address: string;
  shortDescription: string;
  fullDescription: string;
  priceRange: string;
  imageUrls: string[];
  thumbnailUrl: string | null;
  phoneNumber: string | null;
  email: string | null;
  website: string | null;
  whatsappNumber: string | null;
  /** Horario tal cual viene del API (claves y texto en español): para calcular "abierto ahora". */
  schedule: Record<string, string> | null;
  /** El mismo horario con el texto en el idioma de la página: para mostrarlo. */
  scheduleText: Record<string, string> | null;
  amenities: string[];
  tags: string[];
  isFeatured: boolean;
  isVerified: boolean;
  contentVerified: boolean;
  updatedAt: string;
};

export type TequisEvent = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  isRecurring: boolean;
  locationName: string | null;
  latitude: number | null;
  longitude: number | null;
  address: string | null;
  category: string;
  tags: string[];
  imageUrls: string[];
  thumbnailUrl: string | null;
  isFree: boolean;
  ticketPrice: string | null;
  ticketUrl: string | null;
  requiresReservation: boolean;
  isFeatured: boolean;
  organizerName: string | null;
  organizerContact: string | null;
};

// Mismo orden, nombres y colores que `PlaceCategory` en ModelsPlaceCategory.swift.
export const CATEGORIES: Record<PlaceCategory, { label: string; slug: string; color: string; blurb: string }> = {
  turistico: { label: 'Sitios Turísticos', slug: 'sitios-turisticos', color: '#2563eb', blurb: 'Plazas, templos, monumentos y parques del pueblo.' },
  experiencias: { label: 'Experiencias', slug: 'experiencias', color: '#7c3aed', blurb: 'Viñedos, queserías, balnearios, globo aerostático y talleres.' },
  gastronomia: { label: 'Gastronomía', slug: 'gastronomia', color: '#ea580c', blurb: 'Restaurantes, cafés, antojitos y bares.' },
  hospedaje: { label: 'Hospedaje', slug: 'hospedaje', color: '#16a34a', blurb: 'Hoteles, posadas y hoteles boutique.' },
  eventos: { label: 'Eventos', slug: 'eventos', color: '#dc2626', blurb: 'Festivales, ferias y exposiciones.' },
  compras: { label: 'Compras', slug: 'compras', color: '#db2777', blurb: 'Mercados, artesanías, cestería y dulces típicos.' },
  rutas: { label: 'Rutas', slug: 'rutas', color: '#0d9488', blurb: 'Recorridos a pie, en bici y por los viñedos.' },
};

const CATEGORIES_EN: Record<PlaceCategory, { label: string; blurb: string }> = {
  turistico: { label: 'Sights', blurb: 'Plazas, churches, monuments and parks in town.' },
  experiencias: { label: 'Experiences', blurb: 'Wineries, cheese makers, hot springs, hot-air balloons and workshops.' },
  gastronomia: { label: 'Food & drink', blurb: 'Restaurants, cafés, street food and bars.' },
  hospedaje: { label: 'Where to stay', blurb: 'Hotels, inns and boutique hotels.' },
  eventos: { label: 'Events', blurb: 'Festivals, fairs and exhibitions.' },
  compras: { label: 'Shopping', blurb: 'Markets, crafts, basketry and traditional sweets.' },
  rutas: { label: 'Routes', blurb: 'Walking, cycling and winery routes.' },
};

/** Categoría con su nombre y descripción en el idioma de la página. */
export function categoryInfo(lang: Lang, category: PlaceCategory) {
  const c = CATEGORIES[category];
  return lang === 'en' ? { ...c, ...CATEGORIES_EN[category] } : c;
}

// Mismos valores que `PriceRange` en ModelsPriceRange.swift.
export const PRICE_RANGES: Record<string, { symbol: string; label: string }> = {
  free: { symbol: 'Gratis', label: 'Gratis' },
  budget: { symbol: '$', label: 'Económico' },
  moderate: { symbol: '$$', label: 'Moderado' },
  expensive: { symbol: '$$$', label: 'Caro' },
  luxury: { symbol: '$$$$', label: 'Lujo' },
};
const PRICE_RANGES_EN: Record<string, { symbol: string; label: string }> = {
  free: { symbol: 'Free', label: 'Free' },
  budget: { symbol: '$', label: 'Budget' },
  moderate: { symbol: '$$', label: 'Moderate' },
  expensive: { symbol: '$$$', label: 'Pricey' },
  luxury: { symbol: '$$$$', label: 'Luxury' },
};

export function priceInfo(lang: Lang, range: string): { symbol: string; label: string } | undefined {
  return (lang === 'en' ? PRICE_RANGES_EN : PRICE_RANGES)[range];
}

/** Lo mínimo de un lugar para tarjetas, mapas y buscador (lo que viaja al navegador). */
export type PlaceSummary = Pick<
  Place,
  'id' | 'slug' | 'name' | 'category' | 'subcategory' | 'subcategoryKey' | 'shortDescription' | 'priceRange' | 'thumbnailUrl' | 'latitude' | 'longitude'
>;

export function toSummary(p: Place): PlaceSummary {
  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    category: p.category,
    subcategory: p.subcategory,
    subcategoryKey: p.subcategoryKey,
    shortDescription: p.shortDescription,
    priceRange: p.priceRange,
    thumbnailUrl: p.thumbnailUrl,
    latitude: p.latitude,
    longitude: p.longitude,
  };
}

// Subcategorías en plural para menús y filtros ("Viñedos", no "Viñedo"). Lo que no esté aquí
// se muestra tal cual viene de la base.
const SUBCATEGORY_PLURALS: Record<string, string> = {
  'Viñedo': 'Viñedos',
  'Quesería': 'Queserías',
  'Globo Aerostático': 'Globo aerostático',
  'Balneario': 'Balnearios',
  'Taller': 'Talleres',
  'Tour': 'Tours',
  'Restaurante': 'Restaurantes',
  'Cafetería': 'Cafeterías',
  'Bar': 'Bares',
  'Wine Bar': 'Bares de vino',
  'Pizzería': 'Pizzerías',
  'Nevería': 'Neverías',
  'Hotel': 'Hoteles',
  'Hotel Boutique': 'Hoteles boutique',
  'Monumento': 'Monumentos',
  'Museo': 'Museos',
  'Parque': 'Parques',
  'Plaza': 'Plazas',
  'Templo': 'Templos',
  'Mercado': 'Mercados',
  'Dulcería': 'Dulcerías',
  'Spa': 'Spas',
};

/** Plural de una subcategoría (clave en español) en el idioma pedido. */
export function subcategoryPlural(key: string, lang: Lang = 'es'): string {
  if (lang === 'en') return SUBCATEGORIES_EN[key]?.plural ?? key;
  return SUBCATEGORY_PLURALS[key] ?? key;
}

/** Subcategorías (por su clave en español) de una lista de lugares, de la más a la menos común. */
export function subcategoriesOf(places: Pick<Place, 'subcategoryKey'>[]): { key: string; slug: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of places) if (p.subcategoryKey) counts.set(p.subcategoryKey, (counts.get(p.subcategoryKey) ?? 0) + 1);
  return [...counts]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'es'))
    .map(([key, count]) => ({ key, slug: slugify(key), count }));
}

/** Link a una categoría filtrada por subcategoría (`/lugares/experiencias?tipo=vinedo`). */
export function subcategoryHref(category: PlaceCategory, sub: string): string {
  return `/lugares/${CATEGORIES[category].slug}?tipo=${slugify(sub)}`;
}

// Claves de "Mi viaje" (lib/favorites.ts). Aquí y no allá porque las tarjetas, que son Server
// Components, también las calculan.
export const placeKey = (id: string) => `p:${id}`;
export const eventKey = (id: string) => `e:${id}`;

/** Texto sin acentos y en minúsculas, para comparar búsquedas. */
export function foldText(text: string): string {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

export function categoryFromSlug(slug: string): PlaceCategory | null {
  const entry = Object.entries(CATEGORIES).find(([, c]) => c.slug === slug);
  return entry ? (entry[0] as PlaceCategory) : null;
}

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Todavía no hay columna `slug` en Neon: se deriva del nombre. Si dos coinciden, el segundo
// lleva el inicio de su id para que la URL no choque.
function assignSlugs<T extends { id: string; slug: string }>(items: T[], base: (item: T) => string): T[] {
  const seen = new Set<string>();
  for (const item of items) {
    let slug = slugify(base(item)) || item.id.slice(0, 8);
    if (seen.has(slug)) slug = `${slug}-${item.id.slice(0, 6)}`;
    seen.add(slug);
    item.slug = slug;
  }
  return items;
}

// Neon devuelve latitude/longitude como strings (igual que maneja `decodeFlexibleDouble` en la app).
function toNumber(value: unknown): number | null {
  if (value == null || value === '') return null;
  const n = typeof value === 'number' ? value : parseFloat(String(value));
  return Number.isFinite(n) ? n : null;
}

function toSchedule(value: unknown): Record<string, string> | null {
  if (!value) return null;
  if (typeof value === 'string') {
    try {
      return toSchedule(JSON.parse(value));
    } catch {
      return null;
    }
  }
  if (typeof value === 'object' && Object.keys(value as object).length > 0) return value as Record<string, string>;
  return null;
}

function dateOnly(value: string): string {
  return String(value).slice(0, 10);
}

// Reintenta errores de red y 5xx: el build pide el API desde muchas páginas a la vez y un 500
// pasajero (Neon despertando) tiraba todo el despliegue.
async function fetchJSON<T>(path: string, attempt = 1): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${path}`, { next: { revalidate: REVALIDATE_SECONDS } });
    if (res.status >= 500) throw new Error(`API ${path} respondió ${res.status}`);
    if (!res.ok) throw Object.assign(new Error(`API ${path} respondió ${res.status}`), { final: true });
    return (await res.json()) as T;
  } catch (err) {
    if (attempt >= 3 || (err as { final?: boolean }).final) throw err;
    await new Promise((r) => setTimeout(r, 600 * attempt));
    return fetchJSON<T>(path, attempt + 1);
  }
}

// Las fotos de Commons en la base apuntan al archivo original (hasta ~3 MB cada una). Se piden
// en un ancho estándar de Wikimedia: 960 px para tarjetas, mapas y destacados (alcanza para
// pantallas retina) y 1280 px para la galería de la ficha. Lo que no sea de Commons se queda igual.
const COMMONS_ORIGINAL = /^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/([0-9a-f]\/[0-9a-f]{2})\/([^/]+\.(?:jpe?g|png|webp))$/i;

function commonsThumb(url: string, width: 960 | 1280): string {
  const m = url.match(COMMONS_ORIGINAL);
  return m ? `https://upload.wikimedia.org/wikipedia/commons/thumb/${m[1]}/${m[2]}/${width}px-${m[2]}` : url;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function photoUrls(raw: any): { imageUrls: string[]; thumbnailUrl: string | null } {
  const images: string[] = raw.image_urls ?? [];
  const thumb: string | null = raw.thumbnail_url ?? images[0] ?? null;
  return { imageUrls: images.map((u) => commonsThumb(u, 1280)), thumbnailUrl: thumb && commonsThumb(thumb, 960) };
}

export async function getPlaces(lang: Lang = 'es'): Promise<Place[]> {
  const data = await fetchJSON<{ places: any[] }>('/api/places?limit=1000');
  const places: Place[] = data.places
    .filter((p) => p.category in CATEGORIES)
    .map((p) => ({
      id: p.id,
      slug: '',
      name: p.name,
      category: p.category,
      subcategory: p.subcategory ?? '',
      subcategoryKey: p.subcategory ?? '',
      latitude: toNumber(p.latitude) ?? 0,
      longitude: toNumber(p.longitude) ?? 0,
      address: p.address ?? '',
      shortDescription: p.short_description ?? '',
      fullDescription: p.full_description ?? '',
      priceRange: p.price_range ?? 'moderate',
      ...photoUrls(p),
      phoneNumber: p.phone_number || null,
      email: p.email || null,
      website: p.website || null,
      whatsappNumber: p.whatsapp_number || null,
      schedule: toSchedule(p.schedule_json),
      scheduleText: toSchedule(p.schedule_json),
      amenities: p.amenities ?? [],
      tags: p.tags ?? [],
      isFeatured: !!p.is_featured,
      isVerified: !!p.is_verified,
      contentVerified: !!p.content_verified,
      updatedAt: p.updated_at,
    }));
  // Slugs asignados en orden de creación estable (id) para que no cambien si cambia el rating.
  assignSlugs([...places].sort((a, b) => a.id.localeCompare(b.id)), (p) => p.name);
  return lang === 'en' ? places.map(placeToEnglish) : places;
}

// Lo que llegue sin traducción (un lugar nuevo en el panel) se queda en español.
const term = (t: string) => TERMS_EN[t] ?? t;

function placeToEnglish(p: Place): Place {
  const t = PLACES_EN[p.id];
  const schedule = p.schedule && {
    ...Object.fromEntries(Object.entries(p.schedule).map(([day, v]) => [day, v.replace(/^cerrado$/i, 'Closed')])),
    ...t?.schedule,
  };
  return {
    ...p,
    subcategory: SUBCATEGORIES_EN[p.subcategoryKey]?.singular ?? p.subcategory,
    shortDescription: t?.shortDescription ?? p.shortDescription,
    fullDescription: t?.fullDescription ?? p.fullDescription,
    scheduleText: schedule,
    amenities: p.amenities.map(term),
    tags: p.tags.map(term),
  };
}

function eventToEnglish(e: TequisEvent): TequisEvent {
  const t = EVENTS_EN[e.id];
  return {
    ...e,
    title: t?.title ?? e.title,
    shortDescription: t?.shortDescription ?? e.shortDescription,
    fullDescription: t?.fullDescription ?? e.fullDescription,
    locationName: t?.locationName ?? e.locationName,
    ticketPrice: t?.ticketPrice ?? e.ticketPrice,
    organizerName: t?.organizerName ?? e.organizerName,
    category: term(e.category),
    tags: e.tags.map(term),
  };
}

export async function getEvents(lang: Lang = 'es'): Promise<TequisEvent[]> {
  const data = await fetchJSON<{ events: any[] }>('/api/events?limit=1000');
  const events: TequisEvent[] = data.events.map((e) => ({
    id: e.id,
    slug: '',
    title: e.title,
    shortDescription: e.short_description ?? '',
    fullDescription: e.full_description ?? '',
    startDate: dateOnly(e.start_date),
    endDate: dateOnly(e.end_date),
    isRecurring: !!e.is_recurring,
    locationName: e.location_name || null,
    latitude: toNumber(e.latitude),
    longitude: toNumber(e.longitude),
    address: e.address || null,
    category: e.category ?? '',
    tags: e.tags ?? [],
    ...photoUrls(e),
    isFree: !!e.is_free,
    ticketPrice: e.ticket_price || null,
    ticketUrl: e.ticket_url || null,
    requiresReservation: !!e.requires_reservation,
    isFeatured: !!e.is_featured,
    organizerName: e.organizer_name || null,
    organizerContact: e.organizer_contact || null,
  }));
  assignSlugs([...events].sort((a, b) => a.id.localeCompare(b.id)), (e) => e.title);
  return lang === 'en' ? events.map(eventToEnglish) : events;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export async function getPlace(slug: string, lang: Lang = 'es'): Promise<Place | null> {
  return (await getPlaces(lang)).find((p) => p.slug === slug) ?? null;
}

export async function getEvent(slug: string, lang: Lang = 'es'): Promise<TequisEvent | null> {
  return (await getEvents(lang)).find((e) => e.slug === slug) ?? null;
}

// --- Fechas ---------------------------------------------------------------------------

const TZ = 'America/Mexico_City';

/** Hoy en Tequisquiapan, como YYYY-MM-DD. */
export function todayInTequis(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}

export type EventStatus = 'upcoming' | 'happening' | 'past';

export function eventStatus(event: TequisEvent, today = todayInTequis()): EventStatus {
  if (event.endDate < today) return 'past';
  if (event.startDate > today) return 'upcoming';
  return 'happening';
}

export function formatDateRange(start: string, end: string, lang: Lang = 'es'): string {
  if (lang === 'en') {
    const f = new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' });
    const a = new Date(`${start}T00:00:00Z`);
    return start === end ? f.format(a) : f.formatRange(a, new Date(`${end}T00:00:00Z`));
  }
  const fmt = (d: string, opts: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat('es-MX', { timeZone: 'UTC', ...opts }).format(new Date(`${d}T00:00:00Z`));
  if (start === end) return fmt(start, { day: 'numeric', month: 'long', year: 'numeric' });
  const sameYear = start.slice(0, 4) === end.slice(0, 4);
  const sameMonth = sameYear && start.slice(5, 7) === end.slice(5, 7);
  if (sameMonth) return `${Number(start.slice(8, 10))} al ${fmt(end, { day: 'numeric', month: 'long', year: 'numeric' })}`;
  if (sameYear) return `${fmt(start, { day: 'numeric', month: 'long' })} al ${fmt(end, { day: 'numeric', month: 'long', year: 'numeric' })}`;
  return `${fmt(start, { day: 'numeric', month: 'long', year: 'numeric' })} al ${fmt(end, { day: 'numeric', month: 'long', year: 'numeric' })}`;
}

// --- Rutas temáticas -----------------------------------------------------------------

// Mismas rutas que `curatedRoutes` en ViewsRoutesView.swift: agrupan lugares por subcategoría.
export const THEMATIC_ROUTES = [
  { slug: 'vino-y-queso', title: 'Ruta del Vino y Queso', subtitle: 'Viñedos y queserías', color: '#7c3aed', subcategories: ['Viñedo', 'Quesería'] },
  { slug: 'artesanal', title: 'Ruta Artesanal', subtitle: 'Artesanías, mercado y dulces', color: '#db2777', subcategories: ['Artesanías', 'Mercado', 'Dulcería'] },
  { slug: 'historica', title: 'Ruta Histórica', subtitle: 'Plazas, templos y monumentos', color: '#2563eb', subcategories: ['Plaza', 'Templo', 'Monumento', 'Museo'] },
  { slug: 'aventura', title: 'Ruta de Aventura', subtitle: 'Globo, balnearios y naturaleza', color: '#16a34a', subcategories: ['Globo Aerostático', 'Balneario', 'Spa', 'Naturaleza', 'Grutas'] },
] as const;

export type ThematicRoute = (typeof THEMATIC_ROUTES)[number];

const ROUTES_EN: Record<string, { title: string; subtitle: string }> = {
  'vino-y-queso': { title: 'Wine and Cheese Route', subtitle: 'Wineries and cheese makers' },
  artesanal: { title: 'Crafts Route', subtitle: 'Crafts, market and sweets' },
  historica: { title: 'Historic Route', subtitle: 'Plazas, churches and monuments' },
  aventura: { title: 'Adventure Route', subtitle: 'Balloons, hot springs and nature' },
};

/** Título y subtítulo de una ruta temática en el idioma pedido. */
export function routeText(lang: Lang, route: ThematicRoute): { title: string; subtitle: string } {
  return lang === 'en' ? ROUTES_EN[route.slug] : route;
}

/** Los lugares de una ruta, en el mismo orden que la app (el API ya los trae por rating). */
export function placesForRoute<T extends Pick<Place, 'subcategoryKey'>>(route: ThematicRoute, places: T[]): T[] {
  return places.filter((p) => (route.subcategories as readonly string[]).includes(p.subcategoryKey));
}

export function mapsDirectionsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

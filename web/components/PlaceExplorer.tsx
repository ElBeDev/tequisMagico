'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import { LayoutGrid, Map as MapIcon } from 'lucide-react';
import { CATEGORIES, subcategoriesOf, subcategoryPlural, type PlaceSummary } from '@/lib/data';
import { dict } from '@/lib/dict';
import { href, type Lang, visiblePath } from '@/lib/i18n';
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/motion';
import { PlaceCard } from './Cards';
import PlacesMap from './PlacesMap';

/**
 * Lista de lugares con filtro por tipo (`?tipo=vinedo`, en inglés `?type=vinedo`, así los links del menú llegan ya
 * filtrados) y cambio entre cuadrícula y mapa. Usa useSearchParams: la página lo envuelve en
 * <Suspense> con la cuadrícula completa de respaldo, que es lo que ve Google.
 *
 * `typeLinks` (slug de subcategoría → URL ya en el idioma de la página): los tipos que tienen página
 * propia (lib/tipos.ts) enlazan a ella y no a `?tipo=`, que tiene la categoría como canónica y Google
 * no indexa ("Página alternativa con etiqueta canónica adecuada" en Search Console, nov 2026).
 */
export default function PlaceExplorer({
  places,
  lang,
  subfilters = true,
  typeLinks = {},
}: {
  places: PlaceSummary[];
  lang: Lang;
  subfilters?: boolean;
  typeLinks?: Record<string, string>;
}) {
  const params = useSearchParams();
  const pathname = visiblePath(usePathname());
  const t = dict(lang);
  const param = lang === 'en' ? 'type' : 'tipo';
  const subs = subfilters ? subcategoriesOf(places) : [];
  const tipo = subs.find((s) => s.slug === params.get(param))?.slug ?? null;
  const [view, setView] = useState<'grid' | 'map'>('grid');
  const grid = useRef<HTMLDivElement>(null);

  const filtered = tipo ? places.filter((p) => subs.find((s) => s.slug === tipo)?.key === p.subcategoryKey) : places;

  useGSAP(
    () => {
      if (prefersReducedMotion() || !grid.current) return;
      gsap.fromTo(grid.current.children, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', stagger: 0.05, clearProps: 'transform,opacity,visibility' });
    },
    { dependencies: [tipo, view], scope: grid },
  );

  // `page`: el chip lleva a otra página (por tipo), no filtra aquí; esa sí sube al inicio y entra al historial.
  const chip = (href: string, label: string, active: boolean, count?: number, page = false) => (
    <Link
      key={href}
      href={href}
      scroll={page}
      replace={!page}
      aria-current={active ? 'true' : undefined}
      className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-1.5 transition-colors ${active ? 'bg-ink text-bg' : 'bg-surface hover:bg-line'}`}
    >
      {label}
      {count !== undefined && <span className={`meta ${active ? 'text-bg/70' : 'text-muted'}`}>{count}</span>}
    </Link>
  );

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {subs.length > 1 ? (
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
            {chip(pathname, t.allTypes, tipo === null)}
            {subs.map((s) =>
              typeLinks[s.slug]
                ? chip(typeLinks[s.slug], subcategoryPlural(s.key, lang), tipo === s.slug, s.count, true)
                : chip(`?${param}=${s.slug}`, subcategoryPlural(s.key, lang), tipo === s.slug, s.count),
            )}
          </div>
        ) : (
          <p className="text-muted">{filtered.length} {lang === 'en' ? 'places' : 'lugares'}</p>
        )}
        <div className="flex shrink-0 items-center gap-1 self-end rounded-full bg-surface p-1 sm:self-auto" role="group" aria-label={lang === 'en' ? 'View' : 'Vista'}>
          {(['grid', 'map'] as const).map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              onClick={() => setView(v)}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 font-medium transition-colors ${view === v ? 'bg-ink text-bg' : 'hover:bg-line'}`}
            >
              {v === 'grid' ? <LayoutGrid className="size-4" aria-hidden /> : <MapIcon className="size-4" aria-hidden />}
              {v === 'grid' ? t.list : t.map}
            </button>
          ))}
        </div>
      </div>

      {view === 'map' ? (
        <div className="mt-8">
          <PlacesMap
            key={tipo ?? 'todos'}
            zoom={15}
            lang={lang}
            className="h-[75vh]"
            points={filtered.map((p) => ({
              id: p.id,
              name: p.name,
              href: href(lang, `/lugar/${p.slug}`),
              subtitle: p.subcategory,
              lat: p.latitude,
              lng: p.longitude,
              color: CATEGORIES[p.category].color,
              image: p.thumbnailUrl,
            }))}
          />
        </div>
      ) : (
        <div ref={grid} className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PlaceCard key={p.id} place={p} lang={lang} reveal={false} />
          ))}
        </div>
      )}
    </div>
  );
}

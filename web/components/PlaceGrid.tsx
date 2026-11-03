import Link from 'next/link';
import { CATEGORIES, categoryInfo, type PlaceCategory, type PlaceSummary } from '@/lib/data';
import { dict } from '@/lib/dict';
import { href, type Lang } from '@/lib/i18n';
import { PlaceCard } from './Cards';

/** Filtros por categoría como links (cada categoría es su propia página, indexable). */
export function CategoryTabs({ places, active, lang }: { places: PlaceSummary[]; active: PlaceCategory | null; lang: Lang }) {
  const present = (Object.keys(CATEGORIES) as PlaceCategory[]).filter((key) => places.some((p) => p.category === key));
  const tab = (path: string, label: string, isActive: boolean) => (
    <Link
      key={path}
      href={href(lang, path)}
      aria-current={isActive ? 'page' : undefined}
      className={`whitespace-nowrap rounded-full px-4 py-2 transition-colors ${isActive ? 'bg-ink text-bg' : 'bg-surface hover:bg-line'}`}
    >
      {label}
    </Link>
  );
  return (
    <div className="no-scrollbar -mx-[var(--margin)] flex gap-2 overflow-x-auto px-[var(--margin)] sm:mx-0 sm:flex-wrap sm:px-0">
      {tab('/lugares', dict(lang).all, active === null)}
      {present.map((key) => tab(`/lugares/${CATEGORIES[key].slug}`, categoryInfo(lang, key).label, active === key))}
    </div>
  );
}

export function PlaceGrid({ places, lang, reveal = true, className = '' }: { places: PlaceSummary[]; lang: Lang; reveal?: boolean; className?: string }) {
  return (
    <div className={`grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {places.map((p) => (
        <PlaceCard key={p.id} place={p} lang={lang} reveal={reveal} />
      ))}
    </div>
  );
}

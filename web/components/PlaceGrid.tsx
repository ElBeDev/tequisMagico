import Link from 'next/link';
import { CATEGORIES, type Place, type PlaceCategory } from '@/lib/data';
import { PlaceCard } from './Cards';

/** Filtros por categoría como links (cada categoría es su propia página, indexable). */
export function CategoryTabs({ places, active }: { places: Place[]; active: PlaceCategory | null }) {
  const present = (Object.keys(CATEGORIES) as PlaceCategory[]).filter((key) => places.some((p) => p.category === key));
  const tab = (href: string, label: string, isActive: boolean) => (
    <Link
      key={href}
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={`whitespace-nowrap border px-4 py-2 text-[15px] transition ${
        isActive ? 'border-ink bg-ink text-bg' : 'border-line hover:border-ink'
      }`}
    >
      {label}
    </Link>
  );
  return (
    <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:justify-center">
      {tab('/lugares', 'Todos', active === null)}
      {present.map((key) => tab(`/lugares/${CATEGORIES[key].slug}`, CATEGORIES[key].label, active === key))}
    </div>
  );
}

export function PlaceGrid({ places }: { places: Place[] }) {
  return (
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {places.map((p) => (
        <PlaceCard key={p.id} place={p} />
      ))}
    </div>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { CATEGORIES, categoryFromSlug, getPlaces, toSummary } from '@/lib/data';
import { CategoryTabs, PlaceGrid } from '@/components/PlaceGrid';
import PlaceExplorer from '@/components/PlaceExplorer';
import { PageIntro } from '@/components/Section';

export const revalidate = 300;

export function generateStaticParams() {
  return Object.values(CATEGORIES).map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({ params }: PageProps<'/lugares/[categoria]'>): Promise<Metadata> {
  const category = categoryFromSlug((await params).categoria);
  if (!category) return {};
  const c = CATEGORIES[category];
  return {
    title: `${c.label} en Tequisquiapan`,
    description: `${c.blurb} Guía de ${c.label.toLowerCase()} en Tequisquiapan, Querétaro.`,
    alternates: { canonical: `/lugares/${c.slug}` },
  };
}

export default async function CategoriaPage({ params }: PageProps<'/lugares/[categoria]'>) {
  const category = categoryFromSlug((await params).categoria);
  if (!category) notFound();
  const all = (await getPlaces()).map(toSummary);
  const places = all.filter((p) => p.category === category);
  const c = CATEGORIES[category];

  return (
    <>
      <PageIntro title={`${c.label} en Tequisquiapan`}>
        {c.blurb}
      </PageIntro>
      <div className="frame">
        <CategoryTabs places={all} active={category} />
        <div className="mt-10">
          {places.length > 0 ? (
            <Suspense fallback={<PlaceGrid places={places} reveal={false} className="mt-12" />}>
              <PlaceExplorer places={places} />
            </Suspense>
          ) : (
            <p className="text-center text-muted">Todavía no hay lugares en esta categoría.</p>
          )}
        </div>
      </div>
    </>
  );
}

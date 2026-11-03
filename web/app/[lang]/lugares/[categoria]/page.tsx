import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { CATEGORIES, categoryFromSlug, categoryInfo, getPlaces, toSummary } from '@/lib/data';
import { LANGS, alternates, langOf } from '@/lib/i18n';
import { CategoryTabs, PlaceGrid } from '@/components/PlaceGrid';
import PlaceExplorer from '@/components/PlaceExplorer';
import { PageIntro } from '@/components/Section';

export const revalidate = 300;

export function generateStaticParams() {
  return LANGS.flatMap((lang) => Object.values(CATEGORIES).map((c) => ({ lang, categoria: c.slug })));
}

export async function generateMetadata({ params }: PageProps<'/[lang]/lugares/[categoria]'>): Promise<Metadata> {
  const p = await params;
  const lang = langOf(p);
  const category = categoryFromSlug(p.categoria);
  if (!category) return {};
  const c = categoryInfo(lang, category);
  return lang === 'en'
    ? {
        title: `${c.label} in Tequisquiapan`,
        description: `${c.blurb} A guide to ${c.label.toLowerCase()} in Tequisquiapan, Querétaro, Mexico.`,
        alternates: alternates(lang, `/lugares/${c.slug}`),
      }
    : {
        title: `${c.label} en Tequisquiapan`,
        description: `${c.blurb} Guía de ${c.label.toLowerCase()} en Tequisquiapan, Querétaro.`,
        alternates: alternates(lang, `/lugares/${c.slug}`),
      };
}

export default async function CategoriaPage({ params }: PageProps<'/[lang]/lugares/[categoria]'>) {
  const p = await params;
  const lang = langOf(p);
  const category = categoryFromSlug(p.categoria);
  if (!category) notFound();
  const all = (await getPlaces(lang)).map(toSummary);
  const places = all.filter((x) => x.category === category);
  const c = categoryInfo(lang, category);

  return (
    <>
      <PageIntro title={lang === 'en' ? `${c.label} in Tequisquiapan` : `${c.label} en Tequisquiapan`}>
        {c.blurb}
      </PageIntro>
      <div className="frame">
        <CategoryTabs places={all} active={category} lang={lang} />
        <div className="mt-10">
          {places.length > 0 ? (
            <Suspense fallback={<PlaceGrid places={places} lang={lang} reveal={false} className="mt-12" />}>
              <PlaceExplorer places={places} lang={lang} />
            </Suspense>
          ) : (
            <p className="text-center text-muted">{lang === 'en' ? 'No places in this category yet.' : 'Todavía no hay lugares en esta categoría.'}</p>
          )}
        </div>
      </div>
    </>
  );
}

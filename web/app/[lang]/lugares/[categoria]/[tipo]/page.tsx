import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { CATEGORIES, SITE_URL, categoryFromSlug, categoryInfo, getPlaces, toSummary } from '@/lib/data';
import { LANGS, alternates, href, langOf } from '@/lib/i18n';
import { MIN_PLACES, activeTypePages, placesOfType, typePage } from '@/lib/tipos';
import { JsonLd } from '@/components/Cards';
import { PlaceGrid, TypeTabs } from '@/components/PlaceGrid';
import PlaceExplorer from '@/components/PlaceExplorer';
import { PageIntro } from '@/components/Section';

// Página por tipo de lugar (lib/tipos.ts): /lugares/experiencias/balnearios. Solo existe con
// MIN_PLACES lugares o más; si un tipo baja de ahí (un lugar desactivado), da 404 y sale del sitemap.
export const revalidate = 300;

export async function generateStaticParams() {
  const places = await getPlaces();
  return LANGS.flatMap((lang) => activeTypePages(places).map((t) => ({ lang, categoria: CATEGORIES[t.category].slug, tipo: t.slug })));
}

async function load(params: PageProps<'/[lang]/lugares/[categoria]/[tipo]'>['params']) {
  const p = await params;
  const lang = langOf(p);
  const category = categoryFromSlug(p.categoria);
  const type = category ? typePage(category, p.tipo) : undefined;
  if (!category || !type) return null;
  const all = (await getPlaces(lang)).map(toSummary);
  const places = placesOfType(type, all);
  if (places.length < MIN_PLACES) return null;
  return { lang, category, type, all, places };
}

export async function generateMetadata({ params }: PageProps<'/[lang]/lugares/[categoria]/[tipo]'>): Promise<Metadata> {
  const data = await load(params);
  if (!data) return {};
  const { lang, type, places } = data;
  const path = `/lugares/${CATEGORIES[type.category].slug}/${type.slug}`;
  const description = type.description[lang](places.length);
  return {
    title: type.title[lang],
    description,
    alternates: alternates(lang, path),
    openGraph: { title: type.title[lang], description },
  };
}

export default async function TipoPage({ params }: PageProps<'/[lang]/lugares/[categoria]/[tipo]'>) {
  const data = await load(params);
  if (!data) notFound();
  const { lang, category, type, all, places } = data;
  const c = categoryInfo(lang, category);
  const path = `/lugares/${c.slug}/${type.slug}`;
  const siblings = activeTypePages(all).filter((t) => t.category === category);
  const title = lang === 'en' ? `${type.label.en} in Tequisquiapan` : `${type.label.es} en Tequisquiapan`;

  // Migas y lista para Google: la página como listado de sus lugares.
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: lang === 'en' ? 'Places' : 'Lugares', item: `${SITE_URL}${href(lang, '/lugares')}` },
        { '@type': 'ListItem', position: 2, name: c.label, item: `${SITE_URL}${href(lang, `/lugares/${c.slug}`)}` },
        { '@type': 'ListItem', position: 3, name: type.label[lang], item: `${SITE_URL}${href(lang, path)}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: title,
      numberOfItems: places.length,
      itemListElement: places.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, url: `${SITE_URL}${href(lang, `/lugar/${p.slug}`)}` })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageIntro title={title}>{type.intro[lang]}</PageIntro>
      <div className="frame">
        <TypeTabs types={siblings} category={category} active={type.slug} lang={lang} />
        <div className="mt-10">
          <Suspense fallback={<PlaceGrid places={places} lang={lang} reveal={false} className="mt-12" />}>
            <PlaceExplorer places={places} lang={lang} subfilters={type.keys.length > 1} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

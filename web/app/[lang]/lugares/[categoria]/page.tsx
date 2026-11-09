import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { CATEGORIES, categoryFromSlug, categoryInfo, getPlaces, toSummary, type PlaceCategory } from '@/lib/data';
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
  const seo = SEO[lang][category];
  if (seo) {
    const n = (await getPlaces(lang)).filter((pl) => pl.category === category).length;
    return { title: seo.title, description: seo.description(n), alternates: alternates(lang, `/lugares/${c.slug}`) };
  }
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

// Títulos con las palabras con que la gente busca en Google ("dónde comer en tequisquiapan",
// "restaurantes en tequisquiapan", "balnearios tequisquiapan"; Search Console, nov 2026). Solo
// nombran tipos de lugar que hay en el listado: si cambia lo que hay, cámbialos (no hay museo
// activo en sitios turísticos, por ejemplo).
type Seo = { title: string; description: (n: number) => string };
const SEO: Record<'es' | 'en', Partial<Record<PlaceCategory, Seo>>> = {
  es: {
    gastronomia: {
      title: 'Dónde comer en Tequisquiapan: restaurantes, cafés y bares',
      description: (n) => `${n} lugares para comer en Tequisquiapan: restaurantes, cafeterías, antojitos, mariscos, pizzería, bares y nevería, con mapa y cómo llegar.`,
    },
    experiencias: {
      title: 'Viñedos, queserías, balnearios y globo en Tequisquiapan',
      description: (n) => `${n} experiencias en Tequisquiapan y alrededores: viñedos de la Ruta del Vino y Queso, queserías, balnearios, vuelo en globo aerostático y talleres.`,
    },
    turistico: {
      title: 'Qué ver en Tequisquiapan: plaza, parroquia, La Pila y la presa',
      description: (n) => `${n} sitios turísticos de Tequisquiapan: la Plaza Miguel Hidalgo, el Templo de Santa María de la Asunción, La Pila, su parque y la Presa Centenario.`,
    },
    hospedaje: {
      title: 'Hoteles en Tequisquiapan: dónde hospedarse',
      description: (n) => `${n} hoteles y hoteles boutique en Tequisquiapan, Querétaro, con ubicación en el mapa y cómo llegar.`,
    },
    compras: {
      title: 'Mercados, artesanías y dulces típicos en Tequisquiapan',
      description: (n) => `${n} lugares de compras en Tequisquiapan: mercados de artesanías, cestería, dulcerías y productos locales, con mapa y cómo llegar.`,
    },
  },
  en: {
    gastronomia: {
      title: 'Where to eat in Tequisquiapan: restaurants, cafés and bars',
      description: (n) => `${n} places to eat in Tequisquiapan: restaurants, cafés, street food, seafood, pizza, bars and ice cream, with a map and directions.`,
    },
    experiencias: {
      title: 'Wineries, cheese farms, hot springs and balloon rides in Tequisquiapan',
      description: (n) => `${n} experiences in and around Tequisquiapan: wineries on the Wine and Cheese Route, cheese farms, water parks, hot-air balloon flights and workshops.`,
    },
    turistico: {
      title: 'Things to see in Tequisquiapan: main square, church, La Pila and the dam',
      description: (n) => `${n} sights in Tequisquiapan: Plaza Miguel Hidalgo, the Church of Santa María de la Asunción, La Pila and its park, and the Centenario dam.`,
    },
    hospedaje: {
      title: 'Hotels in Tequisquiapan: where to stay',
      description: (n) => `${n} hotels and boutique hotels in Tequisquiapan, Querétaro, Mexico, with a map and directions.`,
    },
    compras: {
      title: 'Markets, crafts and traditional sweets in Tequisquiapan',
      description: (n) => `${n} places to shop in Tequisquiapan: craft markets, basketry, sweet shops and local products, with a map and directions.`,
    },
  },
};

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

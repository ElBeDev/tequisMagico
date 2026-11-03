import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getPlaces, toSummary } from '@/lib/data';
import { alternates, langOf } from '@/lib/i18n';
import { CategoryTabs, PlaceGrid } from '@/components/PlaceGrid';
import PlaceExplorer from '@/components/PlaceExplorer';
import { PageIntro } from '@/components/Section';

export const revalidate = 300;

export async function generateMetadata({ params }: PageProps<'/[lang]/lugares'>): Promise<Metadata> {
  const lang = langOf(await params);
  return lang === 'en'
    ? {
        title: 'Things to do in Tequisquiapan',
        description: 'Sights, wineries, cheese makers, restaurants, hotels and craft shops in Tequisquiapan, Querétaro, Mexico.',
        alternates: alternates(lang, '/lugares'),
      }
    : {
        title: 'Qué hacer en Tequisquiapan',
        description: 'Sitios turísticos, viñedos, queserías, restaurantes, hoteles y tiendas de artesanías en Tequisquiapan, Querétaro.',
        alternates: alternates(lang, '/lugares'),
      };
}

export default async function LugaresPage({ params }: PageProps<'/[lang]/lugares'>) {
  const lang = langOf(await params);
  const places = (await getPlaces(lang)).map(toSummary);
  return (
    <>
      <PageIntro title={lang === 'en' ? 'Things to do in Tequisquiapan' : 'Qué hacer en Tequisquiapan'}>
        {lang === 'en'
          ? `${places.length} places to visit, eat, sleep and shop in town and around it.`
          : `${places.length} lugares para recorrer, comer, dormir y comprar en el pueblo y sus alrededores.`}
      </PageIntro>
      <div className="frame">
        <CategoryTabs places={places} active={null} lang={lang} />
        <div className="mt-10">
          <Suspense fallback={<PlaceGrid places={places} lang={lang} reveal={false} className="mt-12" />}>
            <PlaceExplorer places={places} lang={lang} subfilters={false} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

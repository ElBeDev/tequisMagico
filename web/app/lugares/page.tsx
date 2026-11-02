import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getPlaces, toSummary } from '@/lib/data';
import { CategoryTabs, PlaceGrid } from '@/components/PlaceGrid';
import PlaceExplorer from '@/components/PlaceExplorer';
import { PageIntro } from '@/components/Section';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Qué hacer en Tequisquiapan',
  description: 'Sitios turísticos, viñedos, queserías, restaurantes, hoteles y tiendas de artesanías en Tequisquiapan, Querétaro.',
  alternates: { canonical: '/lugares' },
};

export default async function LugaresPage() {
  const places = (await getPlaces()).map(toSummary);
  return (
    <>
      <PageIntro title="Qué hacer en Tequisquiapan">
        {places.length} lugares para recorrer, comer, dormir y comprar en el pueblo y sus alrededores.
      </PageIntro>
      <div className="frame">
        <CategoryTabs places={places} active={null} />
        <div className="mt-10">
          <Suspense fallback={<PlaceGrid places={places} reveal={false} className="mt-12" />}>
            <PlaceExplorer places={places} subfilters={false} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

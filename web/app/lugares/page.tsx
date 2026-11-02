import type { Metadata } from 'next';
import { getPlaces } from '@/lib/data';
import { CategoryTabs, PlaceGrid } from '@/components/PlaceGrid';
import { PageIntro } from '@/components/Section';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Qué hacer en Tequisquiapan',
  description: 'Sitios turísticos, viñedos, queserías, restaurantes, hoteles y tiendas de artesanías en Tequisquiapan, Querétaro.',
  alternates: { canonical: '/lugares' },
};

export default async function LugaresPage() {
  const places = await getPlaces();
  return (
    <>
      <PageIntro eyebrow="Planea tu visita" title="Qué hacer" serif="en Tequisquiapan">
        {places.length} lugares para recorrer, comer, dormir y comprar en el pueblo y sus alrededores.
      </PageIntro>
      <div className="mx-auto max-w-[1240px] px-5">
        <CategoryTabs places={places} active={null} />
        <div className="mt-14">
          <PlaceGrid places={places} />
        </div>
      </div>
    </>
  );
}

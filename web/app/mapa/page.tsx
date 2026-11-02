import type { Metadata } from 'next';
import { CATEGORIES, getPlaces, type PlaceCategory } from '@/lib/data';
import PlacesMap from '@/components/PlacesMap';
import { PageIntro } from '@/components/Section';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Mapa de Tequisquiapan',
  description: 'Mapa interactivo con todos los lugares de Tequisquiapan: sitios turísticos, viñedos, restaurantes, hoteles y tiendas.',
  alternates: { canonical: '/mapa' },
};

export default async function MapaPage() {
  const places = await getPlaces();
  const groups = (Object.keys(CATEGORIES) as PlaceCategory[])
    .filter((key) => places.some((p) => p.category === key))
    .map((key) => ({ key, label: CATEGORIES[key].label, color: CATEGORIES[key].color }));

  return (
    <>
      <PageIntro eyebrow="Mapa" title="Tequisquiapan" serif="lugar por lugar">
        Toca un punto para ver el lugar. Filtra por categoría con los botones.
      </PageIntro>
      <div className="mx-auto max-w-[1240px] px-5">
      <PlacesMap
        zoom={14}
        groups={groups}
        points={places.map((p) => ({
          id: p.id,
          name: p.name,
          href: `/lugar/${p.slug}`,
          subtitle: p.subcategory,
          lat: p.latitude,
          lng: p.longitude,
          color: CATEGORIES[p.category].color,
          group: p.category,
        }))}
      />
      </div>
    </>
  );
}

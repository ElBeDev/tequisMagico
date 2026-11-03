import type { Metadata } from 'next';
import { CATEGORIES, categoryInfo, getPlaces, type PlaceCategory } from '@/lib/data';
import { alternates, href, langOf } from '@/lib/i18n';
import PlacesMap from '@/components/PlacesMap';
import { PageIntro } from '@/components/Section';

export const revalidate = 300;

export async function generateMetadata({ params }: PageProps<'/[lang]/mapa'>): Promise<Metadata> {
  const lang = langOf(await params);
  return lang === 'en'
    ? {
        title: 'Map of Tequisquiapan',
        description: 'Interactive map of every place in Tequisquiapan: sights, wineries, restaurants, hotels and shops.',
        alternates: alternates(lang, '/mapa'),
      }
    : {
        title: 'Mapa de Tequisquiapan',
        description: 'Mapa interactivo con todos los lugares de Tequisquiapan: sitios turísticos, viñedos, restaurantes, hoteles y tiendas.',
        alternates: alternates(lang, '/mapa'),
      };
}

export default async function MapaPage({ params }: PageProps<'/[lang]/mapa'>) {
  const lang = langOf(await params);
  const places = await getPlaces(lang);
  const groups = (Object.keys(CATEGORIES) as PlaceCategory[])
    .filter((key) => places.some((p) => p.category === key))
    .map((key) => ({ key, label: categoryInfo(lang, key).label, color: CATEGORIES[key].color }));

  return (
    <>
      <PageIntro title={lang === 'en' ? 'Map of Tequisquiapan' : 'Mapa de Tequisquiapan'}>
        {lang === 'en' ? 'Tap a pin to see the place. Filter by category with the buttons.' : 'Toca un punto para ver el lugar. Filtra por categoría con los botones.'}
      </PageIntro>
      <div className="frame">
        <PlacesMap
          zoom={16}
          wheelZoom
          lang={lang}
          className="h-[75vh]"
          groups={groups}
          points={places.map((p) => ({
            id: p.id,
            name: p.name,
            href: href(lang, `/lugar/${p.slug}`),
            subtitle: p.subcategory,
            lat: p.latitude,
            lng: p.longitude,
            color: CATEGORIES[p.category].color,
            image: p.thumbnailUrl,
            group: p.category,
          }))}
        />
      </div>
    </>
  );
}

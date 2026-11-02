import type { Metadata } from 'next';
import Link from 'next/link';
import { THEMATIC_ROUTES, getPlaces, placesForRoute } from '@/lib/data';
import { PageIntro } from '@/components/Section';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Rutas temáticas por Tequisquiapan',
  description: 'Ruta del Vino y Queso, Ruta Artesanal, Ruta Histórica y Ruta de Aventura: qué visitar junto en Tequisquiapan.',
  alternates: { canonical: '/rutas' },
};

export default async function RutasPage() {
  const places = await getPlaces();
  const routes = THEMATIC_ROUTES.map((r) => ({ ...r, stops: placesForRoute(r, places) })).filter((r) => r.stops.length > 0);
  return (
    <>
      <PageIntro eyebrow="Ideas de viaje" title="Rutas temáticas" serif="Tequis a tu medida">
        Lugares que vale la pena visitar juntos, agrupados por tema.
      </PageIntro>
      <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:grid-cols-2">
        {routes.map((r) => (
          <Link key={r.slug} href={`/rutas/${r.slug}`} data-cursor="Ver" data-reveal="image" className="group relative block aspect-[4/3] overflow-hidden rounded-[28px] bg-stone text-white">
            {r.stops[0]?.thumbnailUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={r.stops[0].thumbnailUrl} alt="" loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="eyebrow !text-[12px] text-white/80">{r.stops.length} paradas</p>
              <h2 className="mt-2 font-display text-4xl">{r.title}</h2>
              <p className="mt-2 text-white/85">{r.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

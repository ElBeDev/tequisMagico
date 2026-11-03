import type { Metadata } from 'next';
import Link from 'next/link';
import { THEMATIC_ROUTES, getPlaces, placesForRoute } from '@/lib/data';
import { PageIntro } from '@/components/Section';
import { photoAttrs } from '@/lib/images';

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
      <PageIntro title="Rutas temáticas">
        Lugares que vale la pena visitar juntos, agrupados por tema.
      </PageIntro>
      <div className="frame grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
        {routes.map((r) => (
          <Link key={r.slug} href={`/rutas/${r.slug}`} data-cursor="Ver" data-reveal="image" className="group relative block aspect-[4/3] overflow-hidden bg-stone text-white">
            {r.stops[0]?.thumbnailUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img {...photoAttrs(r.stops[0].thumbnailUrl, '(min-width: 768px) 50vw, 100vw')} alt="" loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
            )}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <h2 className="font-display text-title leading-none tracking-[-0.02em]">{r.title}</h2>
              <p className="mt-3 text-white/90">{r.subtitle} · {r.stops.length} paradas</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

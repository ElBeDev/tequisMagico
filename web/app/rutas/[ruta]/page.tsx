import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { THEMATIC_ROUTES, getPlaces, placesForRoute } from '@/lib/data';
import { Photo } from '@/components/Cards';
import PlacesMap from '@/components/PlacesMap';
import { MoreLink, PageIntro } from '@/components/Section';

export const revalidate = 300;

export function generateStaticParams() {
  return THEMATIC_ROUTES.map((r) => ({ ruta: r.slug }));
}

export async function generateMetadata({ params }: PageProps<'/rutas/[ruta]'>): Promise<Metadata> {
  const { ruta } = await params;
  const route = THEMATIC_ROUTES.find((r) => r.slug === ruta);
  if (!route) return {};
  return {
    title: `${route.title} en Tequisquiapan`,
    description: `${route.subtitle}: paradas sugeridas de la ${route.title} en Tequisquiapan, Querétaro.`,
    alternates: { canonical: `/rutas/${route.slug}` },
  };
}

export default async function RutaPage({ params }: PageProps<'/rutas/[ruta]'>) {
  const { ruta } = await params;
  const route = THEMATIC_ROUTES.find((r) => r.slug === ruta);
  if (!route) notFound();
  const stops = placesForRoute(route, await getPlaces());

  return (
    <>
      <PageIntro eyebrow="Ruta temática" title={route.title} serif={route.subtitle.toLowerCase()} />
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="eyebrow">Paradas sugeridas ({stops.length})</h2>
          <ol className="mt-4 border-b border-line">
            {stops.map((p, i) => (
              <li key={p.id} data-reveal="up">
                <Link href={`/lugar/${p.slug}`} data-cursor="Ver" className="group flex items-center gap-5 border-t border-line py-5 transition-[padding] duration-500 hover:pl-3">
                  <span className="w-8 shrink-0 font-display text-3xl">{i + 1}</span>
                  <Photo src={p.thumbnailUrl} alt={p.name} className="size-20 shrink-0 rounded-t-full rounded-b-xl" />
                  <span className="min-w-0">
                    <span className="block font-display text-xl group-hover:underline">{p.name}</span>
                    <span className="block truncate text-[15px] text-muted">{p.subcategory} · {p.shortDescription}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-muted">
            El orden es solo una sugerencia. Usa &quot;Cómo llegar&quot; en cada lugar para la navegación.
          </p>
          <MoreLink href="/rutas" className="mt-8">Otras rutas</MoreLink>
        </div>
        {stops.length > 0 && (
          <div className="lg:sticky lg:top-28 lg:self-start">
            <PlacesMap
              className="h-[60vh]"
              zoom={13}
              points={stops.map((p, i) => ({ id: p.id, name: `${i + 1}. ${p.name}`, href: `/lugar/${p.slug}`, subtitle: p.subcategory, lat: p.latitude, lng: p.longitude, color: '#38492a', image: p.thumbnailUrl }))}
            />
          </div>
        )}
      </div>
    </>
  );
}

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
      <PageIntro title={route.title} lead={`${route.subtitle}.`} />
      <div className="frame grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-lead leading-none tracking-[-0.01em]">Paradas sugeridas ({stops.length})</h2>
          <ol className="mt-6 space-y-1">
            {stops.map((p, i) => (
              <li key={p.id} data-reveal="up">
                <Link href={`/lugar/${p.slug}`} data-cursor="Ver" className="group -mx-4 flex items-center gap-5 px-4 py-4 transition-colors duration-300 hover:bg-surface">
                  <span className="w-10 shrink-0 font-display text-title leading-none">{i + 1}</span>
                  <Photo src={p.thumbnailUrl} alt={p.name} sizes="80px" className="h-24 w-20 shrink-0 rounded-t-full" />
                  <span className="min-w-0">
                    <span className="block font-display text-lead leading-tight group-hover:underline">{p.name}</span>
                    <span className="block truncate text-muted">{p.subcategory} · {p.shortDescription}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="meta mt-4 text-muted">
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

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { THEMATIC_ROUTES, getPlaces, placesForRoute, routeText } from '@/lib/data';
import { dict } from '@/lib/dict';
import { LANGS, alternates, href, langOf } from '@/lib/i18n';
import { Photo } from '@/components/Cards';
import PlacesMap from '@/components/PlacesMap';
import { MoreLink, PageIntro } from '@/components/Section';

export const revalidate = 300;

export function generateStaticParams() {
  return LANGS.flatMap((lang) => THEMATIC_ROUTES.map((r) => ({ lang, ruta: r.slug })));
}

export async function generateMetadata({ params }: PageProps<'/[lang]/rutas/[ruta]'>): Promise<Metadata> {
  const p = await params;
  const lang = langOf(p);
  const route = THEMATIC_ROUTES.find((r) => r.slug === p.ruta);
  if (!route) return {};
  const { title, subtitle } = routeText(lang, route);
  return {
    title: lang === 'en' ? `${title} in Tequisquiapan` : `${title} en Tequisquiapan`,
    description:
      lang === 'en'
        ? `${subtitle}: suggested stops on the ${title} in Tequisquiapan, Querétaro, Mexico.`
        : `${subtitle}: paradas sugeridas de la ${title} en Tequisquiapan, Querétaro.`,
    alternates: alternates(lang, `/rutas/${route.slug}`),
  };
}

export default async function RutaPage({ params }: PageProps<'/[lang]/rutas/[ruta]'>) {
  const p = await params;
  const lang = langOf(p);
  const en = lang === 'en';
  const route = THEMATIC_ROUTES.find((r) => r.slug === p.ruta);
  if (!route) notFound();
  const { title, subtitle } = routeText(lang, route);
  const stops = placesForRoute(route, await getPlaces(lang));

  return (
    <>
      <PageIntro title={title} lead={`${subtitle}.`} />
      <div className="frame grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-lead leading-none tracking-[-0.01em]">
            {en ? `Suggested stops (${stops.length})` : `Paradas sugeridas (${stops.length})`}
          </h2>
          <ol className="mt-6 space-y-1">
            {stops.map((s, i) => (
              <li key={s.id} data-reveal="up">
                <Link
                  href={href(lang, `/lugar/${s.slug}`)}
                  data-cursor={dict(lang).cursorView}
                  className="group -mx-4 flex items-center gap-5 px-4 py-4 transition-colors duration-300 hover:bg-surface"
                >
                  <span className="w-10 shrink-0 font-display text-title leading-none">{i + 1}</span>
                  <Photo src={s.thumbnailUrl} alt={s.name} sizes="80px" className="h-24 w-20 shrink-0 rounded-t-full" />
                  <span className="min-w-0">
                    <span className="block font-display text-lead leading-tight group-hover:underline">{s.name}</span>
                    <span className="block truncate text-muted">{s.subcategory} · {s.shortDescription}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="meta mt-4 text-muted">
            {en
              ? 'The order is only a suggestion. Use “Directions” on each place for navigation.'
              : 'El orden es solo una sugerencia. Usa “Cómo llegar” en cada lugar para la navegación.'}
          </p>
          <MoreLink href={href(lang, '/rutas')} className="mt-8">{en ? 'Other routes' : 'Otras rutas'}</MoreLink>
        </div>
        {stops.length > 0 && (
          <div className="lg:sticky lg:top-28 lg:self-start">
            <PlacesMap
              className="h-[60vh]"
              zoom={13}
              lang={lang}
              points={stops.map((s, i) => ({
                id: s.id,
                name: `${i + 1}. ${s.name}`,
                href: href(lang, `/lugar/${s.slug}`),
                subtitle: s.subcategory,
                lat: s.latitude,
                lng: s.longitude,
                color: '#38492a',
                image: s.thumbnailUrl,
              }))}
            />
          </div>
        )}
      </div>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { THEMATIC_ROUTES, getPlaces, placesForRoute, routeText } from '@/lib/data';
import { dict } from '@/lib/dict';
import { alternates, href, langOf } from '@/lib/i18n';
import { PageIntro } from '@/components/Section';
import { photoAttrs } from '@/lib/images';

export const revalidate = 300;

export async function generateMetadata({ params }: PageProps<'/[lang]/rutas'>): Promise<Metadata> {
  const lang = langOf(await params);
  return lang === 'en'
    ? {
        title: 'Themed routes around Tequisquiapan',
        description: 'Wine and Cheese Route, Crafts Route, Historic Route and Adventure Route: what to visit together in Tequisquiapan.',
        alternates: alternates(lang, '/rutas'),
      }
    : {
        title: 'Rutas temáticas por Tequisquiapan',
        description: 'Ruta del Vino y Queso, Ruta Artesanal, Ruta Histórica y Ruta de Aventura: qué visitar junto en Tequisquiapan.',
        alternates: alternates(lang, '/rutas'),
      };
}

export default async function RutasPage({ params }: PageProps<'/[lang]/rutas'>) {
  const lang = langOf(await params);
  const en = lang === 'en';
  const places = await getPlaces(lang);
  const routes = THEMATIC_ROUTES.map((r) => ({ ...r, ...routeText(lang, r), stops: placesForRoute(r, places) })).filter((r) => r.stops.length > 0);
  return (
    <>
      <PageIntro title={en ? 'Themed routes' : 'Rutas temáticas'}>
        {en ? 'Places worth visiting together, grouped by theme.' : 'Lugares que vale la pena visitar juntos, agrupados por tema.'}
      </PageIntro>
      <div className="frame grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
        {routes.map((r) => (
          <Link
            key={r.slug}
            href={href(lang, `/rutas/${r.slug}`)}
            data-cursor={dict(lang).cursorView}
            data-reveal="image"
            className="group relative block aspect-[4/3] overflow-hidden bg-stone text-white"
          >
            {r.stops[0]?.thumbnailUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img {...photoAttrs(r.stops[0].thumbnailUrl, '(min-width: 768px) 50vw, 100vw')} alt="" loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
            )}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <h2 className="font-display text-title leading-none tracking-[-0.02em]">{r.title}</h2>
              <p className="mt-3 text-white/90">
                {r.subtitle} · {r.stops.length} {en ? 'stops' : 'paradas'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

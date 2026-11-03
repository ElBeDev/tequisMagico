import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_NAME, SITE_URL, getPlaces, toSummary } from '@/lib/data';
import { GUIDES, getGuide } from '@/lib/guides';
import { PageHero } from '@/components/PageHero';
import { ArchPhoto } from '@/components/Frame';
import { JsonLd, PlaceRow } from '@/components/Cards';
import GuideText from '@/components/GuideText';

export const revalidate = 300;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<'/guias/[slug]'>): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guias/${guide.slug}` },
    openGraph: { title: guide.title, description: guide.description, type: 'article', images: [guide.photo.src] },
  };
}

export default async function GuidePage({ params }: PageProps<'/guias/[slug]'>) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();

  // Los lugares se nombran en la guía y se buscan en el API: si uno se desactiva o cambia de
  // nombre en el panel, simplemente deja de salir (la guía no se rompe).
  const places = await getPlaces().catch(() => []);
  const byName = new Map(places.map((p) => [p.name, p]));
  const others = GUIDES.filter((g) => g.slug !== guide.slug);

  return (
    <article>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: guide.title,
          description: guide.description,
          image: guide.photo.src,
          inLanguage: 'es-MX',
          dateModified: guide.updatedISO,
          author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
          publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
          mainEntityOfPage: `${SITE_URL}/guias/${guide.slug}`,
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Guías', item: `${SITE_URL}/guias` },
            { '@type': 'ListItem', position: 2, name: guide.title },
          ],
        }}
      />

      <PageHero photo={guide.photo} alt={guide.photoAlt} title={guide.heroTitle} lead={guide.lead} />

      <div className="frame pt-20">
        <nav className="meta text-muted" aria-label="Ruta de navegación">
          <Link href="/guias" className="hover:text-ink">Guías</Link> · Actualizada en {guide.updated}
        </nav>
        <div data-reveal="stagger" className="mt-10 max-w-[60ch] space-y-4 text-lead leading-snug">
          {guide.intro.map((p) => (
            <p key={p}><GuideText text={p} /></p>
          ))}
        </div>
      </div>

      {guide.sections.map((s) => {
        const rows = (s.places ?? []).map((n) => byName.get(n)).filter((p) => p !== undefined);
        return (
          <section key={s.id} id={s.id} className="frame grid scroll-mt-28 grid-cols-1 gap-x-24 gap-y-10 pt-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
            <div>
              <h2 data-split="lines" className="heading max-w-[12ch]">{s.title}</h2>
              {s.photo && <ArchPhoto src={s.photo.src} alt={s.photoAlt ?? s.photo.title} ratio="aspect-[4/5]" className="mt-12 hidden max-w-[360px] lg:block" />}
            </div>
            <div>
              <div data-reveal="stagger" className="max-w-[60ch] space-y-4">
                {s.paragraphs.map((p) => (
                  <p key={p}><GuideText text={p} /></p>
                ))}
              </div>
              {s.tip && (
                <p data-reveal="up" className="mt-8 max-w-[60ch] bg-surface p-6 sm:p-8">
                  <GuideText text={s.tip} />
                </p>
              )}
              {rows.length > 0 && (
                <ul data-reveal="up" className="mt-8 max-w-[640px]">
                  {rows.map((p) => (
                    <PlaceRow key={p.id} place={toSummary(p)} />
                  ))}
                </ul>
              )}
            </div>
          </section>
        );
      })}

      <section className="frame pt-28" aria-labelledby="fuentes-title">
        <h2 id="fuentes-title" className="font-display text-lead">Fuentes</h2>
        <p className="meta mt-3 max-w-[60ch] text-muted">
          Precios, horarios y requisitos cambian: confírmalos con cada lugar antes de ir. Esta guía es independiente y nadie pagó por aparecer en ella.
        </p>
        <ul className="meta mt-5 max-w-[80ch] space-y-1.5 text-muted">
          {guide.sources.map((src) => (
            <li key={src.url}>
              <a href={src.url} target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:underline">{src.label}</a>
            </li>
          ))}
        </ul>
      </section>

      <section data-cursor-dark className="on-dark -mb-40 mt-28 bg-green py-24 text-white" aria-labelledby="mas-guias-title">
        <div className="frame">
          <h2 id="mas-guias-title" data-split="lines" className="heading">Más guías</h2>
          <ul className="mt-10 space-y-6">
            {others.map((g) => (
              <li key={g.slug} data-reveal="up">
                <Link href={`/guias/${g.slug}`} data-cursor="Leer" className="font-display text-title leading-[1.05] decoration-1 underline-offset-[6px] hover:underline">{g.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}

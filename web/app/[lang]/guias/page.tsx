import type { Metadata } from 'next';
import Link from 'next/link';
import { GUIDES, guidesFor } from '@/lib/guides';
import { dict } from '@/lib/dict';
import { alternates, href, langOf } from '@/lib/i18n';
import { PageIntro } from '@/components/Section';
import { ArchPhoto } from '@/components/Frame';

export async function generateMetadata({ params }: PageProps<'/[lang]/guias'>): Promise<Metadata> {
  const lang = langOf(await params);
  return lang === 'en'
    ? {
        title: 'Tequisquiapan travel guides',
        description: 'Guides to plan your visit to Tequisquiapan: a weekend itinerary, wineries and cheese makers, Tequis with kids and Peña de Bernal from Tequis.',
        alternates: alternates(lang, '/guias'),
      }
    : {
        title: 'Guías de viaje de Tequisquiapan',
        description:
          'Guías para planear tu visita a Tequisquiapan: un fin de semana, viñedos y queserías, Tequis con niños y la Peña de Bernal desde Tequis.',
        alternates: alternates(lang, '/guias'),
      };
}

export default async function GuiasPage({ params }: PageProps<'/[lang]/guias'>) {
  const lang = langOf(await params);
  const guides = guidesFor(lang);
  return (
    <>
      <PageIntro
        title={lang === 'en' ? 'Guides' : 'Guías'}
        lead={
          lang === 'en'
            ? 'To plan your visit: what to do on a weekend, where to taste wine and cheese, what to do with kids and how to get to the Peña.'
            : 'Para planear la visita: qué hacer en un fin de semana, dónde probar vino y queso, qué hacer con niños y cómo llegar a la Peña.'
        }
      />

      <ul className="frame space-y-20 pt-6 sm:space-y-28">
        {GUIDES.map((es, i) => {
          const g = guides[i];
          return (
            <li key={es.slug} data-reveal="up">
              <Link
                href={href(lang, `/guias/${es.slug}`)}
                data-cursor={dict(lang).cursorRead}
                className={`group grid grid-cols-1 items-center gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] sm:gap-16 ${i % 2 ? 'sm:[&>*:first-child]:order-2' : ''}`}
              >
                <ArchPhoto src={g.photo.src} alt={g.photoAlt} ratio="aspect-[4/5]" sizes="(min-width: 640px) 35vw, 100vw" className="w-full max-w-[420px]" />
                <div>
                  <h2 className="heading max-w-[14ch] decoration-1 underline-offset-8 group-hover:underline">{g.heroTitle}</h2>
                  <p className="mt-6 max-w-[44ch] text-lead leading-snug">{g.lead}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

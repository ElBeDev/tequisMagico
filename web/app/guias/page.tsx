import type { Metadata } from 'next';
import Link from 'next/link';
import { GUIDES } from '@/lib/guides';
import { PageIntro } from '@/components/Section';
import { ArchPhoto } from '@/components/Frame';

export const metadata: Metadata = {
  title: 'Guías de viaje de Tequisquiapan',
  description:
    'Guías para planear tu visita a Tequisquiapan: un fin de semana, viñedos y queserías, Tequis con niños y la Peña de Bernal desde Tequis.',
  alternates: { canonical: '/guias' },
};

export default function GuiasPage() {
  return (
    <>
      <PageIntro title="Guías" lead="Para planear la visita: qué hacer en un fin de semana, dónde probar vino y queso, qué hacer con niños y cómo llegar a la Peña." />

      <ul className="frame space-y-20 pt-6 sm:space-y-28">
        {GUIDES.map((g, i) => (
          <li key={g.slug} data-reveal="up">
            <Link
              href={`/guias/${g.slug}`}
              data-cursor="Leer"
              className={`group grid grid-cols-1 items-center gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] sm:gap-16 ${i % 2 ? 'sm:[&>*:first-child]:order-2' : ''}`}
            >
              <ArchPhoto src={g.photo.src} alt={g.photoAlt} ratio="aspect-[4/5]" sizes="(min-width: 640px) 35vw, 100vw" className="w-full max-w-[420px]" />
              <div>
                <h2 className="heading max-w-[14ch] decoration-1 underline-offset-8 group-hover:underline">{g.heroTitle}</h2>
                <p className="mt-6 max-w-[44ch] text-lead leading-snug">{g.lead}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

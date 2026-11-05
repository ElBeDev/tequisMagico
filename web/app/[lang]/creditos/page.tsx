import type { Metadata } from 'next';
import { LICENSE_URLS, PHOTOS } from '@/lib/photos';
import { PageIntro } from '@/components/Section';
import { alternates, langOf } from '@/lib/i18n';

export async function generateMetadata({ params }: PageProps<'/[lang]/creditos'>): Promise<Metadata> {
  const lang = langOf(await params);
  return { title: lang === 'en' ? 'Photo credits' : 'Créditos de fotos', alternates: alternates(lang, '/creditos') };
}

// Sale de web/lib/photos.ts: toda foto editorial que se agregue ahí aparece aquí sola.
// Las 8 genéricas por categoría son las mismas que acredita la app (ViewsProfileView.swift).
export default async function CreditosPage({ params }: PageProps<'/[lang]/creditos'>) {
  const en = langOf(await params) === 'en';
  const photos = Object.values(PHOTOS);
  return (
    <>
      <PageIntro title={en ? 'Photo credits' : 'Créditos de las fotos'}>
        {en
          ? 'The photos on this site come from Wikimedia Commons under Creative Commons licenses that require crediting the author. Some place photos are representative of their category, and those of some businesses come from their own website.'
          : 'Las fotos de este sitio vienen de Wikimedia Commons bajo licencias Creative Commons que piden dar crédito a su autor. Algunas fotos de lugares son representativas de su categoría, y las de algunos negocios vienen de su propia web.'}
      </PageIntro>
      <ul className="frame grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((c) => (
          <li key={c.page}>
            <a href={c.page} target="_blank" rel="noopener" className="font-display text-lead leading-tight hover:underline">{c.title}</a>
            <p className="mt-1 text-muted">
              {c.author} ·{' '}
              <a href={LICENSE_URLS[c.license]} target="_blank" rel="noopener license" className="underline">{c.license}</a>
            </p>
          </li>
        ))}
      </ul>
      <p className="frame mt-14 text-muted">
        {en
          ? 'Maps: © OpenStreetMap contributors. Outline of Mexico: Natural Earth (public domain).'
          : 'Mapas: © colaboradores de OpenStreetMap. Contorno de México: Natural Earth (dominio público).'}
      </p>
    </>
  );
}

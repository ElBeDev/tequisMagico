import type { Metadata } from 'next';
import { LICENSE_URLS, PHOTOS } from '@/lib/photos';
import { PageIntro } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Créditos de fotos',
  alternates: { canonical: '/creditos' },
};

// Sale de web/lib/photos.ts: toda foto editorial que se agregue ahí aparece aquí sola.
// Las 8 genéricas por categoría son las mismas que acredita la app (ViewsProfileView.swift).
export default function CreditosPage() {
  const photos = Object.values(PHOTOS);
  return (
    <>
      <PageIntro eyebrow="Información legal" title="Créditos" serif="de las fotografías">
        Las fotos de este sitio vienen de Wikimedia Commons bajo licencias Creative Commons que piden dar crédito a su autor. Algunas
        fotos de lugares son representativas de su categoría, y las de algunos negocios destacados vienen de su sitio oficial.
      </PageIntro>
      <ul className="mx-auto grid max-w-[1000px] gap-x-10 border-t border-line px-5 sm:grid-cols-2">
        {photos.map((c) => (
          <li key={c.page} className="border-b border-line py-5">
            <a href={c.page} target="_blank" rel="noopener" className="font-display text-xl hover:underline">{c.title}</a>
            <p className="mt-1 text-[15px] text-muted">
              {c.author} ·{' '}
              <a href={LICENSE_URLS[c.license]} target="_blank" rel="noopener license" className="underline">{c.license}</a>
            </p>
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-8 max-w-[1000px] px-5 text-[15px] text-muted">
        Mapas: © colaboradores de OpenStreetMap. Contorno de México: Natural Earth (dominio público).
      </p>
    </>
  );
}

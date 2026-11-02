import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME } from '@/lib/data';
import { PageIntro } from '@/components/Section';

export const metadata: Metadata = {
  title: 'La app para iPhone',
  description: `${SITE_NAME} para iPhone: los mismos lugares y eventos de Tequisquiapan, con "cerca de mí", favoritos y uso sin conexión.`,
  alternates: { canonical: '/app' },
};

const FEATURES = [
  { title: 'Cerca de mí', text: 'Ve lo que tienes alrededor mientras caminas por el centro.' },
  { title: 'Mapa rápido', text: 'Todos los lugares en el mapa, con "Cómo llegar" en un toque.' },
  { title: 'Favoritos', text: 'Guarda lo que quieres visitar; se queda en tu teléfono.' },
  { title: 'Sin conexión', text: 'La información se guarda en el teléfono por si falla la señal.' },
  { title: 'Spotlight y Siri', text: 'Busca un lugar desde la pantalla de inicio de tu iPhone.' },
];

export default function AppPage() {
  return (
    <>
      <PageIntro title="La app para iPhone">
        La app y este sitio muestran la misma información: cuando se actualiza un lugar o un evento, cambia en los dos. La app suma lo
        que sirve ya estando en el pueblo.
        <p className="mt-6 font-medium">Muy pronto en el App Store.</p>
      </PageIntro>

      <section className="frame" aria-labelledby="funciones-title">
        <h2 id="funciones-title" data-split="lines" className="heading">Qué hace</h2>
        <ul data-reveal="stagger" className="mt-12 space-y-2">
          {FEATURES.map(({ title, text }) => (
            <li key={title} className="grid grid-cols-1 gap-3 bg-surface p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-12">
              <h3 className="font-display text-lead leading-none tracking-[-0.01em]">{title}</h3>
              <p className="max-w-[56ch]">{text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-14 max-w-[56ch] text-lead leading-snug">
          ¿Tienes Android? Este sitio funciona en cualquier teléfono: <Link href="/lugares" className="underline">empieza a explorar</Link>.
        </p>
      </section>
    </>
  );
}

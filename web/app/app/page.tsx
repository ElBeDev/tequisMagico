import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, LocateFixed, Map, Search, WifiOff } from 'lucide-react';
import { SITE_NAME } from '@/lib/data';
import { PageIntro } from '@/components/Section';

export const metadata: Metadata = {
  title: 'La app para iPhone',
  description: `${SITE_NAME} para iPhone: los mismos lugares y eventos de Tequisquiapan, con "cerca de mí", favoritos y uso sin conexión.`,
  alternates: { canonical: '/app' },
};

const FEATURES = [
  { icon: LocateFixed, title: 'Cerca de mí', text: 'Ve lo que tienes alrededor mientras caminas por el centro.' },
  { icon: Map, title: 'Mapa rápido', text: 'Todos los lugares en el mapa, con "Cómo llegar" en un toque.' },
  { icon: Heart, title: 'Favoritos', text: 'Guarda lo que quieres visitar; se queda en tu teléfono.' },
  { icon: WifiOff, title: 'Sin conexión', text: 'La información se guarda en el teléfono por si falla la señal.' },
  { icon: Search, title: 'Spotlight y Siri', text: 'Busca un lugar desde la pantalla de inicio de tu iPhone.' },
];

export default function AppPage() {
  return (
    <>
      <PageIntro eyebrow="La app" title={SITE_NAME} serif="en tu iPhone">
        La app y este sitio muestran la misma información: cuando se actualiza un lugar o un evento, cambia en los dos. La app suma lo
        que sirve ya estando en el pueblo.
        <p className="eyebrow mt-8">Muy pronto en el App Store</p>
      </PageIntro>

      <ul data-reveal="stagger" className="mx-auto grid max-w-[1000px] gap-px overflow-hidden rounded-[28px] border border-line bg-line px-0 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <li key={title} className="bg-bg p-8">
            <Icon className="size-7" strokeWidth={1.4} aria-hidden />
            <p className="mt-5 font-display text-2xl">{title}</p>
            <p className="mt-2 text-[15px] text-muted">{text}</p>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-14 max-w-xl px-5 text-center text-[17px]">
        ¿Tienes Android? Este sitio funciona en cualquier teléfono: <Link href="/lugares" className="font-semibold underline">empieza a explorar</Link>.
      </p>
    </>
  );
}

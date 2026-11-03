import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME } from '@/lib/data';
import { alternates, href, langOf } from '@/lib/i18n';
import { PageIntro } from '@/components/Section';

export async function generateMetadata({ params }: PageProps<'/[lang]/app'>): Promise<Metadata> {
  const lang = langOf(await params);
  return lang === 'en'
    ? {
        title: 'The iPhone app',
        description: `${SITE_NAME} for iPhone: the same places and events in Tequisquiapan, with “near me”, favorites and offline use.`,
        alternates: alternates(lang, '/app'),
      }
    : {
        title: 'La app para iPhone',
        description: `${SITE_NAME} para iPhone: los mismos lugares y eventos de Tequisquiapan, con “cerca de mí”, favoritos y uso sin conexión.`,
        alternates: alternates(lang, '/app'),
      };
}

const FEATURES = {
  es: [
    { title: 'Cerca de mí', text: 'Ve lo que tienes alrededor mientras caminas por el centro.' },
    { title: 'Mapa rápido', text: 'Todos los lugares en el mapa, con “Cómo llegar” en un toque.' },
    { title: 'Favoritos', text: 'Guarda lo que quieres visitar; se queda en tu teléfono.' },
    { title: 'Sin conexión', text: 'La información se guarda en el teléfono por si falla la señal.' },
    { title: 'Spotlight y Siri', text: 'Busca un lugar desde la pantalla de inicio de tu iPhone.' },
  ],
  en: [
    { title: 'Near me', text: 'See what’s around you as you walk through the center.' },
    { title: 'Quick map', text: 'Every place on the map, with “Directions” in one tap.' },
    { title: 'Favorites', text: 'Save what you want to visit; it stays on your phone.' },
    { title: 'Offline', text: 'The information is stored on your phone in case you lose signal.' },
    { title: 'Spotlight and Siri', text: 'Search for a place from your iPhone’s home screen.' },
  ],
};

export default async function AppPage({ params }: PageProps<'/[lang]/app'>) {
  const lang = langOf(await params);
  const en = lang === 'en';
  return (
    <>
      <PageIntro title={en ? 'The iPhone app' : 'La app para iPhone'}>
        {en
          ? 'The app and this site show the same information: when a place or event is updated, it changes in both. The app adds what helps once you’re in town.'
          : 'La app y este sitio muestran la misma información: cuando se actualiza un lugar o un evento, cambia en los dos. La app suma lo que sirve ya estando en el pueblo.'}
        <p className="mt-6 font-medium">{en ? 'Coming soon to the App Store.' : 'Muy pronto en el App Store.'}</p>
      </PageIntro>

      <section className="frame" aria-labelledby="funciones-title">
        <h2 id="funciones-title" data-split="lines" className="heading">{en ? 'What it does' : 'Qué hace'}</h2>
        <ul data-reveal="stagger" className="mt-12 space-y-2">
          {FEATURES[lang].map(({ title, text }) => (
            <li key={title} className="grid grid-cols-1 gap-3 bg-surface p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-12">
              <h3 className="font-display text-lead leading-none tracking-[-0.01em]">{title}</h3>
              <p className="max-w-[56ch]">{text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-14 max-w-[56ch] text-lead leading-snug">
          {en ? 'On Android? This site works on any phone: ' : '¿Tienes Android? Este sitio funciona en cualquier teléfono: '}
          <Link href={href(lang, '/lugares')} className="underline">{en ? 'start exploring' : 'empieza a explorar'}</Link>.
        </p>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { getEvents, getPlaces, toSummary, todayInTequis } from '@/lib/data';
import { alternates, langOf } from '@/lib/i18n';
import { PageIntro } from '@/components/Section';
import TripPlanner from '@/components/TripPlanner';

export const revalidate = 300;

// Cada quien ve aquí lo suyo (vive en su navegador): no tiene sentido que Google la indexe.
export async function generateMetadata({ params }: PageProps<'/[lang]/mi-viaje'>): Promise<Metadata> {
  const lang = langOf(await params);
  return {
    title: lang === 'en' ? 'My trip' : 'Mi viaje',
    description:
      lang === 'en'
        ? 'The places and events in Tequisquiapan you saved, on a map with the route ready.'
        : 'Los lugares y eventos de Tequisquiapan que guardaste, en un mapa y con la ruta lista.',
    alternates: alternates(lang, '/mi-viaje'),
    robots: { index: false, follow: true },
  };
}

export default async function MiViajePage({ params }: PageProps<'/[lang]/mi-viaje'>) {
  const lang = langOf(await params);
  const [places, events] = await Promise.all([getPlaces(lang), getEvents(lang)]);
  return (
    <>
      <PageIntro
        title={lang === 'en' ? 'My trip' : 'Mi viaje'}
        lead={lang === 'en' ? 'What you saved with the heart, on a map with the route ready.' : 'Lo que guardaste con el corazón, en un mapa y con la ruta lista.'}
      />
      <TripPlanner places={places.map(toSummary)} events={events} today={todayInTequis()} lang={lang} />
    </>
  );
}

import type { Metadata } from 'next';
import { getEvents, getPlaces, toSummary, todayInTequis } from '@/lib/data';
import { PageIntro } from '@/components/Section';
import TripPlanner from '@/components/TripPlanner';

export const revalidate = 300;

// Cada quien ve aquí lo suyo (vive en su navegador): no tiene sentido que Google la indexe.
export const metadata: Metadata = {
  title: 'Mi viaje',
  description: 'Los lugares y eventos de Tequisquiapan que guardaste, en un mapa y con la ruta lista.',
  alternates: { canonical: '/mi-viaje' },
  robots: { index: false, follow: true },
};

export default async function MiViajePage() {
  const [places, events] = await Promise.all([getPlaces(), getEvents()]);
  return (
    <>
      <PageIntro title="Mi viaje" lead="Lo que guardaste con el corazón, en un mapa y con la ruta lista." />
      <TripPlanner places={places.map(toSummary)} events={events} today={todayInTequis()} />
    </>
  );
}

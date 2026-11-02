import type { Metadata } from 'next';
import { eventStatus, getEvents, todayInTequis, type TequisEvent } from '@/lib/data';
import { EventCard } from '@/components/Cards';
import { PageIntro } from '@/components/Section';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Eventos y fiestas en Tequisquiapan',
  description: 'Calendario de festivales, ferias y fiestas de Tequisquiapan: Feria Nacional del Queso y Vino, Festival del Globo, Posadas, Día de Muertos y más.',
  alternates: { canonical: '/eventos' },
};

export default async function EventosPage() {
  const events = await getEvents();
  const today = todayInTequis();
  // Mismos tres grupos que la pantalla de Eventos de la app: En curso, Próximos y Pasados.
  const happening = events.filter((e) => eventStatus(e, today) === 'happening');
  const upcoming = events.filter((e) => eventStatus(e, today) === 'upcoming');
  const past = events.filter((e) => eventStatus(e, today) === 'past').reverse();

  return (
    <>
      <PageIntro eyebrow="Calendario" title="Fiestas y eventos" serif="todo el año en Tequis">
        De la Feria Nacional del Queso y Vino a las Posadas: las fechas de lo que pasa en el pueblo.
      </PageIntro>
      <div className="mx-auto max-w-[1000px] px-5">
        {happening.length > 0 && <EventGroup title="Está pasando" events={happening} today={today} />}
        <EventGroup title="Próximos" events={upcoming} today={today} empty="No hay eventos próximos por ahora." />
        {past.length > 0 && <EventGroup title="Ya pasaron este año" events={past} today={today} />}
      </div>
    </>
  );
}

function EventGroup({ title, events, today, empty }: { title: string; events: TequisEvent[]; today: string; empty?: string }) {
  return (
    <section className="mt-14 first:mt-0">
      <h2 className="eyebrow mb-2">{title}</h2>
      {events.length === 0 ? (
        <p className="border-t border-line py-6 text-muted">{empty}</p>
      ) : (
        <div className="border-b border-line">
          {events.map((e) => (
            <EventCard key={e.id} event={e} today={today} />
          ))}
        </div>
      )}
    </section>
  );
}

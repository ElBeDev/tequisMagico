import type { Metadata } from 'next';
import { eventStatus, getEvents, todayInTequis, type TequisEvent } from '@/lib/data';
import { alternates, langOf, type Lang } from '@/lib/i18n';
import { EventCard } from '@/components/Cards';
import { PageIntro } from '@/components/Section';

export const revalidate = 300;

export async function generateMetadata({ params }: PageProps<'/[lang]/eventos'>): Promise<Metadata> {
  const lang = langOf(await params);
  return lang === 'en'
    ? {
        title: 'Events and festivals in Tequisquiapan',
        description: 'Calendar of festivals, fairs and celebrations in Tequisquiapan: the National Cheese and Wine Fair, the Balloon Festival, Posadas, Day of the Dead and more.',
        alternates: alternates(lang, '/eventos'),
      }
    : {
        title: 'Eventos y fiestas en Tequisquiapan',
        description: 'Calendario de festivales, ferias y fiestas de Tequisquiapan: Feria Nacional del Queso y Vino, Festival del Globo, Posadas, Día de Muertos y más.',
        alternates: alternates(lang, '/eventos'),
      };
}

export default async function EventosPage({ params }: PageProps<'/[lang]/eventos'>) {
  const lang = langOf(await params);
  const en = lang === 'en';
  const events = await getEvents(lang);
  const today = todayInTequis();
  // Mismos tres grupos que la pantalla de Eventos de la app: En curso, Próximos y Pasados.
  const happening = events.filter((e) => eventStatus(e, today) === 'happening');
  const upcoming = events.filter((e) => eventStatus(e, today) === 'upcoming');
  const past = events.filter((e) => eventStatus(e, today) === 'past').reverse();

  return (
    <>
      <PageIntro title={en ? 'Festivals and events in Tequis' : 'Fiestas y eventos en Tequis'}>
        {en
          ? 'From the National Cheese and Wine Fair to the Posadas: the dates of what happens in town.'
          : 'De la Feria Nacional del Queso y Vino a las Posadas: las fechas de lo que pasa en el pueblo.'}
      </PageIntro>
      <div className="frame">
        {happening.length > 0 && <EventGroup title={en ? 'Happening now' : 'Está pasando'} events={happening} today={today} lang={lang} />}
        <EventGroup
          title={en ? 'Coming up' : 'Próximos'}
          events={upcoming}
          today={today}
          lang={lang}
          empty={en ? 'No upcoming events for now.' : 'No hay eventos próximos por ahora.'}
        />
        {past.length > 0 && <EventGroup title={en ? 'Already happened this year' : 'Ya pasaron este año'} events={past} today={today} lang={lang} />}
      </div>
    </>
  );
}

function EventGroup({ title, events, today, lang, empty }: { title: string; events: TequisEvent[]; today: string; lang: Lang; empty?: string }) {
  return (
    <section className="mt-20 first:mt-0">
      <h2 className="heading mb-6">{title}</h2>
      {events.length === 0 ? (
        <p className="py-6 text-muted">{empty}</p>
      ) : (
        <div>
          {events.map((e) => (
            <EventCard key={e.id} event={e} today={today} lang={lang} />
          ))}
        </div>
      )}
    </section>
  );
}

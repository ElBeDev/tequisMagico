import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { eventStatus, formatDateRange, getEvents, todayInTequis, weekendRange, type TequisEvent } from '@/lib/data';
import { alternates, href, langOf, type Lang } from '@/lib/i18n';
import { EventCard } from '@/components/Cards';
import { PageIntro } from '@/components/Section';

export const revalidate = 300;

// "Este fin de semana" en título y descripción: "eventos en tequisquiapan este fin de semana" es la
// búsqueda de eventos con más apariciones (Search Console, nov 2026), y la página ahora lo responde arriba.
export async function generateMetadata({ params }: PageProps<'/[lang]/eventos'>): Promise<Metadata> {
  const lang = langOf(await params);
  return lang === 'en'
    ? {
        title: 'Events in Tequisquiapan this weekend',
        description: 'What’s on in Tequisquiapan this weekend, plus the calendar of festivals and fairs: the Christmas Village, the Posadas, New Year’s Eve in the square, the Cheese and Wine Fair and more.',
        alternates: alternates(lang, '/eventos'),
      }
    : {
        title: 'Eventos en Tequisquiapan este fin de semana',
        description: 'Qué hay este fin de semana en Tequisquiapan y el calendario de fiestas y ferias: Villa Navideña, Posadas, Año Nuevo en la Plaza, Feria del Queso y Vino y más.',
        alternates: alternates(lang, '/eventos'),
      };
}

export default async function EventosPage({ params }: PageProps<'/[lang]/eventos'>) {
  const lang = langOf(await params);
  const en = lang === 'en';
  const events = await getEvents(lang);
  const today = todayInTequis();
  const weekend = weekendRange(today);
  // Lo que cae, aunque sea un día, entre el viernes y el domingo. También sale abajo en su grupo.
  const thisWeekend = events.filter((e) => e.startDate <= weekend.end && e.endDate >= weekend.start);
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
        <EventGroup
          title={en ? 'This weekend' : 'Este fin de semana'}
          meta={formatDateRange(weekend.start, weekend.end, lang)}
          events={thisWeekend}
          today={today}
          lang={lang}
          empty={
            en ? (
              <>
                No events announced for this weekend. For ideas, see{' '}
                <Link href={href(lang, '/guias/fin-de-semana')} className="underline">
                  a weekend in Tequis
                </Link>
                .
              </>
            ) : (
              <>
                No hay eventos anunciados para este fin de semana. Para armarlo, mira{' '}
                <Link href={href(lang, '/guias/fin-de-semana')} className="underline">
                  un fin de semana en Tequis
                </Link>
                .
              </>
            )
          }
        />
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

function EventGroup({
  title,
  meta,
  events,
  today,
  lang,
  empty,
}: {
  title: string;
  meta?: string;
  events: TequisEvent[];
  today: string;
  lang: Lang;
  empty?: ReactNode;
}) {
  return (
    <section className="mt-20 first:mt-0">
      <h2 className="heading mb-6">{title}</h2>
      {meta && <p className="meta -mt-4 mb-6">{meta}</p>}
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

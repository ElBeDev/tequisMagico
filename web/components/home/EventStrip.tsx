import Link from 'next/link';
import { eventStatus, formatDateRange, type TequisEvent } from '@/lib/data';
import { href, type Lang } from '@/lib/i18n';

/** Banda ocre bajo la portada con el evento que está pasando o el próximo. */
export default function EventStrip({ event, today, lang }: { event: TequisEvent; today: string; lang: Lang }) {
  const en = lang === 'en';
  const happening = eventStatus(event, today) === 'happening';
  return (
    <section aria-label={en ? 'Featured event' : 'Evento destacado'} className="bg-ochre text-ink">
      <div className="frame flex flex-col items-start justify-between gap-5 py-7 md:flex-row md:items-center">
        <p data-reveal="up" className="max-w-[60ch] text-lead leading-snug">
          <span className="font-medium">{happening ? (en ? 'Happening now:' : 'Está pasando:') : en ? 'Next event:' : 'Próximo evento:'}</span>{' '}
          <span className="font-display">{event.title}</span>, {formatDateRange(event.startDate, event.endDate, lang)}
        </p>
        <div data-reveal="up" className="flex shrink-0 flex-wrap gap-3">
          <Link href={href(lang, `/evento/${event.slug}`)} className="btn">{en ? 'View event' : 'Ver evento'}</Link>
          <Link href={href(lang, '/eventos')} className="btn-outline">{en ? 'Full calendar' : 'Todo el calendario'}</Link>
        </div>
      </div>
    </section>
  );
}

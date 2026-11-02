import Link from 'next/link';
import { eventStatus, formatDateRange, type TequisEvent } from '@/lib/data';

/** Banda ocre bajo la portada con el evento que está pasando o el próximo. */
export default function EventStrip({ event, today }: { event: TequisEvent; today: string }) {
  const happening = eventStatus(event, today) === 'happening';
  return (
    <section aria-label="Evento destacado" className="bg-ochre text-ink">
      <div className="frame flex flex-col items-start justify-between gap-5 py-7 md:flex-row md:items-center">
        <p data-reveal="up" className="max-w-[60ch] text-lead leading-snug">
          <span className="font-medium">{happening ? 'Está pasando:' : 'Próximo evento:'}</span>{' '}
          <span className="font-display">{event.title}</span>, {formatDateRange(event.startDate, event.endDate)}
        </p>
        <div data-reveal="up" className="flex shrink-0 flex-wrap gap-3">
          <Link href={`/evento/${event.slug}`} className="btn">Ver evento</Link>
          <Link href="/eventos" className="btn-outline">Todo el calendario</Link>
        </div>
      </div>
    </section>
  );
}

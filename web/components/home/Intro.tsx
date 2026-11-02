import Link from 'next/link';
import { ArchPhoto } from '@/components/Frame';
import { MoreLink } from '@/components/Section';

export type Door = { label: string; href: string; image: string; alt: string; count: number };

// Velocidad de parallax de cada puerta: la del centro sube más rápido que las de los lados.
const SPEEDS = ['0.15', '-0.25', '0.3'];

/**
 * Bienvenida con tres "puertas" (qué hacer, dónde comer, dónde dormir), como el bloque
 * "Whatever your joy looks like" de visitshropshire.co.uk: los arcos de portal del sitio a
 * distintas velocidades de scroll.
 */
export default function Intro({ doors }: { doors: Door[] }) {
  return (
    <section id="bienvenidos" className="relative scroll-mt-24 overflow-hidden py-40" aria-labelledby="bienvenidos-title">
      <div className="frame relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <h2 id="bienvenidos-title" data-split="lines" className="heading max-w-[11ch]">Bienvenidos a Tequis</h2>
          <p data-reveal="up" className="mt-8 max-w-[40ch] text-lead leading-snug">
            Calles empedradas, portales de cantera y aguas termales. Viñedos y queserías a minutos de la plaza, mimbre que se vuelve
            arte y una fiesta casi cada mes.
          </p>
          <div data-reveal="up" className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/rutas" className="btn">Inspírame</Link>
            <MoreLink href="/por-que-tequis">¿Por qué Tequis?</MoreLink>
          </div>
        </div>

        <div className="grid grid-cols-3 items-start gap-3 sm:gap-6">
          {doors.map((d, i) => (
            <div key={d.href} data-parallax={SPEEDS[i % SPEEDS.length]} className={i === 1 ? '' : 'mt-14 sm:mt-24'}>
              <Link href={d.href} data-cursor="Ver" className="group block">
                <ArchPhoto
                  src={d.image}
                  alt={d.alt}
                />
                <p className="mt-5 font-display text-lead leading-none tracking-[-0.01em] group-hover:underline">{d.label}</p>
                <p className="meta mt-2 text-muted">{d.count} lugares</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { PHOTOS } from '@/lib/photos';
import { Feature, PageHero } from '@/components/PageHero';
import { SectionTitle } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Guía práctica: cómo llegar y cuándo ir a Tequisquiapan',
  description:
    'Cómo llegar a Tequisquiapan desde la Ciudad de México y Querétaro en auto o autobús, clima, temporadas altas y datos útiles para tu visita.',
  alternates: { canonical: '/guia-practica' },
};

// Distancias, rutas y autobuses: Wikipedia, queretaro.travel y Chilango (2023); clima: INEGI;
// temporadas: tequis.travel y prensa local. Ver la investigación en docs/web/plan-sitio-web.md.
const ROUTES = [
  {
    from: 'Desde la Ciudad de México',
    lines: [
      'Unos 180 km, de 2 a 3 horas según el tráfico.',
      'Autopista México–Querétaro (57D) hasta San Juan del Río y de ahí la carretera federal 120 hacia Tequisquiapan.',
      'Hay casetas en el camino; lleva efectivo o tag.',
    ],
  },
  {
    from: 'Desde Querétaro',
    lines: ['Unos 60 km, alrededor de 50 minutos.', 'Por la carretera estatal 200 Querétaro–Tequisquiapan, la misma de los viñedos.'],
  },
  {
    from: 'En autobús',
    lines: [
      'Desde la Ciudad de México: ETN Turistar sale directo de la Central del Norte.',
      'Desde Querétaro: Flecha Amarilla y Flecha Azul salen de la Terminal de Autobuses (TAQ).',
      'La terminal de Tequis está junto al Parador Artesanal.',
    ],
  },
];

const SEASONS = [
  { when: 'Marzo y abril', what: 'Feria del Toro de Lidia, Festival del Artesano y Semana Santa, con Vía Crucis y quema de Judas.' },
  { when: 'Mayo y junio', what: 'Festival Internacional del Arte, Queso y Vino en el Parque La Pila, los fines de semana.' },
  { when: '15 de agosto', what: 'Fiesta patronal de Santa María de la Asunción, con danzas y castillo.' },
  { when: 'Fin de octubre', what: 'Tejedores de Luz: Día de Muertos con figuras de mimbre.' },
  { when: 'Diciembre y enero', what: 'Fiesta en el Aire con globos, posadas y la Villa Navideña. La ocupación hotelera llega al 100%.' },
];

export default function GuiaPracticaPage() {
  return (
    <>
      <PageHero photo={PHOTOS.calleNinosHeroes} alt="Calle Niños Héroes en Tequisquiapan" title="Guía práctica" lead="Cómo llegar, cuándo ir y lo que conviene saber antes de salir." />

      <section id="como-llegar" className="frame scroll-mt-28 pt-32">
        <SectionTitle title="Cómo llegar" lead="En el sureste de Querétaro, a unos 180 km de la Ciudad de México." />
        <div data-reveal="stagger" className="mt-14 space-y-2">
          {ROUTES.map(({ from, lines }) => (
            <div key={from} className="grid grid-cols-1 gap-4 bg-surface p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-12">
              <h3 className="self-start font-display text-lead leading-none tracking-[-0.01em]">{from}</h3>
              <ul className="max-w-[60ch] space-y-2">
                {lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="meta mt-6 text-muted">Tiempos y precios de casetas o autobuses cambian; confírmalos antes de salir.</p>
      </section>

      <Feature id="cuando-ir" photo={PHOTOS.quiosco} alt="Plaza y quiosco de Tequisquiapan" title="Cuándo ir">
        <p>
          El clima es semiseco templado, con unos 17 °C de promedio anual. Llueve sobre todo de junio a septiembre; diciembre y enero
          son los meses más fríos y secos, así que lleva abrigo para las noches.
        </p>
        <p>
          Entre semana el pueblo está tranquilo. Los fines de semana, los puentes y estas temporadas se llenan, así que conviene
          reservar hospedaje con tiempo:
        </p>
        <dl className="space-y-1">
          {SEASONS.map((s) => (
            <div key={s.when} className="grid gap-1 py-2 sm:grid-cols-[140px_1fr] sm:gap-4">
              <dt className="font-medium">{s.when}</dt>
              <dd>{s.what}</dd>
            </div>
          ))}
        </dl>
        <Link href="/eventos" className="btn-outline">Ver el calendario</Link>
      </Feature>

      <Feature id="info-util" photo={PHOTOS.callejonPiojo} alt="Callejón del Piojo" title="Información útil" reverse>
        <ul className="list-disc space-y-3 pl-5">
          <li>El centro se recorre a pie: calles empedradas y callejones como el del Piojo. Lleva calzado cómodo.</li>
          <li>Sol fuerte y aire seco: protector solar, sombrero y agua.</li>
          <li>El Parador Artesanal, el mercado de artesanías más grande, abre solo fines de semana y días festivos.</li>
          <li>Los horarios pueden cambiar en temporada. En cada ficha te decimos si ya confirmamos el horario con el negocio; si no, llama antes de ir.</li>
          <li>La Presa Centenario cambia mucho de nivel de un año a otro: hay temporadas en que está casi vacía.</li>
        </ul>
        <div className="space-y-2 bg-surface p-6">
          <h3 className="font-display text-lead leading-none">Teléfonos</h3>
          <p className="pt-2">Emergencias: <a href="tel:911" className="font-medium underline">911</a></p>
          <p>Turismo municipal: <a href="tel:+524142651999" className="font-medium underline">414 265 1999</a></p>
          <p className="meta text-muted">Oficina de turismo: Andador Independencia 1, Centro.</p>
        </div>
      </Feature>

      <section data-cursor-dark className="on-dark -mb-40 mt-16 bg-green py-28 text-white" aria-labelledby="mapa-title">
        <div className="frame">
          <h2 id="mapa-title" data-split="lines" className="heading max-w-[14ch]">Ya en el pueblo, todo en el mapa</h2>
          <div data-reveal="up" className="mt-10 flex flex-wrap gap-3">
            <Link href="/mapa" className="btn">Ver el mapa</Link>
            <Link href="/lugares/hospedaje" className="btn-outline">Dónde dormir</Link>
            <Link href="/lugares/gastronomia" className="btn-outline">Dónde comer</Link>
          </div>
        </div>
      </section>
    </>
  );
}

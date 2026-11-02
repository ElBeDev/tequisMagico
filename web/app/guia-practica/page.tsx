import type { Metadata } from 'next';
import Link from 'next/link';
import { Bus, Car, Phone } from 'lucide-react';
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
    icon: Car,
    from: 'Desde la Ciudad de México',
    lines: [
      'Unos 180 km, de 2 a 3 horas según el tráfico.',
      'Autopista México–Querétaro (57D) hasta San Juan del Río y de ahí la carretera federal 120 hacia Tequisquiapan.',
      'Hay casetas en el camino; lleva efectivo o tag.',
    ],
  },
  {
    icon: Car,
    from: 'Desde Querétaro',
    lines: ['Unos 60 km, alrededor de 50 minutos.', 'Por la carretera estatal 200 Querétaro–Tequisquiapan, la misma de los viñedos.'],
  },
  {
    icon: Bus,
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
      <PageHero photo={PHOTOS.calleNinosHeroes} alt="Calle Niños Héroes en Tequisquiapan" eyebrow="Guía práctica" title="Todo para tu visita" serif="antes de salir" />

      <section id="como-llegar" className="mx-auto max-w-[1140px] scroll-mt-24 px-5 pt-24">
        <SectionTitle eyebrow="Cómo llegar" title="En el sureste" serif="de Querétaro" />
        <div data-reveal="stagger" className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {ROUTES.map(({ icon: Icon, from, lines }) => (
            <div key={from} className="bg-bg p-8">
              <Icon className="size-7" strokeWidth={1.4} aria-hidden />
              <h3 className="mt-5 font-display text-2xl">{from}</h3>
              <ul className="mt-4 space-y-2 text-[16px] leading-relaxed">
                {lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">Tiempos y precios de casetas o autobuses cambian; confírmalos antes de salir.</p>
      </section>

      <Feature id="cuando-ir" photo={PHOTOS.quiosco} alt="Plaza y quiosco de Tequisquiapan" eyebrow="Cuándo ir" title="Sol casi todo el año" serif="y una fiesta cada mes">
        <p>
          El clima es semiseco templado, con unos 17 °C de promedio anual. Llueve sobre todo de junio a septiembre; diciembre y enero
          son los meses más fríos y secos, así que lleva abrigo para las noches.
        </p>
        <p>
          Entre semana el pueblo está tranquilo. Los fines de semana, los puentes y estas temporadas se llenan, así que conviene
          reservar hospedaje con tiempo:
        </p>
        <dl className="divide-y divide-line border-y border-line">
          {SEASONS.map((s) => (
            <div key={s.when} className="grid gap-1 py-3 sm:grid-cols-[140px_1fr] sm:gap-4">
              <dt className="font-semibold">{s.when}</dt>
              <dd className="text-[16px]">{s.what}</dd>
            </div>
          ))}
        </dl>
        <Link href="/eventos" className="btn-outline">Ver el calendario</Link>
      </Feature>

      <Feature id="info-util" photo={PHOTOS.callejonPiojo} alt="Callejón del Piojo" eyebrow="Información útil" title="Antes de salir" serif="unos consejos" reverse>
        <ul className="list-disc space-y-3 pl-5">
          <li>El centro se recorre a pie: calles empedradas y callejones como el del Piojo. Lleva calzado cómodo.</li>
          <li>Sol fuerte y aire seco: protector solar, sombrero y agua.</li>
          <li>El Parador Artesanal, el mercado de artesanías más grande, abre solo fines de semana y días festivos.</li>
          <li>Los horarios pueden cambiar en temporada. En cada ficha te decimos si ya confirmamos el horario con el negocio; si no, llama antes de ir.</li>
          <li>La Presa Centenario cambia mucho de nivel de un año a otro: hay temporadas en que está casi vacía.</li>
        </ul>
        <div className="space-y-2 border border-ink p-6 text-[16px]">
          <p className="eyebrow !text-[12px]">Teléfonos</p>
          <p className="flex items-center gap-3"><Phone className="size-4" aria-hidden /> Emergencias: <a href="tel:911" className="font-semibold underline">911</a></p>
          <p className="flex items-center gap-3">
            <Phone className="size-4" aria-hidden /> Turismo municipal: <a href="tel:+524142651999" className="font-semibold underline">414 265 1999</a>
          </p>
          <p className="text-sm text-muted">Oficina de turismo: Andador Independencia 1, Centro.</p>
        </div>
      </Feature>

      <section className="mx-auto max-w-[1140px] px-5 pt-16">
        <div data-reveal="image" data-cursor-dark className="on-dark flex flex-col items-center gap-6 bg-green px-8 py-16 text-center text-white">
          <p className="text-3xl font-bold">Ya en el pueblo</p>
          <p className="-mt-3 font-display text-3xl">todo en el mapa</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/mapa" className="btn-outline">Ver el mapa</Link>
            <Link href="/lugares/hospedaje" className="btn-outline">Dónde dormir</Link>
            <Link href="/lugares/gastronomia" className="btn-outline">Dónde comer</Link>
          </div>
        </div>
      </section>
    </>
  );
}

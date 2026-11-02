import type { Metadata } from 'next';
import Link from 'next/link';
import { PHOTOS } from '@/lib/photos';
import { Feature, PageHero } from '@/components/PageHero';
import { SectionTitle } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Por qué visitar Tequisquiapan, Pueblo Mágico',
  description:
    'Historia de Tequisquiapan desde 1551, el origen de su nombre, por qué es Pueblo Mágico, la cestería, la Ruta Arte, Queso y Vino y la Peña de Bernal.',
  alternates: { canonical: '/por-que-tequis' },
};

// Datos tomados de Wikipedia, tequis.travel, gob.mx/Sectur, INEGI y prensa (investigación de
// noviembre 2026). Donde las fuentes no coinciden (el día exacto de la fundación, la edad de
// la tradición cestera), el texto se queda con lo que sí coincide.
const TIMELINE = [
  { year: 'Antes de 1551', text: 'Tierra de pueblos otomíes junto al río San Juan.' },
  { year: '1551', text: 'Se funda el pueblo en los barrios de San Juan y La Magdalena; la misa de fundación se celebra en el templo de Santa María Magdalena.' },
  { year: '1567', text: 'Se construye la pila de agua que hoy da nombre al Parque La Pila.' },
  { year: '1656', text: 'Una cédula real fija el nombre de Santa María de la Asunción de Tequisquiapan.' },
  { year: '1874', text: 'Se termina la segunda etapa de la parroquia de Santa María de la Asunción; su reloj es de 1897 y la cúpula se levantó en 1921 con trabajo voluntario de los vecinos.' },
  { year: '1902', text: 'Se inaugura la Estación Bernal del ferrocarril, hoy un mirador con vista a la Peña.' },
  { year: '1916', text: 'Venustiano Carranza, asiduo a sus aguas termales, decreta a Tequisquiapan centro geográfico del país. El monumento del péndulo lo recuerda (el centro geográfico real está en Zacatecas).' },
  { year: 'Años 50', text: 'Auge de los balnearios de aguas termales: Tequis se vuelve destino de descanso para la Ciudad de México y el Bajío.' },
  { year: '2012', text: 'El 17 de octubre recibe el nombramiento de Pueblo Mágico, el cuarto de Querétaro.' },
];

export default function PorQueTequisPage() {
  return (
    <>
      <PageHero photo={PHOTOS.parroquiaTarde} alt="Parroquia de Santa María de la Asunción" eyebrow="¿Por qué Tequis?" title="Un Pueblo Mágico" serif="de agua, cantera y mimbre" />

      <section className="mx-auto max-w-2xl px-5 pt-24 text-center">
        <p data-split="lines" className="font-display text-[1.75rem] leading-snug">
          Desde el 17 de octubre de 2012, Tequisquiapan es Pueblo Mágico: el cuarto de Querétaro, después de Bernal, Jalpan y Cadereyta.
        </p>
        <p data-reveal="up" className="mt-6 text-[17px] leading-relaxed">
          Lo que lo hace distinto cabe en un paseo de fin de semana: un centro de portales y cantera, el oficio de la cestería, la
          tradición termal que lo convirtió en destino turístico, los viñedos y queserías de la Ruta Arte, Queso y Vino, y una agenda
          de fiestas que casi no se detiene en todo el año.
        </p>
      </section>

      <section id="nombre" className="mx-auto mt-24 max-w-[1140px] scroll-mt-24 px-5">
        <div data-reveal="stagger" className="grid gap-px border border-line bg-line md:grid-cols-3">
          {[
            { k: 'Tequixquitl', v: 'tequesquite, el salitre mineral' },
            { k: 'Atl', v: 'agua' },
            { k: 'Apan', v: 'lugar' },
          ].map((w) => (
            <div key={w.k} className="bg-bg p-10 text-center">
              <p className="font-display text-4xl italic">{w.k}</p>
              <p className="eyebrow mt-3 !text-[12px] text-muted">{w.v}</p>
            </div>
          ))}
        </div>
        <p data-reveal="up" className="mx-auto mt-8 max-w-2xl text-center text-[17px] leading-relaxed">
          El nombre viene del náhuatl y se suele traducir como <em>lugar sobre el río de tequesquite</em>. En otomí, el pueblo se llama
          <em> Nthe</em>.
        </p>
      </section>

      <section id="historia" className="mx-auto max-w-[1000px] scroll-mt-24 px-5 pt-28">
        <SectionTitle eyebrow="Historia" title="Casi cinco siglos" serif="alrededor del agua" />
        <ol className="mt-14 border-l border-ink/20">
          {TIMELINE.map((t) => (
            <li key={t.year} data-reveal="up" className="relative pb-10 pl-8 last:pb-0 sm:pl-12">
              <span className="absolute -left-[5px] top-2.5 size-[9px] rounded-full bg-ink" aria-hidden />
              <p className="font-display text-3xl">{t.year}</p>
              <p className="mt-2 max-w-2xl text-[17px] leading-relaxed">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <Feature
        id="patrimonio"
        photo={PHOTOS.temploMagdalena}
        alt="Templo de Santa María Magdalena"
        eyebrow="Patrimonio"
        title="Templos, barrios"
        serif="y capillas de indios"
      >
        <p>
          La parroquia de Santa María de la Asunción, neoclásica y de cantera, preside la Plaza Miguel Hidalgo con sus portales, su
          quiosco y sus sabinos. A unas calles, el templo de Santa María Magdalena guarda la memoria de la fundación.
        </p>
        <p>
          Entre los barrios de San Juan y La Magdalena hay capillas de indios como la de la Cruz Verde, y a lo largo del año se celebran
          casi cien fiestas patronales en templos y capillas.
        </p>
        <Link href="/rutas/historica" className="btn-outline">Ruta Histórica</Link>
      </Feature>

      <Feature
        id="tradiciones"
        photo={PHOTOS.mercadoTequesquicalli}
        alt="Mercado de Artesanías Tequesquicalli"
        eyebrow="Tradiciones"
        title="El Paraíso"
        serif="de la cestería"
        reverse
      >
        <p>
          Tequis se ganó el apodo por sus canastas, muebles y figuras tejidas con vara de sauz, mimbre, carrizo y raíz de sabino. La
          mayoría de los talleres están en el Barrio de la Magdalena.
        </p>
        <p>
          Para comprar: el mercado Tequesquicalli, el más antiguo; el Telésforo Trejo, con más de 60 locales en dos pisos; y el Parador
          Artesanal, que abre fines de semana y días festivos junto a la terminal de autobuses.
        </p>
        <p>
          El mimbre también sale a las fiestas: en Tejedores de Luz (Día de Muertos) y en la Villa Navideña, las figuras tejidas llenan
          las plazas.
        </p>
        <Link href="/rutas/artesanal" className="btn-outline">Ruta Artesanal</Link>
      </Feature>

      <Feature id="sabores" photo={PHOTOS.feriaQuesoVino} alt="Feria del Queso y el Vino en Tequisquiapan" eyebrow="Sabores" title="Queso, vino" serif="y cocina de pueblo">
        <p>
          Tequis es parada de la Ruta Arte, Queso y Vino de Querétaro. En la zona se producen más de 60 etiquetas, y los viñedos del
          municipio están a menos de 20 minutos del centro. Las queserías hacen quesos frescos y madurados, de vaca y de cabra.
        </p>
        <p>
          Desde 1976, la Feria Nacional del Queso y el Vino (hoy Festival Internacional del Arte, Queso y Vino) reúne bodegas y
          queserías en el Parque La Pila entre mayo y junio.
        </p>
        <p>
          En la mesa: barbacoa de borrego con su consomé, enchiladas queretanas, gorditas de maíz quebrado y, de postre, charamuscas y
          dulces de leche; para tomar, pulque o curado de tuna.
        </p>
        <Link href="/rutas/vino-y-queso" className="btn-outline">Ruta del Vino y Queso</Link>
      </Feature>

      <Feature
        id="alrededores"
        photo={PHOTOS.penaBernal}
        alt="Peña de Bernal"
        eyebrow="Alrededores"
        title="La Peña de Bernal"
        serif="a media hora"
        reverse
      >
        <p>
          A unos 35 km, en el municipio de Ezequiel Montes, se levanta la Peña de Bernal: un monolito de unos 350 metros sobre el pueblo
          del mismo nombre, también Pueblo Mágico.
        </p>
        <p>
          Desde 2009, los lugares de memoria y tradiciones vivas de los otomí-chichimecas de Tolimán, que incluyen la Peña, son
          Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO.
        </p>
        <Link href="/guia-practica#como-llegar" className="btn-outline">Cómo llegar</Link>
      </Feature>

      <section className="mx-auto max-w-[1140px] px-5 pt-16">
        <div data-reveal="image" data-cursor-dark className="on-dark flex flex-col items-center gap-6 bg-green px-8 py-16 text-center text-white">
          <p className="text-3xl font-bold">¿Listo para ir?</p>
          <p className="-mt-3 font-display text-3xl">arma tu fin de semana</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/lugares" className="btn-outline">Qué hacer</Link>
            <Link href="/eventos" className="btn-outline">Fiestas y eventos</Link>
            <Link href="/guia-practica" className="btn-outline">Guía práctica</Link>
          </div>
        </div>
      </section>
    </>
  );
}

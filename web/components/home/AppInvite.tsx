import Link from 'next/link';
import { SITE_NAME } from '@/lib/data';
import { photoAttrs } from '@/lib/images';
import { href, type Lang } from '@/lib/i18n';

export type FloatingPhoto = { src: string; alt: string };

// Posición, tamaño y velocidad de parallax de cada foto alrededor del texto. En el celular solo
// quedan dos, arriba y abajo del texto: nada puede quedar encima del título.
const SLOTS = [
  { cls: 'left-[4%] top-[2%] w-24 sm:top-[8%] sm:w-40', speed: '0.5' },
  { cls: 'left-[22%] -top-6 hidden w-32 md:block', speed: '-0.3' },
  { cls: 'right-[20%] top-[4%] hidden w-28 md:block', speed: '0.35' },
  { cls: 'right-[3%] top-[18%] hidden w-44 sm:block', speed: '-0.45' },
  { cls: 'left-[2%] bottom-[6%] hidden w-40 sm:block', speed: '-0.4' },
  { cls: 'left-[26%] -bottom-8 hidden w-28 lg:block', speed: '0.4' },
  { cls: 'right-[24%] -bottom-6 hidden w-32 lg:block', speed: '-0.25' },
  { cls: 'right-[5%] bottom-[2%] w-24 sm:bottom-[4%] sm:w-36', speed: '0.3' },
];

/**
 * Invitación a la app con fotos que flotan a distintas velocidades alrededor del texto, como
 * el bloque del boletín de visitshropshire.co.uk (aquí no hay boletín: la app es el "sigue en
 * contacto").
 */
export default function AppInvite({ photos, lang }: { photos: FloatingPhoto[]; lang: Lang }) {
  const en = lang === 'en';
  return (
    <section className="relative -mb-40 mt-40 overflow-hidden bg-surface py-40 sm:py-52" aria-labelledby="app-title">
      {photos.slice(0, SLOTS.length).map((p, i) => (
        <div key={p.src} aria-hidden data-parallax={SLOTS[i].speed} className={`pointer-events-none absolute ${SLOTS[i].cls}`}>
          <div data-reveal="image" className={`aspect-[4/5] overflow-hidden ${i % 2 ? '' : 'rounded-t-[999px]'}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img {...photoAttrs(p.src, '300px')} alt="" loading="lazy" className="size-full object-cover" />
          </div>
        </div>
      ))}

      {/* El único momento centrado de la portada. */}
      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-5 text-center">
        <h2 id="app-title" data-split="lines" className="heading max-w-[12ch]">{en ? 'Tequis in your pocket' : 'Tequis en tu bolsillo'}</h2>
        <p data-reveal="up" className="mt-6 max-w-[40ch] text-lead leading-snug">
          {en
            ? `The ${SITE_NAME} app has the same information as this site, plus “near me”, favorites and offline use.`
            : `La app de ${SITE_NAME} tiene la misma información que este sitio, más “cerca de mí”, favoritos y uso sin conexión.`}
        </p>
        <div data-reveal="up" className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={href(lang, '/app')} className="btn">{en ? 'About the app' : 'Conocer la app'}</Link>
          <Link href={href(lang, '/mi-viaje')} className="btn-outline">{en ? 'See my trip' : 'Ver mi viaje'}</Link>
        </div>
      </div>
    </section>
  );
}

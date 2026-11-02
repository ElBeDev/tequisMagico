import Link from 'next/link';
import { PRICE_RANGES, placeKey, type Place } from '@/lib/data';
import { ArchPhoto } from '@/components/Frame';
import SaveButton from '@/components/SaveButton';

/**
 * Un lugar destacado en un campo salvia de orilla a orilla (el bloque "Sponsored" de la
 * referencia). Solo se usan lugares con `content_verified`: lo que se presenta en grande tiene
 * que estar confirmado.
 */
export default function Featured({ place }: { place: Place }) {
  const price = PRICE_RANGES[place.priceRange];
  return (
    <section className="bg-sage py-28" aria-labelledby="destacado-title">
      <div className="frame grid grid-cols-1 items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-24">
        <div>
          <h2 id="destacado-title" data-split="lines" className="heading max-w-[14ch]">{place.name}</h2>
          <p data-reveal="up" className="mt-6 max-w-[42ch] text-lead leading-snug">
            {place.shortDescription || place.subcategory}, destacado de la guía.
          </p>
          {place.fullDescription && place.fullDescription !== place.shortDescription && (
            <p data-reveal="up" className="mt-5 line-clamp-4 max-w-[56ch]">{place.fullDescription}</p>
          )}
          <p data-reveal="up" className="meta mt-5">
            {place.subcategory}
            {price && <> · {price.symbol}</>}
            {place.address && <> · {place.address}</>}
          </p>
          <div data-reveal="up" className="mt-10 flex flex-wrap gap-3">
            <Link href={`/lugar/${place.slug}`} className="btn">Ver el lugar</Link>
            <SaveButton id={placeKey(place.id)} name={place.name} variant="full" />
          </div>
        </div>
        {place.thumbnailUrl && (
          <Link href={`/lugar/${place.slug}`} data-cursor="Ver" className="block w-full max-w-[520px] md:justify-self-end">
            <ArchPhoto src={place.thumbnailUrl} alt={place.name} ratio="aspect-[4/5]" />
          </Link>
        )}
      </div>
    </section>
  );
}

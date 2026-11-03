import { photoAttrs } from '@/lib/images';

// Marco para las fotos "sueltas" del sitio: arco de medio punto como los portales de cantera de la
// plaza. Es la única forma que lleva una foto en el sitio; las demás van con esquinas rectas. Sin
// sombra ni línea de contorno: el arco solo ya es el motivo.

export const SHAPES = {
  arch: 'rounded-t-[999px]',
  square: '',
} as const;

export function ArchPhoto({
  src,
  alt,
  shape = 'arch',
  ratio = 'aspect-[3/4]',
  sizes = '(min-width: 768px) 50vw, 100vw',
  className = '',
  imgClassName = '',
}: {
  src: string;
  alt: string;
  shape?: keyof typeof SHAPES;
  ratio?: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <figure className={`relative ${className}`}>
      <div data-reveal="image" className={`overflow-hidden bg-surface ${SHAPES[shape]} ${ratio}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img {...photoAttrs(src, sizes)} alt={alt} loading="lazy" className={`size-full object-cover ${imgClassName}`} />
      </div>
    </figure>
  );
}

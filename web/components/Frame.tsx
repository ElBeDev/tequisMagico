// Marco para las fotos "sueltas" del sitio: arco de medio punto como los portales de cantera
// de la plaza, sombra que sigue la forma (drop-shadow, no box-shadow, para que respete el
// arco y la animación de revelado) y una línea con la misma forma desplazada detrás.

export const SHAPES = {
  arch: 'rounded-t-[999px] rounded-b-[20px]',
  round: 'rounded-[28px]',
} as const;

export function ArchPhoto({
  src,
  alt,
  shape = 'arch',
  outline = 'right',
  ratio = 'aspect-[3/4]',
  className = '',
  imgClassName = '',
}: {
  src: string;
  alt: string;
  shape?: keyof typeof SHAPES;
  outline?: 'right' | 'left' | 'none';
  ratio?: string;
  className?: string;
  imgClassName?: string;
}) {
  const radius = SHAPES[shape];
  return (
    <figure className={`relative ${className}`}>
      {outline !== 'none' && (
        <span
          aria-hidden
          data-reveal="fade"
          className={`absolute inset-0 border border-ink/35 ${radius} ${outline === 'right' ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}`}
        />
      )}
      <div className="relative drop-shadow-[0_28px_36px_rgba(31,26,23,0.28)]">
        <div data-reveal="image" className={`overflow-hidden ${radius} ${ratio}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading="lazy" referrerPolicy="no-referrer" className={`size-full object-cover ${imgClassName}`} />
        </div>
      </div>
    </figure>
  );
}

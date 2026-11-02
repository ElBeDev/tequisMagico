import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

/**
 * Título de sección: una sola cara (Gilda) a tamaño de sección y, si hace falta, una frase de apoyo
 * debajo en el texto normal. Sin etiqueta arriba ni remate en otra tipografía (tasteskill).
 */
export function SectionTitle({
  title,
  lead,
  align = 'left',
  as: Tag = 'h2',
  id,
  className = '',
}: {
  title: string;
  lead?: ReactNode;
  align?: 'center' | 'left';
  as?: 'h1' | 'h2';
  id?: string;
  className?: string;
}) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      <Tag id={id} data-split="lines" className="heading max-w-[18ch]" style={align === 'center' ? { marginInline: 'auto' } : undefined}>
        {title}
      </Tag>
      {lead && (
        <p data-reveal="up" className={`mt-6 max-w-[46ch] text-lead leading-snug ${align === 'center' ? 'mx-auto' : ''}`}>
          {lead}
        </p>
      )}
    </div>
  );
}

/** Encabezado de las páginas internas (sin foto de portada): deja espacio para el header fijo. */
export function PageIntro({ title, lead, children }: { title: string; lead?: ReactNode; children?: ReactNode }) {
  return (
    <div className="frame pb-14 pt-40 sm:pt-48">
      <h1 data-split="lines" className="display max-w-[14ch]">{title}</h1>
      {(lead || children) && (
        <div data-reveal="up" className="mt-8 max-w-[52ch] text-lead leading-snug">
          {lead}
          {children}
        </div>
      )}
    </div>
  );
}

export function MoreLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 font-semibold ${className}`}>
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">{children}</span>
      <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1.5" aria-hidden />
    </Link>
  );
}

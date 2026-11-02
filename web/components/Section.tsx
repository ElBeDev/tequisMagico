import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

/** Título de sección de tres pisos: etiqueta, título en negrita y remate en serif. */
export function SectionTitle({
  eyebrow,
  title,
  serif,
  align = 'center',
  as: Tag = 'h2',
  className = '',
}: {
  eyebrow?: string;
  title: string;
  serif?: string;
  align?: 'center' | 'left';
  as?: 'h1' | 'h2';
  className?: string;
}) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="mt-3 text-[clamp(1.9rem,3.2vw,2.6rem)] font-bold leading-tight">
        {title}
        {serif && (
          <span className="mt-3 block font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-normal leading-tight">{serif}</span>
        )}
      </Tag>
    </div>
  );
}

/** Encabezado de las páginas internas (sin foto de portada): deja espacio para el header fijo. */
export function PageIntro({ eyebrow, title, serif, children }: { eyebrow?: string; title: string; serif?: string; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-12 pt-36 text-center sm:pt-44">
      <SectionTitle as="h1" eyebrow={eyebrow} title={title} serif={serif} />
      {children && <div className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed">{children}</div>}
    </div>
  );
}

export function MoreLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2 font-semibold hover:underline ${className}`}>
      {children} <ArrowRight className="size-4" aria-hidden />
    </Link>
  );
}

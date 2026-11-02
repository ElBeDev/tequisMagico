import type { ReactNode } from 'react';

export const CONTACT_EMAIL = 'contacto@tequismagico.com';

export function LegalPage({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl px-5 pt-36 sm:pt-44">
      <p className="eyebrow text-center">Información legal</p>
      <h1 className="mt-3 text-center font-display text-5xl">{title}</h1>
      <p className="mt-4 text-center text-sm text-muted">{subtitle}</p>
      <div className="mt-12 space-y-8">{children}</div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2 space-y-2 text-[16px] leading-relaxed">{children}</div>
    </section>
  );
}

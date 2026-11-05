import type { ReactNode } from 'react';

export const CONTACT_EMAIL = 'hola@tequismagico.com';

export function LegalPage({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <div className="frame pt-40 sm:pt-48">
      <h1 className="display max-w-[14ch]">{title}</h1>
      <p className="meta mt-6 text-muted">{subtitle}</p>
      <div className="mt-14 max-w-[68ch] space-y-10">{children}</div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-lead leading-none tracking-[-0.01em]">{title}</h2>
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}

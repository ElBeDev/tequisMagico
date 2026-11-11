import Link from 'next/link';
import { Fragment } from 'react';
import { href as localHref, type Lang } from '@/lib/i18n';

// Párrafos de las guías (lib/guides.ts): texto plano con links al estilo Markdown,
// `[texto](/ruta)`. Los links internos usan <Link>. Se pueden escribir con la ruta en español
// (`lang` los pasa por href() y en /en llevan a la página en inglés) o ya en inglés (`/en/...`, como
// las primeras guías de lib/i18n/guides-en.ts), que se dejan tal cual. Los externos abren en otra pestaña.
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export default function GuideText({ text, lang = 'es' }: { text: string; lang?: Lang }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const [whole, label, href] = m;
    parts.push(text.slice(last, m.index));
    parts.push(
      href.startsWith('/') ? (
        <Link key={m.index} href={/^\/en(\/|$)/.test(href) ? href : localHref(lang, href)} className="underline underline-offset-4 hover:text-green">
          {label}
        </Link>
      ) : (
        <a key={m.index} href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-green">
          {label}
        </a>
      ),
    );
    last = m.index + whole.length;
  }
  parts.push(text.slice(last));
  return <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>;
}

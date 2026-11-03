import Link from 'next/link';
import { Fragment } from 'react';

// Párrafos de las guías (lib/guides.ts): texto plano con links al estilo Markdown,
// `[texto](/ruta)`. Los links internos usan <Link>; los externos abren en otra pestaña.
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export default function GuideText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const [whole, label, href] = m;
    parts.push(text.slice(last, m.index));
    parts.push(
      href.startsWith('/') ? (
        <Link key={m.index} href={href} className="underline underline-offset-4 hover:text-green">
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

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { foldText } from '@/lib/data';
import type { SearchItem } from '@/lib/search';

const SUGGESTIONS = ['Viñedos', 'Queserías', 'Globo', 'Hotel', 'Restaurante', 'Artesanías', 'Feria del Queso'];
const PER_GROUP = 6;

/** Todas las palabras tienen que aparecer; pesa más si aparecen en el nombre o al inicio. */
function score(item: SearchItem, words: string[]): number {
  if (!words.every((w) => item.haystack.includes(w))) return 0;
  const title = foldText(item.title);
  let s = 1;
  for (const w of words) {
    if (title.startsWith(w)) s += 6;
    else if (title.includes(w)) s += 3;
  }
  return s;
}

/**
 * Buscador a pantalla completa: lugares, eventos y páginas del sitio, al instante mientras
 * escribes. Flechas para moverte, Enter para abrir, Esc para cerrar.
 */
export default function SearchDialog({ items, open, onClose }: { items: SearchItem[]; open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const groups = useMemo(() => {
    const words = foldText(query).split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    const ranked = items
      .map((item) => ({ item, s: score(item, words) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s);
    let start = 0;
    return (['Lugares', 'Eventos', 'Páginas'] as const)
      .map((kind) => ({ kind, results: ranked.filter((x) => x.item.kind === kind).slice(0, PER_GROUP).map((x) => x.item) }))
      .filter((g) => g.results.length)
      .map((g) => {
        const group = { ...g, start };
        start += g.results.length;
        return group;
      });
  }, [items, query]);
  const flat = groups.flatMap((g) => g.results);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    window.__lenis?.stop();
    document.body.style.overflow = 'hidden';
    return () => {
      window.__lenis?.start();
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const go = (href: string) => {
    onClose();
    setQuery('');
    router.push(href);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Buscar en el sitio"
      data-lenis-prevent
      className="fixed inset-0 z-50 overflow-y-auto bg-forest/80 px-4 pb-10 pt-20 sm:pt-28"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose();
        else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setActive((a) => Math.min(flat.length - 1, a + 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setActive((a) => Math.max(0, a - 1));
        } else if (e.key === 'Enter' && flat[active]) {
          e.preventDefault();
          go(flat[active].href);
        }
      }}
    >
      <div className="fade-up mx-auto max-w-2xl overflow-hidden bg-bg text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-3 bg-surface px-6 py-4">
          <Search className="size-5 shrink-0 text-muted" aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            placeholder="Busca lugares, eventos y más…"
            aria-label="Buscar"
            className="min-w-0 flex-1 bg-transparent py-2 font-display text-lead outline-none placeholder:text-muted"
          />
          <button type="button" onClick={onClose} aria-label="Cerrar buscador" className="flex size-10 items-center justify-center rounded-full hover:bg-surface">
            <X className="size-5" aria-hidden />
          </button>
        </div>

        {!query.trim() ? (
          <div className="px-6 py-6">
            <p className="meta text-muted">Lo más buscado</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button key={s} type="button" onClick={() => setQuery(s)} className="rounded-full bg-surface px-4 py-1.5 transition-colors hover:bg-ink hover:text-bg">
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : groups.length === 0 ? (
          <div className="px-6 py-10 text-center">
            <p className="font-display text-xl">No encontramos «{query}»</p>
            <p className="mt-2 text-muted">
              Prueba con otra palabra o <Link href="/lugares" onClick={onClose} className="underline">mira todos los lugares</Link>.
            </p>
          </div>
        ) : (
          <div className="max-h-[60vh] overflow-y-auto py-3">
            {groups.map((g) => (
              <section key={g.kind} className="px-3 pb-2">
                <p className="meta px-3 py-2 text-muted">{g.kind}</p>
                <ul>
                  {g.results.map((r, n) => {
                    const idx = g.start + n;
                    return (
                      <li key={r.href}>
                        <Link
                          href={r.href}
                          onClick={(e) => {
                            e.preventDefault();
                            go(r.href);
                          }}
                          onMouseEnter={() => setActive(idx)}
                          className={`flex items-center gap-4 px-3 py-2.5 ${idx === active ? 'bg-surface' : ''}`}
                        >
                          {r.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={r.image} alt="" referrerPolicy="no-referrer" loading="lazy" className="size-12 shrink-0 object-cover" />
                          ) : (
                            <span className="flex size-12 shrink-0 items-center justify-center bg-sage">
                              <ArrowRight className="size-4" aria-hidden />
                            </span>
                          )}
                          <span className="min-w-0 flex-1">
                            <span className="block truncate font-display text-lg leading-tight">{r.title}</span>
                            <span className="meta block truncate text-muted">{r.subtitle}</span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { BedDouble, Landmark, List, Map as MapIcon, ShoppingBag, UtensilsCrossed, type LucideIcon } from 'lucide-react';
import { CATEGORIES, placeKey, priceInfo, type PlaceCategory, type PlaceSummary } from '@/lib/data';
import { dict } from '@/lib/dict';
import { href, type Lang } from '@/lib/i18n';
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/motion';
import { Photo } from '@/components/Cards';
import SaveButton from '@/components/SaveButton';
import { MoreLink } from '@/components/Section';
import PlacesMap from '@/components/PlacesMap';

const TABS: { key: string; label: string; labelEn: string; icon: LucideIcon; categories: PlaceCategory[]; href: string }[] = [
  { key: 'hacer', label: 'Qué hacer', labelEn: 'Things to do', icon: Landmark, categories: ['experiencias', 'turistico'], href: '/lugares' },
  { key: 'comer', label: 'Comer y beber', labelEn: 'Food & drink', icon: UtensilsCrossed, categories: ['gastronomia'], href: '/lugares/gastronomia' },
  { key: 'dormir', label: 'Dónde dormir', labelEn: 'Where to stay', icon: BedDouble, categories: ['hospedaje'], href: '/lugares/hospedaje' },
  { key: 'compras', label: 'Compras', labelEn: 'Shopping', icon: ShoppingBag, categories: ['compras'], href: '/lugares/compras' },
];
const PAGE = 8;

const DESKTOP = '(min-width: 1024px)';
const subscribeDesktop = (cb: () => void) => {
  const mq = window.matchMedia(DESKTOP);
  mq.addEventListener('change', cb);
  return () => mq.removeEventListener('change', cb);
};

/**
 * "Explora Tequis", como el "Explore Shropshire" de la referencia: pestañas por tipo de
 * lugar, la lista a la izquierda y el mapa real fijo a la derecha. La lista es un índice de
 * guía impresa (nombre grande, miniatura en arco, tipo y precio), no una cuadrícula de
 * tarjetas. Pasar el cursor por un renglón agranda su pin. En el celular se cambia entre lista y mapa.
 */
export default function ExploreTequis({ places, lang }: { places: PlaceSummary[]; lang: Lang }) {
  const d = dict(lang);
  const en = lang === 'en';
  const tabs = useMemo(
    () =>
      TABS.map((tab) => ({ ...tab, label: lang === 'en' ? tab.labelEn : tab.label, href: href(lang, tab.href), places: places.filter((p) => tab.categories.includes(p.category)) })).filter(
        (tab) => tab.places.length > 0,
      ),
    [places, lang],
  );
  const [tabKey, setTabKey] = useState(tabs[0]?.key);
  const [shown, setShown] = useState(PAGE);
  const [hover, setHover] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<'lista' | 'mapa'>('lista');
  const grid = useRef<HTMLUListElement>(null);
  const firstFrom = useRef(0);
  const mounted = useRef(false);
  // Un solo mapa a la vez: el fijo de la derecha en escritorio o el de "Mapa" en el celular.
  const desktop = useSyncExternalStore(subscribeDesktop, () => window.matchMedia(DESKTOP).matches, () => false);

  const tab = tabs.find((t) => t.key === tabKey) ?? tabs[0];
  const points = useMemo(
    () =>
      (tab?.places ?? []).map((p) => ({
        id: p.id,
        name: p.name,
        href: href(lang, `/lugar/${p.slug}`),
        subtitle: p.subcategory,
        lat: p.latitude,
        lng: p.longitude,
        color: CATEGORIES[p.category].color,
        image: p.thumbnailUrl,
      })),
    [tab, lang],
  );

  // Las tarjetas nuevas (al cambiar de pestaña o al cargar más) entran escalonadas.
  useGSAP(
    () => {
      if (!mounted.current) {
        mounted.current = true;
        return;
      }
      if (prefersReducedMotion() || !grid.current) return;
      const cards = Array.from(grid.current.children).slice(firstFrom.current);
      gsap.fromTo(cards, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', stagger: 0.06, clearProps: 'transform,opacity,visibility' });
    },
    { dependencies: [tabKey, shown], scope: grid },
  );

  if (!tab) return null;
  const visible = tab.places.slice(0, shown);

  return (
    <section data-cursor-dark className="on-dark relative bg-forest text-white" aria-labelledby="explora-title">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="min-w-0 px-[var(--margin)] py-24 lg:py-32 lg:pr-12">
          <h2 id="explora-title" data-split="lines" className="heading max-w-[12ch]">
            {en ? `${places.length} places on one map` : `${places.length} lugares en un solo mapa`}
          </h2>

          <div role="tablist" aria-label={en ? 'Type of place' : 'Tipo de lugar'} className="no-scrollbar -mx-[var(--margin)] mt-10 flex gap-2 overflow-x-auto px-[var(--margin)] sm:mx-0 sm:flex-wrap sm:px-0">
            {tabs.map((t) => {
              const active = t.key === tab.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    firstFrom.current = 0;
                    setTabKey(t.key);
                    setShown(PAGE);
                  }}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 font-medium transition-colors ${
                    active ? 'bg-white text-ink' : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <t.icon className="size-4" aria-hidden />
                  {t.label}
                  <span className={`meta ${active ? 'text-muted' : 'text-white/70'}`}>{t.places.length}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex gap-2 lg:hidden">
            {(['lista', 'mapa'] as const).map((v) => (
              <button
                key={v}
                type="button"
                aria-pressed={mobileView === v}
                onClick={() => setMobileView(v)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-small font-semibold transition-colors ${mobileView === v ? 'bg-white/15' : 'text-white/70'}`}
              >
                {v === 'lista' ? <List className="size-4" aria-hidden /> : <MapIcon className="size-4" aria-hidden />}
                {v === 'lista' ? d.list : d.map}
              </button>
            ))}
          </div>

          {!desktop && mobileView === 'mapa' && (
            <div className="mt-6">
              <PlacesMap points={points} lang={lang} className="h-[65vh]" fitOnChange />
            </div>
          )}

          <div className={mobileView === 'mapa' ? 'hidden lg:block' : ''}>
            <div role="tabpanel" aria-label={tab.label}>
              <ul ref={grid} className="mt-8">
                {visible.map((p) => {
                  const price = priceInfo(lang, p.priceRange);
                  return (
                    <li key={p.id} className="relative" onMouseEnter={() => setHover(p.id)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(p.id)}>
                      <Link
                        href={href(lang, `/lugar/${p.slug}`)}
                        data-cursor={d.cursorView}
                        className="-mx-4 flex items-center gap-5 py-4 pl-4 pr-16 transition-colors duration-300 hover:bg-white/[0.06] sm:gap-7"
                      >
                        <Photo src={p.thumbnailUrl} alt="" label={p.subcategory} sizes="64px" className="h-20 w-16 shrink-0 rounded-t-full" />
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-lead leading-[1.05] tracking-[-0.015em] sm:text-title">{p.name}</span>
                          <span className="meta mt-2 block text-white/70">
                            {p.subcategory}
                            {price && ` · ${price.symbol}`}
                          </span>
                        </span>
                      </Link>
                      <SaveButton id={placeKey(p.id)} name={p.name} lang={lang} className="absolute right-0 top-1/2 -translate-y-1/2" />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              {shown < tab.places.length && (
                <button
                  type="button"
                  onClick={() => {
                    firstFrom.current = shown;
                    setShown((n) => n + PAGE);
                  }}
                  className="btn-outline"
                >
                  {d.loadMore(tab.places.length - shown)}
                </button>
              )}
              <MoreLink href={tab.href}>{d.allIn(tab.label.toLowerCase())}</MoreLink>
              <Link href={href(lang, '/mapa')} className="text-white/80 hover:text-white hover:underline">{d.fullMap}</Link>
            </div>
          </div>
        </div>

        {desktop && (
          <div className="relative">
            <div className="sticky top-0 h-[100svh]">
              <PlacesMap points={points} lang={lang} frame={false} className="h-full" activeId={hover} fitOnChange />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

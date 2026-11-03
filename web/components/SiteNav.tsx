'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Heart, MapPinned, Search, X } from 'lucide-react';
import { EASE, gsap, prefersReducedMotion, useGSAP } from '@/lib/motion';
import { useFavorites } from '@/lib/favorites';
import type { NavSection } from '@/lib/nav';
import type { SearchItem } from '@/lib/search';
import { Logo } from './Logo';
import { MoreLink } from './Section';
import SearchDialog from './SearchDialog';
import { photoAttrs } from '@/lib/images';

// Páginas que abren con una foto a pantalla completa: ahí el header va transparente y en
// blanco encima de la foto, y se vuelve sólido al bajar (o al abrir un panel del menú).
const OVERLAY_PATHS = ['/', '/por-que-tequis', '/guia-practica'];

function isTyping(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  return !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
}

/**
 * Header en dos pisos, como el de visitshropshire.co.uk: arriba logo, buscador, "Mi viaje"
 * y el mapa; abajo las secciones, cada una con su panel (columnas de links y una tarjeta
 * destacada). En celular, buscador y corazón quedan arriba y el resto va en el menú verde.
 */
export default function SiteHeader({ nav, search }: { nav: NavSection[]; search: SearchItem[] }) {
  const pathname = usePathname();
  const overlay = OVERLAY_PATHS.includes(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [panel, setPanel] = useState<number | null>(null);
  // Las fotos de los paneles se piden hasta que el panel se abre por primera vez.
  const [seen, setSeen] = useState<Set<number>>(new Set());
  const closeTimer = useRef<number | undefined>(undefined);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { ids } = useFavorites();

  // Sólido al bajar de la portada; se esconde al seguir bajando y vuelve al subir.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (Math.abs(y - last) > 6) setHidden(y > last && y > 400);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // "/" o ⌘K abren el buscador.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === '/' && !isTyping(e.target)) || (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === 'Escape') {
        setPanel(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Entrada del header al cargar el sitio.
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    // fromTo + clearProps: al terminar no deja estilos en línea (que chocarían con el hover).
    gsap.fromTo(
      headerRef.current!.querySelectorAll('[data-intro]'),
      { y: -24, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, ease: EASE, stagger: 0.05, delay: 0.2, clearProps: 'transform,opacity,visibility' },
    );
  }, { scope: headerRef });

  // Menú: cortina que baja y palabras grandes que suben.
  useGSAP(() => {
    if (!menuOpen || !menuRef.current || prefersReducedMotion()) return;
    const tl = gsap.timeline();
    tl.fromTo(menuRef.current, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: 'expo.inOut' })
      .from(menuRef.current.querySelectorAll('[data-menu-big]'), { yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.05 }, '-=0.25')
      .from(menuRef.current.querySelectorAll('[data-menu-link]'), { y: 20, autoAlpha: 0, duration: 0.6, ease: EASE, stagger: 0.015 }, '-=0.8');
  }, { dependencies: [menuOpen] });

  // Cerrar menú, panel y buscador al navegar.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
    setPanel(null);
    setSearchOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (menuOpen) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [menuOpen]);

  const openPanel = (i: number) => {
    window.clearTimeout(closeTimer.current);
    setPanel(i);
    if (!seen.has(i)) setSeen((prev) => new Set(prev).add(i));
  };
  const closePanelSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPanel(null), 160);
  };

  const transparent = overlay && !scrolled && panel === null;
  const count = ids.length;

  return (
    <>
      <header
        ref={headerRef}
        onMouseLeave={closePanelSoon}
        className={`fixed inset-x-0 top-0 z-30 transition-[background-color,color,transform] duration-500 ${
          transparent ? 'text-white' : 'bg-bg text-ink'
        } ${hidden && !menuOpen && panel === null ? 'header-hidden' : ''}`}
      >
        <div className={`frame flex items-center gap-3 transition-[padding] duration-500 ${transparent ? 'pb-2 pt-6' : 'py-3'}`}>
          <Link href="/" aria-label="Tequisquiapan Mágico, inicio" data-intro className="shrink-0" onMouseEnter={closePanelSoon}>
            <Logo />
          </Link>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            data-intro
            className={`ml-6 hidden h-11 w-full max-w-[420px] items-center gap-3 rounded-full px-5 text-left transition-colors md:flex lg:ml-12 ${
              transparent ? 'bg-white/15 hover:bg-white/25' : 'bg-surface hover:bg-line'
            }`}
          >
            <Search className="size-4 shrink-0 opacity-70" aria-hidden />
            <span className="flex-1 truncate opacity-80">Busca lugares, eventos y más…</span>
            <kbd className="meta hidden rounded-full bg-current/10 px-2 font-sans opacity-60 lg:inline">/</kbd>
          </button>

          <div className="ml-auto flex items-center gap-1 sm:gap-2 lg:gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Buscar"
              data-intro
              className="flex size-11 items-center justify-center rounded-full transition-opacity hover:opacity-70 md:hidden"
            >
              <Search className="size-5" aria-hidden />
            </button>
            <Link
              href="/mi-viaje"
              data-intro
              aria-label={count ? `Mi viaje: ${count} guardados` : 'Mi viaje'}
              className="relative flex h-11 items-center gap-2 rounded-full px-3 font-medium transition-opacity hover:opacity-70"
            >
              <Heart className={`size-5 ${count ? 'fill-current' : ''}`} aria-hidden />
              <span className="hidden lg:inline">Mi viaje</span>
              {count > 0 && (
                <span className="absolute right-0 top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-ochre px-1.5 text-small font-semibold text-ink lg:static">
                  {count}
                </span>
              )}
            </Link>
            <Link
              href="/mapa"
              data-intro
              className={`hidden items-center gap-2 rounded-full px-5 py-2.5 font-medium transition-colors sm:flex ${
                transparent ? 'bg-white text-ink hover:bg-ochre' : 'bg-ink text-bg hover:bg-green'
              }`}
            >
              <MapPinned className="size-4" aria-hidden /> Explorar mapa
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              data-intro
              className="group/burger ml-1 flex size-11 flex-col items-center justify-center gap-[6px] rounded-full bg-current/15 transition-colors hover:bg-current lg:hidden"
            >
              <span className="h-[2px] w-5 bg-current transition-all group-hover/burger:w-3 group-hover/burger:bg-bg" />
              <span className="h-[2px] w-5 bg-current transition-all group-hover/burger:bg-bg" />
              <span className="h-[2px] w-5 bg-current transition-all group-hover/burger:w-3 group-hover/burger:bg-bg" />
            </button>
          </div>
        </div>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="frame flex flex-wrap items-center pb-2 [&>li:first-child]:-ml-4">
            {nav.map((s, i) => (
              <li key={s.href} data-intro onMouseEnter={() => openPanel(i)}>
                <Link
                  href={s.href}
                  onFocus={() => openPanel(i)}
                  aria-haspopup="true"
                  aria-expanded={panel === i}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 font-medium transition-colors ${
                    panel === i ? 'bg-ink/[0.07]' : transparent ? 'hover:bg-white/15' : 'hover:bg-ink/[0.07]'
                  }`}
                >
                  {s.label}
                  <ChevronDown className={`size-3.5 opacity-60 transition-transform ${panel === i ? 'rotate-180' : ''}`} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {nav.map((s, i) => (
          <MegaPanel key={s.href} section={s} open={panel === i} loadImage={seen.has(i)} onEnter={() => openPanel(i)} />
        ))}
      </header>

      <SearchDialog items={search} open={searchOpen} onClose={() => setSearchOpen(false)} />

      {menuOpen && (
        <div ref={menuRef} role="dialog" aria-modal="true" aria-label="Menú" data-lenis-prevent data-cursor-dark className="fixed inset-0 z-40 overflow-y-auto bg-green text-white">
          <div className="frame flex items-center justify-between py-6">
            <Link href="/" aria-label="Inicio">
              <Logo />
            </Link>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú" className="flex size-11 items-center justify-center rounded-full bg-white/15">
              <X className="size-6" aria-hidden />
            </button>
          </div>
          <div className="frame flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setSearchOpen(true);
              }}
              className="flex flex-1 items-center gap-3 rounded-full bg-white/15 px-5 py-3 text-left"
            >
              <Search className="size-4" aria-hidden /> Busca lugares, eventos y más…
            </button>
            <Link href="/mapa" className="btn-outline">
              <MapPinned className="size-4" aria-hidden /> Mapa
            </Link>
          </div>
          <div className="frame grid gap-x-12 gap-y-10 pb-16 pt-10 sm:grid-cols-2 md:grid-cols-3">
            {nav.map((s) => (
              <div key={s.href}>
                <p className="overflow-hidden font-display text-[2.75rem] leading-none tracking-[-0.02em] sm:text-5xl">
                  <Link href={s.href} data-menu-big className="block hover:underline">{s.label}</Link>
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {s.groups.flatMap((g) => g.links).slice(0, 6).map((l) => (
                    <li key={l.href} data-menu-link>
                      <Link href={l.href} className="text-white/85 hover:text-white hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function MegaPanel({ section: s, open, loadImage, onEnter }: { section: NavSection; open: boolean; loadImage: boolean; onEnter: () => void }) {
  const wide = s.groups.length === 1 && s.groups[0].links.length > 6;
  return (
    <div
      onMouseEnter={onEnter}
      className={`absolute inset-x-0 top-full hidden bg-bg text-ink shadow-[0_40px_60px_-40px_rgba(31,26,23,0.35)] transition-[opacity,transform,visibility] duration-300 lg:block ${
        open ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-2 opacity-0'
      }`}
    >
      <div className="frame grid grid-cols-[minmax(0,1fr)_360px] gap-16 py-12">
        <div>
          <div className={`grid gap-12 ${s.groups.length > 1 ? 'grid-cols-2' : ''}`}>
            {s.groups.map((g) => (
              <div key={g.title}>
                {g.href ? (
                  <Link href={g.href} className="font-display text-lead leading-none tracking-[-0.01em] hover:underline">{g.title}</Link>
                ) : (
                  <p className="font-display text-lead leading-none tracking-[-0.01em]">{g.title}</p>
                )}
                <ul className={`mt-4 grid gap-x-10 ${wide ? 'grid-cols-2' : ''}`}>
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="group -mx-3 flex items-baseline justify-between gap-4 rounded-full px-3 py-2 transition-colors hover:bg-surface">
                        <span className="group-hover:underline">{l.label}</span>
                        {l.meta && <span className="meta shrink-0 text-muted">{l.meta}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <MoreLink href={s.all.href} className="mt-8">{s.all.label}</MoreLink>
        </div>

        {s.feature && (
          <Link href={s.feature.href} data-cursor="Ver" className="group relative block aspect-[4/3.4] self-start overflow-hidden rounded-t-[999px] bg-stone text-white">
            {loadImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img {...photoAttrs(s.feature.image, '400px')} alt="" className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" />
            )}
            <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-6">
              <span className="meta text-white/85">{s.feature.eyebrow}</span>
              <span className="font-display text-lead leading-[1.05]">{s.feature.title}</span>
              <span className="mt-2 rounded-full bg-white px-4 py-1.5 font-medium text-ink transition-colors group-hover:bg-ochre">
                {s.feature.cta}
              </span>
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

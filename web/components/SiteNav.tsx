'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { EASE, gsap, prefersReducedMotion, useGSAP } from '@/lib/motion';
import { NAV } from '@/lib/nav';
import { Logo } from './Logo';

// Páginas que abren con una foto a pantalla completa: ahí el header va transparente y en
// blanco encima de la foto, y se vuelve sólido al bajar.
const OVERLAY_PATHS = ['/', '/por-que-tequis', '/guia-practica'];

export default function SiteHeader() {
  const pathname = usePathname();
  const overlay = OVERLAY_PATHS.includes(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Entrada del header al cargar el sitio.
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    // fromTo + clearProps: al terminar no deja estilos en línea (que chocarían con el hover).
    gsap.fromTo(
      headerRef.current!.querySelectorAll('[data-intro]'),
      { y: -24, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, ease: EASE, stagger: 0.08, delay: 0.2, clearProps: 'transform,opacity,visibility' },
    );
  }, { scope: headerRef });

  // Menú: cortina que baja y palabras grandes que suben.
  useGSAP(() => {
    if (!menuOpen || !menuRef.current || prefersReducedMotion()) return;
    const tl = gsap.timeline();
    tl.fromTo(menuRef.current, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: 'expo.inOut' })
      .from(menuRef.current.querySelectorAll('[data-menu-big]'), { yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.08 }, '-=0.25')
      .from(menuRef.current.querySelectorAll('[data-menu-link]'), { y: 20, autoAlpha: 0, duration: 0.6, ease: EASE, stagger: 0.025 }, '-=0.8');
  }, { dependencies: [menuOpen] });

  // Cerrar el menú al navegar.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (menuOpen) window.__lenis?.stop();
    else window.__lenis?.start();
  }, [menuOpen]);

  const transparent = overlay && !scrolled;

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-30 transition-[background-color,color,transform] duration-500 ${
          transparent ? 'text-white' : 'border-b border-line bg-bg/95 text-ink backdrop-blur'
        } ${hidden && !menuOpen ? 'header-hidden' : ''}`}
      >
        <div className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-all sm:px-14 ${transparent ? 'py-7' : 'py-3'}`}>
          <Link href="/" aria-label="Tequisquiapan Mágico, inicio" data-intro>
            <Logo />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-10 lg:flex">
            {NAV.map((group) => (
              <div key={group.label} className="group relative" data-intro>
                <button type="button" className="flex items-center gap-1.5 py-2 text-[13px] font-semibold uppercase tracking-[0.08em]">
                  {group.label} <ChevronDown className="size-3.5 transition group-hover:rotate-180" aria-hidden />
                </button>
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="border border-line bg-bg py-3 text-ink shadow-xl">
                    {group.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="block px-5 py-2 text-[15px] hover:bg-surface">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            data-intro
            className="group/burger flex size-12 flex-col items-center justify-center gap-[6px] border border-current transition-colors hover:bg-current"
          >
            <span className="h-[2px] w-6 bg-current transition-all group-hover/burger:w-4 group-hover/burger:bg-bg" />
            <span className="h-[2px] w-6 bg-current transition-all group-hover/burger:bg-bg" />
            <span className="h-[2px] w-6 bg-current transition-all group-hover/burger:w-4 group-hover/burger:bg-bg" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div ref={menuRef} role="dialog" aria-modal="true" aria-label="Menú" data-lenis-prevent data-cursor-dark className="fixed inset-0 z-40 overflow-y-auto bg-green text-white">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-7 sm:px-14">
            <Link href="/" aria-label="Inicio">
              <Logo />
            </Link>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú" className="flex size-12 items-center justify-center border border-current">
              <X className="size-6" aria-hidden />
            </button>
          </div>
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-16 pt-6 sm:px-14 md:grid-cols-3">
            {NAV.map((group) => (
              <div key={group.label}>
                <p className="overflow-hidden font-display text-6xl tracking-wide text-white/90 sm:text-7xl">
                  <span data-menu-big className="block">{group.big}</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {group.links.map((l) => (
                    <li key={l.href} data-menu-link>
                      <Link href={l.href} className="font-display text-2xl text-white/85 transition hover:text-white hover:underline">
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

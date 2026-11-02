'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { NAV } from '@/lib/nav';
import { Logo } from './Logo';

// Páginas que abren con una foto a pantalla completa: ahí el header va transparente y en
// blanco encima de la foto, y se vuelve sólido al bajar.
const OVERLAY_PATHS = ['/', '/por-que-tequis', '/guia-practica'];

export default function SiteHeader() {
  const pathname = usePathname();
  const overlay = OVERLAY_PATHS.includes(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cerrar el menú al navegar.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const transparent = overlay && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
          transparent ? 'text-white' : 'border-b border-line bg-bg/95 text-ink backdrop-blur'
        }`}
      >
        <div className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-all sm:px-14 ${transparent ? 'py-7' : 'py-3'}`}>
          <Link href="/" aria-label="Tequisquiapan Mágico, inicio">
            <Logo />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-10 lg:flex">
            {NAV.map((group) => (
              <div key={group.label} className="group relative">
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
            className="flex size-12 flex-col items-center justify-center gap-[6px] border border-current"
          >
            <span className="h-[2px] w-6 bg-current" />
            <span className="h-[2px] w-6 bg-current" />
            <span className="h-[2px] w-6 bg-current" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div role="dialog" aria-modal="true" aria-label="Menú" className="fixed inset-0 z-40 overflow-y-auto bg-green text-white">
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
                <p className="font-display text-6xl tracking-wide text-white/90 sm:text-7xl">{group.big}</p>
                <ul className="mt-6 space-y-3">
                  {group.links.map((l) => (
                    <li key={l.href}>
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

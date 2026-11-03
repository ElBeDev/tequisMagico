'use client';

import { Heart } from 'lucide-react';
import { dict } from '@/lib/dict';
import { useFavorites } from '@/lib/favorites';
import type { Lang } from '@/lib/i18n';

/**
 * Corazón para guardar un lugar o evento en "Mi viaje". `icon` es el botón redondo que va
 * encima de la foto de las tarjetas; `full` el botón con texto de las fichas.
 */
export default function SaveButton({
  id,
  name,
  lang,
  variant = 'icon',
  className = '',
}: {
  id: string;
  name: string;
  lang: Lang;
  variant?: 'icon' | 'full';
  className?: string;
}) {
  const { has, toggle } = useFavorites();
  const saved = has(id);
  const t = dict(lang);
  if (variant === 'full') {
    // Con texto visible: el nombre accesible es ese mismo texto (la ficha ya dice qué lugar es).
    return (
      <button
        type="button"
        onClick={() => toggle(id)}
        aria-pressed={saved}
        className={`btn-outline ${className}`}
      >
        <Heart key={String(saved)} className={`size-[1.1em] ${saved ? 'animate-[heart-pop_0.45s_ease-out] fill-current' : ''}`} aria-hidden />
        {saved ? t.inTrip : t.saveInTrip}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => toggle(id)}
      aria-pressed={saved}
      aria-label={saved ? t.removeNamed(name) : t.saveNamed(name)}
      title={saved ? t.inTrip : t.saveInTrip}
      className={`flex size-11 items-center justify-center rounded-full bg-bg text-ink transition-colors hover:bg-ink hover:text-bg ${className}`}
    >
      <Heart key={String(saved)} className={`size-[18px] ${saved ? 'animate-[heart-pop_0.45s_ease-out] fill-current' : ''}`} aria-hidden />
    </button>
  );
}

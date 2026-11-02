'use client';

import { Heart } from 'lucide-react';
import { useFavorites } from '@/lib/favorites';

/**
 * Corazón para guardar un lugar o evento en "Mi viaje". `icon` es el botón redondo que va
 * encima de la foto de las tarjetas; `full` el botón con texto de las fichas.
 */
export default function SaveButton({
  id,
  name,
  variant = 'icon',
  className = '',
}: {
  id: string;
  name: string;
  variant?: 'icon' | 'full';
  className?: string;
}) {
  const { has, toggle } = useFavorites();
  const saved = has(id);
  const label = saved ? `Quitar ${name} de mi viaje` : `Guardar ${name} en mi viaje`;

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={() => toggle(id)}
        aria-pressed={saved}
        aria-label={label}
        className={`btn-outline ${className}`}
      >
        <Heart key={String(saved)} className={`size-[1.1em] ${saved ? 'animate-[heart-pop_0.45s_ease-out] fill-current' : ''}`} aria-hidden />
        {saved ? 'En mi viaje' : 'Guardar en mi viaje'}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => toggle(id)}
      aria-pressed={saved}
      aria-label={label}
      title={saved ? 'En mi viaje' : 'Guardar en mi viaje'}
      className={`flex size-11 items-center justify-center rounded-full bg-bg text-ink transition-colors hover:bg-ink hover:text-bg ${className}`}
    >
      <Heart key={String(saved)} className={`size-[18px] ${saved ? 'animate-[heart-pop_0.45s_ease-out] fill-current' : ''}`} aria-hidden />
    </button>
  );
}

'use client';

import { useSyncExternalStore } from 'react';

// "Mi viaje": lo que la persona guarda con el corazón (claves de `placeKey`/`eventKey` en lib/data).
// Vive solo en su navegador, igual que los favoritos de la app viven solo en el teléfono; no
// se manda a ningún servidor. Si el navegador no deja usar localStorage (modo privado,
// datos bloqueados), funciona en memoria mientras la página esté abierta.

const KEY = 'tm:mi-viaje';
const CHANGE = 'tm:mi-viaje-change';
const EMPTY: string[] = [];

let memory: string[] = EMPTY;
let lastRaw: string | null | undefined;

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function getSnapshot(): string[] {
  const raw = readRaw();
  if (raw === null) return memory;
  if (raw !== lastRaw) {
    lastRaw = raw;
    try {
      const parsed: unknown = JSON.parse(raw);
      memory = Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : EMPTY;
    } catch {
      memory = EMPTY;
    }
  }
  return memory;
}

function write(ids: string[]) {
  memory = ids;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(ids));
  } catch {
    // Sin almacenamiento: se queda en `memory`.
  }
  window.dispatchEvent(new Event(CHANGE));
}

function subscribe(onChange: () => void) {
  window.addEventListener('storage', onChange); // otra pestaña
  window.addEventListener(CHANGE, onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(CHANGE, onChange);
  };
}

export function useFavorites() {
  const ids = useSyncExternalStore(subscribe, getSnapshot, () => EMPTY);
  return {
    ids,
    has: (key: string) => ids.includes(key),
    toggle: (key: string) => write(ids.includes(key) ? ids.filter((k) => k !== key) : [...ids, key]),
    remove: (key: string) => write(ids.filter((k) => k !== key)),
    clear: () => write([]),
  };
}

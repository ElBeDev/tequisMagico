'use client';

import type { StyleSpecification } from 'maplibre-gl';

// Teselas vectoriales gratuitas y sin API key de OpenFreeMap (datos de OpenStreetMap). Se
// toma su estilo "positron" y se recolorea con la paleta del sitio (hueso, verde salvia,
// agua gris verdosa) para que el mapa se vea parte del diseño y no un mapa genérico.
const STYLE_URL = 'https://tiles.openfreemap.org/styles/positron';

const PALETTE = {
  background: '#eeedea',
  water: '#cbd5d2',
  waterway: '#b6c3bf',
  park: '#dce0cd',
  wood: '#e0e3d4',
  residential: '#e8e6e1',
  building: '#dfdbd3',
  buildingOutline: '#d2cdc3',
  road: '#ffffff',
  roadCasing: '#d8d3c9',
  rail: '#cbc6bb',
  boundary: '#b9b4a9',
  label: '#5f5b54',
  labelHalo: '#eeedea',
};

let cached: Promise<StyleSpecification> | null = null;

/**
 * Carga MapLibre ya configurado. Su worker vive en un archivo aparte que el bundler no
 * incluye; `npm run dev/build` lo copia a public/ (scripts predev/prebuild) y aquí se le
 * dice dónde está. Sin esto el mapa se queda en blanco ("Worker failed to load").
 */
export async function loadMapLibre() {
  const mod = await import('maplibre-gl');
  if (!mod.getWorkerUrl().startsWith('/maplibre')) mod.setWorkerUrl('/maplibre-gl-worker.mjs');
  return mod;
}

export function tequisMapStyle(): Promise<StyleSpecification> {
  cached ??= fetch(STYLE_URL)
    .then((r) => r.json() as Promise<StyleSpecification>)
    .then((style) => {
      // Escudos de carreteras (de EUA y otros): no aplican aquí y su filtro avisa en consola.
      style.layers = style.layers.filter((l) => !l.id.includes('shield'));
      for (const layer of style.layers) {
        const id = layer.id;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const paint = ((layer as any).paint ??= {}) as Record<string, unknown>;
        if (layer.type === 'background') paint['background-color'] = PALETTE.background;
        else if (layer.type === 'fill') {
          if (id === 'water') paint['fill-color'] = PALETTE.water;
          else if (id === 'park') paint['fill-color'] = PALETTE.park;
          else if (id.startsWith('landcover')) paint['fill-color'] = PALETTE.wood;
          else if (id === 'landuse_residential') paint['fill-color'] = PALETTE.residential;
          else if (id === 'building') {
            paint['fill-color'] = PALETTE.building;
            paint['fill-outline-color'] = PALETTE.buildingOutline;
          }
        } else if (layer.type === 'line') {
          if (id.startsWith('waterway')) paint['line-color'] = PALETTE.waterway;
          else if (id.includes('casing')) paint['line-color'] = PALETTE.roadCasing;
          else if (id.startsWith('highway') || id.startsWith('road') || id.startsWith('tunnel')) paint['line-color'] = PALETTE.road;
          else if (id.startsWith('railway')) paint['line-color'] = PALETTE.rail;
          else if (id.startsWith('boundary')) paint['line-color'] = PALETTE.boundary;
        } else if (layer.type === 'symbol') {
          paint['text-color'] = PALETTE.label;
          paint['text-halo-color'] = PALETTE.labelHalo;
        }
      }
      return style;
    })
    .catch((e) => {
      cached = null;
      throw e;
    });
  return cached;
}


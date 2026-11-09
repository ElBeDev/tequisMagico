#!/usr/bin/env node
// Copia local de las fotos de Wikimedia Commons que usa tequismagico.com.
//
// Por qué: Commons limita (429) a quien le pide muchas fotos seguidas, y eso les pasa a los
// servidores de Google (PageSpeed) y le pasó al VPS al calentar la caché del optimizador. Con la
// copia, las fotos se sirven desde nuestro servidor (por el optimizador de Next: WebP, a medida y
// con caché de 30 días) y Wikimedia solo se toca al copiar cada foto, una vez.
//
// Uso (desde la raíz del repo):
//   node deploy/mirror-commons.mjs            # descarga las fotos nuevas y actualiza la lista
//   rsync -a deploy/.commons-mirror/ root@72.60.173.175:/srv/tequis/uploads/commons/
//   ssh root@72.60.173.175 chown -R tequis:tequis /srv/tequis/uploads/commons
//   deploy/deploy.sh web                      # la lista (web/lib/commons-mirror.json) va en el build
//
// Busca las fotos en las páginas publicadas (sitemap), así que una foto nueva del panel aparece
// aquí cuando ya está en el sitio. Hasta copiarla, el sitio la pide a Wikimedia como antes.
// Las licencias de Commons (CC BY / BY-SA) permiten redistribuirlas; el crédito está en /creditos.

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = process.env.SITE ?? 'https://tequismagico.com';
const OUT = join(ROOT, 'deploy/.commons-mirror');
const MANIFEST = join(ROOT, 'web/lib/commons-mirror.json');
// Wikimedia pide un User-Agent que identifique al cliente y un contacto.
const UA = 'TequisMagicoMirror/1.0 (https://tequismagico.com; hola@tequismagico.com)';
// Anchos estándar de Wikimedia, del mayor al menor: se guarda el primero que exista (no agranda).
const WIDTHS = [1920, 1280, 960, 500];
const PAUSE_MS = 2500;

const COMMONS = /https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/(?:thumb\/)?([0-9a-f]\/[0-9a-f]{2})\/([^/"'\s?]+?\.(?:jpe?g|png|webp))/gi;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const decode = (s) => {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
};

async function text(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

async function download(dir, file) {
  const enc = encodeURIComponent(file);
  for (const w of WIDTHS) {
    const url = `https://upload.wikimedia.org/wikipedia/commons/thumb/${dir}/${enc}/${w}px-${enc}`;
    for (let attempt = 1; attempt <= 3; attempt++) {
      await sleep(PAUSE_MS);
      const res = await fetch(url, { headers: { 'User-Agent': UA } });
      if (res.status === 429) {
        console.log(`  429, espero ${30 * attempt} s…`);
        await sleep(30_000 * attempt);
        continue;
      }
      if (!res.ok) break; // ese ancho no existe (original más chico): probar el siguiente
      const path = join(OUT, dir, file);
      await mkdir(dirname(path), { recursive: true });
      await writeFile(path, Buffer.from(await res.arrayBuffer()));
      return w;
    }
  }
  return null;
}

const manifest = JSON.parse(await readFile(MANIFEST, 'utf8').catch(() => '{}'));

const sitemap = await text(`${SITE}/sitemap.xml`);
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log(`${pages.length} páginas en el sitemap`);
const found = new Set();
for (let i = 0; i < pages.length; i += 6) {
  const htmls = await Promise.all(pages.slice(i, i + 6).map((p) => text(p).catch(() => '')));
  for (const html of htmls) for (const [, dir, file] of html.matchAll(COMMONS)) found.add(`${dir}/${decode(file)}`);
}
const pending = [...found].filter((k) => !manifest[k]);
console.log(`${found.size} fotos de Commons en el sitio, ${pending.length} sin copia`);

for (const key of pending) {
  const [d1, d2, ...rest] = key.split('/');
  const file = rest.join('/');
  const width = await download(`${d1}/${d2}`, file);
  if (width) {
    manifest[key] = width;
    console.log(`  ${width}px  ${file}`);
  } else {
    console.log(`  FALLÓ  ${file} (se seguirá pidiendo a Wikimedia)`);
  }
}

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(MANIFEST, JSON.stringify(sorted, null, 2) + '\n');
console.log(`Lista: ${Object.keys(sorted).length} fotos en ${MANIFEST.replace(ROOT + '/', '')}`);

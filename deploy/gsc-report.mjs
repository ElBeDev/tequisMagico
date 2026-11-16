#!/usr/bin/env node
// Reporte de Google Search Console para tequismagico.com, en Markdown.
//
// Uso (desde la raíz del repo):
//   node deploy/gsc-report.mjs                 # últimos 28 días con datos, contra los 28 anteriores
//   node deploy/gsc-report.mjs --days 7        # otro periodo
//   node deploy/gsc-report.mjs --inspect       # además, estado de indexación de las URLs de KEY_URLS
//   node deploy/gsc-report.mjs > /tmp/gsc.md   # a un archivo
//
// Llave: cuenta de servicio tequismagico@tequis-magico.iam.gserviceaccount.com, con acceso a la
// propiedad sc-domain:tequismagico.com. El JSON va FUERA del repo: GSC_KEY=/ruta/llave.json o, por
// omisión, ~/.config/tequis/gsc-key.json. Solo lectura (scope webmasters.readonly).
// Sin dependencias: firma el JWT con node:crypto. Plan y línea base: docs/web/plan-seo-2026-11.md.

import { createSign } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join } from 'node:path';

const SITE_PROPERTY = 'sc-domain:tequismagico.com';
const ORIGIN = 'https://tequismagico.com';
const KEY_PATH = process.env.GSC_KEY ?? join(homedir(), '.config/tequis/gsc-key.json');
const args = process.argv.slice(2);
const DAYS = Number(args[args.indexOf('--days') + 1]) || 28;
const INSPECT = args.includes('--inspect');

// Páginas que vale la pena vigilar: categorías, páginas por tipo con búsquedas, guías y las fichas del plan.
const KEY_URLS = [
  '/', '/lugares', '/eventos', '/guia-practica', '/guias',
  '/lugares/gastronomia', '/lugares/gastronomia/restaurantes', '/lugares/hospedaje',
  '/lugares/hospedaje/con-alberca', '/lugares/hospedaje/pet-friendly', '/lugares/hospedaje/en-el-centro',
  '/lugares/experiencias/balnearios', '/lugares/experiencias/vinedos',
  '/guias/vinedos-y-quesos', '/guias/balnearios', '/guias/navidad', '/guias/que-comer',
  '/lugar/parque-la-pila', '/lugar/plaza-miguel-hidalgo', '/lugar/balneario-la-vega',
  '/lugar/mercado-guadalupano-municipal', '/lugar/parador-artesanal-luis-donaldo-colosio',
  '/evento/feria-nacional-del-queso-y-vino', '/en',
];

const b64url = (b) => Buffer.from(b).toString('base64url');

async function token() {
  let key;
  try {
    key = JSON.parse(await readFile(KEY_PATH, 'utf8'));
  } catch {
    console.error(`No encuentro la llave en ${KEY_PATH}. Pon GSC_KEY=/ruta/llave.json (ver el encabezado del script).`);
    process.exit(1);
  }
  const now = Math.floor(Date.now() / 1000);
  const head = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = b64url(JSON.stringify({
    iss: key.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: key.token_uri, iat: now, exp: now + 3600,
  }));
  const sig = createSign('RSA-SHA256').update(`${head}.${claim}`).sign(key.private_key, 'base64url');
  const res = await fetch(key.token_uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${head}.${claim}.${sig}` }),
  });
  if (!res.ok) throw new Error(`token: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

const auth = await token();

async function api(url, body) {
  const res = await fetch(url, {
    method: body ? 'POST' : 'GET',
    headers: { Authorization: `Bearer ${auth}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`${url}: ${res.status} ${await res.text()}`);
  return res.json();
}

const site = encodeURIComponent(SITE_PROPERTY);
const query = async (startDate, endDate, dimensions = [], rowLimit = 5000) =>
  (await api(`https://www.googleapis.com/webmasters/v3/sites/${site}/searchAnalytics/query`, { startDate, endDate, dimensions, rowLimit })).rows ?? [];

// Search Console tarda 2–3 días en tener datos: el periodo termina en el último día con datos.
const iso = (d) => d.toISOString().slice(0, 10);
const addDays = (s, n) => iso(new Date(Date.parse(`${s}T00:00:00Z`) + n * 86_400_000));
const byDate = await query(addDays(iso(new Date()), -120), iso(new Date()), ['date'], 500);
if (!byDate.length) {
  console.log('Search Console todavía no tiene datos.');
  process.exit(0);
}
const end = byDate.at(-1).keys[0];
const start = addDays(end, -(DAYS - 1));
const prevEnd = addDays(start, -1);
const prevStart = addDays(prevEnd, -(DAYS - 1));

const sum = (rows) => {
  const c = rows.reduce((a, r) => a + r.clicks, 0);
  const i = rows.reduce((a, r) => a + r.impressions, 0);
  const p = i ? rows.reduce((a, r) => a + r.position * r.impressions, 0) / i : 0;
  return { clicks: c, impressions: i, ctr: i ? c / i : 0, position: p };
};
const cur = sum(byDate.filter((r) => r.keys[0] >= start));
const prev = sum(byDate.filter((r) => r.keys[0] >= prevStart && r.keys[0] <= prevEnd));
const pct = (x) => `${(x * 100).toFixed(1)} %`;
const n = (x) => Math.round(x).toLocaleString('es-MX');
const pos = (x) => x.toFixed(1);
const path = (u) => u.replace(ORIGIN, '') || '/';
const table = (head, rows) => [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`, ...rows.map((r) => `| ${r.join(' | ')} |`)].join('\n');

const [queries, pages, qp, devices] = await Promise.all([
  query(start, end, ['query']),
  query(start, end, ['page']),
  query(start, end, ['query', 'page']),
  query(start, end, ['device']),
]);

const out = [];
out.push(`# Search Console: ${start} a ${end}`, '');
out.push(table(['', 'Este periodo', 'Periodo anterior'], [
  ['Apariciones', n(cur.impressions), prev.impressions ? n(prev.impressions) : '—'],
  ['Clics', n(cur.clicks), prev.impressions ? n(prev.clicks) : '—'],
  ['CTR', pct(cur.ctr), prev.impressions ? pct(prev.ctr) : '—'],
  ['Posición media', pos(cur.position), prev.impressions ? pos(prev.position) : '—'],
]), '');
out.push(`Dispositivos: ${devices.map((r) => `${r.keys[0].toLowerCase()} ${n(r.impressions)} apariciones, posición ${pos(r.position)}`).join(' · ')}`, '');

out.push('## Búsquedas con más apariciones', '');
out.push(table(['Búsqueda', 'Apariciones', 'Clics', 'Posición'],
  [...queries].sort((a, b) => b.impressions - a.impressions).slice(0, 25)
    .map((r) => [r.keys[0], n(r.impressions), n(r.clicks), pos(r.position)])), '');

// Las que casi llegan: posición 4–20 con algo de volumen. Se dice a qué página caen.
const topPage = new Map();
for (const r of qp) {
  const best = topPage.get(r.keys[0]);
  if (!best || r.impressions > best.impressions) topPage.set(r.keys[0], { page: path(r.keys[1]), impressions: r.impressions });
}
out.push('## Casi llegan (posición 4–20, 3+ apariciones)', '');
out.push(table(['Búsqueda', 'Apariciones', 'Posición', 'Página'],
  queries.filter((r) => r.position >= 4 && r.position <= 20 && r.impressions >= 3)
    .sort((a, b) => b.impressions - a.impressions).slice(0, 30)
    .map((r) => [r.keys[0], n(r.impressions), pos(r.position), topPage.get(r.keys[0])?.page ?? '']) ), '');

out.push('## En la primera página sin clics (posición ≤ 10, 10+ apariciones)', '');
out.push(table(['Página', 'Apariciones', 'Posición'],
  pages.filter((r) => r.position <= 10 && r.impressions >= 10 && r.clicks === 0)
    .sort((a, b) => b.impressions - a.impressions).slice(0, 20)
    .map((r) => [path(r.keys[0]), n(r.impressions), pos(r.position)])), '');

out.push('## Páginas con más apariciones', '');
out.push(table(['Página', 'Apariciones', 'Clics', 'CTR', 'Posición'],
  [...pages].sort((a, b) => b.impressions - a.impressions).slice(0, 25)
    .map((r) => [path(r.keys[0]), n(r.impressions), n(r.clicks), pct(r.ctr), pos(r.position)])), '');

if (INSPECT) {
  out.push('## Indexación de URLs clave', '');
  const rows = [];
  for (const p of KEY_URLS) {
    const url = `${ORIGIN}${p === '/' ? '' : p}`;
    try {
      const r = (await api('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', { inspectionUrl: url, siteUrl: SITE_PROPERTY, languageCode: 'es' }))
        .inspectionResult.indexStatusResult;
      const canon = r.googleCanonical && r.googleCanonical !== url && r.googleCanonical !== `${url}/` ? path(r.googleCanonical) : 'la nuestra';
      rows.push([p, r.coverageState ?? '—', (r.lastCrawlTime ?? '—').slice(0, 10), canon]);
    } catch (e) {
      rows.push([p, `error: ${String(e.message).slice(0, 60)}`, '', '']);
    }
  }
  out.push(table(['URL', 'Estado', 'Último rastreo', 'Canónica de Google'], rows), '');
}

const sitemaps = (await api(`https://www.googleapis.com/webmasters/v3/sites/${site}/sitemaps`)).sitemap ?? [];
out.push('## Sitemaps', '');
for (const s of sitemaps) {
  const sent = s.contents?.reduce((a, c) => a + Number(c.submitted ?? 0), 0) ?? 0;
  out.push(`- ${s.path}: ${sent} URLs, ${s.errors} errores, ${s.warnings} advertencias, leído el ${(s.lastDownloaded ?? '—').slice(0, 10)}`);
}
console.log(out.join('\n'));

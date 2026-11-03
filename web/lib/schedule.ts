// `schedule_json` es texto libre por día ({"lunes":"9:00–18:00", "martes":"cerrado", ...}).
// Aquí se ordena para mostrarlo y se intenta entender para calcular "abierto ahora"; si un
// día no se puede interpretar (p.ej. horarios de misa), simplemente no se muestra el estado.

import { dict } from './dict';
import type { Lang } from './i18n';

export const DAYS = [
  { key: 'lunes', label: 'Lunes', aliases: ['lunes'] },
  { key: 'martes', label: 'Martes', aliases: ['martes'] },
  { key: 'miercoles', label: 'Miércoles', aliases: ['miercoles', 'miércoles'] },
  { key: 'jueves', label: 'Jueves', aliases: ['jueves'] },
  { key: 'viernes', label: 'Viernes', aliases: ['viernes'] },
  { key: 'sabado', label: 'Sábado', aliases: ['sabado', 'sábado'] },
  { key: 'domingo', label: 'Domingo', aliases: ['domingo'] },
] as const;

/** Días con su horario, en orden, con el nombre del día en el idioma de la página. */
export function scheduleEntries(schedule: Record<string, string> | null, lang: Lang = 'es'): { day: string; hours: string }[] {
  if (!schedule) return [];
  const names = dict(lang).days;
  return DAYS.flatMap((d, i) => {
    const raw = d.aliases.map((a) => schedule[a]).find((v) => v != null);
    return raw ? [{ day: names[i], hours: raw }] : [];
  });
}

type Range = { open: number; close: number }; // minutos desde medianoche

const TIME = String.raw`(\d{1,2})(?::(\d{2}))?\s*(a\.?\s?m\.?|p\.?\s?m\.?)?`;
const RANGE_RE = new RegExp(`^${TIME}\\s*(?:–|—|-|a)\\s*${TIME}$`, 'i');

function toMinutes(h: string, m: string | undefined, meridiem: string | undefined): number {
  let hours = parseInt(h, 10);
  const mer = meridiem?.toLowerCase().replace(/[^ap]/g, '');
  if (mer === 'p' && hours < 12) hours += 12;
  if (mer === 'a' && hours === 12) hours = 0;
  return hours * 60 + (m ? parseInt(m, 10) : 0);
}

/** `null` = no se pudo interpretar; `[]` = cerrado ese día. */
export function parseHours(text: string): Range[] | null {
  const value = text.trim().toLowerCase();
  if (value.startsWith('cerrado')) return [];
  if (/24\s*h/.test(value)) return [{ open: 0, close: 24 * 60 }];
  const ranges: Range[] = [];
  for (const part of value.split(/\s*[,;/]\s*|\s+y\s+/)) {
    const m = part.trim().match(RANGE_RE);
    if (!m) return null;
    // Si solo el cierre trae pm: "1:00 – 6:00 pm" abre a la 1 pm, "11:00 – 6:00 pm" a las 11 am.
    const openMeridiem = m[3] ?? (m[6] && /p/i.test(m[6]) && parseInt(m[1], 10) <= parseInt(m[4], 10) ? 'pm' : undefined);
    const open = toMinutes(m[1], m[2], openMeridiem);
    let close = toMinutes(m[4], m[5], m[6]);
    if (close === 0) close = 24 * 60;
    if (close <= open) close += 24 * 60; // cruza medianoche
    ranges.push({ open, close });
  }
  return ranges.length ? ranges : null;
}

export type OpenState = { open: boolean; label: string } | null;

/** Estado en este momento, en hora de Tequisquiapan. */
export function openState(schedule: Record<string, string> | null, lang: Lang = 'es', now = new Date()): OpenState {
  if (!schedule) return null;
  const t = dict(lang);
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Mexico_City',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(now);
  const weekday = parts.find((p) => p.type === 'weekday')!.value; // Mon..Sun
  const minutes = parseInt(parts.find((p) => p.type === 'hour')!.value, 10) * 60 + parseInt(parts.find((p) => p.type === 'minute')!.value, 10);
  const todayIndex = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(weekday);

  const rangesFor = (index: number): Range[] | null => {
    const day = DAYS[(index + 7) % 7];
    const raw = day.aliases.map((a) => schedule[a]).find((v) => v != null);
    // Un día que no aparece en el horario se toma como cerrado solo si el resto sí se entiende.
    return raw == null ? [] : parseHours(raw);
  };

  const today = rangesFor(todayIndex);
  const yesterday = rangesFor(todayIndex - 1);
  if (today == null) return null;

  const fmt = (m: number) => {
    const mm = m % (24 * 60);
    return `${Math.floor(mm / 60)}:${String(mm % 60).padStart(2, '0')}`;
  };

  // Rango de ayer que cruzó la medianoche (bar que cierra a la 1:00).
  const spill = yesterday?.find((r) => r.close > 24 * 60 && minutes < r.close - 24 * 60);
  if (spill) return { open: true, label: `${t.openNow} · ${t.closesAt(fmt(spill.close))}` };

  const current = today.find((r) => minutes >= r.open && minutes < r.close);
  if (current) return { open: true, label: `${t.openNow} · ${t.closesAt(fmt(current.close))}` };

  const next = today.find((r) => r.open > minutes);
  if (next) return { open: false, label: `${t.closedNow} · ${t.opensAt(fmt(next.open))}` };
  return { open: false, label: t.closedNow };
}

/** Horario en formato schema.org (`Mo 09:00-18:00`), solo si todos los días se entienden. */
export function openingHoursSpec(schedule: Record<string, string> | null): string[] | null {
  if (!schedule) return null;
  const codes = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const out: string[] = [];
  for (const [i, d] of DAYS.entries()) {
    const raw = d.aliases.map((a) => schedule[a]).find((v) => v != null);
    if (raw == null) continue;
    const ranges = parseHours(raw);
    if (ranges == null) return null;
    for (const r of ranges) {
      const f = (m: number) => `${String(Math.floor((m % 1440) / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
      out.push(`${codes[i]} ${f(r.open)}-${r.close === 1440 ? '24:00' : f(r.close)}`);
    }
  }
  return out.length ? out : null;
}

export const PLACE_CATEGORIES = ['turistico', 'experiencias', 'gastronomia', 'hospedaje', 'eventos', 'compras', 'rutas'];
export const PRICE_RANGES = ['free', 'budget', 'moderate', 'expensive', 'luxury'];

function isValidLatitude(value: unknown): boolean {
  return typeof value === 'number' && !Number.isNaN(value) && value >= -90 && value <= 90;
}

function isValidLongitude(value: unknown): boolean {
  return typeof value === 'number' && !Number.isNaN(value) && value >= -180 && value <= 180;
}

/**
 * Valida los campos de un `place`. Con `requireAll: true` (creación) exige los campos
 * obligatorios; con `false` (edición parcial) solo valida los campos que sí vienen en el body.
 */
export function validatePlaceFields(body: any, { requireAll }: { requireAll: boolean }): string | null {
  if (requireAll || 'name' in body) {
    if (!body.name || typeof body.name !== 'string' || !body.name.trim()) {
      return 'name debe ser un texto no vacío';
    }
  }
  if (requireAll || 'category' in body) {
    if (!PLACE_CATEGORIES.includes(body.category)) {
      return `category debe ser uno de: ${PLACE_CATEGORIES.join(', ')}`;
    }
  }
  if ('price_range' in body && body.price_range != null && !PRICE_RANGES.includes(body.price_range)) {
    return `price_range debe ser uno de: ${PRICE_RANGES.join(', ')}`;
  }
  if (requireAll || 'latitude' in body) {
    if (!isValidLatitude(body.latitude)) return 'latitude debe ser un número entre -90 y 90';
  }
  if (requireAll || 'longitude' in body) {
    if (!isValidLongitude(body.longitude)) return 'longitude debe ser un número entre -180 y 180';
  }
  if ('schedule_json' in body && body.schedule_json != null && body.schedule_json !== '') {
    if (typeof body.schedule_json !== 'string') return 'schedule_json debe ser un string con JSON';
    try {
      JSON.parse(body.schedule_json);
    } catch {
      return 'schedule_json no es JSON válido';
    }
  }
  return null;
}

/**
 * Valida los campos de un `event`. Mismo patrón que arriba.
 */
export function validateEventFields(body: any, { requireAll }: { requireAll: boolean }): string | null {
  if (requireAll || 'title' in body) {
    if (!body.title || typeof body.title !== 'string' || !body.title.trim()) {
      return 'title debe ser un texto no vacío';
    }
  }
  if (requireAll || 'category' in body) {
    if (!body.category || typeof body.category !== 'string' || !body.category.trim()) {
      return 'category debe ser un texto no vacío';
    }
  }
  if (requireAll || 'start_date' in body) {
    if (!body.start_date || Number.isNaN(Date.parse(body.start_date))) return 'start_date debe ser una fecha válida';
  }
  if (requireAll || 'end_date' in body) {
    if (!body.end_date || Number.isNaN(Date.parse(body.end_date))) return 'end_date debe ser una fecha válida';
  }
  if (('start_date' in body || requireAll) && ('end_date' in body || requireAll) && body.start_date && body.end_date) {
    if (new Date(body.end_date) < new Date(body.start_date)) return 'end_date debe ser igual o posterior a start_date';
  }
  if ('latitude' in body && body.latitude != null && !isValidLatitude(body.latitude)) {
    return 'latitude debe ser un número entre -90 y 90';
  }
  if ('longitude' in body && body.longitude != null && !isValidLongitude(body.longitude)) {
    return 'longitude debe ser un número entre -180 y 180';
  }
  return null;
}

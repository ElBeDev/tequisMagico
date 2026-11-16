// Slug viejo de un lugar → slug actual. Los slugs salen del nombre (no hay columna `slug`), así
// que renombrar un lugar en el panel cambia su URL y la vieja da 404. Si Google ya la tenía,
// agrégala aquí: proxy.ts la redirige (308) en español (/lugar/…) y en inglés (/en/place/…).
// Solo para el mismo negocio con otro nombre; un lugar que no existe se queda en 404.
export const PLACE_REDIRECTS: Record<string, string> = {
  // 5 nov 2026: dados de alta de nuevo con su nombre y datos reales (databasefix_research_2026-11.sql).
  'queseria-vai': 'finca-vai',
  'balneario-el-oasis': 'parque-acuatico-el-oasis',
  // 10 nov 2026: mismo hotel con su nombre real (databaseseed_hospedaje_2026-11-10.sql).
  'hotel-posada-tequisquiapan': 'posada-tequisquiapan',
  // 16 nov 2026: "La Pila" era una ficha aparte de la pila de 1567, que está dentro del parque y le da
  // su nombre (misma dirección y coordenadas). Se unió al parque (databasefix_seo_2026-11-16.sql).
  'la-pila': 'parque-la-pila',
};

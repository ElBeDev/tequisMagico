-- PROPUESTA (2026-11-02), NO APLICADA. Revisar antes de correr en Neon.
-- Sale de la investigación para las guías de tequismagico.com (fuentes en web/lib/guides.ts y
-- en el resumen de abajo). Son dos bloques independientes: se puede correr uno y no el otro.

-- =====================================================================================
-- Bloque 1: correcciones de lugares reales
-- =====================================================================================
BEGIN;

-- Freixenet México: la dirección y las coordenadas caían dentro de Tequis; está en Ezequiel
-- Montes. El teléfono 414-197-8080 no aparece en ninguna fuente; tequis.travel da 441 277 0147.
-- Coordenadas: OpenStreetMap ("Finca Sala Vive Freixenet").
UPDATE places SET
  address = 'Carr. San Juan del Río–Cadereyta km 40.5, Los Pérez, Ezequiel Montes',
  phone_number = '+52 441 277 0147',
  latitude = 20.6972920,
  longitude = -99.8776372,
  website = 'https://salavive.mx'
WHERE id = 'db284afc-c328-4fca-9bec-2bbc453c222f';

-- Viñedos Azteca: dirección real según vinedosazteca.com; coordenadas de OpenStreetMap.
UPDATE places SET
  address = 'Camino a Viñedos Azteca 12, Ezequiel Montes',
  latitude = 20.6947416,
  longitude = -99.8709425
WHERE id = '3f47bf08-7a3d-4a3e-9aba-dc30785a0570';

-- Viñedos La Redonda: operación suspendida desde dic-2025 por un conflicto legal (El Financiero,
-- feb-2026); en nov-2026 su sitio dice "Estamos actualizando". Se quita de destacados y se
-- marca como no confirmado hasta saber si reabrió. Dirección según queretaro.travel.
-- Las coordenadas (20.535, -99.885) siguen mal (caen en Tequis): falta ubicar el km 33.5.
UPDATE places SET
  address = 'Carr. San Juan del Río–Ezequiel Montes km 33.5, Ezequiel Montes',
  is_featured = false,
  content_verified = false
WHERE id = 'e83905fa-1335-4bc7-b117-a917d5246a53';

COMMIT;

-- =====================================================================================
-- Bloque 2: lugares de la carga inicial que no existen (soft-delete)
-- =====================================================================================
-- No se encontró ninguna evidencia de estos negocios (búsquedas en tequis.travel,
-- queretaro.travel, prensa y mapas, nov-2026). Hoy se publican en la web y en la app como
-- si fueran reales. Desactivarlos los quita de las dos; se reactivan con is_active = true.
-- "Quesería Vai" y "Balneario El Oasis" sí existen, pero como Finca VAI (km 30 de la
-- carretera libre Querétaro–Tequisquiapan, municipio de Colón) y Parque Acuático El Oasis
-- (km 10 carr. Tequis–Ezequiel Montes), con otra dirección y teléfono: mejor darlos de alta
-- de nuevo con los datos reales. "Mercado de Artesanías" no existe con ese nombre; los
-- mercados reales son Telésforo Trejo, Tequesquicalli, Guadalupano y el Parador Artesanal.
BEGIN;

UPDATE places SET is_active = false
WHERE id IN (
  '196ae5dd-edb2-4327-b060-331c51ffc58f', -- Puente Colgante México-Querétaro
  'ad108680-33c5-4c89-bcdb-281f34186368', -- Ex Convento de San José
  'af525620-7699-4178-abdd-4cb6d7e8fe76', -- Spa Azteca
  '87a43844-34d7-4f38-a895-c81048fac47e', -- Quesos El Peregrino
  '6df1911b-f765-4873-8151-5ba8d43b0511', -- Quesos San Juanico
  '012e85e6-4b04-4bde-862a-f5ed0dd56348', -- Balneario La Fuente
  '14d7dc34-002c-4687-b1a1-927442f8a6e2', -- Cicloturismo Tequisquiapan
  'a13bd5cb-d90e-47d7-8f3f-668e6e4a94c9', -- Paseos a Caballo Rancho San José
  'cec6be71-2a7c-4dd6-a6fc-3a3d43d26dd7', -- Mercado de Artesanías
  'f727a9fc-cfd7-4113-91de-4bd10e27eb06', -- Quesería Vai (dar de alta como Finca VAI)
  'bbdce8d7-434c-41cc-903d-2ee614658afa'  -- Balneario El Oasis (dar de alta como Parque Acuático El Oasis)
);

COMMIT;

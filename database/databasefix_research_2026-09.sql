-- Correcciones aplicadas directo en Neon el 2026-09-21, tras investigar en internet
-- teléfono/sitio web/horario de los 50 lugares (research + validación cruzada por lugar).
-- YA ESTÁN APLICADAS en producción: este archivo es el registro de qué se cambió.
-- Los seeds databaseseed_part*.sql NO incluyen estos cambios.

BEGIN;

-- ===== Columna nueva =====
-- true = teléfono/sitio/horario confirmados contra una fuente externa.
-- Distinta de is_verified (insignia de confianza que ve el usuario en la app).
ALTER TABLE places ADD COLUMN IF NOT EXISTS content_verified BOOLEAN NOT NULL DEFAULT false;

-- ===== Datos nuevos confirmados =====

-- Viñedos La Redonda — sitio web + horario
UPDATE places SET
  website = 'https://laredonda.com.mx/',
  schedule_json = '{"lunes":"10:00–18:30","martes":"10:00–18:30","miércoles":"10:00–18:30","jueves":"10:00–18:30","viernes":"10:00–18:30","sábado":"10:00–18:30","domingo":"10:00–18:30"}'::jsonb
WHERE id = 'e83905fa-1335-4bc7-b117-a917d5246a53';

-- Freixenet México — horario (el sitio web quedó ambiguo, no se tocó)
UPDATE places SET
  schedule_json = '{"lunes":"11:00 am – 6:00 pm","martes":"cerrado (no confirmado explícitamente; ausente de la tabla oficial)","miércoles":"11:00 am – 6:00 pm","jueves":"11:00 am – 6:00 pm","viernes":"11:00 am – 6:00 pm","sábado":"12:00 pm – 7:00 pm","domingo":"11:00 am – 6:00 pm"}'::jsonb
WHERE id = 'db284afc-c328-4fca-9bec-2bbc453c222f';

-- Templo de Santa María de la Asunción — teléfono + horario de misas
UPDATE places SET
  phone_number = '+52 414 273 0051',
  schedule_json = '{"lunes":"7:00 a.m. y 7:00 p.m. (misa)","martes":"7:00 a.m. y 7:00 p.m. (misa)","miércoles":"7:00 a.m. y 7:00 p.m. (misa)","jueves":"7:00 a.m. y 7:00 p.m. (misa)","viernes":"7:00 a.m. y 7:00 p.m. (misa)","sábado":"7:00 a.m. y 7:30 p.m. (misa)","domingo":"9:00 a.m., 10:30 a.m., 12:00 p.m. y 5:30 p.m. (misa)"}'::jsonb
WHERE id = '81c5c200-1fcb-4943-a4df-8cb6395f3e50';

-- Viñedos Azteca — sitio web + horario
UPDATE places SET
  website = 'https://vinedosazteca.com',
  schedule_json = '{"lunes":"11:00–15:00","martes":"11:00–15:00","miércoles":"11:00–15:00","jueves":"11:00–15:00","viernes":"11:00–18:00","sábado":"11:00–18:00","domingo":"11:00–18:00"}'::jsonb
WHERE id = '3f47bf08-7a3d-4a3e-9aba-dc30785a0570';

-- La Pila — horario
UPDATE places SET
  schedule_json = '{"lunes":"07:00–19:00","martes":"07:00–19:00","miércoles":"07:00–19:00","jueves":"07:00–19:00","viernes":"07:00–19:00","sábado":"07:00–19:00","domingo":"07:00–19:00"}'::jsonb
WHERE id = '7ac9dd61-1eb9-44f7-aad7-5ed3faa19d12';

-- Parque La Pila — horario
UPDATE places SET
  schedule_json = '{"lunes":"7:00 a.m. – 7:00 p.m.","martes":"7:00 a.m. – 7:00 p.m.","miércoles":"7:00 a.m. – 7:00 p.m.","jueves":"7:00 a.m. – 7:00 p.m.","viernes":"7:00 a.m. – 7:00 p.m.","sábado":"7:00 a.m. – 7:00 p.m.","domingo":"7:00 a.m. – 7:00 p.m."}'::jsonb
WHERE id = '2937462c-70fa-4aff-bf91-031146e071d0';

-- K'puchinos Restaurant — teléfono corregido (el de la BD no era el del sitio oficial), sitio web + horario
UPDATE places SET
  phone_number = '414-273-2482',
  website = 'https://kpuchinos.com.mx',
  schedule_json = '{"lunes":"8:00–22:00","martes":"8:00–22:00","miércoles":"8:00–22:00","jueves":"8:00–22:00","viernes":"8:00–00:00","sábado":"8:00–00:00","domingo":"8:00–22:00"}'::jsonb
WHERE id = 'ad124805-fa89-49fa-ab2c-2839d59ee840';

-- ===== Datos equivocados =====

-- Los Rosales Viñedos: está sobre la carretera a Ezequiel Montes, no a San Juan del Río (sitio oficial).
-- Teléfono borrado: 3 fuentes dan 3 números distintos y el sitio oficial no publica ninguno.
UPDATE places SET
  address = 'Carretera Tequisquiapan - Ezequiel Montes, Km. 27, Tequisquiapan, Qro.',
  latitude = 20.5806948,
  longitude = -99.9063378,
  phone_number = NULL
WHERE id = 'a489a939-80e6-490e-982b-183785468864';

-- Desactivados: reales pero fuera de Tequisquiapan, o un hotel que aún no opera.
UPDATE places SET is_active = false WHERE id IN (
  'd46afb8a-3778-45fc-b978-f8dc6b4bc80f', -- Viñedos Puerta del Lobo (en realidad El Marqués)
  'a6ca5299-2fd4-42a6-9b8d-15e2c8b8405c', -- Grutas Los Herrera (en realidad San Joaquín)
  '1c646e06-a9df-4f66-aed9-27f3d299e944'  -- Hotel El Relox (su sitio dice "próximamente"; dirección real: Morelos 8, Centro)
);

-- La Casa del Atrio: el sitio web guardado era el de un hotel homónimo en Querétaro capital.
UPDATE places SET website = NULL WHERE id = '8abdbe43-f7a4-4253-a4ca-3606fc35d3a4';

-- ===== Marcados como verificados =====
UPDATE places SET content_verified = true WHERE id IN (
  'e83905fa-1335-4bc7-b117-a917d5246a53', -- Viñedos La Redonda
  'db284afc-c328-4fca-9bec-2bbc453c222f', -- Freixenet México
  '81c5c200-1fcb-4943-a4df-8cb6395f3e50', -- Templo de Santa María de la Asunción
  '3f47bf08-7a3d-4a3e-9aba-dc30785a0570', -- Viñedos Azteca
  '7ac9dd61-1eb9-44f7-aad7-5ed3faa19d12', -- La Pila
  '2937462c-70fa-4aff-bf91-031146e071d0', -- Parque La Pila
  'ad124805-fa89-49fa-ab2c-2839d59ee840', -- K'puchinos Restaurant
  'b3aaa4ec-f45d-47ab-8b96-64c7c39e7633', -- Globos Aerostáticos Tequisquiapan (reconfirmado)
  '955ec3b9-eb9e-42e9-a851-5791adf67eaa', -- Plaza Miguel Hidalgo (reconfirmado)
  'c147e79e-74a9-4cdf-995f-0960e8d53ef4', -- Presa Centenario (reconfirmado)
  'a489a939-80e6-490e-982b-183785468864'  -- Los Rosales Viñedos (tras corregir dirección)
);

COMMIT;

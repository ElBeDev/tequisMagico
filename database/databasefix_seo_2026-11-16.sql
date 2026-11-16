-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-seo.sql.
-- Plan SEO del 16 nov 2026 (docs/web/plan-seo-2026-11.md, fase 1).
-- Antes de aplicarlo: respaldo de places en /root/respaldos/.
-- Después: web/lib/i18n/data-en.ts ya trae los textos en inglés con los mismos ids (mismo commit),
-- y web/lib/redirects.ts manda /lugar/la-pila a /lugar/parque-la-pila.

BEGIN;

-- 1.1 "La Pila" (monumento) y "Parque La Pila" eran el mismo sitio: misma dirección (Ezequiel Montes 29)
-- y mismas coordenadas. La pila de 1567 está dentro del parque y le da su nombre. Search Console mostraba
-- las dos fichas repartiéndose "parque la pila" (posición 13). Soft-delete del monumento; se reactiva con
-- is_active = true. Su descripción ("fuente de cantera rosa") no tenía fuente.
UPDATE places SET is_active = false, is_featured = false, updated_at = NOW()
WHERE id = '7ac9dd61-1eb9-44f7-aad7-5ed3faa19d12'; -- La Pila

-- 1.2 Parque La Pila: descripción con fuente. Lo de la carga inicial ("juegos infantiles, canchas
-- deportivas y zona de picnic", "limpio y bien mantenido") no tenía ninguna, y en nov 2025 El Sol de
-- San Juan del Río publicó "Parque La Pila está en ruinas".
-- Fuentes: tequis.travel – Históricos (pila de 1567, antiguo molino, sede de la feria, Ezequiel Montes 29);
-- Excélsior 2026 y SECTUR 072/2026 (sede del festival de mayo de 2026); AlertaQro 12-dic-2025 (Villa
-- Navideña 2025); Al Minuto 29-jul-2026 (Expo Cactus); Uno TV 2021 y N+ 2025 (inundaciones).
-- Horario: [CONFLICTO] 24 h (tequis.travel) contra 7–19 h (databasefix_research_2026-09.sql); no se publica.
UPDATE places SET
  short_description = $v$Parque del centro con la pila de agua de 1567$v$,
  full_description = $v$Parque arbolado y gratuito en el centro, donde estaba el antiguo molino del pueblo. Conserva la pila que guardaba el agua de Tequis en 1567 y que le da nombre. Es la sede tradicional de la Feria del Queso y el Vino (en mayo de 2026 también lo fue), y ahí se han puesto la Villa Navideña y la Expo Cactus. Está junto al río: se inundó con los desbordes de la Presa Centenario de 2021 y 2025.$v$,
  amenities = ARRAY[]::text[],
  tags = ARRAY[$v$Centro$v$, $v$Histórico$v$]::text[],
  updated_at = NOW()
WHERE id = '2937462c-70fa-4aff-bf91-031146e071d0'; -- Parque La Pila

-- 1.3 Plaza Miguel Hidalgo: descripción con fuente. Se quitan "WiFi gratuito", "baños públicos cercanos",
-- "fuente ornamental" y la etiqueta "Romántico" (sin fuente).
-- Fuentes: tequis.travel – Históricos (portales de cantera, quiosco de principios del siglo XX, sabinos y
-- fresnos, dulces y nieves artesanales, 24 h); tequis.travel – Iglesias (la parroquia está en la plaza);
-- events: Fiestas Patrias (Grito a las 23:00), Año Nuevo y Villa Navideña 2025.
UPDATE places SET
  short_description = $v$La plaza principal, con portales y quiosco$v$,
  full_description = $v$La plaza principal de Tequis, frente a la Parroquia de Santa María de la Asunción: portales de cantera, un quiosco de principios del siglo XX, sabinos y fresnos, y puestos de dulces y nieves artesanales. Está abierta las 24 horas y es gratis. Aquí se dan el Grito el 15 de septiembre y la fiesta de Año Nuevo, y en diciembre se pone parte de la Villa Navideña.$v$,
  amenities = ARRAY[]::text[],
  tags = ARRAY[$v$Centro$v$, $v$De noche$v$, $v$Histórico$v$]::text[],
  updated_at = NOW()
WHERE id = '955ec3b9-eb9e-42e9-a851-5791adf67eaa'; -- Plaza Miguel Hidalgo

COMMIT;

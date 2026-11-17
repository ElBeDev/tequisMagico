-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-laysu.sql.
-- Cafetería Laysu: datos y fotos de sus cuentas oficiales (16 nov 2026).
-- Cuentas: Facebook facebook.com/laysupasteleriabistro ("Laysu - Pastelería - Café & Bistro", 989; "Alta repostería,
--   cafetería y bistro"; teléfono 414 273 0383, el de la base; laysu13@hotmail.com; "Niños Héroes #43 Local 4") e
--   Instagram @laysucentro ("Laysu Deli & Café", 566; "Amamos hacer pasteles para quienes aman comerlos"). Activas
--   (oct 2026).
-- Teléfono [CONFLICTO resuelto]: 414 273 0383 (sus cuentas y tequis.travel); en sus carteles también 414 114 7871.
-- Horario (Instagram, 2 jun 2026): "Martes a sábado de 9 am a 9:30 pm. Domingo de 9:30 am a 8:30 pm"; los lunes no
--   aparecen: cerrado. Postres de sus publicaciones de 2026: terciopelo rojo, Misisipi, tartas (plátano, alemana,
--   manzana), queso con guayaba, mousse de chocolate; pan de muerto ($50 c/u, oct 2026); buffet dominical en fechas
--   especiales.
-- Fotos de su Instagram, recortadas para quitar la etiqueta del postre y su logo: tarta de plátano (DWukJTjgiob, 4 abr
--   2026) y espresso (DU8n5-yETil, 19 feb 2026).
BEGIN;
UPDATE places SET
  email = 'laysu13@hotmail.com',
  short_description = $v$Pastelería, café y bistró en la avenida Niños Héroes$v$,
  full_description = $v$Pastelería, cafetería y bistró en Niños Héroes 43, local 4, a unos 600 metros de la Plaza Miguel Hidalgo, de alta repostería hecha en casa: pastel de terciopelo rojo, pastel Misisipi, tartas de plátano, de manzana y alemana, queso con guayaba y mousse de chocolate, con café de máquina; en temporada, pan de muerto. Abre de martes a sábado de 9 a 21:30 h y los domingos de 9:30 a 20:30 h; los lunes cierra.$v$,
  schedule_json = $v${"lunes": "cerrado", "martes": "9:00–21:30", "miércoles": "9:00–21:30", "jueves": "9:00–21:30", "viernes": "9:00–21:30", "sábado": "9:00–21:30", "domingo": "9:30–20:30"}$v$::jsonb,
  price_range = 'moderate',
  tags = ARRAY[$v$Café$v$, $v$Postres$v$]::text[],
  instagram_url = 'https://www.instagram.com/laysucentro/',
  facebook_url = 'https://www.facebook.com/laysupasteleriabistro',
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/cafeteria-laysu-tarta.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/cafeteria-laysu-espresso.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/cafeteria-laysu-tarta.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'e8f75a71-26f5-5e60-9e5c-cd8ffd9323a3'; -- Cafetería Laysu
COMMIT;

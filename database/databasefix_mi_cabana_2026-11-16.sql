-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-micabana.sql.
-- Mi Cabaña: datos y foto de sus cuentas oficiales (16 nov 2026).
-- Cuentas: Facebook facebook.com/p/Mi-Cabaña-Tequis-100063518145630 (384; "Carretera Huichapan Querétaro 1", la salida
--   a Querétaro de la base; teléfono 427 195 0343; restaurante familiar; mesas al aire libre; botón de reservar) e
--   Instagram @mi_cabana.tx (145; "Comida mexicana & cortes. Tradición desde 1980. Jueves a Martes. Desayuno: 9:30-1:00.
--   Comida: 2:00-6:00. 4271950343"). Activas (2026).
-- Teléfono: el de sus cuentas (427 195 0343); el 414 273 3541 del DENUE y de Turismo no aparece en ellas.
-- Platillos en sus publicaciones de 2026: chile en nogada (temporada), filete tuétano, cortes, hot cakes.
-- Foto: chile en nogada (Instagram DcZZXWkqzOi, 23 ago 2026), reducida a 1600 px. Casi todas sus otras fotos tienen
--   clientes en primer plano o texto.
BEGIN;
UPDATE places SET
  phone_number = '427-195-0343',
  short_description = $v$Comida mexicana y cortes desde 1980, a la salida a Querétaro$v$,
  full_description = $v$Restaurante familiar de comida mexicana y cortes, abierto desde 1980, a la salida del pueblo hacia Querétaro, a poco más de un kilómetro de la Plaza Miguel Hidalgo. Sirve desayunos de 9:30 a 13 h y comida de 14 a 18 h, de jueves a martes; los miércoles cierra. Entre sus platillos están el filete tuétano, los cortes y, en temporada, los chiles en nogada. Tiene mesas al aire libre y toma reservaciones.$v$,
  schedule_json = $v${"lunes": "9:30–13:00 y 14:00–18:00", "martes": "9:30–13:00 y 14:00–18:00", "miércoles": "cerrado", "jueves": "9:30–13:00 y 14:00–18:00", "viernes": "9:30–13:00 y 14:00–18:00", "sábado": "9:30–13:00 y 14:00–18:00", "domingo": "9:30–13:00 y 14:00–18:00"}$v$::jsonb,
  price_range = 'moderate',
  amenities = ARRAY[$v$Desayunos$v$, $v$Terraza$v$, $v$Reservaciones$v$]::text[],
  tags = ARRAY[$v$Mexicana$v$, $v$Familiar$v$]::text[],
  instagram_url = 'https://www.instagram.com/mi_cabana.tx/',
  facebook_url = 'https://www.facebook.com/p/Mi-Caba%C3%B1a-Tequis-100063518145630/',
  image_urls = ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/mi-cabana-chile-en-nogada.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/mi-cabana-chile-en-nogada.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '4af01ed2-d8a7-529d-a8c5-fbb7c9038a34'; -- Mi Cabaña
COMMIT;

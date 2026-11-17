-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-santotomate.sql.
-- Santo Tomate: datos y foto de su Instagram oficial (16 nov 2026).
-- Cuenta: instagram.com/santotomate (1,088; "4141228544", el de la base; "juarez poniente 47, Tequisquiapan Centro",
--   resuelve el 47/17 entre Turismo y el DENUE a favor del 47). Activa (2026). Sus carteles: "Santo Tomate Restaurant
--   Bar"; "de martes a domingo nosotros nos encargamos del desayuno, 8:30 am - 1:00 pm; sábados y domingos desayuno
--   buffet"; pizzas (2 × $229 en promoción, servicio a domicilio), alitas, micheladas, noches de rock en vivo;
--   reservaciones al 414 122 8544 y 414 107 6927.
-- Sin horario completo publicado: no se llena schedule_json.
-- Foto: waffle con fresas, huevo y tocino (Instagram DaLHdzShrod, 29 jun 2026), reducida a 1600 px. Casi todo lo demás
--   son carteles con texto.
BEGIN;
UPDATE places SET
  short_description = $v$Restaurante bar con desayunos, buffet de fin de semana y pizzas$v$,
  full_description = $v$Restaurante bar en Juárez Poniente 47, a unos 280 metros de la Plaza Miguel Hidalgo. Sirve desayunos de martes a domingo de 8:30 a 13 h, con buffet los sábados y domingos, y más tarde pizzas, alitas y micheladas; algunas noches hay música en vivo. Tiene servicio a domicilio y toma reservaciones al 414 122 8544 o al 414 107 6927. No publica el horario completo: confirma antes de ir.$v$,
  price_range = 'moderate',
  amenities = ARRAY[$v$Desayunos$v$, $v$Bar$v$, $v$Música en vivo$v$, $v$Delivery$v$, $v$Reservaciones$v$]::text[],
  tags = ARRAY[$v$Centro$v$]::text[],
  instagram_url = 'https://www.instagram.com/santotomate/',
  image_urls = ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/santo-tomate-waffle.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/santo-tomate-waffle.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '6fc34abf-c13a-52e3-8ff2-adbcaf897ac8'; -- Santo Tomate
COMMIT;

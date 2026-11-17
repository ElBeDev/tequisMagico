-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-antigua.sql.
-- La Antigua: datos y fotos de su Facebook oficial (16 nov 2026).
-- Cuenta: facebook.com/p/Restaurante-La-antigua-100045573466590 (1.5 mil; teléfono 414 118 1957, el de la base y el de
--   su letrero; "Carr. Federal 120 San Juan del Río-Xilitla Km 21.5"; mesas al aire libre; botón de WhatsApp).
--   Activa (oct 2026).
-- Publicaciones: abre desde las 8 h ("por única ocasión estaremos en servicio de 8am a 12pm", dic 2024; aviso navideño
--   "de 8 am a 2 pm" el 24 dic); desayunos, club sándwich, queso fundido con chistorra, bebidas preparadas. No publica
--   horario completo ni precios.
-- Fotos de su Facebook (oct 2024), sin texto ni gente en primer plano: terraza al atardecer (fbid=1165548498307588),
--   letrero con su nombre y teléfono (1165548001640971) y comedor (1147974000065038), reducidas a 1600 px.
BEGIN;
UPDATE places SET
  short_description = $v$Restaurante familiar con terraza sobre la carretera 120$v$,
  full_description = $v$Restaurante familiar sobre la carretera federal 120, en el km 21.5, en la colonia Adolfo López Mateos, a unos 770 metros de la Plaza Miguel Hidalgo. Tiene un comedor amplio y una terraza para ver el atardecer, y abre desde las 8 de la mañana con desayunos; también sirve club sándwich, queso fundido con chistorra y bebidas preparadas. No publica el horario completo ni precios: confirma antes de ir.$v$,
  whatsapp_number = '414-118-1957',
  price_range = 'moderate',
  amenities = ARRAY[$v$Desayunos$v$, $v$Terraza$v$]::text[],
  tags = ARRAY[$v$Familiar$v$]::text[],
  facebook_url = 'https://www.facebook.com/p/Restaurante-La-antigua-100045573466590/',
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/la-antigua-terraza.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/la-antigua-letrero.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/la-antigua-comedor.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/la-antigua-terraza.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '9f7c6f4b-7ba2-5e57-8dd5-bd2240660c95'; -- La Antigua
COMMIT;

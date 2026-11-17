-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-chiltepin.sql.
-- Chiltepín: datos y fotos de sus cuentas oficiales (16 nov 2026).
-- Cuentas: Facebook facebook.com/mariscoselchiltepin ("Chiltepin Sea Food", 2.9 mil; teléfono y WhatsApp 414 231 0019,
--   el de la base; micheladasymariscoselchiltepin@gmail.com; Plan de Guadalupe #58) e Instagram @chiltepin_seafood
--   (591; mismo teléfono y dirección; bio "Jueves a Domingo de 1:00pm - 8:00pm"). Activas: publicación del 10 oct 2026
--   con el mismo horario.
-- Teléfono [CONFLICTO resuelto]: 414 231 0019 (sus cuentas y tequis.travel). El 414 279 2062 del PDF de Turismo no
--   aparece en sus cuentas.
-- Platillos de sus publicaciones de 2026: caldo de camarón, pescadillas ("un platillo más al menú", ago 2026),
--   mariscada. No publica menú ni precios.
-- Fotos de su Instagram, sin texto ni personas, reducidas a 1600 px: interior con su mural (DdMzu9NO4qm, 12 sep 2026),
--   caldo de camarón (DeVFQpboyh_, 10 oct 2026) y pescadillas (DbwDtqUOo91, 7 ago 2026).
BEGIN;
UPDATE places SET
  short_description = $v$Mariscos en familia, de jueves a domingo$v$,
  full_description = $v$Marisquería familiar en Plan de Guadalupe 58, en la colonia Adolfo López Mateos, a poco más de un kilómetro de la Plaza Miguel Hidalgo. Entre sus platillos están el caldo de camarón, las pescadillas y la mariscada. Abre de jueves a domingo de 13 a 20 h. No publica menú ni precios; se puede preguntar por WhatsApp.$v$,
  whatsapp_number = '414-231-0019',
  email = 'micheladasymariscoselchiltepin@gmail.com',
  schedule_json = $v${"lunes": "cerrado", "martes": "cerrado", "miércoles": "cerrado", "jueves": "13:00–20:00", "viernes": "13:00–20:00", "sábado": "13:00–20:00", "domingo": "13:00–20:00"}$v$::jsonb,
  instagram_url = 'https://www.instagram.com/chiltepin_seafood/',
  facebook_url = 'https://www.facebook.com/mariscoselchiltepin',
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/chiltepin-mariscos-caldo.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/chiltepin-mariscos-interior.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/chiltepin-mariscos-pescadillas.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/chiltepin-mariscos-caldo.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'efa3b053-6449-54c6-831a-1dc786b70baa'; -- Chiltepín
COMMIT;

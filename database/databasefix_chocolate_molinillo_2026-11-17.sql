-- APLICADA el 2026-11-17 en la base del VPS, con respaldo previo en /root/respaldos/places-20261117-molinillo.sql.
-- Chocolate Molinillo: datos y fotos de sus cuentas oficiales (17 nov 2026).
-- Cuentas: Facebook facebook.com/chocolatemolinillotequis ("Chocolate Molinillo", 2.5 mil; "Cafetería"; "Andador
--   Independencia 17", la dirección de la base; teléfono 414 114 6943; servicios: en el local, mesas al aire libre y
--   recoger en tienda) e Instagram @chocolate_molinillotx (1,473; "Un rincón de Tequis, donde encontrarás la mejor
--   repostería"). Activas (nov 2026).
-- Teléfono [CONFLICTO resuelto]: la base tenía 414-273-0966 (Turismo y DENUE); sus cuentas dan 414 114 6943.
-- Lo que publican (2026): café y repostería hecha ahí ("Domingo de hornear"), tienda de tazas, cerámica y decoración en
--   repisas, y eventos: música en vivo, talleres "Drink and Paint" y exposiciones (oct 2026). No publican horario.
-- Fotos de su Facebook (publicación del 11 jul 2026): interior (fbid 1517032503555308) y repisas de la tienda
--   (1517032496888642). Las fotos del patio de su Instagram son colaboraciones de otras cuentas: no se usan.
BEGIN;
UPDATE places SET
  phone_number = '414-114-6943',
  instagram_url = 'https://www.instagram.com/chocolate_molinillotx/',
  facebook_url = 'https://www.facebook.com/chocolatemolinillotequis',
  short_description = $v$Café, repostería y tienda de loza en el Andador Independencia$v$,
  full_description = $v$Cafetería en el Andador Independencia 17, a unos 110 metros de la Plaza Miguel Hidalgo. Sirve café y repostería que hornean ahí mismo, con mesas adentro y al aire libre, y tiene una tienda de tazas, cerámica y artículos de decoración. Organiza música en vivo, talleres y exposiciones. Confirma horario antes de ir.$v$,
  price_range = 'moderate',
  tags = ARRAY[$v$Café$v$, $v$Postres$v$, $v$Centro$v$]::text[],
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/chocolate-molinillo-interior.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/chocolate-molinillo-tienda.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/chocolate-molinillo-interior.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'd3b92989-1395-5f47-aa5d-e3e8e4449bd5'; -- Chocolate Molinillo
COMMIT;

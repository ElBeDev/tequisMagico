-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-bucaneros.sql.
-- Bucaneros Mariscos: datos y foto de su Facebook oficial (16 nov 2026).
-- Cuenta: facebook.com/Bucaneroos (1.5 mil; teléfono 442 391 0412, el de tequis.travel; "Andador Vista Hermosa";
--   "restaurante familiar ... con el único sabor Sinaloense"; mesas al aire libre). Activa (27 oct 2026). Instagram
--   @mariscosbucaneros casi sin uso (4 publicaciones): no se agrega.
-- Teléfono [CONFLICTO de 3 números resuelto]: 442 391 0412 es el de su Facebook; para pedidos publica el 414 121 8698
--   (7 ago 2026 y carteles). El 414 109 5136 del PDF de Turismo y el 414 121 8701 del DENUE no aparecen en sus cuentas.
-- Dirección: "Carretera Federal 120, frente al parador artesanal" (posts del 7 ago y 27 oct 2026) y "Andador Vista
--   Hermosa" (su Facebook); se usa la del negocio. Pin: el del DENUE (a 37 m del de tequis.travel).
-- Sin horario ni precios publicados ("¡Hoy martes sí tenemos servicio!", 27 oct 2026).
-- Foto: pescado frito con ajo, arroz y ensalada (fbid=1630674089063986, 21 jul 2026). Sus otras fotos de platillos son
--   capturas de pantalla o llevan texto.
BEGIN;
UPDATE places SET
  phone_number = '442-391-0412',
  address = $v$Andador Vista Hermosa, carretera federal 120, frente al Parador Artesanal$v$,
  short_description = $v$Mariscos al estilo sinaloense, frente al Parador Artesanal$v$,
  full_description = $v$Marisquería familiar de sazón sinaloense en el Andador Vista Hermosa, sobre la carretera federal 120 y frente al Parador Artesanal, a un kilómetro de la Plaza Miguel Hidalgo. Prepara al momento aguachiles, ceviches, tostadas, cocteles y pescado, y tiene mesas al aire libre. También vende para llevar: los pedidos se hacen al 414 121 8698. No publica horario ni precios: confirma antes de ir.$v$,
  price_range = 'moderate',
  facebook_url = 'https://www.facebook.com/Bucaneroos',
  image_urls = ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/bucaneros-mariscos-pescado.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/bucaneros-mariscos-pescado.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'f94d63d0-10d8-5b6c-9c56-c12134f4fa56'; -- Bucaneros Mariscos
COMMIT;

-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-birria.sql.
-- Birria Los Compadres: datos y foto de sus cuentas oficiales (16 nov 2026).
-- Cuentas: Facebook facebook.com/p/birria-los-compadres-tx-61552936515117 (262; teléfono 414 104 3252, el de la base;
--   "carretera San Juan del Río-Xilitla km 16.300"; birria de res, quesabirria, tacos, tortas; servicio en el lugar,
--   para llevar, a domicilio y mesas al aire libre) e Instagram @birria_los_compadres_tequis (378; "Sucursal
--   tequisquiapan bordo blanco km 16.300. Pedidos a domicilio 4141043252 4274888392"). Activas (nov 2026).
-- Teléfonos: los dos son suyos (414 104 3252 del DENUE y tequis.travel; 427 488 8392 del PDF de Turismo).
-- Una publicación del 7 nov 2026 dice "Estamos ubicados en Fernando de Tapia esquina con 2 de Abril. Abrimos todos los
--   días de 8:00 am a 5:00 pm"; la bio sigue con la sucursal de Bordo Blanco y su ficha de Google también. Parece otra
--   sucursal: no se cambia la dirección ni se pone ese horario.
-- Pin: su ficha de Google (20.5007838, -99.925233), a ~90 m del del DENUE.
-- Foto: plato de birria (Instagram DfdCuVRElIB, 7 nov 2026). Sus carteles recientes tienen imágenes que parecen de IA.
BEGIN;
UPDATE places SET
  latitude = 20.5007838,
  longitude = -99.925233,
  short_description = $v$Birria de res, quesabirria y tacos en Bordo Blanco$v$,
  full_description = $v$Birriería sobre la carretera a San Juan del Río, en el km 16.3, en Bordo Blanco, a unos cuatro kilómetros de la Plaza Miguel Hidalgo. Sirve birria de res tradicional, quesabirrias, tacos y tortas, y tiene mesas al aire libre. También vende para llevar y entrega a domicilio: los pedidos se hacen al 414 104 3252 o al 427 488 8392.$v$,
  whatsapp_number = '414-104-3252',
  price_range = 'budget',
  instagram_url = 'https://www.instagram.com/birria_los_compadres_tequis/',
  facebook_url = 'https://www.facebook.com/p/birria-los-compadres-tx-61552936515117/',
  image_urls = ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/birria-los-compadres-birria.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/birria-los-compadres-birria.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '40baa5fe-ff76-5701-8ba2-c1cc5bc6f825'; -- Birria Los Compadres
COMMIT;

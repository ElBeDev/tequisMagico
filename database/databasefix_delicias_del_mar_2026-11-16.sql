-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-delicias.sql.
-- Delicias del Mar: datos, menú y foto de su Facebook oficial (16 nov 2026).
-- Cuenta: facebook.com/deliciasdelmartequis ("Delicias del Mar TX", 2.4 mil; teléfono 441 100 5676, el de la base;
--   jairo341@hotmail.com; "30 años de experiencia"). Activa: publicó el 13 nov 2026.
-- Teléfono [CONFLICTO resuelto]: 441 100 5676 es el de su Facebook; el 414 273 5511 del PDF de Turismo aparece en sus
--   carteles y videos, así que los dos son suyos. WhatsApp para pedidos en sus carteles: 414 122 8318.
-- Pin: el enlace de Google Maps de su Facebook (20.5307045, -99.8991241), a ~55 m del del DENUE; resuelve la duda
--   entre el DENUE y tequis.travel (el de tequis.travel estaba a 797 m).
-- Menú (foto del 7 sep 2026, fbid=1687231936745732): tostadas $63–79; cocteles $110–190; filetes $170–200; camarones
--   $225–250; caldos $145–195; torre de mariscos $495, molcajete mar y tierra $550, charola de mariscos (mín. 3
--   personas) $850; "No aceptamos American Express"; "No dividimos órdenes".
-- Foto: tostadas de ceviche (fbid=4405831822779738, 12 abr 2021). Casi todas sus fotos recientes de platillos tienen
--   fondo de playa montado o parecen generadas con IA; la fachada tiene autos deportivos con placas en primer plano.
BEGIN;
UPDATE places SET
  latitude = 20.5307045,
  longitude = -99.8991241,
  short_description = $v$Marisquería familiar con cocteles, filetes y camarones$v$,
  full_description = $v$Marisquería familiar sobre la carretera federal 120, en la zona de Hacienda Grande, a poco más de un kilómetro de la Plaza Miguel Hidalgo, que presume 30 años de experiencia. Según su menú de septiembre de 2026, las tostadas cuestan de $63 a $79, los cocteles de $110 a $190, los filetes de pescado de $170 a $200, los camarones de $225 a $250 y los caldos de $145 a $195; entre sus especialidades hay torre de mariscos ($495), molcajete mar y tierra ($550) y charola de mariscos para tres ($850). No acepta American Express ni divide órdenes. Toma pedidos por WhatsApp.$v$,
  whatsapp_number = '414-122-8318',
  price_range = 'moderate',
  facebook_url = 'https://www.facebook.com/deliciasdelmartequis',
  image_urls = ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/delicias-del-mar-tostadas.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/delicias-del-mar-tostadas.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'f7f8da15-410d-580e-a479-b5f096b49f49'; -- Delicias del Mar
COMMIT;

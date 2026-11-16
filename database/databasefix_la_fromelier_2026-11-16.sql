-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-fromelier.sql.
-- La Fromelier con sus cuentas oficiales y fotos propias (16 nov 2026).
-- Cuentas: Facebook facebook.com/lafromelier ("Matamoros 17, Tequisquiapan Centro", la dirección del DENUE; teléfono y
--   WhatsApp 427 212 0326, correo lafromelier@gmail.com, "Terraza o mesas al aire libre") e Instagram @lafromeliertx
--   ("La Casa Del Buen Queso", mismo logo; sus carteles dan el 427 212 0326).
-- No se usa:
--   - bodegasdemexico.com/es/restaurantes/la-fromelier: es un directorio de terceros (afiliados de Booking/Expedia,
--     calificaciones de Google). Coincide en dirección y en el 414 688 1466 del DENUE, y da 11:00–19:00 diario.
--   - lafromelier.com (el enlace de su Facebook): el dominio no está registrado (NXDOMAIN). No va como website: cualquiera
--     podría comprarlo.
-- Teléfono: el 427 212 0326 de sus cuentas sustituye al 414 688 1466 del DENUE.
-- Horario [CONFLICTO]: Facebook 10:00–20:00 (domingo desde las 8:00), "actualizado hace aproximadamente 5 años"; el
--   directorio da 11:00–19:00. Va en el texto con aviso, no en schedule_json.
-- Datos de sus publicaciones de Instagram (sep–oct 2026): productos (Facebook: mermeladas, miel, salsas), tapas y tablas
--   de queso, camembert al horno de leña, catas maridaje guiadas de queso y vino (2x1 en sep y oct 2026), buffet de
--   pizzas al horno de leña viernes y domingo de 14 a 18 h, $250 adultos y $150 niños de 3 a 10 años (20 sep 2026).
-- Fotos: dos fotos reales de sus tablas de queso en su Facebook (8 jun y 25 mar). Se descartaron todas las que Instagram
--   o Facebook marcan como IA y los carteles. Créditos en docs/datos/creditos-imagenes.md.
-- content_verified = true: dirección y teléfono de sus propias cuentas, y la dirección coincide con el DENUE.
BEGIN;
UPDATE places SET
  short_description = $v$La casa del buen queso: tablas, catas maridaje y quesos queretanos$v$,
  full_description = $v$Quesería y restaurante en la calle Matamoros, a unos 600 metros de la Plaza Miguel Hidalgo, que se presenta como «la casa del buen queso». Vende quesos queretanos y productos artesanales (mermeladas, miel y salsas), y sirve tablas y tapas de queso, camembert al horno de leña y pizzas con sus quesos. Da catas maridaje guiadas de queso y vino; en septiembre y octubre de 2026 las tuvo al 2x1. Los viernes y domingos de 14 a 18 h hay buffet de pizzas al horno de leña, que en septiembre de 2026 costaba $250 los adultos y $150 los niños de 3 a 10 años. Tiene mesas al aire libre. Su Facebook da de 10 a 20 h, pero ese horario lleva años sin actualizarse: confírmalo por WhatsApp.$v$,
  address = $v$Matamoros 17, Centro$v$,
  phone_number = '427-212-0326',
  whatsapp_number = '427-212-0326',
  email = 'lafromelier@gmail.com',
  instagram_url = 'https://www.instagram.com/lafromeliertx/',
  facebook_url = 'https://www.facebook.com/lafromelier',
  price_range = 'moderate',
  amenities = ARRAY[$v$Terraza$v$, $v$Reservaciones$v$]::text[],
  tags = ARRAY[$v$Centro$v$, $v$Quesos$v$]::text[],
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/la-fromelier-tabla-plaza.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/la-fromelier-tabla-larga.jpg$v$
  ]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/la-fromelier-tabla-plaza.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '1dd7eb21-a7d6-51a2-a1aa-7cd88b3b2c6b'; -- La Fromelier
COMMIT;

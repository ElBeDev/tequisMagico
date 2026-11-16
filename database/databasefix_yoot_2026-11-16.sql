-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-yoot.sql.
-- Yoot Masajes y Bienestar: datos de sus cuentas oficiales (16 nov 2026).
-- Cuentas: Facebook facebook.com/yootmasajestequisquiapan (1.7 mil; teléfono 55 3727 1020, el del DENUE y Turismo;
--   "fecha de fundación 13 de noviembre de 2010") e Instagram @yoottequisquiapan (1,057; mismos teléfonos y dirección
--   en sus carteles). No tiene web.
-- Dirección [CONFLICTO resuelto]: el negocio da Guillermo Prieto 3-A en su Facebook, en su cartel de horarios de
--   Instagram (19 oct 2026, fijado) y en todos sus anuncios; Google Maps lo ubica ahí, en Plaza La Capilla. Antes se
--   había elegido Salvador Michaus (DENUE 2024 + ficha de Turismo). Pin: el de Google Maps del negocio
--   (20.5230732, -99.8926922), a unos 120 m de la Plaza Miguel Hidalgo.
-- Horario (cartel fijado del 19 oct 2026): lunes, miércoles y jueves de 11 a 19 h; viernes, sábado y domingo de 10 a
--   20 h; martes cerrado. "Si tu cita la quieres en fin de semana hay que apartar tu lugar con anticipación."
-- Servicios (carteles de oct 2026 y bio de Instagram): masaje terapéutico de 70 min, individual o en pareja, piedras
--   calientes, drenaje linfático, alineación energética, flores de Bach, reiki, faciales, vinoterapia, chocolaterapia;
--   meditación los miércoles a las 9:00; venta de sales de baño, velas, inciensos, esencias y kits. No publica precios.
-- Correo: su Facebook da tcante7@gmail.com (parece personal); se deja el de Turismo, yootmybtequis@gmail.com.
-- Fotos: ninguna sirve. Todo lo que publica son carteles de diseño, casi todos con imágenes que parecen generadas con
--   IA; no hay fotos del local. Se queda la genérica.
-- content_verified: teléfonos y dirección confirmados con sus cuentas oficiales (además del DENUE y Turismo).
BEGIN;
UPDATE places SET
  latitude = 20.5230732,
  longitude = -99.8926922,
  address = $v$Guillermo Prieto 3-A (Plaza La Capilla), Centro$v$,
  full_description = $v$Centro de masajes y bienestar en Plaza La Capilla, a unos 120 metros de la Plaza Miguel Hidalgo, abierto desde 2010. Ofrece masaje terapéutico de 70 minutos, masajes individuales y en pareja, piedras calientes, drenaje linfático, reiki, alineación energética, flores de Bach, faciales, vinoterapia y chocolaterapia, y vende productos naturales como sales de baño, velas, inciensos y esencias. Los miércoles a las 9:00 hay meditación. Las citas se apartan por WhatsApp; para fin de semana conviene reservar con anticipación. No publica precios.$v$,
  schedule_json = $v${"lunes": "11:00–19:00", "martes": "cerrado", "miércoles": "11:00–19:00", "jueves": "11:00–19:00", "viernes": "10:00–20:00", "sábado": "10:00–20:00", "domingo": "10:00–20:00"}$v$::jsonb,
  amenities = ARRAY[$v$Masajes$v$, $v$Faciales$v$]::text[],
  instagram_url = 'https://www.instagram.com/yoottequisquiapan/',
  facebook_url = 'https://www.facebook.com/yootmasajestequisquiapan',
  content_verified = true,
  updated_at = NOW()
WHERE id = 'bd03c95d-85f2-512b-9b53-7e96af294b72'; -- Yoot Masajes y Bienestar
COMMIT;

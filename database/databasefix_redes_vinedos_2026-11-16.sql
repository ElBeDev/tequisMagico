-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-redes-vinedos.sql.
-- Redes de los viñedos que faltaban (16 nov 2026), revisadas con Claude in Chrome en la sesión del dueño.
-- Viñedo La Revuelta: su web enlaza dos páginas de Facebook; la del viñedo es facebook.com/LaRevueltaVineyard
--   ("Viñedo La Revuelta", enlaza a larevuelta.com.mx). La otra, CasaRevueltaGastronomia, es su restaurante.
-- Norte B: Facebook norteb.mx e Instagram @norteb.mx, los dos con el teléfono de reservas 427 224 6790 (el mismo de la
--   base) y enlace a norteb.mx. Las dos bios dan el horario actual: lunes, jueves y domingo de 11 a 18 h; viernes y
--   sábado de 11 a 21 h; martes y miércoles cerrado. Va a schedule_json y sustituye el "no publica horario".
-- Los Rosales Viñedos (sin web: su dominio es de apuestas): Facebook VinedosLosRosalesTx (31 mil seguidores, 1,409
--   opiniones) e Instagram @vinedoslosrosalestx, que se citan entre sí y dan el mismo teléfono, 414 280 4939, y la
--   dirección del km 27, la misma que traía su web original de 2018 (resuelve el [CONFLICTO] km 27 / km 47 de
--   databasefix_vinedos_2026-11-11.sql). Los números de queretaro.travel (414 280 7448 / 7480) no se usan: el 7480 es de
--   un taller en el DENUE. content_verified = true: teléfono y dirección de sus propias cuentas.
BEGIN;
UPDATE places SET facebook_url = 'https://www.facebook.com/LaRevueltaVineyard', updated_at = NOW()
WHERE id = 'db521ef0-c335-5e8b-b174-74c1ad10289f'; -- Viñedo La Revuelta

UPDATE places SET
  instagram_url = 'https://www.instagram.com/norteb.mx/',
  facebook_url = 'https://www.facebook.com/norteb.mx',
  schedule_json = $j${"lunes": "11:00–18:00", "martes": "cerrado", "miércoles": "cerrado", "jueves": "11:00–18:00", "viernes": "11:00–21:00", "sábado": "11:00–21:00", "domingo": "11:00–18:00"}$j$::jsonb,
  full_description = replace(full_description, $v$No publica horario: confirma antes de ir.$v$,
    $v$Abre lunes, jueves y domingo de 11 a 18 h, y viernes y sábado de 11 a 21 h; martes y miércoles cierra. Se reserva al 427 224 6790.$v$),
  updated_at = NOW()
WHERE id = '1d7fc20f-6fe1-55a2-b9d9-2acb315dcfef'; -- Norte B

UPDATE places SET
  instagram_url = 'https://www.instagram.com/vinedoslosrosalestx/',
  facebook_url = 'https://www.facebook.com/VinedosLosRosalesTx',
  phone_number = '414-280-4939',
  address = $v$Carretera Tequisquiapan–Ezequiel Montes km 27$v$,
  full_description = replace(full_description, $v$, pero no tiene web propia ni publica horarios o precios.$v$,
    $v$. No tiene web propia y no publica horarios ni precios: se reserva al 414 280 4939, el teléfono de su Facebook e Instagram.$v$),
  content_verified = true,
  updated_at = NOW()
WHERE id = 'a489a939-80e6-490e-982b-183785468864'; -- Los Rosales Viñedos
COMMIT;

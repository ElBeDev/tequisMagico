-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-vinedos-revision.sql.
-- Revisión final de los 12 viñedos (16 nov 2026): fotos, contacto, mapa y horario contra sus webs y cuentas oficiales.
-- Freixenet México: fuera la foto de la cabalgata (personas como protagonistas) y la tira panorámica del edificio
--   (1535×511, en la galería se veía una rebanada). Entran el túnel de la cava (visita clásica; la gente sale pequeña,
--   al fondo) y la cata de espumosos, de salavive.mx/inicio-2/enoturismo/. Créditos en docs/datos/creditos-imagenes.md.
-- Viñedo La Revuelta: content_verified = true. Se había dejado en false el 10 nov solo por no publicar horario ni
--   precios; su teléfono coincide en su web, tequis.travel, queretaro.travel y el directorio 2025. Horario de su Facebook
--   (LaRevueltaVineyard), "actualizado hace aproximadamente 4 meses": lunes y martes 7:30–22:00, miércoles y jueves
--   7:30–22:30, viernes y sábado 7:30–23:00, domingo 8:00–21:30. Va a schedule_json.
-- Los Rosales Viñedos: correo de su Facebook (losrosalestx@gmail.com). Su horario de Facebook (9 a 18 h; lunes desde
--   las 10; sábado y domingo hasta las 19 h) dice "actualizado hace aproximadamente 4 años" [FRÁGIL]: va en el texto
--   con aviso, no en schedule_json.
-- Norte B: pin del enlace de Google Maps de su Instagram (/place/Norte B: 20.5447595, -99.9526389); el anterior estaba
--   a ~175 m.
BEGIN;
UPDATE places SET
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/sala-vive-tunel.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/sala-vive-vinedo.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/sala-vive-cava.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/sala-vive-cata.jpg$v$
  ]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/sala-vive-tunel.jpg$v$,
  updated_at = NOW()
WHERE id = 'db284afc-c328-4fca-9bec-2bbc453c222f'; -- Freixenet México

UPDATE places SET
  content_verified = true,
  schedule_json = $j${"lunes": "7:30–22:00", "martes": "7:30–22:00", "miércoles": "7:30–22:30", "jueves": "7:30–22:30", "viernes": "7:30–23:00", "sábado": "7:30–23:00", "domingo": "8:00–21:30"}$j$::jsonb,
  full_description = replace(full_description, $v$ No publica horario ni precios.$v$,
    $v$ Abre todos los días desde las 7:30 (el domingo desde las 8:00) y cierra entre las 21:30 y las 23:00, según su Facebook. No publica precios.$v$),
  updated_at = NOW()
WHERE id = 'db521ef0-c335-5e8b-b174-74c1ad10289f'; -- Viñedo La Revuelta

UPDATE places SET
  email = 'losrosalestx@gmail.com',
  full_description = replace(full_description, $v$No tiene web propia y no publica horarios ni precios: se reserva al 414 280 4939, el teléfono de su Facebook e Instagram.$v$,
    $v$No tiene web propia ni publica precios. Su Facebook da de 9 a 18 h (lunes desde las 10 y sábado y domingo hasta las 19 h), pero ese horario lleva años sin actualizarse: confírmalo al 414 280 4939, el teléfono de su Facebook e Instagram.$v$),
  updated_at = NOW()
WHERE id = 'a489a939-80e6-490e-982b-183785468864'; -- Los Rosales Viñedos

UPDATE places SET latitude = 20.5447595, longitude = -99.9526389, updated_at = NOW()
WHERE id = '1d7fc20f-6fe1-55a2-b9d9-2acb315dcfef'; -- Norte B
COMMIT;

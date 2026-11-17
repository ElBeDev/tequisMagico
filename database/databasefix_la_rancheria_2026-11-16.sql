-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-rancheria.sql.
-- La Ranchería: datos y fotos de su Facebook oficial (16 nov 2026).
-- Cuenta: facebook.com/LaRancheriaTx ("La Rancheria Tequisquiapan", 8 mil; teléfono 414 690 2303, el de la base;
--   larancheria_tx@hotmail.com; "Carretera San Juan del Río Xilitla SN"; "El único y original sazón de carnes asadas al
--   carbón"; 94 % de 53 opiniones). Activa (publicación del 14 nov 2026).
-- Publicaciones de 2026: cortes a la parrilla ("desde un jugoso New York hasta un imponente Tomahawk"), cerveza y
--   mezcalitas, desayunos de fin de semana, área de juegos para niños ("Un espacio para que los niños también
--   disfruten") y menú infantil. No publica horario ni precios.
-- Fotos de su Facebook (24 oct 2026), sin texto ni personas, reducidas a 1600 px: Tomahawk (fbid=1740380128097552),
--   parrilla (1740380134764218) y parrillada mar y tierra (1740380138097551).
BEGIN;
UPDATE places SET
  subcategory = $v$Parrilla$v$,
  short_description = $v$Carnes asadas al carbón y cortes, con área de juegos$v$,
  full_description = $v$Restaurante de carnes asadas al carbón sobre la carretera a San Juan del Río, en La Ermita, a unos cinco kilómetros y medio de la Plaza Miguel Hidalgo. Sirve cortes a la parrilla, del New York al Tomahawk, parrilladas, cerveza y mezcalitas, y los fines de semana también desayunos. Tiene área de juegos y menú para niños. No publica horario ni precios: confirma por teléfono antes de ir.$v$,
  email = 'larancheria_tx@hotmail.com',
  price_range = 'moderate',
  amenities = ARRAY[$v$Desayunos$v$, $v$Área de juegos$v$]::text[],
  tags = ARRAY[$v$Familiar$v$]::text[],
  facebook_url = 'https://www.facebook.com/LaRancheriaTx',
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/la-rancheria-tomahawk.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/la-rancheria-parrilla.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/la-rancheria-parrillada.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/la-rancheria-tomahawk.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'e3d8fa86-2533-50d9-951c-1774a75d05d2'; -- La Ranchería
COMMIT;

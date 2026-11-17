-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-gallera-fotos.sql.
-- La Gallera: fotos reales de su Facebook oficial (16 nov 2026).
-- facebook.com/lagalleratx (la que enlaza su web): fachada de noche con su letrero (fbid=1388247529971649, 18 sep
--   2025) y totopos con guacamole (fbid=1685451190251280, 14 jul 2026), recortada para quitar "Guacamole" y
--   "@lagalleratx". Reducidas a 1600 px. Las de su web son recortes montados sobre un fondo con logo.
BEGIN;
UPDATE places SET
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/la-gallera-fachada.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/la-gallera-guacamole.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/la-gallera-fachada.jpg$v$,
  updated_at = NOW()
WHERE id = 'c07274f5-3e9a-5156-bd5d-edc58c71f618'; -- La Gallera
COMMIT;

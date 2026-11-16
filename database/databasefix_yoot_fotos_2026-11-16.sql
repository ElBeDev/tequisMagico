-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-yoot-fotos.sql.
-- Yoot Masajes y Bienestar: fotos reales de su Facebook oficial (16 nov 2026).
-- Sus publicaciones de 2025-2026 son carteles con imágenes que parecen de IA, pero las de 2024 son fotos reales del
-- local dentro de un marco o con logos. Se recortaron para quitar marco, texto y logos:
--   - yoot-masajes-cabina.jpg: cabina doble con cabecera en arco (facebook.com/photo.php?fbid=908954097910610,
--     15 jul 2024). Recorte central 620x1080 para quitar el logo "Te Quis" y el de Yoot de las esquinas superiores.
--     Es la misma cabina de su cartel de horarios de oct 2026.
--   - yoot-masajes-fachada.jpg: fachada de Guillermo Prieto 3A (fbid=1003306398475379, 23 nov 2024, "nuevas
--     instalaciones ... en la calle Guillermo Prieto número 3A"). Recorte 920x780 sin el marco ni "Déjate Consentir".
BEGIN;
UPDATE places SET
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/yoot-masajes-cabina.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/yoot-masajes-fachada.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/yoot-masajes-cabina.jpg$v$,
  updated_at = NOW()
WHERE id = 'bd03c95d-85f2-512b-9b53-7e96af294b72'; -- Yoot Masajes y Bienestar
COMMIT;

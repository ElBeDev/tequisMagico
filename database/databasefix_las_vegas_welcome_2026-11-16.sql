-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-lasvegas.sql.
-- Las Vegas Welcome Fast Food: se da de baja (soft-delete) a petición del dueño del sitio (16 nov 2026).
-- Venía del DENUE y del directorio de Turismo, sin web ni redes. Se reactiva con is_active = true.
BEGIN;
UPDATE places SET is_active = false, updated_at = NOW()
WHERE id = '64b594be-b6af-5aa3-b2a3-705e35c223fc'; -- Las Vegas Welcome Fast Food
COMMIT;

-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-suvlaki.sql.
-- Suvlaki: se da de baja (soft-delete) a petición del dueño del sitio, que confirma que ya no está funcionando
-- (16 nov 2026). El DENUE y el directorio de Turismo lo seguían listando. Se reactiva con is_active = true.
BEGIN;
UPDATE places SET is_active = false, updated_at = NOW()
WHERE id = 'dc350bda-4909-5289-86c2-0b0f4147306a'; -- Suvlaki
COMMIT;

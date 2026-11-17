-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-buenosdias.sql.
-- Buenos Días, desayunos y café: se da de baja (soft-delete) a petición del dueño del sitio (16 nov 2026).
-- Se reactiva con is_active = true.
BEGIN;
UPDATE places SET is_active = false, updated_at = NOW()
WHERE id = '68c0d213-7bc8-500c-b392-26b1dfed53aa'; -- Buenos Días, desayunos y café
COMMIT;

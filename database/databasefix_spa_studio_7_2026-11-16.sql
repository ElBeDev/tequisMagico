-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-studio7.sql.
-- Spa Studio 7: se da de baja (soft-delete) a petición del dueño del sitio (16 nov 2026).
-- Es el spa del Hotel San Carlos, que sigue en el sitio con su propia ficha (su descripción lo menciona). Se reactiva
-- con is_active = true.
BEGIN;
UPDATE places SET is_active = false, updated_at = NOW()
WHERE id = 'b8fb8442-db5b-57a6-892f-097d5acb62c6'; -- Spa Studio 7
COMMIT;

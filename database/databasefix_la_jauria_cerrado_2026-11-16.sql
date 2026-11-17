-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-jauria.sql.
-- La Jauría: cerrada desde el 1 nov 2024 (16 nov 2026). Se da de baja (soft delete).
-- Su Instagram @lajauriatx (1,126 seguidores) lo anunció el 25 oct 2024: "Este noviembre, nuestras puertas se
--   cerrarán [...] La Jauría se toma un descanso" y "Estaremos hasta el 1 de noviembre". Su biografía sigue con
--   "Cerrado temporalmente" y no ha publicado desde entonces (dos años). Su Facebook (LaJauriaTx) tampoco.
-- Si reabre, se reactiva por SQL con sus datos nuevos.
BEGIN;
UPDATE places SET is_active = false, updated_at = NOW()
WHERE id = 'a708db5a-909c-5bd5-9508-2541076268fe'; -- La Jauría
COMMIT;

-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-manaly.sql.
-- Manaly: cerrado; se da de baja (soft-delete) (16 nov 2026).
-- Sus cuentas oficiales (facebook.com/RestauranteManaly, 3.1 mil, e Instagram @manalyrestaurante; teléfono y WhatsApp
--   414 107 5382, el de la base; Circuito Alfredo V. Bonfil, a un costado de la Unidad Deportiva) anunciaron el cierre
--   el 5 sep 2024: "GRACIAS A NUESTROS AMIGOS Y CLIENTES POR SU PREFERENCIA. DAMOS POR CONCLUIDOS NUESTROS SERVICIOS"
--   (Instagram, publicación C_iwDk-RD6H; ese día Facebook cambió su foto de perfil al mismo aviso). No hay
--   publicaciones posteriores. El DENUE (alta 2019) y el directorio de Turismo 2025 seguían listándolo.
-- Se reactiva con is_active = true.
BEGIN;
UPDATE places SET is_active = false, updated_at = NOW()
WHERE id = '2c08206b-ba9b-5f84-930e-01b3455c74e2'; -- Manaly
COMMIT;

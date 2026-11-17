-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-srsol.sql.
-- Sr. Sol: se da de baja (soft-delete); el local de Tequis ya no opera (16 nov 2026).
-- Sus cuentas (facebook.com/restaurantSrSol e Instagram @srsolrestaurant; menú con el 414 231 1250 de la base; "plaza
--   centenario local 61B colonia vista hermosa Carretera SJR Xilitla") dejaron de publicar como Sr. Sol: Instagram el
--   30 nov 2022 y Facebook en marzo de 2024. El 14 sep 2025 la misma página de Facebook cambió su portada a
--   "Ramenzilla, Casa de los Fideos Atómicos": ramen con recoger y servicio a domicilio, martes a domingo de 13 a 20 h,
--   en "Elena #3 esq. Laura Nativitas" (colonia Nativitas, Benito Juárez, Ciudad de México), WhatsApp 55 4944 1251, el
--   mismo de Sr. Sol. No hay rastro del local de Plaza Centenario después de 2024.
-- El DENUE (alta 2024-11) y el directorio de Turismo 2025 lo seguían listando. Se reactiva con is_active = true.
BEGIN;
UPDATE places SET is_active = false, updated_at = NOW()
WHERE id = 'a955962a-80e0-539e-b886-0572b0db9263'; -- Sr. Sol
COMMIT;

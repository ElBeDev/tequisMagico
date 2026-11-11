-- APLICADA el 2026-11-10 en la base del VPS, con respaldo previo en /root/respaldos/places-events-20261110.sql (y la base completa en tequis-completa-20261110.dump). Preparado el 2026-11-10 con docs/datos/investigacion-balnearios-globo-vinedos-2026-11.md.
-- Ajuste suelto que no entra en los seeds del 10 nov.

BEGIN;

-- Viñedos La Redonda: tenía la insignia "Verificado" (is_verified), que el usuario ve en la app,
-- pero su web dice que está "en actualización" y la investigación encontró que dejó de operar.
-- Se queda activo (es un viñedo real), sin la insignia.
UPDATE places SET is_verified = false, updated_at = NOW() WHERE id = 'e83905fa-1335-4bc7-b117-a917d5246a53';

-- Tres lugares de cestería de la carga inicial sin ningún rastro: no están en la lista de 14 talleres
-- de tequis.travel ni en el Directorio Tequisquiapan 2025 (docs/datos/investigacion-actividades-patrimonio-2026-11.md,
-- aviso 9). Misma regla que los 13 de comida de databaseseed_gastronomia_2026-11-10.sql.
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW() WHERE id = '0570e03e-1eb6-46ec-94e3-c46c0af78ab9'; -- Talleres de Cestería (Casa de la Cultura, Morelos s/n)
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW() WHERE id = '7e21d380-fa24-4306-92c2-b501de44992c'; -- Cestería Don Luis (Juárez 18)
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW() WHERE id = 'c45383ea-ce99-4b97-a169-f53c33296020'; -- La Casa del Mimbre (Ezequiel Montes 28)

COMMIT;

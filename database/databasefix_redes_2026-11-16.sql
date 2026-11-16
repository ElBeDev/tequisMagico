-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo (tabla completa) en /root/respaldos/places-20261116-redes.sql.
-- Redes sociales oficiales de los lugares (16 nov 2026).
-- 1. Dos columnas nuevas en places. El API (SELECT *) las devuelve solas; el panel las edita (PlaceForm) y valida que
--    sean URLs de instagram.com / facebook.com; la web las muestra en la ficha y en el JSON-LD (sameAs). La app iOS
--    las ignora (Codable no falla con llaves de más).
-- 2. Las cuentas de los cuatro viñedos revisados hoy. Cada una se confirmó como oficial porque su teléfono, dirección o
--    web coinciden con los del negocio (ver los databasefix_*_2026-11-16.sql de cada uno).
ALTER TABLE places ADD COLUMN IF NOT EXISTS instagram_url TEXT;
ALTER TABLE places ADD COLUMN IF NOT EXISTS facebook_url TEXT;

BEGIN;
UPDATE places SET instagram_url = 'https://www.instagram.com/terrasalvador.vinicola/',
  facebook_url = 'https://www.facebook.com/profile.php?id=100077722981785', updated_at = NOW()
WHERE id = '0e287eb9-5479-5c03-9cbb-b1e362097397'; -- Vinícola Terra Salvador
UPDATE places SET instagram_url = 'https://www.instagram.com/vinicola_tequisquiapan_/',
  facebook_url = 'https://www.facebook.com/DeliceCatembe', updated_at = NOW()
WHERE id = '0cf02114-c165-5d87-b904-b608cbcc1ad5'; -- Vinícola Tequisquiapan
UPDATE places SET instagram_url = 'https://www.instagram.com/vinamagal/',
  facebook_url = 'https://www.facebook.com/vinamagal', updated_at = NOW()
WHERE id = 'b7a72d9a-a81a-56ac-80bc-c0626f290ab1'; -- Viña Magal
UPDATE places SET instagram_url = 'https://www.instagram.com/vinicolasanpatricio/',
  facebook_url = 'https://www.facebook.com/vinicolasanpatricio', updated_at = NOW()
WHERE id = '690c1a76-1e6e-5124-88f4-902488c9195c'; -- Vinícola San Patricio
COMMIT;

-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-rollato.sql.
-- Helados Rollato: datos y foto de sus cuentas oficiales (16 nov 2026).
-- Cuentas: Facebook facebook.com/p/Rollato-Tequis-100064763448762 (236; heladoenrollotequis@gmail.com; "Te esperamos
--   en Juárez 3B, col. Centro. Tequisquiapan, Qro. A un lado del Hotel Neptuno"; "Helados en Rollo en base agua o
--   leche y Bubble tea Gourmet con tapioca negra y perlas explosivas; tenemos más de 70 sabores") e Instagram
--   @rollato_tequis (560; "Helado en Rollo & Bubble Tea. Tú eliges, nosotros lo hacemos al momento. Visítanos Juárez 3B
--   Centro. L-D 12:00 a 19:00 hrs."). Activas (2026).
-- La dirección de sus cuentas (Juárez 3B, junto al Hotel Neptuno) concuerda con la calle del DENUE (Juárez Oriente).
-- Teléfono: se deja el de la base (PDF de Turismo 2025, 427 212 5497); sus vasos de 2021 traen un WhatsApp
--   442 501 96 01 que no aparece en sus perfiles actuales.
-- Foto: vaso de helado en rollo de vino tinto con arándano (Instagram CVtbPiVpOkm, 31 oct 2021). Casi todo lo demás
--   son videos, fotos con gente o capturas de CapCut.
BEGIN;
UPDATE places SET
  address = $v$Av. Juárez 3B, Centro (junto al Hotel Neptuno)$v$,
  email = 'heladoenrollotequis@gmail.com',
  short_description = $v$Helado en rollo y bubble tea a una cuadra de la plaza$v$,
  full_description = $v$Heladería de helado en rollo y bubble tea en Juárez 3B, junto al Hotel Neptuno, a unos 150 metros de la Plaza Miguel Hidalgo. El helado se hace al momento sobre una plancha fría, con base de agua o de leche, y hay más de 70 sabores combinables; el bubble tea lleva tapioca negra o perlas explosivas. Abre todos los días de 12 a 19 h.$v$,
  schedule_json = $v${"lunes": "12:00–19:00", "martes": "12:00–19:00", "miércoles": "12:00–19:00", "jueves": "12:00–19:00", "viernes": "12:00–19:00", "sábado": "12:00–19:00", "domingo": "12:00–19:00"}$v$::jsonb,
  price_range = 'budget',
  instagram_url = 'https://www.instagram.com/rollato_tequis/',
  facebook_url = 'https://www.facebook.com/p/Rollato-Tequis-100064763448762/',
  image_urls = ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/helados-rollato-vaso.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/helados-rollato-vaso.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '155011ad-8777-59c9-a123-3881bc720414'; -- Helados Rollato
COMMIT;

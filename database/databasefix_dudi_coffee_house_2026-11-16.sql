-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-dudi.sql.
-- Dudi Coffee House: su Facebook y tres fotos de ahí (16 nov 2026).
-- Cuenta: facebook.com/DuDicoffeehouse ("DuDi coffee house", 228 seguidores; "El mejor café en Tequisquiapan, frappes,
--   smoothies y algo más"; "Ezequiel Montes 142 Tequisquiapan Centro", la dirección de la base; servicios: para llevar,
--   en el local y recoger en la acera). No publica teléfono ni horario (solo botones de Messenger y WhatsApp).
-- Última publicación: 1 dic 2023 (casitas de jengibre $500 y arbolitos de galleta $200 sobre pedido, "En plaza los arcos").
--   Sin señal de cierre, pero tampoco de actividad reciente: se queda con content_verified = false.
-- Fotos de su Facebook: tartaletas (fbid 756963436470110, 30 nov 2023), capuchino (756963463136774, misma publicación;
--   recortada para quitar el rótulo) y té helado "DuDi Luna" (657151973117924, 15 jun 2023; recortada para quitar la etiqueta).
BEGIN;
UPDATE places SET
  facebook_url = 'https://www.facebook.com/DuDicoffeehouse',
  short_description = $v$Café, frappés y tartaletas en la Plaza Los Arcos, frente al Parque La Pila$v$,
  full_description = $v$Cafetería en la Plaza Los Arcos, frente al Parque La Pila, a unos 400 metros de la Plaza Miguel Hidalgo. Prepara café americano y capuchino, frappés, smoothies y tés helados, y vende tartaletas de fruta, nuez y chocolate blanco; se puede tomar en el local o pedir para llevar. Según su ficha de Turismo, la plaza comercial admite mascotas. Confirma horario antes de ir.$v$,
  amenities = ARRAY[$v$Para llevar$v$]::text[],
  tags = ARRAY[$v$Café$v$, $v$Postres$v$, $v$Centro$v$]::text[],
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/dudi-coffee-house-tartas.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/dudi-coffee-house-capuchino.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/dudi-coffee-house-te-helado.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/dudi-coffee-house-tartas.jpg$v$,
  updated_at = NOW()
WHERE id = 'd20a1e1a-d174-51cf-8552-29e2a7c240b3'; -- Dudi Coffee House
COMMIT;

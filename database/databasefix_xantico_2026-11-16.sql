-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-xantico.sql.
-- Xantico Spa: datos y fotos de sus cuentas oficiales (16 nov 2026).
-- Cuentas: Facebook facebook.com/xanticospa (598 seguidores): su botón de WhatsApp marca 414 114 0271, el teléfono de
--   la base (PDF de Turismo 2025). Instagram @spaxantico (117; activo, última publicación 13 nov 2026): "Cel. 414 114
--   0271" en sus publicaciones. No tiene web.
-- Dirección [CONFLICTO resuelto]: su Facebook y su ficha de Google Maps dan Ezequiel Montes 142, interior 13; el DENUE
--   daba Camelinas 142. Gana la del negocio. Pin: el de Google Maps (20.525656, -99.8899106), a ~45 m del del DENUE.
-- Servicios: bio de Facebook (masajes, faciales, vinoterapia, chocolaterapia, manicura, pedicura); Instagram y Facebook
--   2025-2026: piedras calientes (terapia geotermal), drenaje linfático, magnetoterapia, tratamientos reductivos,
--   paquetes en pareja, membresía de 6 meses (facial, masaje, magnetoterapia; 13 nov 2026) y la "Experiencia Xantico
--   Spa Garden", masaje al aire libre en su jardín (1 sep 2025).
-- Sin horario publicado (Facebook dice "siempre abierto") y sin precios vigentes (los de sus carteles son promociones
--   de 2023-2025): se pide agendar por WhatsApp, como dicen sus publicaciones.
-- Fotos de su Facebook, sin texto:
--   - xantico-spa-jardin.jpg: camilla en la terraza del jardín (fbid=1630734908292314, 1 sep 2025, "Experiencia Xantico
--     spa Garden").
--   - xantico-spa-piedras.jpg: masaje de piedras calientes en su cabina (fbid=1815437823155354, 19 mar 2026). La clienta
--     sale de espaldas y no se le ve la cara.
-- content_verified: teléfono y dirección confirmados con sus cuentas (además del DENUE y Turismo).
BEGIN;
UPDATE places SET
  latitude = 20.525656,
  longitude = -99.8899106,
  address = $v$Ezequiel Montes 142, interior 13, Centro$v$,
  short_description = $v$Spa con masajes, faciales y masaje en el jardín$v$,
  full_description = $v$Spa en el centro de Tequis, a unos 400 metros de la plaza, con masajes relajantes y descontracturantes, piedras calientes, drenaje linfático, faciales, vinoterapia, chocolaterapia, magnetoterapia, tratamientos reductivos, manicura y pedicura. Tiene paquetes en pareja y una membresía de seis meses, y ofrece masajes al aire libre en su jardín. No publica horario ni precios: las citas se agendan por teléfono o WhatsApp.$v$,
  whatsapp_number = '414-114-0271',
  amenities = ARRAY[$v$Masajes$v$, $v$Faciales$v$]::text[],
  instagram_url = 'https://www.instagram.com/spaxantico/',
  facebook_url = 'https://www.facebook.com/xanticospa',
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/xantico-spa-jardin.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/xantico-spa-piedras.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/xantico-spa-jardin.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'fa22b682-d63a-5f1d-a9bd-7630eedb718a'; -- Xantico Spa
COMMIT;

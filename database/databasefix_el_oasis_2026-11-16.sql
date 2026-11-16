-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-oasis.sql.
-- Parque Acuático El Oasis: revisión con su web y sus redes (16 nov 2026).
-- Web: eloasistequisquiapan.com (portada con precios, servicios, contacto y venta de boletos en /checkout).
--   - Campamento: $290 adultos y $250 niños (antes $250 y $220; su Facebook todavía da los viejos en la presentación).
--     Entrada sin cambios: $190 adultos, $150 niños de 1.00 a 1.40 m y tercera edad. Sábado y domingo, vacaciones y
--     festivos, de 9 a 18 h.
--   - "Más de 46 años"; 2 toboganes rápidos de 120 m; Tierra de la Fantasía (3 cascadas, 5 toboganes, 1 gruta, 1 cenote);
--     campamento de 262 espacios con baños, vestidores, área de fogatas y de asador; campo de futbol reglamentario y 2 de
--     mini futbol; restaurante, minisúper y tienditas; estacionamiento gratis.
--   - Pin: su enlace de Google Maps (goo.gl/maps/EaNYRFfuWfyEZwib7) marca 20.6071137, -99.9080426. El de la base era
--     aproximado (km 10) e idéntico al de Termas del Rey.
-- Redes oficiales:
--   - Facebook facebook.com/ElOasisTx (24 mil): enlaza a eloasistequisquiapan.com y da el 446 138 4113, uno de sus
--     tres teléfonos.
--   - Instagram @eloasistequisquiapan (1,251): mismo logo y dirección. Enlaza a eloasistequisquiapan.com.mx, que NO
--     está registrado en NIC México; la web buena es la .com.
-- Fotos: dos más de la Galería de su web (Tierra de la Fantasía y campamento, sin personas en primer plano). Las de
--   sus redes son carteles.
BEGIN;
UPDATE places SET
  latitude = 20.6071137,
  longitude = -99.9080426,
  full_description = $v$Parque acuático con más de 46 años, en el km 10 de la carretera a Ezequiel Montes, con agua termal a 36 °C, alberca de olas, alberca olímpica, dos toboganes rápidos de 120 m, tirolesa y la Tierra de la Fantasía, una zona con cascadas, cinco toboganes, una gruta y un cenote. Tiene palapas y asadores, campos de futbol, restaurante, minisúper y estacionamiento gratis, y 262 lugares para acampar con baños, vestidores y área de fogatas. En noviembre de 2026 abría sábados y domingos de 9 a 18 h, además de vacaciones y festivos, y la entrada costaba $190 adultos y $150 niños de 1.00 a 1.40 m y adultos mayores ($290 y $250 con campamento). Los boletos se pueden comprar en su web. En temporada baja suele tener promociones.$v$,
  instagram_url = 'https://www.instagram.com/eloasistequisquiapan/',
  facebook_url = 'https://www.facebook.com/ElOasisTx',
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/parque-acuatico-el-oasis-olas.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/parque-acuatico-el-oasis-fantasia.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/parque-acuatico-el-oasis-toboganes.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/parque-acuatico-el-oasis-campamento.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/parque-acuatico-el-oasis-vista.jpg$v$]::text[],
  updated_at = NOW()
WHERE id = '04332bc5-6b65-5067-80bb-bd6d1562e941'; -- Parque Acuático El Oasis
COMMIT;

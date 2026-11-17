-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-mdturismo.sql.
-- MD Turismo y Experiencias: revisión con su web (16 nov 2026).
-- Web: mdturismoyexperiencias.com (tienda Tiendanube; los productos tienen el precio oculto, "contact": true, así que
--   no publica precios). Productos que salen de Tequis:
--   - Tranvía Tram 43: 1.5 h, viernes a domingo, salidas a las 12, 14, 16 y 18 h, con reservación; vinícola (2
--     etiquetas), quesería y tasting room de productos del semidesierto.
--   - Free Tour Tequisquiapan: a pie, 1.5 h por el centro histórico con guía local; cartel: "Todos los sábados | 10:00
--     Hrs | 16:00 Hrs | Lugar de encuentro: Plaza Miguel Hidalgo | Aportación voluntaria"; previa reserva.
--   - Tour nocturno "Sabor de la noche": 4.5 h, jueves a domingo, solo adultos; maridaje de chocolate artesanal con
--     vino, cata de 3 cervezas artesanales con tapas y cena con pizza artesanal y copa de vino; transporte incluido.
--   - Colores del Ópalo: 4.5 h, diario; mina de ópalo en 4x4, buscar tu propia piedra y taller del minero.
--   - Además: tours de vino y queso (Bernal, Cadereyta, Freixenet, cervecería), gastronomía otomí, vuelo en globo y
--     vinoterapia.
-- Fotos de su web: se agregan el paseo en el tranvía (_ago7252) y el maridaje de chocolate y vino del tour nocturno
--   (vino-choco). Se quedan las dos del tranvía.
BEGIN;
UPDATE places SET
  full_description = $v$Operadora de tours en el Andador Comercial Vista Hermosa, a 1.1 km de la plaza, que maneja el tranvía Tram 43. El recorrido en tranvía dura hora y media, pasa por los barrios más antiguos del pueblo y para en una vinícola, con degustación de dos vinos de la casa, en una quesería y en un tasting room de productos del semidesierto queretano; sale de viernes a domingo a las 12, 14, 16 y 18 h, con reservación. Los sábados a las 10 y a las 16 h hace un free tour a pie de hora y media por el centro histórico, que sale de la Plaza Miguel Hidalgo y se paga con una aportación voluntaria al guía. De jueves a domingo tiene un tour nocturno solo para adultos, con maridaje de chocolate y vino, cata de cervezas artesanales y cena, y todos los días lleva a una mina de ópalo en 4x4. También vende tours por la Ruta del Queso y el Vino, a Bernal y Cadereyta, y vuelos en globo. No publica precios: se cotiza al reservar.$v$,
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/md-turismo-y-experiencias-tranvia-vinedo.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/md-turismo-y-experiencias-tram-43.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/md-turismo-y-experiencias-tranvia-paseo.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/md-turismo-y-experiencias-chocolate-vino.jpg$v$]::text[],
  amenities = ARRAY[$v$Tours$v$, $v$Degustaciones$v$, $v$Transporte incluido$v$]::text[],
  updated_at = NOW()
WHERE id = 'f10c9ab2-81e2-5ce0-b3c6-8df6517b1fcc'; -- MD Turismo y Experiencias
COMMIT;

-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-txeco.sql.
-- TX Ecotours: revisión con su web (16 nov 2026).
-- Web: txecotours.com (GoDaddy; el título de la portada es "4000058216gc").
--   - /rutas: Magia Natural, Queso y Vino (quesería y vinícola Santiago Apóstol), Ruta del Olimpo (off-road, lago y
--     viñedo con maridaje), Soy Minero (ópalo en La Trinidad), modalidad pasajero con guía al volante; manejar tú
--     cuesta $1,200 extra. Ruta del Pedernal: 3.5 a 4 h hasta la mina antigua El Pedernal.
--   - /tienda (precios con promoción, "NO INCLUYEN IVA y pueden variar de acuerdo a las promociones de cada mes"):
--     Magia Natural $850 (antes $1,000), Queso y Vino $920 ($1,100), Ruta del Olimpo $1,350 ($1,450; menores de 16
--     $800), Soy Minero $950 ($1,100; menores de 16 $600), Ruta del Pedernal $6,500 ($7,500) "precio por vehículo, no
--     por persona", manejas tú con hasta 4 acompañantes, con escalada en roca y cerveza en la cervecería Ópalo.
--   - /contacto: lunes a domingo de 9 a 21 h; (427) 219 9237, (414) 109 1550; su botón de WhatsApp marca 414 231 3530,
--     el teléfono de la base. /rutas muestra además un 272 172 1280 (otra lada; no se usa).
--   - /cabañas: cabaña para 8, loft para 4 y área de fiestas en la Finca Los Tres Chatos (La Higuera, Ezequiel Montes).
-- Fotos: se quedan las tres que ya tenía de su web.
BEGIN;
UPDATE places SET
  full_description = $v$Operadora de recorridos en vehículos todoterreno en Carrizal 23, a unos 200 metros de la plaza. Sus rutas, con un guía al volante, llevan al punto más alto de Tequis, la Presa Centenario y la antigua Estación Bernal; a una de las queserías más antiguas del pueblo y a la vinícola Santiago Apóstol; por campos y charcos hasta un lago y un viñedo con maridaje, y a buscar ópalo con mineros en La Trinidad. En noviembre de 2026 su tienda en línea las tenía en promoción de $850 a $1,350 por persona, más IVA, con precio menor para menores de 16. En la Ruta del Pedernal, de 3.5 a 4 horas por el semidesierto hasta la mina antigua El Pedernal, manejas tú con hasta cuatro acompañantes: $6,500 por vehículo, más IVA; en las demás rutas también puedes manejar, con un cargo de $1,200. Atiende todos los días de 9 a 21 h. También renta cabañas y un área de fiestas en la Finca Los Tres Chatos, en Ezequiel Montes.$v$,
  whatsapp_number = '414-231-3530',
  schedule_json = $v${"lunes": "9:00–21:00", "martes": "9:00–21:00", "miércoles": "9:00–21:00", "jueves": "9:00–21:00", "viernes": "9:00–21:00", "sábado": "9:00–21:00", "domingo": "9:00–21:00"}$v$::jsonb,
  updated_at = NOW()
WHERE id = '1fa39682-f9b0-5f3e-9923-b26aa40c338f'; -- TX Ecotours
COMMIT;

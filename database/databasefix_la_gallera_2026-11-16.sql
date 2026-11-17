-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-gallera.sql.
-- La Gallera: datos y menú de su web (16 nov 2026).
-- Web: lagallera.com.mx (WordPress; misma dirección: esquina carretera Querétaro–Tequisquiapan y Gregorio Moreno,
--   Adolfo López Mateos). Pedidos a domicilio sin costo extra a partir de las 12 h al 442 752 4892 (el de la base) y
--   414 690 0781 (también en Contacto, con wa.me de los dos). Servicios: wifi, música, pago con tarjeta, reservas, zona
--   de fumadores, estacionamiento, eventos privados, menú infantil. Enlaza a facebook.com/lagalleratx e
--   instagram.com/lagalleratx (2,348; bio "Lun-Dom | 12pm-11pm"; destacada "Música en vivo"; activa, nov 2026).
--   Su correo publicado ("contacto@www.lagallera.com.mx") está mal escrito: no se usa.
-- Menú (páginas modificadas en marzo de 2026, según /wp-json): entradas $65–245; tacos (orden de 3) $80–175; carnes de
--   350 g: arrachera $280, T-bone $305, rib eye $310, picaña $320; costillas $270; molcajete para 2 $475; parrillada
--   para 6 $949; parrillada mar y tierra para 8 $1,349; hamburguesas $115–185; micheladas de litro desde $95.
-- Fotos: las de su web son recortes de platillos montados sobre un fondo con el logo encima, y las de Instagram llevan
--   texto: se queda la genérica.
BEGIN;
UPDATE places SET
  phone_number = '414-690-0781',
  whatsapp_number = '442-752-4892',
  website = 'https://lagallera.com.mx',
  short_description = $v$Restaurante bar familiar con carnes, parrilladas y micheladas$v$,
  full_description = $v$Restaurante bar familiar a la salida del pueblo hacia Querétaro, en la colonia Adolfo López Mateos, a unos dos kilómetros de la Plaza Miguel Hidalgo. Su carta va de entradas, tacos y hamburguesas a cortes y parrilladas: según su menú de 2026, los tacos cuestan de $80 a $175 la orden, la arrachera de 350 g $280, el rib eye $310, el molcajete para dos $475 y la parrillada para seis $949; las micheladas de litro, desde $95. Abre todos los días de 12 a 23 h, hay música en vivo, menú infantil, estacionamiento y zona de fumadores, y hace pedidos a domicilio sin costo extra.$v$,
  schedule_json = $v${"lunes": "12:00–23:00", "martes": "12:00–23:00", "miércoles": "12:00–23:00", "jueves": "12:00–23:00", "viernes": "12:00–23:00", "sábado": "12:00–23:00", "domingo": "12:00–23:00"}$v$::jsonb,
  price_range = 'moderate',
  amenities = ARRAY[$v$Bar$v$, $v$Música en vivo$v$, $v$Delivery$v$, $v$Reservaciones$v$]::text[],
  tags = ARRAY[$v$Familiar$v$]::text[],
  instagram_url = 'https://www.instagram.com/lagalleratx/',
  facebook_url = 'https://www.facebook.com/lagalleratx',
  content_verified = true,
  updated_at = NOW()
WHERE id = 'c07274f5-3e9a-5156-bd5d-edc58c71f618'; -- La Gallera
COMMIT;

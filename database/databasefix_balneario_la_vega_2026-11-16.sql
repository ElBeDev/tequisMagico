-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-lavega.sql.
-- Balneario La Vega: datos y foto de su Facebook oficial (16 nov 2026).
-- Cuenta: facebook.com/BalneariolaVegaOficial (1.6 mil seguidores): teléfono 414 273 4534 y dirección Paseo de la Vega,
--   Barrio de la Magdalena, iguales a su web, y enlaza a balneariolavega.mx. Ya estaba en la ficha.
-- Web (balneariolavega.mx, Joomla): es una plantilla a medias. Solo la portada y "Contáctenos" funcionan (horario diario
--   de 8 a 18 h, dirección y teléfono); "Galería", "Habitaciones" y "Campamento" dan 404, el WhatsApp es de relleno
--   (123 456-7890) y los botones de Instagram y TikTok no llevan a ninguna cuenta. Por eso la foto nueva sale de su
--   Facebook: la web no tiene galería.
-- Correo: su Facebook da contacto@balneariolavega.mx, pero el dominio tiene "MX 0 ." (no recibe correo). No se agrega.
-- Instagram: @balneariolavega existe pero está vacío (0 publicaciones, 2 seguidores) y nada lo liga al negocio. No se agrega.
-- Precios (carteles de su Facebook):
--   - Entrada, 13 sep 2025 ("Día cumpleañero"): general $100; niños y adultos mayores con credencial $50; campamento $100.
--     El cartel del 30 abr 2026 (Día del Niño) repite adulto $100.
--   - Habitaciones, 5 feb 2026: sencilla para 2 desde $1,000; doble para 4 desde $1,400; triple para 6 desde $1,800, por
--     noche, con baño privado, entradas al balneario, TV y estacionamiento interno; entrada 13:30, salida 11:30.
--   - Reglas (cartel del 11 sep 2025): no se permiten envases de vidrio ni mascotas.
-- Foto: balneario-la-vega-albercas.jpg, de su Facebook (20 may 2025, también es su portada): alberca, toboganes, palapas
--   y jardín, sin personas en primer plano. Lo demás son carteles o fotos de eventos con clientes.
BEGIN;
UPDATE places SET
  full_description = $v$Balneario en el Barrio de La Magdalena, a unos minutos de la plaza, con alberca olímpica, toboganes, chapoteadero y un jardín amplio con palapas; abre todos los días de 8 a 18 h. Según sus carteles de 2025 y 2026, la entrada general cuesta $100, y $50 los niños y los adultos mayores con credencial; acampar cuesta $100 por persona. También renta habitaciones con baño privado y la entrada al balneario incluida: en febrero de 2026, desde $1,000 la noche para dos personas, $1,400 para cuatro y $1,800 para seis. No se permiten envases de vidrio ni mascotas.$v$,
  amenities = ARRAY[$v$Albercas$v$, $v$Toboganes$v$, $v$Camping$v$, $v$Palapas$v$, $v$Cabañas$v$, $v$Habitaciones$v$, $v$Estacionamiento$v$]::text[],
  image_urls = ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/balneario-la-vega-albercas.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/balneario-la-vega-jardin.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/balneario-la-vega-albercas.jpg$v$,
  updated_at = NOW()
WHERE id = 'fb30e010-d760-5805-ac5b-e9da4570373d'; -- Balneario La Vega
COMMIT;

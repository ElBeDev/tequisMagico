-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-cabrito.sql.
-- Portal del Cabrito: datos, menú y fotos de su web (16 nov 2026).
-- Web: cabrito.mx ("El Portal del Cabrito - Auténtico Cabrito al Horno"; misma dirección: Carretera San Juan del
--   Río-Tequisquiapan km 15, La Ermita). Teléfono +52 414 690 0649, WhatsApp +52 414 112 1353,
--   elportaldelcabrito@gmail.com, "Todos los días: 1:00 PM - 7:00 PM". Enlaza a facebook.com/ElPortalDelCabrito e
--   instagram.com/elportaldelcabrito.
-- Teléfono: se usa el de su web; el 414 273 8137 de la base (directorio de Turismo) no aparece en ella.
-- "Más de 15 años", fundado por Don Lencho; cabrito al horno de leña "inspirado en el estilo norteño y segoviano";
--   recetas de Doña Cristi; área especial para niños.
-- Menú de su web (sin fecha; sitio © 2026): cabrito al horno para 6 personas $2,340 y para 8 $3,000; cabrito por pieza
--   desde $345 (con sopa y ensalada); machitos $200; queso fundido con chistorra $180; cortes a la parrilla desde $350;
--   guacamole $60; hamburguesa infantil $75; escamoles de temporada $390.
-- Fotos de su web (cabrito.mx/images/): cabrito-in-cast-iron-plate-6, restaurant-interior-1, brick-oven-6 y
--   machitos-2, reducidas a 1600 px. Se descartaron las de clientes y niños.
BEGIN;
UPDATE places SET
  short_description = $v$Cabrito al horno de leña, con área para niños$v$,
  full_description = $v$Restaurante familiar sobre la carretera a San Juan del Río, en el km 15, en La Ermita, a unos cinco kilómetros y medio de la Plaza Miguel Hidalgo, especializado desde hace más de 15 años en cabrito al horno de leña, al estilo norteño y segoviano. Según su web, el cabrito para seis personas cuesta $2,340 y para ocho $3,000, y por pieza desde $345, con sopa y ensalada; también hay machitos ($200), queso fundido con chistorra ($180), cortes a la parrilla desde $350 y escamoles de temporada ($390). Tiene área de juegos para niños y menú infantil. Abre todos los días de 13 a 19 h y recibe reservaciones por WhatsApp.$v$,
  phone_number = '414-690-0649',
  whatsapp_number = '414-112-1353',
  email = 'elportaldelcabrito@gmail.com',
  website = 'https://cabrito.mx',
  price_range = 'moderate',
  schedule_json = $v${"lunes": "13:00–19:00", "martes": "13:00–19:00", "miércoles": "13:00–19:00", "jueves": "13:00–19:00", "viernes": "13:00–19:00", "sábado": "13:00–19:00", "domingo": "13:00–19:00"}$v$::jsonb,
  amenities = ARRAY[$v$Área de juegos$v$, $v$Reservaciones$v$]::text[],
  tags = ARRAY[$v$Familiar$v$]::text[],
  instagram_url = 'https://www.instagram.com/elportaldelcabrito/',
  facebook_url = 'https://www.facebook.com/ElPortalDelCabrito',
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/portal-del-cabrito-cabrito.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/portal-del-cabrito-comedor.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/portal-del-cabrito-horno.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/portal-del-cabrito-machitos.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/portal-del-cabrito-cabrito.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'addc0100-c44c-522b-9473-9ae0b7050418'; -- Portal del Cabrito
COMMIT;

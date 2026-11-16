-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-tresmarias.sql.
-- Temazcal Tres Marías: datos y fotos de su Facebook oficial (16 nov 2026).
-- Cuenta oficial: facebook.com/p/Temazcaltresmarias-100057669429190 (292 seguidores; última publicación 28 dic 2025):
--   Margarita 42, 427 182 4352 y temazcaltresmarias@gmail.com, los tres de la base. Presentación: "Un lugar de
--   relajación con instalaciones discretas, privadas, áreas verdes, cabina de masajes con fisioterapeutas, aroma
--   terapia, ocasiones especiales. TODO CON PREVIA CITA". No tiene web ni Instagram.
-- Descartados como fuente:
--   - facebook.com/Temazcal-Tres-Marias-837830529648238: página vieja (última publicación de 2015), a la que lleva el
--     botón "Sitio web" de su ficha de Google.
--   - Ficha de Google (sin reclamar): horario diario de 7 a 21 h; Fresha lo copia y dice que el negocio no es su cliente.
--     No se usa el horario.
--   - tequisquiapan.com.mx (agencia "Spaviajes"): paquetes de $1,700 y $2,300; es un tercero, no se usan sus precios.
-- Pin: el de su ficha de Google (20.4905395, -99.9329941), a ~20 m del del DENUE.
-- Fotos de su Facebook (16 ene 2025 y anteriores), sin texto ni personas, reducidas a 1600 px:
--   temazcal (fbid=1053300126602292), alberca (fbid=1053300069935631) y jacuzzi (fbid=927620892503550).
-- content_verified: dirección, teléfono y correo confirmados con su Facebook (además del DENUE y Turismo).
BEGIN;
UPDATE places SET
  latitude = 20.4905395,
  longitude = -99.9329941,
  short_description = $v$Temazcal privado con jardín, alberca y masajes, con cita$v$,
  full_description = $v$Temazcal en la colonia Santa María del Camino, por Bordo Blanco, a unos 5.6 km del centro. Es un lugar privado y discreto, con jardines, alberca, jacuzzi y una cabina de masajes con fisioterapeutas; también ofrece aromaterapia y prepara ocasiones especiales. Según el directorio de Turismo municipal, la sesión de temazcal se complementa con un masaje relajante y una exfoliación con sábila y sales minerales. Todo es con cita previa, y no publica horario ni precios: llama o escribe para reservar.$v$,
  amenities = ARRAY[$v$Temazcal$v$, $v$Masajes$v$]::text[],
  facebook_url = 'https://www.facebook.com/p/Temazcaltresmarias-100057669429190/',
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/temazcal-tres-marias-temazcal.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/temazcal-tres-marias-alberca.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/temazcal-tres-marias-jacuzzi.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/temazcal-tres-marias-temazcal.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'f7ca279f-386e-51a8-96eb-db5c93407f5f'; -- Temazcal Tres Marías
COMMIT;

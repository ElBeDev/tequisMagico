-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-tonatiu.sql.
-- Temazcal Tonatiu Iquzayampa: datos y fotos de su web y sus cuentas oficiales (16 nov 2026).
-- Web: sites.google.com/view/temazcaltonatiuiquzayampa (Google Sites; su botón de WhatsApp marca 414 226 8107, el
--   teléfono de la base; enlaza a su Instagram y a su lugar en Google Maps). Página "Experiencias": menú con "precios
--   vigentes a diciembre 2026", Amado Nervo No. 7 Fuentezuelas, teléfonos 414 226 8107 y 414 219 2520.
--   - Temazcal: Quetzalcóatl (2 h; plática, té artesanal, baño de temazcal, aloe, exfoliantes, hidratantes, coctel de
--     frutas) $3,300 de 1 a 3 personas, $950 c/u desde 4. Xochitlcalli (4 h, con barro y masaje) desde 4: $2,750 c/u.
--     Huey Tlatoani (5 h, con barro, masaje y comida prehispánica) desde 4: $3,250 c/u. Yucatecuhtli (3 h) desde 4:
--     $1,850 c/u. Calmécac (3 h, con comida prehispánica) desde 4: $1,500 c/u.
--   - Extras: facial de barro $200; tinas de hierbas, de vino tinto (con copa y quesos), especial y de hielo; masaje
--     dentro del temazcal; masajes con barro.
--   - Habitación Izcalli: cama queen, tina para 2, regadera, internet y TV; $3,000 para 1 o 2 personas.
--   - Pin: su enlace de Google Maps (20.5591701, -99.9820024), a ~15 m del del DENUE.
-- Facebook facebook.com/temazcal.en.tequisquiapan (3.8 mil): teléfono 414 226 8107 y correo temazcal@live.com.mx,
--   los de la base. Instagram @temazcal_tequisquiapan, enlazado desde su web.
-- Fotos de su web (portada): interior del temazcal (fondo de la cabecera), piedra al rojo en olla de barro, hierbas y
--   vapor. Se descartaron las de clientes en primer plano y las que parecen de banco.
-- content_verified: teléfono, dirección y precios de su web propia, confirmados por su Facebook.
BEGIN;
UPDATE places SET
  latitude = 20.5591701,
  longitude = -99.9820024,
  short_description = $v$Temazcal tradicional con barro, tinas y comida prehispánica$v$,
  full_description = $v$Temazcal tradicional en la comunidad de Fuentezuelas, a unos 10 km del centro. Las experiencias empiezan con una plática y té artesanal, siguen con el baño de vapor con hierbas y piedras calentadas al fuego, y pueden sumar aplicación de barro, masaje, tinas de hierbas, de vino tinto o de hielo, y comida prehispánica hecha con ingredientes orgánicos de la zona. Según su menú (precios vigentes a diciembre de 2026), la sesión de temazcal de unas 2 horas cuesta $3,300 para 1 a 3 personas o $950 por persona a partir de 4, y los paquetes de 3 a 5 horas van de $1,500 a $3,250 por persona en grupos de 4 o más. Tiene una habitación, Izcalli, con cama queen y tina para dos, a $3,000 la noche para una o dos personas. Se reserva por WhatsApp; lleva toalla, sandalias y traje de baño.$v$,
  website = 'https://sites.google.com/view/temazcaltonatiuiquzayampa',
  whatsapp_number = '414-226-8107',
  amenities = ARRAY[$v$Temazcal$v$, $v$Masajes$v$]::text[],
  instagram_url = 'https://www.instagram.com/temazcal_tequisquiapan/',
  facebook_url = 'https://www.facebook.com/temazcal.en.tequisquiapan',
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/temazcal-tonatiu-interior.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/temazcal-tonatiu-fuego.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/temazcal-tonatiu-hierbas.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/temazcal-tonatiu-vapor.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/temazcal-tonatiu-interior.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'c4061a09-3138-5fce-897d-668bc2d1d791'; -- Temazcal Tonatiu Iquzayampa
COMMIT;

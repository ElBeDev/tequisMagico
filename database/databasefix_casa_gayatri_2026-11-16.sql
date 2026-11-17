-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-gayatri.sql.
-- Casa Gayatri: datos y fotos de sus cuentas oficiales (16 nov 2026).
-- Cuentas: Facebook facebook.com/CasaGayatriTx (8.9 mil; 414 226 3552 y casagayatritx@gmail.com, los de la base;
--   Circunvalación #8, Col. Santa Fe) e Instagram @casagayatri.temazcal (5,634; WhatsApp wa.me/524142263552 y su
--   ubicación en Google Maps). Muy activas. No tiene web (casagayatri.com no existe).
-- Bio de Instagram: "Casita Holística de Tradiciones Ancestrales: Temazcalli, Yoga, Masajes, Hospedaje. Temazcal todos
--   los fines de semana". Facebook: "Temazcallis, Masajes, Yoga, Alberca Natural, Comida Saludable, Hospedaje
--   petfriendly".
-- Publicación fijada "Programación Noviembre" (30 oct 2026): temazcal todos los fines de semana, temazcal privado,
--   hospedaje petfriendly, masaje relajante (entre semana, o en promoción con temazcal el fin de semana), alberca
--   natural, comida saludable, boda holística; calendario con temazcal casi todos los domingos a la 1 o 2 pm y otras
--   fechas en sábado; talleres (yoga e inmersión en hielo) y retiros. Lámina 4: "El costo del temazcal es de $350 por
--   persona. Incluye el baño de vapor Temazcalli y al finalizar fruta y té. ¡También podrás disfrutar de la Alberca
--   natural! Reserva: 414 226 3552". El calendario también anuncia ceremonias con plantas (ayahuasca, peyote, San
--   Pedro); no se mencionan en la ficha.
-- Pin: el de su enlace de Google Maps (20.5106012, -99.8953314), a ~20 m del del DENUE.
-- Fotos de su Facebook (7 oct 2026), sin texto ni personas, reducidas a 1600 px: temazcal (fbid=1401153138883211),
--   fuego con las piedras (1401153112216547), camino empedrado (1401153115549880) y jardín (1401153132216545).
-- content_verified: teléfono, correo y dirección confirmados con sus cuentas (además del DENUE y Turismo).
BEGIN;
UPDATE places SET
  latitude = 20.5106012,
  longitude = -99.8953314,
  short_description = $v$Casa holística con temazcal cada fin de semana, masajes y yoga$v$,
  full_description = $v$Casa holística en la colonia Santa Fe, a unos 1.4 km de la plaza, con temazcal tradicional todos los fines de semana. La ceremonia del temazcalli se hace con las piedras calentadas en el fuego, cantos y plantas, y en noviembre de 2026 costaba $350 por persona, con fruta y té al final y acceso a su alberca natural. Las fechas y horas cambian cada mes y las publica en su calendario de Instagram. También ofrece temazcal privado, masajes entre semana, yoga, talleres, comida saludable y hospedaje pet friendly, y organiza retiros y bodas holísticas. Se reserva por WhatsApp.$v$,
  whatsapp_number = '414-226-3552',
  amenities = ARRAY[$v$Temazcal$v$, $v$Masajes$v$, $v$Yoga$v$, $v$Pet Friendly$v$]::text[],
  instagram_url = 'https://www.instagram.com/casagayatri.temazcal/',
  facebook_url = 'https://www.facebook.com/CasaGayatriTx',
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/casa-gayatri-temazcal.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/casa-gayatri-fuego.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/casa-gayatri-camino.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/casa-gayatri-jardin.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/casa-gayatri-temazcal.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '6663fe98-2d68-549b-968c-e48f9b4f15e9'; -- Casa Gayatri
COMMIT;

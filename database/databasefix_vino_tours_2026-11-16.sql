-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-vinotours.sql.
-- Vino Tours: datos y foto de sus cuentas oficiales (16 nov 2026).
-- Cuentas: Facebook facebook.com/Vinotours1 (6.3 mil; Niños Héroes 42, reservaciones@vinotours.mx, teléfono
--   414 104 4801) e Instagram @vino_tours (1,448; misma dirección, enlaza a su Facebook; reserva por
--   wa.me/+524141044801). Activas (última publicación oct 2026).
-- Teléfono: el de sus cuentas, 414 104 4801 (el de la ficha de tequis.travel). El DENUE y el PDF de Turismo 2025 dan
--   414 111 0439; no aparece en sus cuentas.
-- Web: vinotours.mx (la que enlaza su Facebook) responde con un bloqueo de Cloudflare ("Sorry, you have been blocked")
--   también en un navegador normal. Se deja sin website.
-- Publicación fijada (1 ago 2025): "Ruta del Arte, Queso y Vino: todos los días, salimos de Tequisquiapan, duración
--   7 hrs (aprox.)": pueblos mágicos, cavas subterráneas, viñedos y cata de quesos de vaca, cabra y oveja. Destacadas:
--   minas de ópalo, tour por Querétaro, leyendas. 25 oct 2026: 6.ª edición de Noches de Leyendas, 1 nov 2026. Sin
--   precios publicados.
-- Foto: barricas en la Fiesta de la Vendimia (Facebook, 4 jul 2026, fbid=1503530345119951). Casi todo lo demás son
--   carteles, algunos con imágenes de banco o de IA.
-- content_verified: dirección y correo de la base confirmados con sus cuentas.
BEGIN;
UPDATE places SET
  phone_number = '414-104-4801',
  whatsapp_number = '414-104-4801',
  short_description = $v$Tours diarios por la Ruta del Arte, Queso y Vino$v$,
  full_description = $v$Agencia de tours en Niños Héroes 42, a unos 300 metros de la plaza, especializada en la Ruta del Arte, Queso y Vino. Su tour sale todos los días desde Tequis, dura unas 7 horas y pasa por pueblos mágicos, cavas subterráneas, viñedos y una cata de quesos de vaca, cabra y oveja. También lleva a las minas de ópalo y por Querétaro, arma paquetes para la vendimia y cada noviembre organiza Noches de Leyendas, un recorrido nocturno por los callejones del pueblo. No publica precios: se reserva por WhatsApp.$v$,
  instagram_url = 'https://www.instagram.com/vino_tours/',
  facebook_url = 'https://www.facebook.com/Vinotours1',
  image_urls = ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/vino-tours-barricas.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/vino-tours-barricas.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'd7e0af85-b8b5-5009-af37-d9c6ade2d8ea'; -- Vino Tours
COMMIT;

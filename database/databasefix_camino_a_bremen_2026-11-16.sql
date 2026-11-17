-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-bremen.sql.
-- Camino a Bremen: datos y fotos de sus cuentas oficiales (16 nov 2026).
-- Cuentas: Facebook facebook.com/caminoabremen (5.8 mil; 98 % de 543 opiniones; "Deliciosa Pizza, Pasta y Pan
--   artesanales"; teléfono 414 273 4113; caminoabremendelicatessen@gmail.com; "Guillermo Prieto Norte 19, entre calles
--   Moctezuma y 16 de Septiembre, en contraesquina del Hotel Posada del Virrey y Hotel Gran Misiones") e Instagram
--   @caminoabremen (37.1 mil; "Pasta fresca & pizza & pan. Cochinita pa'l desayuno. Ahora solo en ... Tequisquiapan").
--   Activas (nov 2026).
-- Teléfono [CONFLICTO resuelto]: 414 273 4113 (sus cuentas); el "427 273 4113" del PDF de Turismo es errata de lada y
--   el 414 104 1090 de tequis.travel no aparece en sus cuentas.
-- Publicaciones: desayuno de cochinita sábados y domingos de 8:30 a 13 h; pasta fresca y trafilada, ravioles, ossobuco,
--   pay artesanal, panadería; horno de leña. El único horario completo publicado es de abril de 2023: no se usa.
-- Fotos de su Facebook (abril de 2023), sin texto: pizza de pepperoni (fbid=712991024163955), fachada con su mural
--   (707992257997165) y horno de leña (702113328585058).
BEGIN;
UPDATE places SET
  subcategory = $v$Pizzería$v$,
  phone_number = '414-273-4113',
  email = 'caminoabremendelicatessen@gmail.com',
  short_description = $v$Pizza al horno de leña, pasta fresca y pan artesanal$v$,
  full_description = $v$Restaurante de pizza al horno de leña, pasta fresca y pan artesanal en Guillermo Prieto Norte 19, a unos 180 metros de la Plaza Miguel Hidalgo, frente a los hoteles Posada del Virrey y Gran Misiones. Además de pizzas y pastas tiene ravioles, ossobuco, pays y su propia panadería, y los sábados y domingos de 8:30 a 13 h sirve desayunos de cochinita. Toma reservaciones; confirma el horario antes de ir.$v$,
  price_range = 'moderate',
  amenities = ARRAY[$v$Desayunos$v$, $v$Reservaciones$v$]::text[],
  tags = ARRAY[$v$Centro$v$, $v$Italiana$v$]::text[],
  instagram_url = 'https://www.instagram.com/caminoabremen/',
  facebook_url = 'https://www.facebook.com/caminoabremen',
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/camino-a-bremen-pizza.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/camino-a-bremen-fachada.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/camino-a-bremen-horno.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/camino-a-bremen-pizza.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '3383db50-565a-51b9-a480-00c4b4a1279c'; -- Camino a Bremen
COMMIT;

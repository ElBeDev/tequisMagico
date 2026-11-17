-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-lacrepe.sql.
-- La Crepe (La Crepe, Sabor Amor): datos y fotos de sus cuentas oficiales (16 nov 2026).
-- Cuentas: Facebook facebook.com/CrepasTequis ("La Crepe, Sabor Amor", 2.5 mil; 442 321 1950, el teléfono de la base;
--   lacrepetx@gmail.com; "Calle Ezequiel Montes 142, Centro, Plaza Los Arcos, Local 1. Calle Juárez #21") e Instagram
--   @la_crepetx (1,370; "Crepas, waffles, malteadas y más"). Activas (última publicación, 9 nov 2026).
-- Dos sucursales: Plaza Los Arcos local 1 ("a un costado del Hotel del Parque y La Pila", la de esta ficha) y Juárez 21
--   local 3 ("a unos pasos de la Capilla de Padre Jesús"). La ficha se queda en Plaza Los Arcos y menciona la otra.
-- Su cartel de junio 2026 (Facebook, 30 may 2026): "Since 2016"; martes "CERRADO"; lunes "abierto sólo en sucursal
--   Juárez"; sandwich crepe $90 de desayuno, waffles + capuchino $125, crepa salada + limonada $110; combo crepa +
--   malteada $100 (ago 2026). Crepas dulces y saladas, waffles, marquesitas, baguettes, malteadas, frappés, smoothies.
-- Horario: una nota de Despierta Tequis (8 jul 2026, en su página) da miércoles a domingo de 16:00 a 22:00, pero su propio
--   cartel anuncia happy hour de 15:00 a 17:00: no coinciden, así que solo se ponen los días en la descripción.
-- Fotos de su Facebook: crepa de chocolate (fbid 1563781371969912, 20 abr 2026), waffles con frutos rojos
--   (1573292071018842, 1 may 2026; recortada para quitar el logo) e interior (1561871598827556, 18 abr 2026).
BEGIN;
UPDATE places SET
  email = 'lacrepetx@gmail.com',
  instagram_url = 'https://www.instagram.com/la_crepetx/',
  facebook_url = 'https://www.facebook.com/CrepasTequis',
  short_description = $v$Crepas, waffles y malteadas en la Plaza Los Arcos, junto al Parque La Pila$v$,
  full_description = $v$Crepería en la Plaza Los Arcos, local 1, junto al Parque La Pila, a unos 400 metros de la Plaza Miguel Hidalgo; abrió en 2016 y tiene una segunda sucursal en Juárez 21, a unos pasos de la Capilla de Padre Jesús. Prepara crepas dulces y saladas con masa de receta casera, waffles, marquesitas y baguettes, con malteadas, frappés, smoothies y café; de desayuno, sandwich crepa. El local está decorado con murales y tiene libros para leer. Cierra los martes; los lunes solo abre la sucursal de Juárez. Confirma horario antes de ir.$v$,
  price_range = 'budget',
  amenities = ARRAY[$v$Desayunos$v$]::text[],
  tags = ARRAY[$v$Café$v$, $v$Postres$v$, $v$Centro$v$]::text[],
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/la-crepe-crepa-chocolate.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/la-crepe-waffles.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/la-crepe-interior.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/la-crepe-crepa-chocolate.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '4be92cb3-12aa-5618-b4f0-fdd3c3a279bc'; -- La Crepe
COMMIT;

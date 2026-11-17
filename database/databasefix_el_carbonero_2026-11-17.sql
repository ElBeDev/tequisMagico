-- APLICADA el 2026-11-17 en la base del VPS, con respaldo previo en /root/respaldos/places-20261117-carbonero.sql.
-- El Carbonero: datos y fotos de su cuenta oficial (17 nov 2026).
-- Cuenta: Instagram @carbonero.tequis ("Carbonero", 848; "Cocina de Tierra, Mar y Leña"; "Ezequiel Montes #140",
--   la dirección de la base; 414 107 8866). Activa (14 nov 2026).
-- El Facebook que se dio (facebook.com/p/Carbonero-tequis-100091130532077) es OTRO negocio: un puesto de hamburguesas,
--   hot dogs y tacos en la avenida Nogales, Bordo Blanco (8 seguidores, 2023). No se usa.
-- Teléfono [CONFLICTO resuelto]: la base tenía 442-852-1008 (Turismo y DENUE); su cuenta da 414 107 8866 (reservas y
--   cotizaciones, nov 2026).
-- Lo que publica: cortes (rib eye a la francesa, arrachera), mariscos y aguachile, hamburguesas, chiles en nogada en
--   temporada; vino y cerveza; desayuno sábados y domingos de 9 a 12 h (ago 2026), con buffet desde el 24 oct 2026
--   ($220); música en vivo (sábado 14 nov 2026, 17 h) y noches de rock los jueves; partidos en pantalla; "somos pet
--   friendly" (21 ago 2026); área de juegos con resbaladilla y puente colgante (abr 2024); posadas y eventos privados;
--   bazar de emprendedores. Horario general: no lo publica (solo el de promociones), se queda sin horario.
-- Fotos de su Instagram, de 2024 (las de 2026 son carteles con texto): jardín (C5JNAA9OquO, 7 abr 2024), letrero de la
--   entrada (C6eLO5aO5hp, 2 may 2024), rib eye (C71-XFwpnXQ, 5 jun 2024; recortada para quitar el logo) y área de juegos
--   (C58hYLLiqfb, 19 abr 2024; recortada para quitar el logo).
BEGIN;
UPDATE places SET
  phone_number = '414-107-8866',
  instagram_url = 'https://www.instagram.com/carbonero.tequis/',
  short_description = $v$Cortes, mariscos y cocina a la leña en un jardín con área de juegos$v$,
  full_description = $v$Restaurante de cocina de tierra, mar y leña en Ezequiel Montes 140, a unos 380 metros de la Plaza Miguel Hidalgo, con mesas en un jardín bajo los árboles. Sirve cortes como el rib eye y la arrachera, mariscos y aguachile, hamburguesas y platillos de temporada, con vino y cerveza; los sábados y domingos, de 9 a 12 h, hay desayuno buffet. Tiene área de juegos para niños, admite mascotas, pasa partidos y presenta música en vivo algunos fines de semana; también organiza posadas y eventos privados. Reservaciones al 414 107 8866. Confirma horario antes de ir.$v$,
  price_range = 'moderate',
  amenities = ARRAY[$v$Jardín$v$, $v$Área de juegos$v$, $v$Pet Friendly$v$, $v$Música en vivo$v$, $v$Desayunos$v$, $v$Eventos privados$v$, $v$Reservaciones$v$]::text[],
  tags = ARRAY[$v$Cortes$v$, $v$Mariscos$v$, $v$Familiar$v$, $v$Centro$v$]::text[],
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/carbonero-jardin.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/carbonero-entrada.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/carbonero-rib-eye.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/carbonero-area-de-juegos.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/carbonero-jardin.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '7e382f7c-268d-540b-8889-74a1ced705aa'; -- El Carbonero
COMMIT;

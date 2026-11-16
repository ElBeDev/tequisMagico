-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-mexicanaole.sql.
-- Queserías La Mexicana Olé con su web, sus cuentas oficiales y una foto propia (16 nov 2026).
-- Fuentes:
--   lamexicanaole.com (enlazada desde su Instagram): página "en construcción" de WordPress; da el 414 104 2823 (el de la
--     base) y tres sucursales: Centro Histórico de Querétaro (Hidalgo 5), La Magdalena (Tequis) y Centro (Tequis).
--   queserias-la-mexicana-ole.ueniweb.com: página hecha por UENI (constructor de páginas) con texto de plantilla y fotos de
--     Shutterstock; no se usan sus fotos. Sí sus datos: Niños Héroes 42 local 5, diario de 10:00 a 20:00, precios "desde"
--     ($80 quesos de vaca, cabra y oveja; $220 vinos de la región; $60 salsas y mermeladas).
--   Instagram @lamexicanaoleoficial (1,404 publicaciones, activa al 16 nov 2026): "Tienda de vinos, Quesos, Cervezas,
--     Licores y Alimentos Gourmet"; desayunos, café, pizzas, pastas, chapatas, cortes y tablas de queso; maridajes de
--     quesos de cabra de Querétaro; la sucursal pionera está en Carrizal 4 y vende "exclusivamente a mostrador" (6 nov 2026).
--   Facebook "Queserías La Mexicana" (100057486910411): "Niños heroes Plaza Gourmet local 5", 414 273 5850; sin publicar
--     desde marzo de 2022.
-- website: pasa de la página de UENI a su dominio propio, lamexicanaole.com (aunque hoy esté en construcción).
-- Horario: el de UENI (10 a 20 h) va en el texto; con los desayunos puede abrir antes y no hay otra fuente.
-- Foto: la fachada de Carrizal 4 (Instagram, 6 nov 2026, sin marca de IA). Se descartaron las que Instagram marca como
--   IA, los carteles, las de la sucursal de Querétaro y las que no dicen de qué sucursal son. Créditos en
--   docs/datos/creditos-imagenes.md.
-- content_verified = true: web propia con el mismo teléfono; dirección de Facebook y UENI igual a la base.
BEGIN;
UPDATE places SET
  short_description = $v$Tienda gourmet de quesos y vinoteca, con desayunos y maridajes$v$,
  full_description = $v$Tienda gourmet y vinoteca con quesos de vaca, cabra y oveja, carnes frías, salsas, mermeladas, cerveza artesanal y vinos de la región y de otros países. Nació en la calle Carrizal 4, en el centro, donde sigue su primera sucursal, con venta para llevar; tiene otra en Niños Héroes 42, a unos 600 metros de la plaza, otra en el Barrio de la Magdalena y una más en el centro histórico de Querétaro. Además de la tienda, sirve desayunos, café, pizzas, pastas, cortes y tablas de quesos, y prepara maridajes de quesos y vinos. En noviembre de 2026 su página de UENI daba de 10 a 20 h todos los días, con quesos desde $80 y vinos de la región desde $220.$v$,
  website = 'https://www.lamexicanaole.com',
  instagram_url = 'https://www.instagram.com/lamexicanaoleoficial/',
  facebook_url = 'https://www.facebook.com/profile.php?id=100057486910411',
  price_range = 'moderate',
  amenities = ARRAY[$v$Desayunos$v$, $v$Para llevar$v$]::text[],
  tags = ARRAY[$v$Quesos$v$, $v$Vino$v$, $v$Centro$v$]::text[],
  image_urls = ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/la-mexicana-ole-carrizal.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/la-mexicana-ole-carrizal.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '07891ab8-57e9-51dd-8835-d83715910fb2'; -- Queserías La Mexicana Olé
COMMIT;

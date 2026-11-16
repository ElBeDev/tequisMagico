-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-vinicola-tequis.sql.
-- Vinícola Tequisquiapan con su web, sus redes y fotos propias (16 nov 2026).
-- La ficha decía "no tiene web", pero sí la tiene: vinicolatequisquiapanboutique.com (Webflow). Es suya: misma
-- dirección (Av. Coahuila Lt13 Mz27, La Charretera) y mismo teléfono (55 6126 2983) que el DENUE y tequis.travel.
-- Redes oficiales (enlazadas desde la web): Facebook "Vinicola Tequisquiapan" (facebook.com/DeliceCatembe, activo: el
-- 5 nov 2026 publicó su participación en Tejedores de Luz) e Instagram @vinicola_tequisquiapan_ (misma dirección en
-- la bio, poco activo desde 2025).
-- Fuentes:
--   Web: historia (Emilio Ochoa Pulido, Navarra; fundada formalmente en Tequis en 2010), vinos "naturales, artesanales
--     y sin sulfitos" con su ficha (Mussa, Desliz, Delice Salvador Seco, Delice Rossé, Blanc d'Blancs, blanco y tinto
--     espumosos, Sinffonia tipo oporto, Cabernet Sauvignon, Malbec, Shirah, Sangiovese), cata de vinos y cata maridaje
--     comida, desayunos sábados y domingos de 10 a 12 "a partir del 29 de junio 2024", horario "Lunes a Domingo de
--     12:00 p.m. a 5:00 p.m.", correo Delicecatembe@gmail.com.
--   Facebook: martes a domingo de 12 a 17 h y lunes cerrado, "actualizado hace aproximadamente 5 años" [CONFLICTO con la
--     web en el lunes: se menciona en el texto, no va a schedule_json]. Vendimia el 27 jul 2024 (también Turismo municipal).
--   Precios: hoteltoscanadetequisquiapan.com/vincola-tequisquiapan (el hotel de enfrente, enlazado desde el Instagram de
--     la vinícola), revisada el 16 nov 2026: cata $650 y cata maridaje comida $1,300 por persona, mínimo 10 personas.
-- Fotos: tres de su web (salón de catas vacío, mesa de cata montada y mesa de desayuno) y una de su Instagram (patio,
--   26 jul 2022). Se descartaron las de personas como protagonistas (catas, vendimia, eventos), la del producto en
--   render, la de la plaza del pueblo con globos (no es la vinícola) y la del patio durante un evento. Créditos en
--   docs/datos/creditos-imagenes.md. Antes de aplicar: copiar las 4 a /srv/tequis/uploads/lugares/.
-- content_verified = true: web propia, más tequis.travel y el DENUE.
BEGIN;
UPDATE places SET
  short_description = $v$Vinícola boutique de 2010, con catas y vinos de uva Salvador$v$,
  full_description = $v$Vinícola boutique en La Charretera, a 1.6 km de la plaza, fundada en 2010 por la familia Ochoa, que trajo de Navarra una tradición vinícola de más de cien años. Hace vinos artesanales que describe como naturales y sin sulfitos: tintos de uva Salvador (Mussa, Desliz, Delice Salvador Seco, un tinto espumoso y Sinffonia, tipo oporto), Cabernet Sauvignon, Malbec, Syrah y Sangiovese, además de un rosado, un blanco y un blanco espumoso. Tiene salón de catas y patio con sombrillas. En noviembre de 2026, la cata de tres copas con tabla de quesos y carnes frías costaba $650 por persona y la cata maridaje con comida $1,300, para grupos de 10 personas o más, según la web del hotel La Toscana, que está enfrente. Su web anuncia desayunos los sábados y domingos de 10 a 12 h. Abre de 12 a 17 h; su Facebook dice que los lunes cierra: confírmalo antes de ir.$v$,
  website = $v$https://www.vinicolatequisquiapanboutique.com$v$,
  email = $v$Delicecatembe@gmail.com$v$,
  whatsapp_number = $v$55-6126-2983$v$,
  price_range = 'expensive',
  amenities = ARRAY[$v$Terraza$v$, $v$Desayunos$v$, $v$Reservaciones$v$, $v$Bodas y eventos$v$]::text[],
  tags = ARRAY[$v$Vino$v$]::text[],
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/vinicola-tequisquiapan-salon.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/vinicola-tequisquiapan-patio.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/vinicola-tequisquiapan-cata.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/vinicola-tequisquiapan-desayuno.jpg$v$
  ]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/vinicola-tequisquiapan-salon.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '0cf02114-c165-5d87-b904-b608cbcc1ad5'; -- Vinícola Tequisquiapan
COMMIT;

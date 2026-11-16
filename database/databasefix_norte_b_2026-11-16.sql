-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-norteb.sql.
-- Norte B con su web, vinos, cervezas y fotos propias (16 nov 2026).
-- Fuentes:
--   norteb.mx (portada, con la verificación de edad): dos familias de vinos, Bicharraco (Cometa merlot-malbec, Grillo
--     rosado de cinsault, Mantis blanco de xarel·lo 2021, Libélula espumoso brut) y Corre Que Te Pillo (malbec seco y
--     malbec dulce 2021, espumoso rosado 2020); cinco cervezas con nombre en hñähñu: Hähä (mex-lager), Tuthe (blonde ale),
--     Xene (american pale ale), Thuhu (red ale, munich dunkel), Kinde (espresso stout); "terrazas con grandes espacios
--     abiertos". Teléfono del pie: 427 224 6714.
--   norteb.mx/experiencias (revisada el 16 nov 2026, igual que el 10 nov): Japi (cerveza, 45 min, desde $390), Binu (vino,
--     45 min, desde $450), Zote (vino y cerveza, 75 min, desde $490), todas con quesos de Bocanegra.
--   Facebook e Instagram norteb.mx (ver databasefix_redes_vinedos_2026-11-16.sql): horario y "Reserva 427 224 6790".
-- Fotos de su web: entrada a la bodega de contenedores con el letrero (gente de espaldas), tabla de cervezas, cata de
--   vino y tabla de quesos (solo manos). Sustituyen a norte-b-bodega.jpg, una tira panorámica de 2500×907. Se
--   descartaron las de personas como protagonistas y las tiras panorámicas. Créditos en docs/datos/creditos-imagenes.md.
-- content_verified = true: web propia; la dirección coincide con tequis.travel y el directorio 2025, y el teléfono de
--   reservas con sus cuentas.
BEGIN;
UPDATE places SET
  short_description = $v$Viñedo y cervecería con catas de vino y cerveza con quesos$v$,
  full_description = $v$Viñedo y cervecería en el km 50 de la carretera estatal 200, en Fuentezuelas (el mismo kilómetro que Cava Bocanegra), con terrazas al aire libre. Hace dos familias de vino: Bicharraco (Cometa, merlot-malbec; Grillo, rosado de cinsault; Mantis, blanco de xarel·lo, y Libélula, espumoso brut) y Corre Que Te Pillo (malbec seco, malbec dulce y espumoso rosado). También hace cinco cervezas con nombre en hñähñu: Hähä (lager), Tuthe (blonde ale), Xene (pale ale), Thuhu (red ale) y Kinde (stout de espresso). Sus experiencias incluyen visita y degustación con quesos de Bocanegra. En noviembre de 2026, la de cerveza (Japi: 3 cervezas, 45 min) costaba $390; la de vino (Binu: 3 vinos, 45 min), $450, y la mixta (Zote: 2 vinos y 2 cervezas, 75 min), $490. Abre lunes, jueves y domingo de 11 a 18 h, y viernes y sábado de 11 a 21 h; martes y miércoles cierra. Se reserva al 427 224 6790.$v$,
  amenities = ARRAY[$v$Terraza$v$, $v$Reservaciones$v$]::text[],
  tags = ARRAY[$v$Vino$v$, $v$Cerveza$v$]::text[],
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/norte-b-entrada.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/norte-b-cervezas.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/norte-b-cata-vino.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/norte-b-quesos.jpg$v$
  ]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/norte-b-entrada.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '1d7fc20f-6fe1-55a2-b9d9-2acb315dcfef'; -- Norte B
COMMIT;

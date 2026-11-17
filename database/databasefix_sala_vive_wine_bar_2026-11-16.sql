-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-salavive.sql.
-- "Wine Bar Freixenet" es Sala Vivé Wine Bar, el wine bar de Freixenet de México en el centro (16 nov 2026).
-- Cuenta: Instagram @winebarsalavive ("Sala Vivé Wine Bar", 9,044 seguidores; "Descubre los vinos del grupo
--   Henkell-Freixenet"; ubicaciones Tequisquiapan y Viñedos Sala Vivé), activa (última publicación, 11 nov 2026).
--   Enlaza a su web, salavive.mx (la de la vinícola, ficha "Freixenet México").
-- Carta 2026 de la sucursal (salavive.mx/wp-content/uploads/2025/12/Menu_WineBarTx_2026.pdf): "Calle Juárez No. 4C,
--   Col. Centro, Tequisquiapan", la dirección de la base. Teléfono [CONFLICTO resuelto]: la carta dice
--   "01 441 273 3995", con la lada al revés; se queda 414-273-3995 (DENUE y Turismo; 414 es la de Tequis).
-- Carta: vino por copa de sus marcas (Sala Vivé, Viña Dolores, Petillant, Vivante) de $90 a $120, espumosos y tranquilos;
--   botellas españolas e italianas; cocteles con vino a $140; tapas a $55 (jamón serrano, chorizo a la sidra, chistorra,
--   tortilla española), tabla mixta de quesos de la región y carnes frías $390, stracciatella con miel $210.
--   Sommeliers, vino del mes y "Tasting del mes" (Instagram, nov 2026).
-- Horario: no lo publica (las historias "Horarios" son de hace tres años; el de la web es el del viñedo): sin horario.
-- Fotos de su web: fachada de la sucursal (uploads/2026/10/Wine-Bar-Tequisquiapan-1 y Wine-Bar-Tequisquiapan) y tapas
--   de su carta (uploads/2025/12/WB_01-3). Terraza en la azotea, visible en la fachada.
-- Cambia el nombre (y el slug): wine-bar-freixenet → sala-vive-wine-bar en web/lib/redirects.ts.
BEGIN;
UPDATE places SET
  name = $v$Sala Vivé Wine Bar$v$,
  subcategory = $v$Wine Bar$v$,
  website = 'https://salavive.mx/',
  instagram_url = 'https://www.instagram.com/winebarsalavive/',
  short_description = $v$Wine bar de Sala Vivé by Freixenet, a una cuadra de la plaza$v$,
  full_description = $v$Wine bar de Sala Vivé, la vinícola de Freixenet de México en Ezequiel Montes, en Juárez 4C, a unos 70 metros de la Plaza Miguel Hidalgo. Sirve por copa sus espumosos y vinos tranquilos (Sala Vivé, Viña Dolores, Petillant y Vivante), cocteles con vino y botellas españolas e italianas, con tapas, tablas de quesos de la región y carnes frías. Tiene sommeliers, vino del mes y una cata del mes de tres etiquetas, mesas en la banqueta y terraza en la azotea. Confirma el horario antes de ir.$v$,
  price_range = 'moderate',
  amenities = ARRAY[$v$Sommelier$v$, $v$Terraza$v$]::text[],
  tags = ARRAY[$v$Wine bar$v$, $v$Vinos$v$, $v$Centro$v$]::text[],
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/sala-vive-wine-bar-fachada.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/sala-vive-wine-bar-tapas.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/sala-vive-wine-bar-terraza.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/sala-vive-wine-bar-fachada.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '540aef3a-0b45-5bb2-87f3-2e97fb434424'; -- antes "Wine Bar Freixenet"
COMMIT;

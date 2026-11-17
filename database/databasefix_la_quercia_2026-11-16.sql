-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-quercia.sql.
-- La Quercia Ristorante: datos y fotos de su Facebook oficial (16 nov 2026).
-- Cuenta: facebook.com/LaQuerciaTequis ("Laquerciaoficial"; "La Quercia es un restaurante de comida italiana";
--   teléfono 414 273 6211 y "Niños héroes 4", los de la base; laquercia73@gmail.com). Activa (9 nov 2026).
-- Su Facebook enlaza a laquerciatequis.com, que NO está registrado; laquercia.com.mx redirige a un sitio de apuestas
--   (ya anotado). Sin website.
-- Publicaciones de 2026: "Estamos listos para recibirte de 14:00 a 20:00 hrs. de Miércoles a Lunes"; pastas (penne
--   a la matriciana, lunes de pastas), pizzas, risotto, antipastos, ensaladas, tiramisú y vino; servicio a domicilio;
--   reservaciones. Sin precios.
-- Fotos de su Facebook, sin texto encima: pasta con camarones en su comedor (fbid=122256792530182995, 24 nov 2025) y
--   mesa puesta en su comedor de arcos (122180896676182995, 9 oct 2024). Casi todo lo demás son carteles con su logo.
BEGIN;
UPDATE places SET
  email = 'laquercia73@gmail.com',
  short_description = $v$Restaurante italiano de pastas y pizzas a una cuadra de la plaza$v$,
  full_description = $v$Restaurante italiano en Niños Héroes 4, a unos 70 metros de la Plaza Miguel Hidalgo, con un comedor de arcos y manteles. Prepara pastas como el penne a la amatriciana, pizzas, risotto, antipastos y ensaladas, con tiramisú de postre y carta de vinos. Abre de miércoles a lunes de 14 a 20 h; los martes cierra. Toma reservaciones y tiene servicio a domicilio.$v$,
  schedule_json = $v${"lunes": "14:00–20:00", "martes": "cerrado", "miércoles": "14:00–20:00", "jueves": "14:00–20:00", "viernes": "14:00–20:00", "sábado": "14:00–20:00", "domingo": "14:00–20:00"}$v$::jsonb,
  price_range = 'moderate',
  amenities = ARRAY[$v$Reservaciones$v$, $v$Delivery$v$]::text[],
  facebook_url = 'https://www.facebook.com/LaQuerciaTequis',
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/la-quercia-pasta.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/la-quercia-comedor.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/la-quercia-pasta.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '33592d4d-57f6-5c63-a471-e733acd632ea'; -- La Quercia Ristorante
COMMIT;

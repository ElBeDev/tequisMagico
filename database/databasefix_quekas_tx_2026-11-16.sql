-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-quekas.sql.
-- Quekas TX: datos y fotos de su Facebook oficial (16 nov 2026).
-- Cuenta: facebook.com/QueksTx ("Quekas Tequis", 704; "5 de Mayo No.20", la dirección de la base; teléfono
--   414 226 1373; "Quesadillas estilo único en Tequisquiapan, rellenas de deliciosos guisados. También ofrecemos
--   gorditas..."). Activa (30 oct 2026). Cartel: "Entrega sin costo en zona centro o recoge en establecimiento para
--   llevar. 4142261373". Su logo: gorditas, sopes, huaraches. Otro cartel: huevos, frijolitos, chilaquiles y café.
-- Teléfono: el de su Facebook y sus carteles (414 226 1373); el 414 107 8130 de la base (Turismo) no aparece.
-- Sin horario ni precios publicados (un anuncio de vacante da 9:00 a 18:00 de lunes a domingo para el personal; no se
--   usa como horario del local).
-- Fotos de su Facebook: fachada con el toldo "Quekas Tequis" (fbid=907379441393751, 1 abr 2024) y quesadillas doradas
--   con consomé (fbid=1061554505976243, 30 oct 2024). Casi todo lo demás son fotos del pueblo.
BEGIN;
UPDATE places SET
  phone_number = '414-226-1373',
  short_description = $v$Quesadillas de guisado, gorditas y desayunos, a dos cuadras de la plaza$v$,
  full_description = $v$Fonda de antojitos en 5 de Mayo 20, a unos 210 metros de la Plaza Miguel Hidalgo, conocida por sus quesadillas rellenas de guisados. También prepara gorditas, sopes, huaraches y desayunos con huevos, chilaquiles y café. Entrega sin costo en la zona centro o se puede pedir para llevar. No publica horario ni precios: confirma antes de ir.$v$,
  price_range = 'budget',
  amenities = ARRAY[$v$Desayunos$v$, $v$Para llevar$v$, $v$Delivery$v$]::text[],
  facebook_url = 'https://www.facebook.com/QueksTx',
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/quekas-tx-quesadillas.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/quekas-tx-fachada.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/quekas-tx-quesadillas.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '8d3e175a-5c6a-566a-a207-e368fc3fa0de'; -- Quekas TX
COMMIT;

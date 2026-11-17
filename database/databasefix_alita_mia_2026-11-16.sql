-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-alitamia.sql.
-- Alita Mía: datos, menú y fotos de sus cuentas oficiales (16 nov 2026).
-- Cuentas: Facebook facebook.com/AlitamiaTx ("Alita Mía", 2.9 mil; "Restaurante de comida rápida"; WhatsApp Tequis
--   414 107 8338, el teléfono de la base; alitamiatx@gmail.com) e Instagram @alitamiaoficial (1,083). Activas (nov 2026).
--   Tiene otra sucursal en San Juan del Río (Hacienda San Nicolás 89, desde oct 2025), fuera de Tequis.
-- Dirección [CONFLICTO resuelto]: sus cuentas dan "carretera, Laguna de Agua Brava 115, Col. La Lagunita"; la base tenía
--   la de Turismo, mal escrita ("Carretera Federal 120 km 200 is a local 3"). El pin de la base (sobre la carretera
--   a San Juan del Río) se queda: OpenStreetMap no tiene esa calle para afinarlo.
-- Horario (cartel de Instagram, 1 jun 2026): "Miércoles a Domingo 2:00 pm a 9:00 pm"; lunes y martes cerrado. Pedidos
--   solo por WhatsApp ("NO tomamos pedidos por llamada"); "Envío a domicilio con costo extra".
-- Menú con precios (Instagram, 15 jul 2026): 5 alitas $80, 10 $160, 20 $320; boneless 250 g $95 a 1 kg $380; papas
--   $50, aros de cebolla y papas gajo $59, dedos de queso $73; hamburguesa Suprema de pollo $135 ($180 en paquete);
--   nidos $135; plato mixto $285; paquetes de $249 a $769; 11 salsas (búfalo, mango habanero, tamarindo morita,
--   parmesano hot, lemon pepper, BBQ...); flan napolitano de cajeta $45. No es bar: cambia la subcategoría.
-- Fotos de su Instagram, sin la etiqueta de "Contenido generado con IA" que llevan otras de la cuenta (se descartó
--   DfX3Mzqhr1o por eso): alitas tamarindo morita (DT1OjBbgQHS, 22 ene 2026), hamburguesa Suprema (DTiwUIPAfX7, 15 ene
--   2026) y alitas parmesano hot (DTgf_fdAeIG, 14 ene 2026).
BEGIN;
UPDATE places SET
  subcategory = $v$Restaurante$v$,
  address = $v$Laguna de Agua Brava 115, col. La Lagunita (sobre la carretera a San Juan del Río)$v$,
  email = 'alitamiatx@gmail.com',
  whatsapp_number = '414-107-8338',
  instagram_url = 'https://www.instagram.com/alitamiaoficial/',
  facebook_url = 'https://www.facebook.com/AlitamiaTx',
  short_description = $v$Alitas, boneless y hamburguesas de pollo sobre la carretera a San Juan del Río$v$,
  full_description = $v$Restaurante de alitas en la colonia La Lagunita, sobre la carretera a San Juan del Río, a unos 900 metros de la Plaza Miguel Hidalgo. Sirve alitas y boneless con once salsas, del búfalo y el mango habanero al tamarindo morita y el parmesano hot, además de la hamburguesa Suprema de pechuga de pollo, papas, aros de cebolla, dedos de queso y paquetes para compartir; de postre, flan napolitano de cajeta. Abre de miércoles a domingo de 14 a 21 h; los pedidos son solo por WhatsApp (414 107 8338) y tiene envío a domicilio con costo extra.$v$,
  schedule_json = $v${"lunes": "cerrado", "martes": "cerrado", "miércoles": "14:00–21:00", "jueves": "14:00–21:00", "viernes": "14:00–21:00", "sábado": "14:00–21:00", "domingo": "14:00–21:00"}$v$::jsonb,
  price_range = 'budget',
  amenities = ARRAY[$v$Delivery$v$]::text[],
  tags = ARRAY[$v$Alitas$v$, $v$Hamburguesas$v$]::text[],
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/alita-mia-alitas-tamarindo.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/alita-mia-hamburguesa.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/alita-mia-alitas-parmesano.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/alita-mia-alitas-tamarindo.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '37597543-1d00-5b62-a2c7-908992e46718'; -- Alita Mía
COMMIT;

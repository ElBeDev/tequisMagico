-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-termas.sql.
-- Termas del Rey: revisión con su web y su Facebook oficial (16 nov 2026).
-- Teléfono resuelto: su Facebook (facebook.com/Termasdelreyparqueacuatico, 79 mil, enlaza a termasdelrey.com) y el
--   texto del pie de su web dan (441) 277 1525, el de la base. El 442 solo está en el enlace tel: de su web (errata).
--   Con eso, content_verified = true. WhatsApp de su Facebook: +52 1 442 467 5629. Correo gerencia@termasdelrey.com
--   (tiene MX). Instagram @termasdelrey, ya en la base, lo enlazan su web y su Facebook.
-- Horario: su web (Contacto) sigue diciendo viernes a domingo, pero su Facebook fijó el 17 sep 2026 "NUEVO HORARIO:
--   sábados y domingos de 9 a 18 h". Su última publicación (19 sep 2026) habla de "los últimos días" del verano, sin
--   anunciar cierre: se pone sábado y domingo y se pide confirmar fuera del verano.
-- Precios (portada de su web): taquilla $199 adultos, $125 niños; campamento $340 y $290; 15 % de descuento en línea.
-- Nosotros: "4 décadas"; albercas, toboganes, zona VIP, áreas verdes, palapas, lagos, cancha de voleibol, baños con agua
--   caliente, estacionamiento y seguridad 24 h. Portada: minisúper y snack bar. Zona VIP: vestidores, mesas, sillas,
--   asador y hieleras.
-- Pin: el mapa de su página de Contacto apunta al lugar de Google 0x90f1a429ef204b58, que está en 20.6187861,
--   -99.9132608. El de la base era aproximado (km 10).
-- Fotos: se agrega termas-del-rey-castillo.jpg (IMG_4449 de su web). Las de su galería llevan un panel de texto
--   (nombre y profundidad de cada alberca), "FamiliaCamping" es de banco y hay imágenes de Gemini: se descartan.
BEGIN;
UPDATE places SET
  latitude = 20.6187861,
  longitude = -99.9132608,
  full_description = $v$Parque acuático con cuatro décadas de historia, a 10 minutos de Tequis en el km 10 de la carretera a Ezequiel Montes, con toboganes, alberca de olas, chapoteaderos, fosa de clavados, lagos, cancha de voleibol, minisúper y snack bar. Tiene palapas, baños con agua caliente, zona de campamento con renta de casas de campaña y de asadores, y una zona VIP con costo aparte (vestidores, mesas, sillas, asador y hieleras) que se reserva. Según su web, la entrada en taquilla cuesta $199 adultos y $125 niños ($340 y $290 con campamento), con 15 % de descuento comprando en línea, y hay descuentos para adultos mayores, estudiantes, maestros, grupos, cumpleañeros y personas con discapacidad. Desde septiembre de 2026 abre sábados y domingos de 9 a 18 h; fuera del verano conviene confirmar por WhatsApp antes de ir.$v$,
  whatsapp_number = '442-467-5629',
  schedule_json = $v${"lunes": "cerrado", "martes": "cerrado", "miércoles": "cerrado", "jueves": "cerrado", "viernes": "cerrado", "sábado": "9:00–18:00", "domingo": "9:00–18:00"}$v$::jsonb,
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/termas-del-rey-castillo.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/termas-del-rey-campamento.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/termas-del-rey-isla.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/termas-del-rey-castillo.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'edf8fd31-93ef-5673-8ad5-7341d6fae02d'; -- Termas del Rey
COMMIT;

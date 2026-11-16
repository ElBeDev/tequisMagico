-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-biquette.sql.
-- La Biquette con sus cuentas oficiales y fotos propias (16 nov 2026).
-- Cuentas: Facebook facebook.com/QuesosLaBiquette (teléfono 414 112 3575, el de tequis.travel y del alta; dirección
--   "Carretera Ezequiel Montes–Tequisquiapan km 21.8, Col La Lagunita, entre verificentro y vivero") e Instagram
--   @quesoslabiquette (enlaza a labiquette.mx; "se elaboran siguiendo la tradición francesa").
-- labiquette.mx sigue sin resolver (10, 11 y 16 nov 2026): no va como website. El correo isabel@labiquette.mx es de ese
--   dominio; se cambia por el de sus publicaciones, quesoslabiquette@gmail.com.
-- Publicaciones fijadas de Facebook (15 sep 2023, 10 nov 2024 y 16 abr 2025, mismo texto): quesería y cava de quesos de
--   leche de cabra; frescos y madurados, de hongo blanco o azul, de pasta blanda o prensada (crottin y pirámide de hongo
--   azul); visita con explicación y degustación de 5 quesos (un fresco, un untable y tres madurados); "Todos los días de
--   9:30 a 5:30"; reservar por teléfono o WhatsApp al 414 112 3575. Lo repiten durante tres años y la página sigue activa
--   (oct 2026), así que el horario va a schedule_json.
-- Fotos de su Facebook, sin marca de IA: la cava (16 abr 2025), sus quesos etiquetados (4 may 2025) y las cabras en el
--   campo (20 sep 2025). Se descartaron los carteles, las fotos con texto encima (Mezcalovers Fest, carruseles numerados)
--   y las de stands en ferias. Créditos en docs/datos/creditos-imagenes.md.
-- content_verified = true: teléfono y dirección de sus propias cuentas, iguales a Turismo y el DENUE.
BEGIN;
UPDATE places SET
  short_description = $v$Quesos de cabra artesanales al estilo francés, con visita y degustación$v$,
  full_description = $v$Quesería de quesos de leche de cabra en La Lagunita, sobre la carretera a Ezequiel Montes, entre el verificentro y el vivero, a 1.6 km de la plaza. Hace sus quesos de forma artesanal siguiendo la tradición francesa, desde el cuidado de las cabras hasta la elaboración, sin conservadores ni colorantes: frescos y madurados, de hongo blanco o azul, de pasta blanda o prensada, como el crottin y la pirámide. Tiene cava de quesos y da visitas a la quesería, con una explicación de cómo se hacen y maduran y una degustación de cinco quesos (un fresco, un untable y tres madurados). Abre todos los días de 9:30 a 17:30; la visita se reserva por teléfono o WhatsApp.$v$,
  address = $v$Carretera Ezequiel Montes–Tequisquiapan km 21.8, La Lagunita (entre el verificentro y el vivero)$v$,
  phone_number = '414-112-3575',
  whatsapp_number = '414-112-3575',
  email = 'quesoslabiquette@gmail.com',
  instagram_url = 'https://www.instagram.com/quesoslabiquette/',
  facebook_url = 'https://www.facebook.com/QuesosLaBiquette',
  schedule_json = $j${"lunes": "9:30–17:30", "martes": "9:30–17:30", "miércoles": "9:30–17:30", "jueves": "9:30–17:30", "viernes": "9:30–17:30", "sábado": "9:30–17:30", "domingo": "9:30–17:30"}$j$::jsonb,
  amenities = ARRAY[$v$Reservaciones$v$]::text[],
  tags = ARRAY[$v$Quesos$v$]::text[],
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/la-biquette-cava.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/la-biquette-quesos.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/la-biquette-cabras.jpg$v$
  ]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/la-biquette-cava.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '61673c59-62e1-5547-b14f-2e6915311f76'; -- La Biquette
COMMIT;

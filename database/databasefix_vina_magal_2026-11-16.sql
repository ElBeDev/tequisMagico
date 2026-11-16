-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-magal.sql.
-- Viña Magal con datos y fotos de sus cuentas oficiales (16 nov 2026). No tiene web.
-- Cuentas oficiales: Instagram @vinamagal ("Reserva | 427-2290487" en la bio) y Facebook facebook.com/vinamagal
-- ("Reservaciones únicamente al 427-2290487", correo vinamagal@gmail.com, "Carretera 200 ... km 53"). Mismo teléfono,
-- correo y dirección que ya teníamos de tequis.travel, el directorio 2025 y queretaro.travel.
-- Fuentes:
--   queretaro.travel (ya usada al darla de alta): poco más de 4 ha, vino 100 % artesanal, etiqueta Parsionero, terraza
--     con vista al viñedo, cata con quesos y carnes frías.
--   Instagram: "Experiencias enoturísticas", "El venue perfecto para tu boda o evento social"; publicaciones de oct 2026.
--   Facebook: cartel de la vendimia 2026, sábado 1 de agosto, $900 (resuelve el [CONFLICTO] de
--     docs/datos/investigacion-agenda-2026-11.md). Horario: miércoles a domingo de 12:00 a 18:00, lunes y martes
--     cerrado, "actualizado hace aproximadamente 5 años" [FRÁGIL]: solo se menciona con aviso, no va a schedule_json.
-- Fotos: la terraza con la mesa montada frente al viñedo (Facebook, 2 jul 2026) y la tabla de quesos con vino
--   (Instagram, 19 oct 2026), sin marca de IA. Se descartaron: parejas y sesiones de fotos (personas como protagonistas),
--   carteles, los dos fresnos al atardecer (son de la parcela vecina, lo dice su propia publicación) y una foto de vides
--   en invierno de origen no confirmado. Créditos en docs/datos/creditos-imagenes.md.
-- Amenidades al vocabulario de docs/datos/base-de-datos.md (antes "Cata" y "Eventos privados", que ninguna página lee).
-- content_verified = true: teléfono, correo y dirección confirmados en sus propias cuentas y en Turismo.
BEGIN;
UPDATE places SET
  short_description = $v$Viñedo familiar con terraza frente a las vides y vino artesanal$v$,
  full_description = $v$Viñedo familiar de poco más de 4 hectáreas en el km 53 de la carretera estatal 200, con vino 100 % artesanal; su etiqueta principal es Parsionero. Tiene una terraza con vista al viñedo donde da catas con tabla de quesos y carnes frías, y se renta para bodas, comidas y eventos. Su vendimia de 2026 fue el sábado 1 de agosto, con boleto de $900. Se reserva solo por teléfono o WhatsApp, al 427 229 0487. Su Facebook da de miércoles a domingo de 12 a 18 h, cerrado lunes y martes, pero ese horario lleva años sin actualizarse: confírmalo antes de ir.$v$,
  address = $v$Carretera estatal 200 Querétaro–Tequisquiapan km 53, Pozo 4 “El Triángulo”$v$,
  price_range = 'expensive',
  amenities = ARRAY[$v$Terraza$v$, $v$Reservaciones$v$, $v$Bodas y eventos$v$]::text[],
  tags = ARRAY[$v$Vino$v$]::text[],
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/vina-magal-terraza.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/vina-magal-tabla.jpg$v$
  ]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/vina-magal-terraza.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'b7a72d9a-a81a-56ac-80bc-c0626f290ab1'; -- Viña Magal
COMMIT;

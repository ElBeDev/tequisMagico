-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-quiroz.sql.
-- Quesos Quiroz con sus cuentas oficiales y fotos de producto (16 nov 2026). No tiene web.
-- Cuentas: Facebook facebook.com/QuesosQuiroz ("Andador Morelos 5 Col. Centro", teléfono 414 273 2315: los mismos de
--   la base; "Los pioneros del queso en Tequisquiapan desde 1972. 100% artesanales"; restaurante "La Carreta") e
--   Instagram @quesosquiroz ("Pioneros del queso en Tequisquiapan desde 1972").
-- Publicaciones (nov 2025 – mar 2026):
--   - Tiendas: Andador Morelos 5; Madero esquina Colegio Militar 10B; Niños Héroes 34 (Tequis) y Juan Caballero y Ocio
--     402 local D, Bosques del Acueducto (Querétaro).
--   - Quesos: Bola especial para quesadillas, Manchego, La Pila, Piócolo, panela de canasto, provolone, Oaxaca, de cabra.
--   - La Carreta "cheese, wine & piano bar": gran reapertura el 12 dic 2025 en un "espacio renovado"; tablas, platillos y
--     coctelería; música en vivo (jazz, Big Band 12 mar 2026) y shows; reservas al 414 273 2315.
--   Su Instagram no publica desde marzo de 2026.
-- Horario: Facebook da 9:00–23:00 todos los días, "actualizado hace aproximadamente 5 años" [FRÁGIL]: va en el texto.
-- Fotos: dos fotos de producto de su Facebook sin texto encima (1 ene 2026: Manchego, Bola y La Pila; 20 nov 2025:
--   Piócolo). No tiene fotos del local ni de La Carreta: todo lo demás son carteles o composiciones con texto, y varias
--   tienen aspecto de imagen generada. Créditos en docs/datos/creditos-imagenes.md.
-- content_verified = true: dirección y teléfono de sus propias cuentas, iguales a Turismo y el DENUE.
BEGIN;
UPDATE places SET
  short_description = $v$Los pioneros del queso en Tequis desde 1972, con su bar La Carreta$v$,
  full_description = $v$Quesería del centro, a unos 50 metros de la plaza, que se presenta como «los pioneros del queso en Tequisquiapan desde 1972». Hace quesos 100 % artesanales, como el Bola especial para quesadillas, el manchego, La Pila, el Piócolo, la panela de canasto y el provolone, y los vende en tres tiendas del centro: Andador Morelos 5, Madero esquina Colegio Militar 10B y Niños Héroes 34 (tiene otra en Querétaro). En el Andador Morelos está su restaurante, La Carreta, que reabrió en diciembre de 2025 como bar de quesos, vino y piano: tablas, platillos hechos con sus quesos, vinos de la región y música en vivo algunas noches. Se reserva al 414 273 2315. Su Facebook da de 9 a 23 h todos los días, pero ese horario lleva años sin actualizarse.$v$,
  instagram_url = 'https://www.instagram.com/quesosquiroz/',
  facebook_url = 'https://www.facebook.com/QuesosQuiroz',
  price_range = 'moderate',
  amenities = ARRAY[$v$Restaurante$v$, $v$Reservaciones$v$, $v$Música en vivo$v$]::text[],
  tags = ARRAY[$v$Quesos$v$, $v$Centro$v$]::text[],
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/quesos-quiroz-quesos.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/quesos-quiroz-piocolo.jpg$v$
  ]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/quesos-quiroz-quesos.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = 'c8f85075-f7c1-5053-88c3-258d25f6e532'; -- Quesos Quiroz
COMMIT;

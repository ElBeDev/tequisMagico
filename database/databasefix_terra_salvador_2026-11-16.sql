-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-terra.sql.
-- Vinícola Terra Salvador con datos y foto de sus cuentas oficiales (16 nov 2026).
-- No tiene web propia. Desde el 16 nov 2026 la regla de fotos acepta las cuentas oficiales de un negocio sin web
-- (CLAUDE.md). Son suyas: el teléfono de su Instagram (historia "Contacto": WhatsApp y llamadas) y de su Facebook es
-- el 414 140 9038, el mismo del DENUE y de tequis.travel, y el correo de Facebook es el mismo del DENUE.
-- Fuentes:
--   Instagram @terrasalvador.vinicola: bio ("vinos, catas, recorridos, uva Salvador, visitas, tablas de queso"),
--     etiquetas en publicaciones de ago y nov 2026 (Mía, Mimbre, Ópalo, Rosado espumoso, Rosado tranquilo, Oporto).
--   Facebook "Terra Salvador Vinícola" (profile.php?id=100077722981785): dirección "Carr. Galeras, Grande" (su enlace a
--     Google Maps), eventos en "La Lagunita, Tequisquiapan", publicación del 2 jun 2025 (recorridos guiados del viñedo
--     al embotellado, catas guiadas, maridaje, reservas por mensaje), portadas "Catas · Recorridos · Tabla de quesos,
--     reservaciones al 414 140 9038", y "hace 6 años comenzó un sueño" (17 jul 2026, o sea desde 2020).
--   Horario: Facebook da 10:00–18:00 todos los días, pero dice "actualizado hace aproximadamente 4 años" [FRÁGIL]:
--     no se guarda en schedule_json, solo se menciona con aviso.
-- Foto: la terraza, portada de Facebook del 13 nov 2026, sin marca de IA. Se descartaron: las imágenes que Facebook
--   o Instagram marcan como "Contenido generado con IA" (promo Buen Fin, aniversario), los viñedos al atardecer del
--   álbum de portadas (parecen generados o de banco), carteles, stands en ferias de otras ciudades y la foto de la cata
--   del 15 nov 2026 (el protagonista es un cliente, como con Los Rosales). Crédito en docs/datos/creditos-imagenes.md.
-- content_verified = true: teléfono y dirección confirmados en sus propias cuentas, más tequis.travel y el DENUE.
-- Antes de aplicar: copiar terra-salvador-terraza.jpg a /srv/tequis/uploads/lugares/. Traducción en data-en.ts.
BEGIN;
UPDATE places SET
  short_description = $v$Vinícola artesanal de uva Salvador, con catas y recorridos$v$,
  full_description = $v$Vinícola artesanal en La Lagunita, a 1.5 km de la plaza, abierta desde 2020. Hace sus vinos con la uva Salvador (Mía, Mimbre, Ópalo, Oporto y dos rosados, uno de ellos espumoso) y ofrece recorridos guiados del viñedo al embotellado, catas guiadas con maridaje y tablas de queso, en una terraza con sombrillas. Se reserva por WhatsApp o en su Instagram, @terrasalvador.vinicola. Su Facebook da de 10 a 18 h todos los días, pero ese horario lleva años sin actualizarse: confírmalo antes de ir.$v$,
  address = $v$Carretera a Galeras, La Lagunita$v$,
  whatsapp_number = $v$414-140-9038$v$,
  amenities = ARRAY[$v$Terraza$v$, $v$Reservaciones$v$]::text[],
  tags = ARRAY[$v$Vino$v$]::text[],
  image_urls = ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/terra-salvador-terraza.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/terra-salvador-terraza.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '0e287eb9-5479-5c03-9cbb-b1e362097397'; -- Vinícola Terra Salvador
COMMIT;

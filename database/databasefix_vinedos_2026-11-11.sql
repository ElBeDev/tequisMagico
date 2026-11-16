-- APLICADA el 2026-11-11 en la base del VPS, con respaldo previo en /root/respaldos/places-20261111-redonda.sql.
-- Acomodo de viñedos.
-- Viñedos La Redonda (Ezequiel Montes): fuera del sitio. Su operación está parada desde fines de 2025 por un conflicto
-- legal (El Financiero, feb-2026), su web sigue en mantenimiento y no hay forma de confirmar que reciba visitas.
-- Soft-delete: se reactiva con is_active = true. Su /lugar/vinedos-la-redonda queda en 404 a propósito.
-- También se quitó su párrafo y su fuente de la guía de viñedos (web/lib/guides.ts y guides-en.ts).
BEGIN;
UPDATE places SET is_active = false, is_featured = false, is_verified = false,
  image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg']::text[],
  thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg',
  updated_at = NOW()
WHERE id = 'e83905fa-1335-4bc7-b117-a917d5246a53'; -- Viñedos La Redonda
COMMIT;

-- Los Rosales Viñedos: fotos de su web propia. vinedoslosrosales.com.mx hoy es de apuestas (dominio secuestrado), así
-- que se tomaron de su copia en el Internet Archive de 2018 (cuando el sitio sí era del viñedo). Se descartaron las
-- que tienen personas como protagonistas (bodas, vendimia, recorridos). No se usaron las de queretaro.travel ni
-- Instagram. Datos sin cambio: el 414 280 7480 de queretaro.travel en el DENUE es de un taller de hojalatería, y la
-- dirección sigue en [CONFLICTO] (km 27 en su texto, km 47 en su contacto).
BEGIN;
UPDATE places SET
  image_urls = ARRAY['https://panel.tequismagico.com/uploads/lugares/los-rosales-vinedos-uvas.jpg', 'https://panel.tequismagico.com/uploads/lugares/los-rosales-vinedos-barricas.jpg', 'https://panel.tequismagico.com/uploads/lugares/los-rosales-vinedos-botellas.jpg', 'https://panel.tequismagico.com/uploads/lugares/los-rosales-vinedos-jardin.jpg', 'https://panel.tequismagico.com/uploads/lugares/los-rosales-vinedos-barrica.jpg']::text[],
  thumbnail_url = 'https://panel.tequismagico.com/uploads/lugares/los-rosales-vinedos-uvas.jpg',
  updated_at = NOW()
WHERE id = 'a489a939-80e6-490e-982b-183785468864'; -- Los Rosales Viñedos
COMMIT;

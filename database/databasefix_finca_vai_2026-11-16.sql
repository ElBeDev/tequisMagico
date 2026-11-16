-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-vai.sql.
-- Finca VAI: redes oficiales y web caída (16 nov 2026).
-- quesosvai.com dejó de mostrar su web: desde el 14 nov 2026 (fecha de "Updated Date" en el whois) manda a "/lander", la
--   página de estacionamiento de GoDaddy (parking-lander, con anuncios). El dominio sigue registrado (vence nov 2027) y no
--   tiene registros MX, así que direccion@quesosvai.com tampoco recibe correo. Se quita el website; no se agrega el correo.
-- Redes: hay dos pares de cuentas. Las de la finca (las visitas) van en la ficha:
--   Facebook facebook.com/FincaVAI (11 mil; 414 226 4353, el teléfono de la base; "te esperamos los 365 días del año con
--   visitas guiadas") e Instagram @fincavai (4,858; "Turismo rural en Querétaro").
--   Las de la marca de quesos, Quesos Vai (facebook.com/QuesosVaiQro, @quesosvai; km 30, pedidos al 442 190 7618), solo se
--   mencionan en el texto.
-- El horario y el precio del recorrido son de su web (5 y 10 nov 2026, antes de caerse); se quedan.
-- Fotos: las dos de su web se quedan. Las de sus redes son casi todas carteles con texto encima.
BEGIN;
UPDATE places SET
  website = NULL,
  instagram_url = 'https://www.instagram.com/fincavai/',
  facebook_url = 'https://www.facebook.com/FincaVAI',
  full_description = $v$Rancho quesero con historia familiar desde los años 1920, en Purísima de Cubos, municipio de Colón, a media hora de Tequis, que recibe visitas los 365 días del año. El Recorrido del queso pasa por la ganadería (vacas, cabras y borregas), la fábrica antigua y el sótano de maduración, y termina con degustación guiada; en noviembre de 2026 costaba $210 por persona y los menores de 4 años no pagaban. No hace falta reservar en grupos pequeños; con más de 10 personas, sí. Sus quesos se venden con la marca Quesos VAI, que toma pedidos por WhatsApp al 442 190 7618.$v$,
  updated_at = NOW()
WHERE id = 'eba5f710-5769-5afa-b66c-80006c114be2'; -- Finca VAI
COMMIT;

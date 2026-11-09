-- Correcciones al calendario de eventos con docs/datos/investigacion-eventos-2027.md (9 nov 2026).
-- Varios eventos de la carga inicial tenían fechas y detalles sin fuente. Aquí solo va lo que
-- tiene fuente en ese documento. Tres bloques independientes. Después de aplicarlo, actualizar
-- web/lib/i18n/data-en.ts (EVENTS_EN) con los mismos ids: ya está hecho en el mismo commit.
-- Pendiente de decidir (no va aquí): los eventos de 2027 sin anuncio oficial (Festival del Artesano,
-- Enamórate, Espíritus de Primavera) tienen fechas de la carga inicial; ver el documento.

-- =====================================================================================
-- Bloque 1: eventos sin evidencia (soft-delete) y link de boletos a un dominio sin registrar
-- =====================================================================================
BEGIN;

-- Festival de la Cestería: ninguna fuente; salía como "evento de hoy" (8 al 10 de nov).
-- Festival del Vino Joven: ninguna fuente; festivaldelvino.com no está registrado (NXDOMAIN, RDAP 404):
--   cualquiera podría comprarlo. Se borra el link además de desactivarlo.
-- Festival del Globo (12-14 mar 2027): sin fuente. El de Tequis era la "Fiesta en el Aire" de
--   diciembre y la última edición documentada es de 2019.
UPDATE events SET ticket_url = NULL, ticket_price = NULL WHERE id = 'bcf77b31-3282-46ce-865b-9898ff9576c2';
UPDATE events SET is_active = false, updated_at = NOW()
WHERE id IN (
  '3d7cd2c0-7d2c-4ef0-a685-7df70319a7f1', -- Festival de la Cestería
  'bcf77b31-3282-46ce-865b-9898ff9576c2', -- Festival del Vino Joven
  'f60345eb-e00a-4838-b375-4a3b528b7d26'  -- Festival del Globo
);

COMMIT;

-- =====================================================================================
-- Bloque 2: fechas y textos corregidos
-- =====================================================================================
BEGIN;

-- Semana Santa 2027: Domingo de Ramos 21 de marzo a Pascua 28 de marzo (N+ y cálculo de Pascua).
-- Programa según tequis.travel; las "alfombras de aserrín" y "procesiones diarias" no tenían fuente.
UPDATE events SET
  start_date = '2027-03-21', end_date = '2027-03-28',
  short_description = $v$Vía Crucis y quema de judas$v$,
  full_description = $v$Semana Santa en Tequis: el Miércoles Santo se representa la captura de Jesús, hay Vía Crucis en la plaza principal, y el Sábado de Gloria se queman judas y diablos y se bendicen el fuego y el agua. El domingo es la fiesta de Resurrección. En 2027 va del Domingo de Ramos, 21 de marzo, al Domingo de Resurrección, 28 de marzo.$v$,
  location_name = $v$Plaza Miguel Hidalgo y templos del centro$v$,
  organizer_name = NULL,
  tags = ARRAY[$v$Religioso$v$, $v$Tradicional$v$, $v$Cultural$v$]::text[],
  updated_at = NOW()
WHERE id = 'a25e9aa4-9ef1-4894-a9dd-6476a81a3daf';

-- Feria del Queso y Vino: su nombre oficial es Festival Internacional del Arte, Queso y Vino. La 50.ª
-- edición fue del 7 al 24 de mayo de 2026, gratis (SECTUR, comunicado 072/2026). Teníamos las
-- fechas de 2025 movidas un año. El título se queda porque así lo busca la gente (y la URL).
UPDATE events SET
  start_date = '2026-05-07', end_date = '2026-05-24',
  short_description = $v$El festival del queso y el vino de Tequis$v$,
  full_description = $v$Festival Internacional del Arte, Queso y Vino, la feria del queso y el vino de Tequisquiapan. Su edición 50 fue del 7 al 24 de mayo de 2026, con entrada libre, en el Parque La Pila, el Jardín Principal Miguel Hidalgo, el Jardín del Arte y el Teatro del Pueblo. Suele ser en mayo y empezar en jueves; las fechas de 2027 aún no se anuncian.$v$,
  location_name = $v$Parque La Pila y Jardín Principal$v$,
  organizer_name = $v$Municipio de Tequisquiapan$v$,
  tags = ARRAY[$v$Vino$v$, $v$Queso$v$, $v$Gastronomía$v$, $v$Familiar$v$, $v$Cultural$v$]::text[],
  updated_at = NOW()
WHERE id = 'de96a0ba-d0e4-4094-ad3a-a3974e6f2f95';

-- Día de Muertos: el festival se llama Tejedores de Luz; en 2026 fue del 28 de oct al 2 de nov
-- (Al Minuto, Amanecer Qro). El concurso de altares, el maquillaje y la procesión al cementerio no
-- tenían fuente.
UPDATE events SET
  start_date = '2026-10-28', end_date = '2026-11-02',
  short_description = $v$Festival Tejedores de Luz$v$,
  full_description = $v$En Tequis, el Día de Muertos se vive con el festival Tejedores de Luz. En 2026, su tercera edición, fue del 28 de octubre al 2 de noviembre: un altar monumental de mimbre en la Plaza Miguel Hidalgo, una ruta de más de 10 altares por el centro, pabellones gastronómicos y, en las comunidades, desfile de Xantolo, catrinas y mojigangas.$v$,
  organizer_name = $v$Municipio de Tequisquiapan$v$,
  updated_at = NOW()
WHERE id = '4ea723ab-8589-4d99-9130-00cb8391480a';

-- Fiestas Patrias: el "desfile cívico matutino" y el mariachi no tenían fuente; el Grito a las 23:00 sí.
UPDATE events SET
  full_description = $v$El Grito de Independencia se da el 15 de septiembre a las 23:00 en la Plaza Miguel Hidalgo. En 2026, el programa "Ecos de Libertad" fue del 11 al 16 de septiembre, con festival de huapango, pabellón gastronómico y artesanal en las calles del centro y honores a la bandera el 16.$v$,
  tags = ARRAY[$v$Patrio$v$, $v$Música$v$, $v$Familiar$v$, $v$Tradicional$v$]::text[],
  updated_at = NOW()
WHERE id = '0e352881-1326-4cbd-a0ad-4a09eb1c0a23';

-- La Fiesta del Pueblo: se repite cada agosto (AlertaQro 2026, Querétaro de Verdad 2025).
UPDATE events SET
  is_recurring = true,
  short_description = $v$Conciertos gratis y la Carrera del Pueblo$v$,
  full_description = $v$La fiesta del pueblo, a mediados de agosto, alrededor de la fiesta patronal del 15. En 2026 fue del 12 al 16 de agosto en el Centro Histórico, con conciertos gratuitos en el Teatro del Pueblo (Av. Juárez) y la Carrera del Pueblo de 5 y 10 km.$v$,
  updated_at = NOW()
WHERE id = '9c3e4505-a859-4ac3-86b9-d3f122b58330';

-- Año Nuevo: el "brindis colectivo" no tenía fuente; la fiesta desde las 22:00 con fuegos y música sí.
-- (Las horas guardadas están en UTC; la web solo muestra la fecha, así que se dejan como están.)
UPDATE events SET
  full_description = $v$Fiesta de fin de año en el centro, desde las 22:00, con música en vivo y fuegos artificiales. En 2025 fue en las plazas Miguel Hidalgo y Santa Cecilia, que están juntas.$v$,
  location_name = $v$Plazas Miguel Hidalgo y Santa Cecilia$v$,
  organizer_name = $v$Municipio de Tequisquiapan$v$,
  tags = ARRAY[$v$Año Nuevo$v$, $v$Fiesta$v$, $v$Música$v$, $v$Fuegos artificiales$v$]::text[],
  updated_at = NOW()
WHERE id = '81d4781f-4b84-4003-885e-2cefbb70390b';

-- Organizadores sin fuente.
UPDATE events SET organizer_name = $v$Barrio de San Juan$v$,
  full_description = $v$Fiesta del Barrio de San Juan, del 1 al 5 de mayo; el día principal es el 3, con la tradicional Danza de Moros y Cristianos.$v$,
  updated_at = NOW()
WHERE id = '0d094ed3-5ce4-4d8c-b7c2-7348b8bcc3ec'; -- Fiesta de la Santa Cruz
UPDATE events SET organizer_name = $v$Comité de fiestas del Barrio de La Magdalena$v$,
  full_description = $v$Aniversario de la fundación de Tequisquiapan, en 1551, dentro de las fiestas de Santa María Magdalena en el Barrio de La Magdalena (alrededor del 19 al 26 de julio), con sesión solemne de Cabildo el 24 de julio. tequis.travel menciona feria, kermés y desfile de carros alegóricos.$v$,
  updated_at = NOW()
WHERE id = '758cca0d-2c5e-48a8-bddc-6da8b2b87114'; -- Fiesta de la Fundación
UPDATE events SET organizer_name = NULL, updated_at = NOW()
WHERE id IN ('7edfd256-3905-44e0-bd1a-58ed3d021143', '82ab91dd-e4ad-4e13-a4e2-1e293eb02637'); -- Noches de Leyendas, Posadas

COMMIT;

-- =====================================================================================
-- Bloque 3: eventos que faltaban (con fuente y fecha confirmada, o temporada fija)
-- =====================================================================================
BEGIN;

-- Villa Navideña: 13 dic 2026 al 6 ene 2027, confirmada por el secretario de Turismo municipal
-- (AlertaQro, 9-nov-2026). La nota de 2026 no dice la sede; la de 2025 sí.
INSERT INTO events (id, title, short_description, full_description, start_date, end_date, is_recurring, location_name, latitude, longitude, address, category, tags, image_urls, thumbnail_url, is_free, is_featured, organizer_name)
VALUES ('fce52c67-31b7-4cee-9aaa-c46bd904e382', $v$Villa Navideña$v$, $v$Figuras de mimbre y carrusel gratis$v$,
  $v$Villa navideña con figuras de mimbre de los artesanos de Tequis, productores locales, eventos culturales y musicales y un carrusel de dos pisos gratuito. Del 13 de diciembre de 2026 al 6 de enero de 2027. En 2025 se instaló en la Plaza Santa Cecilia, la Plaza Miguel Hidalgo y el Parque La Pila.$v$,
  '2026-12-13', '2027-01-06', true, $v$Centro de Tequisquiapan$v$, 20.52130000, -99.89360000, $v$Plaza Miguel Hidalgo, Centro$v$, 'Tradicional',
  ARRAY[$v$Navidad$v$, $v$Familiar$v$, $v$Artesanía$v$, $v$Tradicional$v$]::text[],
  ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/a/a6/Plaza_principal_en_Tequisquiapan.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/a/a6/Plaza_principal_en_Tequisquiapan.jpg$v$, true, true, $v$Municipio de Tequisquiapan$v$);

-- Estrellas y Raíces: 14 nov 2026, 12:00 a 19:00, Plaza Miguel Hidalgo, gratis (AlertaQro, 9-nov-2026).
INSERT INTO events (id, title, short_description, full_description, start_date, end_date, is_recurring, location_name, latitude, longitude, address, category, tags, image_urls, thumbnail_url, is_free, is_featured, organizer_name)
VALUES ('ceb180a5-4761-4a4d-aaad-b4fc825d69d3', $v$Estrellas y Raíces$v$, $v$Artesanías, taller de mimbre y meditación$v$,
  $v$Festival de un día en la Plaza Miguel Hidalgo, de 12:00 a 19:00: venta de artesanías locales, talleres como el de tejido de mimbre y una meditación colectiva con sonido a las 17:30. Entrada libre.$v$,
  '2026-11-14', '2026-11-14', false, $v$Plaza Miguel Hidalgo$v$, 20.52130000, -99.89360000, $v$Plaza Miguel Hidalgo, Centro$v$, 'Cultural',
  ARRAY[$v$Artesanía$v$, $v$Cestería$v$, $v$Cultural$v$, $v$Talleres$v$]::text[],
  ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$, true, false, NULL);

-- Temporada de vendimias: julio y agosto (tequis.travel, "Fiestas de la Vendimia"). Cada viñedo pone
-- su fecha y precio; no se da ninguna fecha suelta.
INSERT INTO events (id, title, short_description, full_description, start_date, end_date, is_recurring, location_name, latitude, longitude, address, category, tags, image_urls, thumbnail_url, is_free, ticket_price, is_featured, organizer_name)
VALUES ('a5268b28-7a17-4a1a-995e-62741c050395', $v$Temporada de vendimias$v$, $v$Las fiestas de la cosecha en los viñedos$v$,
  $v$En julio y agosto, los viñedos de Tequisquiapan y Ezequiel Montes celebran la cosecha con sus vendimias. Cada viñedo pone su fecha y su precio: consulta el viñedo antes de ir.$v$,
  '2027-07-01', '2027-08-31', true, $v$Viñedos de Tequisquiapan y Ezequiel Montes$v$, NULL, NULL, NULL, 'Gastronomía',
  ARRAY[$v$Vino$v$, $v$Vendimia$v$, $v$Gastronomía$v$]::text[],
  ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8d/De_Cote_-_Casa_Vitivin%C3%ADcola_-_Olivos_y_Vi%C3%B1edos.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8d/De_Cote_-_Casa_Vitivin%C3%ADcola_-_Olivos_y_Vi%C3%B1edos.jpg$v$, false, $v$Precio de cada viñedo$v$, false, NULL);

COMMIT;

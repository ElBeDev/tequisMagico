-- APLICADA el 2026-11-10 en la base del VPS, con respaldo previo en /root/respaldos/places-events-20261110.sql (y la base completa en tequis-completa-20261110.dump). Preparado el 2026-11-10 con docs/datos/investigacion-hospedaje-2026-11.md.
-- Hospedaje para las búsquedas de "hoteles en Tequisquiapan…" (Search Console / autocompletado, nov 2026).
-- Tres bloques independientes. Fotos: solo de la web propia de cada hotel, revisadas a mano, para copiar a
-- /srv/tequis/uploads/lugares/ (créditos en docs/datos/creditos-imagenes.md). Los que no tienen web propia
-- (o cuya web no trae fotos útiles) llevan la foto genérica de Commons de hospedaje. is_verified e
-- is_featured quedan en false. content_verified = true solo con web propia que confirma teléfono y
-- dirección contra tequis.travel / Directorio Tequisquiapan 2025 ("PDF 2025"). price_range = '' cuando
-- no hay fuente de precio. Las amenidades salen del texto de la web propia, nunca de los iconos de
-- tequis.travel (que están copiados entre fichas, aviso 3 de la investigación).
-- Inglés: web/lib/i18n/data-en.ts (PLACES_EN), por id.

-- =====================================================================================
-- Bloque 1: correcciones a los 4 hoteles que ya teníamos
-- =====================================================================================
BEGIN;

-- La Casa del Atrio (Guerrero 2): no existe en Tequis. El único hotel con ese nombre está en el centro
-- histórico de Querétaro capital (lacasadelatrio.com, queretaro.travel). Tenía is_verified e is_featured.
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW() WHERE id = '8abdbe43-f7a4-4253-a4ca-3606fc35d3a4';

-- Hotel Museo La Casona (Morelos 11, 414-273-0132): sin rastro en tequis.travel, PDF 2025, OSM ni el
-- buscador. La Casona real es La Casona Tequisquiapan Hotel & Spa (Antiguo Camino al Sauz 55), alta abajo.
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW() WHERE id = '315f99e9-d3c2-42c8-91d5-9be6d4cef5de';

-- Hotel Hidalgo (Hidalgo 15, 414-273-0063): sin rastro en Tequis; el único "Hotel Hidalgo" que aparece
-- está en Aculco (Edomex).
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW() WHERE id = '2cd70a8f-bd1e-4577-bba3-587215bf8d0f';

-- Hotel Posada Tequisquiapan → Posada Tequisquiapan. Fuente: tequis.travel/posada-tequisquiapan y PDF 2025
-- (Moctezuma 6, 414 273 0010; la base tenía Moctezuma 8 y 414-273-0021). Las fuentes no hablan de alberca
-- ni de desayuno: se quitan, igual que el price_range sin fuente. Solo fuentes de Turismo: content_verified
-- sigue en false; misma forma de descripción que el bloque 3.
-- Pin de tequis.travel (no hay nodo OSM): revisar a mano en el panel.
-- OJO: el cambio de nombre cambia el slug (hotel-posada-tequisquiapan → posada-tequisquiapan): agregar
-- la redirección en web/lib/redirects.ts.
UPDATE places SET
  name = $v$Posada Tequisquiapan$v$,
  subcategory = $v$Hotel$v$,
  latitude = 20.5244720, longitude = -99.8932180,
  address = $v$Moctezuma 6, Centro$v$,
  short_description = $v$Posada en la calle Moctezuma, a 300 m de la plaza$v$,
  full_description = $v$Posada en Moctezuma 6, Centro, a unos 300 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 2 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  price_range = '',
  phone_number = $v$414-273-0010$v$, whatsapp_number = $v$414-226-7660$v$, email = $v$posadatequisquiapan@gmail.com$v$, website = NULL,
  amenities = '{}'::text[], tags = ARRAY[$v$Centro$v$]::text[],
  is_featured = false, is_verified = false, content_verified = false,
  updated_at = NOW()
WHERE id = 'b9a724be-e47e-4faa-9562-4b17d1fc44e8';

COMMIT;

-- =====================================================================================
-- Bloque 2: altas con web propia verificada (dirección o teléfono coinciden con tequis.travel / PDF 2025)
-- =====================================================================================
-- price_range solo cuando la web publica la tarifa de la noche (nov-2026), con esta escala por noche para 2:
-- budget < $1,000; moderate $1,000-2,999; expensive $3,000-4,999; luxury ≥ $5,000. Sin tarifa publicada: ''.
BEGIN;

-- Hotel Río Tequisquiapan. Fuente: hotelesriotequisquiapan.com (NO hotelrio.com.mx, que es de Vallarta, ni
-- riotequisquiapan.octosite.net), tequis.travel, PDF 2025. Pin: OSM nodo 4190907581. Número de habitaciones en
-- [CONFLICTO] (53 / 23 en tequis.travel): no se menciona. WhatsApp solo en tequis.travel: no se usa.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('66903af1-5db3-55fd-a72a-570eed274001', $v$Hotel Río Tequisquiapan$v$, 'hospedaje', $v$Hotel$v$, 20.5203580, -99.8950820, $v$Niños Héroes 33, Centro$v$,
  $v$Hotel con albercas y jardín, a 400 m de la plaza$v$,
  $v$Hotel en la calle Niños Héroes, a unos 400 metros de la Plaza Miguel Hidalgo, con albercas y jardín. Tiene habitaciones king, dobles, estudios y una Junior familiar con una cama king y dos individuales. Su restaurante, Río 33, sirve desayuno, comida y cena, con menú infantil; el hotel también ofrece masajes y espacios para eventos.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/hotel-rio-tequisquiapan-fachada.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-rio-tequisquiapan-alberca.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-rio-tequisquiapan-jardin.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/hotel-rio-tequisquiapan-fachada.jpg$v$, $v$414-273-0015$v$, $v$tequisquiapan@hotelesrio.com.mx$v$, $v$https://www.hotelesriotequisquiapan.com$v$, NULL, NULL,
  ARRAY[$v$Alberca$v$, $v$Restaurante$v$, $v$Bodas y eventos$v$, $v$Masajes$v$]::text[], ARRAY[$v$Centro$v$, $v$Familiar$v$]::text[], true);

-- Hotel San Carlos (también "Hotel Hecthorny San Carlos"). Fuente: hotelsancarlostx.com, tequis.travel, PDF 2025.
-- Su web sigue con el aviso de cierre por COVID de 2020 (el PDF 2025 lo da como abierto): content_verified = false.
-- Pin de tequis.travel (la otra ficha da uno a ~100 m) [CONFLICTO]: revisar a mano. WhatsApp en [CONFLICTO]: sin WhatsApp.
-- Número de habitaciones en [CONFLICTO] (54 / 53): no se menciona.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('b8af5274-eaa2-51a2-95c7-f36bd866e8eb', $v$Hotel San Carlos$v$, 'hospedaje', $v$Hotel$v$, 20.5258200, -99.8943400, $v$Heroico Colegio Militar 7, Centro$v$,
  $v$Hotel en el centro con alberca, gimnasio y el Spa Studio 7$v$,
  $v$Hotel en el centro, a unos 500 metros de la Plaza Miguel Hidalgo, con habitaciones sencillas, dobles, junior suites y master suites. Tiene alberca, gimnasio, el restaurante La Spezia y el Spa Studio 7, con sauna o vapor, tina de hidromasaje y masajes. También tiene sala de juntas y salón de eventos. Su web no se actualiza desde 2020: confirma servicios al reservar.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/hotel-san-carlos-fachada.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-san-carlos-alberca.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-san-carlos-master-suite.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/hotel-san-carlos-fachada.jpg$v$, $v$414-273-6006$v$, NULL, $v$https://www.hotelsancarlostx.com$v$, NULL, NULL,
  ARRAY[$v$Alberca$v$, $v$Spa$v$, $v$Jacuzzi$v$, $v$Restaurante$v$, $v$Gimnasio$v$]::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Matian Hotel Boutique. Fuente: hotelmatian.com/es (motor de GuruHotel; dirección y coordenadas en su JSON-LD),
-- tequis.travel (14 habitaciones, correo), PDF 2025. Pin: el de su web (20.524493, -99.8939858), que coincide con la
-- ficha de wellness de tt; la ficha de hoteles de tt da uno a ~250 m [CONFLICTO]. Precio: motor de reservas el
-- 10-nov-2026, desde MXN 1,873.74 por noche → moderate.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('56d20bea-e58d-5269-8a84-bcf606a6c716', $v$Matian Hotel Boutique$v$, 'hospedaje', $v$Hotel Boutique$v$, 20.5244930, -99.8939858, $v$Av. Centenario Norte 27, Centro$v$,
  $v$Hotel boutique de 14 habitaciones con alberca, jardín y spa$v$,
  $v$Hotel boutique de 14 habitaciones sobre la avenida Centenario Norte, a tres calles del centro. Tiene alberca y jardín, el Oliva Spa con masajes y tina de hidromasaje, restaurante y bar con desayunos, almuerzos y cenas, y estacionamiento. Hay habitaciones para 2 a 4 personas y una suite familiar para 5; organiza cenas románticas, cumpleaños, eventos corporativos y bodas. En noviembre de 2026 su web mostraba tarifas desde unos 1,870 pesos por noche.$v$,
  'moderate', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/matian-hotel-boutique-alberca.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/matian-hotel-boutique-jardin.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/matian-hotel-boutique-habitacion.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/matian-hotel-boutique-alberca.jpg$v$, $v$414-688-0416$v$, $v$recepcionhotelmatian@gmail.com$v$, $v$https://hotelmatian.com/es$v$, $v$414-688-0416$v$, NULL,
  ARRAY[$v$Alberca$v$, $v$Spa$v$, $v$Jacuzzi$v$, $v$Restaurante$v$, $v$Bar$v$, $v$Estacionamiento$v$, $v$Bodas y eventos$v$]::text[], ARRAY[$v$Centro$v$, $v$Familiar$v$, $v$Romántico$v$]::text[], true);

-- Hotel La Plaza de Tequisquiapan. Fuente: hotelplazatequis.com (dirección, teléfonos, habitaciones, restaurantes),
-- tequis.travel, PDF 2025. Pin: OSM nodo 6601353692. Estrellas en [CONFLICTO] (4 PDF / 3 tt): no se mencionan.
-- Solo publica el cargo por huésped adicional: price_range vacío.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('cec87023-bc36-557a-ace4-ce6bc8c99525', $v$Hotel La Plaza de Tequisquiapan$v$, 'hospedaje', $v$Hotel$v$, 20.5228360, -99.8920280, $v$Andador Benito Juárez Pte. 10, Centro$v$,
  $v$Hotel colonial en la plaza principal, con jardín y alberca$v$,
  $v$Hotel colonial en la plaza principal, a un costado de la parroquia, con 17 habitaciones, jardín y alberca. Hay habitaciones para dos, algunas king con jacuzzi, y para cuatro, algunas con jacuzzi y cocineta. Tiene dos restaurantes, La Valentina, de cocina mexicana, y Las Brasas, de cortes, con vista a la plaza, además del bar La Cantina. Recepción 24 horas y estacionamiento en la calle 20 de Noviembre.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/hotel-la-plaza-de-tequisquiapan-fachada.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-la-plaza-de-tequisquiapan-alberca.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-la-plaza-de-tequisquiapan-habitacion-jacuzzi.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/hotel-la-plaza-de-tequisquiapan-fachada.jpg$v$, $v$414-273-0005$v$, $v$hola@hotelplazatequis.com$v$, $v$https://hotelplazatequis.com$v$, $v$414-140-4094$v$, NULL,
  ARRAY[$v$Alberca$v$, $v$Jacuzzi privado$v$, $v$Restaurante$v$, $v$Bar$v$, $v$Estacionamiento$v$]::text[], ARRAY[$v$Centro$v$, $v$Colonial$v$]::text[], true);

-- Hotel Quinta Tequisquiapan. Fuente: quintatequisquiapan.mx (dirección, habitaciones, tarifas, paquetes; el .com
-- sirve el mismo sitio), tequis.travel, PDF 2025. Pin: el de su JSON-LD (a ~30 m del de tequis.travel). Alberca: "al
-- aire libre" en la web y "climatizada" en tt [CONFLICTO]: solo "Alberca". Desayuno solo en paquetes: no lleva
-- "Desayuno incluido". Precio: desde $1,850 (estándar) a $4,850 (master) en nov-2026 → moderate.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('5abee0eb-9ae6-5412-9b1b-25877f6fda1c', $v$Hotel Quinta Tequisquiapan$v$, 'hospedaje', $v$Hotel$v$, 20.5246656, -99.8889417, $v$Nautha 21, Centro$v$,
  $v$Hotel de 21 suites con alberca y suite con jacuzzi privado$v$,
  $v$Hotel de 21 habitaciones tipo suite, abierto en 1997, a unos 400 metros de la Plaza Miguel Hidalgo. Tiene alberca al aire libre con bar, jardín, restaurante, estacionamiento privado, recepción 24 horas y salón de eventos, y sus paquetes incluyen desayuno. La Suite con Jacuzzi tiene jacuzzi privado junto a la ventana. En noviembre de 2026 las tarifas iban de 1,850 pesos (estándar) a 4,850 (master suite) por noche.$v$,
  'moderate', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/hotel-quinta-tequisquiapan-fachada.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-quinta-tequisquiapan-alberca.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-quinta-tequisquiapan-suite-jacuzzi.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/hotel-quinta-tequisquiapan-fachada.jpg$v$, $v$414-273-2255$v$, $v$reservaciones@quintatequisquiapan.com$v$, $v$http://quintatequisquiapan.mx$v$, NULL, NULL,
  ARRAY[$v$Alberca$v$, $v$Jacuzzi privado$v$, $v$Restaurante$v$, $v$Bar$v$, $v$Estacionamiento$v$, $v$Bodas y eventos$v$]::text[], ARRAY[$v$Centro$v$, $v$Romántico$v$]::text[], true);

-- Suites Poza Real. Fuente: pozareal.com.mx (dirección, teléfonos, tarifas; pie © 2020), tequis.travel, adn40
-- (18-oct-2026: 4 master suites con poza, tarifas vigentes). No está en la tabla HOTELES del PDF 2025.
-- Pin de tequis.travel: revisar a mano. Precio: $1,434 a $2,868 por noche (2 pers.) → moderate.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('bfddee5f-f296-5680-a837-8f6513759870', $v$Suites Poza Real$v$, 'hospedaje', $v$Hotel$v$, 20.5217690, -99.8915170, $v$Manuel Mateos 5, Centro$v$,
  $v$Suites coloniales con poza privada de manantial, junto a la plaza$v$,
  $v$Hotel de 15 suites de estilo colonial, a 50 pasos de la plaza principal según su web. Algunas suites tienen poza privada, una pequeña alberca que se llena con agua de manantial. Tiene alberca con chapoteadero y estacionamiento cubierto gratuito, un auto por habitación. En 2026 la noche para dos personas costaba de 1,434 pesos (estándar) a 2,868 (master suite con poza privada).$v$,
  'moderate', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/suites-poza-real-fachada.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/suites-poza-real-poza-privada.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/suites-poza-real-alberca.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/suites-poza-real-fachada.jpg$v$, $v$414-273-0454$v$, $v$informacion@pozareal.com.mx$v$, $v$https://www.pozareal.com.mx$v$, NULL, NULL,
  ARRAY[$v$Pozas privadas$v$, $v$Alberca$v$, $v$Estacionamiento$v$]::text[], ARRAY[$v$Centro$v$, $v$Familiar$v$]::text[], true);

-- Quinta Los Vela (antes "Cabañas Quinta Patricia": quintapatricia.com.mx redirige aquí; misma dirección y
-- teléfono que tequis.travel y el PDF 2025). Fuente: quintalosvela.com.mx (cabañas, termas, reglamento de mascotas).
-- Pin de tequis.travel: revisar a mano. No publica tarifa de las cabañas, solo extras: price_range vacío.
-- Número de cabañas en [CONFLICTO] (8 listadas / "9 cabañas"): no se menciona.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('47a75d2a-c508-58eb-9200-5d34a46b7288', $v$Quinta Los Vela$v$, 'hospedaje', $v$Cabañas$v$, 20.5254520, -99.8879430, $v$Nautha 7, Centro$v$,
  $v$Cabañas pet friendly con jardín y alberca interior de manantial$v$,
  $v$Cabañas con jardín junto al río, a tres cuadras de la plaza principal según su web; antes se llamaba Cabañas Quinta Patricia. Hay cabañas desde pareja hasta 11 personas, cada una con asador, y las de 8, 9 y 11 personas tienen alberca interior con agua de manantial, cuyo llenado tiene costo extra. Se anuncia 100 % pet friendly, con cargo por mascota y reglamento, y renta sus jardines para bodas y eventos de 10 a 400 personas.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/quinta-los-vela-jardin.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/quinta-los-vela-alberca.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/quinta-los-vela-cabana.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/quinta-los-vela-jardin.jpg$v$, $v$414-273-0358$v$, NULL, $v$https://quintalosvela.com.mx$v$, $v$414-280-7941$v$, NULL,
  ARRAY[$v$Pet Friendly$v$, $v$Pozas privadas$v$, $v$Alberca techada$v$, $v$Alberca$v$, $v$Estacionamiento$v$, $v$Bodas y eventos$v$, $v$Asadores$v$]::text[], ARRAY[$v$Centro$v$, $v$Familiar$v$]::text[], true);

-- Hotel Boutique La Granja. Fuente: hotelboutiquelagranja.com (dirección "Calle Morelos No 12", servicios, suites,
-- historia; WhatsApp = tequis.travel), tequis.travel, PDF 2025. Pin: OSM nodo 6611206334, junto al Callejón del Piojo
-- (que menciona su web) y a ~70 m de Morelos Norte en OSM. El pin de tequis.travel para Morelos 12 cae ~280 m al sur
-- [CONFLICTO]: no se usa. Ojo: en la base, Morelos 12 es también la dirección de La Fabbrica Italiana.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('25929153-27a1-526e-85d5-49d0720aea2e', $v$Hotel Boutique La Granja$v$, 'hospedaje', $v$Hotel Boutique$v$, 20.5244240, -99.8925470, $v$Morelos 12, Centro$v$,
  $v$Hotel boutique de 14 suites en una casona, con alberca y jacuzzi$v$,
  $v$Hotel boutique de 14 suites en una casona de unos cien años, a 200 metros de la Plaza Miguel Hidalgo, a un costado del Callejón del Piojo. Tiene alberca, jacuzzi, sala de masajes, bar, restaurante, estacionamiento y el patio Los Olivos; las suites son para dos adultos o dos adultos y dos niños menores de 12. Según su historia, el abuelo de la familia abrió aquí el primer Hotel Baños La Granja, alimentado por los manantiales del pueblo, y el hotel reabrió en 2010.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/hotel-boutique-la-granja-alberca.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-boutique-la-granja-patio.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-boutique-la-granja-suite.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/hotel-boutique-la-granja-alberca.jpg$v$, $v$414-219-6620$v$, $v$hotellagranja@hotmail.com$v$, $v$http://hotelboutiquelagranja.com$v$, $v$414-219-6620$v$, NULL,
  ARRAY[$v$Alberca$v$, $v$Jacuzzi$v$, $v$Masajes$v$, $v$Restaurante$v$, $v$Bar$v$, $v$Estacionamiento$v$]::text[], ARRAY[$v$Centro$v$]::text[], true);

-- Arantia Hotel Boutique. Fuente: hotelboutiquearantia.com.mx (portada, nosotros, galería; pide verificación
-- anti-bots, las fotos se bajaron por su API de WordPress), tequis.travel, PDF 2025. Pin de tequis.travel: revisar
-- a mano. Spa y restaurante-bar son "próximas instalaciones" en su web: no van como amenidades.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('3588b5ff-a1c6-5ac6-9ebc-df24853a012a', $v$Arantia Hotel Boutique$v$, 'hospedaje', $v$Hotel Boutique$v$, 20.5282680, -99.8847880, $v$Fray Junípero Serra 62, La Magdalena$v$,
  $v$Hotel boutique con alberca con cascada, tenis y jardín de eventos$v$,
  $v$Hotel boutique y jardín de eventos en el barrio de La Magdalena, a un kilómetro de la Plaza Miguel Hidalgo. Tiene una alberca con cascada, cancha de tenis, 2,500 m² de áreas verdes, tres terrazas y estacionamiento para 150 autos. Su web anuncia un spa y un restaurante-bar como próximas instalaciones.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/arantia-hotel-boutique-alberca.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/arantia-hotel-boutique-jardin.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/arantia-hotel-boutique-entrada.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/arantia-hotel-boutique-alberca.jpg$v$, $v$414-219-6636$v$, $v$arantiahotelboutique@gmail.com$v$, $v$https://hotelboutiquearantia.com.mx$v$, NULL, NULL,
  ARRAY[$v$Alberca$v$, $v$Estacionamiento$v$, $v$Bodas y eventos$v$, $v$Cancha de tenis$v$]::text[], ARRAY[$v$Centro$v$]::text[], true);

-- Hotel Sol y Fiesta (Sol y Fiesta Villas). Fuente: hotelsolyfiesta.com.mx (© 2016, muy básica), tequis.travel,
-- PDF 2025. Pin: OSM nodo 4190975520. Web vieja: content_verified = false. Su web solo tiene un dibujo y el logo:
-- foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('fbfe15e1-7c2e-5d2b-a5b0-0b17c476c36b', $v$Hotel Sol y Fiesta$v$, 'hospedaje', $v$Hotel$v$, 20.5268400, -99.8922710, $v$Av. Heroico Colegio Militar 4, Centro$v$,
  $v$Hotel de 23 habitaciones con temazcal, vapor y masajes$v$,
  $v$Hotel de 23 habitaciones en la avenida Heroico Colegio Militar, a cinco minutos caminando del centro según su web. Tiene restaurante, bar y pool bar, temazcal, cuarto de vapor y masajes, y ofrece paquetes para grupos. Su web es de 2016: confirma servicios al reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-1504$v$, $v$reservaciones@solyfiestavillas.com$v$, $v$http://hotelsolyfiesta.com.mx$v$, NULL, NULL,
  ARRAY[$v$Temazcal$v$, $v$Vapor$v$, $v$Masajes$v$, $v$Restaurante$v$, $v$Bar$v$]::text[], ARRAY[$v$Centro$v$]::text[], false);

-- La Casona Tequisquiapan Hotel & Spa. Fuente: lacasonatequisquiapan.mx (NO .com, que redirige a otro sitio y es
-- el que todavía da tequis.travel), tequis.travel, PDF 2025. Pin de la ficha de hoteles de tequis.travel (la de
-- wellness cae al sur del centro) [CONFLICTO]; el spa Espacio Sense de la base usa el pin de su web, a ~25 m.
-- Estrellas en [CONFLICTO] (4 PDF / 3 tt) y capacidad del salón en [CONFLICTO]: no se mencionan.
-- El área solo para adultos es solo el Espacio Sense: no lleva "Solo adultos" (sería todo el hotel).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('dd13ffbd-dd3e-5e11-964a-229b43f59c34', $v$La Casona Tequisquiapan Hotel & Spa$v$, 'hospedaje', $v$Hotel$v$, 20.5363200, -99.8934110, $v$Antiguo Camino al Sauz 55, Hacienda Grande$v$,
  $v$Hotel de 30 habitaciones con alberca climatizada, spa y temazcal$v$,
  $v$Hotel de 30 habitaciones en Hacienda Grande, a 1.5 km de la plaza, con alberca climatizada y chapoteadero, jardines, restaurante con desayuno buffet los fines de semana, sports bar, terraza y cava. Su área Espacio Sense, solo para adultos, tiene seis suites y un spa con sauna, temazcal y jacuzzi. La Deluxe Suite tiene terraza y baño con jacuzzi; el hotel ofrece un paquete romántico con cena en la cava, préstamo de bicicletas y salón para eventos.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/la-casona-tequisquiapan-hotel-spa-alberca.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/la-casona-tequisquiapan-hotel-spa-terraza.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/la-casona-tequisquiapan-hotel-spa-deluxe-suite.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/la-casona-tequisquiapan-hotel-spa-alberca.jpg$v$, $v$414-273-5635$v$, NULL, $v$https://lacasonatequisquiapan.mx/es$v$, $v$414-226-2178$v$, NULL,
  ARRAY[$v$Alberca$v$, $v$Alberca climatizada$v$, $v$Spa$v$, $v$Temazcal$v$, $v$Jacuzzi$v$, $v$Jacuzzi privado$v$, $v$Área solo adultos$v$, $v$Restaurante$v$, $v$Bar$v$, $v$WiFi$v$, $v$Estacionamiento$v$, $v$Bodas y eventos$v$]::text[], ARRAY[$v$Romántico$v$, $v$Familiar$v$]::text[], true);

-- Hotel St. George Spa & Temazcal. Fuente: hotelstgeorge.mx (suites, spa, restaurante), tequis.travel, PDF 2025.
-- Teléfono principal en [CONFLICTO] (414 190 6470 en la web, 414 109 6470 en tt y PDF): se usa 442 786 9986, que
-- dan la web y tt; content_verified = false hasta llamar. Pin de tequis.travel: revisar a mano.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('e73d6ed4-1d97-5557-b289-d5eb37c2cd69', $v$Hotel St. George Spa & Temazcal$v$, 'hospedaje', $v$Hotel$v$, 20.5128550, -99.8853870, $v$Paseo de la Media Luna 83, Barrio de San Juan$v$,
  $v$Hotel de suites con alberca, spa y temazcal en el Barrio de San Juan$v$,
  $v$Hotel de suites en el Barrio de San Juan, a 1.3 km de la plaza, con alberca y una terraza con vista a ella. Su spa ofrece masajes, envolturas, manicura y un masaje con jacuzzi de hidromasaje, y tiene temazcal con reservación previa. Hay suites estándar, superiores y Master Family, y el restaurante del hotel se llama Mimbre.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/hotel-st-george-spa-temazcal-alberca.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-st-george-spa-temazcal-temazcal.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-st-george-spa-temazcal-habitacion.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/hotel-st-george-spa-temazcal-alberca.jpg$v$, $v$442-786-9986$v$, $v$reservaciones@hotelstgeorge.mx$v$, $v$http://hotelstgeorge.mx$v$, NULL, NULL,
  ARRAY[$v$Alberca$v$, $v$Spa$v$, $v$Temazcal$v$, $v$Jacuzzi$v$, $v$Masajes$v$, $v$Restaurante$v$]::text[], '{}'::text[], false);

-- Hotel Real de TX. Fuente: hotelrealdetx.com.mx (NO hotelrealdetx.com-hotel.com, portal de terceros), tequis.travel,
-- PDF 2025. Pin: OSM vía 702935179. Su web solo confirma el WhatsApp (= tt y PDF), no la dirección:
-- content_verified = false. Albercas climatizadas, tinas de hidromasaje, bar y restaurante solo los dice tt
-- [SIN CONFIRMAR]: no van. La web bloquea descargas automáticas (verificación anti-bots): foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('7e47a447-116f-54f4-b1e2-f94a7ecbff92', $v$Hotel Real de TX$v$, 'hospedaje', $v$Hotel$v$, 20.5264320, -99.8971350, $v$Potrero Salitrillo 89, Fundadores de Hacienda Grande$v$,
  $v$Hotel con habitaciones de 2 a 7 personas y dos villas familiares$v$,
  $v$Hotel en la colonia Fundadores de Hacienda Grande, a unos 700 metros de la Plaza Miguel Hidalgo. Su web ofrece habitaciones para 2, 4, 5 o 7 personas y dos villas familiares. Confirma servicios y tarifas por WhatsApp antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$442-391-8820$v$, NULL, $v$https://www.hotelrealdetx.com.mx$v$, $v$442-391-8820$v$, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$, $v$Familiar$v$]::text[], false);

-- La Toscana de Tequisquiapan. Fuente: hoteltoscanadetequisquiapan.com (ubicación, instalaciones, spa, paquetes),
-- tequis.travel ("Hotel boutique", 8 habitaciones), PDF 2025. Teléfono en [CONFLICTO]: (22) 2200-2320 en su web y en
-- una fila del PDF; 55 6126 2983 en tt y en otra fila del PDF (es también el de Vinícola Tequisquiapan). Se deja el
-- de su web; content_verified = false hasta llamar. Pin de tequis.travel: revisar a mano. No tiene alberca.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('31b8af78-e2fa-5924-9a55-2f6db72ae7f7', $v$La Toscana de Tequisquiapan$v$, 'hospedaje', $v$Hotel Boutique$v$, 20.5310250, -99.9036150, $v$Av. Coahuila Mz 27 Lt 13, La Charretera$v$,
  $v$Hotel de 8 habitaciones frente a Vinícola Tequisquiapan$v$,
  $v$Hotel pequeño en La Charretera, enfrente de Vinícola Tequisquiapan y a siete minutos en auto del centro, con habitaciones sencillas, dobles y triples con terraza. Tiene jardín, la fogata con bombones va incluida en la reservación y ofrece masajes en la habitación. Arma paquetes para grupos con pizzas en horno de piedra, desayunos y catas en la vinícola de enfrente, y organiza cumpleaños, aniversarios y bodas.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/la-toscana-de-tequisquiapan-fogata.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/la-toscana-de-tequisquiapan-habitacion.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/la-toscana-de-tequisquiapan-terraza.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/la-toscana-de-tequisquiapan-fogata.jpg$v$, $v$222-200-2320$v$, NULL, $v$https://www.hoteltoscanadetequisquiapan.com$v$, NULL, NULL,
  ARRAY[$v$Masajes$v$, $v$Fogata$v$, $v$Bodas y eventos$v$]::text[], ARRAY[$v$Viñedos$v$]::text[], false);

-- Villa Bugambilia. Fuente: villabugambilia.mx (desde ago-2023; dirección, teléfono, servicios, política de mascotas),
-- tequis.travel. Pin APROXIMADO: Calle Lomas Verdes en OSM (vía 418878714), ni tt ni su web dan coordenadas y el
-- número no está mapeado: revisar a mano. Se reserva por Airbnb: no publica la tarifa de la noche.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('8c64b035-ca41-5a57-abe2-effdbcfb2f8b', $v$Villa Bugambilia$v$, 'hospedaje', $v$Cabañas$v$, 20.5169967, -99.9113541, $v$Lomas Verdes 372, Las Corraletas$v$,
  $v$Villa privada para 10 con alberca climatizable; acepta perros$v$,
  $v$Villa que se renta completa, para hasta 10 personas, en la colonia Las Corraletas, a 12 minutos del centro según su web. Tiene alberca que se puede climatizar (la caldera se cobra por día), asador, fogatero, palapa, área para acampar, WiFi, estacionamiento para seis autos y accesibilidad para personas con discapacidad. Acepta solo perros: uno sin costo y cargo por cada perro extra. Aparte ofrece masajes y paquetes para parejas; se reserva por Airbnb.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/villa-bugambilia-alberca.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/villa-bugambilia-cabana.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/villa-bugambilia-habitacion.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/villa-bugambilia-alberca.jpg$v$, $v$414-100-4888$v$, $v$villabugambiliatx@gmail.com$v$, $v$https://www.villabugambilia.mx$v$, $v$414-100-4888$v$, NULL,
  ARRAY[$v$Alberca$v$, $v$Alberca climatizada$v$, $v$Pet Friendly$v$, $v$WiFi$v$, $v$Estacionamiento$v$, $v$Asadores$v$, $v$Fogata$v$, $v$Accesible$v$, $v$Masajes$v$]::text[], ARRAY[$v$Familiar$v$, $v$Romántico$v$]::text[], true);

-- Salterra Glamping. Fuente: salterraglamping.com (tiendas, preguntas frecuentes, paquetes; la URL que da tt,
-- /es/index.html, da 404), tequis.travel, PDF 2025. Teléfono: 442 169 3408 (web y PDF); tt da 446 139 5177
-- [CONFLICTO]. Pin de tequis.travel (Ejido La Trinidad, 7 km): revisar a mano. No publica la tarifa sola de la
-- tienda, solo paquetes: price_range vacío. Desayunos solo en paquetes: no lleva "Desayuno incluido".
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('3bf54533-2d98-57f9-ad69-b5edcdf12329', $v$Salterra Glamping$v$, 'hospedaje', $v$Glamping$v$, 20.5393980, -99.9569720, $v$Carlo Coccioli 7, Ejido La Trinidad$v$,
  $v$Glamping en tiendas safari, con jacuzzi privado y pet friendly$v$,
  $v$Glamping de tiendas tipo safari en el Ejido La Trinidad, cerca de la carretera 200, a unos 10 minutos del centro. Hay tiendas Standard con cama king, baño privado y WiFi, tiendas Deluxe con jacuzzi privado en la terraza y un tipi para parejas. Tiene alberca todo el año, sauna con costo extra, restaurante y bar, estacionamiento gratuito, cenas privadas junto al estanque, masajes y bicicletas; acepta mascotas con cargo por estancia y organiza bodas civiles y eventos de hasta 150 personas. En 2026 sus paquetes con experiencias y desayunos empezaban en 5,775 pesos.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/salterra-glamping-tienda.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/salterra-glamping-vista-aerea.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/salterra-glamping-estanque.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/salterra-glamping-tienda.jpg$v$, $v$442-169-3408$v$, NULL, $v$https://www.salterraglamping.com$v$, NULL, NULL,
  ARRAY[$v$Alberca$v$, $v$Jacuzzi privado$v$, $v$Pet Friendly$v$, $v$Restaurante$v$, $v$Bar$v$, $v$Estacionamiento$v$, $v$WiFi$v$, $v$Sauna$v$, $v$Masajes$v$, $v$Bodas y eventos$v$]::text[], ARRAY[$v$Romántico$v$, $v$Familiar$v$]::text[], true);

-- Hotel Villa Antigua & Centro de Convenciones. Fuente: villa-antigua.com.mx (hotel, galería, políticas,
-- reservaciones), tequis.travel, PDF 2025. Pin de tequis.travel (San Nicolás, municipio de Tequisquiapan): revisar
-- a mano. Una fila del PDF dice "Carretera 200 San Juan del Río-Ezequiel Montes km 11.5" [CONFLICTO menor].
-- La web anunciaba cafetería y restaurante "a partir de oct./nov. 21". No acepta mascotas (políticas).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('6c961a9d-8b84-5ee1-86b2-68419dedb3e8', $v$Hotel Villa Antigua$v$, 'hospedaje', $v$Hotel$v$, 20.4689350, -99.9460520, $v$Carretera San Juan del Río–Tequisquiapan km 11.5, San Nicolás$v$,
  $v$Hotel de 61 habitaciones con tres albercas templadas y spa$v$,
  $v$Hotel de 61 habitaciones y centro de convenciones sobre la carretera San Juan del Río–Tequisquiapan, a 8 km del centro. Tiene tres albercas de agua templada, una de ellas semiolímpica, jacuzzi al aire libre, spa y salón de belleza, gimnasio, cancha de tenis, cafetería y restaurante bar. Hay habitaciones estándar, superiores de dos pisos y suites con jacuzzi, y salones para bodas y eventos de hasta 500 personas. No acepta mascotas.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/hotel-villa-antigua-jardin.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-villa-antigua-alberca.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-villa-antigua-terraza.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/hotel-villa-antigua-jardin.jpg$v$, $v$414-273-3382$v$, $v$reservaciones@villa-antigua.com.mx$v$, $v$http://www.villa-antigua.com.mx$v$, NULL, NULL,
  ARRAY[$v$Alberca$v$, $v$Alberca climatizada$v$, $v$Jacuzzi$v$, $v$Jacuzzi privado$v$, $v$Spa$v$, $v$Gimnasio$v$, $v$Cancha de tenis$v$, $v$Restaurante$v$, $v$Estacionamiento$v$, $v$Bodas y eventos$v$]::text[], ARRAY[$v$Familiar$v$]::text[], true);

-- Hotel & Spa Hacienda Tres Vidas. Fuente: haciendatresvidas.com.mx (.com.mx; dirección, teléfono, WhatsApp, spa,
-- suites, tarifas), tequis.travel, PDF 2025. Pin de tequis.travel (San José de la Laja, municipio de Tequisquiapan):
-- revisar a mano. Mascotas en [CONFLICTO] (icono de tt / "No" en el PDF): no va. Temazcal, globo y cabalgata solo
-- en tt: no van. Tarifas de $1,999 a $2,949 (la web no aclara si son por noche) → moderate.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('d037eb70-9408-54a8-bba2-07542234cd8d', $v$Hotel & Spa Hacienda Tres Vidas$v$, 'hospedaje', $v$Hotel$v$, 20.6233760, -99.9728770, $v$Sor Juana Inés de la Cruz 74, San José de la Laja$v$,
  $v$Hotel hacienda con spa, alberca y suites con hidromasaje$v$,
  $v$Hotel hacienda en San José de la Laja, dentro del municipio de Tequisquiapan, a unos 14 km del centro. Tiene spa con hidroterapia y masajes, alberca al aire libre, zona de juegos infantiles, restaurante, y salón y terraza para bodas, XV años y conferencias. Las Junior Suites tienen bañera de hidromasaje y la Suite Master, además, sauna privado. En noviembre de 2026 su web publicaba tarifas de 1,999 a 2,949 pesos según la habitación.$v$,
  'moderate', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/hotel-spa-hacienda-tres-vidas-alberca.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-spa-hacienda-tres-vidas-fachada.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-spa-hacienda-tres-vidas-habitacion.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/hotel-spa-hacienda-tres-vidas-alberca.jpg$v$, $v$414-291-8000$v$, $v$ventas@haciendatresvidas.com.mx$v$, $v$https://haciendatresvidas.com.mx$v$, $v$55-6784-6960$v$, NULL,
  ARRAY[$v$Spa$v$, $v$Masajes$v$, $v$Alberca$v$, $v$Jacuzzi privado$v$, $v$Restaurante$v$, $v$Juegos infantiles$v$, $v$Bodas y eventos$v$]::text[], ARRAY[$v$Familiar$v$]::text[], true);

-- La Casona de San Juanito (hospedaje de Vinícola San Juanito, que ya está en la base como experiencia). Fuente:
-- sanjuanito.com.mx/la-casona (pide verificación anti-bots; texto y fotos por su API de WordPress), tequis.travel,
-- PDF 2025 ("Casona San Juanito"). Pin: OSM nodo 13939055801, el del viñedo. Tercera foto: la terraza del viñedo
-- que ya está en el servidor (de la web del mismo negocio). Precio: $3,900 y $4,500 por noche (2 pers.) → expensive.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('911f7247-5fee-5e4a-93fb-7c572dbf6c76', $v$La Casona de San Juanito$v$, 'hospedaje', $v$Hotel Boutique$v$, 20.6323660, -99.9716850, $v$Antiguo Camino a San Juan s/n, San José de la Laja, Tequisquiapan$v$,
  $v$Casona de 5 habitaciones en un viñedo, con comidas y cata incluidas$v$,
  $v$Hospedaje dentro de la Vinícola San Juanito, en San José de la Laja (municipio de Tequisquiapan), en la casona que fue la casa de uno de los socios del viñedo. Tiene cinco habitaciones, y la estancia incluye desayuno, comida y cena por cada noche, recorrido guiado y cata de tres vinos. En 2026 la noche en ocupación doble costaba 3,900 pesos, o 4,500 en la habitación principal, con anticipo del 50 %.$v$,
  'expensive', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/la-casona-de-san-juanito-habitacion.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/la-casona-de-san-juanito-comedor.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/san-juanito-terraza.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/la-casona-de-san-juanito-habitacion.jpg$v$, $v$55-5004-7300$v$, $v$reservaciones@sanjuanito.com.mx$v$, $v$https://www.sanjuanito.com.mx/la-casona/$v$, $v$55-7947-6854$v$, NULL,
  ARRAY[$v$Comidas incluidas$v$, $v$Desayuno incluido$v$, $v$Cata$v$]::text[], ARRAY[$v$Viñedos$v$]::text[], true);

-- Rancho Los Venados (reserva cinegética). Fuente: rancholosvenados.com (dirección, teléfono = tt, servicios),
-- tequis.travel, PDF 2025. Pin de tequis.travel (municipio de Tequisquiapan según OSM): revisar a mano. La web
-- bloquea descargas automáticas (verificación anti-bots): foto genérica. Alberca, rapel, tirolesa, etc. solo en tt:
-- no van. No publica precio (cotización por formulario).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('acc203d5-46bd-5928-8a1c-bb0977c5496c', $v$Rancho Los Venados$v$, 'hospedaje', $v$Cabañas$v$, 20.5721120, -100.0028420, $v$Carretera estatal 200 Querétaro–Tequisquiapan km 42, Fuentezuelas$v$,
  $v$Cabañas en una reserva con fauna, con comidas incluidas$v$,
  $v$Cabañas dentro de una reserva cinegética con bisontes, venados, antílopes y cebras, sobre la carretera estatal 200 Querétaro–Tequisquiapan, a unos 13 km del centro. Las cabañas tienen vista a la Peña de Bernal, chimenea de gas y terraza privada, y la comida tipo bufete (desayuno, comida y cena) va incluida. Hay servicios de spa; el safari, las cabalgatas y las caminatas se contratan aparte.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$442-156-5767$v$, $v$info.rancholosvenados@gmail.com$v$, $v$http://rancholosvenados.com$v$, $v$442-156-5767$v$, NULL,
  ARRAY[$v$Comidas incluidas$v$, $v$Desayuno incluido$v$, $v$Spa$v$, $v$Chimenea$v$]::text[], ARRAY[$v$Naturaleza$v$]::text[], true);

COMMIT;

-- =====================================================================================
-- Bloque 3: altas solo con fuentes de Turismo (ficha de tequis.travel + tabla HOTELES del PDF 2025)
-- =====================================================================================
-- Solo los que tienen nombre, dirección y teléfono coherentes entre tequis.travel y el PDF 2025, sin marca de
-- cerrado, remodelación o [CONFLICTO], y con una coordenada razonable (pin de tt revisado contra la calle en OSM).
-- Las dos fuentes son de Turismo municipal (cuentan como una): content_verified = false, sin amenidades (los iconos
-- de tt no son fiables y el texto de tt no tiene segunda fuente), foto genérica de hospedaje. Las estrellas son la
-- "clasificación" que pone el PDF 2025, no una certificación.
-- Quedan FUERA: Villa Florencia (calle en [CONFLICTO]: "Ezequiel Montes" / Nautha 6), Regalo del Alma (calle en
-- [CONFLICTO]), La Querencia (sin pin; el PDF le da el teléfono de La Casa Roja), La Casa Roja (sin pin),
-- Maridelfi ("en remodelación"), El Relox (cerrado / "coming soon"), Casa Jasave (dirección en [CONFLICTO] con
-- Neptuno), Gran Misiones y Posada Los Arcos (teléfono en [CONFLICTO]), Casa Blanca y Hacienda del Carmen (número en
-- [CONFLICTO]), M&F / Crown (nombre en [CONFLICTO]), La Veranda (teléfono en [CONFLICTO]), Amanecer Ranchero
-- (teléfono y km distintos entre tt y PDF), Quinta Rancho Viejo (teléfonos distintos), Casa Martha (su página de tt
-- es copia de la de St. George), Casa de Vino (web de plantilla, pin de tt a 7 km de su calle), Hotel El Patio
-- (posible hotel de paso), Viña TX (hospedaje [SIN CONFIRMAR]); sin pin: Casa Frida, Quinto Elemento, Containers
-- Tequis, La Herencia; fuera de la tabla HOTELES del PDF: Posada del Sol, La Casa de los Artistas, Hotel Villa 12,
-- Hotel Dalí, Cabaña Geranios, Opalos, Posada Campestre Santa Fe, Hotel Balneario Fidel Velázquez; autohoteles
-- (El Arco, El Paseo) y los de Ezequiel Montes (Cima Encantada, Hacienda Real La Nogalera, Piedras del Sol).
BEGIN;

-- Hotel Las Delicias. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 4 estrellas). Pin de tequis.travel (cae en Manuel Mateos, a media cuadra: APROXIMADO). Sin web propia: content_verified = false, sin amenidades, foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('54175091-a7cc-575c-984f-d2051dcdb41d', $v$Hotel Las Delicias$v$, 'hospedaje', $v$Hotel$v$, 20.5210280, -99.8918060, $v$5 de Mayo 1, Centro$v$,
  $v$Hotel en la calle 5 de Mayo, a 200 m de la plaza$v$,
  $v$Hotel en 5 de Mayo 1, Centro, a unos 200 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 4 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-0017$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Hotel Real de San José. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 5 estrellas). Pin de tequis.travel (OSM lo ubica en la calle Jaime Nunó: APROXIMADO). Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Su web (realdesanjosehotel.com.mx) no responde.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('28336ab8-cfd3-5463-89b3-07bc16c46a14', $v$Hotel Real de San José$v$, 'hospedaje', $v$Hotel$v$, 20.5176700, -99.8790360, $v$Av. Juárez Oriente 113, Barrio de la Magdalena$v$,
  $v$Hotel en el barrio de La Magdalena, a 1.4 km de la plaza$v$,
  $v$Hotel en Av. Juárez Oriente 113, Barrio de la Magdalena, a 1.4 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 5 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-231-2543$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Hotel del Parque. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 4 estrellas). Pin: OSM nodo 4190975516. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Número de habitaciones y mascotas en [CONFLICTO] entre tt y PDF: no se mencionan. Web "en construcción".
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('180cf741-c189-5561-946f-0b05d6792ee2', $v$Hotel del Parque$v$, 'hospedaje', $v$Hotel$v$, 20.5261664, -99.8904904, $v$Cerrada de Camelinas 1, Centro$v$,
  $v$Hotel en la Cerrada de Camelinas, a 400 m de la plaza$v$,
  $v$Hotel en Cerrada de Camelinas 1, Centro, a unos 400 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 4 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-0938$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Hotel La Rinconada. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Web "próximo lanzamiento".
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('2d75097d-6da3-57a5-bb10-13a3e7a179cd', $v$Hotel La Rinconada$v$, 'hospedaje', $v$Hotel$v$, 20.5210760, -99.8871550, $v$Av. Juárez Oriente 19, Centro$v$,
  $v$Hotel en la avenida Juárez Oriente, a 500 m de la plaza$v$,
  $v$Hotel en Av. Juárez Oriente 19, Centro, a unos 500 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-0459$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Posada del Virrey. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin: OSM nodo 6611206347. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- El PDF la lista dos veces (también como "Hotel Posada El Virrey"), con el mismo teléfono.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('69d3c36a-2770-560e-b894-daf5e19999a2', $v$Posada del Virrey$v$, 'hospedaje', $v$Hotel$v$, 20.5235482, -99.8924734, $v$Guillermo Prieto 9-N, Centro$v$,
  $v$Posada en la calle Guillermo Prieto, a 100 m de la plaza$v$,
  $v$Posada en Guillermo Prieto 9-N, Centro, a unos 100 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-0239$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Hotel Boutique Bello Atardecer. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 4 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Ojo: la página /hotel-bello-atardecer-2/ de tt es en realidad la de La Querencia; se usa la ficha del directorio. Web de Wix caída.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('cb296b5a-def1-5475-b6c8-f795d656cea6', $v$Hotel Boutique Bello Atardecer$v$, 'hospedaje', $v$Hotel Boutique$v$, 20.5231534, -99.8926601, $v$Guillermo Prieto 4, Centro$v$,
  $v$Hotel boutique en la calle Guillermo Prieto, a 100 m de la plaza$v$,
  $v$Hotel boutique en Guillermo Prieto 4, Centro, a unos 100 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 4 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-112-3349$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Hotel La Baronesa. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Web no resuelve.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('5c063219-a2d3-52b7-a33a-3d82ad0009b6', $v$Hotel La Baronesa$v$, 'hospedaje', $v$Hotel$v$, 20.5226177, -99.8938800, $v$Av. Centenario Sur 6, Centro$v$,
  $v$Hotel en la avenida Centenario Sur, a 200 m de la plaza$v$,
  $v$Hotel en Av. Centenario Sur 6, Centro, a unos 200 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-219-6610$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Posada Mezquites. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('5ddf88f6-24db-5d70-9020-8a2d4babef19', $v$Posada Mezquites$v$, 'hospedaje', $v$Hotel$v$, 20.5219873, -99.8938075, $v$Av. Centenario Sur 12, Centro$v$,
  $v$Posada en la avenida Centenario Sur, a 200 m de la plaza$v$,
  $v$Posada en Av. Centenario Sur 12, Centro, a unos 200 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-0365$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Posada San Francisco. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 2 estrellas). Pin: OSM nodo 6611206348. Sin web propia: content_verified = false, sin amenidades, foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('05327264-455e-5fbb-96e6-9492f7cf0c4b', $v$Posada San Francisco$v$, 'hospedaje', $v$Hotel$v$, 20.5243949, -99.8928707, $v$Moctezuma 2, Centro$v$,
  $v$Posada en la calle Moctezuma, a 200 m de la plaza$v$,
  $v$Posada en Moctezuma 2, Centro, a unos 200 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 2 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-0231$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Posada de Don Juan. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 2 estrellas). Pin de tequis.travel (OSM lo ubica en Moctezuma, a la vuelta: APROXIMADO). Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Web no resuelve.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('21ee43b5-b4de-5724-a5f3-e734645751b9', $v$Posada de Don Juan$v$, 'hospedaje', $v$Hotel$v$, 20.5238189, -99.8939808, $v$Av. Centenario Norte 20, Centro$v$,
  $v$Posada en la avenida Centenario Norte, a 300 m de la plaza$v$,
  $v$Posada en Av. Centenario Norte 20, Centro, a unos 300 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 2 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-0178$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Posada San Javier. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 2 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Web no resuelve.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('a4ab2745-6bca-5f97-8a7d-65a12beba213', $v$Posada San Javier$v$, 'hospedaje', $v$Hotel$v$, 20.5197947, -99.8920398, $v$Morelos Norte 63, Centro$v$,
  $v$Posada en la calle Morelos Norte, a 300 m de la plaza$v$,
  $v$Posada en Morelos Norte 63, Centro, a unos 300 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 2 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$55-3184-5583$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Casa Geranios. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Web no resuelve; su correo es de una agencia de viajes.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('e5d5a3dc-4c48-5973-b949-1aad29b8e01f', $v$Casa Geranios$v$, 'hospedaje', $v$Hotel$v$, 20.5238734, -99.8941194, $v$Moctezuma 29, Centro$v$,
  $v$Hotel en la calle Moctezuma, a 300 m de la plaza$v$,
  $v$Hotel en Moctezuma 29, Centro, a unos 300 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-226-4008$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Los Sauces. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel (OSM lo ubica en Ezequiel Montes: APROXIMADO). Sin web propia: content_verified = false, sin amenidades, foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('52ebc80f-5e8b-5bab-8846-f70df879d17e', $v$Los Sauces$v$, 'hospedaje', $v$Hotel$v$, 20.5252039, -99.8900177, $v$De los Sauces 1, Centro$v$,
  $v$Hotel en la calle De los Sauces, a 300 m de la plaza$v$,
  $v$Hotel en De los Sauces 1, Centro, a unos 300 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-0315$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Hotel El Mirador. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('b2cd923b-8be6-5bed-ad5c-1ee6ed0fd3d5', $v$Hotel El Mirador$v$, 'hospedaje', $v$Hotel$v$, 20.5251387, -99.8953652, $v$Potrero Gavillero 4, El Pedregal$v$,
  $v$Hotel en la colonia El Pedregal, a 500 m de la plaza$v$,
  $v$Hotel en Potrero Gavillero 4, El Pedregal, a unos 500 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-226-9996$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Suites Paraíso. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 4 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Su "web" es un portal no oficial: no se usa. El PDF la lista dos veces con el mismo teléfono.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('c90388df-515a-5e1a-afa6-48b6ec6ba05c', $v$Suites Paraíso$v$, 'hospedaje', $v$Hotel$v$, 20.5266979, -99.8904055, $v$Privada de Camelinas 12, Centro$v$,
  $v$Hotel de suites en la Privada de Camelinas, a 500 m de la plaza$v$,
  $v$Hotel de suites en Privada de Camelinas 12, Centro, a unos 500 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 4 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-1035$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Quinta Cobos TX. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('8d6de3f5-bb4f-554f-ad09-01e1a4946123', $v$Quinta Cobos TX$v$, 'hospedaje', $v$Hotel$v$, 20.5181556, -99.8933961, $v$Mariano Matamoros 10, Centro$v$,
  $v$Hotel en la calle Mariano Matamoros, a 500 m de la plaza$v$,
  $v$Hotel en Mariano Matamoros 10, Centro, a unos 500 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-101-1930$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Hotel del Pedregal. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel (OSM lo ubica en Potrero Saladito, El Pedregal: APROXIMADO). Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- El PDF solo da la colonia. Web negocio.site (404).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('1f6a9890-b7d6-51c2-a948-a44262d6b891', $v$Hotel del Pedregal$v$, 'hospedaje', $v$Hotel$v$, 20.5270628, -99.8942904, $v$Hacienda Grande de la Asunción 1, El Pedregal$v$,
  $v$Hotel en la colonia El Pedregal, a 600 m de la plaza$v$,
  $v$Hotel en Hacienda Grande de la Asunción 1, El Pedregal, a unos 600 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$427-130-4343$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Cabañas Gil. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Web de terceros (newalternative.com.mx) que no responde.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('0b38abb1-a765-5f4b-9249-5f1a9867702b', $v$Cabañas Gil$v$, 'hospedaje', $v$Cabañas$v$, 20.5205049, -99.8842659, $v$Miguel Hidalgo 19, Los Sabinos, La Magdalena$v$,
  $v$Cabañas en el barrio de La Magdalena, a 800 m de la plaza$v$,
  $v$Cabañas en Miguel Hidalgo 19, Los Sabinos, La Magdalena, a unos 800 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$55-2955-9421$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Hotel Villas Tequisquiapan. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 4 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- El PDF dice "Colonia Centro"; tt, Hacienda Grande. Web no resuelve.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('52a01acf-4e1e-509a-9f9a-443900dbe952', $v$Hotel Villas Tequisquiapan$v$, 'hospedaje', $v$Hotel$v$, 20.5310665, -99.8949456, $v$Francisco I. Madero 71, Hacienda Grande$v$,
  $v$Villas en Hacienda Grande, a 1.0 km de la plaza$v$,
  $v$Villas en Francisco I. Madero 71, Hacienda Grande, a 1.0 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 4 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-1796$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Elohim. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('88604a35-6895-5c5d-89df-f2011009d60d', $v$Elohim$v$, 'hospedaje', $v$Hotel$v$, 20.5241216, -99.9016819, $v$Lucio Blanco 49, Adolfo López Mateos$v$,
  $v$Hotel en la colonia Adolfo López Mateos, a 1.1 km de la plaza$v$,
  $v$Hotel en Lucio Blanco 49, Adolfo López Mateos, a 1.1 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-226-7272$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Chalets Media Luna. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Web no resuelve.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('561f2a98-aadc-5154-a3f8-f884246be40a', $v$Chalets Media Luna$v$, 'hospedaje', $v$Cabañas$v$, 20.5194746, -99.8817990, $v$Abasolo s/n, La Magdalena$v$,
  $v$Chalets en el barrio de La Magdalena, a 1.1 km de la plaza$v$,
  $v$Chalets en Abasolo s/n, La Magdalena, a 1.1 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-119-0468$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Hotel Bugambilias Rooms. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Solo tiene una web no oficial (mxhotel.site): no se usa.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('875c0753-c911-5e22-800d-236c98b6ad6d', $v$Hotel Bugambilias Rooms$v$, 'hospedaje', $v$Hotel$v$, 20.5220551, -99.8815104, $v$Gral. José María Arteaga 34B, La Magdalena$v$,
  $v$Hotel en el barrio de La Magdalena, a 1.1 km de la plaza$v$,
  $v$Hotel en Gral. José María Arteaga 34B, La Magdalena, a 1.1 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-0861$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Hotel Jardín del Edén. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Web no resuelve.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('eedad335-01c3-52e3-a74d-a333ac42817f', $v$Hotel Jardín del Edén$v$, 'hospedaje', $v$Hotel$v$, 20.5248888, -99.9047298, $v$Plan de Ayala 72, Adolfo López Mateos$v$,
  $v$Hotel en la colonia Adolfo López Mateos, a 1.4 km de la plaza$v$,
  $v$Hotel en Plan de Ayala 72, Adolfo López Mateos, a 1.4 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-114-8318$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Posada El Arrullo. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 2 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('dbec32a9-3c52-54e9-8a68-dfe25d892219', $v$Posada El Arrullo$v$, 'hospedaje', $v$Hotel$v$, 20.5217299, -99.9052830, $v$Av. Venustiano Carranza 130, Adolfo López Mateos$v$,
  $v$Posada en la colonia Adolfo López Mateos, a 1.4 km de la plaza$v$,
  $v$Posada en Av. Venustiano Carranza 130, Adolfo López Mateos, a 1.4 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 2 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-5341$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Hostal Pahpaqui. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Mascotas en [CONFLICTO] dentro del PDF ("No" en una fila, "Petfrienly" en otra): no se menciona.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('215572ec-3cf7-5235-bab8-9dee7cf81267', $v$Hostal Pahpaqui$v$, 'hospedaje', $v$Hotel$v$, 20.5125861, -99.8818648, $v$Paseo del Tepozán Norte 70, Barrio de San Juan$v$,
  $v$Hostal en el Barrio de San Juan, a 1.5 km de la plaza$v$,
  $v$Hostal en Paseo del Tepozán Norte 70, Barrio de San Juan, a 1.5 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$442-704-6537$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Hotel Boutique Casa Grande. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('582272a9-fa5a-5e60-a55f-0101a74f9de7', $v$Hotel Boutique Casa Grande$v$, 'hospedaje', $v$Hotel Boutique$v$, 20.5215515, -99.8771778, $v$Miguel Hidalgo 122, Villas del Sol, La Magdalena$v$,
  $v$Hotel boutique en el barrio de La Magdalena, a 1.5 km de la plaza$v$,
  $v$Hotel boutique en Miguel Hidalgo 122, Villas del Sol, La Magdalena, a 1.5 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$712-174-0122$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Villas Amalu. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- tt tiene otra ficha como "Villas Amalur", mismo lugar. Web no resuelve.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('9d817ec8-598c-5dd2-ae41-a019800efd3f', $v$Villas Amalu$v$, 'hospedaje', $v$Hotel$v$, 20.5278109, -99.8755596, $v$Vicente Suárez 28, La Magdalena$v$,
  $v$Villas en el barrio de La Magdalena, a 1.8 km de la plaza$v$,
  $v$Villas en Vicente Suárez 28, La Magdalena, a 1.8 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-0390$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- 7 Soles. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel (municipio de Tequisquiapan según OSM). Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Web no resuelve.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('f9676129-286f-52bf-93a1-86bd1493d54e', $v$7 Soles$v$, 'hospedaje', $v$Hotel$v$, 20.5578082, -99.9041620, $v$Carretera 120 Tequisquiapan–Ezequiel Montes, La Tortuga$v$,
  $v$Posada en La Tortuga, a 4.1 km de la plaza$v$,
  $v$Posada en Carretera 120 Tequisquiapan–Ezequiel Montes, La Tortuga, a 4.1 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$55-6967-6757$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Hotel Villa Campestre. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- tt dice que reserva por Airbnb.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('95f464c1-9f81-580c-bcfc-e2e88726048c', $v$Hotel Villa Campestre$v$, 'hospedaje', $v$Hotel$v$, 20.4902502, -99.9331870, $v$Margarita 20, Santa María del Camino$v$,
  $v$Hotel en Santa María del Camino, a 5.6 km de la plaza$v$,
  $v$Hotel en Margarita 20, Santa María del Camino, a 5.6 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$427-108-3421$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Bungalows Tequisquiapan. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Web no resuelve.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('fe244dcb-eb77-5fe8-9c34-e94a72f45a02', $v$Bungalows Tequisquiapan$v$, 'hospedaje', $v$Cabañas$v$, 20.4902093, -99.9336701, $v$Alcatraz 5, La Ermita (carretera 120 km 15)$v$,
  $v$Bungalows en La Ermita, a 5.7 km de la plaza$v$,
  $v$Bungalows en Alcatraz 5, La Ermita (carretera 120 km 15), a 5.7 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-231-5836$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Hotel Neptuno. Fuente: ficha de tequis.travel y tabla HOTELES del PDF 2025 (nombre, dirección y teléfono coinciden;
-- 3 estrellas). Pin de tequis.travel. Sin web propia: content_verified = false, sin amenidades, foto genérica.
-- Hotel Casa Jasave (excluido, [CONFLICTO]) también da "Av. Juárez 5".
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('15274b9f-5c1a-56ca-965c-d98931953fdc', $v$Hotel Neptuno$v$, 'hospedaje', $v$Hotel$v$, 20.5226156, -99.8891879, $v$Av. Juárez Oriente 5, Centro$v$,
  $v$Hotel en la avenida Juárez Oriente, a 300 m de la plaza$v$,
  $v$Hotel en Av. Juárez Oriente 5, Centro, a unos 300 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-0224$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

COMMIT;

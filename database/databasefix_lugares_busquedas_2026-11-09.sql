-- Lugares para las búsquedas de Search Console (nov 2026), con docs/datos/investigacion-negocios-2026-11.md.
-- Tres bloques independientes. Fotos: solo de la web propia de cada negocio, copiadas a
-- /srv/tequis/uploads/lugares/ (créditos en docs/datos/creditos-imagenes.md). Los que no tienen web
-- propia llevan la foto genérica de Commons de su categoría. is_verified queda en false (es la
-- insignia que ve el usuario); content_verified = true solo con web propia que confirma teléfono,
-- sitio y horario. price_range = '' cuando no hay fuente de precio: la web no lo muestra.
-- Inglés: web/lib/i18n/data-en.ts (PLACES_EN), por id.

-- =====================================================================================
-- Bloque 1: altas
-- =====================================================================================
BEGIN;

-- El Maravillas. Fuente: elmaravillas.com.mx, tequis.travel (horario), directorio 2025.
-- Pin APROXIMADO: tramo peatonal de Morelos Norte en OSM (el número no está mapeado).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('cd0b0544-2f71-57d2-b0ca-ecd842577b63', $v$El Maravillas$v$, 'gastronomia', $v$Restaurante$v$, 20.5229000, -99.8919000, $v$Morelos 7, Centro$v$,
  $v$Cocina mexicana creativa con terraza frente a la parroquia$v$,
  $v$Abrió en 2014 en el centro de Tequis, en homenaje a José Manuel Morales, abuelo de los tres hermanos que lo fundaron, y a sus aventuras de pesca, cacería, charrería y campamento. La carta del chef Alejandro Martínez incluye camarones roca, tostaditas de atún, salmón al cedro, tacos de barbacoa de borrego, chamorro al pibil y un plato de quesos de la región, con coctelería de autor. Hay mesas en terraza y en comedor, y desayunos de jueves a domingo.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/el-maravillas-terraza.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/el-maravillas-tacos.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/el-maravillas-camarones.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/el-maravillas-terraza.jpg$v$, $v$414-273-0208$v$, $v$contacto@elmaravillas.com.mx$v$, $v$https://www.elmaravillas.com.mx$v$, $v$414-273-0208$v$,
  $v${"miércoles": "13:00–23:59", "jueves": "9:30–23:59", "viernes": "9:30–23:59", "sábado": "9:30–23:59", "domingo": "9:30–20:00"}$v$::jsonb,
  ARRAY[$v$Terraza$v$, $v$Reservaciones$v$, $v$Desayunos$v$]::text[], ARRAY[$v$Mexicana$v$, $v$Coctelería$v$, $v$Terraza$v$]::text[], true);

-- ORIGENS. Fuente: origens.mx (teléfono, horario, precios), tequis.travel, directorio 2025.
-- Pin APROXIMADO: junto al Monumento al Centro Geográfico (nodo OSM 6603308195).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('a9e731dd-9e4b-58e9-a7da-87fecc31d76b', $v$ORIGENS$v$, 'gastronomia', $v$Restaurante$v$, 20.5215500, -99.8939600, $v$Andador Niños Héroes 30, Centro$v$,
  $v$Cocina mediterránea, deli y vinoteca junto al Centro Geográfico$v$,
  $v$Restaurante de cocina mediterránea con ingredientes de la región, abierto en 2020 en el primer granero histórico del pueblo. Tiene opciones veganas y vegetarianas, un deli de quesos artesanales y embutidos, y una vinoteca con más de 50 etiquetas locales, nacionales e internacionales. Se puede reservar y hace entregas a domicilio por WhatsApp. Está en una calle peatonal, a un minuto de la plaza.$v$,
  'moderate', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/origens-platillo.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/origens-deli.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/origens-patio.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/origens-platillo.jpg$v$, $v$414-119-8018$v$, $v$hola@origens.mx$v$, $v$https://origens.mx$v$, $v$414-119-8018$v$,
  $v${"lunes": "cerrado", "martes": "cerrado", "miércoles": "cerrado", "jueves": "13:00–22:00", "viernes": "13:00–22:00", "sábado": "13:00–22:00", "domingo": "13:00–22:00"}$v$::jsonb,
  ARRAY[$v$Vinos locales$v$, $v$Opciones veganas$v$, $v$Reservaciones$v$, $v$Delivery$v$]::text[], ARRAY[$v$Mediterránea$v$, $v$Quesos$v$, $v$Vinos$v$]::text[], true);

-- Río 33 (restaurante del Hotel Río). Fuente: hotelesriotequisquiapan.com (NO hotelrio.com.mx, que es
-- de Vallarta), tequis.travel. Pin: enlace de mapa del sitio del hotel (coincide con OSM). Sin horario.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('331a2612-cb19-520a-94f7-bf1c34ddaeaf', $v$Río 33$v$, 'gastronomia', $v$Restaurante$v$, 20.5204800, -99.8950600, $v$Niños Héroes 33, Centro (Hotel Río)$v$,
  $v$Parrilla y cocina internacional con cava de vinos, en el Hotel Río$v$,
  $v$El restaurante del Hotel Río Tequisquiapan, a una cuadra del Centro Geográfico. Combina cortes a la parrilla con cocina internacional y tiene una carta de más de cien vinos mexicanos e internacionales.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/rio-33-comedor.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/rio-33-cava.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/rio-33-comedor.jpg$v$, $v$414-273-0015$v$, $v$tequisquiapan@hotelesrio.com.mx$v$, $v$https://www.hotelesriotequisquiapan.com/restaurants.html$v$, NULL, NULL,
  ARRAY[$v$Cava$v$, $v$Bar$v$]::text[], ARRAY[$v$Parrilla$v$, $v$Internacional$v$, $v$Vinos$v$]::text[], false);

-- La Luna Terraza (azotea de K'puchinos). Fuente: kpuchinos.com.mx/la-luna-terraza (da dos horarios
-- distintos: sin horario), tequis.travel, Grupo Animal. Pin: el de K'puchinos. Foto: la de la terraza
-- que ya teníamos de la web de K'puchinos.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('057102bf-a338-5000-82fe-22626c5d4701', $v$La Luna Terraza$v$, 'gastronomia', $v$Bar$v$, 20.5229580, -99.8911750, $v$Independencia 7, Centro (azotea de K'puchinos)$v$,
  $v$Bar en la azotea de K'puchinos, con vista al centro$v$,
  $v$La azotea de K'puchinos, con coctelería y vista al centro del pueblo; buena para ver el atardecer. Tiene karaoke algunas noches y brunch los fines de semana. Sus horarios cambian: confírmalos antes de ir.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/kpuchinos-terraza-la-luna.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/kpuchinos-terraza-la-luna.jpg$v$, $v$414-273-2482$v$, $v$contacto@kpuchinos.com.mx$v$, $v$https://www.kpuchinos.com.mx/la-luna-terraza/$v$, NULL, NULL,
  ARRAY[$v$Terraza$v$, $v$Vista panorámica$v$, $v$Reservaciones$v$]::text[], ARRAY[$v$Terraza$v$, $v$Coctelería$v$, $v$Atardecer$v$, $v$Karaoke$v$, $v$Brunch$v$]::text[], false);

-- Pizzas Don Rigo. Fuente: OSM nodo 5419378324 (pin) y sus páginas de Facebook. Teléfono y dirección
-- en conflicto entre fuentes: sin teléfono. Sin web: foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('6ba8d481-2d1b-51dd-a86e-c3f04cb5191f', $v$Pizzas Don Rigo$v$, 'gastronomia', $v$Pizzería$v$, 20.5226937, -99.8980124, $v$Av. Juárez Poniente, Centro$v$,
  $v$Pizzería del pueblo sobre Juárez Poniente$v$,
  $v$Pizzería local de Tequisquiapan, con su local principal sobre Juárez Poniente y una sucursal. Confirma horario y teléfono antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, NULL, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Pizzas$v$]::text[], false);

-- Vinícola San Juanito. Fuente: sanjuanito.com.mx (teléfono, horario, precios), OSM nodo 13939055801.
-- En San José de la Laja, dentro del municipio de Tequisquiapan (18 km de la plaza).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('4133a23e-60d8-5e22-9d5a-88753a7c5d71', $v$Vinícola San Juanito$v$, 'experiencias', $v$Viñedo$v$, 20.6323660, -99.9716850, $v$Antiguo Camino a San Juan s/n, San José de la Laja, Tequisquiapan$v$,
  $v$Viñedo boutique con catas y vista a la Peña de Bernal$v$,
  $v$Viñedo que nació en 2007 como finca autosustentable en San José de la Laja, dentro del municipio de Tequisquiapan. El recorrido pasa por el campo, la bodega y la cava, y termina con cata de 3 o 6 vinos. Desde la terraza se ve la Peña de Bernal y ahí se puede comer. Tiene hospedaje y organiza bodas y eventos. No hace falta reservar en grupos pequeños; abre de viernes a domingo, festivos y vacaciones.$v$,
  'moderate', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/san-juanito-terraza.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/san-juanito-cava.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/san-juanito-cosecha.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/san-juanito-terraza.jpg$v$, $v$55-5004-7300$v$, NULL, $v$https://www.sanjuanito.com.mx$v$, $v$55-7947-6854$v$,
  $v${"lunes": "cerrado", "martes": "cerrado", "miércoles": "cerrado", "jueves": "cerrado", "viernes": "11:00–17:30", "sábado": "11:00–17:30", "domingo": "11:00–17:30"}$v$::jsonb,
  ARRAY[$v$Tours$v$, $v$Cata$v$, $v$Restaurante$v$, $v$Hospedaje$v$]::text[], ARRAY[$v$Vino$v$, $v$Tours$v$, $v$Sustentable$v$]::text[], true);

-- Spa Studio 7 (Hotel San Carlos). Fuente: hotelsancarlostx.com (teléfono y horario), directorio 2025.
-- Pin APROXIMADO: calle Heroico Colegio Militar en OSM. Su única foto es una tira de 1200x301: foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('b8fb8442-db5b-57a6-892f-097d5acb62c6', $v$Spa Studio 7$v$, 'experiencias', $v$Spa$v$, 20.5254190, -99.8953610, $v$Heroico Colegio Militar 7, Centro (Hotel San Carlos)$v$,
  $v$Spa del Hotel San Carlos, con sauna, vapor y masajes$v$,
  $v$El spa del Hotel San Carlos, en el centro, tiene sauna o vapor, tina de hidromasaje y regadera. Ofrece masajes sueco, hawaiano, relajante y de drenaje linfático, reflexología, envoltura de café, faciales y exfoliación con sales. De lunes a jueves atiende con reservación.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-6006$v$, $v$reservacionessancarlostx@outlook.com$v$, $v$https://www.hotelsancarlostx.com/servicios/spa-studio-7.php$v$, NULL,
  $v${"lunes": "con reservación", "martes": "con reservación", "miércoles": "con reservación", "jueves": "con reservación", "viernes": "11:00–20:00", "sábado": "11:00–20:00", "domingo": "9:00–15:00"}$v$::jsonb,
  ARRAY[$v$Sauna$v$, $v$Masajes$v$, $v$Faciales$v$, $v$Jacuzzi$v$]::text[], ARRAY[$v$Spa$v$, $v$Masajes$v$]::text[], true);

-- Espacio Sense Spa (La Casona Tequisquiapan Hotel & Spa). Fuente: lacasonatequisquiapan.mx (NO .com,
-- que redirige a otro sitio). Pin: el de su propio mapa (js/map.js). Sin horario publicado.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('1121c798-c22b-58db-94ab-e0e8313661bd', $v$Espacio Sense Spa – La Casona$v$, 'experiencias', $v$Spa$v$, 20.5362418, -99.8936143, $v$Antiguo Camino al Sauz 55, Hacienda Grande$v$,
  $v$Spa del hotel La Casona, con temazcal, sauna y jacuzzi$v$,
  $v$El spa está en el Espacio Sense, el área solo para adultos de La Casona Tequisquiapan Hotel & Spa. Tiene cabina de tratamiento individual y de pareja, sauna, temazcal y jacuzzi, y ofrece masajes, faciales y tratamientos a base de agave. Pregunta horarios y disponibilidad al reservar.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/espacio-sense-cabina.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/espacio-sense-jardin.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/espacio-sense-cabina.jpg$v$, $v$414-273-5635$v$, NULL, $v$https://lacasonatequisquiapan.mx/es/espacio-sense$v$, $v$414-226-2178$v$, NULL,
  ARRAY[$v$Sauna$v$, $v$Temazcal$v$, $v$Jacuzzi$v$, $v$Masajes$v$, $v$Faciales$v$]::text[], ARRAY[$v$Spa$v$, $v$Masajes$v$]::text[], false);

-- Balneario La Vega. Fuente: balneariolavega.mx (teléfono, dirección, horario; su WhatsApp de la web es
-- de relleno, se usa el de tequis.travel), adn40 (ago-2026, precio). Pin: el del mapa de su web.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('fb30e010-d760-5805-ac5b-e9da4570373d', $v$Balneario La Vega$v$, 'experiencias', $v$Balneario$v$, 20.5302412, -99.8872326, $v$Paseo de la Vega s/n, Barrio de La Magdalena$v$,
  $v$Balneario familiar con alberca olímpica, abierto toda la semana$v$,
  $v$Balneario a unos minutos de la plaza, en el Barrio de La Magdalena, con alberca olímpica, tobogán y chapoteadero. Se puede acampar, y tiene habitaciones y palapas para grupos. Abre todos los días; en 2026 la entrada costaba 100 pesos y 50 los menores de 12.$v$,
  'budget', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/balneario-la-vega-jardin.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/balneario-la-vega-jardin.jpg$v$, $v$414-273-4534$v$, NULL, $v$https://balneariolavega.mx$v$, $v$414-273-4534$v$,
  $v${"lunes": "8:00–18:00", "martes": "8:00–18:00", "miércoles": "8:00–18:00", "jueves": "8:00–18:00", "viernes": "8:00–18:00", "sábado": "8:00–18:00", "domingo": "8:00–18:00"}$v$::jsonb,
  ARRAY[$v$Albercas$v$, $v$Camping$v$]::text[], ARRAY[$v$Albercas$v$, $v$Familiar$v$]::text[], true);

COMMIT;

-- =====================================================================================
-- Bloque 2: lugares que ya teníamos, con datos de su sitio oficial
-- =====================================================================================
BEGIN;

-- Termas del Rey: termasdelrey.com (horario, precios, fotos). El teléfono no coincide entre fuentes
-- (442 en su web, 441 en tequis.travel): se deja el que había y content_verified sigue en false.
UPDATE places SET
  short_description = $v$Parque acuático con alberca de olas y toboganes$v$,
  full_description = $v$Parque acuático a 10 minutos de Tequis, con toboganes, alberca de olas, chapoteaderos, fosa de clavados, lagos y zona de campamento. Abre de viernes a domingo de 9 a 18 h; en 2026 la entrada costaba 199 pesos adultos y 125 niños, con descuento comprando en línea.$v$,
  website = $v$https://www.termasdelrey.com$v$, email = $v$gerencia@termasdelrey.com$v$,
  schedule_json = $v${"lunes": "cerrado", "martes": "cerrado", "miércoles": "cerrado", "jueves": "cerrado", "viernes": "9:00–18:00", "sábado": "9:00–18:00", "domingo": "9:00–18:00"}$v$::jsonb,
  image_urls = ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/termas-del-rey-campamento.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/termas-del-rey-isla.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/termas-del-rey-campamento.jpg$v$,
  amenities = ARRAY[$v$Albercas$v$, $v$Toboganes$v$, $v$Camping$v$]::text[],
  updated_at = NOW()
WHERE id = 'edf8fd31-93ef-5673-8ad5-7341d6fae02d';

-- Parque Acuático El Oasis: eloasistequisquiapan.com (teléfonos, horario, precios). Su portada solo
-- tiene un cartel: se queda la foto genérica. El pin sigue aproximado (km 10).
UPDATE places SET
  full_description = $v$Parque acuático con agua termal a 36 °C, alberca de olas, alberca olímpica, toboganes, cascadas, tirolesa y 262 espacios para acampar, con restaurante y estacionamiento gratis. Abre de viernes a domingo de 9 a 18 h, además de vacaciones y festivos. En 2026 la entrada costaba 190 pesos adultos y 150 niños y adultos mayores.$v$,
  website = $v$https://eloasistequisquiapan.com$v$, whatsapp_number = $v$446-138-4112$v$,
  schedule_json = $v${"lunes": "cerrado", "martes": "cerrado", "miércoles": "cerrado", "jueves": "cerrado", "viernes": "9:00–18:00", "sábado": "9:00–18:00", "domingo": "9:00–18:00"}$v$::jsonb,
  amenities = ARRAY[$v$Albercas termales$v$, $v$Tirolesa$v$, $v$Camping$v$, $v$Restaurante$v$, $v$Estacionamiento$v$]::text[],
  content_verified = true,
  updated_at = NOW()
WHERE id = '04332bc5-6b65-5067-80bb-bd6d1562e941';

-- Mercado Guadalupano: remodelación de 2026 (Voz Imparcial, 22-may-2026).
UPDATE places SET
  full_description = $v$Mercado municipal de fruta, verdura y comida regional, bueno para desayunar. Se remodeló en 2026, con techumbre e iluminación nuevas. Lleva efectivo.$v$,
  updated_at = NOW()
WHERE id = '20fafbc6-b72f-5792-9ac2-4daff496c70c';

COMMIT;

-- =====================================================================================
-- Bloque 3: lugares de la carga inicial sin ninguna evidencia (soft-delete)
-- =====================================================================================
-- Reciben búsquedas, pero no hay web, redes, directorio de Turismo ni OSM de ninguno; dos tienen
-- teléfonos de relleno. Quien va a la dirección no encuentra nada. Se reactivan con is_active = true.
BEGIN;

UPDATE places SET is_active = false, updated_at = NOW()
WHERE id IN (
  '9357aad0-9a72-48fc-ab83-e82b5b4a7503', -- La Viña Wine Bar (Morelos 15)
  '63730a5f-3b09-43a7-90c5-c3bd66cdcffb', -- La Terraza del Centro (Portal Hidalgo 12, 414-273-1234)
  '4ef6c3ef-8b06-4f76-b9cf-78b96b840559', -- Dulces Típicos La Abuelita (Portal Guerrero 7)
  '9dba17da-d6d0-403b-b35f-939b6f0e46ca'  -- Mariscos El Puerto (Ezequiel Montes 45, 414-273-3456)
);

COMMIT;

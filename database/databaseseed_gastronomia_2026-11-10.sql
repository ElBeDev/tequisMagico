-- APLICADA el 2026-11-10 en la base del VPS, con respaldo previo en /root/respaldos/places-events-20261110.sql (y la base completa en tequis-completa-20261110.dump). Preparado el 2026-11-10 con docs/datos/investigacion-gastronomia-2026-11.md.
-- Gastronomía para las búsquedas "dónde comer en Tequisquiapan" (desayunos, cortes, mariscos, pizza,
-- con niños, pet friendly, bares). Tres bloques independientes. Fotos: solo de la web propia de cada
-- negocio, para copiar a /srv/tequis/uploads/lugares/ (créditos en docs/datos/creditos-imagenes.md).
-- Los que no tienen web propia llevan la foto genérica de Commons de gastronomía. is_verified queda en
-- false (es la insignia que ve el usuario); content_verified = true solo con web propia que confirma
-- teléfono, dirección y horario. price_range = '' cuando no hay fuente de precio.
-- Inglés: web/lib/i18n/data-en.ts (PLACES_EN), por id.

-- =====================================================================================
-- Bloque 1: bajas de la carga inicial y correcciones a lugares que ya teníamos
-- =====================================================================================
-- Los 13 lugares de comida de la carga inicial que siguen activos no aparecen en ninguna fuente: ni en
-- las 94 fichas del directorio de restaurantes de tequis.travel, ni en sus 49 fichas largas, ni en el
-- Directorio Tequisquiapan 2025 de Turismo municipal, y ninguno de sus teléfonos sale ahí. Varios usan
-- la dirección de otro negocio real. Soft-delete: se reactivan con is_active = true.
BEGIN;

-- Morelos 12 es el Hotel Boutique La Granja (La Troje, Bar La Guayaba).
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW()
WHERE id = 'cd6e3c4f-71ca-41ed-a823-563503450dcd'; -- La Fabbrica Italiana (Morelos 12, 414-273-2156)

-- Juárez 10 es el Hotel La Plaza (La Valentina, Las Brasas, La Cantina).
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW()
WHERE id = '4fc11ba0-c08e-4d2f-8590-86a65f1fcdb8'; -- La Cueva del Pirata (Juárez 10)

-- Morelos 8 es el Hotel El Relox (databasefix_research_2026-09.sql).
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW()
WHERE id = 'f09ca240-5456-4a55-b490-73236c7d20f6'; -- La Estancia Tequisquiapan (Morelos 8, 414-273-0432)

-- Sin rastro; el teléfono parece de relleno.
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW()
WHERE id = '385996c2-0e6b-475c-8401-23ec14cf7bfc'; -- Pizzería Don Giovanni (Independencia 30, 414-273-5678)

-- Sin rastro. El único sushi que aparece es "Sake Sushi Place" (Plaza Los Arcos), solo en agregadores.
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW()
WHERE id = 'cf761f14-9f56-4abd-8bd0-63cd3aa9b1e8'; -- Sushi Roll Tequisquiapan (Ezequiel Montes 20)

-- Sin rastro.
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW()
WHERE id = '291c9dd6-36af-4a45-af2a-661b77865971'; -- Los Faroles (Portal Guerrero 5, 414-273-0063)

-- Sin rastro.
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW()
WHERE id = '335a1a84-0d8e-415c-8d09-2b1227d67f45'; -- Café del Centro (Portal Guerrero 3)

-- Sin rastro.
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW()
WHERE id = '15b47986-5f84-409e-a8be-23364923c3db'; -- Doña Juanita (Emiliano Zapata 6, 414-273-0245)

-- Sin rastro.
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW()
WHERE id = '4bf399e1-a275-4884-a986-230de32c4909'; -- Antojitos Doña Mary (Morelos esq. Juárez)

-- Sin rastro.
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW()
WHERE id = '48991d03-e621-4041-8e6e-c6cf04bff969'; -- El Vergel (Juárez 24)

-- Sin rastro; la chocolatería real del centro es Chocolate Molinillo (Independencia 17).
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW()
WHERE id = '266ac115-d2a1-4c00-80c2-217a3f9bfc68'; -- Chocolatería Don Rafa (Juárez 8)

-- Sin rastro; el "El Centenario" del Directorio 2025 es una inmobiliaria.
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW()
WHERE id = '0a59818e-b74f-48a6-8add-0555f076dc08'; -- Bar El Centenario (Andador 5 de Mayo 8)

-- Ningún negocio con ese nombre; tequis.travel habla de "nieves artesanales" en la plaza, sin nombre.
UPDATE places SET is_active = false, is_featured = false, is_verified = false, updated_at = NOW()
WHERE id = 'ff89e119-3976-42f5-aa94-85d5983ab51a'; -- La Nevería del Pueblo (Andador Independencia)

-- K'puchinos: su web (kpuchinos.com.mx) y su ficha de tequis.travel ya no hablan de "fusión" con
-- pizzas y pastas (texto de la carga inicial), sino de cocina típica queretana hecha por mayoras,
-- desayunos típicos y buffet de desayuno los domingos y festivos. La ficha de tequis.travel agrega
-- terraza en el andador peatonal con zona pet friendly y música en vivo viernes y sábado por la noche.
-- Se conservan Jardín y WiFi de la carga inicial (sin fuente nueva que los contradiga).
UPDATE places SET
  short_description = $v$Cocina típica queretana frente a la plaza principal$v$,
  full_description = $v$Restaurante con más de 35 años en el centro de Tequis, en la plaza principal. Su cocina típica queretana la preparan mayoras, cocineras de la región, con ingredientes locales: desayunos típicos, comidas y cenas. Los domingos y festivos hay buffet de desayuno, y los viernes y sábados, música en vivo por la noche. Tiene terraza en el andador peatonal, con zona pet friendly.$v$,
  amenities = ARRAY[$v$Desayunos$v$, $v$Terraza$v$, $v$Pet Friendly$v$, $v$Música en vivo$v$, $v$Reservaciones$v$, $v$Bar$v$, $v$Jardín$v$, $v$WiFi$v$]::text[],
  tags = ARRAY[$v$Mexicana$v$, $v$Centro$v$]::text[],
  updated_at = NOW()
WHERE id = 'ad124805-fa89-49fa-ab2c-2839d59ee840';

COMMIT;

-- =====================================================================================
-- Bloque 2: altas con web propia verificada (del negocio o de su hotel)
-- =====================================================================================
-- Pin: OSM cuando el lugar tiene nodo propio; si no, el del directorio de restaurantes de tequis.travel
-- (tt-dir), que no está verificado en OSM. Horarios marcados [FRÁGIL] o [CONFLICTO] en la
-- investigación: schedule_json NULL.
BEGIN;

-- Rincón Mexicano. Fuente: rinconmexicano.com.mx (más de 30 años, carta, menú infantil, fresas con
-- crema), tt-dir (dirección, teléfono, correo), México Desconocido (terraza, admite perros, ~250 pesos
-- por persona [FRÁGIL]). Teléfono: 414 en tt-dir y México Desconocido, 427 en el Directorio 2025.
-- Su web no da teléfono ni dirección: content_verified false. Horario solo de un tercero: sin horario.
-- Pin: tt-dir (no está en OSM). Su única foto es un banner con texto: foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('5039f5f3-5040-549f-834e-9293413bbf6d', $v$Rincón Mexicano$v$, 'gastronomia', $v$Restaurante$v$, 20.5228922, -99.8911004, $v$Independencia 5, local B, Centro$v$,
  $v$Cocina mexicana y fresas con crema, junto a la plaza$v$,
  $v$Restaurante-bar de cocina mexicana con más de 30 años en el centro de Tequis. La carta tiene antojitos, sopas, carnes, aves y pastas, un menú para niños, y su postre más conocido son las fresas con crema. Tiene terraza y admite perros.$v$,
  'moderate', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-4678$v$, $v$contacto@rinconmexicano.com.mx$v$, $v$https://rinconmexicano.com.mx$v$, NULL, NULL,
  ARRAY[$v$Bar$v$, $v$Terraza$v$, $v$Pet Friendly$v$]::text[], ARRAY[$v$Mexicana$v$, $v$Postres$v$, $v$Familiar$v$, $v$Centro$v$]::text[], false);

-- La Valentina (Hotel La Plaza). Fuente: hotelplazatequis.com/restaurantes-en-tequisquiapan (dirección,
-- teléfonos, horario), tt-dir y Directorio 2025 (coinciden en el 414 273 0056). Horario [FRÁGIL]
-- (todos los días de 7:30 a 22:30): sin horario. Pin: OSM nodo 6601353692 (Hotel La Plaza).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('3a038b28-8401-5fc4-85db-e99b3936b7e9', $v$La Valentina$v$, 'gastronomia', $v$Restaurante$v$, 20.5228358, -99.8920285, $v$Andador Benito Juárez Pte. 10, Centro (Hotel La Plaza)$v$,
  $v$Cocina mexicana con mesas en el portal frente a la plaza$v$,
  $v$El restaurante de cocina mexicana del Hotel La Plaza de Tequisquiapan, en la plaza principal. Sirve desayuno, comida y cena todos los días, y los domingos hay desayuno buffet con música de piano en vivo. Sus mesas del portal dan directo a la plaza.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/la-valentina-comedor.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/la-valentina-comedor.jpg$v$, $v$414-273-0056$v$, $v$hola@hotelplazatequis.com$v$, $v$https://hotelplazatequis.com/restaurantes-en-tequisquiapan/$v$, $v$414-140-4094$v$, NULL,
  ARRAY[$v$Desayunos$v$, $v$Música en vivo$v$, $v$Reservaciones$v$]::text[], ARRAY[$v$Mexicana$v$, $v$Centro$v$]::text[], true);

-- Las Brasas (Hotel La Plaza). Fuente: hotelplazatequis.com/restaurantes-en-tequisquiapan. Teléfono: el
-- del hotel (la web); tt-dir y el Directorio 2025 le dan el 414 273 0579, que la web no menciona.
-- Horario sin horas ("comida y cena todos los días"): content_verified false. Pin: OSM nodo 6601353692.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('76dc5010-db6f-50e0-bbd0-6fa4d7f4abe8', $v$Las Brasas$v$, 'gastronomia', $v$Parrilla$v$, 20.5228358, -99.8920285, $v$Andador Benito Juárez Pte. 10, Centro (Hotel La Plaza, segundo piso)$v$,
  $v$Carnes al carbón con vista a la plaza, en el Hotel La Plaza$v$,
  $v$El restaurante de cortes del Hotel La Plaza de Tequisquiapan, especializado en carnes al carbón. Está en el segundo piso del hotel, con vista a la plaza y a los cerros que rodean el pueblo. Abre para comida y cena todos los días.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/las-brasas-entrada.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/las-brasas-entrada.jpg$v$, $v$414-273-0005$v$, $v$hola@hotelplazatequis.com$v$, $v$https://hotelplazatequis.com/restaurantes-en-tequisquiapan/$v$, $v$414-140-4094$v$, NULL,
  ARRAY[$v$Reservaciones$v$]::text[], ARRAY[$v$Cortes$v$, $v$Centro$v$]::text[], false);

-- La Cantina (Hotel La Plaza). Fuente: hotelplazatequis.com/restaurantes-en-tequisquiapan (bar, deportes,
-- cierra a las 23 h de lunes a jueves y a las 2 h viernes y sábado; sin hora de apertura ni domingo).
-- No está en tequis.travel. Pin: OSM nodo 6601353692.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('68efb9fd-d998-5fe2-b4d1-3a82dead31c3', $v$La Cantina$v$, 'gastronomia', $v$Bar$v$, 20.5228358, -99.8920285, $v$Andador Benito Juárez Pte. 10, Centro (Hotel La Plaza)$v$,
  $v$El bar del Hotel La Plaza, abierto hasta tarde los fines de semana$v$,
  $v$El bar del Hotel La Plaza de Tequisquiapan, en la plaza principal. Tiene bebidas y botanas, se puede pedir de la carta de los restaurantes del hotel y transmite eventos deportivos. De lunes a jueves abre hasta las 23 h, y viernes y sábado hasta las 2 h.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/la-cantina-barra.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/la-cantina-barra.jpg$v$, $v$414-273-0005$v$, $v$hola@hotelplazatequis.com$v$, $v$https://hotelplazatequis.com/restaurantes-en-tequisquiapan/$v$, $v$414-140-4094$v$, NULL,
  ARRAY[$v$Bar$v$]::text[], ARRAY[$v$De noche$v$, $v$Deportes$v$, $v$Centro$v$]::text[], false);

-- El Atorón. Fuente: restauranteelatoron.com.mx (barbacoa, platillos, más de 20 años, teléfono, correo,
-- dirección), tt-ficha (área de juegos, cortes, coctelería, vinos de la región, postres), tt-dir y
-- Directorio 2025 (coinciden en el 414 273 3860; la tt-ficha da 414 112 1614). Su web también dice
-- "Todos los días de 08:00 a 24:00 hrs.", que la investigación no registró: sin horario y
-- content_verified false hasta confirmarlo. Pin: tt-dir. Sus fotos son de banco: foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('c7087927-0ce3-5e73-ba3c-11810f87aa05', $v$El Atorón$v$, 'gastronomia', $v$Restaurante$v$, 20.5189935, -99.8971427, $v$Niños Héroes 49, Centro (entre Matamoros y Niños Héroes)$v$,
  $v$Barbacoa de borrego y cocina mexicana, con área de juegos$v$,
  $v$Restaurante familiar de cocina mexicana con más de 20 años, conocido por su barbacoa y consomé de borrego. También sirve chilaquiles, huevos al gusto, mixiote, tampiqueña, arrachera, pancita y parrillada, además de cortes, coctelería, vinos de la región y postres de la casa. Tiene área de juegos para niños y está a cinco minutos del centro.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-3860$v$, $v$elatoron@live.com.mx$v$, $v$https://restauranteelatoron.com.mx$v$, NULL, NULL,
  ARRAY[$v$Desayunos$v$, $v$Área de juegos$v$, $v$Vinos locales$v$, $v$Reservaciones$v$]::text[], ARRAY[$v$Mexicana$v$, $v$Barbacoa$v$, $v$Cortes$v$, $v$Familiar$v$, $v$Centro$v$]::text[], false);

-- Capricho's. Fuente: caprichosrestaurante-com.webnode.mx (franco-mexicana desde 1991, carta con
-- desayunos, antojitos, bar y menú infantil, dirección, teléfonos), tt-dir "Caprichos" (coincide en el
-- 414 109 9328) y Directorio 2025 (coincide en el 414 231 2503). tequis.travel tiene una segunda ficha,
-- "Capricho's de Luis" (Juárez Pte. 7, 414 273 0108, número que el Directorio también le da a La Taberna
-- Alemana): no se usa. Su web es de 2018 y trae tres horarios distintos: sin horario y content_verified
-- false. Pin: OSM nodo 6611206346 ("Capricho's").
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('aa2d6bd0-5a75-5c87-8bc6-cd0dc2e32843', $v$Capricho's$v$, 'gastronomia', $v$Restaurante$v$, 20.5225988, -99.8926137, $v$Av. Juárez 27, Centro$v$,
  $v$Cocina franco-mexicana en el centro, desde 1991$v$,
  $v$Restaurante-bar de cocina franco-mexicana abierto en 1991, a unos pasos de la plaza. La carta incluye desayunos, antojitos mexicanos, pastas, pollo, pescados y carnes, postres y menú infantil, y también organiza eventos. Su web tiene horarios que no coinciden entre sí: confírmalos antes de ir.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/capricho-s-comedor.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/capricho-s-salon.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/capricho-s-comedor.jpg$v$, $v$414-109-9328$v$, $v$restaurantebarcaprichos@hotmail.com$v$, $v$https://caprichosrestaurante-com.webnode.mx$v$, NULL, NULL,
  ARRAY[$v$Desayunos$v$, $v$Bar$v$, $v$Reservaciones$v$]::text[], ARRAY[$v$Mexicana$v$, $v$Francesa$v$, $v$Familiar$v$, $v$Centro$v$]::text[], false);

-- Rincón Austriaco. Fuente: rinconaustriaco.com.mx (abrió el 13-nov-1998, pastelería europea, desayunos
-- y comidas, menú de desayuno, horario [FRÁGIL]), tt-dir y Directorio 2025 (coinciden en el 414 273
-- 4615). Su web no da teléfono ni dirección: content_verified false. Pin: tt-dir.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('e66b34d7-deb5-5311-a85b-8bda92b195ba', $v$Rincón Austriaco$v$, 'gastronomia', $v$Cafetería$v$, 20.5233149, -99.8897268, $v$Carrizal 23, Centro$v$,
  $v$Pastelería europea y café, con desayunos y comidas$v$,
  $v$Pastelería europea y cafetería que abrió el 13 de noviembre de 1998 en el centro de Tequis, con café de Chiapas. Después agregó servicio de restaurante con desayunos y comidas: omelettes, chilaquiles, huevos al gusto, tortilla queretana y bagels caseros. Abre todos los días, de la mañana a la tarde.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/rincon-austriaco-tabla.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/rincon-austriaco-tabla.jpg$v$, $v$414-273-4615$v$, $v$contacto@rinconaustriaco.com.mx$v$, $v$https://rinconaustriaco.com.mx$v$, NULL, NULL,
  ARRAY[$v$Desayunos$v$]::text[], ARRAY[$v$Café$v$, $v$Postres$v$, $v$Centro$v$]::text[], false);

-- Alux Resto Café. Fuente: casaaluxtx.wixsite.com/tequis (abrió en 2022, dirección, WhatsApp, desayunos
-- y "Carta de la Aldea", cierra los miércoles, reservaciones). Teléfono [CONFLICTO]: se usa el de su web
-- (414 140 9139); tt-dir da 442 872 6573 y el Directorio 2025, 414 117 3094. Horario [FRÁGIL]: sin
-- horario. Pin: tt-dir.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('793e71e8-82a3-5e04-8767-231bbea49167', $v$Alux Resto Café$v$, 'gastronomia', $v$Cafetería$v$, 20.5265583, -99.8941498, $v$Potrero Frijolillo 13, Fundadores de Hacienda Grande (junto a la Capilla de los Albañiles)$v$,
  $v$Desayunos y café junto a la Capilla de los Albañiles$v$,
  $v$Resto-café abierto en 2022 en Fundadores de Hacienda Grande, a un costado de la Capilla de los Albañiles. Por la mañana sirve desayunos y por la tarde, la Carta de la Aldea. Según su web cierra los miércoles; el cupo es limitado y conviene reservar.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/alux-resto-cafe-chilaquiles.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/alux-resto-cafe-hotcakes.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/alux-resto-cafe-cafe.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/alux-resto-cafe-chilaquiles.jpg$v$, $v$414-140-9139$v$, NULL, $v$https://casaaluxtx.wixsite.com/tequis$v$, $v$414-140-9139$v$, NULL,
  ARRAY[$v$Desayunos$v$, $v$Reservaciones$v$]::text[], ARRAY[$v$Café$v$, $v$Centro$v$]::text[], false);

-- La Casa del Horno. Fuente: lacasadelhorno.com.mx (parrilla, dirección, teléfono, "Ordena y recoge",
-- horario en la imagen "Nuevo horario: lunes a domingo 1 PM - 9 PM", leída el 10-nov-2026), tt-ficha
-- (horno de piedra, ambiente familiar), tt-dir y Directorio 2025 (coinciden en el 414 140 4020).
-- Pin: tt-dir.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('2946494c-0f0b-5b97-a5b4-01436a3df0ee', $v$La Casa del Horno$v$, 'gastronomia', $v$Parrilla$v$, 20.5193750, -99.8976084, $v$Carretera San Juan del Río–Xilitla km 19$v$,
  $v$Parrilla al carbón y horno de piedra, a cinco minutos del centro$v$,
  $v$Restaurante de parrilla al carbón y horno de piedra sobre la carretera a San Juan del Río, a cinco minutos del centro histórico. Se presenta como un lugar de ambiente familiar y tiene servicio para ordenar y recoger. Abre todos los días de 13 a 21 h.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/la-casa-del-horno-terraza.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/la-casa-del-horno-fachada.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/la-casa-del-horno-patio.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/la-casa-del-horno-terraza.jpg$v$, $v$414-140-4020$v$, NULL, $v$https://www.lacasadelhorno.com.mx$v$, NULL,
  $v${"lunes": "13:00–21:00", "martes": "13:00–21:00", "miércoles": "13:00–21:00", "jueves": "13:00–21:00", "viernes": "13:00–21:00", "sábado": "13:00–21:00", "domingo": "13:00–21:00"}$v$::jsonb,
  ARRAY[$v$Para llevar$v$, $v$Reservaciones$v$]::text[], ARRAY[$v$Cortes$v$, $v$Familiar$v$, $v$Centro$v$]::text[], true);

-- La Palapa Sensorial. Fuente: lapalapasensorial.weebly.com (hamburguesas, carne a las brasas, cheladas,
-- deportes, dirección, teléfono) y tt-dir (coincide en el 427 189 6771; el Directorio 2025 da 414 102
-- 2190). Horario [CONFLICTO] entre dos páginas de su web: sin horario. Pin APROXIMADO: tt-dir, frente al
-- Parque La Pila (Ezequiel Montes 3 debería estar más cerca de la plaza). Sin fotos (ilustraciones).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('5eab6b57-8046-503b-ac10-35af8d166550', $v$La Palapa Sensorial$v$, 'gastronomia', $v$Parrilla$v$, 20.5268480, -99.8912690, $v$Ezequiel Montes 3, casi esquina con Fray Junípero Serra, frente al Parque La Pila$v$,
  $v$Hamburguesas y carne a las brasas, frente al Parque La Pila$v$,
  $v$Restaurante grill frente al Parque La Pila. Su especialidad son las hamburguesas, de arrachera, de pollo y vegetarianas, y también sirve carne a las brasas con papas y cheladas de la casa. Transmite eventos deportivos. Abre desde la 1 de la tarde; los horarios de su web no coinciden entre sí.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$427-189-6771$v$, NULL, $v$https://lapalapasensorial.weebly.com$v$, NULL, NULL,
  ARRAY[$v$Reservaciones$v$]::text[], ARRAY[$v$Hamburguesas$v$, $v$Deportes$v$, $v$Centro$v$]::text[], false);

-- La Charamusca (sucursal Tequisquiapan). Fuente: lacharamusca.mx (lista de sucursales: "LA CHARAMUSCA
-- TEQUISQUIAPAN (414) 273.05.04/273.07.81"; el dominio bueno es lacharamusca.mx, no lacharamusquita.mx),
-- Directorio 2025 (414 273 0504) y tt-dir (414 273 0781, dirección). Qué vende hoy [SIN CONFIRMAR]:
-- tequis.travel y el Directorio la listan en restaurantes y OSM la marca como restaurante. Sin horario.
-- Pin: OSM nodo 6611096972.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('448fb2aa-7d9a-505d-88c6-6b05bf31d9ac', $v$La Charamusca$v$, 'gastronomia', $v$Restaurante$v$, 20.5227523, -99.8911752, $v$Ezequiel Montes 1, Centro$v$,
  $v$La sucursal de La Charamusca, a media cuadra de la plaza$v$,
  $v$La sucursal en Tequisquiapan de La Charamusca, que también tiene cuatro locales en la ciudad de Querétaro. Está en Ezequiel Montes, a media cuadra de la plaza principal. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-0504$v$, NULL, $v$http://lacharamusca.mx$v$, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Il Sapore Italiano. Fuente: tt-ficha (25 años, cocina italiana casera, jardín, pet friendly,
-- estacionamiento, accesible, para llevar, eventos privados, WhatsApp, horario [FRÁGIL]),
-- ilsaporeitalianotequis.amawebs.com (área de juegos), tt-dir y Directorio 2025 (coinciden en el 414 273
-- 0229). Dirección [CONFLICTO]: su web vieja de AiYellow daba Av. Juárez Ote. 5-A; se usa Fuentesillas 63
-- (tt-ficha y tt-dir). Su web casi no tiene datos: content_verified false. Pin: tt-dir. Sin fotos.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('1f7952e7-9184-5a67-a98c-a564150a6a53', $v$Il Sapore Italiano$v$, 'gastronomia', $v$Restaurante$v$, 20.5244944, -99.8971216, $v$Fuentesillas 63, Centro$v$,
  $v$Cocina italiana casera, con jardín y área de juegos$v$,
  $v$Se presenta como el primer restaurante italiano de Tequisquiapan, con 25 años, de cocina italiana tradicional y casera. Tiene jardín y espacio abierto, área de juegos para niños, estacionamiento amplio y acceso para personas con movilidad reducida, y admite mascotas. Sirve en el lugar y para llevar, y organiza eventos privados.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-0229$v$, NULL, $v$https://ilsaporeitalianotequis.amawebs.com$v$, $v$414-112-8521$v$, NULL,
  ARRAY[$v$Pet Friendly$v$, $v$Área de juegos$v$, $v$Para llevar$v$, $v$Estacionamiento$v$, $v$Jardín$v$, $v$Accesible$v$, $v$Eventos privados$v$]::text[], ARRAY[$v$Italiana$v$, $v$Familiar$v$, $v$Centro$v$]::text[], false);

COMMIT;

-- =====================================================================================
-- Bloque 3: altas solo con fuentes de Turismo municipal (tequis.travel + Directorio 2025)
-- =====================================================================================
-- Solo entran los que tienen nombre, dirección y teléfono coherentes entre tequis.travel y la sección
-- RESTAURANTES del Directorio Tequisquiapan 2025, sin señales de datos de otro negocio y con un pin
-- razonable. Sin web propia: content_verified false, foto genérica, sin horario.
BEGIN;

-- Los Vitrales (Hotel Posada del Virrey). Fuente: tt-ficha (solo desayunos, horario [FRÁGIL]) y
-- Directorio 2025 (coinciden en el 414 273 0239). Pin: OSM nodo 6611206347 (Posada del Virrey).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('3ad6c1e6-3c85-5936-809d-a5047e3143e4', $v$Los Vitrales$v$, 'gastronomia', $v$Restaurante$v$, 20.5235482, -99.8924734, $v$Guillermo Prieto 9, Centro (Hotel Posada del Virrey)$v$,
  $v$Desayunos caseros en el Hotel Posada del Virrey$v$,
  $v$El restaurante del Hotel Posada del Virrey, a una cuadra de la plaza. Solo sirve desayunos, de comida casera.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-0239$v$, NULL, NULL, NULL, NULL,
  ARRAY[$v$Desayunos$v$]::text[], ARRAY[$v$Centro$v$]::text[], false);

-- El Cortijo (Hotel La Querencia). Fuente: tt-ficha ("Tradición mexicana", desayunos, comidas y cenas a
-- la carta todos los días) y Directorio 2025 (coinciden en el 414 100 7295). Pin APROXIMADO: OSM nodo
-- 4646249890 ("la Querencia", hotel), sobre Av. Juárez Oriente.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('553902ff-88c4-59b7-b1eb-9c0eccfd044e', $v$El Cortijo$v$, 'gastronomia', $v$Restaurante$v$, 20.5169677, -99.8797262, $v$Av. Juárez Oriente s/n, Los Tepetates, Barrio de San Juan (Hotel La Querencia)$v$,
  $v$Cocina mexicana del Hotel La Querencia, desde el desayuno$v$,
  $v$El restaurante del Hotel La Querencia, en el Barrio de San Juan. Se presenta como "Tradición mexicana" y sirve desayunos, comidas y cenas a la carta todos los días.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-100-7295$v$, NULL, NULL, NULL, NULL,
  ARRAY[$v$Desayunos$v$]::text[], ARRAY[$v$Mexicana$v$]::text[], false);

-- La Troje (Hotel Boutique La Granja). Fuente: tt-ficha (comida tradicional mexicana, abierta al público)
-- y Directorio 2025 (coinciden en el 414 273 2004). Pin: OSM nodo 6611096955 ("La Troje").
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('a9bf8d58-771e-530d-8d08-961f729e0354', $v$La Troje$v$, 'gastronomia', $v$Restaurante$v$, 20.5248756, -99.8928586, $v$Morelos 12 Norte, Centro (Hotel Boutique La Granja)$v$,
  $v$Cocina mexicana tradicional en el Hotel Boutique La Granja$v$,
  $v$El restaurante del Hotel Boutique La Granja, en el centro. Sirve comida tradicional mexicana a huéspedes y al público en general.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-2004$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mexicana$v$, $v$Centro$v$]::text[], false);

-- Restaurante Gourmet La Doña. Fuente: tt-ficha (proyecto familiar, cocina mexicana con fusión gourmet
-- internacional, a 10 min del centro) y Directorio 2025 (coinciden en el 414 690 3855). Pin: tt-dir.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('7c0e8fd6-6315-57a0-a669-b174f4cca683', $v$Restaurante Gourmet La Doña$v$, 'gastronomia', $v$Restaurante$v$, 20.5002188, -99.9269967, $v$Carretera San Juan del Río–Xilitla km 16.3, Bordo Blanco$v$,
  $v$Cocina mexicana con toques gourmet, en Bordo Blanco$v$,
  $v$Proyecto familiar sobre la carretera a San Juan del Río, en Bordo Blanco, a unos 10 minutos del centro. Su cocina parte de platillos mexicanos y los combina con cocina gourmet internacional.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-690-3855$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mexicana$v$, $v$Familiar$v$]::text[], false);

-- Quilombo Grill. Fuente: tt-ficha (asado argentino, empanadas, vino, ambiente familiar), tt-dir y
-- Directorio 2025 (los tres coinciden en el 414 273 0761). Pin: tt-dir.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('924d66c1-63b6-5095-9b8d-28989603ae7a', $v$Quilombo Grill$v$, 'gastronomia', $v$Parrilla$v$, 20.5239414, -99.8919638, $v$Morelos Norte 5, esquina 16 de Septiembre, Centro$v$,
  $v$Asado argentino, empanadas y vino en el centro$v$,
  $v$Parrilla de asado argentino en el centro, a una cuadra de la plaza, con cortes a la parrilla, empanadas y vino argentino. Se presenta con ambiente familiar y relajado.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-0761$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Cortes$v$, $v$Argentina$v$, $v$Familiar$v$, $v$Centro$v$]::text[], false);

-- Restaurante Argentino La Tuba (Villa Romántica La Tuba). Fuente: tt-ficha (carta, estacionamiento, wifi,
-- juegos para niños; su teléfono viene incompleto, "414 273 26"), tt-dir y Directorio 2025 (coinciden en
-- el 414 273 2600). Pin: tt-dir.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('848836e9-16b7-5d73-ba25-94221ad59621', $v$Restaurante Argentino La Tuba$v$, 'gastronomia', $v$Parrilla$v$, 20.5249621, -99.8974844, $v$Heroico Colegio Militar 47, El Pedregal$v$,
  $v$Restaurante argentino con carnes, pizzas y juegos para niños$v$,
  $v$Restaurante argentino en la colonia El Pedregal, que también aparece como Villa Romántica La Tuba. La carta incluye carnes, empanadas, pizzas, pastas, hamburguesas, pollos, mar y tierra, ensaladas, sopas, vinos, postres y café. Tiene estacionamiento, wifi y juegos para niños.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-2600$v$, NULL, NULL, NULL, NULL,
  ARRAY[$v$Área de juegos$v$, $v$Estacionamiento$v$, $v$WiFi$v$]::text[], ARRAY[$v$Cortes$v$, $v$Pizza$v$, $v$Hamburguesas$v$, $v$Argentina$v$, $v$Familiar$v$, $v$Centro$v$]::text[], false);

-- K-18 Grill. Fuente: tt-ficha (área de niños, restaurante bar, mixología, cortes, terraza bar, DJ los
-- sábados y saxofón los domingos [FRÁGIL]) y Directorio 2025 (coinciden en el 414 291 7014). Pin: tt-dir.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('5b07e8a9-8fba-5c46-8459-76336345eb8a', $v$K-18 Grill$v$, 'gastronomia', $v$Parrilla$v$, 20.5081791, -99.9140867, $v$Carretera Federal 120 km 18, San José$v$,
  $v$Cortes, bar y terraza, con área de niños, rumbo a San Juan del Río$v$,
  $v$Restaurante bar de cortes sobre la carretera a San Juan del Río, a cinco minutos del centro. Tiene mixología, terraza bar y área de niños; los sábados hay DJ y los domingos, saxofón en vivo por la tarde.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-291-7014$v$, $v$k18grill@gmail.com$v$, NULL, NULL, NULL,
  ARRAY[$v$Bar$v$, $v$Terraza$v$, $v$Área de juegos$v$, $v$Música en vivo$v$]::text[], ARRAY[$v$Cortes$v$, $v$Familiar$v$]::text[], false);

-- Asadero Ajúa. Fuente: tt-ficha (brasa, parrilladas, cortes, hamburguesas, cocteles, ambiente familiar)
-- y Directorio 2025 (coinciden en el 442 300 5063). Pin: tt-dir (km 17.5).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('05b8540e-e5c6-5b03-83ef-5d7a770fac7d', $v$Asadero Ajúa$v$, 'gastronomia', $v$Parrilla$v$, 20.5008090, -99.9252108, $v$Carretera San Juan del Río–Tequisquiapan km 17.5, Bordo Blanco$v$,
  $v$Parrilladas, cortes y hamburguesas en Bordo Blanco$v$,
  $v$Asadero sobre la carretera a San Juan del Río, en Bordo Blanco: comida a la brasa, parrilladas, cortes, hamburguesas y cocteles. Se presenta con ambiente familiar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$442-300-5063$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Cortes$v$, $v$Hamburguesas$v$, $v$Familiar$v$]::text[], false);

-- Madre Selva Pizza. Fuente: tt-ficha (masa rústica, horno de piedra, ingredientes de la región), tt-dir y
-- Directorio 2025 (los tres coinciden en el 414 273 2880). Pin: tt-dir. Ojo: OSM tiene un nodo más viejo
-- (6482732108) con el mismo teléfono en "Plaza Centenario 6, Villa Vista Hermosa"; Turismo (2025) da
-- Morelos Norte 4.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('414caac2-cf00-5165-8417-26cd3e4c8063', $v$Madre Selva Pizza$v$, 'gastronomia', $v$Pizzería$v$, 20.5226416, -99.8919724, $v$Morelos Norte 4, Centro$v$,
  $v$Pizza artesanal al horno de piedra, junto a la plaza$v$,
  $v$Pizza artesanal de masa rústica al horno de piedra, preparada con ingredientes frescos de la región. Está en Morelos Norte, a unos pasos de la plaza principal.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-2880$v$, $v$madreselvapizza@gmail.com$v$, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Pizza$v$, $v$Centro$v$]::text[], false);

-- Caterin Pizzería Ristorante. Fuente: tt-ficha (italiano y pizzería, pet friendly, estacionamiento, a 10
-- min del centro; teléfonos 414 273 1608 y 414 219 2133), tt-dir ("Pizzas Ristorante Caterin", 414 219
-- 2133) y Directorio 2025 ("Pizzas ristorante catering", 414 273 1608). Pin: tt-dir (km 23).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('f0eafec4-b696-5f8f-a480-a8a8d46b9250', $v$Caterin Pizzería Ristorante$v$, 'gastronomia', $v$Pizzería$v$, 20.5468825, -99.9029981, $v$Carretera Tequisquiapan–Ezequiel Montes km 23, Hacienda Grande$v$,
  $v$Cocina italiana y pizzas, pet friendly, camino a Ezequiel Montes$v$,
  $v$Restaurante italiano y pizzería a unos 10 minutos del centro, por la carretera a Ezequiel Montes. Prepara cada platillo al momento, admite mascotas y tiene estacionamiento.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-1608$v$, $v$caterinristorante@gmail.com$v$, NULL, NULL, NULL,
  ARRAY[$v$Pet Friendly$v$, $v$Estacionamiento$v$]::text[], ARRAY[$v$Pizza$v$, $v$Italiana$v$]::text[], false);

-- La Chevicheria. Fuente: tt-dir y Directorio 2025 (coinciden en nombre y en el 414 119 4934). Sin
-- descripción en ninguna fuente: el tipo sale del nombre (su negocio.site, "lachevycheria", ya no
-- existe). Pin: tt-dir.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('056270a8-94c2-529f-ac0d-917cf21cc15b', $v$La Chevicheria$v$, 'gastronomia', $v$Mariscos$v$, 20.5268803, -99.8937681, $v$Francisco I. Madero 18, Fundadores de Hacienda Grande$v$,
  $v$Cevichería en Fundadores de Hacienda Grande$v$,
  $v$Cevichería en la colonia Fundadores de Hacienda Grande, a unos 500 metros de la plaza. Confirma horario y menú antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-119-4934$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mariscos$v$, $v$Centro$v$]::text[], false);

-- Pozolería Kauil. Fuente: tt-dir y Directorio 2025 (coinciden en el 414 101 0796). Sin descripción: el
-- tipo sale del nombre (OSM la marca con cocina regional). Pin: OSM nodo 6611206351.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('b9c19f7d-e2aa-5772-85b6-e73ca0db6006', $v$Pozolería Kauil$v$, 'gastronomia', $v$Restaurante$v$, 20.5231604, -99.8925815, $v$Guillermo Prieto 10, Centro$v$,
  $v$Pozolería a una cuadra de la plaza$v$,
  $v$Pozolería en la calle Guillermo Prieto, a una cuadra de la plaza principal. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-101-0796$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mexicana$v$, $v$Centro$v$]::text[], false);

-- Wings Bar. Fuente: tt-dir y Directorio 2025 (coinciden en nombre y en el 414 219 7095). Sin
-- descripción: el tipo sale del nombre. Pin: tt-dir.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('a4bfbdc1-4e54-5544-aac9-8492ec73fc4d', $v$Wings Bar$v$, 'gastronomia', $v$Bar$v$, 20.5301347, -99.8999722, $v$Crucero de las carreteras a Querétaro y Ezequiel Montes$v$,
  $v$Bar de alitas en el crucero de la carretera a Querétaro$v$,
  $v$Bar de alitas en el crucero de las carreteras a Querétaro y a Ezequiel Montes, a poco más de un kilómetro de la plaza. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-219-7095$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Alitas$v$]::text[], false);

-- Jäpi. Fuente: tt-ficha (cafetería y restaurante, "desde el desayuno a la comida", bebidas de
-- especialidad, horario [FRÁGIL]) y Directorio 2025 ("Restaurante jappi"; coinciden en el 414 118
-- 2858). Sin pin en tequis.travel: pin APROXIMADO en la calle Hacienda Grande de la Asunción (OSM vía
-- 376030174), no en el número 205.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('e2b736b6-d82c-5de9-b825-4a12bf787bf6', $v$Jäpi$v$, 'gastronomia', $v$Cafetería$v$, 20.5267401, -99.8965316, $v$Hacienda de la Asunción 205, Hacienda Grande$v$,
  $v$Cafetería y restaurante, del desayuno a la comida$v$,
  $v$Cafetería y restaurante en la colonia Hacienda Grande, abierto del desayuno a la comida, con bebidas de café de especialidad. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-118-2858$v$, NULL, NULL, NULL, NULL,
  ARRAY[$v$Desayunos$v$]::text[], ARRAY[$v$Café$v$]::text[], false);

COMMIT;

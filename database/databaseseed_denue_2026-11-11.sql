-- APLICADA el 2026-11-11 en la base del VPS, con respaldo previo en /root/respaldos/places-events-20261111.sql (y la base completa en tequis-completa-20261111.dump). Preparado el 2026-11-11. Altas de negocios con el DENUE del INEGI como segunda fuente.
-- El DENUE (Directorio Estadístico Nacional de Unidades Económicas, INEGI) es independiente de Turismo municipal:
-- tequis.travel + PDF 2025 siguen contando como UNA fuente, y DENUE + cualquiera de ellas ya son dos. Con eso entran
-- negocios que el 10-nov quedaron fuera por tener solo a Turismo o por un [CONFLICTO] que el DENUE desempata.
-- Negocios solo en el DENUE (unos 380 de comida, tiendas y hoteles) NO entran: ver docs/datos/denue-2026-11.md.
-- Fotos: solo de la web propia de cada negocio, revisadas a mano, para copiar a /srv/tequis/uploads/lugares/
-- (créditos en docs/datos/creditos-imagenes.md). Sin web propia: foto genérica de Commons de su categoría.
-- is_verified e is_featured quedan en false. content_verified = true solo con web propia que confirma teléfono y
-- dirección. price_range = '' sin fuente de precio. Amenidades solo de la web propia o de dos fuentes que coinciden.
-- Coordenadas del DENUE salvo que se diga otra cosa. Varios negocios del DENUE comparten un mismo punto
-- (20.5259874, -99.8901949: plaza comercial de Camelinas/Centenario); revisar esos pins en el panel.
-- Ids: uuid5(NAMESPACE_URL, 'https://tequismagico.com/lugar/<slug>'). Inglés: web/lib/i18n/data-en.ts (PLACES_EN).

-- =====================================================================================
-- Correcciones a lo que ya tenemos (DENUE + otra fuente)
-- =====================================================================================
BEGIN;
-- Pizzas Don Rigo: DENUE id 3551666 (Juárez Poniente 102, 414 273 3464) y su Facebook (Juárez 102, 414 273 3464).
UPDATE places SET address = $v$Av. Juárez Poniente 102, Centro$v$, phone_number = $v$414-273-3464$v$, updated_at = NOW()
WHERE id = '6ba8d481-2d1b-51dd-a86e-c3f04cb5191f';
COMMIT;

-- =====================================================================================
-- experiencias_compras.json: 24 altas
-- =====================================================================================
BEGIN;

-- MD Turismo y Experiencias. Fuentes: DENUE id 3549336 (Agencia de Viajes Turismo Alternativo, Andador Vista Hermosa 1, alta 2010-07); web propia https://www.mdturismoyexperiencias.com/productos/tranvia-tequisquiapan/ (11-nov-2026: dirección, 52 414 112 0235, horario del tranvía); web propia https://mdturismoyexperiencias.com (portada de 2023: 414 273 3516, contacto@mdturismoyexperiencias.com, lista de tours); https://tequis.travel/directorio/tours-operadora/turismo-md-y-experiencias/ (414 112 0235, Andador Comercial local 1, Vista Hermosa); https://tequis.travel/directorio/tours-operadora/turismo-alternativo-y-tranvia-43/ (414 273 2742, misma dirección y mismo correo turismoalternativotx@hotmail.com); https://tequis.travel/tours_tequisquiapan/ (Tram 43: barrios, vinícola, quesería; 414 219 6059); Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Tour operadoras: "MD Turismo y experiencia 414 112 0235", "Tram 43" y "Turismo Alternativo y Tram 43" 414 219 6059.
-- Es el mismo operador que la fila del DENUE "Agencia de Viajes Turismo Alternativo" (y que "Tram 43"/"Turismo Alternativo" de tequis.travel): misma dirección (Andador Comercial Vista Hermosa, local 1), mismo correo en las fichas de tequis.travel, y su web vende el "Recorrido en Tranvía Tram 43". La web de Turismo Alternativo (turismoalternativo.com.mx) ya no existe (NXDOMAIN). Teléfonos [CONFLICTO]: 414 112 0235 (web actual, ficha de tequis.travel y PDF 2025) se queda; 414 273 3516 (portada vieja de su web, 2023, y página Tours de tequis.travel), 414 273 2742 (DENUE 2010 y ficha de Turismo Alternativo) y 414 219 6059 (Tram 43 en Tours y PDF) van solo aquí. content_verified = true: su web funciona y confirma dirección y teléfono, que coinciden con DENUE/tequis.travel. Horario [FRÁGIL] en la descripción; [CONFLICTO] con tequis.travel Imperdibles (11 a 17 h). Precio: "$0.00 / pagos personalizados", sin precio. Mascotas "sujeto a confirmación" solo en tequis.travel: sin Pet Friendly. "Familiar": su web lo anuncia como "recorrido 100% familiar". Pin del DENUE; sin otro pin para comparar. Fotos: las dos de la ficha del tranvía en su tienda (se descartaron las que tienen personas en primer plano, la de Bernal y las de otros productos).
-- Fotos: web propia (2).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('f10c9ab2-81e2-5ce0-b3c6-8df6517b1fcc', $v$MD Turismo y Experiencias$v$, 'experiencias', $v$Tour$v$, 20.5173168, -99.9005863, $v$Andador Comercial Vista Hermosa, local 1, Vista Hermosa$v$,
  $v$Tranvía Tram 43 y tours de queso y vino desde Tequis$v$,
  $v$Operadora de tours en el Andador Comercial Vista Hermosa, a 1.1 km de la plaza, que maneja el tranvía Tram 43. El recorrido en tranvía pasa por los barrios más antiguos del pueblo y para en una vinícola, con degustación de dos vinos de la casa, en una quesería y en un tasting room de productos del semidesierto queretano. En noviembre de 2026 su web anunciaba salidas de viernes a domingo a las 12, 14, 16 y 18 h, con reservación. También vende tours por la Ruta del Queso y el Vino, a la Sierra Gorda, recorridos nocturnos y vuelos en globo. No publica precios.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/md-turismo-y-experiencias-tranvia-vinedo.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/md-turismo-y-experiencias-tram-43.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/md-turismo-y-experiencias-tranvia-vinedo.jpg$v$, $v$414-112-0235$v$, $v$contacto@mdturismoyexperiencias.com$v$, $v$https://www.mdturismoyexperiencias.com$v$, NULL, NULL,
  ARRAY[$v$Tours$v$, $v$Degustaciones$v$]::text[], ARRAY[$v$Vino$v$, $v$Quesos$v$, $v$Familiar$v$]::text[], true);

-- TX Ecotours. Fuentes: DENUE id 10506237 (Agencia de Viajes Tx Ecotours, Calle Carrizal, 414 231 3530, alta 2024-11); web propia https://txecotours.com y /rutas (11-nov-2026: Carrizal 23, 4142313530, rutas, cargo de $1,200); https://tequis.travel/tx-eco-tours/ y https://tequis.travel/directorio/tours-operadora/tx-ecotours/ (reservaciones@txecotours.com); https://tequis.travel/tours_tequisquiapan/ (Carrizal 23); Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Tour operadoras: "Tx Ecotours 414 112 1689".
-- El cruce automático del CSV la daba por "Viajes y Enoturismo": es otro negocio. Teléfono [CONFLICTO resuelto]: el DENUE (414 231 3530) coincide con el que trae el HTML de su web y con una ficha de tequis.travel; los demás (414 112 1689 del PDF y de la ficha del directorio, 414 231 7122 y 414 109 1550 de Tours) van solo aquí. El correo del DENUE (recervaciones@txtur.com) es de otro dominio: txtur.com es una mueblería de Virginia (EE. UU.); se usa el de tequis.travel. content_verified = true (web propia con dirección y teléfono que coinciden). Pin del DENUE; el de tequis.travel queda a 230 m (sobre Carrizal, más al poniente): revisar. "Familiar": su web dice "solo o en familia". Fotos de la página Rutas de su web; se descartaron la del logo con gente posando, la que lleva su teléfono rotulado, la de la cabaña (es su hospedaje, no el tour) y la de uvas en Viña Magal (otro negocio).
-- Fotos: web propia (3).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('1fa39682-f9b0-5f3e-9923-b26aa40c338f', $v$TX Ecotours$v$, 'experiencias', $v$Tour$v$, 20.5234130, -99.8899352, $v$Carrizal 23, Centro$v$,
  $v$Rutas en 4x4 con guía a viñedos, queserías y minas de ópalo$v$,
  $v$Operadora de recorridos en vehículos todoterreno en Carrizal 23, a unos 200 metros de la plaza. Sus rutas, con un guía al volante, llevan al punto más alto de Tequis, la Presa Centenario y la antigua Estación Bernal; a una quesería y a la vinícola Santiago Apóstol; a buscar ópalo con mineros en La Trinidad, y por el semidesierto hasta la mina antigua El Pedernal, un recorrido de 3.5 a 4 horas. Si quieres manejar tú, en noviembre de 2026 había un cargo adicional de $1,200. También renta cabañas. No publica el precio de las rutas.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/tx-ecotours-ruta-4x4.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/tx-ecotours-mina-de-opalo.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/tx-ecotours-presa-atardecer.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/tx-ecotours-ruta-4x4.jpg$v$, $v$414-231-3530$v$, $v$reservaciones@txecotours.com$v$, $v$https://txecotours.com$v$, NULL, NULL,
  ARRAY[$v$Tours$v$, $v$Degustaciones$v$]::text[], ARRAY[$v$Aventura$v$, $v$Vino$v$, $v$Quesos$v$, $v$Familiar$v$, $v$Centro$v$]::text[], true);

-- Vino Tours. Fuentes: DENUE id 8686054 (Recorridos Turísticos Vino Tours, Niños Héroes 42, 414 111 0439, 11 a 30 personas, alta 2019-11); https://tequis.travel/tours_tequisquiapan/ (descripción, Niños Héroes 42, reservaciones@vinotours.mx); https://tequis.travel/directorio/tours-operadora/vino-tours/ (414 104 4801); Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Tour operadoras: "Vino Tours 414 111 0439".
-- Teléfono [CONFLICTO resuelto]: DENUE y PDF 2025 dan 414 111 0439; la ficha del directorio de tequis.travel, 414 104 4801 (queda solo aquí). vinotours.mx responde 403 (también el 10-nov): sin website ni fotos. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('d7e0af85-b8b5-5009-af37-d9c6ade2d8ea', $v$Vino Tours$v$, 'experiencias', $v$Tour$v$, 20.5214168, -99.8944055, $v$Niños Héroes 42, Centro$v$,
  $v$Agencia de tours por la Ruta del Queso y el Vino$v$,
  $v$Agencia de tours en Niños Héroes 42, a unos 300 metros de la plaza. Según el directorio de Turismo municipal, se especializa en la Ruta del Queso y el Vino por las casas de vino de Querétaro, y también lleva a la Sierra Gorda, a las minas de ópalo y a volar en globo. Figura en el DENUE del INEGI. Su web no se pudo abrir y no publica horarios ni precios: pregunta al reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$414-111-0439$v$, $v$reservaciones@vinotours.mx$v$, NULL, NULL, NULL,
  ARRAY[$v$Tours$v$]::text[], ARRAY[$v$Vino$v$, $v$Quesos$v$, $v$Centro$v$]::text[], false);

-- Temazcal Tonatiu Iquzayampa. Fuentes: DENUE id 3572756 (Baños Prehispánicos Temazcal, Calle Amado Nervo, Comunidad Fuentezuelas, alta 2014-12); queretaro.travel/lugares/temazcal-tonatiu-iquzayampa-a-bath-of-the-aztec-king/ (descripción, Amado Nervo 7, 414 226 8107); https://tequis.travel/salud-y-belleza_tequisquiapan/ y https://tequis.travel/directorio/turismo-wellness/tonatiu-iquzayampa/ (Amado Nervo 7, 414 226 8107, temazcal@live.com.mx); Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Wellness: "Temazcal Tonatiuh Iquzayampa 414 226 8107 / WhatsApp 414 219 2520".
-- El DENUE no da nombre comercial ("Baños Prehispánicos Temazcal"), pero la calle y la comunidad coinciden con las tres fuentes de Turismo. Su web temazcal-tonatiu-iquzayampa.negocio.site da 404: sin website ni fotos. El pin de la ficha de tequis.travel es copiado de otro lugar (todas las fichas wellness traen pines cruzados): se usa el del DENUE. Subcategoría "Temazcal": ya tiene plural en SUBCATEGORY_PLURALS, pero falta en SUBCATEGORIES_EN (web/lib/i18n/data-en.ts). content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('c4061a09-3138-5fce-897d-668bc2d1d791', $v$Temazcal Tonatiu Iquzayampa$v$, 'experiencias', $v$Temazcal$v$, 20.5592905, -99.9819296, $v$Amado Nervo 7, Fuentezuelas$v$,
  $v$Temazcal tradicional en Fuentezuelas, con reservación$v$,
  $v$Temazcal en la comunidad de Fuentezuelas, a unos 10 km del centro. Según Turismo del estado, la sesión empieza con una plática del guía, José Antonio “Don Toño”, sigue con una comida de bienvenida y el baño de vapor con piedras de cerro y de río calentadas sin gas e infusiones de hierbas, y termina con té y una meditación guiada. Hay que llevar toalla, sandalias y traje de baño, y reservar con anticipación. No publica horario ni precios.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$414-226-8107$v$, $v$temazcal@live.com.mx$v$, NULL, $v$414-219-2520$v$, NULL,
  ARRAY[$v$Temazcal$v$]::text[], '{}'::text[], false);

-- Temazcal Tres Marías. Fuentes: DENUE id 11083273 (Temascali 3 Marías, Calle Margarita, Santa María del Camino, localidad Bordo Blanco, alta 2024-11); https://tequis.travel/salud-y-belleza_tequisquiapan/ (descripción, Margarita 42, 427 182 4352, temazcaltresmarias@gmail.com); https://tequis.travel/directorio/turismo-wellness/3-marias/; Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Wellness: "Temazcal 3 Marías 427 182 4352".
-- La investigación de actividades dudaba que estuviera en el municipio (lada 427): el DENUE lo ubica en la localidad Bordo Blanco, municipio de Tequisquiapan. El masaje y la exfoliación solo los dice Turismo municipal: van en la descripción con "según", no como amenidades. Pin del DENUE (el de tequis.travel es copiado). Sin web ni fotos. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('f7ca279f-386e-51a8-96eb-db5c93407f5f', $v$Temazcal Tres Marías$v$, 'experiencias', $v$Temazcal$v$, 20.4903500, -99.9330662, $v$Margarita 42, Santa María del Camino, Bordo Blanco$v$,
  $v$Temazcal con masaje y exfoliación, por Bordo Blanco$v$,
  $v$Temazcal en la colonia Santa María del Camino, por Bordo Blanco, a unos 5.6 km del centro. Según el directorio de Turismo municipal, la sesión de temazcal se complementa con un masaje relajante y una exfoliación con sábila y sales minerales. Figura también en el DENUE del INEGI. No tiene web ni publica horario o precios: llama para reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$427-182-4352$v$, $v$temazcaltresmarias@gmail.com$v$, NULL, NULL, NULL,
  ARRAY[$v$Temazcal$v$]::text[], '{}'::text[], false);

-- Casa Gayatri. Fuentes: DENUE id 9749863 (Masajes Gayatri, Calle Circunvalación, Santa Fe, 414 226 3352, alta 2024-11); https://tequis.travel/salud-y-belleza_tequisquiapan/ (descripción, Circunvalación 8, Col. Santa Fe, 414 226 3552); https://tequis.travel/directorio/turismo-wellness/casa-gayatri/; Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Wellness: "Casa Gayatrix 414 226 3552".
-- El teléfono del DENUE (414 226 3352) difiere en un dígito del de Turismo (414 226 3552, en tres lugares): parece errata del DENUE. La web del DENUE, casagayatri.com, no existe (NXDOMAIN). Hospedaje pet friendly, alberca natural y comida vegetariana solo los dice Turismo municipal: no se ponen como amenidades ni se presenta como hotel. "Masajes" sí: DENUE y Turismo. Subcategoría Temazcal porque Turismo la lista en temazcales (alternativa: Spa). content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('6663fe98-2d68-549b-968c-e48f9b4f15e9', $v$Casa Gayatri$v$, 'experiencias', $v$Temazcal$v$, 20.5107624, -99.8953317, $v$Circunvalación 8, Santa Fe$v$,
  $v$Casa holística con temazcal, masajes y yoga$v$,
  $v$Casa holística en la colonia Santa Fe, a unos 1.4 km de la plaza. Según el directorio de Turismo municipal, ofrece temazcal, masajes, clases de yoga y meditación, y también hospedaje. El DENUE del INEGI la registra como servicio de masajes. No tiene web que funcione ni publica horario o precios: pregunta al reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$414-226-3552$v$, $v$casagayatritx@gmail.com$v$, NULL, NULL, NULL,
  ARRAY[$v$Masajes$v$]::text[], '{}'::text[], false);

-- Yoot Masajes y Bienestar. Fuentes: DENUE id 9531785 (Masajes y Bienestar Yoot, Salvador Michaus 4, 55 3727 1020, 6 a 10 personas, alta 2024-11); ids 10192093 y 10050548 (Morelos Norte 5, 55 3727 1001 / 1020); https://tequis.travel/salud-y-belleza_tequisquiapan/ (descripción, Guillermo Prieto 3-A, 5537271001 y 5537271020, yootmybtequis@gmail.com); https://tequis.travel/directorio/turismo-wellness/yoot-masajes-y-bienestar/ (Salvador Michaus S/N local 3); Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Wellness y Productos naturales: "Yoot Masajes y Bienestar 55 372 71001 / WhatsApp 55 37 27 1020".
-- Dirección [CONFLICTO resuelto]: la página Salud y belleza dice Guillermo Prieto 3-A; la ficha del directorio, Salvador Michaus s/n local 3, y el DENUE 2024, Salvador Michaus 4 (el local más grande) y Morelos Norte 5. Gana Salvador Michaus (DENUE + ficha). Los teléfonos coinciden en las tres fuentes. Los tipos de masaje y los faciales son de una sola fuente (Turismo): en la descripción con "según", no como amenidades. El PDF lista también "Cafetería Laysu" con los mismos teléfonos. Sin web ni fotos. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('bd03c95d-85f2-512b-9b53-7e96af294b72', $v$Yoot Masajes y Bienestar$v$, 'experiencias', $v$Spa$v$, 20.5235811, -99.8916088, $v$Salvador Michaus 4, Centro$v$,
  $v$Masajes, faciales y terapias a unos pasos de la plaza$v$,
  $v$Centro de masajes a unos 100 metros de la plaza. Según el directorio de Turismo municipal, ofrece masajes (holístico, ayurveda, sueco y con piedras calientes), reflexología, drenaje linfático, faciales, reiki y una tienda holística, con cabinas individuales y dobles y servicio a domicilio. El DENUE del INEGI lo registra en Salvador Michaus 4 y en Morelos Norte 5. No tiene web ni publica precios.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$55-3727-1001$v$, $v$yootmybtequis@gmail.com$v$, NULL, $v$55-3727-1020$v$, NULL,
  ARRAY[$v$Masajes$v$]::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Xantico Spa. Fuentes: DENUE id 10523585 (Spa Xantico Tequisquiapan, Camelinas 142, Centro, alta 2024-11; sin teléfono); Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Wellness: "Xantico Spa 414 114 0271".
-- Alta mínima: dos fuentes (DENUE + PDF) solo confirman que existe; ninguna dice qué servicios da. La investigación de negocios lo había dejado fuera "sin más datos" y lo proponía como el posible "Spa Azteca" de las búsquedas (sin prueba). Un directorio de masajes daba "Ezequiel Montes 142 int. 13" (no cuenta como fuente). Tiene Facebook (facebook.com/xanticospa), sin web. Si se prefiere no publicar fichas tan delgadas, pasarlo a descartados. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('fa22b682-d63a-5f1d-a9bd-7630eedb718a', $v$Xantico Spa$v$, 'experiencias', $v$Spa$v$, 20.5259874, -99.8901949, $v$Camelinas 142, Centro$v$,
  $v$Spa en el centro de Tequis$v$,
  $v$Spa en Camelinas 142, a unos 400 metros de la plaza. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. No tiene web ni publica sus servicios, horario o precios: llama antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$414-114-0271$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Hecho en Babu. Fuentes: DENUE id 9345511 (Taller de Vidrio Artístico Transformación de Botellas Hecho en Babu, Paseo del Jazmín 8, San Juan, 55 2518 2785, hechoenbabu@gmail.com, alta 2021-05); https://tequis.travel/imperdibles_tequisquiapan/ (descripción, Paseo del Jazmín 8, 414 109 1951); https://tequis.travel/directorio/experiencias/hecho-en-babu/ (414 109 1951, pin a 43 m del DENUE).
-- Teléfono [CONFLICTO]: Turismo da 414 109 1951 (ficha e Imperdibles) y el DENUE 55 2518 2785; se queda el de Turismo y el otro va solo aquí. "Talleres" y "Tienda": Turismo y DENUE coinciden en que es taller y tienda. Solo redes (IG hecho_en_babu): sin website ni fotos. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('5ac169d9-1f02-5784-a097-8de7024cb625', $v$Hecho en Babu$v$, 'experiencias', $v$Taller$v$, 20.5129552, -99.8940217, $v$Paseo del Jazmín 8, Barrio de San Juan$v$,
  $v$Taller y tienda de vidrio reciclado, con talleres$v$,
  $v$Taller y tienda en el Barrio de San Juan, a 1.1 km de la plaza, que transforma botellas de vidrio en objetos utilitarios. Según el directorio de Turismo municipal, ofrece recorridos guiados por el estudio de vidrio y talleres para todas las edades, solo con reservación. El DENUE del INEGI lo registra como taller de vidrio artístico. No tiene web ni publica horario o precios.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$414-109-1951$v$, $v$hechoenbabu@gmail.com$v$, NULL, NULL, NULL,
  ARRAY[$v$Talleres$v$, $v$Tienda$v$]::text[], ARRAY[$v$Artesanías$v$]::text[], false);

-- Museo ¡México me encanta!. Fuentes: DENUE id 8686050 (Museo México Me Encanta, 5 de Mayo 14, 414 273 1970, alta 2019-11); queretaro.travel/lugares/a-museum-to-fall-in-love-with-mexico/?lang=en (más de 200 escenas, Teresa Cisneros, tienda, 5 de Mayo 11, 414 273 1970); https://tequis.travel/imperdibles_tequisquiapan/ (dos salas, 5 de Mayo 11, 414 273 1970); https://tequis.travel/directorio/experiencias/museo-mexico-me-encanta/.
-- Dirección: queretaro.travel y tequis.travel dicen 5 de Mayo 11; el DENUE, 14. Se queda 11; el pin del DENUE y el de tequis.travel están a 29 m. [CONFLICTO] de cifras: tequis.travel habla de "más de 500 personajes en más de 175 maquetas", queretaro.travel de "más de 200 escenas"; se usa la de Turismo del estado. Precio ($30) y horario solo en México Desconocido (sin fecha): no se publican. Correo del DENUE (escrito "museomexicanomeencanta"). Solo Facebook/IG: sin fotos. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('16820788-258a-5f1b-b601-f4026f6938b8', $v$Museo ¡México me encanta!$v$, 'turistico', $v$Museo$v$, 20.5213629, -99.8927219, $v$5 de Mayo 11, Centro$v$,
  $v$Museo de escenas de la vida mexicana en miniatura$v$,
  $v$Museo de miniaturas a unos 170 metros de la plaza, con más de 200 escenas de la vida mexicana (un mercado, un circo, una boda, unos XV años, una papelería, un funeral) hechas por su directora, Teresa Cisneros, desde hace unos 35 años. Tiene una tienda de artesanías en miniatura. No tiene web ni publica horario o precios.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/f/f4/Portales_de_Tequisquiapan.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/f/f4/Portales_de_Tequisquiapan.jpg$v$, $v$414-273-1970$v$, $v$museomexicanomeencanta@gmail.com$v$, NULL, NULL, NULL,
  ARRAY[$v$Tienda$v$]::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Centro Cultural Gloria Michaus Fernández. Fuentes: DENUE id 3551621 (Centro Cural [sic] Gloria Michaus Fernández, Municipio de Tequisquiapan, Cerrada de los Sauces 1, centroculturaltequi@hotmail.com, alta 2010-07); https://tequis.travel/imperdibles_tequisquiapan/ (descripción, De los Sauces 1, 414 273 1516); Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Áreas relevantes para turistas: "Centro Cultural 414 273 1516".
-- Subcategoría NUEVA propuesta: "Centro Cultural" (plural "Centros culturales"; inglés "Cultural center" / "Cultural centers"); hay que agregarla a SUBCATEGORY_PLURALS y SUBCATEGORIES_EN. Si no se quiere una nueva, la más cercana es "Galería" (tampoco tiene traducción en SUBCATEGORIES_EN) o "Museo". No se pone "Gratis": ninguna fuente lo dice. Pin del DENUE. Sin web ni fotos. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('384630c1-4f90-522e-b5a9-86878ace4aca', $v$Centro Cultural Gloria Michaus Fernández$v$, 'turistico', $v$Centro Cultural$v$, 20.5246977, -99.8900794, $v$De los Sauces 1, Centro$v$,
  $v$Centro cultural con cine, teatro, exposiciones y talleres$v$,
  $v$Centro cultural municipal a unos 300 metros de la plaza. Según Turismo municipal, tiene una cartelera de conferencias, cine, teatro, exposiciones de artes plásticas y presentaciones de libros, y ofrece talleres. No publica su programación ni horario: pregunta por teléfono.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/f/f4/Portales_de_Tequisquiapan.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/f/f4/Portales_de_Tequisquiapan.jpg$v$, $v$414-273-1516$v$, $v$centroculturaltequi@hotmail.com$v$, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$, $v$Exposiciones$v$, $v$Teatro$v$]::text[], false);

-- La Biquette. Fuentes: DENUE id 10009233 (La Biquette Quesería, Calle Laguna Agua Brava, La Lagunita, isabel@labiquette.mx, www.labiquette.mx, alta 2024-11); https://tequis.travel/quesos_tequisquiapan/ (descripción, Carr. Tequisquiapan–Ezequiel Montes km 2, La Lagunita, 414 112 3575); https://tequis.travel/directorio/queserias/la-biquete/ (414 219 6069, isabel@labiquette.mx, "entre verificentro y vivero"); Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Queserías y Productos naturales: "La Biquette 414 112 3575"; viajesyenoturismo.com.mx (la incluye en sus tours; ver investigacion-balnearios-globo-vinedos-2026-11.md).
-- Teléfono [CONFLICTO, sin resolver por el DENUE, que no trae teléfono]: 414 112 3575 (página Quesos y PDF) se queda; 414 219 6069 (ficha) solo aquí. labiquette.mx da SERVFAIL (11-nov-2026; el 10-nov no resolvía): sin website ni fotos. Pin del DENUE (el de tequis.travel está a 29 m). content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('61673c59-62e1-5547-b14f-2e6915311f76', $v$La Biquette$v$, 'experiencias', $v$Quesería$v$, 20.5342043, -99.9007078, $v$Carretera Tequisquiapan–Ezequiel Montes km 2, La Lagunita$v$,
  $v$Quesos de cabra artesanales al estilo francés$v$,
  $v$Quesería de quesos de cabra en La Lagunita, en el km 2 de la carretera a Ezequiel Montes, a 1.6 km de la plaza. Según Turismo municipal, hace sus quesos de forma artesanal siguiendo la tradición francesa, desde el cuidado de las cabras hasta la elaboración, sin conservadores ni colorantes. Viajes y Enoturismo la incluye en algunos de sus tours. Su web no responde y no publica horario ni precios: llama antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$414-112-3575$v$, $v$isabel@labiquette.mx$v$, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Quesos$v$]::text[], false);

-- Vinícola Tequisquiapan. Fuentes: DENUE id 9518460 (Boutique Vinícola Tequisquiapan, La Charretera, elaboración de bebidas a base de uva, 6 a 10 personas, alta 2024-11); queretaro.travel/fichas/vinicola-tequisquiapan/ (historia, Av. Coahuila Lt13 Mz27, 55 6126 2983); https://tequis.travel/directorio/vinedos/vinicola-tequisquiapan/ (misma dirección y teléfono, vinosdelice@yahoo.com.mx); Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Viñedos-Vinícolas y Wedding destinations ("Vinícola con espacio para eventos, cata aire libre y salón de catas exclusivo").
-- Ninguna fuente dice si recibe visitas: la descripción lo deja como pregunta. Cata y eventos solo en el PDF: no van como amenidades. queretaro.travel trae la etiqueta genérica "Pet Friendly" (no cuenta). Es bodega más que viñedo; se usa "Viñedo" porque no hay otra subcategoría de vino. Pin del DENUE (el de tequis.travel está a 88 m). Sin web ni fotos. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('0cf02114-c165-5d87-b904-b608cbcc1ad5', $v$Vinícola Tequisquiapan$v$, 'experiencias', $v$Viñedo$v$, 20.5307658, -99.9044768, $v$Av. Coahuila lote 13, manzana 27, La Charretera$v$,
  $v$Bodega familiar de tradición navarra en La Charretera$v$,
  $v$Bodega de vino familiar en la colonia La Charretera, a 1.6 km de la plaza. Según Turismo del estado, la fundó don Emilio Ochoa, que trajo de Navarra una tradición vinícola de más de 100 años; sus hijos la continuaron desde los años setenta y la familia se estableció formalmente en Tequis en 2010. El directorio de Turismo municipal la ofrece también como espacio para eventos, con cata al aire libre y salón de catas. No tiene web ni publica horario o precios: confirma por teléfono si recibe visitas.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$55-6126-2983$v$, $v$vinosdelice@yahoo.com.mx$v$, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Vino$v$]::text[], false);

-- Vinícola Terra Salvador. Fuentes: DENUE id 9529963 (Vinícola y Boutique Tierra Salvador, Calle Laguna Agua Brava, La Lagunita, 414 140 9038, alta 2024-11); https://tequis.travel/directorio/vinedos/vinicola-terra-salvador/ (414 140 9038, terrasalvadortx@outlook.es, "Carr. Galeras", pin a 32 m del DENUE); Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Viñedos-Vinícolas: "Vinícola Terra Salvador 414 140 9038, Carretera Ezequiel Montes-San Juan del Río km 2, Hacienda Grande".
-- Dirección [CONFLICTO]: "Carr. Galeras" (tequis.travel), "Carr. Ezequiel Montes–San Juan del Río km 2, Hacienda Grande" (PDF) y "Calle Laguna Agua Brava, La Lagunita" (DENUE). El pin del DENUE y el de tequis.travel coinciden (32 m): se usa la calle del DENUE. Nombre: DENUE escribe "Tierra Salvador"; Turismo, "Terra Salvador" (se usa este). Ojo: no confundir con la uva "Salvador" de Los Rosales. Alta delgada (nadie describe qué ofrece); si no se quiere, pasar a descartados. Sin web ni fotos. content_verified = false. Alternativa de subcategoría: "Tienda de vinos" (nueva) o "Tienda" (tiene plural pero no traducción).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('0e287eb9-5479-5c03-9cbb-b1e362097397', $v$Vinícola Terra Salvador$v$, 'experiencias', $v$Viñedo$v$, 20.5327852, -99.9004640, $v$Calle Laguna Agua Brava, La Lagunita$v$,
  $v$Vinícola con tienda en La Lagunita$v$,
  $v$Vinícola con tienda en La Lagunita, a 1.5 km de la plaza, cerca de la quesería La Biquette. Figura en el directorio de Turismo municipal y en el DENUE del INEGI, que la registra como tienda de vinos. No tiene web ni publica qué ofrece, horario o precios: llama antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$414-140-9038$v$, $v$terrasalvadortx@outlook.es$v$, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Vino$v$]::text[], false);

-- Quesos Quiroz. Fuentes: DENUE id 10956275 (Restaurante Quesos Quiroz La Carreta, Morelos Sur 5, quesosquirozmx@gmail.com, 11 a 30 personas, alta 2024-11); DENUE id 10090998 (Tienda de Quesos Quiroz, Grupo Empresarial Lechero, Peatonal Niños Héroes 34, alta 2024-11; fila del CSV grupo "Vinos y quesos"); https://tequis.travel/quesos_tequisquiapan/ ("desde 1972", restaurante La Carreta, Andador Morelos 5, 414 273 2315); https://tequis.travel/directorio/queserias/quiroz/ y /directorio/queserias/la-carreta/; Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Queserías: "La carreta de quesos Quiroz 414 273 2315".
-- Dirección [CONFLICTO resuelto por el DENUE]: Andador Morelos 5 (página Quesos), Heroico Colegio Militar 5 (ficha Quiroz) y C. Morelos Nte. (ficha La Carreta); el DENUE 2024 pone el restaurante en Morelos Sur 5 → gana Andador/Morelos 5 (pin del DENUE, a 11 m del de la ficha de La Carreta). El DENUE tiene otras dos filas viejas (2010): "Quesería Quesos Quiroz" en Francisco I. Madero 10 y "Quesería Quiroz" en Ezequiel Montes. COORDINAR con gastronomía: la fila "Restaurante Quesos Quiroz La Carreta" está en su grupo; no dar de alta La Carreta aparte (o quedarse con una sola ficha). "Restaurante" como amenidad: Turismo y DENUE. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('c8f85075-f7c1-5053-88c3-258d25f6e532', $v$Quesos Quiroz$v$, 'experiencias', $v$Quesería$v$, 20.5221242, -99.8918659, $v$Morelos Sur 5 (Andador Morelos), Centro$v$,
  $v$Quesería de 1972 con su restaurante, La Carreta$v$,
  $v$Quesería del centro, a unos 50 metros de la plaza, que según Turismo municipal hace quesos artesanales en Tequis desde 1972. En el mismo lugar está su restaurante, La Carreta, con platillos hechos con sus quesos y vinos de la región, nacionales e internacionales. El DENUE del INEGI registra además su tienda de quesos en Niños Héroes 34. No tiene web ni publica horario o precios.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$414-273-2315$v$, $v$quesosquirozmx@gmail.com$v$, NULL, NULL, NULL,
  ARRAY[$v$Restaurante$v$]::text[], ARRAY[$v$Quesos$v$, $v$Centro$v$]::text[], false);

-- Quesería La Vaca Feliz. Fuentes: DENUE ids 8147152 (Ezequiel Montes 13, lavacafeliz.com.mx), 3551710 y 3551709 (H. Colegio Militar 5), 10603807 (Niños Héroes, 414 273 1600), 3572384 (Salvador Michaus 4, 414 273 1600), 3571839 (Juárez Oriente); web propia https://lavacafeliz.com.mx y /sucursales.html (11-nov-2026: 5 sucursales con dirección, más de 120 quesos, WhatsApp wa.link/wpxg6d → 52 1 414 140 8880); https://tequis.travel/quesos_tequisquiapan/ ("La vaca feliz", Ezequiel Montes 13, 414 140 8880, queseria.lavacafeliz.com.mx); https://tequis.travel/directorio/queserias/la-vaquita-feliz/ ("La Vaquita Feliz", Guillermo Prieto, Centro, 414 273 1600); Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Queserías: "La Vaquita Feliz 414 273 1600 / WhatsApp 552 676 9708".
-- "La Vaquita Feliz" de tequis.travel y del PDF es esta misma quesería: su teléfono 414 273 1600 es el de dos filas del DENUE con la web lavacafeliz.com.mx, y su calle (Guillermo Prieto) es la sucursal "Auditorio" de la web. Se elige como ficha la sucursal de Ezequiel Montes 13 porque web, DENUE y la página Quesos coinciden ahí, y el teléfono 414 140 8880 (WhatsApp de la web = página Quesos). 414 273 1600 (sucursal Auditorio) y el WhatsApp 552 676 9708 del PDF van solo aquí. El correo del DENUE (paha_13@hotmail.com) parece personal: no se pone. content_verified = true (web propia que confirma direcciones; teléfono por su enlace de WhatsApp). "Degustaciones": su web invita a degustar los quesos. Estacionamiento solo en una sucursal: no va como amenidad. Fotos de su web: dos fachadas, una mesa de quesos y una tabla de quesos y carnes frías; se descartó la fachada con el letrero "Se solicita vendedoras".
-- Fotos: web propia (4).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('619ce2e0-c03f-5467-a1e4-18500a9952de', $v$Quesería La Vaca Feliz$v$, 'experiencias', $v$Quesería$v$, 20.5233171, -99.8908149, $v$Ezequiel Montes 13, local D, Centro$v$,
  $v$Cinco queserías en el centro, con más de 120 quesos$v$,
  $v$Quesería con cinco tiendas en el centro de Tequis; la de Ezequiel Montes 13 está frente al mercado, a unos 120 metros de la plaza. No produce: selecciona más de 120 quesos de la región e importados, de vaca, cabra, oveja y búfala, además de quesos frescos y carnes frías, y en sus tiendas se pueden probar. Las otras están en Heroico Colegio Militar 5 (con estacionamiento), Morelos 4 (detrás de la parroquia), Juárez 1 y Niños Héroes esquina con Guillermo Prieto.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/queseria-la-vaca-feliz-fachada-auditorio.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/queseria-la-vaca-feliz-fachada-juarez.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/queseria-la-vaca-feliz-quesos.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/queseria-la-vaca-feliz-tabla.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/queseria-la-vaca-feliz-fachada-auditorio.jpg$v$, $v$414-140-8880$v$, NULL, $v$https://lavacafeliz.com.mx$v$, $v$414-140-8880$v$, NULL,
  ARRAY[$v$Degustaciones$v$]::text[], ARRAY[$v$Quesos$v$, $v$Centro$v$]::text[], true);

-- Queserías La Mexicana Olé. Fuentes: DENUE id 3571856 (La Mexica Quesos y Vinos, Niños Héroes, Vergel del Acueducto, alta 2014-12) e id 3572400 (La Mexicana Quesería, Carrizal 4, alta 2014-12); página propia en UENI https://queserias-la-mexicana-ole.ueniweb.com (11-nov-2026: Niños Héroes 42 local 5, diario de 10 a 20 h, productos, vinoteca; sin teléfono); https://tequis.travel/quesos_tequisquiapan/ (3 sucursales, 414 273 5850); https://tequis.travel/directorio/queserias/la-mexicana/ (Niños Héroes 41_5, 414 273 5850; pin a 35 m del DENUE); Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Queserías: "La Mexicana Olé 414 104 2823 / WhatsApp 414 279 9567".
-- Teléfono [CONFLICTO, el DENUE no trae teléfono]: 414 273 5850 (tequis.travel, ficha y página Quesos) contra 414 104 2823 / WhatsApp 414 279 9567 (PDF 2025, el más reciente). Se pone el del PDF; confirmar. El PDF lista también "La Mexicana Ole 414 231 7013" en restaurantes. Número del local: 42 (UENI), 43 (página Quesos), 41_5 (ficha): se usa el de su propia página. Su página es de UENI (constructor de páginas), sin teléfono ni fotos propias: se enlaza, pero content_verified = false. Las degustaciones con sommelier solo las mencionan reseñas: no se ponen. Horario en la descripción con fecha [FRÁGIL].
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('07891ab8-57e9-51dd-8835-d83715910fb2', $v$Queserías La Mexicana Olé$v$, 'experiencias', $v$Quesería$v$, 20.5192776, -99.8964991, $v$Niños Héroes 42, local 5, Centro$v$,
  $v$Tienda de quesos con vinoteca y tres sucursales$v$,
  $v$Tienda de quesos en Niños Héroes 42, a unos 600 metros de la plaza, con quesos de vaca, cabra y oveja, lácteos, carnes frías, salsas, mermeladas y una vinoteca con vinos regionales y de otros países. En noviembre de 2026 su página decía que abría todos los días de 10 a 20 h. Según Turismo municipal, tiene otras dos sucursales: Carrizal 4, local D, en el centro, y Francisco Martínez Elías esquina con Hidalgo, en el Barrio de la Magdalena.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$414-104-2823$v$, NULL, $v$https://queserias-la-mexicana-ole.ueniweb.com$v$, $v$414-279-9567$v$, NULL,
  '{}'::text[], ARRAY[$v$Quesos$v$, $v$Vino$v$]::text[], false);

-- Casa del Artesano. Fuentes: DENUE id 3549606 (Casa del Artesano, H. Ayuntamiento de Tequisquiapan, Calle Morelos Sur, Centro, alta 2010-07); https://tequis.travel/artesanias_tequisquiapan/ (descripción, Morelos Sur 20 entre 5 de Mayo y Niños Héroes, "414 22 3695"); https://tequis.travel/directorio/experiencias/casa-del-artesano/ (5 de Mayo 22, 414 273 0169); queretaro.travel/en/?p=17705 (Artisan’s House: bendecida el 19-mar-1999 e inaugurada el 22-abr-1999; mayoreo y menudeo; canastas, tortilleros, cestos, servilleteros y adornos); Directorio Tequisquiapan 2025 (PDF de Turismo municipal, tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), Áreas relevantes para turistas: "Casa del Artesano 414 122 3695".
-- Dirección [CONFLICTO resuelto por el DENUE]: Morelos Sur 20 (página Artesanías) contra 5 de Mayo 22 (ficha); el DENUE la pone en Morelos Sur (pin entre 5 de Mayo y Niños Héroes) → gana Morelos Sur. El pin de la ficha (5 de Mayo 22) queda a 408 m. Teléfono: 414 122 3695 (PDF; la página Artesanías dice "414 22 3695", con un dígito de menos) contra 414 273 0169 (ficha, solo aquí). En el mismo punto del DENUE está "Casa Queretana de las Artesanías" (Gobierno del Estado, 414 273 3766, alta 2010-07) y en Niños Héroes otra fila 2024 con razón social "Casa del Artesano Galería": parecen el mismo inmueble o anexos; no se dan de alta aparte. Sin web ni fotos (IG lacasadelartesanotequisquiapan). content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('af7165e4-5660-5be0-a6d3-8a173fe288c1', $v$Casa del Artesano$v$, 'compras', $v$Artesanías$v$, 20.5218269, -99.8920545, $v$Morelos Sur 20, entre 5 de Mayo y Niños Héroes, Centro$v$,
  $v$Tienda y galería municipal de artesanías de Tequis$v$,
  $v$Tienda y galería municipal a unos 90 metros de la plaza, donde se exponen y venden, al mayoreo y al menudeo, artesanías de los artesanos del municipio, sobre todo de vara, mimbre, madera y otras fibras vegetales: canastas, tortilleros, cestos y adornos. Se inauguró en 1999 y también organiza ferias y talleres para los artesanos. No publica horario.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$, $v$414-122-3695$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Artesanías$v$, $v$Cestería$v$, $v$Centro$v$]::text[], false);

-- Querencia Media Luna. Fuentes: DENUE id 3571702 (Canastas de Bara y Mimbre, Margarita Maza de Juárez 5, Magdalena, alta 2014-12); https://tequis.travel/artesanias_tequisquiapan/ (lista de 14 talleres artesanales: taller, artesano, dirección, horario y teléfono); https://tequis.travel/directorio/artesanos/picnic/ (414 226 3012, "Av. Juárez No. 5, Barrio de la Magdalena").
-- Artesano según Turismo: Manuel Trejo Pacheco (no se pone en la descripción). El DENUE no da nombre comercial, pero la dirección es idéntica. La ficha de artesanos de tequis.travel con su teléfono dice "Av. Juárez 5" y su pin cae en el centro (copiado): se usa el del DENUE. Horario de la lista de tequis.travel, sin fecha [FRÁGIL]. "Talleres": Turismo dice que en estos talleres se explica el proceso; el DENUE los registra como fabricación de productos trenzables. Sin web ni fotos. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('1fc6ed2e-b5aa-5b8f-80c9-19d89a485ddc', $v$Querencia Media Luna$v$, 'compras', $v$Artesanías$v$, 20.5174375, -99.8801854, $v$Margarita Maza de Juárez 5, Barrio de la Magdalena$v$,
  $v$Taller familiar de cestería de vara y mimbre$v$,
  $v$Taller de cestería de vara y mimbre en Margarita Maza de Juárez 5, en el Barrio de la Magdalena, a 1.3 km de la plaza. Es uno de los 14 talleres artesanales que lista Turismo municipal, donde los artesanos explican cómo trabajan, de la recolección de la vara a la pieza terminada, y venden sus piezas. Según ese directorio, abre de lunes a sábado de 10 a 17 h. Figura también en el DENUE del INEGI. No tiene web: llama antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$, $v$414-226-3012$v$, NULL, NULL, NULL, NULL,
  ARRAY[$v$Talleres$v$]::text[], ARRAY[$v$Artesanías$v$, $v$Cestería$v$]::text[], false);

-- Taller Artesanal Clarita. Fuentes: DENUE id 3571676 (Elaboración de artesanías sin nombre, Zaragoza 9, Magdalena, alta 2014-12); https://tequis.travel/artesanias_tequisquiapan/ (lista de 14 talleres artesanales: taller, artesano, dirección, horario y teléfono); https://tequis.travel/directorio/artesanos/gallinas-guacamayas-globos-y-figuras/ (Zaragoza 9, 414 105 5067; pin a 25 m del DENUE).
-- Artesano según Turismo: Martín Cruz González. El DENUE no da nombre comercial; coincide la dirección (Zaragoza 9) con la lista de talleres y con una ficha de artesanos cuyo teléfono difiere en un dígito (414 105 5067 contra 414 105 5097 de la lista): confirmar el teléfono. Horario de la lista de tequis.travel, sin fecha [FRÁGIL]. "Talleres": Turismo dice que en estos talleres se explica el proceso; el DENUE los registra como fabricación de productos trenzables. Sin web ni fotos. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('6b95be31-9a41-58c9-867e-50cd777ea364', $v$Taller Artesanal Clarita$v$, 'compras', $v$Artesanías$v$, 20.5199256, -99.8803156, $v$Privada Zaragoza 9, Barrio de la Magdalena$v$,
  $v$Taller familiar de cestería de vara y mimbre$v$,
  $v$Taller de cestería de vara y mimbre en Privada Zaragoza 9, en el Barrio de la Magdalena, a 1.2 km de la plaza. Es uno de los 14 talleres artesanales que lista Turismo municipal, donde los artesanos explican cómo trabajan, de la recolección de la vara a la pieza terminada, y venden sus piezas. Según ese directorio, abre de lunes a sábado de 10 a 18 h. Figura también en el DENUE del INEGI. No tiene web: llama antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$, $v$414-105-5097$v$, NULL, NULL, NULL, NULL,
  ARRAY[$v$Talleres$v$]::text[], ARRAY[$v$Artesanías$v$, $v$Cestería$v$]::text[], false);

-- Taller Nuevo Diseño. Fuentes: DENUE id 3551261 (Arte Nuevo Diseño, Ignacio Zaragoza 19, Magdalena, 414 273 2776, alta 2010-07) e id 3551260 (Elaboración de artesanías de mimbre, Ignacio Zaragoza 20); https://tequis.travel/artesanias_tequisquiapan/ (lista de 14 talleres artesanales: taller, artesano, dirección, horario y teléfono); https://tequis.travel/directorio/artesanos/columpios-bolsas-muebles-paneras/ (Zaragoza 20, 414 107 6670: columpios, bolsas, muebles y paneras).
-- Artesano según Turismo: Salvador Mejía Peña. El DENUE tiene "Arte Nuevo Diseño" en Ignacio Zaragoza 19 (con otro teléfono, 414 273 2776, de 2010) y un taller sin nombre en el 20: mismo taller o vecinos. Se usan dirección y teléfono de Turismo y el pin del DENUE (a 43 m del de tequis.travel). Horario de la lista de tequis.travel, sin fecha [FRÁGIL]. "Talleres": Turismo dice que en estos talleres se explica el proceso; el DENUE los registra como fabricación de productos trenzables. Sin web ni fotos. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('98f7a580-682b-5907-ba02-da49f837e572', $v$Taller Nuevo Diseño$v$, 'compras', $v$Artesanías$v$, 20.5195679, -99.8805797, $v$Ignacio Zaragoza 20 B, Barrio de la Magdalena$v$,
  $v$Taller familiar de cestería de vara y mimbre$v$,
  $v$Taller de cestería de vara y mimbre en Ignacio Zaragoza 20 B, en el Barrio de la Magdalena, a 1.2 km de la plaza. Es uno de los 14 talleres artesanales que lista Turismo municipal, donde los artesanos explican cómo trabajan, de la recolección de la vara a la pieza terminada, y venden sus piezas. Según ese directorio, abre de lunes a sábado de 10 a 18 h. Figura también en el DENUE del INEGI. No tiene web: llama antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$, $v$414-107-6670$v$, NULL, NULL, NULL, NULL,
  ARRAY[$v$Talleres$v$]::text[], ARRAY[$v$Artesanías$v$, $v$Cestería$v$]::text[], false);

-- Taller Artesanal Margarita. Fuentes: DENUE id 8569586 (Artesanías Margarita, Escobedo 34, Magdalena, 414 109 0634, alta 2019-11); https://tequis.travel/artesanias_tequisquiapan/ (lista de 14 talleres artesanales: taller, artesano, dirección, horario y teléfono).
-- Artesana según Turismo: Margarita Mentado Ochoa. Es la coincidencia más clara: nombre, calle y teléfono iguales en el DENUE y en Turismo. El número 34 sale del DENUE (Turismo dice "s/n"). Horario de la lista de tequis.travel, sin fecha [FRÁGIL]. "Talleres": Turismo dice que en estos talleres se explica el proceso; el DENUE los registra como fabricación de productos trenzables. Sin web ni fotos. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('c2033f68-3aa0-576e-a2b0-c888d42b29a1', $v$Taller Artesanal Margarita$v$, 'compras', $v$Artesanías$v$, 20.5198518, -99.8790862, $v$Escobedo 34, Barrio de la Magdalena$v$,
  $v$Taller familiar de cestería de vara y mimbre$v$,
  $v$Taller de cestería de vara y mimbre en Escobedo 34, en el Barrio de la Magdalena, a 1.3 km de la plaza. Es uno de los 14 talleres artesanales que lista Turismo municipal, donde los artesanos explican cómo trabajan, de la recolección de la vara a la pieza terminada, y venden sus piezas. Según ese directorio, atiende con cita previa. Figura también en el DENUE del INEGI. No tiene web: llama antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$, $v$414-109-0634$v$, NULL, NULL, NULL, NULL,
  ARRAY[$v$Talleres$v$]::text[], ARRAY[$v$Artesanías$v$, $v$Cestería$v$]::text[], false);

-- Artesanías Peques. Fuentes: DENUE id 3551349 (Elaboración de artesanías de mimbre sin nombre, Francisco Márquez 34, Magdalena, alta 2010-07); https://tequis.travel/artesanias_tequisquiapan/ (lista de 14 talleres artesanales: taller, artesano, dirección, horario y teléfono); https://tequis.travel/directorio/artesanos/cajas-de-colores-de-palma-bimberas-y-canastas/ (Francisco Márquez 34, 414 112 7440; pin a 28 m del DENUE).
-- Artesana según Turismo: Sonia Hernández Morán. El DENUE no da nombre comercial; la dirección coincide con la lista de talleres y con una ficha de artesanos con el mismo teléfono (otra ficha con ese teléfono dice "Plan de Ayala s/n"). Horario de la lista de tequis.travel, sin fecha [FRÁGIL]. "Talleres": Turismo dice que en estos talleres se explica el proceso; el DENUE los registra como fabricación de productos trenzables. Sin web ni fotos. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('8357cece-02ff-53bb-9d72-a389cacabc95', $v$Artesanías Peques$v$, 'compras', $v$Artesanías$v$, 20.5257251, -99.8844021, $v$Francisco Márquez 34, Barrio de la Magdalena$v$,
  $v$Taller familiar de cestería de vara y mimbre$v$,
  $v$Taller de cestería de vara y mimbre en Francisco Márquez 34, en el Barrio de la Magdalena, a 830 metros de la plaza. Es uno de los 14 talleres artesanales que lista Turismo municipal, donde los artesanos explican cómo trabajan, de la recolección de la vara a la pieza terminada, y venden sus piezas. Según ese directorio, abre todos los días de 12 a 19 h. Figura también en el DENUE del INEGI. No tiene web: llama antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$, $v$414-112-7440$v$, NULL, NULL, NULL, NULL,
  ARRAY[$v$Talleres$v$]::text[], ARRAY[$v$Artesanías$v$, $v$Cestería$v$]::text[], false);

-- Artesanías La Línea. Fuentes: DENUE id 8147037 (Artesanías La Línea, Fernando Montes de Oca 45, Magdalena, alta 2019-11); https://tequis.travel/artesanias_tequisquiapan/ (lista de 14 talleres artesanales: taller, artesano, dirección, horario y teléfono).
-- Artesano según Turismo: Pedro Jiménez Arroyo. Nombre y calle coinciden con el DENUE (Turismo: "Juan de la Barrera esq. Fernando Montes de Oca s/n"; el número 45 es del DENUE). Horario de la lista de tequis.travel, sin fecha [FRÁGIL]. "Talleres": Turismo dice que en estos talleres se explica el proceso; el DENUE los registra como fabricación de productos trenzables. Sin web ni fotos. content_verified = false.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('1ab0773a-9bb3-5154-8c62-ee31c3e2b150', $v$Artesanías La Línea$v$, 'compras', $v$Artesanías$v$, 20.5288903, -99.8786618, $v$Fernando Montes de Oca 45, esquina con Juan de la Barrera, Barrio de la Magdalena$v$,
  $v$Taller familiar de cestería de vara y mimbre$v$,
  $v$Taller de cestería de vara y mimbre en Fernando Montes de Oca 45, esquina con Juan de la Barrera, en el Barrio de la Magdalena, a 1.5 km de la plaza. Es uno de los 14 talleres artesanales que lista Turismo municipal, donde los artesanos explican cómo trabajan, de la recolección de la vara a la pieza terminada, y venden sus piezas. Según ese directorio, abre de lunes a sábado de 10 a 18 h. Figura también en el DENUE del INEGI. No tiene web: llama antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg$v$, $v$414-231-7942$v$, NULL, NULL, NULL, NULL,
  ARRAY[$v$Talleres$v$]::text[], ARRAY[$v$Artesanías$v$, $v$Cestería$v$]::text[], false);

COMMIT;

-- =====================================================================================
-- gastronomia.json: 49 altas
-- =====================================================================================
BEGIN;

-- Xayu. Fuentes: DENUE id 10551518; web propia https://www.xayurestaurante.com/ (dirección "De los Sauces 1, Centro", tel. 442 414 1925, correo, horario).
-- DENUE id 10551518: "Xayu Restaurante De Barbacoa", Cerrada De Los Sauces 1 Centro, tel. 4421411925, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2024-11. Pin: DENUE (tequis.travel no tiene pin para este lugar). La web del DENUE trae una errata (www.xayuresraurante.com, no resuelve); la buena es xayurestaurante.com (Wix), verificada porque su dirección coincide con la del DENUE. Teléfono [CONFLICTO menor]: DENUE 442 141 1925, web 442 414 1925 (dígitos invertidos): se usa el de la web. No está en tequis.travel ni en el PDF 2025. Horario en la web, raro e incompleto [FRÁGIL]: "Lunes de 8:00 - 14:00, Sábado 8:00 - 21:00, Domingo 8:00 - 21:00" (no dice martes a viernes): no se publica. Ojo: misma dirección que el hotel Los Sauces del catálogo (y que el Centro Cultural Gloria Michaus en el DENUE); la foto muestra un patio con habitaciones al fondo, pero la web no dice que sea el restaurante del hotel, así que no se menciona. Menú con menudo de res o borrego, montalayo y ximbo (imágenes de la carta, no se transcriben). content_verified true: web propia que funciona, coincide en dirección con el DENUE y confirma teléfono y dirección; el horario es parcial. Fotos: la única foto real de la web es el comedor; el resto son logotipos, ilustraciones (sombrero, papel picado) y cartas con texto, descartadas.
-- Fotos: web propia (1).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('e0494707-e05f-59c2-be0f-cd6726e19c3c', $v$Xayu$v$, 'gastronomia', $v$Restaurante$v$, 20.5245994, -99.8900905, $v$Cerrada de los Sauces 1, Centro$v$,
  $v$Barbacoa al estilo de Hidalgo y carne asada, a 300 metros de la plaza$v$,
  $v$Restaurante, bar y grill a unos 300 metros de la Plaza Miguel Hidalgo. Su especialidad es la barbacoa con "el sabor de Hidalgo", horneada en hoyo, y por las tardes sirve carne asada. Figura en el DENUE del INEGI.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/xayu-comedor.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/xayu-comedor.jpg$v$, $v$442-414-1925$v$, $v$xayurestaurante@gmail.com$v$, $v$https://www.xayurestaurante.com/$v$, NULL, NULL,
  ARRAY[$v$Bar$v$]::text[], ARRAY[$v$Barbacoa$v$, $v$Mexicana$v$, $v$Centro$v$]::text[], true);

-- El Regocijo. Fuentes: DENUE id 3551542; https://tequis.travel/directorio/restaurantes/el-regocijo/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 3551542: "El Regocijo Alta Cocina Mexicana", Andador Independencia 1 Centro, tel. 4142730032, giro "Restaurantes que preparan otro tipo de alimentos para llevar", alta 2010-07. Pin: DENUE; el de tt-dir está a 20 m. Lada [CONFLICTO resuelto]: tt-dir 441 273 0032, PDF 2025 y DENUE 414 273 0032: gana 414. Sin descripción en tequis.travel: "alta cocina mexicana" sale solo del nombre registrado en el DENUE. Correo del DENUE (personal) no se usa.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('12f8dd77-d78f-513a-9033-58a14a6d4865', $v$El Regocijo$v$, 'gastronomia', $v$Restaurante$v$, 20.5228240, -99.8911964, $v$Andador Independencia 1, Centro$v$,
  $v$Cocina mexicana en el Andador Independencia, junto a la plaza$v$,
  $v$Restaurante en el Andador Independencia, a unos 60 metros de la Plaza Miguel Hidalgo. En el DENUE del INEGI está registrado como "El Regocijo Alta Cocina Mexicana". Figura además en el directorio de Turismo municipal. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-0032$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mexicana$v$, $v$Centro$v$]::text[], false);

-- Sabor a Mí. Fuentes: DENUE id 10615136; https://tequis.travel/sabor-a-mi/; https://tequis.travel/directorio/restaurantes/sabor-a-mi-cocina-mexicana/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 10615136: "Saborami", Calle Juarez Poniente 1 Centro, tel. 4141405028, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2024-11. Pin: DENUE; el de tt-dir está a 613 m (difiere >150 m). DENUE lo registra como "Saborami". Teléfono [CONFLICTO resuelto]: tequis.travel 414 140 5028 y DENUE 414 140 5028 frente a 427 119 6516 (PDF 2025): gana el 414 140 5028. Pin [CONFLICTO resuelto]: el pin de tt-dir caía a ~650 m, en Juárez Poniente lejos del centro; el DENUE lo pone en Juárez Pte. 1, junto a la plaza, como dice la dirección ("en el corazón del pueblo").
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('8f1db728-d1ad-518d-9fb7-bdd1af0deb06', $v$Sabor a Mí$v$, 'gastronomia', $v$Restaurante$v$, 20.5226796, -99.8919595, $v$Av. Benito Juárez Poniente 1, Centro$v$,
  $v$Cocina mexicana con ambiente familiar, a unos pasos de la plaza$v$,
  $v$Restaurante de cocina mexicana sobre Juárez Poniente, a unos 40 metros de la Plaza Miguel Hidalgo. Se presenta con ambiente familiar. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-140-5028$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mexicana$v$, $v$Familiar$v$, $v$Centro$v$]::text[], false);

-- Casa Rafaela. Fuentes: DENUE id 10287489; https://tequis.travel/casa_rafaela_tequisquiapan/; https://tequis.travel/directorio/restaurantes/casa-rafaela/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 10287489: "Restaurante Casa Rafaela", Calle Juarez Oriente Centro, tel. —, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2024-11. Pin: DENUE; el de tt-dir está a 26 m. Teléfono [CONFLICTO sin resolver por el DENUE, que no trae teléfono]: 414 140 4767 (tt-ficha y tt-dir) frente a 414 112 0115 (PDF 2025); se usa el de tequis.travel. "Juegos infantiles" solo lo dice tequis.travel: va en la descripción, no como amenidad "Área de juegos".
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('fb8a71ab-3f14-5897-b37e-70e2db586dd2', $v$Casa Rafaela$v$, 'gastronomia', $v$Restaurante$v$, 20.5224011, -99.8900333, $v$Av. Juárez Oriente 5, Centro$v$,
  $v$Cocina mexicana con jardín y juegos infantiles, cerca de la plaza$v$,
  $v$Restaurante de cocina mexicana con jardín, a unos 170 metros de la Plaza Miguel Hidalgo. En su ficha de Turismo dice tener juegos infantiles, vino y coctelería, y los fines de semana pancita con tortillas hechas a mano, quesadillas y pan con café orgánico. Figura también en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-140-4767$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mexicana$v$, $v$Centro$v$]::text[], false);

-- Casa Suelem. Fuentes: DENUE id 10203749; https://tequis.travel/casa_suelem_tequisquiapan/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34); investigacion-negocios-2026-11.md (Grupo Animal).
-- DENUE id 10203749: "Restaurante Casa Suelem", Calle Morelos Sur 19 Centro, tel. 4141041425, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2024-11. Pin: DENUE (tequis.travel no tiene pin para este lugar). Teléfono: tequis.travel, PDF 2025 y DENUE coinciden (414 104 1425). El DENUE lo registra a nombre de Adán Flores, el chef que citan tequis.travel y Grupo Animal. Dirección [CONFLICTO menor]: "C. Morelos Nte. 21" (tequis.travel) frente a "Morelos Sur 19" (DENUE); el pin del DENUE cae al sur de la plaza, igual que el de El Rincón de Tequis (Morelos 20 esq. 5 de Mayo), así que el "Nte." de tequis.travel parece errata; se deja "Andador Morelos 21" sin Norte/Sur. Redes: facebook.com/casasuelemtequis, instagram.com/casasuelem (no son web propia).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('4d853372-3004-5594-948d-9ede7923ca4c', $v$Casa Suelem$v$, 'gastronomia', $v$Restaurante$v$, 20.5215104, -99.8921079, $v$Andador Morelos 21, Centro$v$,
  $v$Cocina mexicana contemporánea con influencia mediterránea, en el centro$v$,
  $v$Restaurante de cocina mexicana contemporánea con influencia mediterránea, del chef Adán Flores, en el Andador Morelos, a unos 120 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-104-1425$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mexicana$v$, $v$Centro$v$]::text[], false);

-- Vika Gastrobar. Fuentes: DENUE id 10830197; https://tequis.travel/restaurante-vika; https://tequis.travel/directorio/restaurantes/vika-gastrobar/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 10830197: "Restaurante Vika", Calle Morelos Sur 13 Centro, tel. 4141062348, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2024-11. Pin: DENUE; el de tt-dir está a 25 m. Teléfono [CONFLICTO resuelto]: tt-dir 414 106 2348 = DENUE; el PDF da 414 273 3390 y la tt-ficha un número incompleto "(414) 140090". Dirección: tt-dir dice "C. Morelos Nte. 13", pero su propio pin y el del DENUE ("Morelos Sur 13") caen al sur de la plaza: se usa Sur. La tt-ficha enlaza el Facebook, Instagram y correo de Río 33: NO usarlos. vikarestaurante.com no resuelve (web null). Correo del DENUE con dominio inválido ("@tx.com"): no se usa.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('630a4b3d-4b9a-51b8-bcce-8b9b0f34c078', $v$Vika Gastrobar$v$, 'gastronomia', $v$Restaurante$v$, 20.5220160, -99.8918972, $v$Andador Morelos Sur 13, Centro$v$,
  $v$Cocina mexicana contemporánea para adultos, con terraza$v$,
  $v$Gastrobar de cocina mexicana con toque contemporáneo, a unos 60 metros de la Plaza Miguel Hidalgo. En su ficha de Turismo dice estar pensado para un público adulto y tener terraza y coctelería. Figura también en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-106-2348$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mexicana$v$, $v$De noche$v$, $v$Centro$v$]::text[], false);

-- Cilantro y Perejil. Fuentes: DENUE id 6219039; https://tequis.travel/directorio/restaurantes/cilantro-y-perejil/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 6219039: "Restaurante-Bar Cilantro Y Perejil", Avenida Niños Heroes 2 Centro, tel. 4142734751, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2010-07. Pin: DENUE; el de tt-dir está a 8 m. Lada [CONFLICTO resuelto]: tt-dir y DENUE 414 273 4751, PDF 2025 427 273 4751: gana 414. cilantroyperejil.com.mx da el error de Wix "ConnectYourDomain" (sin sitio): website null. Sin descripción en ninguna fuente; "restaurante bar" sale del nombre en el DENUE.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('3916bf0d-1cb0-540c-90af-9744c61dcda0', $v$Cilantro y Perejil$v$, 'gastronomia', $v$Restaurante$v$, 20.5222160, -99.8920823, $v$Niños Héroes 2, Centro$v$,
  $v$Restaurante bar a una cuadra de la plaza$v$,
  $v$Restaurante bar en la calle Niños Héroes, a unos 60 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-4751$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- El Rincón de Tequis. Fuentes: DENUE id 8686051; https://tequis.travel/directorio/restaurantes/el-rincon-de-tequis/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 8686051: "Restaurante El Rincon De Tequis", Calle Morelos Sur 20 Centro, tel. —, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2019-11. Pin: DENUE; el de tt-dir está a 5 m. Ojo: el cruce automático del CSV (en_catalogo) lo empató con "Rincón Mexicano"; es otro negocio (otra dirección, otro teléfono). El PDF 2025 trae dos renglones: "El rincón de tequis" 414 688 0439 (= tt-dir) y "Rincón de Tequis" 414 109 4153; se usa el que coincide con tt-dir. El DENUE no trae teléfono. Sin descripción en ninguna fuente.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('6a55e6e8-3157-5406-8be6-966da5449be2', $v$El Rincón de Tequis$v$, 'gastronomia', $v$Restaurante$v$, 20.5215205, -99.8921938, $v$Andador Morelos 20, esquina 5 de Mayo, Centro$v$,
  $v$Restaurante en el Andador Morelos, a una cuadra de la plaza$v$,
  $v$Restaurante en la esquina del Andador Morelos con 5 de Mayo, a unos 130 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-688-0439$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Santo Tomate. Fuentes: DENUE id 10810115; https://tequis.travel/directorio/restaurantes/santo-tomate/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 10810115: "Resturante Santo Tomate", Calle Juarez Poniente 17 Centro, tel. 4141228544, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2024-11. Pin: DENUE; el de tt-dir está a 11 m. Teléfono: tt-dir, PDF 2025 y DENUE coinciden. Número [CONFLICTO menor]: "Juárez 47" (tt-dir) frente a "Juárez Poniente 17" (DENUE); los dos pins están a 11 m, así que la ubicación es segura; se deja el 47 de Turismo. Sin descripción en ninguna fuente.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('6fc34abf-c13a-52e3-8ff2-adbcaf897ac8', $v$Santo Tomate$v$, 'gastronomia', $v$Restaurante$v$, 20.5227000, -99.8943092, $v$Av. Benito Juárez Poniente 47, Centro$v$,
  $v$Restaurante sobre Juárez Poniente, a 300 metros de la plaza$v$,
  $v$Restaurante sobre la avenida Juárez Poniente, a unos 280 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-122-8544$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- La Quercia Ristorante. Fuentes: DENUE id 3571981; https://tequis.travel/directorio/restaurantes/la-quercia-ristorante/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 3571981: "Restaurante La Quercia", Avenida Niños Heroes Centro, tel. 4142736211, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2014-12. Pin: DENUE; el de tt-dir está a 27 m. Teléfono: tt-dir, PDF 2025 y DENUE coinciden. NO usar laquercia.com.mx: redirige a lefort.com.mx y a un sitio de apuestas (bongdalu.eu). Sin descripción en ninguna fuente: "italiana" sale solo del nombre ("Ristorante").
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('33592d4d-57f6-5c63-a471-e733acd632ea', $v$La Quercia Ristorante$v$, 'gastronomia', $v$Restaurante$v$, 20.5222284, -99.8922168, $v$Niños Héroes 4, Centro$v$,
  $v$Restaurante italiano a una cuadra de la plaza$v$,
  $v$Restaurante en la calle Niños Héroes, a unos 70 metros de la Plaza Miguel Hidalgo; por su nombre, de cocina italiana. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-6211$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Italiana$v$, $v$Centro$v$]::text[], false);

-- Mágico Tequis. Fuentes: DENUE id 3572474; https://tequis.travel/directorio/restaurantes/magico-tx/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34); carta en https://mybakarta.com/MAGICO-TEQUIS-Restaurante-Cafeteria-Gourmet-Snacks-Bar.
-- DENUE id 3572474: "Restaurante Magico Tequis", Calle Juarez Poniente 16 Centro, tel. 4776702080, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2014-12. Pin: DENUE; el de tt-dir está a 34 m. Nombre: "Mágico TX" en tt-dir; "Mágico Tequis" en el PDF 2025, el DENUE y su carta: se usa Mágico Tequis. Teléfono [CONFLICTO resuelto]: tt-dir 477 670 2080 = DENUE; el PDF da 477 239 9921 (el mismo que "Casa Rosana"). La carta (mybakarta) es plataforma de menús, no web propia: website null, sin fotos.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('c14f7db9-0727-51c2-b58f-89c39f7b571d', $v$Mágico Tequis$v$, 'gastronomia', $v$Restaurante$v$, 20.5228061, -99.8925453, $v$Av. Benito Juárez Poniente 16, Centro$v$,
  $v$Restaurante, cafetería y bar sobre Juárez Poniente, junto a la plaza$v$,
  $v$Restaurante, cafetería y bar a unos 100 metros de la Plaza Miguel Hidalgo. Su carta en línea tiene desayunos, baguettes, pizzas, comidas, cenas y coctelería. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$477-670-2080$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Pizza$v$, $v$Centro$v$]::text[], false);

-- Piadina Beer & Kitchen. Fuentes: DENUE id 11737992; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 11737992: "Restaurante Piadina Beer & Kitchen", Calle Juárez Poniente 8 Centro, tel. 5510118296, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2025-04. Pin: DENUE (tequis.travel no tiene pin para este lugar). Solo PDF 2025 (nombre y teléfono) + DENUE; los teléfonos coinciden (55 1011 8296). Su web del DENUE, piadinabeerykitchen.com.mx, no resuelve (DNS): website null. Sin descripción en ninguna fuente; no se dice qué sirve más allá del nombre.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('a523851f-5b74-5f79-bde5-bc11a60d8e58', $v$Piadina Beer & Kitchen$v$, 'gastronomia', $v$Restaurante$v$, 20.5228132, -99.8924008, $v$Av. Benito Juárez Poniente 8, Centro$v$,
  $v$Cocina y cerveza sobre Juárez Poniente, junto a la plaza$v$,
  $v$Restaurante sobre Juárez Poniente, a unos 80 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$55-1011-8296$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Museo del Queso y el Vino. Fuentes: DENUE id 3572439; https://tequis.travel/directorio/restaurantes/museo-queso-y-vino/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 3572439: "Restaurante Y Museo Del Queso Y El Vino", Calle Salvador Michaus 17 Centro, tel. 4142736485, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2014-12. Pin: DENUE; el de tt-dir está a 20 m. Teléfono: tt-dir, PDF 2025 y DENUE coinciden (414 273 6485). Número: 19 (tt-dir) frente a 17 (DENUE); se usa 19. tt-dir da la web quesosvai.com, pero esa web (Finca VAI, ya en el catálogo) no menciona este local en el centro: website null, sin fotos. DUDA para decidir: ¿gastronomia/Restaurante (como lo clasifican DENUE y tt-dir) o experiencias/Quesería junto a Finca VAI y Bocanegra? No hay fuente de qué se hace adentro (horario, si cobra entrada, si hay degustación).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('60c6ebb2-1ff9-5f74-97e8-aa3899815dbf', $v$Museo del Queso y el Vino$v$, 'gastronomia', $v$Restaurante$v$, 20.5234840, -99.8910619, $v$Salvador Michaus 19, Centro$v$,
  $v$Restaurante y museo del queso y el vino, a una cuadra de la plaza$v$,
  $v$En la calle Salvador Michaus, a unos 120 metros de la Plaza Miguel Hidalgo. El DENUE del INEGI lo registra como restaurante y museo del queso y el vino, y el directorio de restaurantes de Turismo municipal lo enlaza con Quesos VAI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-6485$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- La Taberna Alemana. Fuentes: DENUE id 9132207; https://tequis.travel/directorio/restaurantes/la-taberna-alemana/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 9132207: "Restaurante La Taberna", Calle Ezequiel Montes Centro, tel. 4141092121, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2019-11. Pin: DENUE; el de tt-dir está a 8 m. DENUE: "Restaurante La Taberna" (giro restaurante a la carta). Teléfono [CONFLICTO resuelto]: tt-dir 414 109 2121 = DENUE; el PDF le da el 414 273 0108, que es de Capricho's. Facebook "SeckbachHaus". Sin descripción: "alemana" sale del nombre; no se dice qué sirve. Subcategoría Bar por "taberna"; el DENUE la clasifica como restaurante (si se prefiere, Restaurante).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('518a2985-d59e-58fe-85ef-168bc9bded15', $v$La Taberna Alemana$v$, 'gastronomia', $v$Bar$v$, 20.5233357, -99.8908134, $v$Ezequiel Montes 13D, Centro$v$,
  $v$Taberna en Ezequiel Montes, a una cuadra de la plaza$v$,
  $v$Taberna en la calle Ezequiel Montes, a unos 120 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-109-2121$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Tres Cuartos Cocina de Brasa. Fuentes: DENUE id 9645518; https://tequis.travel/restaurante-3-4/; https://tequis.travel/%c2%be-cocina-brasa/; https://tequis.travel/directorio/restaurantes/tres-cuartos-cocina-de-brasa/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 9645518: "Restaurante 3/4 Cocina De Brasas", Calle Juarez Poniente Centro, tel. 4141206545, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2024-11. Pin: DENUE; el de tt-dir está a 185 m (difiere >150 m). También "Restaurante 3/4". Teléfono [CONFLICTO resuelto]: tt-ficha 414 120 6545 = DENUE; tt-dir y PDF dan 414 226 8718. Dirección [CONFLICTO resuelto]: tt-ficha "Andador Juárez #1" y DENUE "Juárez Poniente" (pin a 52 m de la plaza) frente a tt-dir "C. Morelos Nte. 1C-C" (pin a 185 m del DENUE): gana Andador Juárez. "La mejor vista del pueblo" es dicho del negocio: no se usa. DJ y desayunos solo los dice tequis.travel [FRÁGIL].
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('afd3bca6-5d48-58f7-938a-e25e4629d9f9', $v$Tres Cuartos Cocina de Brasa$v$, 'gastronomia', $v$Restaurante$v$, 20.5226894, -99.8921135, $v$Andador Juárez 1, Centro$v$,
  $v$Cocina de brasa con toque asiático y DJ los fines de semana$v$,
  $v$Restaurante de cocina a la brasa con platillos de inspiración asiática, a unos 50 metros de la Plaza Miguel Hidalgo. Según su ficha de Turismo, los fines de semana sirve desayunos y los viernes y sábados hay DJ desde las 21 h. Figura también en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-120-6545$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$De noche$v$, $v$Centro$v$]::text[], false);

-- Bacha & Co. Fuentes: DENUE id 3551604; https://tequis.travel/bacha_co_tequisquiapan/; https://tequis.travel/directorio/restaurantes/bashir-co-pizza-beer/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 3551604: "Pizzerias Bacha", Calle 20 De Noviembre 2 Centro, tel. 4142808099, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2014-12. Pin: DENUE; el de tt-dir está a 33 m. Nombre [CONFLICTO resuelto]: "Bacha & Co" (tt-ficha, FB/IG bachapizza) frente a "Bashir & Co Pizza & Beer" (tt-dir y PDF): el DENUE dice "Pizzerias Bacha" y da la web www.bachapizza.com.mx, así que gana Bacha. Esa web no resuelve (DNS): website null, sin fotos. Teléfono: los cuatro coinciden.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('a7e10cf4-d15a-50b2-9b37-d5dfbd3034b6', $v$Bacha & Co$v$, 'gastronomia', $v$Pizzería$v$, 20.5229563, -99.8921884, $v$20 de Noviembre 2A, Centro$v$,
  $v$Pizza de masa árabe y cervezas artesanales, junto a la plaza$v$,
  $v$Pizzería a unos 70 metros de la Plaza Miguel Hidalgo. Prepara pizza de masa árabe y, según su ficha de Turismo, tiene más de 40 cervezas artesanales mexicanas para acompañarla. Figura también en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-280-8099$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Pizza$v$, $v$Centro$v$]::text[], false);

-- Gerardo's Video Pizza. Fuentes: DENUE id 3551550; https://tequis.travel/directorio/restaurantes/gerardos-video-pizza/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 3551550: "Pizzeria Gerardos Video Pizza", Andador Independencia 13 Centro, tel. 4142732714, giro "Restaurantes con servicio de preparación de pizzas, hamburguesas, hot dogs y pollos rostizados para llevar", alta 2010-07. Pin: DENUE; el de tt-dir está a 14 m. Teléfono [CONFLICTO resuelto]: tt-dir 414 273 2714 = DENUE; el PDF da 414 273 1511. Independencia 13 es también la dirección que se usa para el Mercado Tequesquicalli; puede estar dentro o junto al mercado (sin fuente).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('61e21d55-a3fa-5d35-befa-01700d635fb4', $v$Gerardo's Video Pizza$v$, 'gastronomia', $v$Pizzería$v$, 20.5233408, -99.8911793, $v$Andador Independencia 13, Centro$v$,
  $v$Pizzería en el Andador Independencia, junto a la plaza$v$,
  $v$Pizzería en el Andador Independencia, a unos 100 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-2714$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Pizza$v$, $v$Centro$v$]::text[], false);

-- Lula's Pizza, Pasta & Salad. Fuentes: DENUE id 9174740; https://tequis.travel/directorio/restaurantes/lulas-pizza-pasta-salad/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 9174740: "Pizza Y Pasta Lulas", Calle General Arteaga Magdalena, tel. 4141021949, giro "Restaurantes con servicio de preparación de pizzas, hamburguesas, hot dogs y pollos rostizados para llevar", alta 2019-11. Pin: DENUE; el de tt-dir está a 7 m. DENUE: "Pizza Y Pasta Lulas". Teléfono [CONFLICTO resuelto]: tt-dir 414 102 1949 = DENUE; el PDF da 414 273 6045. Pizza, pasta y ensaladas salen del nombre.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('7cc36f3b-e137-54f4-885b-670be2c9749d', $v$Lula's Pizza, Pasta & Salad$v$, 'gastronomia', $v$Pizzería$v$, 20.5224780, -99.8813576, $v$Gral. José María Arteaga 36, Magdalena$v$,
  $v$Pizza y pasta en el Barrio de la Magdalena$v$,
  $v$Pizzería en el Barrio de la Magdalena, a poco más de un kilómetro de la Plaza Miguel Hidalgo, con pizza, pasta y ensaladas. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-102-1949$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Pizza$v$]::text[], false);

-- Idearte Café. Fuentes: DENUE id 11015869; https://tequis.travel/idearte_cafe_tequisquiapan/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 11015869: "Idearte", Calle Guillermo Prieto Centro, tel. 5625218569, giro "Cafeterías, fuentes de sodas, neverías, refresquerías y similares", alta 2024-11. Pin: DENUE (tequis.travel no tiene pin para este lugar). Teléfono: tt-ficha, PDF 2025 y DENUE coinciden (56 2521 8569). Dirección: tt-ficha da "Guillermo Prieto 18 bis" y además "contra esquina de Quesos Quiroz, Francisco I. Madero 7a"; el DENUE dice "Guillermo Prieto, Centro" sin número, con pin cerca del cruce con Juárez. Hay una segunda fila del DENUE, "Cafe Idearte" (id 11183503, H. Colegio Militar 7, tel. 414 187 9360): quizá otro local; no se da de alta aparte. Correo del DENUE con dominio "tmail.com" (errata): no se usa.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('5e8db98d-5729-5621-ac04-7d865e959220', $v$Idearte Café$v$, 'gastronomia', $v$Cafetería$v$, 20.5229258, -99.8926728, $v$Guillermo Prieto 18 bis, Centro$v$,
  $v$Café de especialidad y tostador, a una cuadra de la plaza$v$,
  $v$Cafetería de especialidad que tuesta su propio café y lo vende para llevar a casa, en la calle Guillermo Prieto, a unos 120 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$56-2521-8569$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Café$v$, $v$Centro$v$]::text[], false);

-- La Puerta. Fuentes: DENUE id 3571976; https://tequis.travel/directorio/restaurantes/la-puerta/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 3571976: "Restaurante Cafeteria La Puerta", Calle Juarez Poniente Centro, tel. 4142262587, giro "Cafeterías, fuentes de sodas, neverías, refresquerías y similares", alta 2014-12. Pin: DENUE; el de tt-dir está a 13 m. DENUE: "Restaurante Cafeteria La Puerta", giro cafetería. Teléfono: tt-dir, PDF 2025 y DENUE coinciden. Sin descripción en ninguna fuente.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('8cb4cb03-a520-519a-a8ca-ce88ef17f3a5', $v$La Puerta$v$, 'gastronomia', $v$Cafetería$v$, 20.5227260, -99.8924791, $v$Av. Benito Juárez Poniente 5, Centro$v$,
  $v$Restaurante cafetería sobre Juárez Poniente, junto a la plaza$v$,
  $v$Restaurante cafetería sobre Juárez Poniente, a unos 90 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-226-2587$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Café$v$, $v$Centro$v$]::text[], false);

-- Chocolate Molinillo. Fuentes: DENUE id 3551552; https://tequis.travel/directorio/restaurantes/chocolate-molinillo/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 3551552: "Chocolate Molinillo", Andador Independencia 17 Centro, tel. —, giro "Cafeterías, fuentes de sodas, neverías, refresquerías y similares", alta 2010-07. Pin: DENUE; el de tt-dir está a 17 m. Teléfono: tt-dir y PDF 2025 coinciden; el DENUE no trae teléfono (giro cafetería). Sin descripción: "chocolatería" sale del nombre. La carga inicial tenía una "Chocolatería Don Rafa" inventada (ya desactivada); esta es la real. Subcategoría: Cafetería por el giro del DENUE; Dulcería existe en el código como alternativa.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('d3b92989-1395-5f47-aa5d-e3e8e4449bd5', $v$Chocolate Molinillo$v$, 'gastronomia', $v$Cafetería$v$, 20.5234314, -99.8911763, $v$Andador Independencia 17, Centro$v$,
  $v$Chocolatería en el Andador Independencia, junto a la plaza$v$,
  $v$Chocolatería en el Andador Independencia, a unos 110 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-0966$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- La Crepe. Fuentes: DENUE id 9156141; https://tequis.travel/la_crepe_tequisquiapan/.
-- DENUE id 9156141: "La Crepe Crepas", Privada Camelinas 142 Centro, tel. —, giro "Cafeterías, fuentes de sodas, neverías, refresquerías y similares", alta 2019-11. Pin: DENUE (tequis.travel no tiene pin para este lugar). Solo tt-ficha + DENUE ("La Crepe Crepas"). Teléfono solo de la tt-ficha (el DENUE no trae). Dirección: el DENUE dice "Privada Camelinas 142", la misma que da a La Jauría, Dudi, Cuatro Barrios y Sake Sushi Place: es la Plaza Los Arcos (Ezequiel Montes 142), con un solo pin para todos. Correo del DENUE lacrepetx@gmail.com (no confirmado por otra fuente).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('4be92cb3-12aa-5618-b4f0-fdd3c3a279bc', $v$La Crepe$v$, 'gastronomia', $v$Cafetería$v$, 20.5259874, -99.8901949, $v$Plaza Los Arcos, local 1, Ezequiel Montes 142, Centro$v$,
  $v$Crepas, malteadas y desayunos frente al Parque La Pila$v$,
  $v$Crepería en la Plaza Los Arcos, frente al Parque La Pila, a unos 400 metros de la Plaza Miguel Hidalgo. Según su ficha de Turismo, prepara crepas dulces y saladas, malteadas, frappés, smoothies, baguettes, café y desayunos, y tiene libros para leer en el local. Figura también en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$442-321-1950$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Café$v$, $v$Postres$v$, $v$Centro$v$]::text[], false);

-- Dudi Coffee House. Fuentes: DENUE id 9536388; https://tequis.travel/dudi_coffe_house_tequisquiapan/.
-- DENUE id 9536388: "Cafeteria Dudi Coffe House", Privada Camelinas 142 Centro, tel. 4141011119, giro "Cafeterías, fuentes de sodas, neverías, refresquerías y similares", alta 2024-11. Pin: DENUE (tequis.travel no tiene pin para este lugar). Teléfono: tt-ficha = DENUE (414 101 1119). DENUE: "Privada Camelinas 142" (Plaza Los Arcos, pin compartido). "Pet friendly" es de la plaza y solo lo dice tequis.travel: no va como amenidad.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('d20a1e1a-d174-51cf-8552-29e2a7c240b3', $v$Dudi Coffee House$v$, 'gastronomia', $v$Cafetería$v$, 20.5259874, -99.8901949, $v$Plaza Los Arcos, Ezequiel Montes 142, Centro$v$,
  $v$Café en la Plaza Los Arcos, frente al Parque La Pila$v$,
  $v$Cafetería en la Plaza Los Arcos, frente al Parque La Pila, a unos 400 metros de la Plaza Miguel Hidalgo. Según su ficha de Turismo, la plaza comercial admite mascotas. Figura también en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-101-1119$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Café$v$, $v$Centro$v$]::text[], false);

-- Cafetería Laysu. Fuentes: DENUE id 10583953; https://tequis.travel/directorio/restaurantes/cafeteria-laysu/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 10583953: "Cafeteria Laysu Deli Cafe", Avenida Niños Heroes Vergel Del Acueducto, tel. —, giro "Cafeterías, fuentes de sodas, neverías, refresquerías y similares", alta 2024-11. Pin: DENUE; el de tt-dir está a 43 m. DENUE: "Cafeteria Laysu Deli Cafe", sin teléfono. Teléfono [CONFLICTO sin resolver]: tt-dir 414 273 0383; PDF 2025 553 232 4465 / 414 114 7871 (y en "Productos naturales" el PDF le pone los de Yoot Masajes). Se usa el de tt-dir (criterio: con dos versiones, tt-dir; con tres, el PDF 2025). La investigación la describe como "pastelería y bistró" sin cita: la descripción solo dice cafetería.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('e8f75a71-26f5-5e60-9e5c-cd8ffd9323a3', $v$Cafetería Laysu$v$, 'gastronomia', $v$Cafetería$v$, 20.5192946, -99.8964788, $v$Niños Héroes 43, local 4, Vergel del Acueducto$v$,
  $v$Cafetería y pastelería en la avenida Niños Héroes$v$,
  $v$Cafetería en la avenida Niños Héroes, a unos 600 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-0383$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Café$v$]::text[], false);

-- Buenos Días, desayunos y café. Fuentes: DENUE id 11798059; https://tequis.travel/buenos_dias_desayunos_y_cafe_tequisquiapan/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 11798059: "Buenos Dias Desayunos Y Cafe", Calle Estatal 200 Hacienda Grande, tel. —, giro "Cafeterías, fuentes de sodas, neverías, refresquerías y similares", alta 2025-04. Pin: DENUE (tequis.travel no tiene pin para este lugar). Teléfono: tt-ficha y PDF 2025 coinciden; el DENUE no trae. Dirección: tt-ficha "C. Zafiro s/n, Pedregal de Hacienda Grande, en carretera Tecozautla–Club de golf"; DENUE "Calle Estatal 200, Hacienda Grande". Amenidad Desayunos: la dicen tequis.travel y el nombre registrado en el DENUE (dos fuentes).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('68c0d213-7bc8-500c-b392-26b1dfed53aa', $v$Buenos Días, desayunos y café$v$, 'gastronomia', $v$Cafetería$v$, 20.5342126, -99.8978420, $v$Calle Zafiro s/n, Pedregal de Hacienda Grande$v$,
  $v$Desayunos todo el día y comida corrida, en Hacienda Grande$v$,
  $v$Desayunos y platillos a la carta en la zona de Hacienda Grande, a un kilómetro y medio de la Plaza Miguel Hidalgo. Según su ficha de Turismo, la carta de desayunos está abierta todo el día y hay comida corrida de tres tiempos con menú que cambia a diario. Figura también en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$427-488-2507$v$, NULL, NULL, NULL, NULL,
  ARRAY[$v$Desayunos$v$]::text[], ARRAY[$v$Café$v$]::text[], false);

-- Helados Rollato. Fuentes: DENUE id 10903520; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34) ("Rollato").
-- DENUE id 10903520: "Helados Rollato", Calle Juarez Oriente Centro, tel. —, giro "Cafeterías, fuentes de sodas, neverías, refresquerías y similares", alta 2024-11. Pin: DENUE (tequis.travel no tiene pin para este lugar). Solo PDF 2025 (nombre "Rollato" y teléfono) + DENUE ("Helados Rollato", sin número ni teléfono). El nombre es poco común, por eso se empata. Subcategoría Nevería: ya existe en el código (plural "Neverías", inglés "Ice cream shop"). Sin fotos ni web.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('155011ad-8777-59c9-a123-3881bc720414', $v$Helados Rollato$v$, 'gastronomia', $v$Nevería$v$, 20.5224805, -99.8902079, $v$Av. Juárez Oriente, Centro$v$,
  $v$Heladería sobre Juárez Oriente, a 150 metros de la plaza$v$,
  $v$Heladería sobre la avenida Juárez Oriente, a unos 150 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$427-212-5497$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Postres$v$, $v$Centro$v$]::text[], false);

-- Wine Bar Freixenet. Fuentes: DENUE id 9422904; https://tequis.travel/directorio/restaurantes/wine-bar-freixenet/; https://tequis.travel/vinedos_tequisquiapan/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34); OSM nodo 6601353691.
-- DENUE id 9422904: "Wine Bar Freixenet", Calle Juárez Poniente 4 Centro, tel. 4271611521, giro "Bares, cantinas y similares", alta 2023-11. Pin: DENUE; el de tt-dir está a 2 m. Resuelve la duda de investigacion-negocios-2026-11.md (§7): el DENUE lo registra con razón social FREIXENET DE MEXICO, así que sí lo opera Freixenet. Teléfono: tequis.travel y PDF 414 273 3995; el DENUE da 427 161 1521 (quizá de la empresa). freixenetmexico.com.mx redirige a salavive.mx, que no menciona este bar: website null. Pin: DENUE, a 2 m de tt-dir y cerca del nodo OSM. Subcategoría: Bar (en el código existe también "Wine Bar", sin uso hoy).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('540aef3a-0b45-5bb2-87f3-2e97fb434424', $v$Wine Bar Freixenet$v$, 'gastronomia', $v$Bar$v$, 20.5228198, -99.8922653, $v$Av. Juárez Poniente 4C, Centro$v$,
  $v$Bar de vinos sobre Juárez Poniente, junto a la plaza$v$,
  $v$Bar de vinos sobre Juárez Poniente, a unos 70 metros de la Plaza Miguel Hidalgo. En el DENUE del INEGI está registrado a nombre de Freixenet de México. Figura también en el directorio de Turismo municipal. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-3995$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$De noche$v$, $v$Centro$v$]::text[], false);

-- La Jauría. Fuentes: DENUE id 10796801; https://tequis.travel/la_jauria_tequisquiapan/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34) (sin teléfono, "N/A").
-- DENUE id 10796801: "La Jauria", Privada Camelinas 142 Centro, tel. —, giro "Bares, cantinas y similares", alta 2024-11. Pin: DENUE (tequis.travel no tiene pin para este lugar). Teléfonos solo de la tt-ficha (414 104 7215 / 55 8034 7503); PDF 2025 y DENUE sin teléfono. DENUE: "Privada Camelinas 142" (Plaza Los Arcos, pin compartido), giro bar. "Pet friendly" solo lo dice tequis.travel: en la descripción, no como amenidad.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('a708db5a-909c-5bd5-9508-2541076268fe', $v$La Jauría$v$, 'gastronomia', $v$Bar$v$, 20.5259874, -99.8901949, $v$Plaza Los Arcos, Ezequiel Montes 142 int. 4b, Centro$v$,
  $v$Neo pulquería con curados y juegos de mesa, frente al Parque La Pila$v$,
  $v$Neo pulquería en la Plaza Los Arcos, frente al Parque La Pila, a unos 400 metros de la Plaza Miguel Hidalgo. Sirve pulque de la región queretana, curados y coctelería con pulque. Según su ficha de Turismo, tiene juegos de mesa, admite mascotas y organiza eventos culturales. Figura también en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-104-7215$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$De noche$v$, $v$Centro$v$]::text[], false);

-- Alita Mía. Fuentes: DENUE id 11300335; https://tequis.travel/directorio/restaurantes/alita-mia/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 11300335: "Restaurante Alita Mia", Calle Federal 120 San Juan Del Rio Xilitla El Pedregal, tel. —, giro "Bares, cantinas y similares", alta 2024-11. Pin: DENUE; el de tt-dir está a 22 m. Teléfono: tt-dir y PDF 2025 coinciden; el DENUE no trae. Dirección de tt-dir mal escrita ("km 200 is a local 3"); el DENUE da "Federal 120 San Juan del Río–Xilitla, El Pedregal", giro bar. "Alitas" sale del nombre. IG alitamiatx.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('37597543-1d00-5b62-a2c7-908992e46718', $v$Alita Mía$v$, 'gastronomia', $v$Bar$v$, 20.5269780, -99.8989836, $v$Carretera Federal 120 (San Juan del Río–Xilitla), local 3, El Pedregal$v$,
  $v$Alitas sobre la carretera a San Juan del Río$v$,
  $v$Bar de alitas sobre la carretera federal 120, en la colonia El Pedregal, a unos 900 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-107-8338$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Alitas$v$]::text[], false);

-- El Carbonero. Fuentes: DENUE id 11787459; https://tequis.travel/el-carbonero/; https://tequis.travel/directorio/restaurantes/el-carbonero/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 11787459: "Restaurante El Carbonero", Calle Ezequiel Montes 140 Centro, tel. 4272781304, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2025-04. Pin: DENUE; el de tt-dir está a 4 m. Teléfono [CONFLICTO, 3 números]: tt-dir y PDF 442 852 1008; tt-ficha 414 107 8866; DENUE 427 278 1304. Se usa el de tt-dir + PDF. La tt-ficha lleva el correo de Vika (vikaresttx@gmail.com): no usar. Pet friendly, música y jardín solo los dice tequis.travel: en la descripción, no como amenidades.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('7e382f7c-268d-540b-8889-74a1ced705aa', $v$El Carbonero$v$, 'gastronomia', $v$Restaurante$v$, 20.5256361, -99.8900931, $v$Ezequiel Montes 140, Centro$v$,
  $v$Cocina de tierra, mar y leña, con jardín y fogata$v$,
  $v$Restaurante de cocina de tierra, mar y leña en la calle Ezequiel Montes, a unos 380 metros de la Plaza Miguel Hidalgo. Según su ficha de Turismo, tiene jardín, salón y fogata, pantallas para deportes y música en vivo en fechas especiales, y se presenta con ambiente familiar y pet friendly. Figura también en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$442-852-1008$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Familiar$v$, $v$Centro$v$]::text[], false);

-- Cuatro Barrios Bistró Kitchen. Fuentes: DENUE id 11419842; https://tequis.travel/cuatro-barrios/; https://tequis.travel/directorio/restaurantes/cuatro-barrios-bistro-kitchen/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 11419842: "Restaurante 4 Barrios Bistro Kichen", Privada Camelinas 142 Centro, tel. 4428761853, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2024-11. Pin: DENUE; el de tt-dir está a 360 m (difiere >150 m). Teléfono [CONFLICTO, 3 números]: tt-dir y PDF 442 818 7225; tt-ficha 414 140 4531; DENUE 442 876 1853. Se usa tt-dir + PDF. Pin [CONFLICTO resuelto]: el de tt-dir caía a ~100 m de la plaza, lejos del Parque La Pila; el DENUE lo pone en la Plaza Los Arcos (Privada Camelinas 142), coherente con "frente al Parque La Pila": diferencia de 360 m. Desayunos y terraza solo de tequis.travel (la amenidad Desayunos no se marca: una sola fuente).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('f0b00918-f14b-54b4-b73b-bfab4434e882', $v$Cuatro Barrios Bistró Kitchen$v$, 'gastronomia', $v$Restaurante$v$, 20.5259874, -99.8901949, $v$Plaza Los Arcos, Ezequiel Montes 142, locales 3 y 4, Centro$v$,
  $v$Bistró de cocina familiar, desayunos y comidas frente al Parque La Pila$v$,
  $v$Bistró de cocina familiar en la Plaza Los Arcos, frente al Parque La Pila, a unos 400 metros de la Plaza Miguel Hidalgo. Sirve desayunos y comidas, con terraza y comedor. Figura también en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$442-818-7225$v$, $v$cuatrobarrios.bk@gmail.com$v$, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Familiar$v$, $v$Centro$v$]::text[], false);

-- Gorditas Las Crucitas. Fuentes: DENUE id 3572515; https://tequis.travel/gorditas-las-crucitas/; https://tequis.travel/directorio/restaurantes/las-crucitas-gorditas/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 3572515: "Gorditas Las Crucitas", Calle Juarez Poniente 96 Centro, tel. 4141053325, giro "Restaurantes con servicio de preparación de antojitos", alta 2014-12. Pin: DENUE; el de tt-dir está a 27 m. Teléfono: tt-dir, tt-ficha, PDF y DENUE coinciden. Dirección [CONFLICTO resuelto]: la tt-ficha dice "Morelos 7" y "Terraza y Comedor" (copiado de El Maravillas); tt-dir "Av. Benito Juárez 100" y DENUE "Juárez Poniente 96", con pins a 27 m: gana Juárez. Se usa el número del DENUE. Horario de la tt-ficha no se usa (ficha con errores de plantilla). Subcategoría: Restaurante (en el código existe "Antojitos", que el DENUE usa como giro).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('f7411445-4450-5f35-acd8-98e2e5cd9e79', $v$Gorditas Las Crucitas$v$, 'gastronomia', $v$Restaurante$v$, 20.5227367, -99.8975623, $v$Av. Benito Juárez Poniente 96, Centro$v$,
  $v$Gorditas y comida típica queretana sobre Juárez Poniente$v$,
  $v$Gorditas y comida típica queretana sobre Juárez Poniente, a unos 600 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-105-3325$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mexicana$v$]::text[], false);

-- La Antigua. Fuentes: DENUE id 11754818; https://tequis.travel/directorio/restaurantes/la-antigua/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 11754818: "Restaurante La Antigua", Calle Federal 120 San Juan Del Río-Xilitla Adolfo López Mateos, tel. 4141181957, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2025-04. Pin: DENUE; el de tt-dir está a 23 m. Teléfono: tt-dir, PDF 2025 y DENUE coinciden. Sin descripción en ninguna fuente.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('9f7c6f4b-7ba2-5e57-8dd5-bd2240660c95', $v$La Antigua$v$, 'gastronomia', $v$Restaurante$v$, 20.5248167, -99.8985877, $v$Carretera Federal 120 km 21.5, Adolfo López Mateos$v$,
  $v$Restaurante sobre la carretera a San Juan del Río$v$,
  $v$Restaurante sobre la carretera federal 120, en la colonia Adolfo López Mateos, a unos 770 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-118-1957$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Las Vegas Welcome Fast Food. Fuentes: DENUE id 11130226; https://tequis.travel/directorio/restaurantes/las-vegas-welcome-fast-food/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 11130226: "Restaurant Comida Rapida Fast Food Las Vegas", Calle Juarez Poniente Centro, tel. —, giro "Restaurantes de autoservicio", alta 2024-11. Pin: DENUE; el de tt-dir está a 51 m. Negocio local, no cadena. DENUE: "Restaurant Comida Rapida Fast Food Las Vegas", sin teléfono. Teléfono: tt-dir y PDF coinciden. Sin descripción.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('64b594be-b6af-5aa3-b2a3-705e35c223fc', $v$Las Vegas Welcome Fast Food$v$, 'gastronomia', $v$Restaurante$v$, 20.5226890, -99.8971109, $v$Av. Benito Juárez Poniente 85, Centro$v$,
  $v$Comida rápida sobre Juárez Poniente$v$,
  $v$Comida rápida sobre Juárez Poniente, a unos 570 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-119-8173$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Estación 31. Fuentes: DENUE id 10110630; https://tequis.travel/directorio/restaurantes/estacion-31/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 10110630: "Restaurante Estacion 31", Calle Ezequiel Montes 31 Centro, tel. —, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2024-11. Pin: DENUE; el de tt-dir está a 22 m. Teléfono [CONFLICTO sin resolver; el DENUE no trae]: tt-dir 414 690 1903 frente a PDF 414 219 2310. Su estacion31.negocio.site da 404 (Google cerró esos sitios). Sin descripción.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('f45cea0b-b303-5a75-9090-975e85c3a0b6', $v$Estación 31$v$, 'gastronomia', $v$Restaurante$v$, 20.5249444, -99.8904685, $v$Ezequiel Montes 31, Centro$v$,
  $v$Restaurante en Ezequiel Montes, rumbo al Parque La Pila$v$,
  $v$Restaurante en la calle Ezequiel Montes, a unos 300 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-690-1903$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Camino a Bremen. Fuentes: DENUE id 8569739; https://tequis.travel/directorio/restaurantes/camino-a-bremen/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 8569739: "Restaurante Camino A Bremen", Calle Guillermo Prieto 19 Centro, tel. —, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2019-11. Pin: DENUE; el de tt-dir está a 7 m. Teléfono [CONFLICTO sin resolver; el DENUE no trae]: tt-dir 414 104 1090 frente a PDF 427 273 4113. "Delicatessen" sale del correo de tt-dir (caminoabremendelicatessen). tt-dir da como web un acortador (bit.ly/BremenReviews), no web propia.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('3383db50-565a-51b9-a480-00c4b4a1279c', $v$Camino a Bremen$v$, 'gastronomia', $v$Restaurante$v$, 20.5238414, -99.8926144, $v$Guillermo Prieto Norte 19, Centro$v$,
  $v$Delicatessen en Guillermo Prieto, a dos cuadras de la plaza$v$,
  $v$Delicatessen en la calle Guillermo Prieto, a unos 180 metros de la Plaza Miguel Hidalgo; el DENUE del INEGI lo registra como restaurante. Figura también en el directorio de Turismo municipal. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-104-1090$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Mi Cabaña. Fuentes: DENUE id 3551894; https://tequis.travel/directorio/restaurantes/mi-cabana/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 3551894: "Restaurante Mi Cabaña", Calle Alfredo V Bonfil Hacienda Grande, tel. 4142733541, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2010-07. Pin: DENUE; el de tt-dir está a 25 m. Teléfono: tt-dir, PDF y DENUE coinciden. DENUE: "Calle Alfredo V. Bonfil, Hacienda Grande", pin a 25 m del de tt-dir. Sin descripción.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('4af01ed2-d8a7-529d-a8c5-fbb7c9038a34', $v$Mi Cabaña$v$, 'gastronomia', $v$Restaurante$v$, 20.5297538, -99.9001982, $v$Carretera a Querétaro, lote 1, Adolfo López Mateos$v$,
  $v$Restaurante a la salida hacia Querétaro$v$,
  $v$Restaurante a la salida del pueblo hacia Querétaro, a poco más de un kilómetro de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-3541$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Suvlaki. Fuentes: DENUE id 10255762; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 10255762: "Restaurante Bar Suvlaki", Calle Federal 120 San Juan Del Rio Xilitla 100 Hacienda Grande, tel. 4141080000, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2024-11. Pin: DENUE (tequis.travel no tiene pin para este lugar). Solo PDF 2025 (nombre y teléfono) + DENUE ("Restaurante Bar Suvlaki"); los teléfonos coinciden (414 108 0000). Sin descripción: el nombre sugiere cocina griega, pero ninguna fuente lo dice, así que no se escribe. La misma dirección (carretera 120 núm. 100) la tienen en el DENUE una sucursal de La Charamusca y Cafetería Italian Coffee: es una plaza comercial.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('dc350bda-4909-5289-86c2-0b0f4147306a', $v$Suvlaki$v$, 'gastronomia', $v$Restaurante$v$, 20.5284143, -99.8992019, $v$Carretera Federal 120 núm. 100, Hacienda Grande$v$,
  $v$Restaurante bar sobre la carretera 120, en Hacienda Grande$v$,
  $v$Restaurante bar sobre la carretera federal 120, en Hacienda Grande, a un kilómetro de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-108-0000$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Quekas TX. Fuentes: DENUE id 3549597; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34) ("Quekas Tequis").
-- DENUE id 3549597: "Quekas Tx", Calle 5 De Mayo 20 Centro, tel. 4142261373, giro "Restaurantes con servicio de preparación de antojitos", alta 2010-07. Pin: DENUE (tequis.travel no tiene pin para este lugar). Solo PDF 2025 ("Quekas Tequis", 414 107 8130) + DENUE ("Quekas Tx", giro antojitos, tel. 414 226 1373, registro de 2010). Teléfono [CONFLICTO]: se usa el del PDF 2025, más reciente. "Antojitos" sale del giro del DENUE. Subcategoría: Restaurante (o "Antojitos", que existe en el código).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('8d3e175a-5c6a-566a-a207-e368fc3fa0de', $v$Quekas TX$v$, 'gastronomia', $v$Restaurante$v$, 20.5214214, -99.8932889, $v$5 de Mayo 20, Centro$v$,
  $v$Antojitos en la calle 5 de Mayo, a dos cuadras de la plaza$v$,
  $v$Antojitos en la calle 5 de Mayo, a unos 210 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-107-8130$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mexicana$v$, $v$Centro$v$]::text[], false);

-- Sr. Sol. Fuentes: DENUE id 10509588; https://tequis.travel/directorio/restaurantes/sr-sol/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 10509588: "Restaurante Sr Sol", Calle Nogal Vista Hermosa, tel. —, giro "Restaurantes con servicio de preparación de tacos y tortas", alta 2024-11. Pin: DENUE; el de tt-dir está a 183 m (difiere >150 m). Teléfono: tt-dir y PDF coinciden; el DENUE no trae. tt-dir solo dice "Vista Hermosa"; la calle sale del DENUE. Pin: DENUE, a 183 m del de tt-dir (>150 m). "Tacos y tortas" sale del giro del DENUE.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('a955962a-80e0-539e-b886-0572b0db9263', $v$Sr. Sol$v$, 'gastronomia', $v$Restaurante$v$, 20.5190604, -99.8995860, $v$Calle Nogal, Vista Hermosa$v$,
  $v$Tacos y tortas en la colonia Vista Hermosa$v$,
  $v$Restaurante de tacos y tortas en la colonia Vista Hermosa, a unos 900 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-231-1250$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mexicana$v$]::text[], false);

-- Bucaneros Mariscos. Fuentes: DENUE id 8147323; https://tequis.travel/directorio/restaurantes/bucaneros-mariscos/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 8147323: "Bucaneros Resturante", Avenida Niños Heroes 16 Vista Hermosa, tel. 4141218701, giro "Restaurantes con servicio de preparación de pescados y mariscos", alta 2019-11. Pin: DENUE; el de tt-dir está a 37 m. Teléfono [CONFLICTO, 3 números]: tt-dir 442 391 0412; PDF 2025 414 109 5136; DENUE 414 121 8701. Se usa el del PDF 2025 (más reciente). Dirección: tt-dir "Federal 120 San Juan del Río–Xilitla 20, Vista Hermosa"; DENUE "Av. Niños Héroes 16, Vista Hermosa"; pins a 37 m. Se usa la del DENUE. Redes: instagram.com/bucaneros.mx (no es web).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('f94d63d0-10d8-5b6c-9c56-c12134f4fa56', $v$Bucaneros Mariscos$v$, 'gastronomia', $v$Mariscos$v$, 20.5173243, -99.9001218, $v$Av. Niños Héroes 16, Vista Hermosa$v$,
  $v$Mariscos en la colonia Vista Hermosa$v$,
  $v$Marisquería en la colonia Vista Hermosa, junto a la carretera a San Juan del Río, a un kilómetro de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-109-5136$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mariscos$v$]::text[], false);

-- Chiltepín. Fuentes: DENUE id 10960884; https://tequis.travel/directorio/restaurantes/chiltepin/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 10960884: "Restaurante Chiltepin", Calle Plan De Guadalupe Adolfo López Mateos, tel. —, giro "Restaurantes con servicio de preparación de pescados y mariscos", alta 2024-11. Pin: DENUE; el de tt-dir está a 20 m. El DENUE la registra con giro de pescados y mariscos, lo que confirma el tipo (antes solo por correo y Facebook "mariscoselchiltepin"). Teléfono [CONFLICTO sin resolver; el DENUE no trae]: tt-dir 414 231 0019 frente a PDF 414 279 2062; se usa tt-dir. "Micheladas" sale de su correo en tt-dir: solo en el corto.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('efa3b053-6449-54c6-831a-1dc786b70baa', $v$Chiltepín$v$, 'gastronomia', $v$Mariscos$v$, 20.5244099, -99.9028779, $v$Plan de Guadalupe 58, Adolfo López Mateos$v$,
  $v$Mariscos y micheladas en la colonia Adolfo López Mateos$v$,
  $v$Marisquería en la colonia Adolfo López Mateos, a poco más de un kilómetro de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-231-0019$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mariscos$v$]::text[], false);

-- Delicias del Mar. Fuentes: DENUE id 3572296; https://tequis.travel/directorio/restaurantes/delicias-del-mar/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 3572296: "Marisqueria Las Delicias Del Mar", Calle Federal 120 San Juan Del Rio Xilitla Hacienda Grande, tel. —, giro "Restaurantes con servicio de preparación de pescados y mariscos", alta 2014-12. Pin: DENUE; el de tt-dir está a 797 m (difiere >150 m). DENUE: "Marisqueria Las Delicias Del Mar" (registro de 2014, sin teléfono). Pin [CONFLICTO]: DENUE y tt-dir están a 797 m sobre la misma carretera (tt-dir: "San Juan del Río–Jalpan de Serra 16, Pedregal de Hacienda Grande"). Se usa el del DENUE; confirmar. Teléfono [CONFLICTO sin resolver]: tt-dir 441 100 5676 frente a PDF 414 273 5511; se usa el de tt-dir (criterio: con dos versiones, tt-dir; con tres, el PDF 2025).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('f7f8da15-410d-580e-a479-b5f096b49f49', $v$Delicias del Mar$v$, 'gastronomia', $v$Mariscos$v$, 20.5305056, -99.8996054, $v$Carretera Federal 120 (San Juan del Río–Xilitla), Hacienda Grande$v$,
  $v$Marisquería sobre la carretera 120, en Hacienda Grande$v$,
  $v$Marisquería sobre la carretera federal 120, en la zona de Hacienda Grande, a poco más de un kilómetro de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$441-100-5676$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mariscos$v$]::text[], false);

-- Manaly. Fuentes: DENUE id 8793009; https://tequis.travel/directorio/restaurantes/manaly/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 8793009: "Restaurante El Manaly", Calle Alfredo V Bonfil Adolfo López Mateos, tel. —, giro "Restaurantes con servicio de preparación de pescados y mariscos", alta 2019-11. Pin: DENUE; el de tt-dir está a 337 m (difiere >150 m). DENUE: "Restaurante El Manaly", giro pescados y mariscos (el tipo sale de ahí), sin teléfono. Teléfono: tt-dir y PDF coinciden. Dirección [CONFLICTO]: tt-dir "Narciso Arroyo 5, Adolfo López Mateos" frente a DENUE "Alfredo V. Bonfil"; pins a 337 m. Se usa el DENUE (dirección y pin) por consistencia; DUDA para decidir.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('2c08206b-ba9b-5f84-930e-01b3455c74e2', $v$Manaly$v$, 'gastronomia', $v$Mariscos$v$, 20.5283083, -99.9097051, $v$Av. Alfredo V. Bonfil, Adolfo López Mateos$v$,
  $v$Mariscos en la colonia Adolfo López Mateos$v$,
  $v$Marisquería en la colonia Adolfo López Mateos, a unos dos kilómetros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-107-5382$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mariscos$v$]::text[], false);

-- Birria Los Compadres. Fuentes: DENUE id 9732232; https://tequis.travel/directorio/restaurantes/los-compadres/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34) ("Los compadres").
-- DENUE id 9732232: "Birria Los Compadres", Avenida Nogales Comunidad Bordo Blanco, tel. 4141043252, giro "Restaurantes con servicio de preparación de antojitos", alta 2024-11. Pin: DENUE; el de tt-dir está a 59 m. Teléfono [CONFLICTO resuelto]: tt-dir 414 104 3252 = DENUE; el PDF da 427 488 8392. "Birria" sale del nombre en el DENUE y de su viejo birria-los-compadres.negocio.site (404).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('40baa5fe-ff76-5701-8ba2-c1cc5bc6f825', $v$Birria Los Compadres$v$, 'gastronomia', $v$Restaurante$v$, 20.5000156, -99.9256521, $v$Carretera San Juan del Río–Xilitla km 16.3, Bordo Blanco$v$,
  $v$Birria sobre la carretera a San Juan del Río, en Bordo Blanco$v$,
  $v$Birriería sobre la carretera a San Juan del Río, en Bordo Blanco, a unos cuatro kilómetros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-104-3252$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Mexicana$v$]::text[], false);

-- La Ranchería. Fuentes: DENUE id 9556451; https://tequis.travel/directorio/restaurantes/la-rancheria/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 9556451: "Restaurante La Rancheria", Carretera San Juan Del Rio Xilitla Santa María Del Camino, tel. 4140902303, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2024-11. Pin: DENUE; el de tt-dir está a 16 m. Teléfono: tt-dir y PDF 414 690 2303; el DENUE da 414 090 2303 (errata evidente de un dígito). DENUE: Santa María del Camino, localidad Bordo Blanco. Sin descripción.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('e3d8fa86-2533-50d9-951c-1774a75d05d2', $v$La Ranchería$v$, 'gastronomia', $v$Restaurante$v$, 20.4920865, -99.9344000, $v$Carretera San Juan del Río–Tequisquiapan km 16, La Ermita$v$,
  $v$Restaurante sobre la carretera a San Juan del Río, en La Ermita$v$,
  $v$Restaurante sobre la carretera a San Juan del Río, en La Ermita, a unos cinco kilómetros y medio de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-690-2303$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Portal del Cabrito. Fuentes: DENUE id 9741098; https://tequis.travel/directorio/restaurantes/portal-del-cabrito/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 9741098: "Restaurante El Cabrito", Carretera San Juan Del Rio Xilitla Santa María Del Camino, tel. 4142690649, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2024-11. Pin: DENUE; el de tt-dir está a 43 m. Empate por nombre parcial y ubicación: DENUE "Restaurante El Cabrito" (tel. 414 269 0649) a 43 m del pin de tt-dir "Portal del Cabrito" (414 273 8137, = PDF). Probablemente el mismo; teléfonos distintos. Se usa el de Turismo. El nombre sugiere cabrito, pero ninguna fuente dice qué sirve: no se escribe.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('addc0100-c44c-522b-9473-9ae0b7050418', $v$Portal del Cabrito$v$, 'gastronomia', $v$Restaurante$v$, 20.4910639, -99.9345273, $v$Carretera San Juan del Río–Tequisquiapan km 15, La Ermita$v$,
  $v$Restaurante sobre la carretera a San Juan del Río, en La Ermita$v$,
  $v$Restaurante sobre la carretera a San Juan del Río, en La Ermita, a unos cinco kilómetros y medio de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$414-273-8137$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- La Gallera. Fuentes: DENUE id 8685959; https://tequis.travel/directorio/restaurantes/la-gallera/; PDF 2025 (Directorio Tequisquiapan 2025, Restaurantes, págs. 30–34).
-- DENUE id 8685959: "Restaurant Bar La Gallera", Calle Alfredo V Bonfil Adolfo López Mateos, tel. 4142266442, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2019-11. Pin: DENUE; el de tt-dir está a 21 m. DENUE: "Restaurant Bar La Gallera", Alfredo V. Bonfil, pin a 21 m del de tt-dir. Teléfono [CONFLICTO, 3 números]: tt-dir 414 690 0781; PDF 442 752 4892; DENUE 414 226 6442. Se usa el PDF 2025. lagallera.com.mx resuelve pero la redirección a https no carga: website null.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('c07274f5-3e9a-5156-bd5d-edc58c71f618', $v$La Gallera$v$, 'gastronomia', $v$Restaurante$v$, 20.5282224, -99.9104868, $v$Carretera Querétaro–Tequisquiapan esquina Gregorio Moreno, Adolfo López Mateos$v$,
  $v$Restaurante bar a la salida hacia Querétaro$v$,
  $v$Restaurante bar a la salida del pueblo hacia Querétaro, en la colonia Adolfo López Mateos, a unos dos kilómetros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg$v$, $v$442-752-4892$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- La Fromelier. Fuentes: DENUE id 11320927; https://tequis.travel/quesos_tequisquiapan/.
-- DENUE id 11320927: "Restaurante Y Queseria La Flomelier Casa Del Buen Queso", Calle Matamoros Vergel Del Acueducto, tel. —, giro "Restaurantes con servicio de preparación de alimentos a la carta o de comida corrida", alta 2024-11. Pin: DENUE (tequis.travel no tiene pin para este lugar). DENUE: "Restaurante Y Queseria La Flomelier Casa Del Buen Queso" (errata Flomelier), Calle Matamoros, Vergel del Acueducto, sin teléfono. Teléfono solo de tequis.travel (414 688 1466). Categoría: experiencias/Quesería (como Finca VAI y Bocanegra) aunque esté en el grupo Gastronomía del DENUE; DUDA para decidir. "Catas para grupos" sale de su ficha (texto del negocio); no se dice precio ni horario.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('1dd7eb21-a7d6-51a2-a1aa-7cd88b3b2c6b', $v$La Fromelier$v$, 'experiencias', $v$Quesería$v$, 20.5181885, -99.8952706, $v$Matamoros 17, Vergel del Acueducto, Centro$v$,
  $v$Quesos artesanales queretanos y vinos locales, con catas para grupos$v$,
  $v$Quesería de quesos artesanales queretanos con selección de vinos locales para maridar, en la calle Matamoros, a unos 600 metros de la Plaza Miguel Hidalgo. Ofrece catas maridaje guiadas para grupos de turistas. El DENUE del INEGI la registra como restaurante y quesería. Confirma horario antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$414-688-1466$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

COMMIT;

-- =====================================================================================
-- hospedaje.json: 11 altas
-- =====================================================================================
BEGIN;

-- Hotel Casa de Vino. Fuentes: DENUE id 6381114; https://tequis.travel/directorio/hoteles/casa-de-vino/; Directorio Tequisquiapan 2025 (PDF de Turismo), tabla HOTELES (Casa de Vino, 3 estrellas); web propia https://www.hotelcasadevino.com (portada, /habitaciones, /spa, /restaurant = paquetes, /nosotros = su Instagram embebido, /contacto, /terminos-y-condiciones de mar-2026).
-- Antes FUERA por 'web de plantilla y pin de tt a 7 km'. Las dos cosas se resuelven: (1) el DENUE da www.hotelcasadevino.com (.com, no el .com.mx que revisó la investigación), una web nueva y real del hotel (términos vigentes desde marzo de 2026; le quedan textos de relleno solo en los carruseles, 'Título de diapositiva'); el .com.mx sigue siendo la plantilla vieja. La web confirma la dirección Moctezuma 4 (= tt, PDF y DENUE) y el teléfono 414 273 1276 (= tt); su WhatsApp 414 280 8268 = tt y PDF; correo reservaciones@hotelcasadevino.com = tt y DENUE. (2) El pin del DENUE cae en Moctezuma, y la ficha actual de tt ya da uno a 29 m. El DENUE da el teléfono 414 273 1504, que es el de Hotel Sol y Fiesta: no se usa. Amenidades solo de la web: spa de vinoterapia, sauna (dentro del tratamiento 'Relajación para tus 5 sentidos' y en sus publicaciones), jacuzzi en un área que se reserva en privado (no en la habitación: por eso 'Jacuzzi' y no 'Jacuzzi privado'), masajes, WiFi en todas las habitaciones; el billar va solo en el texto. El desayuno es opcional en la tarifa: no lleva 'Desayuno incluido'. No menciona alberca, estacionamiento ni mascotas. Romántico: la web se anuncia 'diseñado especialmente para escapadas románticas'. Precio: publicación de su Instagram embebida en /nosotros, promo para la Copa Tumble del 27 al 30 de ago-2026 con 10 % de descuento: estándar o sencilla $1,485 sin desayuno / $1,755 con desayuno; superior o superior king $1,665 / $1,935 → moderate [FRÁGIL]. Fotos: host irp.cdn-website.com (Duda/Website Builder); se descartaron las del spa (cartel con una cara), las de personas, las de viñedos y comida de banco.
-- Fotos: web propia (5).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('3711e4c6-4ec7-515e-8620-d2c9de83e7dd', $v$Hotel Casa de Vino$v$, 'hospedaje', $v$Hotel$v$, 20.5242556, -99.8930882, $v$Moctezuma 4, Centro$v$,
  $v$Hotel temático del vino, con spa de vinoterapia y sauna$v$,
  $v$Hotel temático del vino en la calle Moctezuma, a unos 250 metros de la Plaza Miguel Hidalgo, con 11 habitaciones que llevan el nombre de una variedad de uva: sencillas, dobles, superiores y superiores king, para 2 a 4 personas, con WiFi y televisión por cable. Tiene un spa de vinoterapia con sauna, un área de jacuzzi que se reserva en privado para veladas con tabla de quesos y vino, y mesa de billar. Arma paquetes para parejas y grupos con vinoterapia, recorridos a viñedos, catas y vuelos en globo. En una promoción de agosto de 2026, con un 10 % de descuento, la noche costaba de 1,485 a 1,935 pesos según la habitación y si incluía desayuno.$v$,
  'moderate', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/hotel-casa-de-vino-patio.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-casa-de-vino-habitacion-superior-king.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-casa-de-vino-jacuzzi.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-casa-de-vino-habitacion-superior.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/hotel-casa-de-vino-entrada.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/hotel-casa-de-vino-patio.jpg$v$, $v$414-273-1276$v$, $v$reservaciones@hotelcasadevino.com$v$, $v$https://www.hotelcasadevino.com$v$, $v$414-280-8268$v$, NULL,
  ARRAY[$v$Spa$v$, $v$Sauna$v$, $v$Jacuzzi$v$, $v$Masajes$v$, $v$WiFi$v$]::text[], ARRAY[$v$Centro$v$, $v$Romántico$v$]::text[], true);

-- Hotel Villa Florencia. Fuentes: DENUE id 6273175; https://tequis.travel/directorio/hoteles/hotel-villa-florencia/; tequis.travel/directorio/centro-de-convenciones/villa-firenze/ (Nautha 6, según la investigación); Directorio Tequisquiapan 2025 (PDF de Turismo), tabla HOTELES (5 estrellas); también SALONES y WEDDING DESTINATIONS como 'Hotel Firence'.
-- Antes FUERA por calle en [CONFLICTO] ('Calle Ezequiel Montes' en la ficha de hoteles de tt / Nautha 6 en la de convenciones y el PDF). El DENUE (Privada Nautha 6, Los Claustros) desempata: Nautha 6. Teléfono 414 273 3029 (tt y las tres menciones del PDF); el DENUE da 414 118 9274 y su fila 'Lavandería y Estacionamiento Villa Florencia', 414 226 5895: no se usan. Correo villaflorencia_tx@hotmail.com = tt y DENUE. Pin del DENUE, a 28 m del de tt y sobre la Privada Nautha de OSM. Web villaflorencia.com.mx (la da el DENUE): el dominio no resuelve. Pet friendly solo en el PDF (los agregadores dicen que no) y alberca techada solo en agregadores: no van. Nombres alternos: Gran Hotel Firenze, Villa Firenze, Hotel Firence.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('70c6ecf0-77ee-52ee-af28-8be3d00b2fea', $v$Hotel Villa Florencia$v$, 'hospedaje', $v$Hotel$v$, 20.5263327, -99.8889182, $v$Nautha 6, Centro$v$,
  $v$Hotel en la calle Nautha, a 500 m de la plaza$v$,
  $v$Hotel en Nautha 6, Centro, a unos 500 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 5 estrellas en 2025, y en el DENUE del INEGI. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-3029$v$, $v$villaflorencia_tx@hotmail.com$v$, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Hotel Boutique Regalo del Alma. Fuentes: DENUE id 6759976; https://tequis.travel/directorio/hoteles/hotel-boutique-regalo-del-alma/; tequis.travel/hotel_regalo_del_alma_tequisquiapan/; Directorio Tequisquiapan 2025 (PDF de Turismo), tabla HOTELES (5 estrellas, Molino de la Paloma 11).
-- Antes FUERA por calle en [CONFLICTO] (Molino de la Paloma 11 en tt hoteles y en la tabla HOTELES del PDF / 'De la Virgen 11' en SALONES del PDF y la ficha de convenciones). El DENUE (Privada Molino de la Paloma 11) desempata. Teléfono 414 273 3200 (tt, PDF; el DENUE no trae). Pin del DENUE, a 28 m del de tt y sobre la Privada Molino de la Paloma de OSM. Webs: hotelregalodelalma.com.mx (DENUE) no resuelve y regalodelalma.com.mx (tt) redirige a lgrefacciones.com.mx, otro negocio: dominio perdido. Por eso tampoco se usa el correo recepcion@regalodelalma.com.mx (tt y DENUE). Pet friendly solo PDF; restaurante en [CONFLICTO] (tt dice que no hay, WEDDING DESTINATIONS que sí): no se mencionan. 'Boutique' sale del nombre en tt y PDF.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('e88b6910-db50-5185-ac80-f685d7874eca', $v$Hotel Boutique Regalo del Alma$v$, 'hospedaje', $v$Hotel Boutique$v$, 20.5349055, -99.8934275, $v$Privada Molino de la Paloma 11, Hacienda Grande$v$,
  $v$Hotel boutique en Hacienda Grande, a 1.4 km de la plaza$v$,
  $v$Hotel boutique en Privada Molino de la Paloma 11, Hacienda Grande, a 1.4 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 5 estrellas en 2025, y en el DENUE del INEGI. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-3200$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- La Casa Roja. Fuentes: DENUE id 10716527; tequis.travel/la_casa_roja_tequisquiapan/; Directorio Tequisquiapan 2025 (PDF de Turismo), tabla HOTELES (4.3 estrellas).
-- Antes FUERA por no tener pin. El DENUE ('Hotel Boutique La Casa Roja', Camino al Sauz 65, Hacienda Grande, alta nov-2024) da el pin y el mismo teléfono que tt y el PDF, 442 186 5514. El pin cae a unos 25 m del de La Casona (Antiguo Camino al Sauz 55), coherente con la numeración. 442 168 8893 solo en tt. Reserva por un motor de terceros y Airbnb: sin web. Alberca climatizada, palapa con asador y billar solo en el texto de tt: no van. El DENUE la llama 'Hotel Boutique', tt y PDF no: subcategoría Hotel. La clasificación '4.3 estrellas' es tal cual la del PDF.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('94d1081f-d203-5acc-95b2-828d057a7dcf', $v$La Casa Roja$v$, 'hospedaje', $v$Hotel$v$, 20.5364844, -99.8931882, $v$Camino al Sauz 65, Hacienda Grande$v$,
  $v$Hotel en el Camino al Sauz, a 1.6 km de la plaza$v$,
  $v$Hotel en Camino al Sauz 65, Hacienda Grande, a 1.6 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 4.3 estrellas en 2025, y en el DENUE del INEGI. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$442-186-5514$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Hotel La Querencia. Fuentes: DENUE id 3551089 ('Estacionamiento La Querencia', razón social 'Estacionamiento Hotel La Querencia'); tequis.travel/hotel-bello-atardecer-2/ (página de La Querencia con URL equivocada); Directorio Tequisquiapan 2025 (PDF de Turismo), tabla HOTELES (4 estrellas) y WEDDING DESTINATIONS; queretaro.travel/fichas/la-querencia-tequisquiapan/ (Turismo estatal).
-- Antes FUERA por no tener pin y por el teléfono: la tabla HOTELES del PDF le pone 442 186 5514, que el DENUE confirma como de La Casa Roja. El 414 106 2170 coincide en tt, en WEDDING DESTINATIONS del PDF y en queretaro.travel (Turismo estatal): va ese. Pin APROXIMADO: el de la fila del DENUE de su estacionamiento (Juárez Oriente, De los Tepetates); el hotel no tiene fila propia de hospedaje en el DENUE. Revisar a mano en el panel. La web que da ese DENUE, hotellaquerencia.com, es un dominio estacionado en DreamHost. Pet friendly: lo dicen tt, el PDF y queretaro.travel, pero el texto de queretaro.travel parece copiado de un agregador y las otras dos son de Turismo municipal: no va como amenidad (candidato a confirmar por teléfono). 57 habitaciones, albercas y desayunos solo en tt: no van.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('ecf921b6-b379-5d72-8364-9837f4d95648', $v$Hotel La Querencia$v$, 'hospedaje', $v$Hotel$v$, 20.5169289, -99.8808616, $v$Av. Juárez Oriente s/n, Barrio de los Tepetates$v$,
  $v$Hotel en la avenida Juárez Oriente, a 1.3 km de la plaza$v$,
  $v$Hotel en la avenida Juárez Oriente, Barrio de los Tepetates, a unos 1.3 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 4 estrellas en 2025, en el de Turismo del estado y en el DENUE del INEGI. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-106-2170$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Hotel Casa Jasave. Fuentes: DENUE id 8147149; https://tequis.travel/directorio/hoteles/hotel-casa-jasave/; Directorio Tequisquiapan 2025 (PDF de Turismo), tabla HOTELES (4 estrellas).
-- Antes FUERA por dirección en [CONFLICTO] con el Hotel Neptuno (los dos dan Juárez 5). El DENUE registra los dos por separado en Juárez Oriente 5, con pines distintos (Jasave 20.52256, -99.89040; Neptuno 20.52245, -99.89014, a ~30 m): comparten número. Teléfono 414 108 4034 (tt y PDF); tt da además 414 273 4032 y el DENUE 414 275 6230: no se usan. Pin del DENUE, a 28 m del de tt. Correo hotelcasajasave@hotmail.com solo en tt. 11 habitaciones y balcones solo en tt: no van.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('6e68052e-c976-56d0-83aa-268c86ffd514', $v$Hotel Casa Jasave$v$, 'hospedaje', $v$Hotel$v$, 20.5225619, -99.8904008, $v$Av. Juárez Oriente 5, Centro$v$,
  $v$Hotel en la avenida Juárez Oriente, a 130 m de la plaza$v$,
  $v$Hotel en Av. Juárez Oriente 5, Centro, a unos 130 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 4 estrellas en 2025, y en el DENUE del INEGI. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-108-4034$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Hotel Boutique M&F. Fuentes: DENUE id 11790704; https://tequis.travel/directorio/hoteles/hotel-boutique-mf/; Directorio Tequisquiapan 2025 (PDF de Turismo), tabla HOTELES (como 'Hotel Boutique Crown', 5 estrellas, Heroico Colegio Militar 17).
-- Antes FUERA por nombre en [CONFLICTO] (M&F en tt / Hotel Boutique Crown en el PDF, mismo teléfono 414 273 5801). El DENUE (alta abr-2025) lo registra como 'Hotel Boutique M & F': va M&F; los agregadores usan los dos nombres para el mismo hotel (posible cambio de nombre, ver dudas). Número en [CONFLICTO]: 17 en el PDF, 24 en el DENUE, tt sin número: la dirección va sin número. Pin del DENUE, a 26 m del de tt; queda a ~10 m del pin del DENUE de Hotel Sol y Fiesta (Heroico Colegio Militar 4): revisar a mano. Desayuno, alberca y mascotas solo en agregadores: no van.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('df76488d-a5f9-5b52-b25c-eb15d1d279db', $v$Hotel Boutique M&F$v$, 'hospedaje', $v$Hotel Boutique$v$, 20.5267605, -99.8925776, $v$Heroico Colegio Militar, Centro$v$,
  $v$Hotel boutique en Heroico Colegio Militar, a 500 m de la plaza$v$,
  $v$Hotel boutique en la avenida Heroico Colegio Militar, Centro, a unos 500 metros de la Plaza Miguel Hidalgo. Figura en el DENUE del INEGI y en el directorio de hospedaje de Turismo municipal, que en 2025 lo listaba como Hotel Boutique Crown, con una clasificación de 5 estrellas. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-5801$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Hotel Asunción Hacienda del Carmen. Fuentes: DENUE id 6451265 ('Hotel La Asunción Tx'); https://tequis.travel/directorio/hoteles/hotel-asuncion-hacienda-del-carmen-2/; Directorio Tequisquiapan 2025 (PDF de Turismo), tabla HOTELES ('Hotel (Asunción) Hacienda del Carmen', 3 estrellas).
-- Antes FUERA por número en [CONFLICTO] (Olivo 10 / 12). Hoy tt y el PDF dan los dos Olivo 12, y el DENUE (Olivo 12, Hacienda Grande, tel. 414 273 0778 = tt y PDF) lo confirma. Nombre: tt y PDF 'Hotel (Asunción) Hacienda del Carmen', DENUE 'Hotel La Asunción Tx', correo de tt Hotel.Asuncion.Tx1@gmail.com: se usa 'Hotel Asunción Hacienda del Carmen' (cámbialo si prefieres el del DENUE). Pin del DENUE, a 19 m del de tt. 'Centro' porque queda justo a 1 km.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('291f1294-fc5c-5e25-a182-0025db876cfa', $v$Hotel Asunción Hacienda del Carmen$v$, 'hospedaje', $v$Hotel$v$, 20.5299113, -99.8969927, $v$Olivo 12, Fundadores de Hacienda Grande$v$,
  $v$Hotel en la calle Olivo, a 1 km de la plaza$v$,
  $v$Hotel en Olivo 12, Fundadores de Hacienda Grande, a 1 km de la Plaza Miguel Hidalgo en línea recta. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025, y en el DENUE del INEGI, que lo registra como Hotel La Asunción. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-0778$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Cabañas Quinta Rancho Viejo. Fuentes: DENUE id 8287222 ('Quinta Rancho Viejo Salón de Eventos'); https://tequis.travel/directorio/hoteles/cabanas-quinta-rancho-viejo/; Directorio Tequisquiapan 2025 (PDF de Turismo), tabla HOTELES (3 estrellas) y WEDDING DESTINATIONS.
-- Antes FUERA por teléfonos distintos (414 219 6467 / 414 219 6469 en tt; 414 122 8246 en el PDF). El DENUE da 414 219 6469, igual que tt: va ese. Ojo: el DENUE la registra solo como salón de eventos, en la misma calle (Francisco Martínez Elías, Magdalena), no como hospedaje; que sea hospedaje lo dicen tt y la tabla HOTELES del PDF. Pin del DENUE, a 52 m del de tt. 'Viñedo con jardín' (WEDDING DESTINATIONS) sigue [SIN CONFIRMAR]: no se menciona. Correo hotelquintaranchoviejo@gmail.com solo en tt.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('b94dcf1a-a598-5805-bc8c-2127c5a0ae85', $v$Cabañas Quinta Rancho Viejo$v$, 'hospedaje', $v$Cabañas$v$, 20.5208953, -99.8738363, $v$Prof. Francisco Martínez Elías s/n, Barrio de la Magdalena$v$,
  $v$Cabañas en el barrio de La Magdalena, a 1.9 km de la plaza$v$,
  $v$Cabañas en la calle Prof. Francisco Martínez Elías, Barrio de la Magdalena, a 1.9 km de la Plaza Miguel Hidalgo en línea recta. Figuran en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025, y el DENUE del INEGI registra su salón de eventos en la misma calle. No tienen web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-219-6469$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], '{}'::text[], false);

-- Hotel Casa Frida. Fuentes: DENUE id 6273174; Directorio Tequisquiapan 2025 (PDF de Turismo), tabla HOTELES ('Casa Frida', 3 estrellas).
-- Antes FUERA por no tener pin (solo estaba en el PDF). El DENUE ('Hotel Casa Frida', Morelos Norte 4, tel. 442 300 2501 = PDF) da el pin. No tiene ficha en el directorio web de tt. El DENUE la clasifica como 'Cabañas, villas y similares' y su correo es casafridahotelboutique@gmail.com, pero ninguna fuente dice qué tipo de hospedaje es: subcategoría Hotel. El correo solo sale en el DENUE: no se usa.
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('18962096-51ee-5d88-8f20-e663684b2440', $v$Hotel Casa Frida$v$, 'hospedaje', $v$Hotel$v$, 20.5236844, -99.8917247, $v$Morelos Norte 4, Centro$v$,
  $v$Hotel en la calle Morelos Norte, a 130 m de la plaza$v$,
  $v$Hotel en Morelos Norte 4, Centro, a unos 130 metros de la Plaza Miguel Hidalgo. Figura en el directorio de hospedaje de Turismo municipal, con una clasificación de 3 estrellas en 2025, y en el DENUE del INEGI. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$442-300-2501$v$, NULL, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

-- Hotel Villa 12. Fuentes: DENUE id 8569813 ('Hotel Villa 12 Tx'); https://tequis.travel/directorio/hoteles/hotel-villa-12-tequisquiapan/; OSM nodo 14353222836.
-- Antes FUERA por no estar en la tabla HOTELES del PDF 2025. Ahora tiene tt + DENUE (Av. Niños Héroes 63, Vergel del Acueducto; correo hotelvilla12tx@gmail.com igual al de tt). Pin: OSM nodo 14353222836 (a ~15 m del DENUE y 41 m del de tt). Teléfono 414 273 4608 solo en tt (el DENUE no trae).
-- Fotos: genérica de Commons.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('5b02edf5-2c4c-5220-80ae-9da4ad103d45', $v$Hotel Villa 12$v$, 'hospedaje', $v$Hotel$v$, 20.5185838, -99.8973366, $v$Niños Héroes 63, Vergel del Acueducto$v$,
  $v$Hotel en la avenida Niños Héroes, a 750 m de la plaza$v$,
  $v$Hotel en Niños Héroes 63, Vergel del Acueducto, a unos 750 metros de la Plaza Miguel Hidalgo. Figura en el directorio de Turismo municipal y en el DENUE del INEGI. No tiene web propia: confirma servicios y tarifas por teléfono antes de reservar.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg$v$, $v$414-273-4608$v$, $v$hotelvilla12tx@gmail.com$v$, NULL, NULL, NULL,
  '{}'::text[], ARRAY[$v$Centro$v$]::text[], false);

COMMIT;

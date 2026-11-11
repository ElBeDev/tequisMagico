-- APLICADA el 2026-11-10 en la base del VPS, con respaldo previo en /root/respaldos/places-events-20261110.sql (y la base completa en tequis-completa-20261110.dump). Preparado el 2026-11-10 con docs/datos/investigacion-balnearios-globo-vinedos-2026-11.md.
-- Balnearios, vuelo en globo, viñedos y queserías. Precios de viñedos y queserías que ya estaban: de
-- docs/datos/investigacion-guias-2026-11.md; fichas anteriores: docs/datos/investigacion-negocios-2026-11.md.
-- Cuatro bloques independientes (cada uno con su BEGIN/COMMIT):
--   1. correcciones a lugares que ya están (UPDATE);
--   2. altas con web propia (Norte B, CR Vinos MX, Viñedo La Revuelta);
--   3. alta de Viajes y Enoturismo (tour operadora; ojo: también sale en la investigación de actividades);
--   4. altas OPCIONALES sin web propia (Viña Magal, Vinícola San Patricio): dos fuentes de Turismo
--      (tequis.travel/directorio y queretaro.travel), content_verified = false y foto genérica.
-- Fotos nuevas: solo de la web propia de cada negocio, revisadas a mano. Antes de aplicar, copiarlas de
-- fotos/balnearios-vinedos/listas/ a /srv/tequis/uploads/lugares/ (créditos en docs/datos/creditos-imagenes.md).
-- Horarios marcados [FRÁGIL] o [CONFLICTO] en la investigación no se guardan en schedule_json (NULL): van en
-- la descripción con el mes ("En noviembre de 2026 abría…"). Los horarios que ya estaban y siguen iguales a la
-- web propia (Termas del Rey, La Vega, San Juanito, Bocanegra, Finca VAI, De Cote) no se tocan.
-- is_verified e is_featured no se tocan. price_range = '' cuando no hay fuente de precio.
-- Inglés: web/lib/i18n/data-en.ts (PLACES_EN), por id.

-- =====================================================================================
-- Bloque 1: lugares que ya teníamos
-- =====================================================================================
BEGIN;

-- Termas del Rey: termasdelrey.com (portada, Nosotros, Promociones y Contacto; 10-nov-2026). El teléfono sigue en
-- conflicto (442 277 1525 en su web; 441 277 1525 en adn40 y Turismo; 441 277 1542 en el directorio): se queda el
-- que había y content_verified sigue en false. Su web no habla de agua termal: no se anuncia como termal.
-- Fotos: las de su web que ya tenía.
UPDATE places SET
  full_description = $v$Parque acuático a 10 minutos de Tequis, en el km 10 de la carretera a Ezequiel Montes, con toboganes, alberca de olas, chapoteaderos, fosa de clavados, lagos y palapas. Tiene zona de campamento con renta de casas de campaña y de asadores, y una zona VIP con costo aparte que se reserva. En noviembre de 2026 abría de viernes a domingo de 9 a 18 h, y la entrada costaba $199 adultos y $125 niños ($340 y $290 con campamento). Anuncia descuentos para adultos mayores, estudiantes, maestros, grupos, cumpleañeros y personas con discapacidad.$v$,
  amenities = ARRAY[$v$Albercas$v$, $v$Toboganes$v$, $v$Camping$v$, $v$Asadores$v$, $v$Palapas$v$, $v$Zona VIP$v$]::text[],
  updated_at = NOW()
WHERE id = 'edf8fd31-93ef-5673-8ad5-7341d6fae02d';

-- Parque Acuático El Oasis: eloasistequisquiapan.com (10-nov-2026): precios, agua termal a 36 °C, campamento.
-- Horario [CONFLICTO]: su web dice ahora "Sábado y Domingo" (más vacaciones y festivos) y la BD tenía viernes a
-- domingo: schedule_json a NULL y el horario en la descripción, con fecha. "Área canina" solo en adn40: sin Pet Friendly.
-- Fotos: de la sección Galería de su web (antes usaba la genérica de Commons).
UPDATE places SET
  full_description = $v$Parque acuático en el km 10 de la carretera a Ezequiel Montes, con agua termal a 36 °C, alberca de olas, alberca olímpica, toboganes, tirolesa, zona infantil y palapas. Tiene restaurante, estacionamiento gratis y 262 lugares para acampar con área de asador. En noviembre de 2026 abría sábados y domingos de 9 a 18 h, además de vacaciones y festivos, y la entrada costaba $190 adultos y $150 niños de 1.00 a 1.40 m y adultos mayores ($250 y $220 con campamento). En temporada baja suele tener promociones.$v$,
  schedule_json = NULL,
  image_urls = ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/parque-acuatico-el-oasis-olas.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/parque-acuatico-el-oasis-vista.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/parque-acuatico-el-oasis-toboganes.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/parque-acuatico-el-oasis-olas.jpg$v$,
  amenities = ARRAY[$v$Albercas termales$v$, $v$Toboganes$v$, $v$Tirolesa$v$, $v$Camping$v$, $v$Asadores$v$, $v$Palapas$v$, $v$Restaurante$v$, $v$Estacionamiento$v$]::text[],
  tags = ARRAY[$v$Aguas termales$v$, $v$Albercas$v$, $v$Familiar$v$]::text[],
  updated_at = NOW()
WHERE id = '04332bc5-6b65-5067-80bb-bd6d1562e941';

-- Balneario La Vega: balneariolavega.mx (Contacto, 10-nov-2026: diario de 8 a 18 h; títulos "Habitaciones",
-- "Campamento" y "Reservación de Palapas / Cabañas", sin precios). Precio: adn40, 25-ago-2026 (su web no lo publica).
-- Toboganes: adn40 y tequis.travel. Ninguna fuente dice que sea termal.
UPDATE places SET
  full_description = $v$Balneario en el Barrio de La Magdalena, a unos minutos de la plaza, con alberca olímpica, toboganes y chapoteadero; abre todos los días de 8 a 18 h. Se puede acampar, y su web ofrece habitaciones y renta de palapas o cabañas, sin precios: pregúntalos por teléfono. En agosto de 2026 la entrada costaba $100 y $50 los menores de 12.$v$,
  amenities = ARRAY[$v$Albercas$v$, $v$Toboganes$v$, $v$Camping$v$, $v$Palapas$v$, $v$Cabañas$v$, $v$Habitaciones$v$]::text[],
  updated_at = NOW()
WHERE id = 'fb30e010-d760-5805-ac5b-e9da4570373d';

-- Globos Aerostáticos Tequisquiapan (el operador es Vuela en Globo): vuelaenglobo.com/tequisquiapan y su FAQ
-- (10-nov-2026). El nombre no se cambia (cambiaría la URL). No se promete desayuno en el compartido [CONFLICTO
-- en su propia página]; "Fotos" no tenía fuente. Pet Friendly: FAQ y producto "Vuela en Globo Pet Friendly".
-- "Romántico": vende un vuelo privado en pareja. Fotos: las de su web que ya tenía.
UPDATE places SET
  short_description = $v$Vuelos en globo al amanecer con Vuela en Globo$v$,
  full_description = $v$Vuelos en globo al amanecer con Vuela en Globo, de Sepansa Balloons, fabricante de globos en Tequisquiapan desde 1982. El vuelo dura de 45 minutos a 1 hora; el punto de reunión es Jazmín 35 y de ahí llevan a los pasajeros al globopuerto. En noviembre de 2026 el vuelo compartido costaba $2,799 por persona y el privado en pareja $8,499, y también había vuelo pet friendly y vuelo con cabalgata. Vuelan niños desde 4 años con un adulto; con viento, lluvia o neblina el vuelo se reagenda.$v$,
  email = $v$reservaciones@vuelaenglobo.com$v$,
  amenities = ARRAY[$v$Transporte incluido$v$, $v$Brindis$v$, $v$Certificado$v$, $v$Seguro incluido$v$, $v$Pet Friendly$v$]::text[],
  tags = ARRAY[$v$Aventura$v$, $v$Romántico$v$, $v$Amanecer$v$, $v$Vista aérea$v$]::text[],
  updated_at = NOW()
WHERE id = 'b3aaa4ec-f45d-47ab-8b96-64c7c39e7633';

-- Bodegas De Cote: decote.mx no se pudo leer el 10-nov-2026 (verificación anti-bots) y sigue sin precios. Solo se
-- agrega que está en Ezequiel Montes y la distancia [CÁLCULO OSM de investigacion-guias-2026-11.md: 22 km].
UPDATE places SET
  full_description = $v$Viñedo de más de 50 hectáreas y 21 variedades en Ezequiel Montes, a unos 22 km de Tequis. Ofrece recorridos a pie, en bici y en tren, cata, Gran Reserva y pisado de uva, todos los días de 11 a 17 h. No publica precios: pregunta al reservar.$v$,
  updated_at = NOW()
WHERE id = 'd020202d-8a87-58a6-b976-1d667512b13a';

-- Viñedos Azteca: vinedosazteca.com y RECORRIDOS-2026.pdf (investigacion-guias-2026-11.md). Horario [CONFLICTO]:
-- el de la BD (lun–jue 11–15, vie–dom 11–18) ya no está en su web; schedule_json a NULL y en la descripción lo que
-- sí publica (bodega solo sáb y dom; El Itacate mar–dom 12–17 h). "Restaurant" pasa a "Restaurante" (vocabulario).
UPDATE places SET
  short_description = $v$Viñedo con aire de hacienda que hace vinos y vermuts$v$,
  full_description = $v$Viñedo en Ezequiel Montes, frente a Freixenet, con aire de hacienda mexicana, jardines y lagos; además de vino hace vermut. En 2026 sus recorridos, todos con copa grabada, costaban de $295 (1 h, una degustación) a $750 (VIP, con 5 vinos y sommelier), y el de vermut, $500. Al viñedo se entra toda la semana, pero la bodega solo se visita sábado y domingo; para niños tiene “Pinta tu botella” ($150). Su restaurante, El Itacate, abre de martes a domingo de 12 a 17 h.$v$,
  schedule_json = NULL,
  amenities = ARRAY[$v$Tours$v$, $v$Cata$v$, $v$Restaurante$v$, $v$Estacionamiento$v$, $v$Terraza$v$]::text[],
  tags = ARRAY[$v$Vino$v$, $v$Vermut$v$, $v$Tours$v$, $v$Familiar$v$]::text[],
  updated_at = NOW()
WHERE id = '3f47bf08-7a3d-4a3e-9aba-dc30785a0570';

-- Los Rosales Viñedos: no tiene web propia (vinedoslosrosales.com.mx es de apuestas) y hay cuatro teléfonos y tres
-- kilómetros distintos entre fuentes [CONFLICTO]: content_verified pasa a false (no hay web que confirme nada).
-- Se quita el km 27 de la dirección (solo lo da el directorio; OSM lo ubica en La Tortuga, pin sin cambio).
-- Sin precio de visita (la vendimia no cuenta): price_range ''. "Pet Friendly" y "Familiar" no tenían fuente.
-- Descripción: queretaro.travel (40 años, vino desde 2011, 10 minutos) y Uno TV, 21-jun-2024 (vid, botellas).
UPDATE places SET
  short_description = $v$Viñedo con más de 40 años, a unos 10 minutos de Tequis$v$,
  full_description = $v$Viñedo con más de 40 años, a unos 10 minutos de Tequis por la carretera a Ezequiel Montes, que hace vino propio desde 2011. Su vid más antigua, la “Salvador”, vino de Burdeos, y produce entre 20 y 30 mil botellas al año. Ofrece recorridos guiados con cata y comidas en el jardín, pero no tiene web propia ni publica horarios o precios.$v$,
  address = $v$Carretera Tequisquiapan–Ezequiel Montes, La Tortuga, Tequisquiapan$v$,
  price_range = '',
  amenities = ARRAY[$v$Tours$v$, $v$Cata$v$, $v$Jardín$v$]::text[],
  tags = ARRAY[$v$Vino$v$, $v$Tours$v$]::text[],
  content_verified = false,
  updated_at = NOW()
WHERE id = 'a489a939-80e6-490e-982b-183785468864';

-- Viñedos La Redonda (no venía en la lista, pero la investigación pide sacarla de páginas de precios):
-- laredonda.com.mx sigue "en actualización" (10-nov-2026) y solo da contacto: 442 277-0919 e info@laredonda.com.mx
-- (el 414-273-0400 de la BD no sale en ninguna fuente). Sin fuente vigente de horario ni precio: schedule_json NULL
-- y price_range ''. "Pet Friendly", "Romántico" y "Boutique" venían de la carga inicial, sin fuente.
-- Historia: El Financiero, 12-feb-2026. OJO: is_verified sigue en true (no se toca aquí; ver el reporte).
UPDATE places SET
  short_description = $v$Viñedo de 1975 con vendimia de pisado de uva$v$,
  full_description = $v$Viñedo fundado en 1975 por el italiano Vittorio Bortoluz en Ezequiel Montes; vendió uva durante décadas y hace su propio vino desde 2003, con las etiquetas La Redonda, Orlandi y Sierra Gorda. Es conocido por su vendimia con pisado de uva y tiene la Trattoria Orlandi, de cocina italiana. Su operación se detuvo a fines de 2025 por un conflicto legal y en noviembre de 2026 su web seguía en actualización: confirma por teléfono si ya reabrió antes de ir.$v$,
  phone_number = $v$442-277-0919$v$, email = $v$info@laredonda.com.mx$v$,
  price_range = '',
  schedule_json = NULL,
  amenities = ARRAY[$v$Estacionamiento$v$, $v$Terraza$v$, $v$Eventos privados$v$]::text[],
  tags = ARRAY[$v$Viñedo$v$, $v$Cata$v$, $v$Maridaje$v$]::text[],
  updated_at = NOW()
WHERE id = 'e83905fa-1335-4bc7-b117-a917d5246a53';

-- Vinícola San Juanito: sanjuanito.com.mx/visitas-guiadas (10-nov-2026): precios iguales; nuevo: menores de 12 sin
-- costo, "una pequeña área de juegos infantiles" y "La Casona es un hotel boutique con pocas habitaciones".
UPDATE places SET
  full_description = $v$Viñedo que nació en 2007 como finca autosustentable en San José de la Laja, dentro del municipio de Tequisquiapan. El recorrido pasa por el campo, la bodega y la cava; en noviembre de 2026 costaba $190 (sin costo para menores de 12) y las catas de 3 o 6 vinos, con o sin pizza, de $380 a $760. Desde la terraza se ve la Peña de Bernal; hay comida, una pequeña área de juegos infantiles y La Casona, un hotel boutique de pocas habitaciones. Abre de viernes a domingo, festivos y vacaciones, y no hace falta reservar en grupos pequeños.$v$,
  amenities = ARRAY[$v$Tours$v$, $v$Cata$v$, $v$Restaurante$v$, $v$Hospedaje$v$, $v$Área de juegos$v$, $v$Bodas y eventos$v$]::text[],
  tags = ARRAY[$v$Vino$v$, $v$Tours$v$, $v$Sustentable$v$, $v$Familiar$v$]::text[],
  updated_at = NOW()
WHERE id = '4133a23e-60d8-5e22-9d5a-88753a7c5d71';

-- Cava de Quesos Bocanegra: cavabocanegra.com/experiencias (investigacion-guias-2026-11.md, nov-2026). El directorio
-- 2025 da otro teléfono (414 104 3440) [CONFLICTO menor]: se queda el de su web. No admite mascotas.
UPDATE places SET
  full_description = $v$La primera cava de quesos de Tequisquiapan: una cava subterránea donde maduran quesos de autor de receta europea de la marca NéOle. La Visita a la Cava dura 40 minutos y sale cada hora de 10 a 16 h, todos los días; en noviembre de 2026 costaba $260, $310 con cerveza y $370 con vino, mezcal o tequila, y los menores de 5 años no pagaban. Conviene reservar, no admite mascotas y tiene restaurante, salvo los martes.$v$,
  updated_at = NOW()
WHERE id = 'ae31efd3-81cc-5ac7-92b5-66e8172ea106';

-- Finca VAI: quesosvai.com/tourvai.html (investigacion-guias-2026-11.md, nov-2026). Está en Colón.
-- "Familiar": se ven los animales y los menores de 4 no pagan (su web; Food & Pleasure: "ideal para ir con niños").
UPDATE places SET
  full_description = $v$Rancho quesero con historia familiar desde los años 1920, en Purísima de Cubos, municipio de Colón, a media hora de Tequis. El Recorrido del queso pasa por la ganadería (vacas, cabras y borregas), la fábrica antigua y el sótano de maduración, y termina con degustación guiada; en noviembre de 2026 costaba $210 por persona y los menores de 4 años no pagaban. No hace falta reservar en grupos pequeños; con más de 10 personas, sí.$v$,
  tags = ARRAY[$v$Quesos$v$, $v$Artesanal$v$, $v$Familiar$v$]::text[],
  updated_at = NOW()
WHERE id = 'eba5f710-5769-5afa-b66c-80006c114be2';

-- Freixenet México (Finca Sala Vivé): salavive.mx, su FAQ y "Visita Sala Vivé" (investigacion-guias-2026-11.md,
-- nov-2026). "La cava más grande de América Latina" no lo dice su web: dice "la bodega más grande de vino espumoso
-- en México desde 1979". Horario [FRÁGIL] y con un martes "no confirmado": schedule_json a NULL y los horarios de
-- recorrido en la descripción. Pet Friendly: su FAQ (áreas abiertas, no la cava). "Premium" no tenía fuente.
UPDATE places SET
  short_description = $v$Finca Sala Vivé: espumosos y cava a 25 m bajo tierra$v$,
  full_description = $v$Finca Sala Vivé, de Freixenet, en Ezequiel Montes: se presenta como la bodega de vino espumoso más grande de México, desde 1979. La Visita Sala Vivé dura 45 minutos, baja a una cava a 25 m de profundidad (de 14 a 18 °C: lleva suéter) y termina con cata; en noviembre de 2026 costaba $310 adultos, $250 adultos mayores y personas con discapacidad, y $210 niños. Entre semana sale a las 12, 14 y 17 h, y en fin de semana cada hora de 11 a 17 h, cuando suele agotarse: compra en línea. Entrar, comer en el Food Garden o tomar vino no cuesta, y las mascotas pueden estar en las áreas abiertas, pero no en la cava.$v$,
  schedule_json = NULL,
  amenities = ARRAY[$v$Estacionamiento$v$, $v$Tienda$v$, $v$Restaurante$v$, $v$Accesible$v$, $v$Tours guiados$v$, $v$Pet Friendly$v$]::text[],
  tags = ARRAY[$v$Viñedo$v$, $v$Cata$v$, $v$Tour$v$, $v$Espumosos$v$, $v$Familiar$v$]::text[],
  updated_at = NOW()
WHERE id = 'db284afc-c328-4fca-9bec-2bbc453c222f';

COMMIT;

-- =====================================================================================
-- Bloque 2: altas con web propia
-- =====================================================================================
BEGIN;

-- Norte B. Fuente: norteb.mx (precios de /experiencias y teléfono del pie, según la investigación; la web pide
-- confirmar la edad y no se leyó el texto aquí), tequis.travel, directorio 2025. Teléfono [CONFLICTO menor]: 427 224
-- 6790 en su web, 427 224 6714 en el directorio y queretaro.travel: se usa el de su web. Sin horario: content_verified
-- false. Pin APROXIMADO: no está en OSM; es el de Cava Bocanegra (nodo OSM 6612400802), "el mismo km 50", corrido
-- unos 50 m para que no se encimen. Afinarlo en el panel. Foto: la única de su web que no es una tira ni tiene caras.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('1d7fc20f-6fe1-55a2-b9d9-2acb315dcfef', $v$Norte B$v$, 'experiencias', $v$Viñedo$v$, 20.5461000, -99.9517000, $v$Carretera Estatal 200 km 50, Fuentezuelas, Tequisquiapan$v$,
  $v$Viñedo y cervecería con catas acompañadas de quesos$v$,
  $v$Viñedo y cervecería en el km 50 de la carretera estatal 200, en Fuentezuelas, el mismo kilómetro que Cava Bocanegra. Sus tres experiencias incluyen visita y degustación con quesos de Bocanegra: en noviembre de 2026, la de vino (3 vinos, 45 min) costaba $450; la de cerveza (3 cervezas, 45 min), $390, y la mixta (2 vinos y 2 cervezas, 75 min), $490. No publica horario: confirma antes de ir.$v$,
  'moderate', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/norte-b-bodega.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/norte-b-bodega.jpg$v$, $v$427-224-6790$v$, NULL, $v$https://norteb.mx$v$, NULL, NULL,
  ARRAY[$v$Tours$v$, $v$Cata$v$, $v$Terraza$v$]::text[], ARRAY[$v$Vino$v$, $v$Cerveza$v$, $v$Quesos$v$]::text[], false);

-- CR Vinos MX (con el restaurante Cartinto House). Fuente: crvinosmx.com (Contacto: +52 442 773 2600, crvinosmx@gmail.com
-- y "Camino Tejocote a San Jose la Laja, Km 3.2, Tequisquiapan"; Experiencias y Restaurante, 10-nov-2026), queretaro.travel.
-- Su web resuelve el [CONFLICTO] de teléfono (414 226 7622 del directorio es de Cadena Enoturística) y "Alaminos 561" es
-- su sucursal de Veracruz. Horario [FRÁGIL] (su web: mié–dom 12–19 h; tequis.travel: 12–18 h): NULL y en la descripción.
-- Pin: el del enlace de Google Maps de su propia web (página Restaurante). Pet friendly solo en queretaro.travel: no se pone.
-- "Romántico": su web vende el picnic como "experiencia relajada y romántica", "ideal para parejas".
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('c40d2783-4b09-50ae-bb48-76cbfbf8f507', $v$CR Vinos MX$v$, 'experiencias', $v$Viñedo$v$, 20.6154841, -100.0177334, $v$Camino Tejocote a San José La Laja km 3.2, Tequisquiapan$v$,
  $v$Viñedo con recorridos, picnic y el restaurante Cartinto House$v$,
  $v$Viñedo en el camino de Tejocote a San José La Laja, con el restaurante Cartinto House, de cocina campestre mexicana. En noviembre de 2026 abría de miércoles a domingo de 12 a 19 h, y sus recorridos costaban de $300 (Tour CR, 45 min, con degustación) a $2,000 (Tour VIP, con cata de tanque y barrica); el Tour CR + Cata de Vinos, con 3 vinos, sommelier y quesos, costaba $500. También ofrece picnic en un tipi frente al viñedo ($1,100) y eventos privados.$v$,
  'moderate', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/cr-vinos-mx-picnic.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/cr-vinos-mx-tanques.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/cr-vinos-mx-cartinto.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/cr-vinos-mx-picnic.jpg$v$, $v$442-773-2600$v$, $v$crvinosmx@gmail.com$v$, $v$https://crvinosmx.com$v$, $v$442-773-2600$v$, NULL,
  ARRAY[$v$Tours$v$, $v$Cata$v$, $v$Restaurante$v$, $v$Picnic$v$, $v$Reservaciones$v$]::text[], ARRAY[$v$Vino$v$, $v$Mexicana$v$, $v$Romántico$v$]::text[], true);

-- Viñedo La Revuelta (restaurante Gran Reserva). Fuente: larevuelta.com.mx (portada, /origen y /gran-reserva,
-- 10-nov-2026; teléfono y WhatsApp 442 136 4310, hola@larevuelta.shop), tequis.travel (dirección), queretaro.travel y
-- directorio 2025 (mismo teléfono). Pin: el del enlace de Google Maps de su web (la ficha de tequis.travel da casi
-- el mismo). Sin horario ni precios: content_verified false, price_range ''. NO tiene hospedaje: "La Recompensa" es
-- una preventa de lofts.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('db521ef0-c335-5e8b-b174-74c1ad10289f', $v$Viñedo La Revuelta$v$, 'experiencias', $v$Viñedo$v$, 20.5515006, -99.9468569, $v$Ejido Fuentezuelas s/n, entrada por Carretera Estatal 200 km 50, Tequisquiapan$v$,
  $v$Viñedo con el restaurante Gran Reserva y menús de degustación$v$,
  $v$Viñedo en el ejido Fuentezuelas, con entrada por el km 50 de la carretera estatal 200, detrás de Cava Bocanegra; tiene cava, tienda y el restaurante Gran Reserva. El restaurante sirve menús de degustación de 5, 7 y 10 tiempos de cocina mexicana, española y veracruzana, con maridaje; su vino principal, La Resistencia, es un Merlot y Cabernet Sauvignon con 18 meses en barrica. Se reserva por WhatsApp, en mesas de 4 a 6 personas y con pago por adelantado. No publica horario ni precios.$v$,
  '', ARRAY[$v$https://panel.tequismagico.com/uploads/lugares/vinedo-la-revuelta-vinedo.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/vinedo-la-revuelta-comedor.jpg$v$, $v$https://panel.tequismagico.com/uploads/lugares/vinedo-la-revuelta-platillo.jpg$v$]::text[],
  $v$https://panel.tequismagico.com/uploads/lugares/vinedo-la-revuelta-vinedo.jpg$v$, $v$442-136-4310$v$, $v$hola@larevuelta.shop$v$, $v$https://larevuelta.com.mx$v$, $v$442-136-4310$v$, NULL,
  ARRAY[$v$Restaurante$v$, $v$Reservaciones$v$, $v$Cava$v$, $v$Tienda$v$]::text[], ARRAY[$v$Vino$v$, $v$Maridaje$v$, $v$Mexicana$v$]::text[], false);

COMMIT;

-- =====================================================================================
-- Bloque 3: Viajes y Enoturismo (tours a viñedos sin manejar)
-- =====================================================================================
-- OJO: investigacion-actividades-patrimonio-2026-11.md también la lista (tour a minas de ópalo). Si otro SQL ya
-- la da de alta con el mismo nombre, el id coincide y ON CONFLICT evita el duplicado; si usa otro nombre, aplicar
-- solo uno de los dos.
BEGIN;

-- Viajes y Enoturismo. Fuente: viajesyenoturismo.com.mx (portada, Descripción Tours y Ubicación, 10-nov-2026: oficina,
-- tel. 414 273 5718, WhatsApp 414 112 3349, salidas diarias desde 2 personas, anticipo del 30 %), tequis.travel y
-- directorio 2025 (mismo teléfono). Sus precios dicen "validos de enero a diciembre 2025" [FRÁGIL]. Pin: nodo OSM
-- 6601353689 ("Viajes y Enoturismo Tours", Juárez Poniente 16). Su web solo tiene separadores gráficos: foto genérica.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('fe390085-9e2e-5ebc-a209-2738cc83206e', $v$Viajes y Enoturismo$v$, 'experiencias', $v$Tour$v$, 20.5228070, -99.8928433, $v$Juárez 16 Poniente, casi esquina con Guillermo Prieto, Centro$v$,
  $v$Tours a viñedos y queserías con transporte desde el centro$v$,
  $v$Agencia del centro de Tequis que organiza tours por la Ruta del Arte, Queso y Vino, con transporte de ida y vuelta desde su oficina en Juárez 16 Poniente. Salen todos los días a partir de 2 personas y, según el tour, visitan lugares como Cava Bocanegra, Bodegas De Cote, Freixenet, Viñedos Azteca y la quesería La Biquette. En noviembre de 2026 su web seguía mostrando los precios de 2025: de $1,300 a $1,980 por adulto. Se reserva por WhatsApp con un anticipo del 30 %.$v$,
  'expensive', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$414-273-5718$v$, NULL, $v$https://www.viajesyenoturismo.com.mx$v$, $v$414-112-3349$v$, NULL,
  ARRAY[$v$Transporte incluido$v$, $v$Tours$v$, $v$Degustaciones$v$]::text[], ARRAY[$v$Centro$v$, $v$Vino$v$, $v$Quesos$v$]::text[], true)
ON CONFLICT (id) DO NOTHING;

COMMIT;

-- =====================================================================================
-- Bloque 4 (OPCIONAL): viñedos sin web propia, con dos fuentes de Turismo que coinciden
-- =====================================================================================
-- Existen según tequis.travel + directorio 2025 (una fuente) y queretaro.travel (otra), con el mismo teléfono y
-- dirección. Sin web, horario ni precio: content_verified false, price_range '', foto genérica de viñedo.
BEGIN;

-- Viña Magal. Fuente: queretaro.travel (descripción y pin del enlace "cómo llegar" de su ficha), tequis.travel,
-- directorio 2025 (427 229 0487 en las tres). No tiene web (solo Facebook/Instagram `vinamagal`).
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('b7a72d9a-a81a-56ac-80bc-c0626f290ab1', $v$Viña Magal$v$, 'experiencias', $v$Viñedo$v$, 20.5397994, -99.9316835, $v$Carretera Estatal 200 Querétaro–Tequisquiapan km 53, Pozo 4 “El Triángulo”, Tequisquiapan$v$,
  $v$Viñedo familiar con vino artesanal y terraza para eventos$v$,
  $v$Viñedo familiar de poco más de 4 hectáreas en el km 53 de la carretera estatal 200, con vino 100 % artesanal; su etiqueta principal es Parsionero. Tiene una terraza con vista al viñedo para eventos, cata con quesos y carnes frías, y una parrilla con espacio para 15 personas. No tiene web ni publica horario o precios: confirma por teléfono antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$427-229-0487$v$, $v$vinamagal@gmail.com$v$, NULL, $v$427-229-0487$v$, NULL,
  ARRAY[$v$Cata$v$, $v$Terraza$v$, $v$Eventos privados$v$]::text[], ARRAY[$v$Vino$v$, $v$Artesanal$v$]::text[], false);

-- Vinícola San Patricio. Fuente: queretaro.travel (historia, recorrido, dirección y pin del enlace de mapa de su ficha),
-- tequis.travel, directorio 2025 (414 273 0038 en las tres). Su web, vinicolasp.com.mx, no respondió el 10-nov-2026:
-- no se enlaza.
INSERT INTO places (id, name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, image_urls, thumbnail_url, phone_number, email, website, whatsapp_number, schedule_json, amenities, tags, content_verified)
VALUES ('690c1a76-1e6e-5124-88f4-902488c9195c', $v$Vinícola San Patricio$v$, 'experiencias', $v$Viñedo$v$, 20.5352657, -99.8785949, $v$Carretera a Huichapan 47, Col. Tierra Blanca, Tequisquiapan$v$,
  $v$Vinícola con recorrido guiado y degustación de sus vinos$v$,
  $v$Vinícola fundada en 1999 en Ezequiel Montes, hoy en la carretera a Huichapan, colonia Tierra Blanca, en Tequisquiapan. Ofrece un recorrido guiado por sus instalaciones para conocer cómo se hace el vino y probar sus etiquetas Santiago Apóstol, y vende sus productos. No publica horario ni precios y su web no responde: confirma por teléfono antes de ir.$v$,
  '', ARRAY[$v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$]::text[],
  $v$https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg$v$, $v$414-273-0038$v$, $v$vinicolasanpatricio@prodigy.net.mx$v$, NULL, NULL, NULL,
  ARRAY[$v$Tours$v$, $v$Degustaciones$v$, $v$Tienda$v$]::text[], ARRAY[$v$Vino$v$]::text[], false);

COMMIT;

# Investigación de negocios para dar de alta (búsquedas de Search Console)

Consultado el 9 de noviembre de 2026. Cubre las búsquedas de Search Console de noviembre de 2026 que hoy no respondemos bien. Marcas:
- **[FRÁGIL]**: precio u horario que cambia. Mejor redactar sin cifra o con "en 2026 costaba…".
- **[CONFLICTO]**: las fuentes no coinciden. Se anotan todas.
- **[CÁLCULO]**: distancia y tiempo calculados con OpenStreetMap (OSRM) desde la Plaza Miguel Hidalgo, sin tráfico.
- **Pin aproximado**: el negocio no está en OpenStreetMap; la coordenada es la de la calle o de un punto vecino y hay que afinarla a mano en el panel.

---

## Avisos antes de dar de alta

1. **La mejor fuente local es tequis.travel** (portal de la Secretaría de Turismo municipal). Tiene una ficha por negocio (`tequis.travel/<negocio>/`) y un PDF, el [Directorio Tequisquiapan 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), con teléfonos de restaurantes, spas, parques acuáticos y viñedos. **Ojo:** el teléfono 414 265 1999 y el WhatsApp 414 226 1459 que salen en todas las fichas son de Turismo, no del negocio. En la ficha de La Barra del Despecho aparecen como si fueran del bar.
2. **Dominios que no son del negocio:**
   - `lacasonatequisquiapan.com` (el que ya estaba marcado como secuestrado) **redirige a `sandiegokidusgebriel.org`**. El sitio real del hotel es **`lacasonatequisquiapan.mx`**.
   - `hotelrio.com.mx` es del **Hotel Río Malecón Vallarta** (Puerto Vallarta), un homónimo. El sitio real del Hotel Río Tequisquiapan es **`hotelesriotequisquiapan.com`**.
   - `vinatx.info` (sitio que da queretaro.travel para Viña TX) no resuelve.
   - `hamburguesaselpatron.negocio.site` (el sitio de El Patrón según tequis.travel) da 404: Google cerró esos sitios.
3. **Cuatro lugares que ya tenemos parecen inventados en la carga inicial.** Por sus nombres nos llegan búsquedas, pero no encontré ningún rastro de ellos: **La Viña Wine Bar** (Morelos 15), **La Terraza del Centro** (Portal Hidalgo 12; su teléfono, 414-273-1234, parece de relleno), **Dulces Típicos La Abuelita** (Portal Guerrero 7) y **Mariscos El Puerto** (Ezequiel Montes 45, 414-273-3456). Ver "Cambios a lugares que ya tenemos".
4. **Otros datos de la carga inicial que chocan con fuentes reales** (fuera del alcance, solo para tenerlo presente):
   - Según tequis.travel, en **Morelos 12** está el Hotel Boutique La Granja (con el Bar La Guayaba). En la BD, esa dirección es de "La Fabbrica Italiana".
   - El hotel real **La Casona Tequisquiapan Hotel & Spa** está en Antiguo Camino al Sauz 55, Hacienda Grande. En la BD hay un "Hotel Museo La Casona" en Morelos 11 que no encontré en ninguna fuente.
5. **OpenStreetMap tiene muy pocos negocios de Tequis.** Solo Pizzas Don Rigo, el Hotel Río (Río 33), el Wine Bar Freixenet y San Juanito tienen punto propio. Los demás van con pin aproximado.
6. Spas, bares y mariscos casi nunca tienen sitio propio, solo Facebook o Instagram. Por la regla de fotos, esos se quedan con la foto genérica.

---

## Tabla resumen

| Búsqueda | Lugar | Decisión | Por qué |
|---|---|---|---|
| "pizza(s) don rigo tequisquiapan" | **Pizzas Don Rigo** | **Alta** (sin `content_verified`) | Existe: está en OSM (Juárez Poniente) y tiene dos páginas de Facebook (matriz y sucursal). Dirección y teléfono en [CONFLICTO]. Sin web. |
| "restaurant el patron tequisquiapan" | **El Patrón Smoked & Grill** | **Alta** (sin `content_verified`) | Tiene ficha en tequis.travel y nota de Food & Pleasure (sep-2025). Su web está caída, no hay horario y el teléfono está en [CONFLICTO]. |
| "puerto marino tequisquiapan" | "Puerto Marino" (mariscos) | **Descartado por ahora** | Solo sale en agregadores (Restaurant Guru: 3.4 con 66 votos; Tripadvisor: "a 0.3 km del Parque La Pila", con 1 opinión). No hay dirección, teléfono, redes ni ficha en tequis.travel. |
| "plaza santa cecilia tequisquiapan" | **Plaza Santa Cecilia** (plaza pública del centro) | **Alta pendiente de pin** | Existe y es sede de eventos municipales de 2024 a 2026. No está en OSM y no encontré la ubicación exacta. |
| "centro guadalupano tequisquiapan" | Centro Guadalupano de Oración y Reflexión | **Descartado** | **No es el mercado**: es un centro espiritual en la col. Balcones de Tequisquiapan (Foursquare, Facebook), no un lugar turístico. Quien busca el **Mercado Guadalupano** ya lo encuentra en el sitio. |
| "dulceria la abuelita" | Dulces Típicos La Abuelita (**ya la tenemos**) | **No se confirma** | No encontré ninguna fuente de esa dulcería en Tequis. Lo más parecido es "Dulces artesanales mi abuelita", una página de Facebook de Querétaro sin dirección. Recomiendo desactivarla. |
| "la viña bar official website" | La Viña Wine Bar (**ya la tenemos**) | **No se confirma; no tiene web** | No existe un bar "La Viña" en Tequis. Las alternativas reales son **Viña TX** (viñedo urbano con restaurante) y el **Wine Bar Freixenet** (Juárez Pte. 4C). |
| "terraza tequisquiapan" / "donde queda la terraza" | La Terraza del Centro (**ya la tenemos**) | **No se confirma** → alta de **La Luna Terraza** | No hay ningún restaurante "La Terraza" en Portal Hidalgo. La terraza que sale en las fuentes es **La Luna Terraza**, en la azotea de K'puchinos (Independencia 7). La de **El Maravillas** también es muy citada. |
| "aztec spa" / "spa azteca" / "azteca spa" | — | **Descartado otra vez** | No existe con ese nombre. Viñedos Azteca no tiene spa ni hotel según su sitio (nov-2026). Hipótesis sin prueba: Xantico Spa (Xantico es una deidad mexica), ver "Descartados". |
| "spa tequisquiapan" | **Espacio Sense Spa (La Casona Tequisquiapan Hotel & Spa)** | **Alta** (sin `content_verified`) | Tiene web propia (`.mx`), pero no publica horario. |
| | **Spa Studio 7 (Hotel San Carlos)** | **Alta** (`content_verified` sí) | Web propia con teléfono y horario. |
| | Xantico Spa, Yoot Masajes, Mandarina Spa, Saint George, Hacienda Tres Vidas, masajes del Hotel Río, temazcales | No por ahora | Sin sitio propio o con datos de un solo directorio. Ver "Descartados". |
| "balnearios tequisquiapan" / "parque acuatico en tequisquiapan" | **Balneario La Vega** | **Alta** (`content_verified` sí) | Web propia, en el pueblo, con teléfono y horario. |
| | **Fantasía Acuática** | Alta opcional (sin `content_verified`) | Ficha de tequis.travel y directorio 2025; sin web. |
| | Balneario San Joaquín (Ezequiel Montes), Balneario Fidel Velázquez | No por ahora | Solo redes y la ficha de tequis.travel. |
| | Termas del Rey y El Oasis (**ya los tenemos**) | **Actualizar** | Los dos tienen **sitio oficial**: horario, precios y fotos. Ver "Cambios a lugares que ya tenemos". |
| "bares tequisquiapan" | **La Luna Terraza** | **Alta** (sin `content_verified`) | Su web (dentro de kpuchinos.com.mx) da dos horarios distintos [CONFLICTO]. |
| | **Wine Bar Freixenet** (centro) | Alta opcional (sin `content_verified`) | Está en OSM, tequis.travel y el directorio. Sin web: el sitio de Sala Vivé no lo menciona. |
| | La Barra del Despecho, Bar La Guayaba | No por ahora | Solo ficha de tequis.travel. La Barra no tiene teléfono propio y La Guayaba no tiene horario. |
| "dulcerias tequisquiapan" | — | **Ninguna confirmable** | tequis.travel no nombra ninguna dulcería (solo dice que se venden en mercados y tiendas). La Charamusca empezó como dulcería en 1982, pero hoy es panadería y café, y su web no resuelve. Mejor apuntar esa búsqueda a los mercados. |
| "mariscos en tequisquiapan" | **Don Camarón TX**, **Bucaneros Mariscos** | Alta opcional (sin `content_verified`) | Tienen ficha en tequis.travel y redes. No tienen web ni horario. |
| "restaurantes en tequisquiapan" / "donde comer en tequisquiapan" | **El Maravillas** | **Alta** (`content_verified` sí) | Web propia y ficha de tequis.travel con horario. Lo citan Grupo Animal y queretaro.travel. |
| | **ORIGENS** | **Alta** (`content_verified` sí) | Web propia con teléfono y horario. Lo citan Grupo Animal y queretaro.travel. |
| | **Río 33** | **Alta** (sin `content_verified`) | Web del hotel, sin horario. Lo cita queretaro.travel. |
| | Casa Suelem | Alta opcional (sin `content_verified`) | Ficha de tequis.travel y Grupo Animal. Sin web ni horario. |
| "viñedos tequisquiapan" | **Vinícola San Juanito** | **Alta** (`content_verified` sí) | Es el viñedo con más datos propios **dentro del municipio de Tequisquiapan** (San José de la Laja). |
| | **Viña TX** | Alta opcional (sin `content_verified`) | Viñedo urbano en el pueblo; su web no resuelve. También responde a "la viña bar". |
| | Puerta del Lobo, Vinaltura | **No** | Están en **El Marqués**, cerca de la ciudad de Querétaro, no "cerca de Tequis". |

---

## Fichas de alta

### 1. El Maravillas
- **Categoría / subcategoría:** gastronomia / Restaurante.
- **Dirección:** Morelos 7 (Morelos Norte), Centro, 76750 ([elmaravillas.com.mx](https://www.elmaravillas.com.mx); [tequis.travel](https://tequis.travel/el_maravillas_tequisquiapan/)).
- **Coordenadas:** **pin aproximado** 20.5229, -99.8919 (tramo peatonal de Morelos Norte en OSM; el número no está mapeado).
- **Teléfono:** 414 273 0208 (web, tequis.travel y directorio 2025 coinciden).
- **WhatsApp:** 414 273 0208 (enlace `wa.me/4142730208` de su web).
- **Correo:** contacto@elmaravillas.com.mx.
- **Sitio web:** https://www.elmaravillas.com.mx. Reservas en línea: https://el-maravillas.meitre.com.
- **Redes:** facebook.com/elmaravillastx, instagram.com/elmaravillastx.
- **Horario** [FRÁGIL] (tequis.travel; su web no lo publica):
  - Miércoles a sábado de 13:00 a 23:59; domingo de 13:00 a 20:00.
  - Desayunos de jueves a domingo, de 9:30 a 13:00.
  - Lunes y martes no aparecen.
- **Precio:** sin fuente. Dejar vacío.
- **Descripción corta:** Cocina mexicana creativa con terraza y vista al pueblo, en el centro.
- **Descripción larga:** Abrió en 2014 en el centro de Tequisquiapan y rinde homenaje al abuelo de tres hermanos, José Manuel Morales, y a sus aventuras de pesca, cacería, charrería y campamento. El chef es Alejandro Martínez. La carta incluye camarones roca, tostaditas caribeñas de atún, salmón al cedro, tacos olvidados de barbacoa de borrego, chamorro al pibil en mixiote y un plato de quesos de la región. Tiene coctelería de autor, horchata de coco y pan hecho en casa en el desayuno. Hay mesas en terraza y en comedor. Promociones [FRÁGIL]: 2×1 en cócteles miércoles y jueves, y descorche gratis los viernes.
- **Fotos** (de su web; la de la terraza la revisé a ojo: muestra la terraza con la parroquia al fondo):
  - https://www.elmaravillas.com.mx/images/Restaurante/Terraza%20+%20iglesia.jpg (2.1 MB)
  - https://www.elmaravillas.com.mx/images/2026/tacos-olvidados.jpg
  - https://www.elmaravillas.com.mx/images/2026/camarones-roca.jpg
- **`content_verified`:** **sí**. La web propia confirma teléfono y sitio; tequis.travel confirma teléfono, sitio y horario.
- **Fuentes:**
  - [elmaravillas.com.mx](https://www.elmaravillas.com.mx)
  - [tequis.travel – El Maravillas](https://tequis.travel/el_maravillas_tequisquiapan/)
  - [Directorio Tequisquiapan 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf)
  - [Grupo Animal, 11-mar-2025](https://grupoanimal.mx/gastronomia/recetas/donde-comer-en-tequisquiapan)
  - [queretaro.travel](https://queretaro.travel/lugares/on-a-trip-to-tequis-dont-leave-with-an-empty-belly/?lang=en)

### 2. ORIGENS (Cocina · Deli · Vinoteca)
- **Categoría / subcategoría:** gastronomia / Restaurante.
- **Dirección:** Andador Niños Héroes 30, Centro, junto al Centro Geográfico ([tequis.travel](https://tequis.travel/origens_tequisquiapan/); Grupo Animal da "C. Niños Héroes 30").
- **Coordenadas:** **pin aproximado** 20.52155, -99.89396 (Monumento al Centro Geográfico en OSM, nodo 6603308195; ORIGENS está al lado).
- **Teléfono y WhatsApp:** 414 119 8018 (web, tequis.travel y directorio coinciden). Enlace de WhatsApp: wa.link/bx4ox8.
- **Correo:** hola@origens.mx.
- **Sitio web:** https://origens.mx.
- **Redes:** facebook.com/origens.mx, instagram.com/origens.mx.
- **Horario** [FRÁGIL]: "Jueves a domingo. De 13 H a 22 H" ([origens.mx](https://origens.mx)).
- **Precio** [FRÁGIL]: en nov-2026, de $140 (postres) a $725 (arroz meloso); por ejemplo, burrata $245 y brisket $370. Sugiero **moderate**.
- **Descripción corta:** Cocina mediterránea con ingredientes de la región, deli y vinoteca, junto al Centro Geográfico.
- **Descripción larga:** Restaurante de cocina mediterránea abierto en 2020, con ingredientes regionales, en el primer granero histórico del pueblo (tequis.travel). Tiene opciones veganas y vegetarianas, un deli de quesos artesanales y embutidos, y una vinoteca con más de 50 etiquetas locales, nacionales e internacionales. Se puede reservar, aunque no es obligatorio, y hace entregas a domicilio por WhatsApp. No admite mascotas. Calle peatonal, a un minuto de la plaza principal.
- **Fotos** (de su web, revisadas: platillo, quesos del deli y patio del granero):
  - https://origens.mx/wp-content/uploads/2024/05/ORIGENS-SW-Principales-Home-500x350px-01.jpg
  - https://origens.mx/wp-content/uploads/2024/05/ORIGENS-SW-Principales-Home-500x350px-02.jpg
  - https://origens.mx/wp-content/uploads/2024/05/ORIGENS-SW-Principales-Home-500x456px-01.jpg
  - Ojo: son chicas (500 px). Su servidor responde 406 a `curl` sin cabecera de navegador; con User-Agent normal sí carga.
- **`content_verified`:** **sí**. La web propia da teléfono y horario; tequis.travel confirma dirección, teléfono y sitio.
- **Fuentes:**
  - [origens.mx](https://origens.mx)
  - [tequis.travel – Origens](https://tequis.travel/origens_tequisquiapan/)
  - [tequis.travel – Vinos (Vinoteca ORIGENS)](https://tequis.travel/vinedos_tequisquiapan/)
  - [Grupo Animal](https://grupoanimal.mx/gastronomia/recetas/donde-comer-en-tequisquiapan)
  - [queretaro.travel](https://queretaro.travel/lugares/on-a-trip-to-tequis-dont-leave-with-an-empty-belly/?lang=en)
  - Aviso: en `investigacion-guias-2026-11.md` ya salía "ORIGENS Deli" como tienda de quesos. Es el mismo lugar.

### 3. Río 33 (restaurante del Hotel Río Tequisquiapan)
- **Categoría / subcategoría:** gastronomia / Restaurante.
- **Dirección:** C. Niños Héroes 33, Centro, 76750 (web del hotel y tequis.travel). [CONFLICTO] Los agregadores dicen "33 B".
- **Coordenadas:** 20.52048, -99.89506 (enlace de mapa del sitio del hotel). Coincide con el nodo OSM "Hotel Río Tequisquiapan" (20.52036, -99.89508).
- **Teléfono** [CONFLICTO]:
  - Hotel: 414 273 0015 y 414 273 0047 (sitio oficial).
  - Restaurante: 414 280 2342 (tequis.travel) y 414 280 2343 (directorio 2025).
- **WhatsApp:** wa.link/0z0w2b (tequis.travel, sin número visible).
- **Correo:** tequisquiapan@hotelesrio.com.mx (hotel).
- **Sitio web:** https://www.hotelesriotequisquiapan.com/restaurants.html (**no** hotelrio.com.mx, que es otro hotel en Vallarta).
- **Redes:** facebook.com/restauranterio33, instagram.com/rio33.tequis.
- **Horario:** ninguna fuente oficial lo da. Un agregador (Pearl) dice de 7 a 24 h diario; no usarlo.
- **Precio:** sin fuente fiable.
- **Descripción corta:** Parrilla y cocina internacional con una cava de más de cien etiquetas, en el Hotel Río.
- **Descripción larga:** El restaurante del Hotel Río Tequisquiapan, a una cuadra del Centro Geográfico. Combina cortes a la parrilla con cocina internacional y tiene una carta de más de cien vinos mexicanos e internacionales (sitio del hotel). queretaro.travel dice que tiene un premio de Wine Spectator, y En Primeur Club, una "White Star" de Star Wine List (may-2022): mejor no citar premios sin la fuente original. El hotel tiene además el Snack Bar El 33, junto a las albercas.
- **Fotos** (sitio oficial del hotel, plataforma SiteMinder; revisadas: comedor con cava y murales):
  - https://webbox.imgix.net/images/mfnwobnjdatqgshi/bc67d772-3259-4069-b535-35ece8f42c7a.jpg
  - https://webbox.imgix.net/images/mfnwobnjdatqgshi/4ab3ef9e-1a4a-4c97-a09f-55586162619c.jpg
  - Si se usan, agregar `webbox.imgix.net` a `OPTIMIZED_HOSTS` en `web/lib/images.ts`.
- **`content_verified`:** **no**: no hay horario en ninguna fuente oficial.
- **Fuentes:**
  - [hotelesriotequisquiapan.com – Restaurants](https://www.hotelesriotequisquiapan.com/restaurants.html)
  - [tequis.travel – Rio 33](https://tequis.travel/rio_33_tequisquiapan/)
  - [queretaro.travel](https://queretaro.travel/lugares/on-a-trip-to-tequis-dont-leave-with-an-empty-belly/?lang=en)
  - [En Primeur Club](https://www.enprimeurclub.com/restaurants/restaurante-rio-33-tequisquiapan-restaurant)
  - [Directorio 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf)

### 4. El Patrón Smoked & Grill
- **Nombre** [CONFLICTO]: tequis.travel lo llama "El Patrón Smoked And Grill" en el listado y "El Patrón Restaurante and Grill" en la ficha; Food & Pleasure, "El Patrón BBQ Smoke & Grill". Sugiero **"El Patrón Smoked & Grill"**.
- **Categoría / subcategoría:** gastronomia / Restaurante.
- **Dirección:** Gral. José María Arteaga 118, Barrio de la Magdalena ([Food & Pleasure](https://foodandpleasure.com/restaurante-en-tequisquiapan/); tequis.travel: "De Arteaga #118, Magdalena, 76750").
- **Coordenadas:** **pin aproximado** 20.526, -99.881 (calle General José María Arteaga en OSM, que mide más de 1.5 km; el número no está mapeado). Unos 1.9 km / 4 min de la plaza [CÁLCULO, con el pin aproximado]. Food & Pleasure dice "8 minutos del centro" y tequis.travel, "5 minutos".
- **Teléfono** [CONFLICTO]: 427 136 8121 (Food & Pleasure y tequis.travel) frente a 414 136 8121 (directorio 2025).
- **WhatsApp:** sin fuente.
- **Sitio web:** ninguno que funcione (`hamburguesaselpatron.negocio.site` da 404). Instagram: @elpatrontx.
- **Horario:** sin fuente.
- **Precio:** sin fuente.
- **Descripción corta:** BBQ texano ahumado, cortes a la parrilla y hamburguesas, a unos minutos del centro.
- **Descripción larga:** Restaurante de BBQ estilo Texas: brisket, pork belly, pulled pork y costillas ahumadas lentamente, además de cortes premium a la parrilla. La carta también tiene hamburguesas artesanales (entre ellas una cubana con plátano frito), alitas, ensaladas, birria de brisket, sushi, postres y coctelería. Tiene terraza y áreas al aire libre, y ambiente familiar. tequis.travel dice que es "el único BBQ texano de la región"; si se usa, citarlo como dicho del restaurante.
- **Fotos:** no (no tiene web propia).
- **`content_verified`:** **no**.
- **Fuentes:**
  - [Food & Pleasure, 24-sep-2025](https://foodandpleasure.com/restaurante-en-tequisquiapan/)
  - [tequis.travel – El Patrón](https://tequis.travel/el_patron_restaurante_and_grill_tequisquiapan/)
  - [Directorio 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf)

### 5. Pizzas Don Rigo
- **Categoría / subcategoría:** gastronomia / Pizzería.
- **Dirección** [CONFLICTO]:
  - Matriz: "Av. Benito Juárez 183", es decir, Juárez Poniente (OSM). La página de Facebook dice "Juárez 102".
  - Sucursal: Av. Venustiano Carranza 4, Bordo Blanco (Cybo, yoys.mx). La página de Facebook de la sucursal dice "Campesinos de América L3 M39".
- **Coordenadas:** 20.5226937, -99.8980124 (nodo OSM 5419378324, matriz).
- **Teléfono** [CONFLICTO]:
  - Matriz: 414 249 2321 (OSM), 414 273 3464 (Facebook y Cylex, visto solo en el fragmento del buscador) y 414 231 8540 (Foursquare).
  - Sucursal: 414 273 3597.
- **Sitio web:** ninguno. Facebook: [Pizzas Don Rigo](https://www.facebook.com/p/Pizzas-Don-Rigo-100067213985278/) y [Pizzas Don Rigo Sucursal](https://www.facebook.com/pizzasdonrigosucursal/). Facebook no deja leer las páginas sin sesión.
- **Horario** [FRÁGIL]: OSM dice de lunes a domingo de 9:00 a 21:00. No hay fuente oficial.
- **Precio:** Facebook lo marca como "$$" según el buscador. Sugiero **moderate**, con poca confianza.
- **Descripción corta:** Pizzería del pueblo sobre Juárez Poniente, con una sucursal.
- **Descripción larga:** Pizzería local de Tequisquiapan con dos locales: la matriz en Juárez Poniente y una sucursal. Patrocinó el evento "Deja tu Huella" en el Parque La Pila (Facebook, según el buscador). No encontré más datos verificables; mejor una descripción breve.
- **Fotos:** no.
- **`content_verified`:** **no**.
- **Fuentes:**
  - [OSM nodo 5419378324](https://www.openstreetmap.org/node/5419378324)
  - Facebook (enlaces arriba)
  - [Restaurant Guru](https://restaurantguru.com/Pizzas-Don-Rigo-Tequisquiapan) (agregador: 4.3 con 469 reseñas; solo prueba que existe)
  - [Cybo – sucursal](https://es.cybo.com/MX-biz/pizzas-don-rigo-sucursal)

### 6. La Luna Terraza (azotea de K'puchinos)
- **Categoría / subcategoría:** gastronomia / Bar.
- **Dirección:** Independencia 7, Centro (azotea de K'puchinos).
- **Coordenadas:** las mismas de K'puchinos. Nodo OSM de K'puchinos: 20.522958, -99.891175.
- **Teléfono** [CONFLICTO]:
  - (414) 273 2482 y (414) 140 4086 ([kpuchinos.com.mx](https://www.kpuchinos.com.mx/la-luna-terraza/)).
  - 414 273 1046 (directorio 2025, "K' puchinos / la luna terraza").
- **Correo:** contacto@kpuchinos.com.mx.
- **Sitio web:** https://www.kpuchinos.com.mx/la-luna-terraza/ (reservas en kpuchinos.com.mx/reservaciones/).
- **Redes:** facebook.com/LaLunaterraza, instagram.com/lalunaterraza.
- **Horario** [CONFLICTO] [FRÁGIL] (la misma página da dos):
  - Versión A: lunes a miércoles cerrado; jueves a sábado karaoke de 17 a 24 h; domingos y festivos de 10 a 17 h.
  - Versión B: lunes a miércoles "temporalmente cerrado"; jueves y viernes de 18 a 24 h; sábado de 15 a 24 h; domingos y festivos de 10 a 18 h.
  - tequis.travel: brunch sábado y domingo de 10 a 14 h; DJ viernes y sábado en la noche.
- **Precio:** sin fuente.
- **Descripción corta:** Bar en la azotea de K'puchinos, con vista al centro, karaoke y brunch de domingo.
- **Descripción larga:** Azotea de K'puchinos con ambiente casual, música relajada y coctelería. Grupo Animal la recomienda por la vista al centro y para ver el atardecer. En 2026 tenía karaoke sin cover de jueves a sábado, happy hour de 18 a 20 h con cócteles a mitad de precio y brunch de domingo con mimosa de cortesía [FRÁGIL].
- **Fotos:** **no hay fotos útiles**. En su página solo hay carteles promocionales (brunch, karaoke) y logotipos, que revisé a ojo.
- **`content_verified`:** **no**, mientras su propia web tenga dos horarios distintos.
- **Fuentes:**
  - [kpuchinos.com.mx – La Luna Terraza](https://www.kpuchinos.com.mx/la-luna-terraza/)
  - [tequis.travel – La Luna Terraza](https://tequis.travel/la_luna_terraza_tequisquiapan/)
  - [Grupo Animal](https://grupoanimal.mx/gastronomia/recetas/donde-comer-en-tequisquiapan)
  - [Directorio 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf)

### 7. Wine Bar Freixenet (centro) — alta opcional
- **Categoría / subcategoría:** gastronomia / Wine Bar.
- **Dirección:** Av. Juárez Pte. 4C, Centro ([tequis.travel – Vinos](https://tequis.travel/vinedos_tequisquiapan/)).
- **Coordenadas:** 20.5228181, -99.8922251 (nodo OSM 6601353691, "Freixenet Wine Bar", `shop=wine`).
- **Teléfono:** 414 273 3995 (tequis.travel y directorio 2025 coinciden).
- **Sitio web:** ninguno propio. [salavive.mx](https://salavive.mx) solo habla del Wine Bar y del Food Garden de la finca de Ezequiel Montes; no menciona un local en el pueblo, así que **no está confirmado que lo opere Freixenet**.
- **Horario y precio:** sin fuente.
- **Descripción corta:** Bar de vinos en el centro, sobre Juárez Poniente.
- **Descripción larga:** No hay datos suficientes para una descripción larga sin inventar. Mejor dejar solo la corta.
- **Fotos:** no.
- **`content_verified`:** **no**.
- **Fuentes:** tequis.travel – Vinos; OSM; Directorio 2025.

### 8. Espacio Sense Spa (La Casona Tequisquiapan Hotel & Spa)
- **Nombre** [CONFLICTO]:
  - La web lo llama "Espacio Sense Spa", y en la misma página "nuestro spa Samsara".
  - El directorio 2025 trae "Agave Spa" y "Espacio Sense Solo Adultos" con el mismo teléfono.
  - La portada habla de "tratamientos a base de agave".
  - Sugiero **"Espacio Sense Spa – La Casona"**.
- **Categoría / subcategoría:** experiencias / Spa.
- **Dirección:** Antiguo Camino al Sauz 55, Col. Hacienda Grande, C.P. 76799 ([lacasonatequisquiapan.mx](https://lacasonatequisquiapan.mx/es)).
- **Coordenadas:** **sin pin**: la calle no está en OSM. Ubicar a mano; está en la zona de Hacienda Grande, al poniente del centro.
- **Teléfonos:** reservaciones (414) 273 5635; línea del encabezado (414) 273 0972 (la misma del directorio para el spa).
- **WhatsApp:** 414 226 2178 (enlace `api.whatsapp.com` de la web; el directorio lo da también para el spa).
- **Sitio web:** **https://lacasonatequisquiapan.mx/es/espacio-sense**. **No usar `lacasonatequisquiapan.com`**, que redirige a otro sitio.
- **Horario:** la web dice "Consulta disponibilidad de horarios". No hay fuente.
- **Precio:** sin fuente oficial. Pulsoh (agregador) vende un "Day Spa", lo que sugiere que también atiende a quien no es huésped; confirmarlo antes de decirlo.
- **Descripción corta:** Spa del hotel La Casona, con temazcal, sauna, jacuzzi y tratamientos a base de agave.
- **Descripción larga:** El spa está en el Espacio Sense, el área solo para adultos de La Casona Tequisquiapan Hotel & Spa. Tiene recepción y sala de estar, cabina de tratamiento individual y de pareja, sauna, temazcal y jacuzzi cerrado. Ofrece masajes individuales y en pareja, faciales y tratamientos a base de agave.
  - [CONFLICTO] La web habla de "más de 30 tratamientos" y tequis.travel de "más de 20".
- **Fotos** (de su web, revisadas; descarté `spacio-sense-pareja.jpg` porque parece foto de banco):
  - https://lacasonatequisquiapan.mx/images/sliders/gal-sense-slider/image-04.jpg (cabina de tratamiento)
  - https://lacasonatequisquiapan.mx/images/sliders/gal-sense-slider/image-01.jpg (jacuzzi en el jardín; 1.5 MB)
  - https://lacasonatequisquiapan.mx/images/espacio-sense/jacuzzi.jpg
- **`content_verified`:** **no**: no hay horario.
- **Nota:** el hotel en sí podría darse de alta como hospedaje (30 habitaciones, alberca climatizada, área familiar y área solo adultos). Antes hay que resolver qué es el "Hotel Museo La Casona" de Morelos 11 que ya tenemos.
- **Fuentes:**
  - [lacasonatequisquiapan.mx](https://lacasonatequisquiapan.mx/es)
  - [Espacio Sense](https://lacasonatequisquiapan.mx/es/espacio-sense)
  - [tequis.travel – Salud y Bienestar](https://tequis.travel/salud-y-belleza_tequisquiapan/)
  - [Directorio 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf)
  - [Pulsoh](https://pulsoh.mx/paquete/la-casona-espacio-sense-day-spa-tequisquiapan/)

### 9. Spa Studio 7 (Hotel San Carlos)
- **Categoría / subcategoría:** experiencias / Spa.
- **Dirección:** H. Colegio Militar 7, Col. Centro ([hotelsancarlostx.com](https://www.hotelsancarlostx.com/servicios/spa-studio-7.php)).
- **Coordenadas:** **pin aproximado** 20.5254, -99.8954 (calle Heroico Colegio Militar en OSM; el número no está mapeado).
- **Teléfonos:** (414) 273 6006 y (414) 273 4162 (web y directorio 2025 coinciden). Reservaciones: 800 832 2734.
- **Correo:** reservacionessancarlostx@outlook.com.
- **Sitio web:** https://www.hotelsancarlostx.com/servicios/spa-studio-7.php.
- **Horario** [FRÁGIL]: viernes y sábado de 11:00 a 20:00; domingo de 9:00 a 15:00; lunes a jueves, con reservación previa.
- **Precio:** no publica.
- **Descripción corta:** Spa del Hotel San Carlos, en el centro, con sauna, vapor y masajes.
- **Descripción larga:** El spa del Hotel San Carlos ofrece sauna o vapor, tina de hidromasaje y regadera. Tiene masajes sueco, hawaiano, relajante y de drenaje linfático, y reflexología podal, palmar y craneal. También hace envoltura de café, faciales (oro, nutriente, chocolate y chía) y exfoliación con sales aromáticas.
- **Foto** (de su web; revisada: cabina de masaje):
  - https://www.hotelsancarlostx.com/images/spa/jumbotron.jpg
- **`content_verified`:** **sí**: la web propia da teléfono, sitio y horario, y el directorio de Turismo confirma los teléfonos. Pero el pie de la web dice "2020": conviene llamar una vez para confirmar que el horario sigue igual [FRÁGIL].
- **Fuentes:**
  - [hotelsancarlostx.com – Spa Studio 7](https://www.hotelsancarlostx.com/servicios/spa-studio-7.php)
  - [Directorio 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf)
  - [tequis.travel – Salud y Bienestar](https://tequis.travel/salud-y-belleza_tequisquiapan/)

### 10. Balneario La Vega
- **Categoría / subcategoría:** experiencias / Balneario.
- **Dirección** [CONFLICTO menor]: "Paseo de la Vega S/N, La Magdalena, 76750" (su web y [adn40](https://www.adn40.mx/mexico/2026-08-25/que-hacer-el-dia-del-abuelo-2026-el-balneario-de-tequisquiapan-queretaro-abre-los-7-dias-de-la-semana-y-es-ideal-para-ir-con-toda-la-familia/)) frente a "Fray Junípero Serra S/N, Barrio de la Magdalena" (tequis.travel y directorio). Puede ser una esquina; usar la de su web.
- **Coordenadas:** **sin pin**: no está en OSM. Ubicar a mano en el Barrio de la Magdalena.
- **Teléfono:** 414 273 4534 (web, directorio y WhatsApp de tequis.travel coinciden).
- **WhatsApp:** 414 273 4534 según tequis.travel. **No usar** el de su web, "+52 (123) 456-7890", que es un número de relleno de la plantilla.
- **Sitio web:** https://balneariolavega.mx. Facebook: facebook.com/BalneariolaVegaOficial.
- **Horario** [FRÁGIL]: lunes a domingo de 8:00 a 18:00 (su web). adn40 (ago-2026) confirma que abre los 7 días.
- **Precio** [FRÁGIL]: en ago-2026, $100 general y $50 menores de 12 (adn40). → **budget**.
- **Descripción corta:** Balneario familiar en el Barrio de la Magdalena, con alberca olímpica y tobogán, abierto toda la semana.
- **Descripción larga:** Balneario a unos minutos de la plaza, en el Barrio de la Magdalena. Tiene alberca olímpica, tobogán gigante (tequis.travel) y chapoteadero, y permite acampar (adn40). Su web ofrece habitaciones, campamento y palapas o cabañas para grupos. Abre todos los días.
- **Foto** (de su web; revisada: jardín con palapas y albercas):
  - https://balneariolavega.mx/templates/plantilla_balneario/imagenes/fondo-banner.jpg
- **`content_verified`:** **sí**: su web confirma teléfono, sitio, dirección y horario. La web es muy básica (plantilla Joomla con WhatsApp de relleno); reconfirmar en un año.
- **Fuentes:**
  - [balneariolavega.mx](https://balneariolavega.mx)
  - [Contacto](https://balneariolavega.mx/index.php/contactenos)
  - [tequis.travel – Salud y Bienestar](https://tequis.travel/salud-y-belleza_tequisquiapan/)
  - [Directorio 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf)
  - [adn40, 25-ago-2026](https://www.adn40.mx/mexico/2026-08-25/que-hacer-el-dia-del-abuelo-2026-el-balneario-de-tequisquiapan-queretaro-abre-los-7-dias-de-la-semana-y-es-ideal-para-ir-con-toda-la-familia/)

### 11. Fantasía Acuática — alta opcional
- **Categoría / subcategoría:** experiencias / Balneario.
- **Dirección:** Carr. Tequisquiapan–Ezequiel Montes km 9, Fraccionamiento Residencial Real del Ciervo (tequis.travel y directorio).
- **Coordenadas:** **pin aproximado**: km 9 de la carretera 120, junto a Termas del Rey y El Oasis (km 10). Ubicar a mano.
- **Teléfono:** 414 219 6351 (tequis.travel y directorio coinciden).
- **Sitio web:** ninguno. Facebook: facebook.com/p/Fantasía-Acuatica-100063807512519/.
- **Horario y precio:** sin fuente.
- **Descripción corta:** Balneario con cuatro albercas y toboganes en la carretera a Ezequiel Montes.
- **Descripción larga:** Cuatro albercas, toboganes, hospedaje y área para acampar (tequis.travel). No hay más datos verificables.
- **Fotos:** no. **`content_verified`:** **no**.
- **Fuentes:** [tequis.travel – Salud y Bienestar](https://tequis.travel/salud-y-belleza_tequisquiapan/); [Directorio 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf).

### 12. Vinícola San Juanito (San Juanito Vitivinícola)
- **Categoría / subcategoría:** experiencias / Viñedo.
- **Dirección:** Antiguo Camino a San Juan S/N, San José de la Laja, **municipio de Tequisquiapan** ([sanjuanito.com.mx](https://www.sanjuanito.com.mx)).
- **Coordenadas:** 20.632366, -99.971685 (nodo OSM 13939055801). El nodo tiene una nota: "punto de llegada; verificar la entrada". Desde la plaza: 18.1 km / 24 min [CÁLCULO].
- **Teléfono:** (+52) 55 5004 7300 (lada de la CDMX; es el de su web y el de OSM).
- **WhatsApp:** 55 7947 6854 (enlace de su web).
- **Sitio web:** https://www.sanjuanito.com.mx. tequis.travel da `sanjuanito.carrd.co`, una página vieja que todavía responde.
- **Redes:** facebook.com/vinosanjuanito, instagram.com/vinosanjuanito (de OSM).
- **Horario** [FRÁGIL]: viernes, sábado y domingo, más festivos y vacaciones. Recorridos de 11:00 a 16:30, conforme se forman grupos; la cocina cierra a las 17:30.
- **Precio** [FRÁGIL] (página de visitas guiadas, nov-2026; precios por persona):
  - Recorrido: $190.
  - Cata de 3 vinos: $380; con pizza, $580.
  - Cata de 6 vinos: $580; con pizza, $760.
  - → **moderate**.
- **Duración** [CONFLICTO]: "aproximadamente 2 horas" en la página de visitas y "1 a 1.5 horas" en el formulario de reserva.
- **Descripción corta:** Viñedo boutique en San José de la Laja, con recorrido, catas y terraza con vista a la Peña de Bernal.
- **Descripción larga:** Nació en 2007 como una finca autosustentable en San José de la Laja, dentro del municipio de Tequisquiapan. El recorrido pasa por el campo, la bodega y la cava, y termina con cata de 3 o 6 vinos. Desde la terraza se ve la Peña de Bernal y ahí se puede comer (pizza y otros platos). Tiene hospedaje en "La Casona" del viñedo y organiza bodas y eventos. Según su web, tiene más de 100 medallas y es "la primer bodega en México certificada como 'Carbono Neutral'"; si se usa, atribuírselo al viñedo. No hace falta reservar para grupos pequeños.
- **Fotos** (de su web; revisadas: terraza de la bodega, cava de barricas y cosecha):
  - https://www.sanjuanito.com.mx/wp-content/uploads/2024/09/paisaje-bodega-scaled.webp
  - https://www.sanjuanito.com.mx/wp-content/uploads/2024/09/cava-vinos-scaled.webp
  - https://www.sanjuanito.com.mx/wp-content/uploads/2024/09/Uva-cosecha-scaled.webp
- **`content_verified`:** **sí**: su web confirma teléfono, sitio, dirección y horario.
- **No confundir** su "Hospedaje en la Casona" con La Casona Tequisquiapan Hotel & Spa.
- **Fuentes:**
  - [sanjuanito.com.mx](https://www.sanjuanito.com.mx)
  - [Visitas guiadas](https://www.sanjuanito.com.mx/visitas-guiadas/)
  - [OSM nodo 13939055801](https://www.openstreetmap.org/node/13939055801)
  - [tequis.travel – Vinos](https://tequis.travel/vinedos_tequisquiapan/)

### 13. Viña TX — alta opcional
- **Categoría / subcategoría:** experiencias / Viñedo. Funciona también como restaurante.
- **Dirección:** Fray Junípero Serra 33, Barrio de la Magdalena (tequis.travel). queretaro.travel da "Fray Junípero Serra 33, Centro, 76799".
- **Coordenadas:** **sin pin**. La calle de ese nombre que sale en OSM está en San José de la Laja y no es esta. Ubicar a mano en el Barrio de la Magdalena.
- **Teléfono:** 414 219 6736 (queretaro.travel, tequis.travel y directorio). El directorio da también 414 219 3210 para "Hotel Viña Tx".
- **Sitio web:** ninguno que funcione (`vinatx.info` no resuelve). Redes: instagram.com/vinatxoficial, facebook.com/vinatx.
- **Horario y precio:** sin fuente oficial.
- **Descripción corta:** Viñedo dentro del pueblo, con restaurante, cava y recorridos guiados.
- **Descripción larga:** Viñedo en el Barrio de la Magdalena, a unos minutos de la plaza, con restaurante, cava y producción artesanal de vino (tequis.travel). Ofrece recorridos guiados por el viñedo y la cava, parrilla, quesos regionales y actividades para niños (queretaro.travel). El directorio de Turismo lo lista también como hotel.
- **Fotos:** no. **`content_verified`:** **no**.
- **Fuentes:**
  - [queretaro.travel – Viña Tx](https://queretaro.travel/fichas/vina-tx/)
  - [tequis.travel – Vinos](https://tequis.travel/vinedos_tequisquiapan/)
  - [Directorio 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf)
  - [México Desconocido](https://www.mexicodesconocido.com.mx/vinedos-cerca-de-la-cdmx-para-celebrar-el-10-de-mayo.html) (menciona hospedaje y cata maridaje)

### 14. Mariscos: Don Camarón TX y Bucaneros Mariscos — alta opcional
Ninguno tiene web propia ni horario. Los dos existen según las fichas de tequis.travel.

**Don Camarón TX**
- **Categoría / subcategoría:** gastronomia / Mariscos.
- **Dirección:** esquina con Lago de Chapala, Carretera San Juan del Río–Xilitla, 76750 ([tequis.travel](https://tequis.travel/don-camaron-tx/)).
- **Coordenadas:** **sin pin** (no está en OSM).
- **Teléfono:** 442 205 5366.
- **Redes:** facebook.com/profile.php?id=61577471589280, instagram.com/doncamarontx.
- **Descripción corta:** Mariscos frescos en palapa, sobre la carretera 120, con estacionamiento gratis.
- **Descripción larga:** Restaurante de mariscos ("Del mar a tu mesa") con palapa y estacionamiento gratuito (tequis.travel). No hay más datos.
- **`content_verified`:** no.

**Bucaneros Mariscos**
- **Categoría / subcategoría:** gastronomia / Mariscos.
- **Dirección:** Federal 120 San Juan del Río–Xilitla 20, Vista Hermosa, Centro ([tequis.travel](https://tequis.travel/directorio/restaurantes/bucaneros-mariscos/)).
- **Coordenadas:** 20.51733, -99.90048 (del enlace de mapa de la ficha de tequis.travel; no está en OSM).
- **Teléfono** [CONFLICTO]: 442 391 0412 (tequis.travel) frente a 414 109 5136 (directorio 2025).
- **Redes:** instagram.com/bucaneros.mx, Facebook "Bucaneroos".
- **Descripción:** solo se sabe que es una marisquería; no hay más datos verificables.
- **`content_verified`:** no.

### 15. Plaza Santa Cecilia — alta pendiente de pin
- **Categoría / subcategoría:** turistico / Plaza.
- **Qué es:** una plaza pública del centro que el municipio usa para eventos:
  - Desfile de catrinas que terminaba en la plaza, con un pabellón del pan de muerto, en Día de Muertos de 2024 ([rotativo](https://rotativo.com.mx/locales/tequisquiapan/tequisquiapan-celebra-dia-muertos-con-festival-tejedores-luz_1522067_102.html), visto en el fragmento del buscador).
  - Actividades deportivas y musicales en "Enamórate en Tequis", feb-2026 ([Amanecer Querétaro](https://amanecerqro.com/enamorate-en-tequis-2026-genera-derrama-turistica-en-tequisquiapan/)).
  - Pantalla gigante para la inauguración del Mundial, jun-2026 ([Voz Imparcial](https://vozimparcial.com.mx/2026/06/11/tequisquiapan-vive-a-lo-grande-la-inauguracion-del-mundial-fifa-2026/315846/)).
  - Concurso "Yo canto, yo bailo", teatro y música en la Fiesta del Pueblo, ago-2026 ([Pensador Queretano](https://pensadorqueretano.com/tequisquiapan/arranca-con-mas-de-40-mil-personas-la-fiesta-del-pueblo-tequisquiapan-2026/)).
  - En 2014 se remodeló junto con el jardín principal: pisos, jardinería, mobiliario, fuente e iluminación ([Quadratín, 15-ene-2014](https://queretaro.quadratin.com.mx/Realizan-obras-de-restauracion-en-centro-de-Tequisquiapan/)).
- **Ubicación:** **no confirmada**.
  - No está en OSM.
  - Un fragmento del buscador de una nota de Líder Empresarial la sitúa "en la calle Juárez, colonia Centro"; el sitio me bloqueó (403) y no pude leer la nota.
  - Wanderboat (agregador) da "Independencia, Centro".
  - **No subir hasta que alguien ubique el pin.**
- **Ojo con los homónimos:** la "Plaza Santa Cecilia Oficial" de Facebook es la plaza del mariachi de **la ciudad de Querétaro**, y hay otra muy conocida en **Tijuana**.
- **Descripción corta (cuando se suba):** Plaza del centro donde el municipio organiza conciertos, ferias y transmisiones públicas.
- **Horario:** espacio público, sin horario publicado. **Fotos:** no. **`content_verified`:** no.

---

## Cambios a lugares que ya tenemos

### Termas del Rey: tiene sitio oficial
- **Sitio:** https://www.termasdelrey.com. Correo: gerencia@termasdelrey.com. Instagram: termasdelrey. Facebook: Termasdelreyparqueacuatico.
- **Horario** [FRÁGIL]: viernes, sábado y domingo de 9 a 18 h ([Contacto](https://www.termasdelrey.com/contacto)).
- **Precios en taquilla** [FRÁGIL]:
  - Adultos $199, niños $125.
  - Campamento: adultos $340, niños $290.
  - 15 % de descuento comprando en línea.
- **Ubicación según su web:** "a solo 10 minutos de Tequisquiapan, a 20 minutos de Bernal".
- **Atracciones:** toboganes, alberca de olas, chapoteaderos, fosa de clavados, lagos, minisúper, snack bar, campamento y zona VIP.
- **Teléfono** [CONFLICTO]:
  - Sitio: `tel:4422771525`.
  - BD y WhatsApp de tequis.travel: 441 277 1525.
  - Directorio 2025: 441 277 1542.
  - Probablemente sea 441 y el 442 del sitio, un error de dedo. Hay que confirmarlo antes de marcar `content_verified`.
- **Fotos** (de su web; revisadas):
  - https://irp.cdn-website.com/32521487/dms3rep/multi/opt/La+Isla-1920w.jpg
  - https://irp.cdn-website.com/32521487/dms3rep/multi/opt/camp-1920w.jpg
  - Host nuevo: `irp.cdn-website.com`.
- La web tiene restos de plantilla ("Esto es un párrafo…"), pero el dominio y los datos son del parque.

### Parque Acuático El Oasis: tiene sitio oficial
- **Sitio:** https://eloasistequisquiapan.com. Instagram: eloasistequisquiapan.
- **Horario** [FRÁGIL]: viernes a domingo de 9:00 a 18:00, más vacaciones y días festivos.
- **Precios** [FRÁGIL]:
  - Adultos $190; niños de 1.00 a 1.40 m y tercera edad, $150.
  - Campamento: adultos $250, niños $220.
  - Promoción de octubre: todos a $120.
  - Esto coincide con adn40, que ya está en la otra investigación.
- **Datos de su web:**
  - Más de 46 años de servicio.
  - Agua termal a 36 °C; alberca de olas y alberca olímpica; "Tierra de la Fantasía" con 3 cascadas, 5 toboganes, una gruta y un cenote; tirolesa.
  - 262 espacios de campamento.
  - Restaurante, minisúper y estacionamiento gratis.
  - Evento "Noche de leyendas" el 15-nov-2026.
- **Teléfono** [CONFLICTO]:
  - Sitio: 446 138 4112, 4113 y 4114; WhatsApp +52 1 446 138 4112.
  - WhatsApp en tequis.travel: 561 120 3065.
  - Directorio 2025: 442 613 4136.
  - Usar los del sitio.
- **`content_verified`:** **sí**, con los datos del sitio.
- **Fotos:** su portada solo tiene un cartel promocional. Habría que revisar su sección "Galería" antes de usar alguna.

### Mercado Guadalupano Municipal
- Se remodeló en 2026: nueva techumbre, iluminación y cuarto eléctrico ([Voz Imparcial, 22-may-2026](https://vozimparcial.com.mx/2026/05/22/remodelan-mercado-guadalupano-en-tequisquiapan/313620/); el proyecto se anunció en abril de 2025 en [AlertaQro](https://www.alertaqronoticias.com/2025/04/26/modernizaran-el-mercado-guadalupano-de-tequisquiapan/)). Se puede agregar a la descripción.
- La búsqueda "centro guadalupano" probablemente busca este mercado. Si queremos que lo encuentre, se puede agregar "Guadalupano" a sus etiquetas. El "Centro Guadalupano de Oración y Reflexión" es otra cosa (ver arriba).

### Lugares de la carga inicial sin ninguna evidencia (recomiendo desactivarlos)
Hoy reciben búsquedas reales. Si alguien va a la dirección y no encuentra nada, la guía pierde credibilidad.

| Lugar en la BD | Qué encontré | Qué haría |
|---|---|---|
| **La Viña Wine Bar** (Morelos 15) | Nada: ni web, ni redes, ni directorio de Turismo, ni OSM. | Desactivar. Las búsquedas de "bar de vinos" las cubren el Wine Bar Freixenet y Viña TX. |
| **La Terraza del Centro** (Portal Hidalgo 12, 414-273-1234) | Nada; el teléfono parece de relleno. | Desactivar. Lo que la gente busca como "la terraza" es La Luna Terraza (o la terraza de El Maravillas). |
| **Dulces Típicos La Abuelita** (Portal Guerrero 7) | Nada en Tequis. Lo más cercano es un Facebook de "Dulces artesanales mi abuelita" en Querétaro, sin dirección. | Desactivar, o dejarla con `content_verified = false` y quitarle los detalles inventados (lista de productos). |
| **Mariscos El Puerto** (Ezequiel Montes 45, 414-273-3456) | Nada en Tequis. Hay homónimos en la ciudad de Querétaro (`mariscoselpuerto.com.mx`, "Mariscos El Puerto Milenio"). | Desactivar. Si se quiere una marisquería, dar de alta Don Camarón TX o Bucaneros. |

---

## Descartados o sin confirmar

- **Puerto Marino:** solo aparece en Restaurant Guru (n.º 19 de sus marisquerías: 3.4 con 66 votos; "abierto hasta las 8 p.m.") y en Tripadvisor ("0.3 km del Parque La Pila", con 1 opinión).
  - No tiene ficha en tequis.travel, ni sale en el directorio de Turismo ni en OSM. No encontré redes.
  - Hay un "Res. Puerto Marino" en Puerto Morelos (Q. Roo) que no tiene nada que ver.
  - Probablemente exista, pero sin dirección ni teléfono no se puede dar de alta. Si alguien del equipo lo ubica en persona, vale la pena volver a revisarlo.
- **Aztec Spa / Spa Azteca / Azteca Spa:** no existe con ese nombre.
  - Viñedos Azteca no tiene spa, hotel, temazcal ni masajes según su sitio (revisado el 9-nov-2026). Tripadvisor lo llama "boutique hotel", pero su web no lo dice.
  - Hipótesis sin prueba: **Xantico Spa** (Xantico es una deidad mexica). El directorio de Turismo 2025 da su teléfono, 414 114 0271, y un directorio de masajes, la dirección Ezequiel Montes 142 int. 13, Centro, de hace más de dos años. Tiene Facebook (facebook.com/xanticospa), pero no sitio. No lo daría de alta sin más datos.
  - Tierra de Alonso (Colón) tiene una sección "Spa" en su web, pero está fuera del municipio.
- **Centro Guadalupano de Oración y Reflexión:** centro espiritual en la col. Balcones de Tequisquiapan (C.P. 76755) según Foursquare y su página de Facebook. No es turístico.
- **Otros spas** (sin sitio propio o con un solo directorio):
  - Yoot Masajes: Guillermo Prieto 3-A; tels. 55 3727 1001 / 55 3727 1020.
  - Mandarina Spa: 414 219 6328.
  - Saint George Hotel Spa & Temazcal: La Media Luna 83, según agregadores; sin web oficial.
  - Hacienda Tres Vidas Hotel & Spa (spa "Bugambilia"): Sor Juana Inés de la Cruz 74; sin web oficial; `haciendatresvidas.com` no responde.
  - Los "Massages" del Hotel Río: servicio para huéspedes, sin horario.
  - Temazcales de la ficha de tequis.travel (Tonatiuh Iquzayampa, Tres Marías, Tochicalli, Casa Gayatri).
- **Balneario San Joaquín:** carretera Tequisquiapan–Ezequiel Montes km 12, **municipio de Ezequiel Montes**; 442 287 4096; solo redes.
- **Balneario Fidel Velázquez:** frente a Los Rosales; WhatsApp 427 273 7756; solo redes.
- **Bares sin datos suficientes:**
  - La Barra del Despecho: Calle Nogal 2, Vista Hermosa; de jueves a sábado desde las 18:30; IG labarradeldespecho. La ficha de tequis.travel le pone el teléfono de Turismo.
  - Bar La Guayaba: dentro del Hotel Boutique La Granja, Morelos 12; tels. 414 219 6620 / 427 273 2004; sin horario.
  - Vika Gastrobar (414 273 3390) y Wings bar (414 219 7095): solo el directorio.
- **Dulcerías:** no encontré ninguna con fuente.
  - "Dulces Regionales Tequisquiapan" (Juárez Poniente) solo aparece en Tripadvisor, con reseñas que hablan de producto caducado.
  - La Charamusca (Ezequiel Montes 1) se fundó en 1982 como dulcería, pero hoy es panadería y café, y `lacharamusquita.mx` no resuelve.
  - La nota "Cincuenta años de dulces típicos en Tequisquiapan" (El Sol de San Juan del Río) me dio 403 y no sé de qué negocio habla.
  - Para "dulcerías", lo honesto es mandar a los mercados (Tequesquicalli y Telésforo Trejo).
- **Casa Suelem** (alta opcional, sin ficha arriba):
  - Dirección: C. Morelos Nte. 21, Centro. Teléfono: 414 104 1425 (tequis.travel y directorio).
  - Cocina mexicana contemporánea con influencia mediterránea, del chef Adán Flores (tequis.travel; Grupo Animal).
  - Redes: facebook.com/casasuelemtequis, instagram.com/casasuelem.
  - No tiene web ni horario, así que no lleva `content_verified`. Pin aproximado sobre Morelos Norte.
- **Viñedos que no recomiendo dar de alta ahora:**
  - **Puerta del Lobo** y **Vinaltura:** están en **El Marqués**, del lado de la ciudad de Querétaro. Puerta del Lobo queda en la carretera La Griega–El Lobo km 4 ([Food & Pleasure](https://foodandpleasure.com/vinedo-queretaro/); [Líder Empresarial](https://www.liderempresarial.com/puerta-del-lobo-bodega-del-ano-2025/)). No están "cerca de Tequis".
  - **Tierra de Alonso:** Carr. Querétaro–Tequisquiapan 706, Purísima de Cubos, **municipio de Colón**, junto a Finca VAI. Su web tiene recorrido de lunes a domingo de 10 a 17 h, a $245 [FRÁGIL] ([tierradealonso.com](https://www.tierradealonso.com/)). Sería el siguiente candidato si se quiere ampliar: tiene web propia y horario.
  - **Bodegas Vaivén:** Ezequiel Montes; su web dice "Sitio en construcción" ([bodegasvaiven.com](https://bodegasvaiven.com/)).
  - **Bodegas Norte B** (km 50 carr. 200, Tequisquiapan): `norteb.mx` solo muestra la pantalla de "¿Eres mayor de edad?" y no da datos.
  - **CR Vinos / Cartinto House**, **Viñedo San Martín**, **Vinícola San Patricio**, **Terra Salvador**, **Viñedo La Revuelta:** están en Tequisquiapan, pero solo tienen la ficha de tequis.travel y redes (detalle en `investigacion-guias-2026-11.md` y en [tequis.travel – Vinos](https://tequis.travel/vinedos_tequisquiapan/)).

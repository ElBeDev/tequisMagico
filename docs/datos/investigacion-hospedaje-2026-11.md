# Investigación de hospedaje en Tequisquiapan (búsquedas de "hoteles en Tequisquiapan")

Consultado el **10 de noviembre de 2026**. Responde al grupo de búsquedas más grande del autocompletado de Google (unas 50 variantes de "hoteles en Tequisquiapan…": con alberca, jacuzzi, pozas, aguas termales, spa, pet friendly, centro, baratos, de lujo, románticos, familiares, desayuno incluido, todo incluido, boutique, cabañas, viñedos con hospedaje).

Fuentes de partida:
- Fichas del directorio de **tequis.travel** (Turismo municipal): `/directorio/hoteles/…`, `/directorio/centro-de-convenciones/…` y las páginas de hotel tipo `/hotel_…_tequisquiapan/`. Se bajaron las 113 fichas de hospedaje y las 39 páginas de hotel.
- [Directorio Tequisquiapan 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), de Turismo (secciones HOTELES, SALONES DE REUNIONES y WEDDING DESTINATIONS). En adelante, **"PDF 2025"**. La tabla HOTELES trae una columna "PET FRIENDLY" y una "clasificación" en estrellas que pone Turismo.
- La **web propia** de cada hotel, cuando existe y funciona (fuente principal de atributos y precios).
- OpenStreetMap (Nominatim) para coordenadas y para saber en qué municipio cae cada pin.
- Lo que ya tenemos: `GET https://panel.tequismagico.com/api/places` (4 lugares con `category = "hospedaje"`).

## Marcas

- **[FRÁGIL]**: precio, horario o política que cambia. Redactar sin cifra o "en nov-2026 costaba…".
- **[CONFLICTO]**: las fuentes no coinciden. Se anotan todas.
- **[SIN CONFIRMAR]**: lo dice una sola fuente débil (sobre todo los iconos de amenidades de tequis.travel, ver aviso 3) o no se pudo comprobar.
- **[CÁLCULO]**: distancia **en línea recta** desde la Plaza Miguel Hidalgo (20.522531, -99.89164, la coordenada que ya usa el sitio) hasta el pin de la ficha de tequis.travel. No es distancia por calle; a pie suele ser 20-40 % más.
- **Pin tequis.travel**: coordenada del enlace "Obtener direcciones" de la ficha del directorio. No es de OSM: revisarla a mano en el panel antes de publicar. Cuando el lugar tiene nodo propio en OSM se da el nodo.
- **Ya en el sitio**: aparece hoy en `GET /api/places` con `category = "hospedaje"`.
- **Zona**: *centro* = a 1 km o menos de la plaza [CÁLCULO]; *afueras* = más de 1 km, con los km.

---

## Avisos antes de dar de alta

1. **Los 4 hoteles que ya tenemos no se sostienen** (detalle en "Cambios a lo que ya tenemos"):
   - **La Casa del Atrio** (Guerrero 2) **no existe en Tequis**: el único hotel con ese nombre está en el centro histórico de **Querétaro capital** ([lacasadelatrio.com](https://lacasadelatrio.com/en/), [queretaro.travel](https://queretaro.travel/lugares/the-casa-del-atrio-an-oasis-in-the-historic-center/?lang=en)). En la base tiene `is_verified = true` e `is_featured = true`: hoy la app le pone la insignia "Verificado" a un hotel que no existe. Recomiendo desactivarlo ya.
   - **Hotel Museo La Casona** (Morelos 11) y **Hotel Hidalgo** (Hidalgo 15): ningún rastro en tequis.travel, el PDF 2025, OSM ni el buscador (el único "Hotel Hidalgo" que aparece está en Aculco, Edomex). Desactivar.
   - **Hotel Posada Tequisquiapan** (Moctezuma 8, 414-273-0021) casi seguro es la **Posada Tequisquiapan** real, en **Moctezuma 6**, tel. **414 273 0010** (tequis.travel y PDF 2025). Corregir dirección y teléfono; su descripción ("alberca", "desayuno") no tiene fuente.
2. **Solo unos 20 de los ~80 hospedajes del directorio tienen una web propia que funcione** (y dos más fuera del municipio). Muchos dominios que da tequis.travel ya no existen o no son del hotel:
   - **No resuelven (dominio vencido):** posadasietesoles.com, amaluvillas.com.mx, hotellabaronesa.com, bungalowstequisquiapan.com, hotelcasablancatx.com.mx, posadadonjuan.com.mx, jardindeledentx.com, casageranios.com, chaletsmedialuna.com, tequisquiapanposadasanjavier.com, villastequisquiapan.com.mx, hotelesentequisquiapan.mx.
   - **No responden (tiempo de espera agotado, dos intentos):** realdesanjosehotel.com.mx, riotequisquiapan.octosite.net (el bueno del Río es hotelesriotequisquiapan.com), newalternative.com.mx (Cabañas Gil, y además es un sitio de terceros).
   - **Muertos o vacíos:** hotelmaridelfi.com (dominio estacionado, redirige a `/lander`), regalodelalma.com.mx ("This site is currently suspended"), hoteldelparquetequis.com.mx ("Sitio en construcción"), belloatardecerhotel.com (error de Wix "ConnectYourDomain"), larinconada.com.mx ("Próximo lanzamiento"), los dos `*.negocio.site` (Hotel El Pedregal y Hotel El Patio: 404, Google cerró esos sitios), salterraglamping.com/es/index.html (404; la portada sí funciona).
   - **No oficiales (no usar como fuente):** `amanecerranchero.mxhotel.site` y `hotelboutiquebugambiliasrooms.mxhotel.site` dicen en la propia página "Sitio web de información y de reservas - **no oficial**"; `suitesparaisotequis.com-hotel.com` y `hotelrealdetx.com-hotel.com` son del mismo tipo de portal (dan 403). Real de TX sí tiene web propia: hotelrealdetx.com.mx.
   - **Plantilla sin llenar:** hotelcasadevino.com.mx trae textos de relleno ("#54 uno de los mejores 100 hoteles en el noreste de EE. UU.", "Cuéntenos sobre su hotel"). Solo valen su teléfono, correo y calle.
   - **Redirecciones raras:** quintapatricia.com.mx redirige a **quintalosvela.com.mx** (mismo negocio con otro nombre: misma dirección, Nautha 7, y mismo teléfono, 414 273 0358). piedrasdesol.mx redirige a `bodegasvaiven.mx/solaris-morelos`, que da 404.
   - **El Relox:** relox.com.mx solo dice "Branded Residences · Plaza comercial · Jardín de eventos · COMING SOON · **Hotel El Relox COMING SOON**". El Relox **no aparece en la tabla HOTELES del PDF 2025** y un anuncio inmobiliario de ago-2026 vende departamentos de "Relox branded residences" ([inmuebles24](https://www.inmuebles24.com/propiedades/clasificado/veclapin-condos-for-sale-in-downtown-tequisquiapan-145696665.html)). Todo indica que el hotel histórico está cerrado por remodelación o reconversión [SIN CONFIRMAR]. No darlo de alta como hotel abierto aunque "hoteles relox tequisquiapan" se busque mucho.
3. **Los iconos de amenidades de tequis.travel no son fiables.** Varias páginas son copias de otra sin corregir:
   - [Hotel Casa Martha](https://tequis.travel/hotel_casa_martha_tequisquiapan/) tiene el texto, la dirección, los teléfonos y el Facebook del **Hotel St. George**.
   - [/hotel-bello-atardecer-2/](https://tequis.travel/hotel-bello-atardecer-2/) es en realidad la página del **Hotel La Querencia**.
   - La de [La Casona](https://tequis.travel/la-casona-tequisquiapan/) enlaza a la web de Bello Atardecer; la de [Hacienda Tres Vidas](https://tequis.travel/hotel_hacienda_tres_vidas_tequisquiapan/), al correo y Facebook de St. George; la de [Villa Bugambilia](https://tequis.travel/villa-bugambilia/), a las redes de Posada Tequisquiapan.
   - Casi todas muestran la misma fila de iconos (Alberca, TV, Restaurante, Wifi, Estacionamiento). Por eso aquí un atributo que **solo** sale en esos iconos va como [SIN CONFIRMAR]; lo que dice el **texto** de la página de tequis.travel sí se cita, atribuido.
4. **Tres pines del directorio caen en el municipio de Ezequiel Montes**, aunque Turismo de Tequis los lista: Cabañas **Cima Encantada** (La Higuera; la propia ficha de tequis.travel dice "76690 Ezequiel Montes"), **Hacienda Real La Nogalera** (Las Rosas) y **Piedras del Sol**. Van en la sección "Fuera del municipio". Hacienda Tres Vidas y la Casona de San Juanito sí están en el municipio (San José de la Laja, a ~14-15 km).
5. **Pet friendly: las fuentes de Turismo se contradicen.** La columna del PDF 2025 dice "No" para casi todos y "Pet friendly" solo para Cima Encantada, Quinta Patricia (hoy Los Vela), Villa Florencia, Regalo del Alma, La Querencia y Casa Pahpaqui (que en otra fila del mismo PDF sale "No"). En cambio tequis.travel marca "Pet friendly" a Del Parque, Tres Vidas y Quinto Elemento, que el PDF marca "No". Solo tres webs propias dicen claramente que aceptan mascotas: **Quinta Los Vela, Salterra Glamping y Villa Bugambilia**. Villa Antigua dice en sus políticas que **no**.
6. **"Aguas termales":** ningún hotel con web propia dice hoy "aguas termales". Lo que sí hay es **agua de manantial**: pozas privadas en Suites Poza Real y albercas interiores en cabañas de Quinta Los Vela. La Granja cuenta en su historia que nació como el "Hotel Baños La Granja", alimentado por los manantiales de Tequis. Hacienda Las Delicias dice (solo en tequis.travel) que sus albercas son de "agua natural" a 28-30 °C. Para la página de "aguas termales" conviene redactar "agua de manantial" y no prometer agua termal.
7. **Precios:** solo 9 webs publican algo de precio: tarifas de habitación (Quinta Tequisquiapan, Poza Real, Hacienda Tres Vidas, Matian, Casona de San Juanito), paquetes (Salterra) o solo cargos extra (Quinta Los Vela, La Plaza, Villa Bugambilia). Todos [FRÁGIL]. No hay forma de armar honestamente "hoteles baratos" con precios: las posadas de 2 estrellas del PDF no tienen web ni tarifa.
8. **Webs viejas:** la del Hotel San Carlos sigue mostrando el aviso de "cierre de operaciones" por COVID del 1-may-2020 y pie de 2020 (el hotel sí opera según el PDF 2025 y su spa salió en la investigación de negocios); Sol y Fiesta tiene © 2016; Poza Real, © 2020; Villa Antigua anuncia su spa y restaurante "a partir de oct./nov. 21". Sus datos pueden estar desactualizados.
9. **OpenStreetMap** solo tiene punto propio de 9 hospedajes del municipio: Hotel Río (nodo 4190907581), Hotel La Plaza (6601353692), Hotel Boutique La Granja (6611206334), Hotel Del Parque (4190975516), Hotel Sol y Fiesta (4190975520), Posada del Virrey (6611206347), Posada San Francisco (6611206348), Hotel Villa 12 (14353222836) y Hotel Real de TX (vía 702935179). Además sale una **Posada Campestre Santa Fe** (nodo 10888596796, Cerrada de Tablajeros) que no está en ningún directorio. El resto, pin de tequis.travel.
10. **Fotos:** las webs propias que funcionan tienen galería, pero **no revisé las fotos una por una**. Antes de usar cualquiera hay que verlas a ojo (que sean del hotel y no de banco ni del pueblo) y registrarlas en `docs/datos/creditos-imagenes.md`. Hosts nuevos que habría que agregar a `OPTIMIZED_HOSTS`: `img.guruhotel.dev` (Matian), `imagedelivery.net` (Salterra), `images.squarespace-cdn.com` (La Toscana, Villa Bugambilia), `static.wixstatic.com` (Cima Encantada), `img-fl.nccdn.net` (La Granja), `webbox.imgix.net` (Río, ya citado en la investigación de negocios).
11. **Booking, Expedia, Hotels.com, Tripadvisor y Airbnb** solo se usaron para comprobar que un lugar existe (Villa Florencia, El Relox); ningún dato de esta ficha viene de ahí salvo donde se dice explícitamente.

---

## Tabla resumen

"Web" = web propia verificada (dirección o teléfono coinciden con tequis.travel / PDF 2025). Los atributos de la tabla salen de la web propia salvo que diga "(tt)" = solo el texto de tequis.travel, o "(PDF)" = solo el PDF 2025. Zona con distancia en línea recta [CÁLCULO].

### A. Con web propia que funciona (municipio de Tequisquiapan)

| Nombre | Tipo | Zona | Web | Atributos clave | Precio [FRÁGIL] | Fotos propias | Ya en el sitio |
|---|---|---|---|---|---|---|---|
| Hotel Río Tequisquiapan | Hotel | Centro, 0.4 km | [hotelesriotequisquiapan.com](https://www.hotelesriotequisquiapan.com) | albercas, masajes, restaurante Río 33, eventos; no mascotas (PDF) | no publica | sí (galería) | no |
| Hotel San Carlos | Hotel | Centro, 0.5 km | [hotelsancarlostx.com](https://www.hotelsancarlostx.com) | alberca, Spa Studio 7 (sauna/vapor, tina de hidromasaje), gimnasio, restaurante; desayuno continental en tarifa rack | no publica | dudosas (galería del pueblo) | no |
| Matian Hotel Boutique | Hotel boutique | Centro, 0.6 km | [hotelmatian.com](https://hotelmatian.com/es) | alberca y jardín, Oliva Spa (tina de hidromasaje), restaurante y bar, estacionamiento, eventos | desde MXN 1,873.74/noche (motor de reservas) | sí | no |
| Hotel La Plaza de Tequisquiapan | Hotel | Centro, 0.05 km | [hotelplazatequis.com](https://hotelplazatequis.com) | en la plaza; jardín y alberca, habitaciones con jacuzzi, 2 restaurantes y cantina, estacionamiento | solo extra: huésped adicional $400 | sí | no |
| Hotel Quinta Tequisquiapan | Hotel | Centro, 0.4 km | [quintatequisquiapan.mx](http://quintatequisquiapan.mx) | alberca al aire libre, suite con jacuzzi privado, restaurante, estacionamiento, salón de eventos; paquetes con desayuno | desde $1,850 (estándar) a $4,850 (master) | sí (galería) | no |
| Suites Poza Real | Hotel (suites) | Centro, 0.1 km | [pozareal.com.mx](https://www.pozareal.com.mx) | **poza privada de manantial** en 4 master suites, alberca con chapoteadero, estacionamiento cubierto gratis, cocineta | $1,434 / $2,151 / $2,868 por noche (2 pers.) | pocas (2 imágenes) | no |
| Quinta Los Vela (antes Cabañas Quinta Patricia) | Cabañas | Centro, 0.5 km | [quintalosvela.com.mx](https://quintalosvela.com.mx) | 9 cabañas, **100 % pet friendly**, cabañas de 8-11 pers. con **alberca interior de manantial**, asador, jardín de bodas | extras: mascota $150, llenado de terma $1,800 | sí | no |
| Hotel Boutique La Granja | Hotel boutique | Centro, 0.2 km | [hotelboutiquelagranja.com](http://hotelboutiquelagranja.com) | alberca, jacuzzi, sala de masajes, bar y restaurante, estacionamiento; casona de ~1910 | no publica | sí | no |
| Arantia Hotel Boutique | Hotel boutique | Centro, 1.0 km | [hotelboutiquearantia.com.mx](https://hotelboutiquearantia.com.mx) | piscina con cascada, cancha de tenis, jardín de eventos, estacionamiento 150 autos | no publica | sí (galería) | no |
| Hotel Sol y Fiesta | Hotel | Centro, 0.5 km | [hotelsolyfiesta.com.mx](http://hotelsolyfiesta.com.mx) | 23 hab., pool bar, temazcal y vapor, masajes (web de 2016) | no publica | pocas | no |
| La Casona Tequisquiapan Hotel & Spa | Hotel y spa | Afueras, 1.5 km (Hacienda Grande) | [lacasonatequisquiapan.mx](https://lacasonatequisquiapan.mx/es) | 30 hab., alberca climatizada y chapoteadero, **área solo adultos**, spa con sauna, **temazcal** y jacuzzi, restaurante, eventos | no publica | sí (galería) | no (el "Hotel Museo La Casona" de la base es otro, sin fuente) |
| Hotel St. George Spa & Temazcal | Hotel | Afueras, 1.3 km (Barrio de San Juan) | [hotelstgeorge.mx](http://hotelstgeorge.mx) | alberca, spa y **temazcal**, jacuzzi en el spa, restaurante Mimbre | no publica | sí | no |
| Hotel Real de TX | Hotel | Centro, 0.7 km | [hotelrealdetx.com.mx](https://www.hotelrealdetx.com.mx) | habitaciones de 2 a 7 pers., "dos villas familiares"; (tt) 2 albercas climatizadas, algunas con tina de hidromasaje | no publica | sin revisar | no |
| La Toscana de Tequisquiapan | Hotel boutique | Afueras, 1.6 km (La Charretera) | [hoteltoscanadetequisquiapan.com](https://www.hoteltoscanadetequisquiapan.com) | 8 hab., jardín, fogata incluida, masajes en la habitación, **frente a Vinícola Tequisquiapan** (catas) | catas $650 y $1,300 p/p | sí | no |
| Villa Bugambilia | Villa/cabaña privada | Afueras, ~12 min (Las Corraletas) | [villabugambilia.mx](https://www.villabugambilia.mx) | hasta 10 pers., **alberca climatizada privada** (caldera $800/día), **acepta perros**, accesible, fogatero, masajes aparte | extras publicados | sí | no |
| Salterra Glamping | Glamping | Afueras, 7 km (La Trinidad) | [salterraglamping.com](https://www.salterraglamping.com) | tiendas safari; Deluxe con **jacuzzi privado** en terraza; alberca todo el año, sauna, restaurante y bar, **pet friendly** ($990) | paquetes desde $5,775 | sí | no |
| Hotel Villa Antigua | Hotel y centro de convenciones | Afueras, 8 km (carr. SJR-Tequis km 11.5) | [villa-antigua.com.mx](http://www.villa-antigua.com.mx) | 61 hab., 3 piscinas de agua templada, jacuzzi al aire libre, spa, gym, tenis, bodas; **no acepta mascotas** | no publica | sí (galería) | no |
| Hotel & Spa Hacienda Tres Vidas | Hotel hacienda y spa | Afueras, 14 km (San José de la Laja) | [haciendatresvidas.com.mx](https://haciendatresvidas.com.mx) | spa con hidroterapia, alberca al aire libre, juegos infantiles, restaurante, bodas; suites con bañera de hidromasaje | $1,999 a $2,949 | sí | no |
| La Casona de San Juanito (Vinícola San Juanito) | **Viñedo con hospedaje** | Afueras, 15 km (San José de la Laja) | [sanjuanito.com.mx/la-casona](https://www.sanjuanito.com.mx/la-casona/) | 5 hab.; incluye **desayuno, comida y cena**, recorrido y cata de 3 vinos | $3,900 y $4,500 por noche (2 pers.) | sí | no (el viñedo sí, como experiencia) |
| Rancho Los Venados | Cabañas en reserva cinegética | Afueras, 13 km (Fuentezuelas, carr. 200 km 42) | [rancholosvenados.com](http://rancholosvenados.com) | cabañas con chimenea y terraza, **comidas tipo bufete incluidas**, safari, spa | no publica | sin revisar | no |

### B. Solo con fuentes de Turismo (sin web propia que funcione)

| Nombre | Tipo | Zona | Web | Atributos clave (fuente) | Precio | Fotos propias | Ya en el sitio |
|---|---|---|---|---|---|---|---|
| Hotel Villa Florencia / Gran Hotel Firenze | Hotel | Centro, 0.5 km | no | (PDF) 5 estrellas, pet friendly; salón de eventos | — | no | no |
| Hacienda Las Delicias | Hotel | Centro, 0.2 km | no | (tt) 2 albercas al aire libre y **2 techadas**, agua natural 28-30 °C, restaurante | — | no | no |
| Hotel Real de San José | Hotel | Afueras, 1.4 km | caída | (tt) albercas climatizadas, spa, gimnasio, restaurante, transporte local gratis | — | no | no |
| Hotel Regalo del Alma | Hotel boutique | Afueras, 1.4 km | suspendida | (tt) alberca climatizada, pádel, capilla, jardín de eventos, sin restaurante; (PDF) pet friendly | — | no | no |
| Hotel La Querencia | Hotel | Barrio de San Juan, sin pin ni distancia | no | (tt) 57 hab., albercas, desayunos, **"Somos Pet Friendly"** (PDF coincide), salón y paquetes de boda | — | no | no |
| Hotel del Parque | Hotel | Centro, 0.5 km | en construcción | (tt) alberca, masajes, restaurante de mariscos; pet friendly [CONFLICTO con PDF] | — | no | no |
| Hotel Maridelfi | Hotel | Centro, 0.1 km | estacionada | (tt) alberca climatizada, restaurante; (PDF) "en remodelación" | — | no | no |
| La Rinconada | Hotel y casas | Centro, 0.5 km | "próximo lanzamiento" | (tt) 18 hab. + 20 casas con cocina, alberca climatizada, tenis | — | no | no |
| La Casa Roja | Casa-hotel | Camino al Sauz, Hacienda Grande; sin pin | no (motor de reservas de terceros) | (tt) 5 hab., alberca climatizada, palapa con asador, billar | — | no | no |
| Posada del Virrey | Posada | Centro, 0.2 km | no | (tt) alberca, estacionamiento, café y pan dulce incluidos | — | no | no |
| Posada Tequisquiapan | Posada | Centro, 0.3 km | no | (tt) 20 hab., estacionamiento, jardín | — | no | **sí, con datos erróneos** ("Hotel Posada Tequisquiapan") |
| Otros ~45 (posadas, hoteles pequeños, cabañas) | — | — | no | solo nombre, dirección y teléfono | — | no | no |

---

## Fichas: hospedajes con web propia (municipio de Tequisquiapan)

Orden: primero el centro, luego las afueras por distancia. "tt" = tequis.travel. Las búsquedas que responde cada uno están al final de cada ficha, abreviadas (lista completa en "Qué páginas se pueden armar").

### 1. Hotel Río Tequisquiapan
- **Tipo:** hotel. PDF 2025: 5 estrellas.
- **Dirección:** C. Niños Héroes 33, Centro, 76750 ([web](https://www.hotelesriotequisquiapan.com/contact-us.html), [tt](https://tequis.travel/hotel_rio_tequisquiapan/), PDF 2025).
- **Zona:** centro, 0.4 km [CÁLCULO].
- **Coordenadas:** OSM nodo [4190907581](https://www.openstreetmap.org/node/4190907581): 20.520358, -99.895082.
- **Teléfonos:** 414 273 0015 y 414 273 0047 (web, tt, PDF). WhatsApp 414 140 5602 (solo tt). Correo tequisquiapan@hotelesrio.com.mx.
- **Web:** https://www.hotelesriotequisquiapan.com (portada en inglés; versión en español en `/es/index.html`). **No** usar `hotelrio.com.mx` (Río Malecón, Vallarta) ni `riotequisquiapan.octosite.net` (el que da la ficha de tt; no responde).
- **Habitaciones:** tipos Room 1 King, 2 Double Beds, Junior Room Familiar (1 king + 2 individuales), Studio 2 Rooms King, Junior Room 1 King ([rooms](https://www.hotelesriotequisquiapan.com/rooms.html)). Número [CONFLICTO]: la página de tt dice "53 habitaciones" y el listado de [hoteles de tt](https://tequis.travel/hoteles_tequisquiapan/), "23".
- **Atributos (web):** albercas ("relax in the pools and garden", [restaurants](https://www.hotelesriotequisquiapan.com/restaurants.html)); masajes ([services](https://www.hotelesriotequisquiapan.com/services.html)); restaurante Río 33 y Snack Bar El 33; desayuno, comida y cena, menú infantil; colección de arte; eventos en espacios abiertos y salones. Estacionamiento: sin dato en la web. Mascotas: "No" (PDF 2025). Jacuzzi, alberca climatizada, desayuno incluido: sin dato.
- **Precio:** no publica (motor de reservas).
- **Fotos propias:** sí, [galería](https://www.hotelesriotequisquiapan.com/gallery.html) (no revisada una por una). Host `webbox.imgix.net`.
- **Responde:** "hoteles rio tequisquiapan", "tequisquiapan hotel rio", centro, con alberca, familiares.

### 2. Hotel San Carlos (también "Hotel Hecthorny San Carlos")
- **Tipo:** hotel. PDF 2025: 4 estrellas. tt tiene dos páginas para el mismo hotel ([San Carlos](https://tequis.travel/hotel_san_carlos_tequisquiapan/) y [Hectorny San Carlos](https://tequis.travel/hotel_hectorny_san_carlos_tequisquiapan/)).
- **Dirección:** Heroico Colegio Militar 7, Centro (web, tt, PDF).
- **Zona:** centro, 0.5 km [CÁLCULO].
- **Coordenadas:** pin tt 20.52582, -99.89434 ([ficha](https://tequis.travel/directorio/centro-de-convenciones/hotel-san-carlos/)); la otra ficha da 20.52669, -99.89444 [CONFLICTO, ~100 m].
- **Teléfonos:** 414 273 6006 (web, tt, PDF) y 414 273 4162 (web, según la investigación de negocios). WhatsApp: wa.me/4142263215 en una página de tt y wa.me/4142736006 en la otra [CONFLICTO].
- **Web:** https://www.hotelsancarlostx.com. Ojo: sigue mostrando el aviso de "CIERRE DE OPERACIONES hasta nuevo aviso" del 1-may-2020 y pie de 2020; el hotel opera según el PDF 2025. Datos de la web posiblemente viejos.
- **Habitaciones** [CONFLICTO]: 54 (16 sencillas, 23 dobles, 11 Jr. Suites, 3 Master) según la web y una página de tt; 53 (17/22/10/4) según la otra página de tt.
- **Atributos (web):** [alberca](https://www.hotelsancarlostx.com/servicios/alberca.php); [Spa Studio 7](https://www.hotelsancarlostx.com/servicios/spa-studio-7.php) con sauna o vapor, tina de hidromasaje y masajes (vie-sáb 11-20 h, dom 9-15 h, lun-jue con reservación) [FRÁGIL]; gimnasio; restaurante La Spezia; sala de negocios (10 personas) y salón de eventos; las fichas de habitación dicen "**Desayuno Continental (Tarifa rack)**". tt agrega cargadores para autos eléctricos. Mascotas: "No" (PDF).
- **Precio:** no publica tarifas de hospedaje (solo la carta del restaurante).
- **Fotos propias:** dudosas. La "Galería" de la portada es de lugares del pueblo. La foto del spa (`/images/spa/jumbotron.jpg`) ya se revisó en la investigación de negocios.
- **Responde:** centro, con alberca, con spa, con jacuzzi (en el spa), desayuno incluido (con reserva: solo tarifa rack).

### 3. Matian Hotel Boutique
- **Tipo:** hotel boutique. PDF 2025: 5 estrellas.
- **Dirección:** Av. Centenario Norte 27, Centro, 76750 (tt, PDF; la web no da calle).
- **Zona:** centro, 0.6 km [CÁLCULO]; tt dice "a 3 calles del centro".
- **Coordenadas:** pin tt 20.524498, -99.8965607 ([ficha](https://tequis.travel/directorio/hoteles/hotel-boutique-matian/)). Otra ficha de tt ([wellness](https://tequis.travel/directorio/turismo-wellness/hotel-matian/)) da 20.52472, -99.89393 [CONFLICTO, ~250 m]. Revisar a mano.
- **Teléfonos:** 414 688 0416 (web, tt; también WhatsApp) y 414 118 5891 (tt, PDF). Correo recepcionhotelmatian@gmail.com (tt).
- **Web:** https://hotelmatian.com/es (sitio y motor de reservas de GuruHotel).
- **Habitaciones:** 14 (tt). Categorías en la web: Deluxe 1 King (2 pers.), Deluxe Superior (3), Deluxe Superior Doble (4), Suite Familiar (5), con amenidades AgaveSpa.
- **Atributos (web):** alberca y jardín (las habitaciones Superior "con vistas a la alberca y al jardín"); [Oliva Spa](https://hotelmatian.com/es/nuestro-spa) con masajes y "Tina de Hidromasaje · 60 min"; [restaurante y bar](https://hotelmatian.com/es/restaurante) (desayunos, almuerzos, cenas); estacionamiento; [eventos](https://hotelmatian.com/es/eventos) (cenas románticas, cumpleaños, corporativos, bodas). Mascotas: "No" (PDF).
- **Precio** [FRÁGIL]: el [motor de reservas](https://hotelmatian.com/es/availability), con las fechas que pone por defecto el 10-nov-2026, mostraba **desde MXN 1,873.74 por noche** (precio tachado MXN 3,072) hasta ~MXN 3,266, con cancelación gratis hasta 72 h antes.
- **Fotos propias:** sí (servidas desde `img.guruhotel.dev`).
- **Responde:** boutique, centro, con alberca, con spa, de lujo / 5 estrellas (PDF), románticos (cenas románticas, también en el PDF), familiares (suite familiar).

### 4. Hotel La Plaza de Tequisquiapan
- **Tipo:** hotel colonial. [CONFLICTO] PDF 2025: 4 estrellas; tt: 3 estrellas.
- **Dirección:** Andador Benito Juárez Pte. 10, Centro, 76750; estacionamiento en Calle 20 de Noviembre 3 ([web](https://hotelplazatequis.com)). "En la plaza principal, a un costado de la Parroquia" (tt).
- **Zona:** centro, 0.05 km.
- **Coordenadas:** OSM nodo [6601353692](https://www.openstreetmap.org/node/6601353692): 20.522836, -99.892028.
- **Teléfonos:** 414 273 0005 y 414 273 0056 (web, tt), 800 543 9779 (web); WhatsApp 414 140 4094 (web, tt). tt también da 414 273 0289. Correo hola@hotelplazatequis.com.
- **Web:** https://hotelplazatequis.com
- **Habitaciones:** 17; para 2 (matrimonial, queen, king o **king con jacuzzi**) y para 4 (dos matrimoniales **con jacuzzi y cocineta**, con sofá o solo con jacuzzi) ([habitaciones](https://hotelplazatequis.com/habitaciones-en-tequisquiapan/)).
- **Atributos (web):** jardín y alberca; jacuzzi en algunas habitaciones; restaurantes **La Valentina** (mexicana; desayuno buffet los domingos con piano) y **Las Brasas** (cortes, segunda planta con vista a la plaza), y **La Cantina** (bar, hasta las 2 h los fines de semana); recepción 24 h; estacionamiento; aire acondicionado; cunas a petición. Check-in 15:00, check-out 12:00. Mascotas: "No" (PDF).
- **Precio** [FRÁGIL]: no publica tarifa base; huésped adicional $400 MXN por noche.
- **Fotos propias:** sí (servidas desde su dominio).
- **Responde:** centro, "hoteles en el centro de tequisquiapan con alberca", con jacuzzi privado, con estacionamiento, colonial.

### 5. Hotel Quinta Tequisquiapan
- **Tipo:** hotel (21 habitaciones tipo suite; abrió en 1997). PDF 2025: 5 estrellas.
- **Dirección:** Nautha 21, Centro, 76750 (tt, PDF). tt: "a 150 mts del primer cuadro".
- **Zona:** centro, 0.4 km.
- **Coordenadas:** pin tt 20.524924, -99.888960 ([ficha](https://tequis.travel/directorio/hoteles/hotel-quinta-tequisquiapan/)).
- **Teléfonos:** 414 273 2255 (web, tt); 414 273 2256 (tt, PDF); 414 121 9499 y 427 141 2726 (PDF). Correos reservaciones@quintatequisquiapan.com (web) y amorales@quintatequisquiapan.mx (tt).
- **Web:** http://quintatequisquiapan.mx (el `.com` sirve el mismo sitio).
- **Atributos (web):** alberca al aire libre con bar; **Suite con Jacuzzi** ("jacuzzi privado junto a la ventana", "nuestra suite más romántica"); restaurante de autor; jardín; recepción 24 h; estacionamiento privado; salón de eventos y convenciones (hasta 70 personas en auditorio); rituales de spa reservables (galería). **Alberca** [CONFLICTO]: la web dice "alberca al aire libre"; tt dice "alberca climatizada". Mascotas: la web no dice; PDF "No". La portada dice "rodeado de jardín y viñedos", pero está en el centro y no menciona viñedo propio.
- **Precio** [FRÁGIL] ([portada](http://quintatequisquiapan.mx), [habitaciones](http://quintatequisquiapan.mx/habitaciones/), [paquetes](http://quintatequisquiapan.mx/paquetes/)):
  - Estándar (4 pers., 24 m²) desde $1,850; Junior Suite (2 pers., 34 m²) desde $2,150; Suite con Jacuzzi (2 pers., 42 m²) desde $2,650; Master Suite (hasta 6, 58 m²) desde $4,850 MXN.
  - La tarifa incluye 2 huéspedes; cada adicional, $450 por noche.
  - Paquetes "todos incluyen hospedaje y desayuno", desde $3,275 MXN por persona en ocupación doble.
- **Fotos propias:** sí, [galería](http://quintatequisquiapan.mx/galeria/).
- **Responde:** centro, con alberca en el centro, con jacuzzi privado, románticos, desayuno incluido (en paquetes), precios.

### 6. Suites Poza Real
- **Tipo:** hotel de suites de estilo colonial, 15 habitaciones. No aparece en la tabla HOTELES del PDF 2025, pero sí en tt y en [adn40, 18-oct-2026](https://www.adn40.mx/tiempo-libre/2026-10-18/cuanto-cuesta-dormir-en-el-hotel-a-50-pasos-de-la-plaza-de-este-pueblo-magico-de-queretaro-el-lugar-tiene-poza-privada-de-agua-de-manantial-en-la-habitacion/).
- **Dirección:** Manuel Mateos 5, Centro, 76750 ([web](https://www.pozareal.com.mx), [tt](https://tequis.travel/directorio/hoteles/suites-poza-real/)). "A 50 pasos de la plaza principal" (web).
- **Zona:** centro, 0.1 km.
- **Coordenadas:** pin tt 20.521769, -99.891517.
- **Teléfonos:** 414 273 0454 y 414 273 2223 (web; el primero coincide con tt). Correo informacion@pozareal.com.mx.
- **Web:** https://www.pozareal.com.mx (pie "© 2020").
- **Atributos (web):** "algunas cuentan con exclusivo servicio de **Poza Privada**, pequeña alberca que se llena con **agua de manantial**"; según adn40 son **4 master suites**. Piscina con chapoteadero; estacionamiento cubierto gratuito (un auto por habitación, con acomodador) ([tarifas](https://www.pozareal.com.mx/Tarifas/)). adn40 agrega cocineta, refrigerador y desayunador en todas las suites. Mascotas: sin dato.
- **Precio** [FRÁGIL] (web, sin fecha de vigencia; adn40 los repite en oct-2026): por noche para 2 personas en plan europeo: estándar **$1,434**; Junior Suite / Suite #21 **$2,151**; **Master Suite con poza privada $2,868**; persona adicional $239 (desde 4 años). Anticipo del 30 %.
- **Fotos propias:** la web casi no tiene (2 imágenes en la galería).
- **Responde:** "hoteles en tequisquiapan con pozas privadas", "hotel tequisquiapan con pozas", aguas termales (como "agua de manantial"), centro, alberca en el centro, estacionamiento, precios (la tarifa publicada más baja del inventario).

### 7. Quinta Los Vela (antes "Cabañas Quinta Patricia")
- **Nombre** [CONFLICTO]: tt y el PDF 2025 la llaman "Cabañas Quinta Patricia"; `quintapatricia.com.mx` redirige a quintalosvela.com.mx, que se presenta como "Quinta Los Vela" (su `og:title` todavía dice "Cabañas y Jardines Quinta Patricia"; el reglamento dice "Cabañas Los Vela"). Misma dirección y teléfono: es el mismo negocio.
- **Tipo:** cabañas con jardín de eventos. PDF 2025: 4 estrellas, "Pet Friendly".
- **Dirección:** Nautha 7, Centro, 76750 (web, tt, PDF). [CONFLICTO menor] La web dice "junto al río y a tres cuadras de la plaza principal" y también "A 10 minutos del centro".
- **Zona:** centro, 0.5 km.
- **Coordenadas:** pin tt 20.525452, -99.887943.
- **Teléfonos:** (414) 273 0358 (web, tt, PDF). WhatsApp 414 280 7941 (enlace de la web).
- **Web:** https://quintalosvela.com.mx
- **Cabañas** [CONFLICTO]: la página de [cabañas](https://quintalosvela.com.mx/cabanas/) enumera 8 (Cabaña 1, 2, 3, 4, 6, 7, 8 y 9); la de [jardines](https://quintalosvela.com.mx/jardines/) habla de "las 9 cabañas". Capacidad de pareja a 11 personas; asador en cada una.
- **Atributos (web):**
  - "Ahora nuestras cabañas de 8, 9 y 11 personas cuentan con **alberca interior con agua de manantial**… Su llenado requiere costo extra" ("Relájate en nuestras termas").
  - **"100% Pet Friendly"**, con [reglamento de mascotas](https://quintalosvela.com.mx/politicas-y-reglamentos/) (correa en áreas comunes, no a la alberca; $150 por mascota desde 01/09/23; guardería de mascotas).
  - El [reglamento](https://quintalosvela.com.mx/politicas-y-reglamentos/) tiene apartados de "Alberca" y "Estacionamiento" (no dice si la alberca es común o de cada cabaña).
  - Jardines para bodas y eventos de 10 a 400 personas; para bodas rentan las cabañas todo el fin de semana.
  - Check-out 13:00.
- **Precio** [FRÁGIL]: no publica la tarifa de las cabañas. Extras (en el orden de la página): persona extra $300, invitados $200, mascota $150, llenado de terma $1,800, chimenea $300, hora extra $400.
- **Fotos propias:** sí (servidas desde su dominio) y tour virtual.
- **Responde:** cabañas con alberca privada, cabañas/hoteles con pozas privadas, alberca techada (alberca interior), pet friendly, centro, aguas termales (como manantial), familiares y grupos, bodas.

### 8. Hotel Boutique La Granja
- **Tipo:** hotel boutique, 14 suites (tt). PDF 2025: 5 estrellas.
- **Dirección** [CONFLICTO]: Morelos 12, Centro (página de tt, ficha de convenciones, PDF); "Calle Francisco I. Madero" (otra ficha de tt). La web: "a 200 metros de la Plaza Miguel Hidalgo… a un costado del Callejón del Piojo".
- **Zona:** centro, 0.2 km.
- **Coordenadas** [CONFLICTO]: OSM nodo [6611206334](https://www.openstreetmap.org/node/6611206334) (20.524424, -99.892547, sobre Calle Moctezuma); pin tt de Morelos 12: 20.521875, -99.892259 (~280 m al sur). Revisar a mano.
- **Teléfonos:** 414 219 6620, 414 273 2004, 414 273 6378, 414 273 3234 (tt). WhatsApp 414 219 6620 (enlace de la web). Correo hotellagranja@hotmail.com (tt).
- **Web:** http://hotelboutiquelagranja.com (hecha con un editor; algunas etiquetas de plantilla sin llenar, pero el contenido es del hotel).
- **Atributos (web):** lista de servicios: suites, bar, restaurante, **jacuzzi**, sala de masajes, estacionamiento, patio "Los Olivos", **alberca**. [Suites](http://hotelboutiquelagranja.com/suites): Petite (queen), Junior Suite (king), Suite Doble (2 matrimoniales), Suite Familiar Doña Licha y Máster Suite Chopo (con tina); alojan 2 adultos, o 2 adultos y 2 niños menores de 12. tt agrega "Incluye 1 hora de jacuzzi por suite", salón para 20-30 personas y el Bar La Guayaba.
- **Historia (web, [acerca de nosotros](http://hotelboutiquelagranja.com/acerca-de-nosotros)):** el abuelo Eugenio Mendoza Perusquía inició el primer "Hotel Baños La Granja", alimentado por los manantiales de Tequis; reabrió en 2010 en un edificio de ~100 años.
- **Precio:** no publica.
- **Fotos propias:** sí (host `img-fl.nccdn.net`).
- **Responde:** boutique, centro, con jacuzzi, con alberca, 5 estrellas (PDF).
- **Nota:** en la base, Morelos 12 es "La Fabbrica Italiana" (ver la investigación de negocios).

### 9. Arantia Hotel Boutique
- **Tipo:** hotel boutique y jardín de eventos. PDF 2025: 5 estrellas.
- **Dirección:** Fray Junípero Serra 62, La Magdalena, 76750 (web, tt, PDF).
- **Zona:** centro (límite), 1.0 km.
- **Coordenadas:** pin tt 20.528268, -99.884788.
- **Teléfonos:** 414 219 6636 y 414 280 6408 (web, tt). Correo arantiahotelboutique@gmail.com (tt).
- **Web:** https://hotelboutiquearantia.com.mx (pide verificación anti-bots; leída con un navegador). La ficha de tt "[Hotel con jardín y terrazas](https://tequis.travel/directorio/tours/hotel-con-jardin-y-terrazas/)" es el mismo lugar.
- **Atributos (web, [portada](https://hotelboutiquearantia.com.mx/) y [nosotros](https://hotelboutiquearantia.com.mx/nosotros/)):** "1 piscina con cascada espectacular", cancha de tenis, 2,500 m² de áreas verdes, 3 terrazas, jardín de eventos, área de restaurante-bar, estacionamiento para 150 autos. Spa y restaurante-bar aparecen como "próximas instalaciones". Número de habitaciones, mascotas y desayuno: sin dato.
- **Precio:** no publica.
- **Fotos propias:** sí, [galería](https://hotelboutiquearantia.com.mx/galeria/).
- **Responde:** boutique, con alberca, eventos/bodas, 5 estrellas (PDF).

### 10. Hotel Sol y Fiesta (Sol y Fiesta Villas)
- **Tipo:** hotel, 23 habitaciones (web). PDF 2025: 4 estrellas.
- **Dirección:** Av. Heroico Colegio Militar 4, Centro (tt, PDF).
- **Zona:** centro, 0.5 km. Coordenadas: OSM nodo [4190975520](https://www.openstreetmap.org/node/4190975520): 20.526840, -99.892271.
- **Teléfonos:** 414 273 1504 (web, tt, PDF), 800 714 0223 (web). Correos: reservaciones@solyfiestavillas.com (web), hotelsolyfiesta@msn.com (tt).
- **Web:** http://hotelsolyfiesta.com.mx (© 2016; muy básica).
- **Atributos (web):** restaurante, bar y **pool bar**; **temazcal y cuarto de vapor**; masajes; vuelos en globo; paquetes para grupos; "5 minutos caminando del centro".
- **Precio:** no publica. **Fotos propias:** pocas.
- **Responde:** centro, temazcal/spa (con cautela, web vieja).

### 11. La Casona Tequisquiapan Hotel & Spa
- **Tipo:** hotel y spa, 30 habitaciones. PDF 2025: 4 estrellas; tt: 3 estrellas [CONFLICTO].
- **Dirección:** Antiguo Camino al Sauz 55, Col. Hacienda Grande, 76799 (web, tt, PDF).
- **Zona:** afueras, 1.5 km (Hacienda Grande).
- **Coordenadas** [CONFLICTO]: pin tt 20.536320, -99.893411 ([ficha](https://tequis.travel/directorio/hoteles/la-casona-2/)); la ficha de wellness de tt da 20.51107, -99.88645, al sur del centro. Revisar a mano.
- **Teléfonos:** reservaciones (414) 273 5635; (414) 273 0972 (encabezado); WhatsApp 414 226 2178 (web; el PDF da ese mismo número).
- **Web:** https://lacasonatequisquiapan.mx/es. **No** `lacasonatequisquiapan.com` (redirige a otro sitio; tt todavía da ese).
- **Habitaciones ([web](https://lacasonatequisquiapan.mx/es/habitaciones)):** Standard Doble (hasta 4, vista a la alberca), Standard Suite (hasta 4, tina), **Superior Suite** king en el área "Espacio Sense" **solo adultos** (6 habitaciones), **Deluxe Suite** (única master, terraza, **baño con jacuzzi**).
- **Atributos (web, [instalaciones](https://lacasonatequisquiapan.mx/es/instalaciones)):** **alberca climatizada** y chapoteadero; jardines; restaurante a la carta con desayuno buffet sábados y domingos; sports bar, terraza y cava; room service; fire pit; préstamo de bicicletas; WiFi; estacionamiento privado; habitaciones libres de humo. **Espacio Sense** (solo adultos): spa con sauna, **temazcal** y **jacuzzi** cerrado, más de 20 o 30 tratamientos [CONFLICTO entre páginas]. Paquete romántico con cena de 3 tiempos en la cava. Salón de conferencias [CONFLICTO]: 150 personas (web) / 50 (tt). Mascotas: "No" (PDF).
- **Precio:** no publica.
- **Fotos propias:** sí, [galería](https://lacasonatequisquiapan.mx/es/galeria) (las del spa ya se revisaron en la investigación de negocios).
- **Responde:** con spa, temazcal, alberca climatizada, románticos / solo adultos, familiares, con jacuzzi privado (Deluxe Suite), "tequisquiapan hacienda grande".

### 12. Hotel St. George Spa & Temazcal
- **Tipo:** hotel de suites, 29 suites y master suites (tt). PDF 2025: 5 estrellas.
- **Dirección:** Paseo (Calzada) de la Media Luna 83, Barrio de San Juan (web, tt, PDF). tt: "a tan sólo 10 minutos del centro".
- **Zona:** afueras, 1.3 km. Pin tt 20.512855, -99.885387.
- **Teléfonos** [CONFLICTO]: la web da **+52 414 190 6470** y 442 786 9986; tt y PDF dan **414 109 6470** (tt agrega 442 786 9986 y 414 690 4556). Uno de los dos tiene un dígito cambiado; llamar antes de publicar. Correo reservaciones@hotelstgeorge.mx.
- **Web:** http://hotelstgeorge.mx
- **Atributos (web):** suites Superior, Estándar Doble y Sencilla, Master Family; terraza con vista a la **alberca**; [spa y temazcal](http://hotelstgeorge.mx/spa/) (masajes, envolventes, manicura, "masaje con **jacuzzi** de hidromasaje"; temazcal con reservación previa); [restaurante Mimbre](http://hotelstgeorge.mx/mimbre/). Mascotas: "No" (PDF).
- **Precio:** no publica ("pregunta por precios").
- **Fotos propias:** sí (servidas desde su dominio).
- **Responde:** con spa, temazcal, con alberca, de lujo / 5 estrellas (PDF).

### 13. Hotel Real de TX
- **Tipo:** hotel con villas, 17 habitaciones (tt). [CONFLICTO] tt: 3 estrellas; PDF: 4 estrellas.
- **Dirección:** Potrero Salitrillo 89, Col. Fundadores de Hacienda Grande (tt, PDF). La web solo dice "en el corazón de Tequisquiapan".
- **Zona:** centro, 0.7 km; tt: "15 mins del centro caminando".
- **Coordenadas:** OSM vía [702935179](https://www.openstreetmap.org/way/702935179): 20.526432, -99.897135.
- **Teléfonos:** 414 273 0084 y 414 273 0502 (tt); WhatsApp **442 391 8820** (web, tt, PDF).
- **Web:** https://www.hotelrealdetx.com.mx (pide verificación anti-bots; leída con un navegador). **No** `hotelrealdetx.com-hotel.com` (portal de terceros).
- **Atributos:** web: habitaciones para 2, 4, 5 o 7 personas y "dos hermosas villas familiares". Solo tt ([página](https://tequis.travel/hotel_real_de_tx_tequisquiapan/)): dos albercas climatizadas, algunas habitaciones con tina de hidromasaje, bar, restaurante, estacionamiento subterráneo, áreas infantiles, billar y ping pong [SIN CONFIRMAR en la web].
- **Precio:** no publica. **Fotos propias:** no revisadas.
- **Responde:** familiares, villas; alberca climatizada y jacuzzi solo con la fuente de tt.

### 14. La Toscana de Tequisquiapan
- **Tipo:** hotel pequeño (8 habitaciones), junto a una vinícola. PDF 2025: 4 estrellas; tt: "Hotel boutique".
- **Dirección:** Av. Coahuila Mz 27 Lt 13, La Charretera, 76750 (web, tt, PDF). "Nos encontramos enfrente de Vinícola Tequisquiapan" ([ubicación](https://www.hoteltoscanadetequisquiapan.com/location)).
- **Zona:** afueras, 1.6 km; tt: "a solo 7 minutos en auto del centro".
- **Coordenadas:** pin tt 20.531025, -99.903615.
- **Teléfonos** [CONFLICTO]: web **(22) 2200-2320** (el PDF lo da en una fila como 222 200 2320) frente a **55 6126 2983** (tt y la otra fila del PDF; también es el de Vinícola Tequisquiapan). Correo lic_alexflores01@hotmail.com (tt).
- **Web:** https://www.hoteltoscanadetequisquiapan.com
- **Habitaciones:** 3 sencillas (2 pers.), 2 dobles (4) y 3 triples con terraza (6) (tt); la web lista Sencilla, Doble y Triple.
- **Atributos (web):** jardín; **fogata con bombones incluida en la reservación**; masajes en la habitación ([menú spa](https://www.hoteltoscanadetequisquiapan.com/spa-latoscana)); [paquetes para grupos](https://www.hoteltoscanadetequisquiapan.com/paquetes-hotel) (pizzas en horno de piedra, desayuno express, desayuno en el restaurante de la vinícola, serenatas); eventos (cumpleaños, aniversarios, bodas, graduaciones). **No menciona alberca** (tt tampoco). Mascotas: hay un enlace "¿Viajas con tu mascota?" sin política visible [SIN CONFIRMAR]; PDF "No".
- **Vinícola Tequisquiapan** ([web del hotel](https://www.hoteltoscanadetequisquiapan.com/vincola-tequisquiapan)): fundada en 2010, vinos artesanales; cata de 3 copas con tabla, $650 por persona; cata maridaje con comida, $1,300 por persona; mínimo 10 personas [FRÁGIL].
- **Precio de hospedaje:** no publicado en texto (motor de reservas).
- **Fotos propias:** sí (Squarespace).
- **Responde:** viñedos con hospedaje (frente a una vinícola), románticos, boutique.

### 15. Villa Bugambilia
- **Tipo:** villa / cabaña privada (se renta completa).
- **Dirección:** Calle Lomas Verdes 372, Col. Las Corraletas, 76750 (web, tt). "A 12 min del centro" (web).
- **Zona:** afueras; sin pin (tt no da coordenadas).
- **Teléfono y WhatsApp:** 414 100 4888 (web, tt). Correo villabugambiliatx@gmail.com.
- **Web:** https://www.villabugambilia.mx (desde ago-2023). Reservas por Airbnb.
- **Atributos (web):** hasta 10 personas; **alberca climatizada** (la caldera cuesta $800 por día); WiFi; estacionamiento para 6 vehículos; asador; fogatero (leña $250); **accesibilidad e inclusión**; masajes y paquetes para parejas (se contratan aparte); área para acampar; palapa. **Mascotas: "Claro, son bienvenidos. Aceptamos únicamente perros. Un perrito sin costo. Perrito extra $200."** Check-in 15:00, check-out 12:00. Paquete de 2 noches con visita a una vinícola y cena en el centro.
- **Precio** [FRÁGIL]: no publica la noche (está en Airbnb); extras arriba.
- **Fotos propias:** sí (Squarespace).
- **Responde:** "villas en tequisquiapan con alberca", "casas con alberca", "airbnb con alberca privada", cabañas con alberca privada, pet friendly, familiares, románticos (paquetes para parejas), accesible.

### 16. Salterra Glamping
- **Tipo:** glamping (tiendas tipo safari). PDF 2025: 4 estrellas ("Hotel Salterra Gampling").
- **Dirección:** Carlo Coccioli 7, Ejido La Trinidad, 76774 (web, tt). tt: "cerca de la carretera federal 200 (Querétaro-Tequisquiapan), a 10 minutos del centro".
- **Zona:** afueras, 7 km. Pin tt 20.539398, -99.956972.
- **Teléfonos** [CONFLICTO]: **442 169 3408** (web y PDF) frente a 446 139 5177 (tt).
- **Web:** https://www.salterraglamping.com (la URL que da tt, `/es/index.html`, da 404).
- **Alojamiento ([tiendas](https://www.salterraglamping.com/nuestras-tiendas), [preguntas](https://www.salterraglamping.com/preguntas-frecuentes)):** Tienda Standard (king, baño privado, WiFi Starlink); **Tienda Deluxe con jacuzzi privado en la terraza** y proyector HD; Tipi para parejas.
- **Atributos (web):** alberca todo el año (la FAQ la llama "alberca natural"); sauna con costo extra; restaurante y bar; estacionamiento privado gratuito; cenas privadas junto al estanque, clases de pizza, yoga, masajes, cuencos tibetanos, bicicletas. **Pet friendly: $990 MXN por estancia**, con casita para la mascota y vacunas al día. Niños de todas las edades (desde 4 años pagan como adulto). Check-in 15:00, check-out 12:00. Eventos: bodas civiles, tornabodas, cumpleaños, corporativos (hasta 150 personas).
- **Precio** [FRÁGIL] ([paquetes](https://www.salterraglamping.com/paquetes-y-decoraciones-exclusivas)): paquetes desde $5,775 MXN (con experiencia de pizza y dos desayunos), $7,949, $8,639 (noche en Deluxe con jacuzzi, sauna, masajes y desayunos), $9,219 y $10,580. La tarifa sola de la tienda no está en texto.
- **Fotos propias:** sí (host `imagedelivery.net`).
- **Responde:** glamping, jacuzzi privado, románticos, pet friendly, con alberca, bodas.

### 17. Hotel Villa Antigua & Centro de Convenciones
- **Tipo:** hotel y centro de convenciones, 61 habitaciones. PDF 2025: 5 estrellas.
- **Dirección:** Carretera San Juan del Río–Tequisquiapan km 11.5, C.P. 76770 ([web](http://www.villa-antigua.com.mx/reservaciones.html), tt). [CONFLICTO menor] Una fila del PDF dice "Carretera 200 San Juan del Río-Ezequiel Montes Km 11.5". El pin cae en San Nicolás, municipio de Tequisquiapan (OSM).
- **Zona:** afueras, 8 km, camino a San Juan del Río.
- **Coordenadas:** pin tt 20.468935, -99.946052.
- **Teléfonos:** reservaciones 414 273 3382; 414 273 3322, 414 273 3344 y 414 219 6716 (eventos). Correos reservaciones@, ventas@ y eventos@villa-antigua.com.mx.
- **Web:** http://www.villa-antigua.com.mx
- **Atributos (web, [hotel](http://www.villa-antigua.com.mx/hotel-en-tequisquiapan-queretaro.html)):** **3 piscinas con agua templada** (una semiolímpica); **jacuzzi al aire libre**; habitaciones estándar, Superiores de 2 pisos y **Suites con Jacuzzi**; spa y salón de belleza; gimnasio; cancha de tenis; cafetería (7-22 h, vie y sáb hasta 23 h) y restaurante bar [FRÁGIL; la página dice "a partir de oct./nov. 21"]; estacionamiento con videovigilancia; elevador; 500 m² de eventos (hasta 500 personas), 4 salas de juntas; bodas. [Políticas](http://www.villa-antigua.com.mx/politicas.html): **"Mascotas: Disculpa, no se aceptan mascotas"**; niños de 11 años en adelante pagan como adulto.
- **Precio:** no publica.
- **Fotos propias:** sí, [galería](http://www.villa-antigua.com.mx/galeria.html).
- **Responde:** con alberca, alberca climatizada (agua templada), jacuzzi privado, con spa, de lujo / 5 estrellas, familiares, bodas.

### 18. Hotel & Spa Hacienda Tres Vidas
- **Tipo:** hotel hacienda con spa, 23 habitaciones (tt). PDF 2025: 5 estrellas.
- **Dirección:** Sor Juana Inés de la Cruz 74, San José de la Laja (tt, PDF; ambos ponen C.P. 76190). El pin cae en el municipio de Tequisquiapan (OSM).
- **Zona:** afueras, 14 km (San José de la Laja, al norponiente).
- **Coordenadas:** pin tt 20.623376, -99.972877.
- **Teléfonos:** (52) 414 291 8000 (web, tt, PDF); WhatsApp 55 6784 6960 (web); tt también da 552 219 7538. Correo ventas@haciendatresvidas.com.mx.
- **Web:** https://haciendatresvidas.com.mx (**.com.mx**; la investigación de negocios probó `haciendatresvidas.com`, que no responde).
- **Atributos (web):** spa con hidroterapia y masajes; alberca al aire libre; zona de juegos para niños; restaurante; salón y terraza para bodas, XV años y conferencias. Suites con **bañera de hidromasaje** (Junior) y con **bañera de hidromasaje y sauna privado** (Master). tt agrega temazcal, vuelo en globo y cabalgata. Mascotas [CONFLICTO]: icono "Pet frendly" en tt; "No" en el PDF.
- **Precio** [FRÁGIL] (la web no aclara si es por noche ni si incluye impuestos): Habitación Royal de Lujo (1 king) $1,999; Superior Royal (2 matrimoniales) $2,499; Junior Suite $2,599; Suite Master $2,949 MXN. Masajes desde $1,000.
- **Fotos propias:** sí (en la portada).
- **Responde:** con spa, "hacienda tequis", jacuzzi privado, familiares, bodas, 5 estrellas.

### 19. La Casona de San Juanito (Vinícola San Juanito) — viñedo con hospedaje
- **Tipo:** casona de hospedaje dentro del viñedo, 5 habitaciones. PDF 2025: "Casona San Juanito", 5 estrellas; en WEDDING DESTINATIONS: "Habitaciones, Jardín, Viñedo".
- **Dirección:** Antiguo Camino a San Juan S/N, San José de la Laja, municipio de Tequisquiapan ([web](https://www.sanjuanito.com.mx/la-casona/)).
- **Zona:** afueras, ~15 km (18 km por carretera según la investigación de negocios).
- **Coordenadas:** OSM nodo [13939055801](https://www.openstreetmap.org/node/13939055801) (el del viñedo): 20.632366, -99.971685.
- **Teléfonos:** 55 5004 7300 (web, tt, PDF); WhatsApp 55 7947 6854 (investigación de negocios). Correo reservaciones@sanjuanito.com.mx (tt).
- **Web:** https://www.sanjuanito.com.mx/la-casona/ (pide verificación anti-bots; leída con un navegador).
- **Atributos (web):** "cuenta con 5 habitaciones"; el precio **incluye las comidas de cada noche (desayuno, comida y cena), recorrido guiado y cata de 3 vinos**. La FAQ dice "hotel boutique con pocas habitaciones" y que se puede rentar la casona completa (3 o 4 parejas). Alberca, jacuzzi, mascotas: sin dato.
- **Precio** [FRÁGIL]: por noche en ocupación doble, recámara principal **$4,500** y las demás **$3,900**; anticipo del 50 %. El botón "¡Quiero hospedarme!" lleva a Airbnb.
- **Fotos propias:** sí (las del viñedo ya se revisaron en la investigación de negocios; las de la casona no).
- **Responde:** "viñedos en tequisquiapan con hospedaje", "hoteles en tequisquiapan viñedos", "casa viñedos tequisquiapan", **todo incluido** (comidas incluidas), desayuno incluido, románticos, boutique.
- **Ya en el sitio:** el viñedo sí ("Vinícola San Juanito", experiencias); el hospedaje, no.

### 20. Rancho Los Venados (reserva cinegética)
- **Tipo:** cabañas en una reserva con fauna (bisontes, venados, antílopes, cebras…). PDF 2025: 4 estrellas.
- **Dirección:** Carretera Querétaro–Tequisquiapan (estatal 200) km 42, Fuentezuelas, 76780 ([web](http://rancholosvenados.com); la web pone "Santiago de Querétaro" como ciudad). PDF: "Carretera 200 Tequisquiapan-Querétaro, adelante de la Delegación La Laja". El pin de tt cae en el municipio de Tequisquiapan (OSM).
- **Zona:** afueras, 13 km. Pin tt 20.572112, -100.002842.
- **Teléfonos:** 442 156 5767 (web, tt; también WhatsApp) y 442 229 0600 (tt, PDF). Correos info.rancholosvenados@gmail.com y desarrollo@rancholosvenados.com (tt).
- **Web:** http://rancholosvenados.com (pide verificación anti-bots; leída con un navegador).
- **Atributos (web):** cabañas con vista a la Peña de Bernal, chimenea de gas y terraza privada, decoración safari, **"Comida tipo bufete incluida"** (desayuno, comida y cena), "servicios de spa disponibles". Safari, cabalgatas y caminatas se ofrecen aparte. tt ([página](https://tequis.travel/rancho-los-venados-reserva-cinegetica/)) agrega 5 cabañas, alberca, asador, salón de juegos, cabañas grandes para grupos escolares y campismo, rapel, tirolesa, muro de escalada y tiro con arco. Mascotas: "No" (PDF).
- **Precio:** no publica (cotización por formulario).
- **Fotos propias:** no revisadas.
- **Responde:** **todo incluido** (comidas incluidas), cabañas, familiares, con alberca (solo tt).

---

## Fichas: hospedajes solo con fuentes de Turismo (sin web propia que funcione)

Ninguno de estos tiene una fuente propia; **ninguno debería llevar `content_verified`**. Fuente: ficha del directorio de tt (`https://tequis.travel/directorio/hoteles/<nombre>/`) y PDF 2025, salvo que se diga otra cosa. Coordenadas: pin de tt, salvo nodo OSM. Lo que va entre comillas es el texto de la página de tt; los iconos de amenidades no se toman en cuenta (aviso 3). Ninguno está ya en el sitio, salvo Posada Tequisquiapan.

### B1. Los que más valdría la pena confirmar (responden búsquedas concretas)

- **Hotel Villa Florencia** (también "Gran Hotel Firenze", "Villa Firenze", "Hotel Firence": mismo teléfono y calle).
  - Nautha 6, Centro. [CONFLICTO] La ficha de [hoteles](https://tequis.travel/directorio/hoteles/hotel-villa-florencia/) dice "Calle Ezequiel Montes"; la de [convenciones](https://tequis.travel/directorio/centro-de-convenciones/villa-firenze/) y el PDF, Nautha 6. Centro, 0.5 km. Pin 20.526501, -99.888716.
  - Tel. 414 273 3029. Correo villaflorencia_tx@hotmail.com. Facebook villaflorenciatx, Instagram villaflorencia_tx. Sin web.
  - PDF 2025: 5 estrellas, **"Pet Friendly"**; también como salón de eventos y "wedding destination" (coordinación, mobiliario, música, banquete, hotel).
  - Agregadores (Expedia, Hotels.com) lo describen con alberca techada y al aire libre, dos tinas de hidromasaje, restaurante y **sin mascotas** [CONFLICTO con el PDF]. No valen como fuente; solo confirman que opera.
  - Responde: "tequisquiapan hotel villa florencia" (búsqueda por nombre). Alta posible sin `content_verified` y sin atributos.
- **Hacienda Las Delicias / Hotel Las Delicias.**
  - 5 de Mayo 1, Centro. Centro, 0.2 km. Pin 20.521028, -99.891806.
  - Tel. 414 273 0017 y 414 273 0180 ([página de tt](https://tequis.travel/hacienda_las_delicias_tequisquiapan/)). Correo delicias_tx@hotmail.com. Facebook LasDeliciastx. PDF 2025: 4 estrellas.
  - tt: "**Albercas al aire libre y Techadas (2 y 2) Agua Natural con temperatura de 28 a 30 °C**. Estacionamiento propio 300 mts. Áreas verdes totalmente arboladas".
  - Es la **única fuente de "alberca techada"** en el centro. Llamar para confirmar antes de usarlo en esa página.
- **Hotel Real de San José.**
  - Av. Juárez Oriente 113, Barrio de la Magdalena. Afueras, 1.4 km. Pin 20.517670, -99.879036.
  - Tel. 414 273 1057 y 414 231 2543. Correo hotelrealdesanjose@hotmail.com. Web realdesanjosehotel.com.mx: no responde.
  - [Página de tt](https://tequis.travel/hotel_real_de_san_jose_tequisquiapan/): "Hotel de clase especial. Tres tipos de suites disponibles. **Albercas climatizadas, spa, restaurante, gimnasio, estacionamiento y transporte local gratuito 24h**. A solo 5 minutos del centro"; área infantil y alberca infantil, salón y jardín de eventos. 22 habitaciones. PDF 2025: 5 estrellas. El PDF lista también un "Salón de eventos Las Hadas" con el mismo teléfono.
- **Hotel Regalo del Alma.**
  - [CONFLICTO de calle] Molino de la Paloma 11, Hacienda Grande (tt hoteles) / De la Virgen 11 (tt convenciones, PDF salones). Afueras, 1.4 km. Pin 20.534875, -99.893155.
  - Tel. 414 273 3200. Correo recepcion@regalodelalma.com.mx. Web regalodelalma.com.mx **suspendida**.
  - [Página de tt](https://tequis.travel/hotel_regalo_del_alma_tequisquiapan/): "jardín de eventos, cancha de pádel, **alberca climatizada**, área recreativa… **Por el momento no contamos con servicio de restaurante**"; salón de juegos y karaoke, capilla. 11 habitaciones.
  - PDF 2025: 5 estrellas, "Petfrienly". [CONFLICTO] En WEDDING DESTINATIONS dice "Jardín de eventos, hotel, **restaurante**, coordinación, capilla".
- **Hotel La Querencia.**
  - Av. Juárez Oriente s/n, Los Tepetates, Barrio de San Juan. Sin pin. La página está en [/hotel-bello-atardecer-2/](https://tequis.travel/hotel-bello-atardecer-2/) (URL equivocada de tt).
  - Tel. [CONFLICTO] 414 106 2170 y 414 690 6001, WhatsApp 414 105 5206 (tt); el PDF le pone 442 186 5514, que es el de La Casa Roja. Instagram hotellaquerenciatx; Facebook "Hotel La Querencia". Sin web.
  - tt: "57 habitaciones… **Somos Pet Friendly**… Salón para banquetes… Terraza bar… Ruedo… Estacionamiento gratis, Jardines, **Albercas**, Desayunos".
  - PDF 2025: 4 estrellas, "Petfrienly" (**las dos fuentes de Turismo coinciden en pet friendly**). En WEDDING DESTINATIONS: paquetes de boda con decoración, catering, alojamiento y transporte.
  - Es el mejor candidato sin web para "pet friendly".
- **Hotel del Parque.**
  - Cerrada de Camelinas 1, Centro. Centro, 0.5 km. OSM nodo [4190975516](https://www.openstreetmap.org/node/4190975516): 20.526166, -99.890490.
  - Tel. 414 273 0938, 414 105 5346 y 414 273 2939. Correo hoteldelparquetequis@gmail.com. Web "sitio en construcción".
  - [Página de tt](https://tequis.travel/hotel_del_parque_tequisquiapan/): "más de 30 años… a 4 minutos del centro… Alberca, tinas de baño, restaurante" (restaurante-bar de mariscos). Habitaciones [CONFLICTO]: 29 (página) / 22 (listado). Mascotas [CONFLICTO]: icono "Pet Friendly" en tt; "No" en el PDF.
- **La Rinconada.**
  - Juárez Oriente 19, La Magdalena. Centro, 0.5 km. Pin 20.521076, -99.887155.
  - Tel. 414 273 0459 y 55 5524 4008. Correo franciscovaldes@larinconada.com.mx. Web "Próximo lanzamiento".
  - [Página de tt](https://tequis.travel/la_rinconada_tequisquiapan/): "18 habitaciones y **20 casas equipadas con cocina**, con capacidad para 6 y 8 personas… a tan solo 2 cuadras de la plaza principal… **alberca climatizada**, cancha de tennis, mesas de billar y estacionamiento". PDF 2025: 3 estrellas.
  - Candidato para "casas con alberca" y familias.
- **La Casa Roja.**
  - Camino al Sauz 65, Hacienda Grande. Sin pin.
  - Tel. 442 186 5514 y 442 168 8893. Instagram lacasarojatx. Reservas en un motor de terceros (direct-book.com) y en Airbnb.
  - [Página de tt](https://tequis.travel/la_casa_roja_tequisquiapan/): "diseñada para familias… A solo 5 minutos del bullicioso centro"; "palapa con asador y calentadores… mesa de billar y **alberca climatizada** para nuestros huéspedes". 5 habitaciones. PDF 2025: "4.3 estrellas".
- **Hotel Maridelfi.**
  - Andador Independencia 3, Centro. Centro, 0.1 km. Pin 20.522730, -99.890719.
  - Tel. 414 273 0052 y 427 191 3295. Web hotelmaridelfi.com estacionada.
  - [Página de tt](https://tequis.travel/hotel-restaurante-maridelfi/): "tradición por más de 60 años… **alberca climatizada**, estacionamiento, restaurante, bar… juegos infantiles". 36 habitaciones.
  - **El PDF 2025 lo marca "(En remodelación)"** en SALONES DE REUNIONES (en HOTELES sale como 4 estrellas). No dar de alta hasta confirmar que reabrió.
- **Posada del Virrey.**
  - Guillermo Prieto 9-N, Centro. Centro, 0.2 km. OSM nodo [6611206347](https://www.openstreetmap.org/node/6611206347): 20.523548, -99.892473.
  - Tel. 414 273 0239 y 414 226 2625. Correo hotelposadadelvirrey.15@gmail.com.
  - [Página de tt](https://tequis.travel/hotel_posada_del_virrey_tequisquiapan/): "a una cuadra del jardín principal, contamos con estacionamiento, **alberca** y desayunador. **Nuestra tarifa incluye café y pan dulce por la mañana**". 24 habitaciones. PDF 2025: 3 estrellas (sale dos veces, como "Posada del Virrey" y "Hotel Posada El Virrey").
  - Candidato para "económicos en el centro con alberca", pero sin precio.
- **Posada Tequisquiapan** (**ya en el sitio** como "Hotel Posada Tequisquiapan", con datos erróneos).
  - Moctezuma 6, Centro. Centro, 0.3 km. Pin 20.524472, -99.893218.
  - Tel. 414 273 0010; WhatsApp 414 226 7660 (tt). Correo posadatequisquiapan@gmail.com.
  - [Página de tt](https://tequis.travel/posada-tequisquiapan/): "Giro: Posada… 20 habitaciones, estacionamiento y jardín… baño independiente, televisión con cable, Internet, agua caliente las 24 hrs". **No menciona alberca ni desayuno** (la base sí). PDF 2025: 2 estrellas.

### B2. Resto del centro (a 1 km o menos), solo nombre, dirección y teléfono

| Nombre | Dirección | Tel. | Distancia | Notas |
|---|---|---|---|---|
| Hotel Casa Jasave | Av. Juárez 5 | 414 108 4034 / 414 273 4032 | 0.1 km | tt: 11 hab., 3 con balcón. PDF 4 estrellas. [CONFLICTO] El Hotel Neptuno también da "Av. Juárez 5". |
| Hotel Neptuno | Av. Juárez (Ote.) 5 | 414 273 0224 | 0.2 km | PDF 3 estrellas. |
| Hotel Boutique Bello Atardecer | Guillermo Prieto 4, casi esq. Av. Juárez | 414 112 3349 | 0.1 km | tt: "casa restaurada… 4 modernas suites… a 50 metros de la Plaza Principal"; cóctel de bienvenida, estacionamiento. PDF 4 estrellas. Web de Wix caída; el correo es de una agencia de viajes. |
| Gran Misiones | Guillermo Prieto 17 | [CONFLICTO] 414 273 2017 / 414 104 9085 | 0.2 km | PDF: 3 estrellas en una fila y 4 en otra. |
| Hotel Casa Blanca | [CONFLICTO] 5 de Mayo 5 (tt) / 6 (PDF) | 414 273 0078 | 0.1 km | PDF 3 estrellas. Web no resuelve. |
| Hotel La Baronesa | Av. Centenario Sur 6 | 414 219 6610 | 0.2 km | PDF 3 estrellas. Web no resuelve. |
| Posada Mezquites | Av. Centenario Sur 12 | 414 273 0365 | 0.2 km | PDF 3 estrellas. |
| Posada San Francisco | Moctezuma 2 | 414 273 0231 | 0.3 km | OSM nodo [6611206348](https://www.openstreetmap.org/node/6611206348). PDF 2 estrellas. |
| Posada Los Arcos | Moctezuma 12 | [CONFLICTO] 414 273 0566 (tt) / 414 690 2728 (PDF) | 0.3 km | PDF 2 estrellas. |
| Posada de Don Juan | Av. Centenario Norte 20 | 414 273 0178 / 414 219 6125 | 0.3 km | tt: "a 2 calles del centro… 100% familiar", 19 hab. PDF 2 estrellas. Web no resuelve. |
| Posada San Javier | Morelos Norte 63 | 55 3184 5583 | 0.3 km | PDF 2 estrellas. Web no resuelve. |
| Casa Geranios | Moctezuma 29 | 414 226 4008 | 0.3 km | PDF 3 estrellas. Web no resuelve; correo de agencia de viajes. |
| Los Sauces | De los Sauces 1 | 414 273 0315 | 0.3 km | PDF 3 estrellas. |
| Posada del Sol | "Centro" (sin calle) | 414 273 6071 | ~0.05 km (pin en Morelos Norte) | No está en el PDF. |
| Hotel La Casa de los Artistas | Morelos Norte, Centro | 441 113 5517 | 0.2 km | No está en el PDF. Su "web" era un agregador que ya no resuelve. |
| Casa Frida | Morelos Norte 4 | 442 300 2501 | sin pin | Solo PDF (3 estrellas). |
| Hotel El Patio | Av. Juárez 67 | 442 817 9804 | 0.4 km | tt: 4 hab., "a solo 2 cuadras de la plaza principal". PDF 3 estrellas. **Ojo:** la web que daba tt era `hotel-el-patio-love-hotel.negocio.site`. [SIN CONFIRMAR] si es hotel de paso; no dar de alta sin verlo. |
| Hotel El Mirador | Potrero Gavillero 4, El Pedregal | 414 226 9996 | 0.5 km | PDF 3 estrellas. |
| Hotel Boutique M&F / Hotel Boutique Crown | Heroico Colegio Militar (17), Centro | 414 273 5801 | 0.5 km | [CONFLICTO de nombre] tt: "M&F"; PDF: "Hotel Boutique Crown", 5 estrellas, mismo teléfono. |
| Suites Paraíso | Privada de Camelinas 12 | 414 273 1035 | 0.5 km | PDF 4 estrellas. Su "web" es un portal no oficial. |
| Quinta Cobos TX | Mariano Matamoros 10 | 414 101 1930 | 0.5 km | PDF 3 estrellas. |
| Hotel Del Pedregal | Hacienda Grande de la Asunción 1, El Pedregal | 414 112 4554 / 427 130 4343 | 0.6 km | PDF 3 estrellas. Web negocio.site (404). |
| Hotel Villa 12 | Niños Héroes 63, Vergel del Acueducto | 414 273 4608 | 0.7 km | OSM nodo [14353222836](https://www.openstreetmap.org/node/14353222836). No está en el PDF. |
| Cabañas Gil | Miguel Hidalgo 19, Los Sabinos, La Magdalena | 55 2955 9421 | 0.8 km | PDF 3 estrellas. Web de terceros (newalternative.com.mx), no responde. |
| Hotel Dalí | Av. Centenario Sur 105 | 414 273 0348 | 0.8 km | No está en la tabla HOTELES del PDF. |
| Hotel (Asunción) Hacienda del Carmen | Olivo 10 / 12 [CONFLICTO], Fundadores de Hacienda Grande | 414 273 0778 | 1.0 km | PDF 3 estrellas. |
| Hotel Villas Tequisquiapan | Francisco I. Madero 71, Hacienda Grande | 414 273 1796 / 414 122 7052 | 1.0 km | PDF 4 estrellas. Web no resuelve. |

### B3. Resto de las afueras

| Nombre | Dirección | Tel. | Distancia | Notas |
|---|---|---|---|---|
| Elohim | Lucio Blanco 49, Adolfo López Mateos | 414 226 7272 / 414 273 0403 | 1.1 km | PDF 3 estrellas. |
| Chalets Media Luna | Abasolo s/n, La Magdalena | 414 119 0468 | 1.1 km | PDF 3 estrellas. Web no resuelve. |
| Hotel Bugambilias Rooms | Gral. José María Arteaga 34B, La Magdalena | 414 273 0861 / 553 707 2041 | 1.1 km | PDF 3 estrellas. Solo web no oficial (mxhotel.site). |
| Hotel Jardín del Edén | Plan de Ayala 72, Adolfo López Mateos | 414 273 0013 / 414 114 8318 | 1.4 km | tt: "Lugar familiar… alberca, restaurante", 30 hab. PDF 3 estrellas. Web no resuelve. |
| Posada El Arrullo | Av. Venustiano Carranza 130, Adolfo López Mateos | 414 273 5341 | 1.4 km | PDF 2 estrellas. |
| Hostal (Casa) Pahpaqui | Paseo del Tepozán Norte 70, Barrio de San Juan | 442 704 6537 | 1.5 km | PDF 3 estrellas; pet friendly [CONFLICTO]: "No" en una fila y "Petfrienly" en otra. |
| Hotel Boutique Casa Grande | Miguel Hidalgo 122, Villas del Sol, La Magdalena | 712 174 0122 / 414 690 0787 | 1.5 km | PDF 3 estrellas. |
| Villas Amalu (o Amalur) | Vicente Suárez 28, La Magdalena | 414 273 0390 / 554 584 4367 | 1.8 km | PDF 3 estrellas. Web no resuelve. |
| Hotel La Veranda | Carr. Tequisquiapan–Ezequiel Montes km 2.8 No. 101, La Lagunita | [CONFLICTO] 414 140 3531 (ficha) / 414 140 3537 (página) y 414 273 0913 | 1.8 km | tt: "habitaciones nuevas… alberca"; restaurante. 18 hab. PDF 3 estrellas. |
| Posada Campestre Santa Fe | Cerrada de Tablajeros | — | ~2.6 km | Solo OSM (nodo [10888596796](https://www.openstreetmap.org/node/10888596796)). No está en ningún directorio de Turismo. |
| Cabaña Geranios | Camino a La Tortuga s/n, San Isidro | 414 226 4008 | 3.4 km | Mismo teléfono y correo de agencia que Casa Geranios. No está en el PDF. |
| 7 Soles (Posada Siete Soles) | Carr. 120 Tequisquiapan–Ezequiel Montes, La Tortuga | 55 6967 6757 / 55 8644 8668 | 4.1 km | PDF 3 estrellas. Web no resuelve. |
| Cabañas Quinto Elemento | Eucalipto 9, Col. Mezquite, Fuentezuelas | 414 109 5148 | sin pin; tt: "a 15 minutos del centro" | tt: "Cabañas rústicas ecoturísticas" para 2, 4 y 8 personas, 5 cabañas, estacionamiento. Mascotas [CONFLICTO]: icono de tt sí, PDF "No". |
| Containers Tequis | Jazmín 12, Barrio de San Juan | — (solo Airbnb) | sin pin; tt: "A 1.5 kms al centro" | tt: casa hecha con contenedores marítimos, "alberca única hecha en un contenedor de 20″", 3 hab. con baño, cocina equipada, estacionamiento para 4 autos. No está en el PDF. Candidato para "casa con alberca" si se acepta Airbnb como único canal. |
| Hotel Villa Campestre | Calle Margarita 20, Santa María del Camino (km 15 carr. SJR–Tequis) | 427 108 3421 | 5.6 km | tt: 8 hab.; reserva por Airbnb (dos anuncios). PDF 3 estrellas. |
| Hotel Amanecer Ranchero | Carr. SJR–Tequisquiapan km 16, Bordo Blanco | 427 290 3623 / 427 161 8827 / 427 122 9555 (PDF) | 5.6 km | PDF 4 estrellas. Solo web no oficial. |
| Opalos | Carr. federal 120 km 15, Bordo Blanco | 414 690 1808 | 5.6 km | No está en el PDF; no se sabe qué tipo de hospedaje es. |
| Bungalows Tequisquiapan | Calle Alcatraz 5 / Carr. 120 km 15, La Ermita | 414 231 5836 | 5.7 km | PDF 3 estrellas. Web no resuelve. |
| Hotel Balneario "Fidel Velázquez" | Carr. a Ezequiel Montes, junto al viñedo Los Rosales | 427 106 4774 | 8.1 km | Balneario con hotel (tt, sección jardines y salones). Ver la investigación de negocios. |
| Hotel Boutique La Herencia | Noradino Rubio 45, Camino al Cerrito | 55 7878 7332 | sin pin | Solo PDF (5 estrellas). |

---

## Viñedos con hospedaje

### Dentro del municipio de Tequisquiapan
| Lugar | Qué hay | Fuente | Estado |
|---|---|---|---|
| **La Casona de San Juanito** (ficha 19) | 5 habitaciones en el viñedo, comidas, recorrido y cata incluidos | web propia | **confirmado** |
| **La Toscana de Tequisquiapan** (ficha 14) | hotel de 8 habitaciones **enfrente** de Vinícola Tequisquiapan (catas, desayuno en la vinícola) | web propia | confirmado como "hotel junto a una vinícola", no hotel dentro del viñedo |
| **Cabañas Quinta Rancho Viejo** | cabañas; en WEDDING DESTINATIONS del PDF: "**Viñedo con jardín**" | PDF 2025, tt | [SIN CONFIRMAR]. Prof. Francisco Martínez Elías s/n, La Magdalena; 1.9 km; tels. 414 219 6467 / 414 219 6469 (tt) y 414 122 8246 (PDF); Instagram quintaranchoviejo; correo hotelquintaranchoviejo@gmail.com. PDF 3 estrellas. |
| **Hotel Boutique Casa Martha** | 7 habitaciones (listado de tt); en WEDDING DESTINATIONS: "**Vinícola y jardín**" | PDF 2025 | [SIN CONFIRMAR]. Nogal 30, Vista Hermosa; 0.9 km; 442 598 5258; Instagram casamarthahotel. PDF 5 estrellas. Su página de tt es copia de la de St. George (no sirve). |
| **Hotel Viña TX** | el viñedo urbano de la Magdalena, que el PDF lista también como hotel | PDF 2025 (2 estrellas), tt | [SIN CONFIRMAR]. Fray Junípero Serra 33; 0.7 km; 414 219 3210 (hotel) y 414 219 6736 (viñedo). `vinatx.info` no resuelve. Ver la ficha de Viña TX en la investigación de negocios. |
| **Finca El Consuelo** | el PDF dice "Renta de jardín, **hospedaje**, salón de eventos, viñedo y cava" | PDF 2025, [queretaro.travel](https://queretaro.travel/fichas/finca-el-consuelo/?lang=en) | [SIN CONFIRMAR]. queretaro.travel lo presenta solo como lugar para eventos, en la carretera 200 a Tequisquiapan; 442 285 4198. |

**Los Rosales Viñedos** (ya en el sitio) no tiene hospedaje según lo que encontré (queretaro.travel lo describe como viñedo de visita; nada propio dice lo contrario).

### Fuera del municipio, que la gente asocia a Tequis
Solo uno tiene hospedaje confirmado en su web propia:

- **Tierra de Alonso** (municipio de **Colón**, carretera Querétaro–Tequisquiapan; ver la investigación de negocios): su [web](https://www.tierradealonso.com/) tiene una sección "Hospedaje en viñedo" y otra de Spa; se presenta "entre Tequisquiapan, Bernal & Querétaro". WhatsApp 442 376 5140, hola@tierradealonso.com. Recorrido del viñedo $245 [FRÁGIL]. No abrí la subpágina de hospedaje: faltan habitaciones y precios. Food & Pleasure (16-jun-2026) la describe como una casona de piedra con torre en un viñedo de 3 ha, con habitaciones con vista a las viñas ([nota](https://foodandpleasure.com/vinedos-queretaro/)).

Sin confirmar (solo agregadores o notas; sin web propia que lo diga):
- **Bodegas Vaivén** (Ezequiel Montes): su web, [bodegasvaiven.com](https://bodegasvaiven.com/), solo dice "Sitio en construcción". Hotels.com tiene una ficha "Bodegas Vaivén" cuya URL dice "pds-hotel-boutique-tequisquiapan-ezequiel-montes", y `piedrasdesol.mx` (Piedras del Sol, ver abajo) redirige a `bodegasvaiven.mx`. Hipótesis sin prueba: Piedras del Sol es hoy el hospedaje de Bodegas Vaivén.
- **Casa Diamante Viñedos** (cerca de Bodegas De Cote, Ezequiel Montes): solo en Hotels.com; `casadiamantevinedos.com` no resuelve.
- **Puertas de la Peña** (cerca de Bernal): solo en la nota de Food & Pleasure; no encontré su web.
- **Bodegas De Cote, Viñedos La Redonda, Freixenet / Sala Vivé:** no pude comprobar si tienen hospedaje: decote.mx y salavive.mx piden verificación anti-bots y laredonda.com.mx está "en mantenimiento". **Viñedos Azteca** no ofrece hospedaje en su web.

Descartados por estar del lado de la ciudad de Querétaro (El Marqués), no "cerca de Tequis": **Hacienda Atongo** (hotel boutique de 14 habitaciones en el casco de 1651, [web](https://haciendaatongo.com/)), **María & Bernardo Casa-Viñedo** ("a 25 minutos del centro de Querétaro", [web](https://www.mariaybernardo.com/); no acepta mascotas) y **Puerta del Lobo**.

---

## Fuera del municipio (Ezequiel Montes), pero en el directorio de Turismo de Tequis

No son viñedos. Si se dan de alta, decir el municipio en la dirección.

- **Cabañas Cima Encantada.**
  - Olivos s/n, Col. Ampliación La Higuera, C.P. 76690 ([web](https://www.cimaencantada.com), tt). La [página de tt](https://tequis.travel/cima_encantada_tequisquiapan/) pone "76690 Ezequiel Montes, Qro." y el pin (20.568327, -99.842836) cae en La Higuera, municipio de Ezequiel Montes (OSM). 7.2 km en línea recta; la web dice "a solo 10 km del centro de Tequisquiapan" y "a tan solo 15 minutos"; tt, "a tan solo 8 km".
  - Tels. (442) 584 0776, (414) 104 5084 y (414) 114 6154 (web). Correo reservaciones@cimaencantada.com (tt).
  - Web de Wix: las páginas no traen texto legible sin JavaScript (no se pudo leer la lista de cabañas).
  - tt: "cabañas con una vista espectacular, **alberca climatizada, tinas de agua caliente, temazcal**, servicio de masajes y recorridos en caballo"; 10 cabañas. PDF 2025: 3 estrellas, "**Pet friendly**".
  - Respondería a "cabañas con jacuzzi / alberca" y "pet friendly", pero solo con fuentes de Turismo.
- **Hacienda Real La Nogalera (Hotel Spa).**
  - Carretera Tequisquiapan–Peña de Bernal km 26.2, desviación hacia Yextho km 19.1, comunidad Las Rosas ([web](https://haciendareallanogalera.com/), tt). El pin (20.561839, -99.739204) cae en Las Rosas, municipio de Ezequiel Montes (OSM); 16.5 km.
  - Tels. 55 4053 7119 (línea principal) y 414 219 0687 (WhatsApp) en la web; tt da 55 2475 8372 y 55 4053 7119; el PDF, 414 219 0687 (4 estrellas).
  - Web: "Hotel spa en Tequisquiapan con restaurante, alberca, ideal para eventos y jardines". No da habitaciones ni precios.
- **Piedras del Sol.**
  - Camino a Las Adelitas km 8 (tt, PDF). El pin (20.606312, -99.823290) cae en el municipio de Ezequiel Montes; 11.7 km.
  - Tels. 414 118 0705 y 553 098 2691; correo tequisquiapan@piedrasdelsol.mx. PDF 3 estrellas.
  - `piedrasdesol.mx` redirige a `bodegasvaiven.mx/solaris-morelos`, que da 404. Ver Bodegas Vaivén arriba.

Excluidos por ser autohoteles o moteles: **Autohotel El Arco** (Bordo Blanco; tt) y **El Paseo Auto Hotel** (OSM nodo 6316369785). Los hoteles del pueblo de Ezequiel Montes que salen en OSM (Hotel Monarca, Hotel La Capilla) no son viñedos y quedan fuera del alcance.

---

## Cambios a lo que ya tenemos

| Lugar en la base | Qué encontré | Qué haría |
|---|---|---|
| **La Casa del Atrio** (Guerrero 2; `is_verified = true`, `is_featured = true`) | No existe en Tequis. El hotel de ese nombre está en el centro histórico de Querétaro capital ([lacasadelatrio.com](https://lacasadelatrio.com/en/); [queretaro.travel](https://queretaro.travel/lugares/the-casa-del-atrio-an-oasis-in-the-historic-center/?lang=en)). La base ya le había quitado la web y la foto por eso mismo (`databasefix_research_2026-09.sql`). | **Desactivar** (y quitarle `is_verified`/`is_featured` mientras tanto: hoy luce la insignia "Verificado" y sale como destacado). |
| **Hotel Museo La Casona** (Morelos 11, 414-273-0132) | Nada en tt, PDF 2025, OSM ni el buscador. El hotel real "La Casona" es La Casona Tequisquiapan Hotel & Spa (Antiguo Camino al Sauz 55), que no es museo ni está en Morelos. | Desactivar y dar de alta La Casona real (ficha 11). |
| **Hotel Hidalgo** (Hidalgo 15, 414-273-0063) | Nada en Tequis; el único "Hotel Hidalgo" que aparece está en Aculco (Edomex). | Desactivar. |
| **Hotel Posada Tequisquiapan** (Moctezuma 8, 414-273-0021) | Casi seguro es la Posada Tequisquiapan de **Moctezuma 6**, tel. **414 273 0010** (tt y PDF 2025). Las fuentes no hablan de alberca ni desayuno. | Corregir nombre ("Posada Tequisquiapan"), dirección, teléfono y amenidades; dejar `content_verified = false`. |
| **Vinícola San Juanito** (experiencias) | Su Casona tiene 5 habitaciones con comidas incluidas (ficha 19). | Mencionar el hospedaje en su descripción, o dar de alta la Casona aparte como hospedaje. |

---

## Qué páginas se pueden armar

Conteo de lugares **del municipio** por búsqueda. "Web" = lo dice la web propia; "+ Turismo" = solo el texto de tt o el PDF 2025 (no suficiente para afirmarlo sin llamar). Con el criterio de `web/lib/tipos.ts` (`MIN_PLACES = 2`), una página necesita al menos 2 lugares; aquí se cuentan solo los de la columna "Web".

| Búsqueda(s) | Web | Lugares con web | + Turismo | ¿Página? |
|---|---|---|---|---|
| "hoteles en (el) centro de tequisquiapan", "cerca del centro" | **11** | Río, San Carlos, Matian, La Plaza, Quinta, Poza Real, Quinta Los Vela, La Granja, Arantia, Sol y Fiesta, Real de TX | Villa Florencia, Las Delicias, Del Parque, La Rinconada, Posada del Virrey, Posada Tequisquiapan y ~25 posadas | **Sí** |
| "hoteles con alberca", "tequisquiapan hoteles con alberca" | **15** | los 9 del renglón siguiente + La Casona, St. George, Salterra, Villa Antigua, Tres Vidas, Villa Bugambilia (Sol y Fiesta solo dice "pool bar") | Las Delicias, Real de San José, Regalo del Alma, La Querencia, Del Parque, La Rinconada, La Casa Roja, Posada del Virrey, Real de TX, Jardín del Edén, La Veranda, Rancho Los Venados | **Sí** |
| "hoteles en el centro de tequisquiapan con alberca" | **9** | Río, San Carlos, Matian, La Plaza, Quinta, Poza Real, Quinta Los Vela, La Granja, Arantia | Las Delicias, Del Parque, La Rinconada, Posada del Virrey | **Sí** |
| "alberca climatizada" | **3** | La Casona, Villa Antigua ("agua templada"), Villa Bugambilia (caldera con costo) | Real de San José, Regalo del Alma, La Rinconada, La Casa Roja, Real de TX; Quinta [CONFLICTO] | Sí, pequeña |
| "alberca techada" | **1** | Quinta Los Vela (alberca interior en cabañas grandes) | Las Delicias (2 techadas); Villa Florencia solo en agregadores | **No** hasta confirmar Las Delicias por teléfono |
| "jacuzzi privado", "hoteles con jacuzzi" | **6** privado / 10 en total | privado: Quinta, La Plaza, Villa Antigua, Tres Vidas, La Casona (Deluxe Suite), Salterra (tienda Deluxe). En el spa o común: San Carlos, Matian, St. George, La Granja | Real de TX (algunas habitaciones) | **Sí** |
| "pozas privadas", "hotel con pozas", "cabañas con pozas privadas" | **2** | Suites Poza Real, Quinta Los Vela | — | **Sí** (justo) |
| "aguas termales", "hoteles con aguas termales" | **0** que digan "termal"; 2 con agua de manantial | Poza Real, Quinta Los Vela | Las Delicias ("agua natural" 28-30 °C) | Sí, pero redactada como "agua de manantial" y enlazando a los balnearios (Termas del Rey, El Oasis) |
| "hoteles con spa" | **6** | La Casona, San Carlos, Matian, St. George, Tres Vidas, Villa Antigua (además masajes en Quinta, Río, Sol y Fiesta, Salterra, Rancho Los Venados, La Toscana) | Real de San José | **Sí** |
| temazcal | **3** | La Casona, St. George, Sol y Fiesta | Tres Vidas | Como sección de la de spa |
| "pet friendly", "que aceptan mascotas" | **3** | Quinta Los Vela, Salterra, Villa Bugambilia (solo perros) | La Querencia (tt y PDF coinciden), Villa Florencia y Regalo del Alma (solo PDF); Del Parque, Tres Vidas y Quinto Elemento [CONFLICTO]. Villa Antigua dice que **no** | **Sí**, con aviso de llamar |
| "desayuno incluido" | **5** | San Carlos (tarifa rack), Quinta (paquetes), Casona de San Juanito, Rancho Los Venados, Salterra (paquetes) | Posada del Virrey (café y pan dulce) | Sí, con matices |
| "todo incluido" | **2** | Casona de San Juanito, Rancho Los Venados (las dos con comidas incluidas) | — | Sí, redactada "con comidas incluidas" (ninguno se anuncia como "todo incluido") |
| "con estacionamiento" | **11** | Matian, La Plaza, Quinta, Poza Real, Quinta Los Vela, La Granja, Arantia, La Casona, Salterra, Villa Antigua, Villa Bugambilia | casi todos | Mejor como dato en cada ficha que como página |
| "hoteles boutique" | **5** | Matian, La Granja, Arantia, La Casona (área boutique), Casona de San Juanito | La Toscana, St. George, Tres Vidas, Bello Atardecer, Casa Martha, Regalo del Alma, Crown, La Herencia | **Sí** |
| "de lujo", "5 estrellas" | **9** con "5 estrellas" del PDF y web propia | Río, Matian, Quinta, La Granja, Arantia, St. George, Villa Antigua, Tres Vidas, Casona de San Juanito | Villa Florencia, Real de San José, Regalo del Alma, Casa Martha, Crown, La Herencia | Sí, pero aclarando que la clasificación es del directorio de Turismo, no una certificación |
| "hoteles románticos" | **7** | La Casona (solo adultos, cena en la cava), Quinta (suite con jacuzzi), Salterra (Deluxe con jacuzzi, cenas privadas), Villa Bugambilia (paquetes para parejas), Matian (cenas románticas), La Toscana (fogata, masajes en la habitación), Casona de San Juanito | — | **Sí** |
| "hoteles familiares" | **10** | La Casona (sección familiar, chapoteadero), Tres Vidas (juegos infantiles), Villa Antigua, Poza Real (chapoteadero), Matian (suite familiar), Río (Junior Familiar, menú infantil), Quinta Los Vela, Real de TX (villas familiares), Salterra, Villa Bugambilia | Real de San José (área infantil), Maridelfi, La Rinconada | **Sí** |
| "cabañas" | **3** | Quinta Los Vela, Villa Bugambilia, Rancho Los Venados | Quinto Elemento, Cabañas Gil, Quinta Rancho Viejo, Cabaña Geranios, Chalets Media Luna; Cima Encantada (Ezequiel Montes) | **Sí**, junto con glamping |
| "cabañas con alberca (privada)" | **2** | Quinta Los Vela (cabañas de 8-11 con alberca interior), Villa Bugambilia | Cima Encantada (fuera del municipio) | Sí, justo |
| "cabañas con jacuzzi" | **0** cabañas (1 tienda de glamping) | Salterra (tienda Deluxe) | Cima Encantada ("tinas de agua caliente", fuera) | **No**; mandar a la de jacuzzi |
| glamping | **1** | Salterra | — | **No**; dentro de "cabañas y glamping" |
| "viñedos con hospedaje", "hoteles en tequisquiapan viñedos" | **2** | Casona de San Juanito, La Toscana (frente a la vinícola) | Quinta Rancho Viejo, Casa Martha, Viña TX, Finca El Consuelo; fuera: Tierra de Alonso (Colón) | Sí, pequeña; mejor como sección de la guía de viñedos |
| "villas/casas con alberca", "airbnb con alberca privada" | **2** | Villa Bugambilia, Quinta Los Vela | La Rinconada (casas), La Casa Roja, Containers Tequis | Sí, justo |
| "balnearios con hotel / con cabañas" | 1 | Balneario La Vega (habitaciones, según su web; ver la investigación de negocios) | Fantasía Acuática (hospedaje), Hotel Balneario Fidel Velázquez | No; mencionarlo en las fichas de balnearios |
| "hoteles baratos / económicos / precios" | — | Tarifas publicadas más bajas: Poza Real $1,434 (2 pers.), Quinta $1,850, Matian ~$1,874, Tres Vidas $1,999 | posadas de 2 estrellas sin precio | **No** (no hay precios suficientes; [FRÁGIL]) |
| "solo adultos" | **1** | La Casona (área Espacio Sense) | — | No |
| bodas y eventos | **10** | La Casona, Matian, Quinta, Quinta Los Vela, Arantia, Salterra, Villa Antigua, Tres Vidas, La Toscana, San Carlos | Regalo del Alma, La Querencia, Villa Florencia, Real de San José | Ya tiene su propia guía/búsquedas |
| por nombre: "hoteles rio", "tequisquiapan hotel rio" | 1 | Hotel Río | — | Ficha propia |
| por nombre: "hoteles relox", "tequisquiapan hotel relox" | 0 | — | — | **No**: parece cerrado (aviso 2) |
| por nombre: "tequisquiapan hotel villa florencia" | 0 | — | Villa Florencia | Ficha sin `content_verified` |
| "tequisquiapan hacienda grande" (la colonia) | 2 | La Casona, Real de TX | Regalo del Alma, La Casa Roja, Villas Tequisquiapan, Hotel Asunción | Mejor como dato de zona |
| "hacienda tequis" | — | Tres Vidas se presenta como hacienda; Las Delicias se llama "Hacienda" en tt | — | Ambigua |
| "cuantos hoteles hay en tequisquiapan" | — | El PDF 2025 lista **79 filas** en HOTELES (con algunos repetidos: Posada del Virrey, Suites Paraíso, La Toscana y Gran Misiones salen dos veces) y el directorio de tt, ~80 fichas de hospedaje | — | Dato para la guía de hospedaje, citando a Turismo |

### Propuesta de `content_verified`
Para hospedaje no hay horario que confirmar, así que el criterio práctico es "teléfono y web confirmados contra una segunda fuente":
- **Sí:** Río, La Plaza, Quinta Tequisquiapan, Suites Poza Real, Quinta Los Vela, La Casona, Matian, Arantia, La Granja (WhatsApp de la web = tt), Real de TX (WhatsApp de la web = tt y PDF), Villa Antigua, Tres Vidas, Casona de San Juanito, Villa Bugambilia, Salterra (web = PDF; tt difiere), Rancho Los Venados.
- **No, por ahora:** St. George y La Toscana (teléfono en [CONFLICTO]); San Carlos y Sol y Fiesta (webs de 2020 y 2016); todos los de la sección B.

---

## Descartados / sin confirmar

- **El Relox** (Morelos Norte 8): su web anuncia "Hotel El Relox COMING SOON" junto a residencias, plaza comercial y jardín de eventos; no está en la tabla HOTELES del PDF 2025; un anuncio de ago-2026 vende "Relox branded residences". Los agregadores todavía lo listan. No darlo de alta como abierto hasta confirmarlo.
- **Hotel Maridelfi:** web estacionada y "(En remodelación)" en el PDF 2025.
- **Hotel El Patio** (Av. Juárez 67): la web que daba tt se llamaba `hotel-el-patio-love-hotel`. Posible hotel de paso [SIN CONFIRMAR].
- **La Casa del Atrio, Hotel Museo La Casona, Hotel Hidalgo:** ver "Cambios a lo que ya tenemos".
- **Hotel Casa de Vino** (Moctezuma 4): su web es una plantilla sin llenar; tt le pone un pin en La Tortuga, a 7 km, que no corresponde a Moctezuma. Solo teléfono (414 273 1276 / 414 280 8268) y correo (reservaciones@hotelcasadevino.com).
- **Pines equivocados en tt:** la ficha "Hotel Rio" de turismo-wellness apunta a 20.5458, -99.9522 (Cava Bocanegra, en la carretera 200) y la de "Hotel la Casona" de wellness, a 20.511, -99.886. Usar los de las fichas de hoteles.
- **"Hacienda Xajay":** no es un hotel; es el nombre de una calle o casa del Fraccionamiento Residencial Haciendas de Tequisquiapan (anuncios inmobiliarios en pincali e inmuebles24). Igual "fraccionamiento / residencial viñedos de tequisquiapan" y "hoteles en venta": búsquedas inmobiliarias, no de hospedaje.
- **Hacienda El Aguacate:** Food & Pleasure la presenta como "una hacienda del siglo XIX con alberca para hospedarte en Tequisquiapan" ([nota](https://foodandpleasure.com/hacienda-el-aguacate-tequisquiapan/)); solo encontré un listado en boutique-homes.com, sin web propia ni dirección. Sin confirmar.
- **Casas de Airbnb/Vrbo** (Cabaña Magnolias, Quinta Lily, Casa Margarita, etc.): aparecen para "cabañas con alberca privada" y "airbnb con alberca", pero solo tienen anuncio en la plataforma. Fuera por la regla de fuentes.
- **Posada Campestre Santa Fe:** solo un nodo de OSM, sin teléfono ni ficha de Turismo.
- **Opalos** (carr. 120 km 15): tt no dice qué es y no está en el PDF.
- **Autohotel El Arco** y **El Paseo Auto Hotel:** autohoteles, excluidos.
- **Bodegas Vaivén, Casa Diamante Viñedos, Puertas de la Peña, De Cote, La Redonda, Freixenet:** ver "Viñedos con hospedaje".

## Fuentes principales
- [tequis.travel – Hoteles](https://tequis.travel/hoteles_tequisquiapan/) y las fichas `https://tequis.travel/directorio/hoteles/<nombre>/`, `/directorio/centro-de-convenciones/<nombre>/` y páginas de hotel citadas en cada ficha.
- [Directorio Tequisquiapan 2025 (PDF)](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf): HOTELES, SALONES DE REUNIONES, WEDDING DESTINATIONS, WELLNESS.
- Webs propias citadas en cada ficha (consultadas el 10-nov-2026).
- [adn40, 18-oct-2026 (Suites Poza Real)](https://www.adn40.mx/tiempo-libre/2026-10-18/cuanto-cuesta-dormir-en-el-hotel-a-50-pasos-de-la-plaza-de-este-pueblo-magico-de-queretaro-el-lugar-tiene-poza-privada-de-agua-de-manantial-en-la-habitacion/).
- [Food & Pleasure, 16-jun-2026 (hospedaje en viñedos)](https://foodandpleasure.com/vinedos-queretaro/).
- OpenStreetMap / Nominatim (nodos citados; municipio de cada pin por geocodificación inversa).

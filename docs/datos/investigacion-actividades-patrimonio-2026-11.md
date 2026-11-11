# Investigación: actividades y patrimonio de Tequisquiapan

Fecha: 10 nov 2026. Investigación de escritorio para tequismagico.com (no se tocó la base ni el código).

## Leyenda

- **[FRÁGIL]**: precio u horario que cambia; se anota la fecha en que se vio.
- **[CONFLICTO]**: dos fuentes dicen cosas distintas; se anotan ambas.
- **[SIN CONFIRMAR]**: solo aparece en una fuente secundaria (directorio, tequis.travel) y no se encontró web propia ni otra confirmación.
- **Ya en el sitio**: el lugar ya existe en `GET /api/places` (nombre | subcategoría).
- tequis.travel es el portal de Turismo municipal. Sus fichas repiten el teléfono 414 265 1999 y el WhatsApp 414 226 1459: son de Turismo, **no** del negocio, y aquí no se usan como contacto.
- Google Maps, TripAdvisor y agregadores (Yumping, 1golf, SensaCine, Wanderlog…) no se usan como fuente de datos ni de fotos. Cuando se citan, es solo para decir que algo existe o que no se encontró nada más.
- Fuera de alcance (otra investigación): balnearios, globo, viñedos, queserías. Los 4 mercados de artesanías ya están en `investigacion-guias-2026-11.md`.
- **Fuentes municipales cuentan como una sola.** tequis.travel y el [directorio municipal 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf) son de Turismo municipal. Aquí "confirmado" significa que hay **otra** fuente independiente: web propia del negocio, queretaro.travel (Turismo del estado), prensa, Wikipedia o una tesis. Lo que solo está en las fuentes municipales va como [SIN CONFIRMAR].

## Avisos antes de usar esto

1. **Paracaídas: no hay en Tequis.** Ningún operador ni zona de salto en el municipio. "Teques" es Tequesquitengo, Morelos. Lo más cercano en Querétaro (Cadereyta, Pedro Escobedo) solo sale en agregadores. Ver la sección 4.
2. **Zoológico: no hay en Tequis.** Lo más parecido es el safari fotográfico de Rancho Los Venados, que parece ser solo para huéspedes, y la granja de Ranchito TX.
3. **Golf: el Club de Golf Tequisquiapan es privado** y no tiene web oficial. `clubdegolftequisquiapan.com` es un sitio de bienes raíces, no del club: no enlazarlo.
4. **Webs de operadores que ya no existen** (NXDOMAIN el 10-nov-2026), aunque tequis.travel las sigue dando: `turismoalternativo.com.mx` (Tram 43), `turistiandoentequis.com` (Turisteando en Tequis), `lacalesatours.com.mx` (Calesa Tours) y `temazcal-tonatiu-iquzayampa.negocio.site` (404).
5. **La página "Mimbre" de tequis.travel es un restaurante**, no un taller. Para mimbre y cestería sirve la lista de 14 talleres de su página de Artesanías (sección 5).
6. **Mina El Redentor: municipio en conflicto.** Una tesis de la UNAM la inscribe en San Juan del Río; tequis.travel y Mindat, en Tequisquiapan. Ver la sección 1.
7. **Teléfonos que no coinciden** entre la ficha, la página temática de tequis.travel y el directorio 2025: TX Eco Tours (tres números), Turis TX (tres), El Pilón (dos), Casa del Artesano (dos), Rancho Los Venados (tres). Se anotan todos en su ficha.
8. **Sin precio publicado** en ninguna fuente: tranvía, minas (solo un promedio de $200 en prensa), temazcales, TX Eco Tours, MD Turismo, gotcha, golf. Con precio en web propia: Cabalgando en Tequis y Lavyn.
9. **Tres lugares de la carga inicial no aparecen en ninguna fuente**: "Talleres de Cestería", "Cestería Don Luis" y "La Casa del Mimbre" (ya en el sitio, `content_verified = false`). No están en la lista de talleres de tequis.travel ni en el directorio 2025.
10. **Homónimos en Commons**: "Exhacienda Tequisquiapan" y "Capilla (Tequisquiapan…)" son de Dolores Hidalgo, Guanajuato.

## Tabla resumen

"Confirmado" = segunda fuente independiente (ver la leyenda). Precio y horario: ver la ficha (casi todos [FRÁGIL]).

| Nombre | Tipo | Dónde | Web propia | Precio | Fotos | Ya en el sitio | Búsquedas que responde |
|---|---|---|---|---|---|---|---|
| Mina de Ópalos El Redentor ✔ | mina / tour 4x4 | La Trinidad | no (redes) | sin precio (~$200 prensa) | no | no | minas de ópalo, alrededores, adolescentes, en un día |
| Minas de Ópalo El Pilón | mina / senderismo, rápel | La Trinidad | no | no | no | no | minas de ópalo, adolescentes |
| Sitio arqueológico La Trinidad | vestigios con guía | La Trinidad | no | no | no | no | alrededores |
| Temazcal Tonatiu Iquzayampa ✔ | temazcal | Fuentezuelas | no (404) | no | no | no | temazcal, pareja |
| Tochicalli, Tres Marías, Casa Gayatri y otros | temazcal | comunidades | no | no | no | no | temazcal, yoga |
| Espacio Sense (La Casona) ✔ | spa con temazcal | Hacienda Grande | sí | no | sí (su web) | sí | temazcal, pareja |
| Flow Yoga, Alhelí de la Aurora | yoga | — / B. San Juan | no | no | no | no | yoga |
| Tram 43 (Turismo Alternativo) | tranvía | Vista Hermosa | muerta | no | no | no | tranvía, en un día, con niños |
| Turis TX | tranvía, cuatrimotos | Ezequiel Montes | no | no | no | no | tranvía, turibus, adolescentes |
| MD Turismo y Experiencias ✔ | tranvía, free tour, tour nocturno, minas | Vista Hermosa | sí | no publica | revisar (su web) | no | tours, tranvía, de noche, gratis (free tour), minas |
| Callejoneadas Tequisquiapan ✔ | callejoneada privada | centro | sí | no | no | no | callejoneadas, de noche |
| Callejoneada de leyendas (ViveTours) | recorrido teatral | Plaza Hidalgo | no | $100 / $60 | no | no | de noche, poco dinero, con niños |
| Cabalgando en Tequis ✔ | cabalgata | Granjas Residenciales | sí | $2,200 / $3,700 | sí (su tienda) | no | cabalgatas, pareja, aventura |
| Caballos Tequis – Rancho Maguey | cabalgata, clases | carr. 200 km 54 | no | no | no | no | cabalgatas, con niños |
| TX Eco Tours ✔ | tour 4x4 | Carrizal 23 | sí | no (+$1,200 si manejas) | revisar (su web) | no | tours, minas, aventura, adolescentes |
| Turisteando en Tequis | tour operadora | B. San Juan | muerta | no | no | no | tours |
| Viajes y Enoturismo ✔ | tour operadora (minas) | Juárez 16 | sí | no | — | no | tours, minas |
| Gotcha Outdoors | gotcha | Fray Junípero Serra 4 | no | no | no | no | gotcha, adolescentes |
| Paracaidismo | — | no hay en Tequis | — | — | — | no | salto en paracaídas (aclarar) |
| Parapente (Vencejo) | parapente | sin dirección | no | no | no | no | parapente |
| Club de Golf Tequisquiapan | golf privado | fracc. Club de Golf | no | $2,500–3,500 [CONFLICTO] | no | no | golf |
| Rancho Los Venados ✔ | safari fotográfico, cabañas | La Laja (carr. km 42) | bloqueada | no | revisar | no | zoológico, con niños, alrededores |
| Ranchito TX ✔ | granja, cerveza | carr. km 50.2 | no | no | no | no | con niños, cervecerías, zoológico |
| Granja Lavyn ✔ | lavanda, talleres, picnic | carr. La Tortuga–Santillán km 5 | sí | $100 visita; $500 taller y picnic | sí (su tienda) | no | pareja, poco dinero, con niños, alrededores |
| Hecho en Babu | taller de vidrio | B. San Juan | no | no | no | no | talleres |
| Taller de mole (K'puchinos) | taller de cocina | Independencia 7 | su web no lo menciona | no | — | sí (el restaurante) | talleres, pareja |
| 14 talleres de cestería | taller de vara y mimbre | B. La Magdalena | no | no | no | no | mimbre, talleres |
| Casa del Artesano ✔ | tienda / galería municipal | centro [CONFLICTO] | no | gratis | no | no | mimbre, gratis |
| Borúma ✔ | cervecería | Morelos Nte. 6 | no | no | no | no | cervecerías, de noche |
| Cinetop Tequisquiapan | cine | carr. a Ezequiel Montes 100 | no | no | no | no | cine, de noche, adolescentes |
| Museo ¡México me encanta! ✔ | museo de miniaturas | 5 de Mayo 11 | no | ~$30 [FRÁGIL] | no | no | museos, con niños, poco dinero |
| Museo del Queso y el Vino | museo / tienda | Salvador Michaus [CONFLICTO] | no | no | no | no (Finca VAI sí) | museos |
| Museo de la Canasta | museo | ? | no | no | Commons 2011 | no | museos, mimbre |
| Centro Cultural Gloria Michaus ✔ | centro cultural | De los Sauces 1 | no | no | no | no | museos, cine, gratis |
| Jardín del Arte ✔ | arte al aire libre | San Joaquín, centro | — | gratis | no | no | gratis, fin de semana |
| Galerías (Virgilio de Mier y otras) | galería | centro | no | entrada libre | no | no | gratis, pareja |
| Club de Leones / Callejón del Piojo | patrimonio | centro | — | gratis | no | no | gratis |
| Parroquia de Santa María de la Asunción ✔ | iglesia | Plaza Hidalgo | — | gratis | Commons ✔ | sí | iglesia, parroquia, gratis |
| Templo de Santa María Magdalena ✔ | iglesia (1551) | B. La Magdalena | — | gratis | Commons ✔ | no | iglesia, gratis, en un día |
| Capillas de Indios ✔ | capillas coloniales | B. San Juan | — | gratis | no | no | iglesias |
| Capilla de la Fundación | capilla | centro | — | gratis | no | no | iglesias [CONFLICTO] |
| Santuario del Perpetuo Socorro | santuario / vista | Fracc. Los Viñedos | no | gratis | no | no | iglesias, miradores, pareja |
| 6 haciendas históricas ✔ (historia) | cascos de hacienda | comunidades | no | — | no (homónimo) | no | haciendas |
| Monumento al Centro Geográfico ✔ | monumento | Niños Héroes 17 | — | gratis | Commons ✔ | no | centro geográfico, gratis |
| Plaza Miguel Hidalgo ✔ | plaza | centro | — | gratis | Commons ✔ | sí | gratis, de noche |
| Parque La Pila / La Pila ✔ | parque / monumento | Ezequiel Montes 29 | — | gratis | Commons (feria) | sí | Parque La Pila, gratis |
| Estación Bernal ✔ (con aviso) | antigua estación | Juárez Oriente | — | gratis | no | no | miradores |
| Presa Centenario ✔ | presa | suroeste | — | gratis | no | sí | río/presa |

## Fichas

### 1. Minas de ópalo y La Trinidad

**Contexto.** Las minas están en la comunidad de La Trinidad, unos 10-12 km al poniente/sur del centro ("12 km al sur", [tequis.travel – Imperdibles](https://tequis.travel/imperdibles_tequisquiapan/); "10 minutos del centro", [ficha El Redentor](https://tequis.travel/minas-de-opalo-el-redentor/)). Son privadas y solo se entra con guía, en 4x4 por terracería ([Food & Pleasure, 29-mar-2026](https://foodandpleasure.com/minas-de-opalo-en-tequisquiapan/)). [CONFLICTO] municipio de la mina: Mindat ubica las minas de La Trinidad en Tequisquiapan ([mindat – Carbonera Mine](https://zh.mindat.org/loc-9604.html)), pero una tesis de la Facultad de Ingeniería de la UNAM (*Los ópalos del distrito minero de Tequisquiapan*, PDF de 2015) dice que El Redentor está "dentro de la concesión minera de La Guadalupana situada en la comunidad de la Trinidad, e inscrita en el municipio de San Juan del Rio" ([tesis UNAM](https://ru.dgb.unam.mx/bitstream/20.500.14330/TES01000724220/3/0724220.pdf)), y el pin de tequis.travel cae del lado de San Juan del Río (geocodificación inversa de OSM). El pueblo de La Trinidad sí es de Tequisquiapan (OSM). Redactar "en La Trinidad, a 10 minutos de Tequis", sin decir el municipio de la mina.
- [FRÁGIL, mar-2026] Precio promedio "$200.00 MXN por persona", sin decir de qué mina ([Food & Pleasure](https://foodandpleasure.com/minas-de-opalo-en-tequisquiapan/)). Ninguna mina publica precio en una web propia.
- Ninguna de las dos minas tiene web propia: solo Facebook/Instagram y las fichas de tequis.travel.

**Mina de Ópalos El Redentor** (familia Montes)
- Qué es: tour guiado en 4x4 hasta la boca de la mina, explicación geológica, demostración de pulido por el señor Héctor Montes, galería de joyería con ópalo, senderismo ligero pet friendly, zona para acampar, tour de leyendas en algunas temporadas, grupos escolares ([tequis.travel – El Redentor](https://tequis.travel/minas-de-opalo-el-redentor/)).
- Teléfono 414 231 8036 (en [la ficha](https://tequis.travel/minas-de-opalo-el-redentor/), en el [directorio municipal 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf), sección Tour operadoras, y en [Imperdibles](https://tequis.travel/imperdibles_tequisquiapan/)). Redes: [IG mina_redentor](https://www.instagram.com/mina_redentor), [Facebook "Minas de Ópalo Héctor Montes"](https://www.facebook.com/p/Minas-de-%C3%93palo-Hector-Montes-100063527712594/).
- [CONFLICTO] Dirección: "Calle 2 de Octubre No. 5, La Trinidad" ([ficha](https://tequis.travel/minas-de-opalo-el-redentor/), [Tours](https://tequis.travel/tours_tequisquiapan/)) vs "2 de Octubre 1, 76774 La Trinidad" ([directorio tequis.travel](https://tequis.travel/directorio/experiencias/minas-de-opalo/)). Probablemente sea el punto de reunión en el pueblo, no la mina.
- MexConnect (nov-2024) dice que Fernando Montes lleva el turismo, que a los visitantes les dan herramientas y se pueden quedar los ópalos que encuentren ([MexConnect](https://mexconnect.com/?p=25372)). [SIN CONFIRMAR] lo de quedarse con los ópalos: solo esa fuente.
- Sin precio publicado. Fotos: no hay web propia; no usar las de redes.

**Minas de Ópalo El Pilón (también "Tekesquite")**
- Qué es: recorridos guiados en transporte o a pie, exploración de la mina, explicación de extracción y calidad, venta de ópalos, paquetes con comida ("parrillada minera"), rápel y escalada ([tequis.travel – El Pilón](https://tequis.travel/minas-el-opalo-el-pilon/); [Tours](https://tequis.travel/tours_tequisquiapan/)).
- [CONFLICTO] Dirección y teléfono: "Calle 2 de Octubre No. 10, La Trinidad", tel. (414) 208 7756 ([ficha](https://tequis.travel/minas-el-opalo-el-pilon/)) vs "Calle 12 de Octubre #10", tel. 414 114 7852 ([Tours](https://tequis.travel/tours_tequisquiapan/)). El [directorio municipal 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf) la llama "Minas de Ópalo Tekesquite (el pilón)", 414 114 7852.
- Redes: [IG minasdeopalo_elpilon1](https://www.instagram.com/minasdeopalo_elpilon1). Sin web propia ni precio. [SIN CONFIRMAR] fuera de tequis.travel: una búsqueda no dio ninguna otra fuente con ese nombre.

**Cómo llegar sin coche propio.** Varios operadores la incluyen: TX Eco Tours ("Ruta Soy Minero"), Turisteando en Tequis, Viajes y Enoturismo ("minas de ópalo de 4 hrs.") y Vino Tours ([tequis.travel – Tours](https://tequis.travel/tours_tequisquiapan/)). Ver la sección 3.

**Sitio arqueológico La Trinidad** [SIN CONFIRMAR como sitio abierto]
- tequis.travel: unas 20 ha con vestigios "al parecer, chichimecas del periodo epiclásico de entre los años 650 y 1000 según el INAH" (murallas, basamentos, juego de pelota); "la zona aún se encuentra en un proyecto de rescate", solo con guía; quien lleva es Fernando Montes de El Redentor, 414 231 8036 ([tequis.travel – La Trinidad](https://tequis.travel/sitio-arqueologico_a_trinidad_tequisquiapan/)).
- No es una zona arqueológica abierta del INAH (no aparece en sus listados). Un artículo de la revista *Arqueología* del INAH sí nombra a "La Trinidad" entre los centros rectores epiclásicos de la región ([revistas.inah.gob.mx](https://revistas.inah.gob.mx/index.php/arqueologia/article/download/20875/22280/43832)), sin ubicarlo. Para el sitio: mencionarlo como visita guiada que ofrece El Redentor, sin horario ni precio.
- Fotos: no encontré en Commons.

### 2. Temazcal, yoga y bienestar

**Lo general.** tequis.travel dice que en enero de 2023 Tequis recibió el premio "Paraíso del Turismo Wellness" (Premios Excelencias, FITUR) "gracias a sus 25 espacios dedicados a este segmento", y que "algunos hoteles ofrecen el servicio de temazcal dentro de sus tratamientos de spa tanto a huéspedes como a público en general" ([tequis.travel – Salud y belleza](https://tequis.travel/salud-y-belleza_tequisquiapan/)). **Ningún temazcal de Tequis publica precio ni horario en una web propia.** Todos piden reservar.

**Temazcal Tonatiu (Tonatiuh) Iquzayampa** — el único con una segunda fuente oficial
- Amado Nervo 7, Comunidad de Fuentezuelas (C.P. 76780); tels. 414 226 8107 y 414 219 2520 ([tequis.travel – Baño de temazcal](https://tequis.travel/bano_de_temazcal_tequisquiapan/); [directorio municipal 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf)).
- Turismo del estado lo describe: plática introductoria, comida de bienvenida, piedras calentadas sin gas, infusiones de hierbas, té y meditación guiada; llevar toalla, sandalias y traje de baño; reservar antes ([queretaro.travel](https://queretaro.travel/lugares/temazcal-tonatiu-iquzayampa-a-bath-of-the-aztec-king/?lang=en)).
- Su web `temazcal-tonatiu-iquzayampa.negocio.site` (la que da tequis.travel) **da 404** (revisado el 10-nov-2026): Google cerró esos sitios. Solo redes: [Facebook](https://www.facebook.com/temazcal.en.tequisquiapan), [IG temazacal_tequisquiapan](https://www.instagram.com/temazacal_tequisquiapan/).
- Sin precio. Fotos: no hay web propia.

**Otros temazcales** (solo tequis.travel y/o el directorio 2025; [SIN CONFIRMAR] fuera de eso)
- **Temazcal Tochicalli**: Camino a los Barros, lote 24, Rancho el Pedregal, San Nicolás (C.P. 76757); 414 140 5543 / 55 8146 9910; también ceremonias de cacao y grupos de empresa ([Salud y belleza](https://tequis.travel/salud-y-belleza_tequisquiapan/)). [CONFLICTO] El directorio de tequis.travel lo escribe "Temazcal Toxically" con el mismo teléfono ([ficha](https://tequis.travel/directorio/turismo-wellness/temazcal-toxically/)); el PDF 2025, "Tochicalli".
- **Temazcal Tres Marías**: con masaje y exfoliación; "Margarita No 42 Col Santa María del Camino", 427 182 4352 ([Salud y belleza](https://tequis.travel/salud-y-belleza_tequisquiapan/)). [SIN CONFIRMAR] que esté en el municipio: lada 427 (San Juan del Río) y no ubiqué la colonia.
- **Casa Gayatri**: "casita holística" con temazcal, masajes, yoga, meditación y hospedaje pet friendly, "a 8 min del centro"; 414 226 3552; [IG casagayatri.temazcal](https://www.instagram.com/casagayatri.temazcal), [Facebook](https://www.facebook.com/CasaGayatriTx) ([Salud y belleza](https://tequis.travel/salud-y-belleza_tequisquiapan/)). Una búsqueda no dio ninguna otra fuente.
- Solo en el directorio 2025 (nombre y teléfono): Temazcal Italyolotzin y Casa de Sanación (554 126 3732), Temazcal Ríos de Agua Viva (414 219 2348), Temazcal Senderos (414 114 1328).
- **En hoteles**: Espacio Sense de La Casona (sauna, temazcal y jacuzzi; ya en el sitio como "Espacio Sense Spa – La Casona", ficha completa en `investigacion-negocios-2026-11.md`) y Hotel St. George Spa & Temazcal (La Media Luna 118 según tequis.travel; 414 109 6470; sin web propia, ver "Descartados" de negocios).

**Yoga y meditación** [SIN CONFIRMAR todo]
- **Flow Yoga**: solo nombre y teléfono en el directorio 2025 (414 118 2717). Una búsqueda no dio nada en Tequis.
- **Alhelí de la Aurora**: meditación, yoga y *sound healing*; Paseo del Jazmín 12, Barrio de San Juan; 55 9110 6405 ([Salud y belleza](https://tequis.travel/salud-y-belleza_tequisquiapan/)).
- **Mi Despertar Holístico** (La Trinidad; 55 3559 7022): cuencos, ceremonias de cacao, retiros; "los servicios se brindan en lugares sugeridos" ([tequis.travel](https://tequis.travel/mi_despertar_holistico_tequisquiapan/)). No tiene local fijo.
- Casa Gayatri (arriba) da clases de yoga.
- Para "yoga en Tequis" no hay hoy ningún estudio con web propia. No recomiendo una página dedicada.

### 3. Tranvías, callejoneadas, cabalgatas y operadores de tours

**Tranvía turístico (lo general)**
- tequis.travel: recorrido de "1 a 1:30 hrs", salidas "de viernes a domingo entre las 11 y las 17 horas" ([Imperdibles](https://tequis.travel/imperdibles_tequisquiapan/)). [FRÁGIL, sin fecha]
- **No encontré el precio del boleto en ninguna fuente** (ni webs de operadores ni prensa 2026). Redactar sin precio.
- Operadores:
  - **Tram 43 / Turismo Alternativo**: recorrido por los barrios antiguos, vegetación del semidesierto y uso de cactáceas, historia de la fundación; "Opera viernes, sábados y domingos / Días festivos/Periodo vacacional, Capacidad Máxima 30 pasajeros"; grupos cualquier día con reserva; acepta mascotas sujeto a confirmación. Andador Comercial Vista Hermosa local 1; 414 219 6059 ([tequis.travel – Tours](https://tequis.travel/tours_tequisquiapan/); [directorio 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf)). Su web `turismoalternativo.com.mx` **no existe** (NXDOMAIN, 10-nov-2026). [CONFLICTO] el directorio de tequis.travel le da 414 273 2742 ([ficha](https://tequis.travel/directorio/tours-operadora/turismo-alternativo-y-tranvia-43/)).
  - **Turis TX**: tranvía guiado por las calles principales con parada en la quesería Clarabella y en una chocolatería (degustación); el mismo recorrido en "Chinche" (mototaxi para 3) o VW Safari (4); cuatrimotos de 1 h (centro) o 2 h (capilla de fundadores, Estación Bernal, Presa Centenario y "el mirador"). Sale de calle Ezequiel Montes, fuera del hotel El Relox ([tequis.travel – Tours](https://tequis.travel/tours_tequisquiapan/)). [CONFLICTO] teléfonos: 414 101 8000 / 55 4449 4457 (Tours), 414 100 8000 ([ficha](https://tequis.travel/directorio/tours-operadora/tranvia-turis-tx/)), 414 121 8751 (directorio 2025). [CONFLICTO] dirección: la ficha dice "Calle Heróico Colegio Militar". Sin web; [IG turis_tx_oficial](https://www.instagram.com/turis_tx_oficial/).
  - **MD Turismo y Experiencias** ([mdturismoyexperiencias.com](https://www.mdturismoyexperiencias.com/), mismo andador Vista Hermosa local 1, tel. 414 112 0235 en su web y en el directorio 2025; [CONFLICTO] tequis.travel – Tours da 414 273 3516): "Tranvía Tequisquiapan", 1.5 h, viernes a domingo, salidas 12, 14, 16 y 18 h con reserva ([ficha](https://www.mdturismoyexperiencias.com/productos/tranvia-tequisquiapan/)). [FRÁGIL, 10-nov-2026] [CONFLICTO] con el horario de tequis.travel (11 a 17 h). La web no publica precios ("Pagos personalizados", aparece $0.00).
  - **Trenecito**: solo nombre y teléfono en el directorio 2025 (414 107 5055). [SIN CONFIRMAR]

**Otros tours de MD Turismo** (misma web, sin precio): Free Tour a pie de 1 h 30 min por el centro histórico ([ficha](https://www.mdturismoyexperiencias.com/productos/free-tour-tequisquapan-1jdzp/)); tour nocturno "Sabor de la noche", jueves a domingo, solo adultos, 4.5 h, con cena de pizza y copa de vino ([ficha](https://www.mdturismoyexperiencias.com/productos/tour-nocturno-gastronomico-sabor-de-la-noche-en-tequisquiapan/)); "Colores del Ópalo" a una mina en 4x4, lunes a domingo, 4.5 h ([ficha](https://www.mdturismoyexperiencias.com/productos/colores-del-opalo/)). La web no dice a qué mina lleva.

**Callejoneadas**
- **Callejoneadas Tequisquiapan** ([callejoneadastequisquiapan.com](https://callejoneadastequisquiapan.com/)): con mariachi, banda sinaloense o estudiantina, muñecos gigantes y jarritos; la web solo ofrece **eventos privados** ("Celebra en las calles de Tequisquiapan con tus familiares y amigos en un evento privado"); WhatsApp 414 104 2242; sin precio ([web](https://callejoneadastequisquiapan.com/); [tequis.travel](https://tequis.travel/callejonadas_tequisquiapan/)).
- **Callejoneada teatral de leyendas (ViveTours)**: 6 leyendas con 5 actores, familiar, inclusiva y pet friendly; "$100 adultos $60 niños e inapam"; "viernes, sabados y dias festivos 8:45pm", 1 h; sale de la Plaza Miguel Hidalgo con Plaza Santa Cecilia; 427 121 0248 ([tequis.travel – Tours](https://tequis.travel/tours_tequisquiapan/)). [FRÁGIL, sin fecha] [SIN CONFIRMAR] fuera de tequis.travel: no encontré web de ViveTours. El directorio de tequis.travel tiene además una ficha "Leyendas" con otro teléfono, 414 140 3656 ([ficha](https://tequis.travel/directorio/experiencias/leyendas/)).
- tequis.travel dice que el **primer sábado de cada mes** hay callejoneada de la estudiantina, después del video mapping en la parroquia ([¿Qué hacer?](https://tequis.travel/que_hacer_tequisquiapan/)). [SIN CONFIRMAR] (ya anotado en `investigacion-guias-2026-11.md`).

**Cabalgatas**
- **Cabalgando en Tequis** (Villa Ecuestre Cari Fratelli) — el operador mejor documentado
  - Web propia: [cabalgandoentequis.com](https://cabalgandoentequis.com/). San Fernando 52, Fracc. Granjas Residenciales de Tequisquiapan; 55 4328 4488 (coincide con [tequis.travel](https://tequis.travel/cabalgando-en-tequis-2/) y el directorio 2025); cabalgandoentequis@gmail.com.
  - "Cabalgata disponible Sábados y Domingos de 9:00 am a 2:00 pm"; "NO RECIBIMOS JINETES SIN RESERVA PREVIA". Empieza a las 9:00 con café, conchas con nata e inducción; unas 2.5 h a caballo por ejidos y sembradíos; regreso a almuerzo (consomé de carnero, barbacoa, tortillas a mano). Apta para quien nunca ha montado ([web](https://cabalgandoentequis.com/)).
  - [FRÁGIL, 10-nov-2026] Precio en su tienda: **$2,200 "Sin hospedaje" / $3,700 "Con hospedaje"** ([producto](https://cabalgandoentequis.com/products/cabalgata-matutina-tequisquiapan-alegrando-tu-manana)). No dice si es por persona; parece serlo.
  - Fotos de su propia tienda: `https://cdn.shopify.com/s/files/1/0674/1983/2516/files/cabalgata02.jpg`, `.../cabalgata05.jpg` (revisar a mano antes de usar).
  - Misma sede: "Villa Ecuestre Cari Fratelli" ofrece talleres para empresas con caballos ([Tours](https://tequis.travel/tours_tequisquiapan/)).
- **Caballos Tequis en Rancho Maguey**: clases de equitación, cabalgata de 1 h por la zona y de 2 h "al lago de Fuentezuelas", con almuerzo o tabla de quesos y vino (reserva 24 h), campamentos en vacaciones, equinoterapia, cursos de cocina. Calle Maguey 7, a 1 min de la carretera estatal 200 km 54, atrás de la maderería El Pinito; 414 104 2467 ([tequis.travel](https://tequis.travel/caballos-tequis-en-rancho-maguey/); directorio 2025 como "Caballos Tequisquiapan"). Sin web propia: [IG ranchomaguey1](https://www.instagram.com/ranchomaguey1/). Sin precio.
- La ficha genérica "Cabalgatas" del directorio de tequis.travel no da operador ([ficha](https://tequis.travel/directorio/experiencias/cabalgatas/)). Rancho San José sigue sin evidencia (ver `investigacion-guias-2026-11.md`).

**Operadores de tours (4x4, minas, ciudad)**
- **TX Eco Tours** ([txecotours.com](https://txecotours.com/), Carrizal 23, Centro): rutas en todoterreno con guía al volante: Magia Natural, Olimpo (punto más alto de Tequis, presa y Estación Bernal), Queso y Vino sobre ruedas (quesería y vinícola Santiago Apóstol), Soy Minero (buscar ópalo en La Trinidad) y Pedernal; "Si deseas ser tu quien conduce hay un cargo adicional de $1200" ([Rutas](https://txecotours.com/rutas)). [FRÁGIL, 10-nov-2026] No publica precio base. Renta también cabañas. [CONFLICTO] teléfonos: 414 112 1689 (directorio 2025 y [ficha](https://tequis.travel/directorio/experiencias/tx-eco-tours/)), 414 231 7122 / 414 109 1550 ([Tours](https://tequis.travel/tours_tequisquiapan/)), 414 231 3530 ([ficha](https://tequis.travel/tx-eco-tours/)).
- **Turisteando en Tequis** (Jazmín 36, Barrio de San Juan; 414 279 8874): rutas de queso y vino, minas de ópalo, city tour, bici tour, hospedaje ([Tours](https://tequis.travel/tours_tequisquiapan/)). Su web `turistiandoentequis.com` **no existe** (NXDOMAIN, 10-nov-2026). Solo [Facebook](https://www.facebook.com/turisteandoentequis/).
- **Viajes y Enoturismo** ([viajesyenoturismo.com.mx](https://www.viajesyenoturismo.com.mx/), Juárez 16 Poniente): se presenta como la primera tour operadora de Tequis; su web lista un "Tour a Minas de ópalo"; tequis.travel: "minas de ópalo de 4 hrs." ([Tours](https://tequis.travel/tours_tequisquiapan/)). [CONFLICTO] teléfono: web 414 112 3349; tequis.travel y directorio 414 273 5718.
- **Experiencias Río** (Hotel Río, Niños Héroes 33): web en Google Sites ([experienciasrio.com](https://www.experienciasrio.com/)) con tres experiencias de nombre poético ("Siente El Cielo", "Descubre Un Amigo", "Concientete") y sin descripción; reservas en experiencias@hotelesrio.com.mx / 414 273 0015. Poco útil para el sitio.
- **Road Adventure TX**: solo redes ([Facebook](https://www.facebook.com/roadadventuretx)); "Ezequiel Montes/Av. Juárez"; 557 342 9047 ([ficha](https://tequis.travel/directorio/tours-operadora/road-adventure-tx/)). [SIN CONFIRMAR]
- **Calesa Tours** (Geranio 17, Pedregal de Hacienda Grande; 414 107 9668): tours exprés, cervecero, circuito de viñedos ([Tours](https://tequis.travel/tours_tequisquiapan/)). Su web `lacalesatours.com.mx` **no existe** (NXDOMAIN).
- En Tours también aparecen Cadena Enoturística, Vino Tours, Nivel Turístico y Experiencias Ejecutivas: son de enoturismo o empresas, fuera de este alcance.

### 4. Aventura: paracaídas, parapente, gotcha, golf, senderismo y animales

**Paracaidismo: no hay zona de salto en Tequisquiapan.**
- No encontré ningún operador ni aeródromo de salto en el municipio. Casi todo lo que sale al buscar "salto en paracaídas Teques" es **Tequesquitengo, Morelos** (le dicen "Teques"), un destino de paracaidismo muy conocido ([México Desconocido](https://www.mexicodesconocido.com.mx/saltar-paracaidas-tequesquitengo.html)). Es muy probable que parte de esas búsquedas vengan de esa confusión.
- En Querétaro, solo agregadores mencionan saltos desde el **aeródromo de Cadereyta** ("Skydive Center Querétaro") y en Pedro Escobedo ("Paracaidismo Querétaro") ([Yumping – Skydive Center Querétaro](https://www.yumping.com/paracaidismo/skydive-center-queretaro--e19757002); [Yumping – Paracaidismo Querétaro](https://www.yumping.com/paracaidismo/paracaidismo-queretaro--e19730208)). [SIN CONFIRMAR]: no encontré web propia de ninguno.
- Recomendación: no armar una página de paracaídas que prometa algo en Tequis. Si se quiere captar la búsqueda, una nota corta que aclare la confusión y sugiera el globo, que sí sale de Tequis.

**Parapente** [SIN CONFIRMAR]
- Solo un agregador: "Vencejo" ofrece vuelos en ultraligero y parapente "en San Juan del Río, Tequisquiapan, Ezequiel Montes y Cadereyta" ([Yumping – Vencejo](https://www.yumping.com/deportes-aereos/vencejo--e19662406)). Sin web propia, sin dirección en Tequis. No recomiendo publicarlo.

**Gotcha Outdoors Tequisquiapan** [SIN CONFIRMAR fuera de directorios]
- Fray Junípero Serra 4, La Pila, Centro; 414 122 3630 (igual en la [ficha de tequis.travel](https://tequis.travel/directorio/tours-operadora/gotcha-outdoors-tequisquiapan/) y en el directorio 2025). Solo redes: [Facebook](https://www.facebook.com/outdoors.tequisquiapan/), [IG gotchaoutdoors](https://www.instagram.com/gotchaoutdoors/). Un agregador dice que también hace cabalgatas por el río ([Yumping](https://www.yumping.com/multiaventura/gotcha-outdoors--e19663431)). Sin precio ni horario oficiales.

**Golf: Club de Golf Tequisquiapan** [SIN CONFIRMAR / CONFLICTO]
- Campo privado de 18 hoyos, par 72 ([GolfPass](https://www.golfpass.com/travel-advisor/courses/22418-club-de-golf-tequisquiapan)).
- [CONFLICTO] acceso: 1golf dice "Sólo jugable en compañía de socio" ([1golf](https://www.1golf.eu/es/club/club-de-golf-tequisquiapan/)); Programa Destinos México da green fee de $2,500 entre semana y $3,500 fin de semana ([programadestinosmexico.com](https://programadestinosmexico.com/2/es/pueblos-magicos/golf-en-tequisquiapan/)), sin fecha.
- **No tiene web oficial.** Ojo: `clubdegolftequisquiapan.com` **no es del club**: es un sitio de bienes raíces del fraccionamiento, con teléfono de relleno (33 33 33 33 33) y correo de una empresa de sistemas (revisado el 10-nov-2026). No enlazarlo.
- Recomendación: no publicarlo como actividad para turistas hasta confirmar por teléfono si acepta visitantes.

**Senderismo** [SIN CONFIRMAR]
- La ficha "Ruta de Senderismo" de tequis.travel está a medio hacer: menciona "Cerro Grande: Un ascenso de 14 km", y deja vacías "Ruta del pitol" y "Estación Bernal"; el contacto es de Rancho Los Venados, copiado ([tequis.travel](https://tequis.travel/ruta-de-senderismo/)). No sirve como fuente.
- Lo que sí existe con fuente: senderismo ligero pet friendly en la mina El Redentor y recorridos a pie en El Pilón (sección 1).

**Rancho Los Venados** (reserva cinegética con safari fotográfico)
- Más de 18 especies (bisontes, venados, antílopes, cebras, jabalíes); 5 cabañas, alberca, asador; rápel, tirolesa, muro de escalada y tiro con arco con guías certificados; campamento y grupos escolares ([tequis.travel](https://tequis.travel/rancho-los-venados-reserva-cinegetica/); [queretaro.travel](https://queretaro.travel/lugares/the-paradise-of-rancho-los-venados/?lang=en)).
- tequis.travel: "Al hospedarte podrás tener un recorrido fotográfico". **No queda claro si recibe visitantes de un día**; ninguna fuente lo dice.
- Dirección: "Carr. Querétaro – Tequisquiapan Km. 42" ([tequis.travel](https://tequis.travel/rancho-los-venados/)); queretaro.travel: C.P. 76781 Tequisquiapan. El pin de tequis.travel cae en La Laja, municipio de Tequisquiapan (geocodificación inversa de OSM).
- [CONFLICTO] teléfonos: 442 156 5767 y 442 229 0600 (tequis.travel) vs 442 224 0212 (queretaro.travel).
- Web [rancholosvenados.com](https://rancholosvenados.com/): responde, pero con un muro anti-bots que no dejó leerla (10-nov-2026). Revisar a mano antes de usarla como fuente de fotos.
- Es lo más parecido a un **zoológico**: en Tequis **no hay zoológico**. El que sale en las búsquedas es el Parque Zoológico Wamerú, fuera del municipio ([escapetomexico.com](https://escapetomexico.com/actividades/diviertete-en-familia-parque-zoologico-de-wameru)); [SIN CONFIRMAR] su ubicación, no lo revisé.

**Ranchito TX** (granja para niños + cervecería) — ya mencionado en `investigacion-gastronomia-2026-11.md`
- Carretera Tequisquiapan–Querétaro km 50.2; 414 280 3590; gallos, gallinas, cerditos, borregos, conejos, patos, caballos, ponis y llamas; restaurante, juegos infantiles y "craft brewery with house beer" ([queretaro.travel](https://queretaro.travel/lugares/a-ranchito-for-the-whole-familys-fun/?lang=en); [tequis.travel](https://tequis.travel/imperdibles_tequisquiapan/)). Sin web, sin horario ni precio.

### 5. Talleres: mimbre y cestería, lavanda, vidrio, mole y cerveza

**Mimbre y cestería** (búsquedas "mimbre", "muebles de mimbre")
- Ojo: la página de tequis.travel llamada **"Mimbre"** ([/mimbre_tequisquiapan/](https://tequis.travel/mimbre_tequisquiapan/)) **es un restaurante** del Hotel St. George (Calzada de la Media Luna 83), no un taller. No enlazarla para "mimbre".
- tequis.travel: la cestería de Tequis tiene "casi 100 años"; hay "14 talleres artesanales, localizados en su mayoría en el Barrio de la Magdalena" donde los artesanos explican el proceso, de la recolección a la pieza terminada ([Artesanías](https://tequis.travel/artesanias_tequisquiapan/)). Lista con dueño, dirección, horario y teléfono (misma fuente; [FRÁGIL], sin fecha; [SIN CONFIRMAR] uno por uno, ninguno tiene web):

| Taller | Artesano/a | Dirección | Horario | Tel. |
|---|---|---|---|---|
| Querencia Media Luna | Manuel Trejo Pacheco | Margarita Maza de Juárez 5, B. La Magdalena | lun–sáb 10–17 | 414 226 3012 |
| Taller Artesanal Clarita | Martín Cruz González | Privada Zaragoza 9, B. La Magdalena | lun–sáb 10–18 | 414 105 5097 |
| Taller Nuevo Diseño | Salvador Mejía Peña | Ignacio Zaragoza 20 B, B. La Magdalena | lun–sáb 10–18 | 414 107 6670 |
| Arte en Mimbre Luna | Sergio Mejía Peña | Cerrada Berriozábal 6, B. La Magdalena | mar–vie, con reserva | 414 219 1105 |
| Taller Artesanal Margarita | Margarita Mentado Ochoa | Escobedo s/n, B. La Magdalena | con reserva | 414 109 0634 |
| Portalito Artesanal | María Solís Bárcenas | C. del Portalito s/n, B. La Magdalena | — | 414 107 4001 |
| Artesanías Toñita | Olga Leticia Hernández Peña | José Ma. Arteaga s/n, B. La Magdalena | lun–dom 10–18 | 414 231 5579 |
| Arte y Creaciones Cres y Clero | Cleotilde Albina Aranda Hernández | Fray Junípero Serra 18, B. La Magdalena | lun–dom 10–18 | 414 112 6088 |
| Artesanías Peques | Sonia Hernández Morán | Francisco Márquez 34, B. La Magdalena | lun–dom 12–19 | 414 112 7440 |
| Artesanías Pato | Fausto Ramírez Bárcenas | C. del Portalito s/n, B. La Magdalena | con reserva | 414 104 5263 |
| Artesanías La Línea | Pedro Jiménez Arroyo | Juan de la Barrera esq. Fernando Montes de Oca, B. La Magdalena | lun–sáb 10–18 | 414 231 7942 |
| Taller de Artesanos Manos Unidas | Ma. Refugio Asunción Cruz Aranda | Fernando Montes de Oca s/n, Col. Tierra Blanca, La Magdalena | lun–dom 10–18 | 414 231 7415 |
| Artesanías Ochoa | Albina Ochoa Trejo | Paseo de Jacarandas s/n, B. San Juan | fin de semana 12–20 | 414 107 6266 |
| Artesanías Aranda | Martín Aranda Morales | Calle Ejido Tequisquiapan s/n, Adolfo López Mateos | lun–vie 10–19 | 414 114 9037 |

- Estos son talleres de cestería de vara (sauz, carrizo, mimbre). **No encontré ninguna fuente sobre muebles de mimbre** en Tequis con nombre y dirección. Los mercados (Telésforo Trejo: "tejidos de vara de sauz y carrizo (sombreros y canastas)") ya están en `investigacion-guias-2026-11.md`.
- Ya en el sitio, **sin confirmar**: "Talleres de Cestería" (Casa de la Cultura, Morelos s/n), "Cestería Don Luis" (Juárez 18) y "La Casa del Mimbre" (Ezequiel Montes 28). **Ninguno aparece** en la lista de 14 talleres de tequis.travel ni en el directorio 2025. Conviene revisarlos con la misma lupa que el resto de la carga inicial.
- **Casa del Artesano** (exposición y venta de artesanía local; también organiza talleres y ferias para artesanos): [CONFLICTO] dirección "Morelos Sur 20, entre 5 de Mayo y Niños Héroes" ([Artesanías](https://tequis.travel/artesanias_tequisquiapan/)) vs "5 de Mayo 22" ([ficha](https://tequis.travel/directorio/experiencias/casa-del-artesano/)); teléfono 414 122 3695 (directorio 2025) vs 414 273 0169 (ficha). [IG lacasadelartesanotequisquiapan](https://www.instagram.com/lacasadelartesanotequisquiapan/). Gratis (es tienda). Sin horario.
- Marzo: Festival Internacional del Artesano en la Plaza Miguel Hidalgo ([Artesanías](https://tequis.travel/artesanias_tequisquiapan/); fechas en `investigacion-eventos-2027.md`).

**Granja de lavanda Lavyn** — buena candidata (web propia con precios)
- Carretera La Tortuga–Santillán km 5, 300 m adelante de Granjas Residenciales; 414 226 6883 / 414 109 0958 ([tequis.travel](https://tequis.travel/imperdibles_tequisquiapan/); [lavyn.mx](https://lavyn.mx/)). El pin cae en La Tortuga, Tequisquiapan (OSM).
- [FRÁGIL, 10-nov-2026] Precios de su web:
  - Visita guiada de 1 h: "Adultos: $100 MXN. Mayores de 60 años: $80 MXN. Niños menores de 12 años: entrada gratuita", con degustación de tés; salidas "cada hora, en punto", la última a las 4:00 p. m. ([visita guiada](https://lavyn.mx/pages/visita-guiada)). Escuelas de miércoles a domingo.
  - Taller de destilación de aceites esenciales, 2 h, viernes a domingo con reserva: "$500 MXN por persona", $450 adultos mayores, $350 de 8 a 15 años ([taller](https://lavyn.mx/pages/taller-destilacion-aceites-esenciales)).
  - Picnic entre lavandas y romeros, 2 h: "$500 MXN" una persona, "$1,000 MXN" dos o tres, botella adicional $500; anticipo del 50 % ([picnic](https://lavyn.mx/pages/picnic-entre-lavandas-y-romeros)).
- Fotos: su web es tienda Shopify (`lavyn.mx/cdn/shop/files/...`); elegir a mano.
- No está en el sitio. Responde "qué hacer en pareja", "con poco dinero" (visita de $100) y "con niños".

**Hecho en Babu** (vidrio reciclado): taller y tienda, recorridos guiados por el estudio y talleres "para todas las edades" solo con reserva; Paseo del Jazmín 8, Barrio de San Juan; 414 109 1951 ([Imperdibles](https://tequis.travel/imperdibles_tequisquiapan/)). Solo redes ([IG hecho_en_babu](https://www.instagram.com/hecho_en_babu)). [SIN CONFIRMAR] fuera de tequis.travel.

**Taller de mole artesanal en K'puchinos** [SIN CONFIRMAR]
- tequis.travel: clase con el chef, compra de ingredientes en el mercado, mole desde cero y degustación con maridaje; "dura aproximadamente 4 horas y está disponible de lunes a jueves en temporada baja. Es necesario reservar una semana antes"; Independencia 7, 414 273 2482 ([Taller de mole](https://tequis.travel/taller_de_mole_artesanal_tequisquiapan/)).
- La web de K'puchinos ([kpuchinos.com.mx](https://kpuchinos.com.mx/)) **no menciona ningún taller** (revisado el 10-nov-2026). K'puchinos ya está en el sitio. No anunciar el taller sin confirmarlo con el restaurante.

**Cervecerías artesanales**
- La ficha "Cervecerías Artesanales" de tequis.travel no nombra a ninguna ([ficha](https://tequis.travel/directorio/experiencias/cervecerias-artesanales/)).
- **Borúma**: cervecería independiente de estilo europeo fundada por un inglés; Morelos Norte 6, Centro ([queretaro.travel](https://queretaro.travel/lugares/boruma-where-flavors-intertwine-with-passion/?lang=en); [Grupo Animal](https://grupoanimal.mx/gastronomia/donde-comer/cervecerias-artesanales-en-queretaro)). Sin web propia encontrada. [CONFLICTO] tequis.travel pone en Morelos Nte. 6 la "Galería Carla Negrete" ([Arte](https://tequis.travel/arte_tequisquiapan/)): puede ser el mismo inmueble.
- **Ranchito TX** tiene cerveza de la casa (arriba). Un agregador la llama "Cervecería Tekesquite" en el mismo km 50.2. [SIN CONFIRMAR] el nombre.
- Ópalo y Amarillo Casa de Cerveza: solo en agregadores (Wanderlog). [SIN CONFIRMAR]

**Cine**: hay una sala comercial, **Cinetop Tequisquiapan** (3 salas), en Carretera Tequisquiapan–Ezequiel Montes 100, Pedregal de Hacienda Grande, según SensaCine e IMDb ([SensaCine](https://www.sensacine.com.mx/cines/cine/X11JQ/); [IMDb](https://imdb.com/es/showtimes/cinema/MX/ci1022945/MX/76746)). No encontré web oficial de Cinetop (`cinetop.com.mx` no respondió el 10-nov-2026). [SIN CONFIRMAR] que siga abierto: la cartelera de SensaCine más reciente es de jun–jul 2026. Además, el **Centro Cultural Gloria Michaus** tiene en su cartelera "conferencias, cine, teatro, exposiciones" ([Imperdibles](https://tequis.travel/imperdibles_tequisquiapan/)), sin programación publicada.

### 6. Museos, galerías y cultura

**Museo ¡México me encanta!** — el museo mejor documentado
- Fiestas y escenas de la vida mexicana en miniatura: "More than 200 miniature scenes" (mercado, circo, boda, XV años, papelería, funeral), hechas por su directora, Teresa Cisneros, desde hace "more than 35 years"; tienda de miniaturas. Av. 5 de Mayo 11, Centro; 414 273 1970 ([queretaro.travel](https://queretaro.travel/lugares/a-museum-to-fall-in-love-with-mexico/?lang=en)).
- [CONFLICTO] cifras: tequis.travel dice "más de 500 personajes distribuidos en más de 175 maquetas" en dos salas ([Imperdibles](https://tequis.travel/imperdibles_tequisquiapan/)); queretaro.travel, más de 200 escenas.
- [FRÁGIL, sin fecha] México Desconocido: lunes a sábado de 11:00 a 19:00, domingo de 10:00 a 18:00, entrada $30 ([México Desconocido](https://www.mexicodesconocido.com.mx/museos-de-queretaro.html)). Una sola fuente secundaria: redactar "entrada económica" o confirmar.
- Sin web propia: [Facebook](https://www.facebook.com/MuseoMexicomeencanta), [IG](https://www.instagram.com/museomexicomeencanta). Fotos: no hay web propia; no encontré en Commons.
- No está en el sitio. Responde "museos", "con niños", "en un día", "con poco dinero".

**Museo del Queso y el Vino** [CONFLICTO]
- tequis.travel lo lista como restaurante, con la web de Quesos VAI: Salvador Michaus 19, Centro; 414 273 6485 ([ficha](https://tequis.travel/directorio/restaurantes/museo-queso-y-vino/)). Otra guía lo pone en Salvador Michaus 3 y dice que muestra cómo se hacía el queso y el vino "con utensilios y herramientas antiguas", con exposición fotográfica y tienda ([escapetomexico.com](https://escapetomexico.com/atractivos/museo-del-queso-y-el-vino)).
- La web de Quesos VAI no lo menciona (revisado el 10-nov-2026). Finca VAI ya está en el sitio. [SIN CONFIRMAR] si funciona como museo o solo como tienda-restaurante.

**Museo de la Canasta** [SIN CONFIRMAR]
- La Wikipedia en español menciona "varios museos, como el del queso y el vino; el de la canasta" ([es.wikipedia – Tequisquiapan](https://es.wikipedia.org/wiki/Tequisquiapan)). Hay una foto de 2011 en Commons llamada [FacadeCanastaTequis.jpg](https://commons.wikimedia.org/wiki/File:FacadeCanastaTequis.jpg) (CC BY-SA 3.0, AlejandroLinaresGarcia). No encontré dirección ni fuente actual.

**Centro Cultural Gloria Michaus Fernández**
- Conferencias, cine, teatro, exposiciones, presentaciones de libros y talleres. De los Sauces 1, Centro; 414 273 1516 ([Imperdibles](https://tequis.travel/imperdibles_tequisquiapan/)). El mismo teléfono sale como "Centro Cultural" en el directorio 2025. Sin programación ni horario publicados.

**Casa del Artesano**: ver la sección 5.

**Club de Leones**: antiguo cuartel, hospital y caballeriza; Club de Leones desde 1953; "espacio cultural" con obras de teatro; Cuauhtémoc 2, Centro; horario variable ([Históricos](https://tequis.travel/historicos_tequisquiapan/)). [SIN CONFIRMAR] que tenga actividad regular.

**Galerías y arte** (todo de [tequis.travel – Arte](https://tequis.travel/arte_tequisquiapan/); [SIN CONFIRMAR] uno por uno)
- **Jardín del Arte** (San Joaquín, Centro): los fines de semana, exhibición y venta de pintura, conciertos y talleres "para todas las edades entre las 10 y las 21 horas". Gratis. Es sede del festival de mayo (ver `investigacion-eventos-2027.md`). Es el atractivo gratuito más claro de esta lista.
- **Virgilio de Mier, The Image Experience** (Plaza El Relox, locales 24 y 25; WhatsApp 55 7947 7104): galería de fotografía "¡Entrada libre!", photowalk de 4 h con cámaras de 35 mm y revelado en cuarto oscuro (cupo 8), ampliación en cuarto oscuro de 45 min. Sin precio. [IG virgiliodemier](https://www.instagram.com/virgiliodemier).
- Galerías con solo dirección y teléfono: Galería Carla Negrete (Morelos Nte. 6; 414 118 2717), Encuentro con el Arte (Fracc. Los Claustros, San Antonio 1; 424 105 1323), Espacio 33 (Niños Héroes 33A; 414 273 0015, el teléfono del Hotel Río), Tequis ART Galería (Reforma 8C, Manantiales del Prado; 442 144 1129), Arte Mayer (Carr. San Juan del Río–Tequisquiapan 132; 441 139 4388).
- [CONFLICTO] El 414 118 2717 de la Galería Carla Negrete es el mismo que el directorio 2025 da a "Flow Yoga".

### 7. Iglesias y capillas

Fuente principal: [tequis.travel – Iglesias](https://tequis.travel/iglesias_tequisquiapan/), que dice que hay "cerca de 100 fiestas patronales" al año en las comunidades. Todas son de entrada libre (son templos en uso); no hay horarios publicados.

- **Parroquia de Santa María de la Asunción** — **ya en el sitio** ("Templo de Santa María de la Asunción").
  - Templo patronal, en la Plaza Miguel Hidalgo; neoclásico, de cantera, construido "en varias etapas entre los siglos XVI y XIX"; reloj de 1897; fiesta principal el 15 de agosto con juegos mecánicos, danzas y fuegos artificiales ([tequis.travel](https://tequis.travel/iglesias_tequisquiapan/)).
  - La Wikipedia dice que la primera etapa es del siglo XVII y que la segunda terminó en 1874 ([es.wikipedia](https://es.wikipedia.org/wiki/Tequisquiapan)). [CONFLICTO] siglo XVI vs XVII.
  - Dirección: tequis.travel dice "Salvador Michaus s/n"; la base del sitio dice "Emiliano Zapata s/n". [CONFLICTO]: revisar la de la base.
  - tequis.travel menciona un video mapping en su fachada los sábados por la noche ([¿Qué hacer?](https://tequis.travel/que_hacer_tequisquiapan/)). [SIN CONFIRMAR], ya anotado en la investigación de guías.
  - Commons: [Parroquia Santa María de la Asunción (Tequisquiapan).jpg](https://commons.wikimedia.org/wiki/File:Parroquia_Santa_Mar%C3%ADa_de_la_Asunci%C3%B3n_(Tequisquiapan).jpg) (CC BY-SA 4.0, WikiMZC, 2015, 2935×3914); hay muchas más (la búsqueda da cientos).
- **Templo de Santa María Magdalena** (Gral. José María Arteaga 15, Barrio de la Magdalena)
  - "En esta iglesia se celebró la misa de fundación del pueblo en 1551"; restauración terminada en 2022; fiesta el 24 de junio, en el aniversario de Tequis ([tequis.travel](https://tequis.travel/iglesias_tequisquiapan/)).
  - Commons: [Frente de la iglesia María Magdalena Tequisquiapan Querétaro.jpg](https://commons.wikimedia.org/wiki/File:Frente_de_la_iglesia_Mar%C3%ADa_Magdalena_Tequisquiapan_Quer%C3%A9taro.jpg) (CC BY-SA 4.0, Pabliotecario, 2019, 1032×774), [Santa María Magdalena Tequis.jpg](https://commons.wikimedia.org/wiki/File:Santa_Mar%C3%ADa_Magdalena_Tequis.jpg) (CC BY-SA 4.0, Susan Mendoza, 2019, 774×1032), [Fachada de la iglesia del Barrio de la Magdalena](https://commons.wikimedia.org/wiki/File:Fachada_de_la_iglesia_del_Barrio_de_la_Magdalena,_Tequisquiapan_Qro.jpg) (CC BY-SA 4.0, MariaETX, 581×1032). Todas de 2019, antes de la restauración, y de poca resolución.
  - No está en el sitio.
- **Capilla de la Fundación / "capilla fundadores"**: ficha en el directorio de tequis.travel con tel. 442 376 7654 y pin en el centro ([ficha](https://tequis.travel/directorio/experiencias/capilla-de-fundacion/)), sin texto. Turis TX para ahí y dice que "es donde se fundó Tequisquiapan" ([Tours](https://tequis.travel/tours_tequisquiapan/)). [CONFLICTO] con la página de Iglesias, que atribuye la misa de fundación de 1551 al Templo de la Magdalena. Puede ser el mismo lugar con otro nombre: confirmar antes de publicar dos fichas.
- **Capillas de Indios**: Cruz Verde y Santa María Magdalena, "en los límites de los barrios de San Juan y La Magdalena", de la época colonial, para evangelizar; el 3 de mayo se celebra la Santa Cruz Verde en el Barrio de San Juan; La Media Luna 200, Barrio de San Juan ([tequis.travel](https://tequis.travel/iglesias_tequisquiapan/)). La Wikipedia agrega la capilla de "Los Mejía" ([es.wikipedia](https://es.wikipedia.org/wiki/Tequisquiapan)). Commons: nada identificable.
- **Capilla de Nuestro Padre Jesús**: Av. Benito Juárez 19, Centro; sin descripción ([tequis.travel](https://tequis.travel/iglesias_tequisquiapan/)).
- **Santuario de Nuestra Señora del Perpetuo Socorro**: "en la cúspide del Fraccionamiento los viñedos de Tequisquiapan", con vista panorámica; la ficha lo ofrece para bodas; tels. 414 114 7765 / 446 100 9516 ([tequis.travel](https://tequis.travel/santuario_de_nuestra_senora_del_perpetuo_socorro_tequisquiapan/)). Solo [Facebook](https://www.facebook.com/profile.php?id=61554807492674). Es lo más parecido a un **mirador** con fuente, junto con la Estación Bernal.
- **Capilla Ecuménica del Club de Golf**: solo la menciona el sitio de bienes raíces (sección 4). No es pública.
- Commons extra (sin identificar bien cuál capilla): [Capilla en Tequisquiapan.jpg](https://commons.wikimedia.org/wiki/File:Capilla_en_Tequisquiapan.jpg) (CC BY-SA 4.0, Miguel A. Daniel Jiménez Velázquez, 2015). **Ojo con homónimos**: "Capilla (Tequisquiapan, Dolores Hidalgo)" es de Guanajuato.

### 8. Haciendas históricas

**Lo que dicen las fuentes**
- tequis.travel tiene fichas de seis haciendas con dirección y pin, **sin descripción, horario ni contacto** ([directorio – Haciendas](https://tequis.travel/directorio/haciendas/casco-viejo-hacienda-grande/)); el directorio 2025 trae la misma lista. Ninguna fuente dice que alguna se pueda visitar por dentro.
- La *Crónica del Municipio de Tequisquiapan* (cronista Jesús Landaverde Chávez; colección del Gobierno del Estado "Querétaro, visión de sus cronistas") transcribe un informe fechado en San Juan del Río en 1794: las haciendas del partido "son 6"; cuatro eran de don Felipe Antonio Teruel (la "de Tequisquiapan", Fuentezuelas, Santillán y San Nicolás), y las otras dos eran Fuente de Nava y "la de la Laxa", del Marqués del Villar del Águila ([PDF en UNAM](https://epaginapersonal.unam.mx/app/webroot/files/251/Cronica_del_Municipio_de_Tequisquiapanpdf.pdf)). La misma crónica llama a la de Tequisquiapan "hacienda grande". Es la mejor fuente histórica que encontré.

| Hacienda | Dirección (tequis.travel / directorio 2025) | Municipio (pin, OSM) | Lo que hay de historia | Visitable |
|---|---|---|---|---|
| Casco Viejo Hacienda Grande | [CONFLICTO] Fernando de la Mora Magdaleno 82, Centro ([ficha](https://tequis.travel/directorio/haciendas/casco-viejo-hacienda-grande/)) vs Francisco I. Madero esq. Fernando de la Mora 8, Barrio de la Magdalena (directorio 2025) | Tequisquiapan (centro) | 1794: casa a un cuarto de legua al norte del pueblo, con obraje, tenería y molino; junto a un ojo de agua caliente con "presa o alberca grande" (crónica) | sin dato |
| Hacienda La Laja | Bulevar de las Haciendas, Delegación La Laja (directorio 2025) | Tequisquiapan | 1794: del Marqués del Villar del Águila (crónica) | sin dato |
| Hacienda Fuentezuelas | Residencial Haciendas de Tequisquiapan (ficha) / Delegación Fuentezuelas | Tequisquiapan | 1794: de Teruel, a 4 leguas al poniente, con presa de temporal (crónica) | sin dato |
| Casco de la Ex Hacienda Santillán | C. Pinos 21, Santillán | Santillán, Tequisquiapan | 1794: de Teruel, unas 3 leguas al norte, con ojo de agua y jagüey (crónica) | sin dato |
| Hacienda San Nicolás | Calle 12 de Octubre, San Nicolás | San Nicolás, Tequisquiapan | 1794: de Teruel, "a la orilla del río", unas 2 leguas al suroeste (crónica) | sin dato |
| Hacienda San José | San Ignacio de Loyola, San José de la Laja | San José de la Laja, Tequisquiapan | no aparece en el informe de 1794 | sin dato |

- **Hacienda Tres Vidas** (San José de la Laja) es un hotel con spa y salida de globos ([Tours](https://tequis.travel/tours_tequisquiapan/), "Querétaro en Globo"); ver negocios/hospedaje. No es la "Hacienda San José" de la ficha.
- **Hacienda El Aguacate** (siglo XIX, molino restaurado) es hospedaje ([Food & Pleasure](https://foodandpleasure.com/hacienda-el-aguacate-tequisquiapan/)); no la revisé, otra investigación tiene hospedaje.
- Fotos: **no encontré ninguna en Commons**. Ojo: "Exhacienda Tequisquiapan" en Commons es de **Dolores Hidalgo, Guanajuato** (homónimo), no de Querétaro.
- Recomendación: una página "Haciendas de Tequis" solo puede ser histórica (el informe de 1794) y debe decir que son propiedades privadas o cascos dentro de comunidades, sin prometer visitas.

### 9. Monumentos, plaza, parques, miradores, río y presa (gratis)

- **Monumento al Centro Geográfico de México** (Niños Héroes 17, Centro; abierto 24 h): en 1916 Venustiano Carranza decretó a Tequis centro geográfico del país; monumento en forma de péndulo con placa de 1978 ([Históricos](https://tequis.travel/historicos_tequisquiapan/)). La Wikipedia confirma el decreto de Carranza ([es.wikipedia](https://es.wikipedia.org/wiki/Tequisquiapan)). Gratis. **No está en el sitio** y responde la búsqueda "centro geográfico".
  - Commons: serie "Centro geográfico de México en Tequisquiapan, Querétaro 01…10" (CC BY-SA 4.0, Isaacvp, 22-oct-2022, 4096×3072), p. ej. [05](https://commons.wikimedia.org/wiki/File:Centro_geogr%C3%A1fico_de_M%C3%A9xico_en_Tequisquiapan,_Quer%C3%A9taro_05.jpg) (horizontal) y [01](https://commons.wikimedia.org/wiki/File:Centro_geogr%C3%A1fico_de_M%C3%A9xico_en_Tequisquiapan,_Quer%C3%A9taro_01.jpg) (vertical). Buena calidad.
  - Al redactar, decir "fue declarado centro geográfico por decreto en 1916", que es lo que dicen las fuentes. No revisé si algún cálculo actual lo ubica en otro lugar, así que no afirmar que lo sea hoy.
- **Plaza Miguel Hidalgo** — **ya en el sitio**. Portales de cantera, quiosco de principios de siglo, sabinos y fresnos, puestos de dulces y nieves ([Históricos](https://tequis.travel/historicos_tequisquiapan/)). Commons: [Vista del jardin principal de Tequis.jpg](https://commons.wikimedia.org/wiki/File:Vista_del_jardin_principal_de_Tequis.jpg) (CC BY-SA 4.0, 2019), además de la que ya usa el sitio. [CONFLICTO] la ficha "Jardín Principal" del directorio de tequis.travel trae una dirección en Los Claustros, Magdalena ([ficha](https://tequis.travel/directorio/experiencias/jardin-principal/)), que no es la plaza.
- **Parque La Pila** y **La Pila** — **ya en el sitio**. Pila de agua de 1567 en el antiguo molino, sede de la feria del queso y el vino; Ezequiel Montes 29; 24 h ([Históricos](https://tequis.travel/historicos_tequisquiapan/)). La crónica municipal cita al cronista Pedro Martínez Salazar y Pacheco: la construyó Antonio de Luzundia sobre "un gran venero", con agua "vitrolosa caliente", y movía un molino ([Crónica](https://epaginapersonal.unam.mx/app/webroot/files/251/Cronica_del_Municipio_de_Tequisquiapanpdf.pdf)). Ver el aviso de inundaciones (2021 y sep-2025) en `investigacion-guias-2026-11.md`. Commons: [FeriaQuesoVino27.jpg](https://commons.wikimedia.org/wiki/File:FeriaQuesoVino27.jpg) a 30 (CC BY-SA 3.0, AlejandroLinaresGarcia, 2011): son de la feria, no del parque vacío.
- **Callejón del Piojo**: antiguos lavaderos públicos, reabierto en 2018; pasaje escalonado entre el Barrio de la Magdalena y Hacienda Grande; Morelos Norte 10, detrás del Parque La Pila ([Históricos](https://tequis.travel/historicos_tequisquiapan/)). Gratis. Sin foto en Commons.
- **Antigua Estación Bernal** (Juárez Oriente): tequis.travel la presenta como mirador al amanecer y atardecer ([Históricos](https://tequis.travel/historicos_tequisquiapan/)), pero está deteriorada según la Gaceta Parlamentaria de oct-2026. **Ver el aviso 2 de `investigacion-guias-2026-11.md`**: no presentarla como mirador acondicionado. TX Eco Tours y Turis TX la incluyen en sus rutas.
- **Miradores**: no encontré un mirador oficial con nombre. Las opciones con fuente son el Santuario del Perpetuo Socorro (sección 7), la Estación Bernal (con el aviso) y "el punto mas alto de Tequis" de la Ruta del Olimpo de TX Eco Tours (sección 3). Turis TX menciona "el mirador" sin decir cuál. [SIN CONFIRMAR]
- **Presa Centenario** — **ya en el sitio**. Ver el aviso de inundaciones. No encontré foto libre en Commons con ese nombre (la búsqueda solo da libros con "centenario").
- **Río**: no encontré un paseo o andador junto al río con fuente. Según un agregador, Gotcha Outdoors hace cabalgatas por el río (sección 4).

## Qué páginas se pueden armar

Conteo de lugares **confirmados** (✔ en la tabla) de esta investigación. Entre paréntesis, los que solo tienen fuente municipal y habría que confirmar antes. Balnearios, globo, viñedos, queserías y mercados vienen de las otras investigaciones y no se cuentan aquí.

| Página | Confirmados | Lugares | Comentario |
|---|---|---|---|
| **Qué hacer gratis o con poco dinero** | **11** | Plaza Hidalgo, Parroquia, Templo de la Magdalena, Capillas de Indios, Centro Geográfico, Parque La Pila, Jardín del Arte (fines de semana), Casa del Artesano, Centro Cultural, Lavyn (visita $100, niños gratis), Museo ¡México me encanta! (~$30) (+ Callejón del Piojo, galería Virgilio de Mier, callejoneada de leyendas $100) | La más sólida. Se suma a los 4 mercados de la investigación de guías. Sin precios exactos salvo Lavyn. |
| **Tequis en un día** | **9** | Plaza y Parroquia, Magdalena, Centro Geográfico, La Pila, Museo ¡México me encanta!, Casa del Artesano, Jardín del Arte, tranvía o free tour de MD Turismo, El Redentor (medio día) | Cuidado con el horario del tranvía ([CONFLICTO] 11–17 h vs 12–18 h) y con que el tranvía y el Jardín del Arte son solo de fin de semana. |
| **Iglesias y haciendas** | **3 iglesias + 6 haciendas (solo historia)** | Parroquia de la Asunción (ya), Templo de Santa María Magdalena (1551), Capillas de Indios; las 6 haciendas del informe de 1794 (+ Santuario del Perpetuo Socorro, Capilla de Nuestro Padre Jesús, Capilla de la Fundación [CONFLICTO]) | Las iglesias tienen fotos libres en Commons. Las haciendas no se pueden presentar como visitables ni tienen fotos. |
| **Qué hacer en pareja** | **6** | Cabalgando en Tequis, picnic de Lavyn ($1,000 para dos), Temazcal Tonatiu, Espacio Sense (ya), tour nocturno de MD Turismo (solo adultos), callejoneada privada (+ galería de fotografía Virgilio de Mier) | Se completa con globo y viñedos de las otras investigaciones. |
| **Minas de ópalo** | **1 mina + 3 operadores** | El Redentor; TX Eco Tours ("Soy Minero"), MD Turismo ("Colores del Ópalo"), Viajes y Enoturismo (+ El Pilón, Turisteando en Tequis, sitio arqueológico La Trinidad) | Se puede, pero sin precio (solo el promedio de $200 de Food & Pleasure, mar-2026) y con el conflicto del municipio. |
| **Aventura: paracaídas, gotcha, cabalgatas** | **3** | Cabalgando en Tequis, TX Eco Tours (4x4), El Redentor (4x4 y senderismo) (+ Rancho Maguey, Gotcha Outdoors, cuatrimotos de Turis TX, rápel de El Pilón, Rancho Los Venados si recibe visitas de día) | **No hay paracaídas ni parapente confirmados.** Sugiero titularla "Aventura en Tequis: cabalgatas, 4x4 y minas" y aclarar lo del paracaídas en un párrafo ("Teques" es Tequesquitengo). |
| **Temazcal en Tequis** | **2** | Temazcal Tonatiu Iquzayampa, Espacio Sense de La Casona (ya) (+ Tochicalli, Tres Marías, Casa Gayatri, St. George, 3 más del directorio) | Delgada. Ninguno publica precio. Mejor como sección de una página de bienestar que como página propia, o esperar a confirmar dos o tres más. |
| **Qué hacer de noche** | **4** | Tour nocturno de MD Turismo (jue–dom), callejoneada privada, Borúma, Plaza Hidalgo de noche (+ callejoneada de leyendas vie–sáb 20:45, Cinetop, video mapping, bares de la carga inicial sin confirmar) | Delgada. Conviene esperar a confirmar la callejoneada de leyendas y cruzar con los bares de `investigacion-gastronomia-2026-11.md` y `investigacion-negocios-2026-11.md`. |

**Otras búsquedas, lo que hay:**
- **Con adolescentes**: 3 confirmados (TX Eco Tours, Cabalgando en Tequis, El Redentor) + gotcha, cuatrimotos y Cinetop sin confirmar.
- **Entre semana**: casi todo lo organizado es de fin de semana (tranvía vie–dom, Cabalgando sáb–dom, taller de Lavyn vie–dom, Jardín del Arte fines de semana, leyendas vie–sáb). Abren entre semana: iglesias, plaza y monumentos, MD "Colores del Ópalo" (lun–dom), Museo ¡México me encanta! (lun–sáb según una fuente). Una página "entre semana" sería honesta solo si dice eso.
- **Alrededores**: 5 confirmados (El Redentor, Lavyn, Ranchito TX, Rancho Los Venados, las haciendas como historia) + Bernal, de la investigación de guías.
- **Tranvía / turibus**: el tranvía existe (4 operadores), pero ninguno tiene precio ni web propia salvo MD Turismo. No encontré "turibus" en Tequis.
- **Yoga, golf, parapente, paracaídas, zoológico**: no recomiendo páginas propias (ver los avisos).
- **Mimbre / muebles de mimbre**: la lista de 14 talleres da para una sección dentro de compras o "talleres", pero son solo fuente municipal. Antes, revisar los 3 lugares de cestería de la carga inicial que no aparecen en ninguna fuente.
- **Museos**: 2 confirmados (Museo ¡México me encanta!, Centro Cultural) + Museo del Queso y el Vino y Museo de la Canasta sin confirmar. Mejor como sección de "Tequis en un día" o "con niños".

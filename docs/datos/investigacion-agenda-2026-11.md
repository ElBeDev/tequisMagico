# Investigación de agenda: temporada navideña 2026, eventos recurrentes y "Este fin de semana"

Consultado el **10 de noviembre de 2026**. Continúa [`investigacion-eventos-2027.md`](investigacion-eventos-2027.md) (9 nov 2026): lo que ese archivo ya resolvió no se repite aquí, solo se actualiza cuando hay algo nuevo.

## Leyenda

- **[FRÁGIL]**: precio u horario que cambia cada año. Mejor redactar sin cifra o con "en 2025 costaba…".
- **[CONFLICTO]**: las fuentes no coinciden. Se anotan todas.
- **[SIN CONFIRMAR]**: solo lo vi en un resumen del buscador, en un título sin poder abrir la nota, o en una fuente sin fecha.
- **[PROBABLE]**: fecha deducida de las ediciones anteriores o de una fecha fija, sin anuncio de este año.
- **Fecha 2027 por confirmar**: el evento se repite, pero nadie ha anunciado la edición 2027.
- **Municipal**: lo organiza el municipio (o el estado), es gratis y en espacio público. **Privado**: lo organiza un negocio o un particular, casi siempre con boleto.

Cada dato lleva la URL y la fecha de publicación de la fuente. "s/f" = la fuente no tiene fecha.

### Límites de esta consulta

- Se agotó el cupo de búsquedas web a media investigación. Lo que falta está marcado [SIN CONFIRMAR] o "no lo encontré", nunca relleno.
- El Sol de San Juan del Río y Diario de Querétaro (`oem.com.mx`) dan 403: de ellos solo hay títulos.
- AlertaQro y Querétaro de Verdad ahora piden una verificación anti-bot a los scripts. La nota de AlertaQro del 9 nov sí la leí; la del 15 dic 2025 ya no abrió.
- Facebook e Instagram no se pueden leer sin sesión, y `origens.mx` responde 406 a scripts (su blog sí se leyó con otro método).

---

## Avisos

1. **La agenda de tequis.travel está abandonada y no sirve para fechas futuras.** Revisé las 196 fichas una por una: todas caen entre el **18 nov 2023 y el 30 ago 2024**, la última se publicó el **16 jul 2024** y **ninguna tiene fecha después del 10 nov 2026**. La página `/agenda/` muestra "Noviembre, 2026" vacío. Sirve solo como "última edición documentada" (2023–2024). Detalle en la sección "Agenda de tequis.travel".
2. **"Belén Musical" no es una pastorela ni un nacimiento musical.** En tequis.travel es una cantante (Belén) que se presentó el viernes 12 jul 2024 a las 18:00 en la "plaza Pedregal", con entrada libre ([flyer](https://tequis.travel/events/belen-musical/), publicado 7 jul 2024). No hay que crear un evento navideño con ese nombre.
3. **Este fin de semana (14–15 nov) hay dos eventos que no tenemos.** Uno es la carrera municipal **Trail Urban La Fuente** (dom 15). El otro es el **Mezcalovers Fest**, privado (sáb 14 y dom 15). Además, **Estrellas y Raíces** (ya en el sitio) no lo organiza el municipio. Ver la tabla.
4. **El Desfile Navideño del Festival Alegría 2026 en Tequis ya tiene fecha: viernes 18 dic, 19:00.** Es el único evento del programa navideño 2026 confirmado además de las fechas de la Villa. Falta darlo de alta.
5. **De la Villa Navideña 2026 solo se conocen las fechas (13 dic al 6 ene).** No se han anunciado sede, horario de encendido ni programa. Ojo: en 2025 también se anunció hasta el 6 de enero y al final se alargó hasta el 11 [SIN CONFIRMAR, solo el título de El Sol de San Juan del Río]. La fecha de cierre puede cambiar.
6. **Cambia lo que dice el archivo anterior sobre la "Fiesta en el Aire".** Ese archivo da como última edición la de 2019. Hay una más: el **18 dic 2021** el municipio celebró en el Parque La Pila el "23º aniversario de la llegada de los globos aerostáticos", de 5:30 a 21:00 ([Tiempo Libre Qro, 9 dic 2021](https://tiempolibreqro.com/globos-aerostaticos-surcaran-el-cielo-de-tequisquiapan/)). De 2022 a 2025 sigue sin haber edición. Lo que sí hubo fue **globos para las cartas a los Reyes** el 5 y 6 ene 2026 (ver "Temporada navideña"). Sigue sin justificar un "Festival del Globo".
7. **No des de alta las "Callejoneadas" municipales como evento recurrente.** La última documentada es del 6 jul 2024, con la administración 2021–2024. Desde entonces no aparece ninguna en prensa ni en tequis.travel. Lo que sí sigue publicado es la callejoneada de leyendas de ViveTours, de pago, que ya cubre "Noches de Leyendas" (ver "Recurrentes").
8. **El horario de "Año Nuevo en la Plaza" sigue guardado en UTC.** El API sigue dando `2026-12-31T20:00Z` a `2027-01-01T02:00Z`, que en Tequis son las 14:00 a 20:00. Es el aviso 7 del archivo anterior y no se ha corregido.
9. **El municipio prohibió usar animales en fiestas.** El Centro de Atención Animal (CAAT) avisó el 16 dic 2025 que queda prohibido usar burros, caballos y otras especies en fiestas patronales, celebraciones religiosas "o cualquier tipo de evento" ([Amanecer, 16 dic 2025](https://amanecerqro.com/prohiben-uso-de-animales-en-fiestas-y-celebraciones-en-tequisquiapan/)). Las descripciones de posadas o desfiles no deben mencionar burros ni caballos. La nota no habla de corridas de toros. Que no haya Feria del Toro en 2026 no prueba que se deba a esto.

---

## Tabla: eventos a dar de alta (o corregir)

Solo lo que tiene fecha después del 10 nov 2026, más lo recurrente que vale la pena tener con "fecha por confirmar". En la última columna, "sí" quiere decir que ya está en `GET /api/events` (consultado hoy, 17 eventos).

| Nombre | Fechas | Sede | Costo | Organizador | Fuente | ¿En el sitio? |
|---|---|---|---|---|---|---|
| Estrellas y Raíces | sáb 14 nov 2026; talleres de 12:00 a 17:00 y meditación a las 17:30 | Plaza Miguel Hidalgo | Gratis | **Privado**: Majo Plascencia WP y Sortu Studio, con apoyo de Sectur estatal y Sectur Tequis | [Amanecer, 9 nov 2026](https://amanecerqro.com/estrellas-y-raices-tequisquiapan/) | **sí** (corregir organizador) |
| Mezcalovers Fest Tequisquiapan (1.ª ed.) | sáb 14 y dom 15 nov 2026, 12:00–20:00 | C.C. El Relox, Salvador Michaus 1, Centro | **De pago**: precio en Eventbrite, que no lo muestra sin sesión [FRÁGIL] | **Privado**: Mega Services Global Operations LLC; patrocinan The Mega Drinks y Plaza Relox | [mezcaloversfest.com/tequisquiapan](https://mezcaloversfest.com/tequisquiapan) (s/f), [NotiMx, 10 oct 2026](https://www.notimx.mx/2026/10/mezcalovers-fest-2026-tequisquiapan-se.html), [Eventbrite](https://www.eventbrite.com/e/mezcalovers-fest-tequisquiapan-tickets-1997782162226) | no |
| Trail Urban La Fuente 2026 (1.ª ed.) | dom 15 nov 2026, 07:00 | Comunidad de La Fuente, salida en el centro junto al módulo de seguridad | $280; vecinos y locatarios de La Fuente $230 [FRÁGIL] | **Municipal**: Sectur municipal y Dirección del Deporte | [Al Minuto, 9 nov 2026](https://www.alminutonoticias.com.mx/tequisquiapan/abren-registro-para-el-trail-urban-de-la-fuente-en-tequisquiapan/2026/11/09/) | no |
| Desfile de la Revolución | vie 20 nov 2026 [PROBABLE]; en 2025 fue el 20 | Jardín Miguel Hidalgo y calles del centro | Gratis | **Municipal**, con escuelas | [Al Minuto, 20 nov 2025](https://www.alminutonoticias.com.mx/tequisquiapan/tequisquiapan-celebra-la-revolucion-mexicana-con-desfile-civico-y-participacion-de-64-contingentes/2025/11/20/) | no (prioridad baja: es cívico) |
| Villa Navideña 2026 | 13 dic 2026 al 6 ene 2027 | Sin anunciar. En 2025: Plaza Miguel Hidalgo, Plaza Santa Cecilia, Parque La Pila y Auditorio Municipal | Gratis; carrusel de dos pisos gratis | **Municipal** (Sectur municipal) | [AlertaQro, 9 nov 2026](https://www.alertaqronoticias.com/2026/11/09/volvera-la-villa-navidena-a-tequisquiapan-en-diciembre/) | **sí** |
| Encendido del árbol artesanal (inauguración de la Villa) | [PROBABLE] dom 13 dic 2026. En 2025 fue el 14 dic a las 20:00 y en 2024 también el 14 dic | Jardín / Plaza Miguel Hidalgo (2024 y 2025) | Gratis | **Municipal** | [AlertaQro, 12 dic 2025](https://www.alertaqronoticias.com/2025/12/12/asi-se-vivira-la-navidad-en-tequisquiapan/); [Amanecer, 14 dic 2024](https://amanecerqro.com/tequisquiapan-hace-homenaje-a-sus-artesanos-en-villa-navidena/) | no (puede ir dentro de la Villa) |
| Desfile Navideño "Festival Alegría" 2026 | **vie 18 dic 2026, 19:00** | Av. Juárez hasta la calle Francisco Martínez Elías | Gratis | **Gobierno del Estado / DIF estatal** con el municipio [la nota de 2026 no nombra organizador; en 2025 era el DIF estatal] | [AlertaQro, 4 nov 2026](https://www.alertaqronoticias.com/2026/11/04/desfiles-pistas-de-hielo-y-un-pino-monumental-vuelve-el-festival-alegria/); [Tiempo Libre Qro, 4 nov 2026](https://tiempolibreqro.com/anuncian-el-calendario-del-festival-alegria-2026-desfiles-pistas-de-hielo-y-pino-monumental-en-queretaro/) | **no: dar de alta** |
| Posadas Navideñas | 16 al 23 dic (fecha litúrgica fija) | Calles del centro | Gratis | Vecinal o parroquial; el municipio no aparece en 2025 | ver "Temporada navideña" | **sí** |
| Desfile de carros bíblicos de Nochebuena | jue 24 dic [PROBABLE]; hora en [CONFLICTO] | Centro; en 2023 de la explanada frente a Maderamen a Av. Juárez pasando el Puente Viejo | Gratis | Municipio (2023); Comité Ciudadano Voluntario (2019) | [flyer en tequis.travel, 19 dic 2023](https://tequis.travel/events/desfile-de-carros-biblicos/); [Tiempo Libre Qro, 22 dic 2019](https://tiempolibreqro.com/disfruta-las-ultimas-posadas-en-tequisquiapan/) | no; [SIN CONFIRMAR] que se hiciera en 2024 o 2025 |
| Año Nuevo en la Plaza | jue 31 dic 2026, desde las 22:00 [PROBABLE] | Plaza Santa Cecilia y Plaza Miguel Hidalgo | Gratis | **Municipal** | ver "Temporada navideña" | **sí** (corregir la hora, aviso 8) |
| Cartas a los Reyes en globo | [PROBABLE] 5 y 6 ene 2027. En 2026 fue el 5 y 6 ene; el programa lo anunciaba para el 27 y 28 dic [CONFLICTO] | Parque La Pila | Gratis | **Municipal** (Dirección de Turismo) con Vuela en Globo | [Amanecer, 5 ene 2026](https://amanecerqro.com/la-ninez-tequisquiapense-volo-sus-deseos-en-globo-aerostatico/) | no |
| Fiesta de los Papalotes 2027 | Fecha 2027 por confirmar; suele caer entre fines de febrero y principios de marzo | Cava Bocanegra, Carr. Estatal 200 km 50, Fuentezuelas | En 2026, $180 adulto y gratis menores de 1.20 m [FRÁGIL] | **Privado** (Adolfo Barrón); Sectur estatal lo anuncia | [Al Minuto, 16 feb 2026](https://www.alminutonoticias.com.mx/tequisquiapan/alistan-nueva-edicion-del-festival-del-papalote-en-tequisquiapan/2026/02/16/) | no |
| Expo Cactus y otras Suculentas del Semidesierto 2027 | Fecha 2027 por confirmar; finales de julio o agosto | Parque La Pila | Gratis | Productores (Unión de Productores de Cactáceas…) con Sectur municipal | [Al Minuto, 29 jul 2026](https://www.alminutonoticias.com.mx/tequisquiapan/tequisquiapan-florece-con-la-quinta-edicion-de-la-expo-cactus-y-otras-suculentas-2026/2026/07/29/) | no |
| Festival Viva el Queso 2027 | Fecha 2027 por confirmar; octubre o noviembre | Cava Bocanegra (2025) | En 2025 y 2026, $150 [FRÁGIL] | **Privado** (coordina Denisse Reyes) | [Amanecer, 28 oct 2025](https://amanecerqro.com/tequisquiapan-celebra-la-5a-edicion-del-festival-viva-el-queso-2025/); [vivaelqueso.com](https://www.vivaelqueso.com/) (s/f) | no |

**Fuera del municipio, para quien se queda en Tequis** (ver la sección de vendimias): "Descorcha tu mente" en Viñedos Azteca, sáb 28 nov 2026, Ezequiel Montes, de pago; "Año Nuevo Entre Viñedos" en Donato, 31 dic 2026, Colón/Ezequiel Montes [CONFLICTO de municipio], de pago.

---

## Fichas de los eventos nuevos

### Trail Urban La Fuente 2026 (municipal)
- **Fecha:** domingo **15 nov 2026, 07:00**. Salida en el centro de la comunidad de La Fuente, junto al módulo de seguridad.
- **Distancias:** la convocatoria dice 5 y 8 km, pero la premiación habla de 5.5 y 8.5 km [CONFLICTO].
- **Premios:**
  - 8.5 km: $2,000, $1,500 y $1,000.
  - 5.5 km: $1,000, $750 y $500.
  - Hay rama femenil y varonil.
- **Inscripción:** $280 público general y $230 habitantes y locatarios de La Fuente [FRÁGIL]. Los primeros 300 inscritos reciben kit.
- **Dónde inscribirse:**
  - Secretaría de Turismo, Andador Independencia 1, de 9:00 a 18:00.
  - Dirección del Deporte, Unidad Deportiva Emiliano Zapata, de 8:00 a 16:00.
  - Módulo de Seguridad de La Fuente, después de las 18:00.
  - Informes: 414 107 7734.
- **Extra:** pabellón gastronómico de vecinos y locatarios de La Fuente.
- **Organiza:** el Municipio, por medio de la Secretaría de Turismo y la Dirección del Deporte.
- **Recurrencia:** es la primera edición; `is_recurring = false`.
- **Fuente:** [Al Minuto, 9 nov 2026](https://www.alminutonoticias.com.mx/tequisquiapan/abren-registro-para-el-trail-urban-de-la-fuente-en-tequisquiapan/2026/11/09/).

### Mezcalovers Fest Tequisquiapan (privado, de pago)
- **Fecha:** **14 y 15 nov 2026, 12:00–20:00**; el acceso abre a las 11:45, según Eventbrite.
- **Sede:** Centro Comercial El Relox, Salvador Michaus 1, Centro.
- **Qué incluye, según el sitio oficial:**
  - Pulsera, vaso de degustación, cóctel de bienvenida y aperitivo.
  - Mezcaleada guiada, charlas, VIP lounge y concierto.
  - Más de 60 marcas, según NotiMx.
- **Boletos:** en Eventbrite. El precio no se ve sin sesión, así que no lo publiques sin revisarlo.
- **Organiza:** Mega Services Global Operations LLC, según Eventbrite. Patrocinan The Mega Drinks y Plaza Relox.
- **Fuentes:**
  - [Sitio oficial](https://mezcaloversfest.com/tequisquiapan) (s/f).
  - [NotiMx, 10 oct 2026](https://www.notimx.mx/2026/10/mezcalovers-fest-2026-tequisquiapan-se.html).
  - [Eventbrite](https://www.eventbrite.com/e/mezcalovers-fest-tequisquiapan-tickets-1997782162226).
- **Recurrencia:** es la primera edición; no sé si se repetirá.

### Estrellas y Raíces (ya en el sitio: corregir)
- **Horario:** sábado 14 nov.
  - Talleres de artesanos de **12:00 a 17:00**.
  - Meditación colectiva gratuita "Sanación con Estrellas y Frecuencias" a las **17:30** (Amanecer).
  - AlertaQro daba "de 12:00 a 19:00" [CONFLICTO menor; el horario de Amanecer es más detallado].
- **Asistencia esperada:** "más de 888 personas" para intentar un récord (Amanecer); AlertaQro dice "más de 800".
- **Organizador:** lo organizan particulares, **no** el municipio: "Artesanos & Wedding Planners" de Majo Plascencia WP y "Magia y Mar" / Sortu Studio de Chío Díaz Leal Arrillaga. Cuentan "con el impulso" de la Secretaría de Turismo del estado y "la participación" de la de Tequisquiapan.
- **Fuente:** [Amanecer, 9 nov 2026](https://amanecerqro.com/estrellas-y-raices-tequisquiapan/).

### Desfile de la Revolución (opcional)
- **2025:** acto cívico en el Jardín Miguel Hidalgo y desfile por el centro el **20 nov 2025**, con 64 contingentes de escuelas y academias deportivas ([Al Minuto, 20 nov 2025](https://www.alminutonoticias.com.mx/tequisquiapan/tequisquiapan-celebra-la-revolucion-mexicana-con-desfile-civico-y-participacion-de-64-contingentes/2025/11/20/)).
- **2026:** sin anunciar. El 20 nov cae en viernes [PROBABLE]. Es un evento cívico y local; solo vale la pena si se quiere llenar "este fin de semana".

---

## Temporada navideña 2026

### Qué está confirmado para 2026

| Evento | Fecha | Detalle | Fuente |
|---|---|---|---|
| Villa Navideña | 13 dic 2026 al 6 ene 2027 | Repite el tema de productos mexicanos; venden productores locales; carrusel de dos pisos gratis. En 2025 tuvo 700 mil visitantes, según el municipio. | [AlertaQro, 9 nov 2026](https://www.alertaqronoticias.com/2026/11/09/volvera-la-villa-navidena-a-tequisquiapan-en-diciembre/) |
| Desfile del Festival Alegría | vie 18 dic 2026, 19:00 | Av. Juárez hasta Francisco Martínez Elías. Cierra la ronda estatal de desfiles, que empieza el 9 dic en San Juan del Río. El festival estatal va del 28 nov 2026 al 6 ene 2027. | [AlertaQro, 4 nov 2026](https://www.alertaqronoticias.com/2026/11/04/desfiles-pistas-de-hielo-y-un-pino-monumental-vuelve-el-festival-alegria/); [Tiempo Libre Qro, 4 nov 2026](https://tiempolibreqro.com/anuncian-el-calendario-del-festival-alegria-2026-desfiles-pistas-de-hielo-y-pino-monumental-en-queretaro/) |
| Pista de hielo | **No hay** en Tequis en 2026 | El calendario estatal 2026 solo pone pistas en San Juan del Río (28 nov al 12 dic) y Corregidora (17 al 31 dic). | mismas fuentes |

Todo lo demás (encendido, conciertos, posadas, Año Nuevo, Reyes) **no se ha anunciado**. Abajo va cómo fue en 2025, con fuente, para redactar "suele haber…" sin prometer fechas.

### Cómo fue en 2025 (para usar como patrón, marcado)

**Villa Navideña 2025: del 14 dic al 6 ene, gratis.** Al final duró hasta el 11 ene [SIN CONFIRMAR]: solo vi el título "Villa Navideña continuará hasta el 11 de enero en Tequisquiapan" de [El Sol de San Juan del Río](https://oem.com.mx/elsoldesanjuandelrio/cultura/villa-navidena-continuara-hasta-el-11-de-enero-en-tequisquiapan-27589579), que da 403. Amanecer publicó el cierre el 12 ene 2026 ([nota](https://amanecerqro.com/villa-navidena-de-tequisquiapan-concluye-con-saldo-blanco-y-seguridad/)). En FITUR 2026 la nombraron "Mejor Villa Navideña de México 2025" ([Amanecer, 21 ene 2026](https://amanecerqro.com/tequisquiapan-es-reconocida-como-mejor-villa-navidena-2025/)).

Programa municipal 2025, todo gratis ([AlertaQro, 12 dic 2025](https://www.alertaqronoticias.com/2025/12/12/asi-se-vivira-la-navidad-en-tequisquiapan/); [Amanecer, 12 dic 2025](https://amanecerqro.com/tequisquiapan-2025-vive-la-villa-navidena-con-eventos-y-cultura/)):

| Fecha 2025 | Hora | Evento | Sede |
|---|---|---|---|
| dom 14 dic | 20:00 | Encendido del árbol artesanal y de la Villa | Jardín Miguel Hidalgo |
| 14 dic | — | Conciertos de LiraNRoll, Tex Tex y Heavy Nopal en la inauguración ([Amanecer, 10 dic 2025](https://amanecerqro.com/tequisquiapan-tendra-una-navidad-rockera-%f0%9f%a4%98/)) [CONFLICTO]: el programa los pone en el Festival de Rock del 19 dic | — |
| 18 dic | 20:00 | Banda de Música del Estado de Querétaro | Plaza Santa Cecilia |
| 19 dic | 19:00 | Festival de Rock (Perros Negros, LiraNRoll, Heavy Nopal, Tex Tex) | Parque La Pila |
| 20 dic | 19:00 | Desfile del Festival Alegría, de Av. Juárez Oriente a Francisco Martínez Elías ([Al Diálogo, 25 nov 2025](https://aldialogo.mx/municipio-de-tequisquiapan/2025/11/25/llega-el-festival-alegria-contigo-2025-a-tequisquiapan-con-estos-eventos/)). AlertaQro lo llama "Festival de la Alegría" a las 20:00 [CONFLICTO de hora] | Av. Juárez |
| 20 dic | — | Palo encebado | Plaza Miguel Hidalgo |
| 20 dic al 5 ene | — | Buzón de los Reyes Magos | Jardín Miguel Hidalgo |
| 21 dic al 6 ene | — | Exposición "Última estación" | Auditorio Municipal |
| 23 dic | 19:00 | Homenaje a José José con la Orquesta Amar y Querer | Plaza Santa Cecilia |
| vie 26 dic | 20:00 | Los Guardianes del Amor ([Al Minuto, 25 dic 2025](https://www.alminutonoticias.com.mx/tequisquiapan/programan-concierto-gratuito-de-los-guardianes-del-amor-para-este-viernes-en-tequisquiapan/2025/12/25/)) | Parque La Pila |
| 31 dic | 22:00 | Cuenta regresiva de Año Nuevo | Plaza Santa Cecilia; Gaceta Queretana dice Plaza Miguel Hidalgo [CONFLICTO, ya anotado en el archivo anterior] |
| 2 ene | 20:00 | Los Yaguarú | Parque La Pila |
| 6 ene | 18:00 | Mago Jack Starq | Plaza Santa Cecilia |
| todos los días | lun–jue 19:30, 20:30 y 21:30; fin de semana cada media hora de 19:00 a 22:00 [FRÁGIL] | "Nevadas" (nieve artificial con proyección) | Plaza Miguel Hidalgo; la nota de Amanecer del 22 dic 2025 dice también Santa Cecilia |
| toda la temporada | — | Carrusel gratis, mercadito navideño de productores locales y talleres "Manitas en acción" | Plaza Miguel Hidalgo |

Ese año también hubo grupos de pop rock y jazz (ThAMA, Los Pampers, Armando Servín, Andrea Torres Trío), la Orquesta Comunitaria de Cuerdas de Tequisquiapan y Velvet Trio en Santa Cecilia ([Amanecer, 22 dic 2025](https://amanecerqro.com/villa-navidena-2025-impulsa-turismo-y-convivencia-en-tequisquiapan/)).

**Lo que no aparece en el programa de 2025 ni en la prensa:** pastorelas, "Belén musical" (ver aviso 2), posadas municipales, pista de hielo y desfile de carros bíblicos. No hay que inventarlos para 2026.

### Ediciones anteriores (para ver el patrón)
- **2024:** encendido el 14 dic en el Jardín Miguel Hidalgo, con un árbol de cestería de unas 500 piezas tejidas por unas 35 familias de artesanos, y pirotecnia después del encendido. El 15 dic hubo concierto de "Mi Banda el Mexicano" y "la tradicional posada del pueblo" en el Parque La Pila. Del 15 dic al 7 ene, "Noches Mágicas bajo la nieve" en el jardín principal, a las 19:00, 20:00 y 21:00 ([Amanecer, 14 dic 2024](https://amanecerqro.com/tequisquiapan-hace-homenaje-a-sus-artesanos-en-villa-navidena/); [Al Minuto, 15 dic 2024](https://www.alminutonoticias.com.mx/tequisquiapan/la-magia-de-la-navidad-llego-a-tequisquiapan-con-el-encendido-del-arbol-artesanal/2024/12/15/)).
- **2023 (administración anterior):** programa "Navidad en Tequisquiapan", del 2 dic 2023 al 8 ene 2024 ([flyer en tequis.travel](https://tequis.travel/events/navidad-en-tequisquiapan/), publicado 28 nov 2023):
  - "Encendido del Árbol de los Deseos": 2 dic a las 19:40 en el Jardín Hidalgo, y del 3 al 9 dic en colonias y comunidades.
  - Desfile Festival Alegría: 15 dic a las 19:00, en Av. Juárez Oriente.
  - Posadas tradicionales en calles del centro, del 16 al 23 dic.
  - Pista de hielo gratis en el Parque La Pila, del 26 dic al 8 ene.
  - Carros alegóricos: 24 dic a las 18:00.
  - Festejo de Reyes en las comunidades: del 2 al 6 ene a las 18:00.
  - Video mapping en la Parroquia: 22 y 30 dic y 6 ene, a las 20:30 ([tequis.travel, 14 dic 2023](https://tequis.travel/tequis-resplandece-en-navidad/)).

### Posadas (ya en el sitio)
- Hay posadas del 16 al 23 dic en las calles del centro: está en tequis.travel ([Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/), página modificada el 1 oct 2025) y en el programa municipal 2023.
- **Quién las hace:** en 2019 las organizó un "Comité Ciudadano Voluntario para las Celebraciones de Navidad". Cada noche a las 19:00 una familia del centro hacía de anfitriona: por ejemplo, la familia Cruz Ortiz en la calle Juárez el 22 dic y la familia Díaz en Potrero Paso de Tablas el 23 ([Tiempo Libre Qro, 22 dic 2019](https://tiempolibreqro.com/disfruta-las-ultimas-posadas-en-tequisquiapan/)). En 2024 hubo una "posada del pueblo" municipal el 15 dic en La Pila.
- **2025:** El Sol de San Juan del Río publicó "Cuándo son las posadas en el centro de Tequisquiapan" (19 dic 2025, fecha vista solo en el buscador) [SIN CONFIRMAR]. El resumen del buscador dice que fueron "en varias calles del primer cuadro" ([enlace](https://oem.com.mx/elsoldesanjuandelrio/local/cuando-son-las-posadas-en-el-centro-de-tequisquiapan-27331360), 403).
- **Para el sitio:** organizador "vecinos del centro" o vacío, no "Gobierno Municipal"; a las 19:00 [PROBABLE]. Es la misma recomendación del archivo anterior.

### Desfile de carros bíblicos o alegóricos (24 dic)
- **2023:** jue 24 dic, de la explanada frente a Maderamen a Av. Juárez pasando el Puente Viejo, con cierre de calles ([flyer](https://tequis.travel/events/desfile-de-carros-biblicos/) y [aviso de cierre](https://tequis.travel/events/aviso/), publicados 19 dic 2023). [CONFLICTO] de hora: el flyer dice 17:00, el programa municipal y el post de tequis.travel dicen 18:00, y en 2019 fue a las 19:00 (Tiempo Libre).
- **2024 y 2025:** no lo encontré. [SIN CONFIRMAR] que siga. No darlo de alta hasta que se anuncie.

### Año Nuevo 2026–2027 (ya en el sitio)
- **Sin anunciar.** En 2025 fue a las 22:00 en la Plaza Santa Cecilia, según el programa municipal; Gaceta Queretana dice Plaza Miguel Hidalgo, con pirotecnia y música en vivo (ver el archivo anterior). [PROBABLE] 31 dic desde las 22:00. **Hay que corregir la hora en UTC** (aviso 8).
- **Cenas de Año Nuevo:** las organizan hoteles y restaurantes (tequis.travel listó nueve en 2023, como Casa Rafaela, Quinta Tequisquiapan, Hecthorny, Viña TX y Cilantro y Perejil). Son privadas y cambian cada año. Para 2026 solo encontré la de Donato, fuera del municipio. Ojo: no enlazar `lacasonatequisquiapan.com`, que aparece en esa lista de 2023 (dominio secuestrado, ver CLAUDE.md).

### Reyes 2027
- **2026 (municipal):**
  - Globos con las cartas a los Reyes, **5 y 6 ene 2026**, en el Parque La Pila, con "más de 500 niñas y niños", por la Dirección de Turismo y la empresa Vuela en Globo ([Amanecer, 5 ene 2026](https://amanecerqro.com/la-ninez-tequisquiapense-volo-sus-deseos-en-globo-aerostatico/)). [CONFLICTO]: el programa del 12 dic 2025 lo anunciaba para el **27 y 28 dic**.
  - Mago Jack Starq el 6 ene a las 18:00 en Santa Cecilia, y buzón de Reyes del 20 dic al 5 ene.
  - **Festival de Magia en tu Comunidad** (DIF y Ayuntamiento): espectáculo, rifa y juguete para cada niño, en las comunidades, a partir del 7 ene. El 7 ene fue en San José la Laja, Santillán y La Tortuga, y el 8 ene en La Laja, La Fuente y Fuentezuelas ([Amanecer, 9 ene 2026](https://amanecerqro.com/festival-de-magia-en-tequisquiapan-fortalece-convivencia-familiar/)). También hubo edición en 2025 ([Amanecer, 5 ene 2025](https://amanecerqro.com/llevan-sonrisas-a-ninez-de-tequisquiapan-con-festival-de-magia-en-tu-comunidad/)). Es para vecinos; no tiene interés turístico.
- **2027:** sin anunciar. Si se da de alta, solo los globos en La Pila: [PROBABLE] 5 y 6 ene 2027 (martes y miércoles), "fecha por confirmar".

### Fiestas patronales de diciembre y enero (opcional)
Están en el PDF municipal ya citado en el archivo anterior (sección E). Las de esta temporada son:
- Virgen de Guadalupe en La Tortuga, Fuentezuelas, La Laja, Hacienda Grande y Bordo Blanco, del 10 al 14 dic.
- Niño Dios en Santillán, del 23 al 27 dic.
- San Juan Evangelista en el Barrio de San Juan, el 25 y 26 dic.
- Virgen de Guadalupe en La Fuente (10 al 14 ene) y El Sauz (10 al 12 ene).

Según otra lectura del mismo PDF, la colonia Adolfo López Mateos celebra del 6 al 9 dic [SIN CONFIRMAR, no lo revisé yo].

---

## Recurrentes

Para cada evento: nombre, cuándo suele ser, última edición documentada, sede, costo, organizador, fuente y si ya hay fecha 2027.

### Callejoneadas por Tequisquiapan (municipal; vigencia [SIN CONFIRMAR])
- **Qué era:** recorrido nocturno con estudiantina (en 2024, la Estudiantina de la UAQ), gratis, con mojigangas. Lo organizaban la Presidencia Municipal 2021–2024 y el DIF.
- **Cuándo:** "los primeros sábados del mes". Cumplieron 5 años el 5 nov 2023, con un encuentro internacional de estudiantinas ([tequis.travel, 19 oct 2023](https://tequis.travel/las-callejoneadas-por-tequisquiapan-se-han-vuelto-un-atractivo-muy-importante-para-y-una-tradicion-que-une-a-las-familias-y-que-esta-por-cumplir-5-anos/)).
- **Ediciones documentadas en 2024:**
  - 6 ene, 18:30, Jardín Miguel Hidalgo ([ficha](https://tequis.travel/events/callejoneadas/)).
  - 3 feb, 18:30, Plaza Santa Cecilia ([ficha](https://tequis.travel/events/callejoneadas-2/)).
  - 30 y 31 may y 1 jun, 20:00, Plaza Miguel Hidalgo, durante la Feria del Queso y Vino ([ficha](https://tequis.travel/events/callejoneada/)).
  - **6 jul 2024, 19:30, Plaza Santa Cecilia** ([flyer](https://tequis.travel/events/callejoneadas-por-tequisquiapan/)). Es la última.
- **Después de julio de 2024** no aparecen en la prensa del municipio (revisé los títulos de Amanecer, Al Minuto y Al Diálogo de nov 2024 a nov 2026). La administración cambió en octubre de 2024. **No publicarlas como recurrentes.**
- **Callejoneada de pago (sí vigente):** "Callejoneada teatral de leyendas" de ViveTours.
  - Viernes, sábados y festivos a las **20:45**; dura 1 hora.
  - **$100 adultos y $60 niños e INAPAM** [FRÁGIL].
  - Sale de la Plaza Miguel Hidalgo, esquina con Santa Cecilia.
  - Fuente: [tequis.travel – Tours](https://tequis.travel/tours_tequisquiapan/), página modificada el 20 mar 2026.
  - Es lo que ya cubre "Noches de Leyendas" en el sitio. Para la búsqueda "callejoneadas", el texto de esa ficha puede decir "callejoneada de leyendas".

### Video mapping en la Parroquia (municipal; vigencia [SIN CONFIRMAR])
- **Inicio:** empezó el 21 oct 2023, "todos los fines de semana" por la tarde y noche. Gratis, dura unos 5 minutos y cuenta la fundación de Tequis ([tequis.travel, 17 nov 2023](https://tequis.travel/videomapping-el-espectaculo-que-se-posiciona-en-tequis/)).
- **Funciones documentadas:**
  - 22 y 30 dic 2023 y 6 ene 2024, a las 20:30, en la Parroquia ([fichas](https://tequis.travel/events/video-mapping/)).
  - 27 abr, 18 may y 25 may 2024, en la Plaza Miguel Hidalgo.
- **Con la administración actual** solo encontré uno suelto: el 22 mar 2025, en el Festival Espíritus de Primavera, de Rimiyoho ([Amanecer, 23 mar 2025](https://amanecerqro.com/festival-espiritus-de-primavera-proyecta-video-mapping-de-color-con-rimiyoho/)). No lo publiques como permanente.

### Mes del Hongo (privado, restaurante Origens)
- **2024 ("3era edición"):** empezó el **jueves 1 ago 2024** con platillos de hongos queretanos. Hubo charla "El maravilloso mundo de los hongos" el 3 ago y cena maridaje "Hongos y Vino" a cinco tiempos el 14 ago. Fue en Origens, Niños Héroes 30, Centro ([flyer en tequis.travel](https://tequis.travel/events/mes-del-hongo-3era-edicion/)).
- **2025:** el blog de Origens publicó el 7 ago 2025 "Experiencia sensorial con hongos y vinos, vuelve en agosto a Tequisquiapan" y la llama "segunda edición" ([origens.mx/blog](https://origens.mx/blog/)). [CONFLICTO] de numeración: puede ser otro evento, la cena y no el mes.
- **2026:** no lo encontré. **Fecha 2027 por confirmar** (agosto). Es privado y de un solo restaurante: mejor como mención en una guía de gastronomía que como evento.

### Expo Cactus y otras Suculentas del Semidesierto (gratis)
- **2026 (5.ª edición):** **31 jul al 2 ago 2026**, en el Parque La Pila. Entrada gratis. Hubo 30 mil plantas de más de mil especies, venta por viveros con permiso de Semarnat, talleres, conferencias y presentaciones de libros. Esperaban 7 mil personas.
  - Horario: 10:00–19:00 según [Al Minuto, 21 jul 2026](https://www.alminutonoticias.com.mx/tequisquiapan/tequisquiapan-anuncia-la-expo-cactus-2026-y-torneo-abierto-de-golf/2026/07/21/), y 10:00–18:30 según [Al Minuto, 29 jul 2026](https://www.alminutonoticias.com.mx/tequisquiapan/tequisquiapan-florece-con-la-quinta-edicion-de-la-expo-cactus-y-otras-suculentas-2026/2026/07/29/) [CONFLICTO].
  - Ese mismo fin de semana hubo torneo abierto de golf por parejas en el Club de Golf Tequisquiapan (1 ago; $3,500 socios y $4,200 público [FRÁGIL]).
- **2024 (3.ª edición):** 17 y 18 ago, de 10:00 a 19:00, en el Parque La Pila, entrada libre. La organizaron la Unión de Productores de Cactáceas y Suculentas del Semidesierto Queretano A.C. y el Jardín Botánico Regional de Cadereyta (CONCYTEQ), con la Dirección de Turismo municipal ([flyer](https://tequis.travel/events/expo-cactus/)).
- **Patrón:** finales de julio o agosto, en el Parque La Pila. **Fecha 2027 por confirmar.** Vale la pena darla de alta: es gratis, familiar y en el centro.

### Fiesta de los Papalotes (privada, de pago)
- **2026 (8.ª edición):** 21, 22 y 28 feb y 1 mar 2026, de 11:00 a 19:00, en Cava Bocanegra, Carr. Estatal 200 km 50, Fuentezuelas. **$180 adulto y gratis menores de 1.20 m** [FRÁGIL]. La organiza Adolfo Barrón y la anunció Paola Ortega Muñoz, de la Sectur estatal ([Al Minuto, 16 feb 2026](https://www.alminutonoticias.com.mx/tequisquiapan/alistan-nueva-edicion-del-festival-del-papalote-en-tequisquiapan/2026/02/16/); [Chilango, 26 feb 2026](https://www.chilango.com/viajes/en-corto/fiesta-papalotes-queretaro-2026-tequisquiapan-precios-horarios/)).
- **2025:** 8 y 9 mar 2025 ([queretaro.travel](https://queretaro.travel/lugares/enjoy-spring-with-your-family/?lang=en), s/f).
- **2024 (7.ª edición):** 2, 3, 9 y 10 mar 2024, a $150 ([Tus Buenas Noticias, 26 feb 2024](https://www.tusbuenasnoticias.com/mexico/general/fiesta-de-los-papalotes-en-tequisquiapan-queretaro-cuando-sera/30623)).
- [CONFLICTO] de numeración: si 2024 fue la 7.ª y 2026 la 8.ª, la de 2025 no cuadra.
- **2027: fecha por confirmar.** ZonaTurística dice "mediados de febrero 2027", pero parece texto de plantilla, sin fuente. Se suele anunciar a mediados de febrero.

### Feria del Toro de Lidia ("Fiesta Brava") (privada, de pago; probablemente suspendida)
- **2024 (XXVI edición):** fines de semana del 1 al 10 mar 2024. La corrida estelar fue el sábado 9 a las 17:00 en una plaza portátil, con Diego Silveti, Joselito Adame y José Mauricio. Hubo concierto gratis de Emmanuel el 1 mar. Boletos desde $400 [FRÁGIL] en la Oficina de Turismo y en compage.com.mx. La organizó el Patronato Taurino y de las Fiestas de Tequisquiapan ([tequis.travel, 25 ene 2024](https://tequis.travel/ya_viene_la_fiesta_brava_de_tequis_tequisquiapan/); Agronegocios, 13 feb 2024).
- **2025:** no hubo "feria". Solo una corrida mixta, el **sábado 8 feb 2025 a las 16:30** en el coso "El Herradero", despedida de Pablo Hermoso de Mendoza (Suerte Matador, 24 ene 2025).
- **2026:** no encontré ninguna edición ni corrida.
- **2027: sin evidencia.** ZonaTurística la pone a "mediados de marzo 2027" [SIN CONFIRMAR]. Ver el aviso 9. **No darla de alta.**
- Ojo con las búsquedas: "Tequisquiapan" también es el nombre de una ganadería, así que aparecen corridas en otras ciudades.

### Carrera de Meseros y otras actividades de la Fiesta del Pueblo
- **Carrera de Meseros:** vie 16 ago 2024 a las 17:00, en el Jardín Miguel Hidalgo, con categorías femenil y varonil y premios. Era parte de las "Fiestas del Pueblo 2024" (informes en Turismo, 414 273 0841) ([flyer](https://tequis.travel/events/carrera-de-meseros/)).
- **2025 y 2026:** no aparece en el programa 2026, que trae conciertos, la Carrera del Pueblo y el encuentro de cocineras tradicionales "Saberes y Sabores" ([Amanecer, 4 ago 2026](https://amanecerqro.com/programa-fiesta-pueblo-tequisquiapan-2026/)). [SIN CONFIRMAR] que siga.
- **"Tequis Bowl 2026"** (aparece en Search Console): fue una actividad de la Fiesta del Pueblo 2026, de las áreas de Cultura, Deporte e Instituto de la Juventud. No encontré qué deporte es [SIN CONFIRMAR]; viene de El Observador y AlertaQro, 18 ago 2026. Basta con mencionarlo en la ficha de la Fiesta del Pueblo.

### Festivales de cerveza, asado y vino (privados)
- **Beerfest Tequisquiapan:** la 3.ª edición fue del 23 al 25 ago 2024 en el Parque La Pila, con la Querétaro International Beer Cup y temática medieval (gaitas, arquería, teatro). Esperaban de 4 a 5 mil personas ([Tiempo Libre Qro, 30 jul 2024](https://tiempolibreqro.com/anuncian-beerfest-en-tequisquiapan/)). Es el mismo evento que tequis.travel llama "Expo-Cerveza Fiesta Medieval" (23 ago 2024). Hubo ediciones en 2023 ([Tiempo Libre, 2 ago 2023](https://tiempolibreqro.com/regresa-a-tequisquiapan-el-beerfest-2023/)) y 2024 ([Al Diálogo, 29 jul 2024](https://aldialogo.mx/vsd/2024/07/29/regresa-el-tequisquiapan-beerfest-este-2024/)).
- **Beer Town Fest 2025:** 9 y 10 ago 2025, de 10:00 a 22:00, $150 adultos y $50 niños [FRÁGIL]. Lo organizó Gerardo Ruiz Soto con Cervecería Bóruma y lo anunciaron la Sectur estatal y la municipal ([Al Diálogo, 22 jul 2025](https://aldialogo.mx/municipio-de-tequisquiapan/2025/07/22/beer-town-fest-2025-en-tequisquiapan-cerveza-artesanal-musica-y-gastronomia/)).
  - [CONFLICTO]: la nota dice "viernes 9 y sábado 10", pero el 9 ago 2025 fue sábado.
  - La nota no dice la sede.
  - No sé si es la continuación del Beerfest.
- **Festival asado, cerveza y vino:** 26 al 28 jul 2024, de 11:00 a 20:00, sin sede publicada ([fichas en tequis.travel](https://tequis.travel/events/festival-asado-cerveza-y-vino/)). No encontré 2025 ni 2026.
- **Patrón:** agosto, festival de cerveza en la temporada de vacaciones de verano. **2026 y 2027: por confirmar** (no encontré edición 2026).

### Festival Viva el Queso (privado, de pago)
- **2025 (5.ª edición):** 22 y 23 nov 2025, en **Cava Bocanegra**. Incluyó el Concurso del Buen Queso, el primer concurso de cheesemonger en México, catas y talleres. Acceso **$150** [FRÁGIL]. Lo coordina Denisse Reyes, con el apoyo de Sectur municipal ([Amanecer, 28 oct 2025](https://amanecerqro.com/tequisquiapan-celebra-la-5a-edicion-del-festival-viva-el-queso-2025/)).
- **2026:** el sitio oficial anuncia "17 - 18 octubre" con un logo "2026", boletos de $150 para adultos y mayores de 12 años, y no publica sede ([vivaelqueso.com](https://www.vivaelqueso.com/), s/f). Si es la edición 2026, ya pasó. No lo encontré en prensa [SIN CONFIRMAR].
- **2027: fecha por confirmar** (octubre o noviembre). Interesa para la búsqueda "tequis vino y queso" fuera de mayo.

### Festival del Huapango (municipal)
- **2026 (2.ª edición):** dentro de "Ecos de Libertad" (Fiestas Patrias). Hubo talleres gratuitos de zapateado, jarana, violín, quinta huapanguera y versificación en el Centro Cultural, y presentaciones en la Plaza Santa Cecilia ([Al Minuto, 14 sep 2026](https://www.alminutonoticias.com.mx/tequisquiapan/tequisquiapan-celebran-con-exito-la-segunda-fiesta-del-huapango/2026/09/14/)). El archivo anterior ya lo ubica el 13 sep 2026. Puede ir dentro de la ficha de Fiestas Patrias.

### Vendimias (privadas, de pago)
Ninguna vinícola ha anunciado fecha 2027: todas son **"fecha 2027 por confirmar"**. Se mantiene la recomendación del archivo anterior de tener un solo evento, "Temporada de vendimias", que ya está en el sitio. Fechas 2026 (las de de-paseo.com no tienen fecha de publicación):

| Vinícola | Municipio | Fecha 2026 | Horario | Precio [FRÁGIL] | Fuente |
|---|---|---|---|---|---|
| Freixenet / Sala Vivé, "Fiesta de la Vendimia" | Ezequiel Montes (km 40.5) | 3 al 5 jul | 13:00–22:00 | general $990 vie y $790 sáb/dom; zona Sala Vivé $1,750–3,990 | [de-paseo](https://www.de-paseo.com/queretaro/event-pro/fiesta-de-la-vendimia-freixenet/) (s/f); El Universal Qro, 7 may 2026. [CONFLICTO]: Escapadah (14 jul 2026) lo pone el 18 jul |
| Donato, 9.ª vendimia | San Martín: Colón o Ezequiel Montes [CONFLICTO] | 27 jun; "Petite" 4, 11, 18 y 25 jul | 12:00–22:00 | $1,380–1,600 | de-paseo (s/f); [donato.com.mx](https://donato.com.mx) |
| Vaivén / Viñedos Silvestres | El Coyote: Tequisquiapan o Ezequiel Montes [CONFLICTO] | 11 jul [SIN CONFIRMAR horario y precio] | — | 2025: $1,500 | Al Diálogo, 27 may 2026 (calendario del Clúster) |
| La Redonda, temporada de vendimia | Ezequiel Montes | fines de semana del 18 jul al 16 ago | 12:00–19:00 | desde $300 | de-paseo (s/f). Tuvo un conflicto legal en 2026 y no confirmé que se hiciera |
| **Los Rosales**, 13.ª vendimia | **Tequisquiapan** (El Sauz; km 47 según de-paseo, km 27 según queretaro.travel [CONFLICTO]) | sáb 25 jul | 12:00–22:00 | $1,300 | [de-paseo](https://www.de-paseo.com/queretaro/event-pro/vendimia-los-rosales/) (s/f); Grupo Animal, 2 jun 2026. **No enlazar `vinedoslosrosales.com.mx`** |
| **CR Vinos MX / Cartinto House**, 2.ª vendimia | **Tequisquiapan** (camino Tejocote–San José La Laja km 3.2) | sáb 8 ago | 11:00–20:00 | $1,800 | [crvinosmx.com](https://crvinosmx.com/enotourism/events) (oficial) |
| De Cote | Ezequiel Montes | [CONFLICTO]: 7 ago (decote.mx, citado en el archivo anterior) o sáb 15 ago (de-paseo) | 12:00–19:00 | $1,950; Gran Reserva $3,950 | de-paseo (s/f) |
| **Viña TX** | **Tequisquiapan** (Fray Junípero Serra 33) | 8–9 ago [SIN CONFIRMAR] | — | — | Visión Empresarial Qro (nota sin año) |
| **Viña Magal** | **Tequisquiapan** (Carr. 200 km 53) | [CONFLICTO]: 12 sep dentro de Fiestas Patrias (AlertaQro, 2 sep 2026, citado en el archivo anterior), o "1 ago" en una nota sin año de Visión Empresarial | — | — | ver fuentes |
| Cava 57 | San Juan del Río | vendimia 29 ago; minivendimias los fines de semana de agosto | mini a las 11:30 y 15:00 | mini: $950 adulto y $650 niño | de-paseo (s/f) |
| Viñedos Azteca | Ezequiel Montes (km 40.4) | sáb 12 sep | 12:00–19:00 | $1,380 (preventa $950) | [operadoraturistica.mx](https://operadoraturistica.mx/event-details/vendimia-2026) (venta oficial) |
| **San Juanito**, "Fiesta San Juan" | **Tequisquiapan** (San José de la Laja) | no encontré la de 2026; la de 2025 fue el sáb 28 jun | 2025: 13:30–19:00 | 2025: $650 / $250 | de-paseo (s/f); Grupo Animal, 23 jun 2025 |

- **Sin vendimia encontrada:** Vinícola Tequisquiapan, Tierra de Peña y Cava Bocanegra (que es una cava de quesos).
- **Raíz de Vino:** la búsqueda "tequisquiapan raiz de vino" se refiere a una asociación, no a un evento. Se constituyó en el Festival del Queso y Vino 2026 y la forman 11 vinícolas del municipio: Viña Magal, San Patricio, Mugamad, La Gloria, Pasión Vid, Viñedo San Martín, Precoz, Quinta Tinto, Norte B, Viña TX y Bodegas Vidarte ([Amanecer, 15 may 2026](https://amanecerqro.com/tequisquiapan-raiz-de-vino-une-a-11-vinedos-del-pueblo-magico/)). Puede servir para una guía de vino.
- **Festival del Vino Queretano 2026:** del 16 al 18 oct en la Plaza Gran Cué de **Corregidora**, gratis (La Lupa, 30 sep 2026; ADN40, 14 oct 2026). [CONFLICTO]: en mayo se había anunciado en Tequis. No es de Tequis.
- **Próximos eventos de vinícolas cercanas:**
  - "Descorcha tu mente", Viñedos Azteca, sáb 28 nov 2026, 11:30–15:30, $1,250 con desayuno, cupo de 30 personas ([operadoraturistica.mx](https://operadoraturistica.mx/event-details/descorcha-tu-mente)).
  - "Año Nuevo Entre Viñedos", Donato, 31 dic 2026, de 20:00 a 02:00, $3,200 por persona [FRÁGIL] ([donato.com.mx](https://donato.com.mx/producto/ano-nuevo-entre-vinedos-mesa-2-personas-800-pm/)).
  - Puerta del Lobo, en El Marqués (lejos de Tequis), tiene eventos de fin de semana en diciembre, incluida una "Callejoneada Navideña" el 19 dic. Según bodegasdemexico.com son de 2026, pero el calendario no pone año.
  - La Redonda, "100 Vinos Mexicanos", "finales de febrero 2027" [SIN CONFIRMAR]: solo lo dice ZonaTurística.

### Carreras atléticas
| Carrera | Cuándo | Última edición documentada | Organizador / costo | Fuente |
|---|---|---|---|---|
| Carrera del Pueblo, 5 y 10 km | Domingo de la Fiesta del Pueblo (agosto) | dom 16 ago 2026; $300 o $350, cupo de 700 [FRÁGIL] | Municipal | [Amanecer, 4 ago 2026](https://amanecerqro.com/programa-fiesta-pueblo-tequisquiapan-2026/) |
| VAKE-RUN (Mes Rosa) | Octubre | oct 2026; 450 participantes; salida de la Plaza Santa Cecilia y meta en el Parque La Pila | Municipal y DIF | [Amanecer, 25 oct 2026](https://amanecerqro.com/vake-run-tequisquiapan-mes-rosa/) |
| **Trail Urban La Fuente** | **15 nov 2026** (1.ª edición) | — | Municipal; $280 o $230 | ver ficha arriba |
| Carrera Turística Recreativa INDEREQ, 7.5 km | Agosto | sáb 30 ago 2025, gratis; no encontré la de 2026 | INDEREQ (estatal) | Publimetro, 13 ago 2025; [Amanecer, 30 ago 2025](https://amanecerqro.com/realiza-indereq-carrera-turistica-en-tequisquiapan/) |
| Duatlón; Urban XTrail (nocturna) | — | 25 ago 2024; 27 abr 2024; no encontré después | Privados | fichas de tequis.travel |

- **De diciembre de 2026 a marzo de 2027** no encontré ninguna carrera anunciada.
- "UAQ Tequisquiapan carreras" y "UTAN Tequis carreras" (de Search Console) no son carreras atléticas: son licenciaturas. La primera es del campus Tequisquiapan de la UAQ; la segunda, de la Universidad Tangamanga en **San Luis Potosí**.

### Jazz, blues y conciertos
- **No hay un festival de jazz ni de blues en Tequis.** El restaurante Origens hace conciertos sueltos (privado, con reservación):
  - 2024: Divas del Jazz (18 may), Jazz Nueva Orleans (13 jul) y Noche de Blues (24 ago), según los flyers en tequis.travel.
  - Soul argentino, 28 dic 2024.
  - Tributo a Amy Winehouse, **vie 19 dic 2025** ([origens.mx/blog](https://origens.mx/blog/)).
  - De 2026 no encontré nada.
- **Los conciertos gratuitos grandes** van dentro de los festivales municipales:
  - Enamórate en Tequis (febrero).
  - Festival del Arte, Queso y Vino (mayo; en 2026, Kabah y Bronco).
  - Fiesta del Pueblo (agosto; en 2026, Cardenales de Nuevo León y otros).
  - Ecos de Libertad (septiembre).
  - Villa Navideña (diciembre).
- Para "tequisquiapan concierto" sirve una sección "Conciertos gratuitos del año" que enlace a esos eventos, y no una ficha por concierto.

### Otros que encontré (para tener en el radar, no para dar de alta ya)
- **Hay Festival Querétaro 2025:** Tequis fue una de sus sedes, del 4 al 7 sep 2025 ([Al Diálogo, 30 ago 2025](https://aldialogo.mx/municipios/2025/08/30/tequisquiapan-sera-sede-del-hay-festival-queretaro-2025/)). No sé si repitió en 2026.
- **Girls Road Tour:** primer rally femenino de automovilismo en México, con sede en Tequis en 2025 ([Al Minuto, 24 feb 2025](https://www.alminutonoticias.com.mx/tequisquiapan/tequisquiapan-albergara-el-primer-rally-femenino-de-mexico-girls-road-tour-2025/2025/02/24/)). No sé si se repite.
- **Festival de las Naciones y Comunidades Mexicanas:** la 1.ª edición fue en noviembre de 2022 (Al Diálogo, 27 oct 2022) y la 2.ª en noviembre de 2023, en el Parque La Pila (tequis.travel). Después no lo encontré.

---

## Agenda de tequis.travel (punto 3)

- **Método:** las rutas de `tt_ajde_events.txt` son 196 fichas más el índice `/events/`, igual a lo que da `X-WP-Total: 196` en `/wp-json/wp/v2/ajde_events`. El REST no expone las fechas, así que bajé las 196 páginas y leí el `startDate`/`endDate` del JSON-LD de EventON. Ninguna ficha tiene repeticiones: todas son `data-ri="0r"`.
- **Resultado:** 195 fichas con fecha, entre el **18 nov 2023** (Festival de las Naciones) y el **30 ago 2024** (Vendimia Cava 57). Hay 1 ficha sin fecha ("Cena de Año Nuevo"). **Ninguna tiene fecha después del 10 nov 2026**, y la última se publicó el 16 jul 2024. La página [`/agenda/`](https://tequis.travel/agenda/) muestra "Noviembre, 2026" sin eventos.
- **Qué sí se mueve en tequis.travel:**
  - La sección de noticias publicó un post el **20 oct 2026** (Tejedores de Luz, sin título; [tequis.travel/10430-2](https://tequis.travel/10430-2/)). El anterior era de mayo de 2024.
  - Las páginas de negocios se actualizaron en marzo de 2026.
  - "Fiestas y Eventos" se modificó el 1 oct 2025, pero solo da meses.
  - Publica más o menos **un post por festival grande**, no una agenda semanal.
- **Lo útil de esas 196 fichas** son los datos de la "última edición documentada" que ya van en "Recurrentes": callejoneadas, video mapping, Expo Cactus, Carrera de Meseros, Beerfest, Feria del Toro, Papalotes, vendimias 2024, pista de hielo 2023 y desfile bíblico 2023.

---

## Cómo mantener "Este fin de semana en Tequis" (punto 4)

### Fuentes, de mejor a peor

| # | Fuente | Qué publica | Con qué frecuencia | Anticipación típica | Cómo leerla |
|---|---|---|---|---|---|
| 1 | **Amanecer Querétaro**, categoría Tequisquiapan | Comunicados del municipio casi textuales, con fecha, hora y sede | ~3.7 notas por semana desde may 2026; ~1 por semana de eventos (24 de 101) | 1 a 10 días. Por ejemplo, Estrellas y Raíces salió el 9 nov para el 14, y Guardianes del Amor el 25 dic para el 26 | `https://amanecerqro.com/wp-json/wp/v2/posts?categories=74&after=<fecha>` (WordPress REST; también hay RSS) |
| 2 | **Al Minuto Noticias**, categoría Tequisquiapan | Lo mismo, a veces con más detalle (costos, teléfonos, rutas); fue la única que tenía el Trail Urban | ~2 por semana; ~1 de cada 4 es de eventos | 1 a 7 días | `https://www.alminutonoticias.com.mx/wp-json/wp/v2/posts?categories=1826&after=<fecha>` |
| 3 | **AlertaQro** | La que anuncia primero: la Villa (9 nov) y el Festival Alegría (4 nov) | varias por semana | 1 a 5 semanas | Ahora bloquea a los scripts: hay que leerla en el navegador |
| 4 | **Tiempo Libre Querétaro** (etiqueta `tequisquiapan`, id 410) | Agenda estatal: calendarios del Festival Alegría, Papalotes, Beerfest | esporádica, unas pocas notas al año sobre Tequis | 1 a 4 semanas | `https://tiempolibreqro.com/wp-json/wp/v2/posts?tags=410` |
| 5 | **Redes de tequis.travel**: [Facebook Tequisquiapan.travel](https://www.facebook.com/Tequisquiapan.travel), [Instagram @tequisquiapantravel](https://www.instagram.com/tequisquiapantravel/), TikTok @tequisquiapantravel | Probablemente los carteles oficiales | **No pude medir la frecuencia**: no se leen sin sesión | — | A mano, con una cuenta. Los flyers municipales llevan logos de "Presidencia Municipal" y "Tequis te quiere" |
| 6 | Gobierno del Estado ([X @gobqro](https://x.com/gobqro)) y DIF estatal | Festival Alegría (desfiles, pistas) | por temporada | 2 a 6 semanas | a mano |
| 7 | Eventos privados: Eventbrite, de-paseo.com, sitios de vinícolas (crvinosmx.com, donato.com.mx, operadoraturistica.mx de Azteca), vivaelqueso.com, mezcaloversfest.com | Vendimias, festivales de pago | por evento | semanas | a mano; siempre confirmar que el dominio sea del negocio |
| — | **No sirven:** tequis.travel/agenda (abandonada desde 2024) y tequisquiapan.gob.mx/prensa/eventos (desactualizada: todo su RSS tiene fecha 2 mar 2025 y lo último es la Carrera del Pueblo) | | | | |

### Rutina propuesta
1. **Lunes y jueves**, revisar las fuentes 1 y 2 con `after=` igual a la fecha de la última revisión. El jueves es cuando salen los anuncios del fin de semana.
2. **Primer lunes de cada mes**, revisar AlertaQro (3), Tiempo Libre (4) y las redes (5) para lo que se anuncia con semanas de anticipación.
3. Antes de cada temporada (Navidad, Semana Santa, mayo, agosto), revisar los calendarios de vendimias y de festivales privados (7).
4. **Criterio para publicar:** solo con fecha y sede tomadas de una fuente. Siempre marcar si es municipal (gratis) o privado (con boleto), y guardar la URL de la fuente en el panel.
5. **Respaldo para fines de semana sin eventos:** que la página muestre "lo que hay cada fin de semana" en vez de quedar vacía:
   - Noches de Leyendas / callejoneada de ViveTours (viernes y sábados, 20:45).
   - Vuelos en globo (diarios, al amanecer).
   - Mercado de artesanías.
   - Ruta del queso y vino.
   - En diciembre y enero, la Villa Navideña (nevadas diarias).

### Búsquedas de fecha → qué evento las cubre
- "villa navideña", "navidad", "en diciembre", "en navidad" → Villa Navideña 2026 (13 dic al 6 ene), desfile del 18 dic y posadas.
- "año nuevo" → Año Nuevo en la Plaza (31 dic, ~22:00) y cenas privadas.
- "feria", "feria 2026", "fiesta del pueblo" → Fiesta del Pueblo (agosto) y Festival del Arte, Queso y Vino (mayo).
- "vino y queso 2026/2027" → Festival del Arte, Queso y Vino (mayo; 2027 sin anunciar) y Viva el Queso (octubre/noviembre).
- "eventos julio 2026" → fiestas de La Magdalena y Fundación (19–26 jul), vendimias (Freixenet, Donato, Los Rosales) y Expo Cactus (31 jul al 2 ago).
- "día de muertos 2026" → Tejedores de Luz (28 oct al 2 nov; ya pasó, conviene pasarlo a 2027).
- "vendimia" → Temporada de vendimias (jul–sep).
- "callejoneadas" → Noches de Leyendas (callejoneada de leyendas; aviso 7).
- "conciertos" → sección de conciertos gratuitos del año.
- "este fin de semana", "hoy", "mañana" → la página semanal (14–15 nov: Estrellas y Raíces, Trail Urban La Fuente, Mezcalovers Fest).

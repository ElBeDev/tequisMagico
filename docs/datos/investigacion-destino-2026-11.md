# Investigación: Tequisquiapan como destino (ficha, clima, historia, seguridad, alrededores)

Consultado el 10 de noviembre de 2026. Es investigación de escritorio para tequismagico.com: no se tocó la base ni el código.

Para qué es: muchas búsquedas sobre Tequis son informativas y el sitio no las responde (clima por mes, "¿en qué estado está?", distancias, historia y nombre, "centro geográfico de México", "¿es seguro?", población, altitud, código postal, Uber/DiDi, tren, inundaciones, Cantinflas, artesanías, webcam, "Tequis vs Bernal", alrededores, bodas). La lista viene del autocompletado de Google.

## Leyenda

- **[FRÁGIL]**: dato que cambia (precio, horario, cifra del mes). Redactar con fecha ("en 2026…") o sin cifra.
- **[CONFLICTO]**: las fuentes no coinciden. Se anotan todas.
- **[SIN CONFIRMAR]**: solo aparece en una fuente débil, o no se pudo abrir la fuente.
- **[CÁLCULO]**: hecho por mí. Las distancias salen de OpenStreetMap (Nominatim + OSRM), en auto y sin tráfico, desde la Plaza Miguel Hidalgo (punto: la parroquia, 20.52336, -99.89159), y suelen quedarse cortas. Las tasas y promedios salen de sumar datos oficiales.

Este documento no repite lo que ya está en `investigacion-transporte-2026-11.md` (autobuses, aeropuertos, traslados, Uber y casetas) ni en `investigacion-guias-2026-11.md` (Peña de Bernal, viñedos, Estación Bernal). Las minas de ópalo están en `investigacion-actividades-patrimonio-2026-11.md`.

---

## Avisos antes de redactar

1. **Se acabó el límite de búsquedas web a media investigación** (lo comparten todos los agentes de la sesión). Después de eso solo se pudieron abrir páginas cuya URL ya se conocía. Quedaron sin buscar: cuántas bodas recibe Tequis, si DiDi funciona en Tequis, si hay una cifra de población posterior a 2020, el texto de alguna leyenda y una fuente para el "auge de los balnearios". Están marcados [SIN CONFIRMAR].
2. **El clima de Tequis no tiene normal 1991-2020.** Se usa la normal 1971-2000 de la estación del SMN 22025 Presa Centenario (en el municipio) y, como referencia reciente, la 1991-2020 de la 22022 San Juan del Río. La normal oficial de San Juan del Río trae un error (febrero de 2017 con 3,547.7 mm) que infla la lluvia anual de ~506 a 628 mm. Ver la sección 1.
3. **Población: 72,201 es el municipio y 34,955 la cabecera** (Censo 2020). Wikipedia en español da la de la cabecera como si fuera la del municipio.
4. **Hay frases de `web/app/[lang]/por-que-tequis/page.tsx` que no se pudieron respaldar**: "el centro geográfico real está en Zacatecas", Carranza "asiduo a sus aguas termales", "años 50: auge de los balnearios" y el nombre otomí "Nthe". El decreto de Carranza de 1916 solo lo cuenta el municipio, sin texto del decreto. Ver la sección 2.
5. **Ranas y Toluquilla (INAH) están cerradas desde el 10-oct-2025**, y **en noviembre de 2026 SECTUR define si algún Pueblo Mágico de Querétaro pierde el nombramiento**. Ver la sección 6.
6. **El tren México–Querétaro no llega a Tequis ni funciona todavía**: la estación más cercana será la de San Juan del Río, y la obra se prevé para 2027. Ver la sección 4.
7. **Seguridad**: en 2025 Tequis tuvo menos delitos denunciados por habitante que el promedio del estado. No hay encuesta de percepción para el municipio. Redactar neutro. Ver la sección 3.
8. **Fechas que se contradicen dentro de tequis.travel**: la fundación (24 de junio o 24 de julio), la escultura de Cantinflas ("3 de marzo de 2018, 25.º aniversario luctuoso", cuando murió un 20 de abril) y los años de la cestería (100 u 80). La página de bodas dice "a 25 minutos" del aeropuerto, cuando son ~40.

---

## 1. Ficha del destino

### Datos básicos

| Dato | Valor | Fuente |
|---|---|---|
| Estado | **Querétaro** (no Estado de México ni Hidalgo, aunque se busca así) | INEGI, ITER 2020 (abajo) |
| Municipio | Tequisquiapan, clave INEGI 22017; la cabecera se llama igual | [INEGI, ITER 2020 de Querétaro](https://www.inegi.org.mx/contenidos/programas/ccpv/2020/datosabiertos/iter/iter_22_cpv2020_csv.zip) |
| Coordenadas de la cabecera | 20°31'07.7" N, 99°53'01.8" O | INEGI, ITER 2020 |
| Altitud de la cabecera | **1,870 msnm** | INEGI, ITER 2020 (Wikipedia da lo mismo) |
| Población del municipio (Censo 2020) | **72,201** (37,178 mujeres y 35,023 hombres) | INEGI, ITER 2020 |
| Población de la cabecera (Censo 2020) | **34,955** | INEGI, ITER 2020 |
| Superficie del municipio | [CONFLICTO] 343.6 km² (Wikipedia, sin fuente) o ~371 km² ([CÁLCULO] con el límite municipal de OpenStreetMap, relación 5606487) | No se pudo abrir la Enciclopedia de los Municipios del INAFED: `inafed.gob.mx` no resolvía el 10-nov-2026 |
| Código postal del centro | **76750** | Direcciones del portal municipal de turismo, p. ej. "Centro, 76750 Tequisquiapan" ([tequis.travel – Artesanías](https://tequis.travel/artesanias_tequisquiapan/)) |
| Zona horaria | **Tiempo del Centro, UTC−6, todo el año** (sin horario de verano) | Ver abajo |
| Lada | 414 | Casi todos los teléfonos del [directorio municipal 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf) |
| Pueblo Mágico | **Desde el 17 de octubre de 2012**: el 61.º del país y el 4.º de Querétaro (después de Bernal, Cadereyta y Jalpan) | [Expansión, 17-oct-2012](https://expansion.mx/salud/2012/10/17/huichapan-y-tequisquiapan-los-dos-nuevos-pueblos-magicos-de-mexico); [tequis.travel – Históricos](https://tequis.travel/historicos_tequisquiapan/); aparece en la [lista de SECTUR](https://www.gob.mx/sectur/articulos/pueblos-magicos-206528) |
| Distancia a Querétaro capital | 62 km / ~1 h | [CÁLCULO] (sección 6) |
| Distancia a San Juan del Río | 23 km / ~27 min | [CÁLCULO] |
| Distancia a la CDMX | 175-188 km / 2 h 30 a 3 h | `investigacion-transporte` y [CÁLCULO] |

- **Población, más detalle**: el municipio tiene 85 localidades. Las más grandes después de la cabecera son San Nicolás (6,997), La Fuente (5,236), Bordo Blanco (3,791), Fuentezuelas (3,434), El Tejocote (2,830), Los Cerritos (2,810) y La Tortuga (2,266) (INEGI, ITER 2020). 179 personas hablan una lengua indígena, sobre todo náhuatl (65) y otomí (63) ([Data México](https://www.economia.gob.mx/datamexico/es/profile/geo/tequisquiapan), con el cuestionario ampliado del Censo 2020).
- **Ojo con Wikipedia en español**: su ficha da "34,955 habitantes (2020)", que es la **cabecera**, no el municipio, y en otra parte dice "alrededor de 75,000" sin fuente.
- **Lo más reciente**: el Censo 2020 es la última cifra oficial que se pudo confirmar. No se pudo comprobar si el INEGI ya publicó un conteo o encuesta de 2025, porque se acabó el límite de búsquedas web de la sesión [SIN CONFIRMAR].
- **Código postal**: 76750 es el del centro. Otras colonias y comunidades tienen el suyo; por ejemplo, La Trinidad es 76774 ([tequis.travel – Imperdibles](https://tequis.travel/imperdibles_tequisquiapan/)). El buscador oficial de Correos de México no se consultó.
- **Zona horaria**: la Ley de los Husos Horarios (DOF, 28-oct-2022) define la Zona Centro, "referida al meridiano 90 grados al oeste de Greenwich", como "la mayor parte del territorio nacional"; Querétaro no está entre las excepciones, y el horario estacional "únicamente" se aplica en la frontera norte ([Cámara de Diputados – texto vigente](https://www.diputados.gob.mx/LeyesBiblio/pdf/LHHEUM.pdf)). Es la misma hora que la CDMX todo el año.

### Clima: qué estación usar
- **No hay normal climatológica 1991-2020 de ninguna estación de Tequisquiapan.** Revisé el catálogo del SMN para Querétaro (estaciones 22001 a 22080): el municipio tiene dos estaciones, **22025 "Presa Centenario"** (en operación, 1,889 msnm, 20.513° N, 99.900° O). Con esas coordenadas queda a 1.4 km en línea recta de la parroquia [CÁLCULO], aunque la presa está a ~6 km por carretera (`investigacion-guias`); puede que el SMN tenga la coordenada redondeada y 22031 "Presa Paso de Tablas" (suspendida). La 22025 no tiene normal 1991-2020 publicada.
- **Base recomendada: la normal 1971-2000 de la estación 22025 Presa Centenario**, con 27 a 30 años de datos por mes ([SMN – normal 1971-2000, 22025](https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales7100/qro/nor7100_22025.txt)). Es la única normal dentro del municipio.
- **Referencia más reciente: la normal 1991-2020 de la estación 22022 "San Juan del Río (DGE)"**, a 1,933 msnm y unos 20 km al suroeste ([SMN – normal 1991-2020, 22022](https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Normales9120/qro/nor9120_22022.txt)). Es 1-2 °C más cálida de día que la de Presa Centenario.
- **Dos errores en los datos del SMN que no hay que copiar:**
  - En San Juan del Río, **febrero de 2017 tiene 3,547.7 mm de lluvia** en un solo mes, un error de captura evidente ([estadística mensual 22022](https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Mensuales/qro/mes22022.txt)). Por eso la normal oficial dice 135.9 mm en febrero y 628 mm al año. Sin ese mes, febrero queda en ~14 mm y el año en **~506 mm** [CÁLCULO]. La investigación de inundaciones citaba los 628 mm: no usarlos.
  - En Presa Centenario, los datos de 2015 a 2025 tienen años casi idénticos entre sí (2021 repite a 2015 mes por mes) y un hueco de 2007 a 2014 ([estadística mensual 22025](https://smn.conagua.gob.mx/tools/RESOURCES/Normales_Climatologicas/Mensuales/qro/mes22025.txt)). No sirven para calcular un promedio reciente.

### Clima por mes: Presa Centenario (22025), normal 1971-2000

| Mes | Máx. media (°C) | Mín. media (°C) | Media (°C) | Lluvia (mm) | Días con lluvia |
|---|---|---|---|---|---|
| Enero | 22.3 | 4.7 | 13.5 | 11.8 | 1.8 |
| Febrero | 24.2 | 5.9 | 15.0 | 5.6 | 1.3 |
| Marzo | 27.1 | 8.5 | 17.8 | 7.5 | 1.7 |
| Abril | 28.9 | 11.3 | 20.1 | 16.6 | 2.7 |
| Mayo | **29.8** | 13.7 | **21.7** | 39.0 | 5.9 |
| Junio | 27.7 | **14.5** | 21.1 | 83.1 | **9.0** |
| Julio | 26.4 | 13.9 | 20.1 | **100.0** | 8.6 |
| Agosto | 26.2 | 13.7 | 20.0 | 82.3 | 7.4 |
| Septiembre | 25.2 | 13.1 | 19.1 | 75.4 | 7.3 |
| Octubre | 24.1 | 10.2 | 17.2 | 34.3 | 4.4 |
| Noviembre | 23.7 | 7.5 | 15.6 | 8.5 | 1.8 |
| Diciembre | 22.4 | 5.6 | 14.0 | 7.2 | 1.5 |
| **Año** | **25.7** | **10.2** | **17.9** | **471.3** | **53.4** |

- Extremos registrados en esa estación (1971-2000): máxima de 39 °C (abril de 2000) y mínimas de −6 °C (enero de 1975 y diciembre de 1989) y −6.5 °C (febrero de 1976). En octubre, noviembre y de diciembre a marzo hubo días bajo cero.

### Clima por mes: San Juan del Río (22022), normal 1991-2020

| Mes | Máx. media (°C) | Mín. media (°C) | Lluvia (mm) | Días con lluvia |
|---|---|---|---|---|
| Enero | 24.3 | 6.5 | 10.2 | 3.0 |
| Febrero | 26.3 | 7.7 | 135.9 oficial, ~14 sin el error [CÁLCULO] | 3.2 |
| Marzo | 28.1 | 9.4 | 11.6 | 2.6 |
| Abril | 30.5 | 11.8 | 15.7 | 3.7 |
| Mayo | 31.2 | 13.5 | 30.6 | 6.4 |
| Junio | 29.2 | 14.0 | 81.6 | 9.9 |
| Julio | 27.6 | 13.7 | 92.9 | 11.6 |
| Agosto | 27.6 | 13.6 | 94.3 | 11.1 |
| Septiembre | 26.3 | 13.3 | 96.3 | 10.2 |
| Octubre | 26.0 | 10.9 | 44.2 | 7.0 |
| Noviembre | 25.4 | 8.8 | 11.3 | 2.9 |
| Diciembre | 25.0 | 6.8 | 3.4 | 1.1 |
| **Año** | **27.3** | **10.8** | 628 oficial, **~506** sin el error | 72.7 |

### Otras fuentes del clima (no coinciden del todo)
- Portal municipal de turismo: "templado, con lluvias moderadas entre junio y octubre. La temporada seca va de noviembre a abril y hace más calor entre abril y junio. Durante el año, la temperatura varía entre los 5 y los 28 °C pero rara vez baja a menos de 2 °C o sube a más de 32 °C" ([tequis.travel – Tips de viaje](https://tequis.travel/tips_de_viaje_tequisquiapan/)). Cuadra con la tabla de Presa Centenario.
- Wikipedia en inglés, citando la Enciclopedia de los Municipios (2005): 511.8 mm al año, 17.5 °C de media y unos 18 días de helada al año ([en.wikipedia – Tequisquiapan](https://en.wikipedia.org/wiki/Tequisquiapan)). No se pudo verificar en el INAFED.
- [CONFLICTO] Wikipedia en español trae una tabla mensual sin estación ni fuente (marcada "cita requerida"), con 754 mm al año y un récord de 42 °C ([es.wikipedia – Tequisquiapan](https://es.wikipedia.org/wiki/Tequisquiapan)). No usarla. La investigación de guías citó de ahí "máxima promedio anual de 28.6 °C y mínima de 8.1 °C".

### Para la página "Clima en Tequisquiapan por mes" y "mejor época para ir"
Con las cifras de Presa Centenario, redondeadas:
- **Diciembre a febrero**: días templados (22-24 °C) y noches frías (5-6 °C, a veces bajo cero). Casi no llueve. Llevar chamarra. La "nieve" que se busca en diciembre es la de la Villa Navideña, que el municipio anuncia como atracción ("la emoción de la nieve") ([tequis.travel – Fiestas y eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)); no es nevada natural.
- **Marzo a mayo**: lo más seco y caluroso. Mayo es el mes más cálido (máxima de ~30 °C) y cuando empieza el Festival del Arte, Queso y Vino.
- **Junio a septiembre**: temporada de lluvias. Julio es el mes más lluvioso (~100 mm en unos 9 días con lluvia). Coincide con las vendimias de julio y agosto. Septiembre es cuando se han desbordado la presa y el río (sección 5).
- **Octubre y noviembre**: se acaban las lluvias, días de ~24 °C y noches de 8-10 °C. Festival por el aniversario del Pueblo Mágico en octubre y Tejedores de Luz en noviembre.
- Meses que se buscan: **julio** 26 °C / 14 °C, 100 mm; **agosto** 26 °C / 14 °C, 82 mm; **octubre** 24 °C / 10 °C, 34 mm; **diciembre** 22 °C / 6 °C, 7 mm.
- **"Clima hoy / mañana / fin de semana"**: no se puede responder con datos fijos. Enlazar al pronóstico oficial del SMN por municipio ([smn.conagua.gob.mx – Pronóstico por municipios](https://smn.conagua.gob.mx/es/pronostico-del-tiempo-por-municipios)) o mostrar un pronóstico en vivo.

---

## 2. Historia

Fuente principal: el portal de turismo del municipio, tequis.travel. La **Enciclopedia de los Municipios (INAFED)**, la fuente seria más citada, no se pudo abrir: `inafed.gob.mx` y su dominio anterior `e-local.gob.mx` no resolvían el 10-nov-2026. Lo que viene de ella llega vía Wikipedia en inglés, que la cita (edición de 2005), y se marca así. El sitio municipal `tequisquiapan.gob.mx` no tiene sección de historia.

### El nombre
- "Tequisquiapan, que en náhuatl significa 'Lugar sobre el río de Tequesquite'" ([tequis.travel – Históricos](https://tequis.travel/historicos_tequisquiapan/)).
- Wikipedia en español lo descompone en *tequixqui* (salitre, tequesquite), *atl* (agua) y *apan* (lugar), y cita una página de SECTUR que no cargó ([es.wikipedia](https://es.wikipedia.org/wiki/Tequisquiapan); `sectur.gob.mx` no resolvía).
- [CONFLICTO menor] Wikipedia en inglés, citando la Enciclopedia de los Municipios, lo traduce como "lugar de tequesquite", una sal natural usada para cocinar desde tiempos prehispánicos ([en.wikipedia](https://en.wikipedia.org/wiki/Tequisquiapan)). Para redactar: "del náhuatl; suele traducirse como 'lugar sobre el río de tequesquite', una sal mineral".
- [SIN CONFIRMAR] El nombre en otomí "Nthe" que trae hoy `web/app/[lang]/por-que-tequis/page.tsx`: no se encontró fuente. Tampoco usar "nitrato de potasio" (Wikipedia en inglés) para describir el tequesquite.

### Fundación
- **1551**, "en los barrios de San Juan y La Magdalena" ([tequis.travel – Históricos](https://tequis.travel/historicos_tequisquiapan/)). La misa de fundación se celebró en el templo de Santa María Magdalena, restaurado en 2022 ([tequis.travel – Iglesias](https://tequis.travel/iglesias_tequisquiapan/)).
- Según Wikipedia en inglés (Enciclopedia de los Municipios), lo fundó el cacique otomí Nicolás de San Luis Montañez, aliado de los españoles, como "Santa María de la Asunción y de las Aguas Calientes", juntando a otomíes y chichimecas ([en.wikipedia](https://en.wikipedia.org/wiki/Tequisquiapan)). Wikipedia en español dice que se fundó por cédulas reales de Carlos V firmadas por el virrey Luis de Velasco, y cita una nota de El Sol de San Juan del Río ("Tequisquiapan cumple 473 años y esta es su historia", [oem.com.mx](https://oem.com.mx/elsoldesanjuandelrio/gossip/tequisquiapan-cumple-473-anos-y-esta-es-su-historia-13565110), bloqueada con 403).
- **[CONFLICTO] el día de la fundación**, dentro del mismo portal: "24 de julio – Fiesta de la Fundación de Tequisquiapan" ([Fiestas y eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)) contra "el 24 de junio cuando se celebra su fiesta durante el aniversario de Tequisquiapan" ([Iglesias](https://tequis.travel/iglesias_tequisquiapan/)). Ya estaba anotado en `investigacion-guias`. Redactar "1551" sin día.
- **1567**: la pila que da nombre al Parque La Pila "almacenaba agua en 1567" ([tequis.travel – Históricos](https://tequis.travel/historicos_tequisquiapan/)).
- **1656**: el pueblo toma su nombre definitivo, registrado en una cédula real, por iniciativa de Juan Pérez Salmerón (Wikipedia en español, citando a aquiqueretaro.com, fuente débil). Wikipedia en inglés solo dice que "para 1656" ya se llamaba Tequisquiapan.

### El "centro geográfico del país" (Carranza, 1916)
- Lo que dice el municipio: "En 1916 el presidente Venustiano Carranza decretó a Tequisquiapan como el Centro Geográfico del País, y como testigo, puedes encontrar un monumento en forma de péndulo en el que se exhibe una placa conmemorativa, colocada en 1978. Ubicación: Calle Niños Héroes 17, Centro" ([tequis.travel – Históricos](https://tequis.travel/historicos_tequisquiapan/)).
- Wikipedia en español habla de "un decreto presidencial" de Carranza, sin año y sin fuente ([es.wikipedia](https://es.wikipedia.org/wiki/Tequisquiapan)).
- Wikipedia en inglés: Carranza visitó las aguas termales antes de ir a Querétaro a firmar la Constitución de 1917; el centro geográfico real "hoy suele ubicarse en Zacatecas". Cita a México Desconocido, pero esa URL hoy redirige a una nota de cestería que no habla del tema ([en.wikipedia](https://en.wikipedia.org/wiki/Tequisquiapan)).
- **[SIN CONFIRMAR]**: no se encontró el texto del decreto (ni en el DOF ni citado por una fuente seria), ni una fuente oficial (INEGI) de dónde está el centro geográfico "real". Redactar como lo cuenta el municipio ("según el municipio, en 1916 Carranza…") y **no afirmar** que el centro real está en Zacatecas hasta tener la fuente. Hoy `por-que-tequis` lo afirma.

### Tequis como lugar de descanso de la CDMX (siglo XX)
- Wikipedia en inglés: el crecimiento de finales del siglo XX convirtió al pueblo agrícola en destino de fin de semana, sobre todo para gente de la CDMX y de Querétaro, con balnearios como El Oasis y Termas del Rey; el bombeo de agua subterránea secó muchos manantiales. Cita a Reforma ("Las aguas mágicas de Tequisquiapan", 15-ago-1999, sin URL) y a El Economista (2011) ([en.wikipedia](https://en.wikipedia.org/wiki/Tequisquiapan)).
- El Parque La Pila "fue durante muchos años el balneario donde se daban cita los chiquillos" ([México Desconocido – Fin de semana en Tequisquiapan](https://www.mexicodesconocido.com.mx/fin-de-semana-en-tequisquiapan-queretaro.html), sin fecha).
- **[SIN CONFIRMAR]** el "auge de los balnearios en los años 50" y "Carranza, asiduo a sus aguas termales" que dice hoy `por-que-tequis`: no se encontró una fuente con esa década ni con lo de "asiduo". No se pudo buscar más (límite de búsquedas).
- Otros datos del municipio: el Club de Leones se fundó en 1953 en un edificio que fue cuartel, hospital y caballeriza ([tequis.travel – Históricos](https://tequis.travel/historicos_tequisquiapan/)).

### Cantinflas y "El Profe" (1971)
- Según el municipio: "En el año de 1971, Tequisquiapan es elegido para que se realice 'El profe', película protagonizada por Cantinflas"; el pueblo de la película se llama El Romeral; se ven lugares que existen todavía, "como el 'Centro geográfico' y la escuela primaria Rafael Zamorano"; "la película fue grabada en su totalidad en Tequisquiapan" ([tequis.travel – Cantinflas "El profe"](https://tequis.travel/cantinflas_el_profe_tequisquiapan/), 3-may-2024).
- Hay una escultura de Cantinflas de tamaño natural en el Jardín del Arte, develada en 2018 (misma fuente).
  - [CONFLICTO] La nota dice que se develó "en el aniversario luctuoso número 25 del comediante el 03 de marzo 2018", pero ella misma da como fecha de muerte el 20 de abril de 1993, así que el 25.º aniversario cayó en abril. Redactar "en 2018".
- La escuela Rafael Zamorano está en la zona que se evacuó en las inundaciones de 2025 (sección 5).

### Artesanías: cestería y mimbre
- "Paraíso de la cestería": "un arte con casi 100 años de antigüedad", con familias enteras de tejedores y colectivos que exportan ([tequis.travel – Artesanías](https://tequis.travel/artesanias_tequisquiapan/)). [CONFLICTO] en la misma página, el Mercado Tequesquicalli dice "desde hace casi 80 años".
- **14 talleres artesanales**, la mayoría en el Barrio de la Magdalena, con nombre, artesano, dirección, horario y teléfono (misma página). México Desconocido reseña nueve de ellos y explica que la vara de sauce se volvió escasa con la urbanización y el mimbre la sustituyó en buena parte; materiales: sauce, sabino, mimbre, vara portuguesa, paja de trigo, palma y otros ([México Desconocido – Cestería](https://www.mexicodesconocido.com.mx/tequisquiapan-cesteria.html), sin fecha).
- Dónde comprar (todo según [tequis.travel – Artesanías](https://tequis.travel/artesanias_tequisquiapan/)): Casa del Artesano (Morelos Sur 20; 414 122 3695 según el directorio municipal), Mercado Tequesquicalli (Ezequiel Montes esq. Salvador Michaus), Mercado Artesanal Telésforo Trejo (más de 60 locales en dos pisos, con vara de sauz, carrizo y ópalo tallado) y Parador Artesanal y Gastronómico Luis Donaldo Colosio (más de 500 puestos, en la carretera federal 120, esquina Paseo del Jazmín; [parador-artesanal.com](https://parador-artesanal.com/)).
- Fechas con mimbre: Festival Internacional del Artesano (marzo, en la Plaza Miguel Hidalgo), Tejedores de Luz (noviembre) y Villa Navideña (diciembre) ([tequis.travel – Fiestas y eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)).

### Ópalo
- Las minas están en La Trinidad, "a 12 km al sur" ([tequis.travel – Imperdibles](https://tequis.travel/imperdibles_tequisquiapan/)). Fichas de las minas que reciben visitas en `investigacion-actividades-patrimonio-2026-11.md`.
- Wikipedia en inglés (Enciclopedia de los Municipios) nombra las minas El Iris, La Carbonera, La Esperanza y El Rendón; son datos de 2005 [SIN CONFIRMAR hoy].

### Leyendas
- **No se encontró el texto de ninguna leyenda en una fuente seria.** Lo que hay:
  - "Noches de leyendas": "los sábados por la noche, actores y actrices realizan un recorrido por las calles del pueblo mientras representan y relatan clásicas leyendas de la región. La travesía parte a un costado de la Parroquia" ([tequis.travel – Fiestas y eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)).
  - Tranvía turístico con "historia, anécdotas y leyendas", de 1 a 1:30 h, de viernes a domingo entre las 11 y las 17 h [FRÁGIL] ([tequis.travel – ¿Qué hacer?](https://tequis.travel/que_hacer_tequisquiapan/)).
  - México Desconocido menciona "historias de duendes y aparecidos", la del Juan Pez, que "nadaba en la pila aunque estuviera seca", y la creencia de que la casona del Mesón de San José tiene pasadizos hasta el templo de San Sebastián ([México Desconocido – Fin de semana](https://www.mexicodesconocido.com.mx/fin-de-semana-en-tequisquiapan-queretaro.html)).
- Para redactar: mencionar los recorridos y estas tres en una línea cada una, sin inventar el relato.

### Línea de tiempo verificable (para reemplazar o ajustar la de `por-que-tequis`)
| Año | Hecho | Estado |
|---|---|---|
| 1551 | Fundación en los barrios de San Juan y La Magdalena | Confirmado (municipio) |
| 1567 | La pila de agua del pueblo (hoy Parque La Pila) | Confirmado (municipio) |
| 1656 | Nombre definitivo | Solo Wikipedia y fuente débil |
| 1902 | Estación Bernal | Ver el aviso 2 de `investigacion-guias` |
| 1916 | Carranza: "centro geográfico del país" | Lo dice el municipio; sin decreto ni fuente oficial |
| 1953 | Club de Leones | Confirmado (municipio) |
| 1971 | Se filma "El Profe" con Cantinflas | Confirmado (municipio) |
| 1978 | Placa del monumento al Centro Geográfico | Confirmado (municipio) |
| Años 50 | "Auge de los balnearios" | [SIN CONFIRMAR] |
| 2012 | Pueblo Mágico (17 de octubre) | Confirmado (Expansión y municipio) |
| 2018 | Escultura de Cantinflas en el Jardín del Arte | Confirmado (municipio) |

---

## 3. ¿Es seguro Tequisquiapan?

Redactar en tono neutro: dar el dato, la fecha y la fuente, sin "es muy seguro" ni "cuidado". Las cifras del SESNSP son **carpetas de investigación** (delitos denunciados), no víctimas ni delitos reales, que suelen ser más.

### Cifras oficiales del SESNSP (municipio 22017)
- Fuente: [datos abiertos del SESNSP](https://www.gob.mx/sesnsp/acciones-y-programas/datos-abiertos-de-incidencia-delictiva) (página actualizada el 16-oct-2026), archivos `Municipal-Delitos-2015-2025_sep2026.zip` (2015-2025) y `RNID-Delitos_Municipal-2026-sep2026.csv` (enero a septiembre de 2026). Las sumas por año son [CÁLCULO].
- **Total del fuero común en Tequisquiapan**: 1,512 (2023), 1,658 (2024) y 1,483 (2025, −10.6 % frente a 2024).
- **Homicidio doloso**: 5 (2023), 2 (2024), 3 (2025). Feminicidio: 1 en 2025.
- **Robos (todos los tipos)**: 514, 532 y 411.
- **Lo más denunciado en 2025**: "otros robos" 219, amenazas 187, lesiones dolosas 165, violencia familiar 142, fraude 106, robo a casa habitación 67, robo de vehículo 46, robo a negocio 42, narcomenudeo 22, robo a transeúnte 12, extorsión 9.
- **Enero a septiembre de 2026**: 1,161 delitos, 1 homicidio doloso y 306 robos. [CONFLICTO de método] En 2026 el SESNSP cambió de metodología (RNID) y publica 2026 aparte; enero-septiembre de 2025 con el método viejo da 1,132, pero no es comparable directo.
- **Tasas de 2025 por 100 mil habitantes** [CÁLCULO, con la población del Censo 2020]:

  | Lugar | Delitos 2025 | Por 100 mil | Homicidios dolosos | Por 100 mil |
  |---|---|---|---|---|
  | Tequisquiapan | 1,483 | 2,054 | 3 | 4.2 |
  | Estado de Querétaro | 56,559 | 2,388 | 140 | 5.9 |
  | San Juan del Río | 6,608 | 2,219 | 19 | 6.4 |
  | Ezequiel Montes | 626 | ~1,387 | 0 | 0 |
  | Municipio de Querétaro | 32,541 | 3,100 | 61 | 5.8 |

  - Población: estado 2,368,467 y municipio de Querétaro 1,049,777 ([INEGI, resultados del Censo 2020 en Querétaro](https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2021/EstSociodemo/ResultCenso2020_Qro.pdf)); Tequisquiapan 72,201, San Juan del Río 297,804 y Ezequiel Montes 45,141 ([INEGI, ITER 2020 de Querétaro](https://www.inegi.org.mx/contenidos/programas/ccpv/2020/datosabiertos/iter/iter_22_cpv2020_csv.zip), ver la sección 1).
  - En resumen: en 2025 Tequis tuvo menos delitos denunciados por habitante que el promedio del estado y que San Juan del Río, y más que Ezequiel Montes.
- **Tendencia anterior**: enero-octubre de 2021, 865 carpetas; enero-octubre de 2024, 1,388 (+60 %) ([El Financiero, 16-dic-2024](https://www.elfinanciero.com.mx/estados/2024/12/16/con-mauricio-kuri-queretaro-registra-un-alza-de-12-en-incidencia-delictiva/)).
- **Data México** (Secretaría de Economía) tiene ficha municipal con seguridad: octubre de 2025 con 120 denuncias (30 robos, 20 lesiones, 14 amenazas) [FRÁGIL] ([Data México – Tequisquiapan](https://www.economia.gob.mx/datamexico/es/profile/geo/tequisquiapan)).

### Encuestas del INEGI
- **ENSU** (percepción de inseguridad urbana): **no cubre Tequisquiapan ni San Juan del Río**. De Querétaro solo mide la ciudad de Querétaro. Ahí, 26.8 % de la población adulta se sentía insegura en septiembre de 2026 (36.1 % en junio de 2026, 44.8 % en septiembre de 2025), contra 58.1 % del promedio nacional [FRÁGIL] ([INEGI, ENSU, comunicado 49/26 del 23-oct-2026](https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2026/ensu/ENSU2026_10_RR.pdf)). La próxima entrega es el 22-ene-2027.
  - Ojo: el "58.8 %" que citan algunas notas sobre Querétaro es la efectividad percibida del gobierno de la ciudad, no la inseguridad.
- **ENVIPE 2026** (solo a nivel estado): incidencia de 35,904 delitos por 100 mil habitantes en 2025 (45,107 en 2024, −20.4 %); percepción de inseguridad en el estado de 44.6 % contra 74 % nacional, la cuarta más baja del país ([Publimetro, 11-sep-2026](https://www.publimetro.com.mx/queretaro/2026/09/11/incidencia-delictiva-en-queretaro-cayo-204-en-2025/)).

### Alertas de viaje de otros países [FRÁGIL]
- **EE. UU.**: Querétaro en Nivel 2, "Exercise Increased Caution" (el mismo nivel general de México), por delincuencia y terrorismo; aviso actualizado el 29-may-2026 ([Travel Market Report, 3-jun-2026](https://www.travelmarketreport.com/destinations/articles/us-updated-mexico-travel-advisory-2026-terrorism-crime-and-kidnapping)). [SIN CONFIRMAR en el texto oficial: travel.state.gov respondió 403].
- **Canadá**: "Exercise a high degree of caution" para todo México; Querétaro no está entre las regiones con aviso especial (página actualizada el 19-oct-2026) ([travel.gc.ca](https://travel.gc.ca/destinations/mexico)).
- **Reino Unido**: la página de riesgos regionales no menciona Querétaro ([gov.uk](https://www.gov.uk/foreign-travel-advice/mexico/regional-risks)).

### Prensa
- No se encontró en prensa seria ningún hecho violento notable en Tequisquiapan en 2025-2026. Las notas policiacas de OEM (El Sol de San Juan del Río) estaban bloqueadas, así que no es una búsqueda exhaustiva.
- El último de alto perfil fue el 18-abr-2023: un ataque en un rancho de la comunidad de El Tejocote dejó 5 muertos; según la Fiscalía, una víctima era un presunto líder criminal ([El Financiero, 19-abr-2023](https://www.elfinanciero.com.mx/estados/2023/04/19/tequisquiapan-reportan-al-menos-5-muertos-tras-ataque-armado-en-queretaro/); [Eje Central, 20-abr-2023](https://www.ejecentral.com.mx/identifican-a-lider-criminal-entre-victimas-de-tequisquiapan)).
- La masacre del bar Los Cantaritos fue en la ciudad de Querétaro, el 9-nov-2024, no en Tequis ([Expansión, 10-nov-2024](https://politica.expansion.mx/estados/2024/11/10/ataque-bar-queretaro-que-dejo-10-muertos)). Algunos agregadores la fechan mal.
- Percepción local: en mayo de 2024, el entonces candidato y hoy alcalde Héctor Magaña dijo que "nuestra seguridad, que caracterizaba al municipio de Tequisquiapan, se ha ido perdiendo" ([Publimetro, 27-may-2024](https://www.publimetro.com.mx/queretaro/2024/05/27/entrevista-con-hector-magana/)).
- [SIN CONFIRMAR] 35 millones de pesos para la segunda etapa del programa municipal de seguridad en 2026 ([El Congresista](https://elcongresista.mx/politica/nacional/tequisquiapan-seguridad-inversion-millonaria), no cargó); operativos en comunidades y en el límite con Hidalgo en julio de 2026 ([El Sol de San Juan del Río](https://oem.com.mx/elsoldesanjuandelrio/policiaca/realizan-operativos-de-seguridad-en-tequisquiapan-30949436), bloqueada).

### Atención al turista
- **CAPTA** (Centro de Atención y Protección al Turista, del estado): pone módulos itinerantes en temporada vacacional, entre otros en Tequisquiapan; teléfono 442 238 5033, oficina en Pasteur 4 Nte., Centro de Querétaro ([queretaro.travel](https://queretaro.travel/lugares/get-to-know-capture-and-improve-your-experience-in-queretaro/?lang=en)) [FRÁGIL: la página es de 2021]. Canadá también lista el CAPTA con ese número.
- **Policía turística municipal**: solo un anuncio de 2019 ("Pondrán en marcha policía turística", [El Sol de San Juan del Río](https://oem.com.mx/elsoldesanjuandelrio/local/pondran-en-marcha-policia-turistica-18087754), visto solo en el extracto). [SIN CONFIRMAR] que siga.

### Para redactar
- "¿Es seguro Tequis para visitar?": dar las cifras de 2025 frente al estado, el nivel 2 de EE. UU. (igual que el promedio de México) y el CAPTA. No prometer.
- "¿Es seguro para vivir?": las mismas cifras, más que en 2025 lo más denunciado fueron robos, amenazas, lesiones y violencia familiar. No hay encuesta de percepción para el municipio.

---

## 4. Cómo moverse (lo que no está en la investigación de transporte)

Autobuses (ETN desde la Central del Norte, Flecha Amarilla y Flecha Azul desde Querétaro), aeropuertos, traslados, Uber, QroVan y la terminal de Tequis ya están en `investigacion-transporte-2026-11.md`. Aquí solo va lo nuevo.

### Tren México–Querétaro: no llega a Tequis y todavía no funciona
- **Estaciones**: Huehuetoca, Tula, San Juan del Río, Querétaro Central, El Marqués y La Corregidora, con salida desde la Ciudad de México; 226 km de doble vía y velocidades de diseño de 160 a 200 km/h ([SICT, comunicado 413-2025, 20-dic-2025](http://www.gob.mx/sict/prensa/tren-ciudad-de-mexico-queretaro-beneficiara-a-10-millones-de-pasajeros-al-ano-artf)).
- **Tiempos estimados**: CDMX–Querétaro unas 2 h y **CDMX–San Juan del Río 1 h 20 min** (mismo comunicado). No hay tarifas publicadas.
- **Estación más cercana a Tequis: San Juan del Río.** Wikipedia la ubica en la Av. Tecnológico, colonia San Rafael, citando un video de la supervisión del 27-abr-2025 ([es.wikipedia – Tren México-Querétaro](https://es.wikipedia.org/wiki/Tren_México-Querétaro)) [SIN CONFIRMAR en un texto oficial]. Desde la Plaza Miguel Hidalgo hasta esa avenida son 22-23 km y unos 27-29 min [CÁLCULO]. La SICT no menciona ninguna estación en Tequisquiapan.
- **Estado de la obra en 2026** [FRÁGIL / SIN CONFIRMAR]: según Wikipedia, con corte de octubre de 2026, el avance físico es de 32 % y el derecho de vía está liberado en 86 %; el primer recorrido de prueba se prevé para finales del primer semestre de 2027 y el fin de obra para octubre de 2027. Las fuentes son videos de conferencias y supervisiones (25-jun-2026 y 31-oct-2026) que no pude revisar. La obra la hace la Sedena (Agrupamiento de Ingenieros "Felipe Ángeles"), con la SICT a cargo de planear y supervisar. Banderazo de obra: 28-abr-2025.
  - Lo único oficial que se pudo leer de 2025 es que la prospección arqueológica con el INAH iba en 99 % ([Presidencia, 30-jul-2025](http://www.gob.mx/presidencia/prensa/avanza-construccion-de-trenes-mexico-pachuca-y-mexico-queretaro-generaran-260-mil-empleos-este-ano)).
  - El portal Proyectos México ([ppp07](https://www.proyectosmexico.gob.mx/ppp07-tren-mexico-queretaro/)) no abrió por un error de certificado.
- **El tren viejo**: la Estación Bernal (en Tequis, no en Bernal) se inauguró en 1902 y "aunque el tren ya no pasa por ahí, funciona actualmente como un mirador" ([tequis.travel – Históricos](https://tequis.travel/historicos_tequisquiapan/)). Ver el aviso 2 de `investigacion-guias`.
- Para redactar: "El tren de pasajeros México–Querétaro está en construcción y no llega a Tequis. Cuando funcione (se prevé para 2027), la estación más cercana será la de San Juan del Río, a unos 25 minutos en auto".

### Moverse sin auto dentro de Tequis
- **A pie**: el centro se recorre caminando. La terminal de autobuses queda a ~1.3 km de la parroquia (`investigacion-transporte`).
- **Tranvía turístico**: recorrido de 1 a 1:30 h por los puntos de interés, de viernes a domingo entre las 11 y las 17 h [FRÁGIL] ([tequis.travel – ¿Qué hacer?](https://tequis.travel/que_hacer_tequisquiapan/)). No publica precio ni punto de salida en esa página.
- **Uber**: sí opera, con espera larga (`investigacion-transporte`).
- **DiDi**: sigue **sin confirmar** que funcione en Tequisquiapan. No se pudo volver a buscar (límite de búsquedas). Para redactar: "Uber funciona; DiDi está autorizada en el estado, pero no siempre hay autos en Tequis".
- **Taxis**: el directorio municipal 2025 no trae sección de taxis ni sitios ([directorio](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf)). No hay un sitio de taxis con teléfono confirmado.
- **A los pueblos de alrededor**: QroVan a Ezequiel Montes y a San Juan del Río (`investigacion-transporte`). A Cadereyta y a la Sierra Gorda no se buscó transporte público.

### Teléfonos útiles (directorio municipal 2025)
Fuente: [Directorio Tequisquiapan 2025](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf) [FRÁGIL].
- Emergencias: 911. Denuncia anónima: 089.
- Seguridad Pública Tequisquiapan: 414 140 4424. Bomberos voluntarios: 414 273 6109. Fiscalía de Tequisquiapan: 442 238 7600.
- Protección Civil Tequisquiapan: "066 y 41427345" (así viene en el directorio, con el número incompleto; el mismo número aparece para la Cruz Roja). Protección Civil estatal: 442 217 3712.
- Ángeles Verdes (carreteras): 078 y 800 006 8839.
- Secretaría de Turismo municipal: 414 265 1999. Casa del Artesano: 414 122 3695. Centro Cultural: 414 273 1516.
- CAPTA (atención al turista del estado): 442 238 5033 (sección 3).

---

## 5. Inundaciones: "¿se inunda Tequis?"

### Resumen para el viajero
- No cada año. Pasó en septiembre y octubre de 2021 y en septiembre de 2025, cuando lluvias extraordinarias en la cuenca llenaron la **Presa Centenario** (en el municipio, río arriba del pueblo) y el **río San Juan** se desbordó.
- Se afecta lo que está junto al río: el Parque La Pila, calles del centro cercanas al cauce, Los Sabinos, La Magdalena, Los Claustros y algunos hoteles y balnearios ribereños. **El centro histórico sí se inundó** en 2021 y en 2025.
- Cuándo: los eventos graves fueron entre septiembre y principios de octubre, al final de la temporada de lluvias (ver el clima en la sección 1). En esas fechas, seguir a Protección Civil de Tequisquiapan y los avisos de Conagua.
- Dato que ayuda a entenderlo: la estación del SMN en la Presa Centenario registró solo ~30 mm en septiembre de 2025 [FRÁGIL: datos recientes de esa estación con errores, ver la sección 1]. El agua viene de la cuenca, no de la lluvia en el pueblo.

### Septiembre de 2025
- **6 de septiembre**: semáforo naranja con la Presa Centenario al 88.3 % ([Publimetro, 6-sep-2025](https://www.publimetro.com.mx/queretaro/2025/09/06/tequisquiapan-pasa-a-semaforo-naranja-por-riesgo-de-inundaciones/)). Esa noche, **semáforo rojo** y lista oficial de zonas a evacuar ([N+, 6-sep-2025](https://www.nmas.com.mx/queretaro/clima/semaforo-rojo-por-inundaciones-en-tequisquiapan-queretaro-inican-tareas-de-evacuacion-zona-de-riesgo/)): Centro, Presidencia, La CEA, Las Villitas, Puente Viejo, La Rinconada, Los Sabinos, Rivera de los Sabinos, San Joaquín, Fracc. Manantiales, Los Claustros, Hotel Neptuno, Hotel El Relox, escuela Rafael Zamorano y los mercados Guadalupano, Tequesquicalli y Telésforo Trejo. Una segunda lista (sin aclarar si era de evacuación): Barrio La Magdalena, Barrio de San Juan, La Vega, Hacienda Grande.
- **7 de septiembre, ~8:00**: la presa se desbordó. Hubo hasta ~80 cm de agua en algunas calles (los vecinos recuerdan 1.5 m en 2021); el Parque La Pila quedó inundado por completo; calles afectadas: Heroico Colegio Militar, Fray Junípero Serra, Guillermo Prieto, Ezequiel Montes, cuatro calles de La Magdalena y Paseo del Jazmín; costales de arena en casas, hoteles y el mercado de artesanías ([La Verdad, 7-sep-2025](https://laverdadnoticias.com/ultimas-noticias/mexico/inundaciones-en-tequisquiapan-viviendas-afectadas-tras-el-desbordamiento-de-la-presa-el-centenario)).
- **Nivel máximo de la presa** [CONFLICTO]: 112.68 % y 113.99 %, con desfogue de 96.493 m³/s, y evacuación de la zona hotelera y "al menos nueve colonias" ([La Razón, 7-sep-2025](https://www.razon.com.mx/estados/2025/09/07/presa-el-centenario-en-tequisquiapan-queretaro-se-desborda-alcanza-112-de-su-capacidad/)); 112.8 % ([La Verdad](https://laverdadnoticias.com/ultimas-noticias/mexico/desborde-de-presa-el-centenario-en-tequisquiapan-provoca-evacuaciones-masivas)); 114 % (N+, 8-sep).
- **Evacuación**: ~95 % de las zonas de riesgo; evaluación preliminar de 283 personas y 67 viviendas afectadas en Fracc. Claustros, Col. Los Sabinos, Zona Centro y Barrio La Magdalena ([N+, 8-sep-2025](https://www.nmas.com.mx/queretaro/clima/desbordamiento-de-la-presa-centenario-genero-la-evacuacion-del-centro-de-tequisquiapan/)). [CONFLICTO] La Verdad da otra lista: Santa Fe, La Bartolina, Piñatequis, La Magdalena, Sabinos, La Rinconada, Puente Viejo y La Vega, más casas junto a La Pila; Bordo Blanco, San Nicolás y Santa María del Camino se resguardaron por precaución; albergue en la Casa de Día del Adulto Mayor.
- **10 de septiembre**: Protección Civil estatal avisó que el río San Juan seguiría creciendo ([N+, 10-sep-2025](https://www.nmas.com.mx/queretaro/clima/alerta-por-crecida-de-rios-en-san-juan-del-rio-y-tequisquiapan-tras-lluvias-en-el-pais/)).
- **Turismo**: ~10 % de los hoteles tomó medidas preventivas y la mayoría de los atractivos siguió abierta ([El Congresista, 8-sep-2025](https://elcongresista.mx/politica/nacional/tequisquiapan-control-inundaciones-turismo)).
- No se encontró declaratoria federal de emergencia o desastre para Tequis en 2025, ni mención de la Presa Constitución de 1917 (San Juan del Río) en las notas de 2025.

### 2021 (dos eventos)
- **18 a 21 de septiembre**: desbordamiento con el Parque La Pila inundado ([Eje Central, 19-sep-2021](https://www.ejecentral.com.mx/tras-advertencia-de-conagua-se-desborda-presa-en-tequisquipan)). Centro Histórico inundado: 141 viviendas desalojadas, 9 de 69 hoteles evacuados, 30 negocios afectados y 5 fraccionamientos junto al río ([Uno TV, 22-sep-2021](https://www.unotv.com/estados/queretaro/queretaro-tequisquiapan-comienza-a-levantarse-tras-inundacion/)).
- **1 a 3 de octubre**: segunda alerta roja en 10 días; afectó parte de la cabecera, San Nicolás y Bordo Blanco; se cerraron Francisco Márquez, Juárez y Rivera del Río. La derivadora Constitución de 1857 descargaba 216.7 m³/s ([Uno TV, 1-oct-2021](https://www.unotv.com/estados/queretaro/tequisquiapan-y-san-juan-del-rio-en-alerta-roja-por-posibles-inundaciones/)). Tirante de 1.2 m en el primer cuadro ([El Universal, 4-oct-2021](https://www.eluniversal.com.mx/estados/queretaro-de-nuevo-bajo-el-agua/)).

### Antes de 2021 y zonas de riesgo
- Estudio del IMTA, "Programa Contra Contingencias Hidráulicas para la Zona Urbana de Tequisquiapan" ([PDF en gob.mx, archivo de dic-2017](https://www.gob.mx/cms/uploads/attachment/file/281339/ZONA_URBANA_TEQUISQUIAPAN__QRO..pdf)):
  - Inundaciones previas: 2008 (desborde de la Centenario, varias colonias), 2011 (drenaje colapsado), 2012 (La Fuente, más de 40 familias), 2013 (≥90 viviendas en Bordo Blanco, San Nicolás, Adolfo López Mateos y Centro), 2014 y 2015 (centro).
  - Zonas modeladas: margen derecha del río San Juan entre Fray Junípero Serra y la carretera a Huichapan (1.40 m con periodo de retorno de 2 años, 1.69 m con 100 años); centro a la altura de Av. Benito Juárez Ote. (hasta 1.60 m); norte de Bordo Blanco (0.40-0.75 m); Fundadores de Hacienda Grande (0.55 m); arroyo del club de golf desde la calle Higuera (~2 m).
- No se encontró un Atlas de Riesgos municipal publicado.

### 2026
- No se encontraron inundaciones en Tequis en la temporada de 2026 (varias notas que el buscador fechaba en 2026 eran de 2021).
- El estado aprobó una declaratoria preventiva para la temporada de lluvias, vigente hasta el 30 de noviembre, con ~100 millones de pesos disponibles ([Publimetro, 22-may-2026](https://www.publimetro.com.mx/queretaro/2026/05/22/aprueban-declaratoria-de-emergencia-por-lluvias-en-queretaro/)).
- El municipio gestiona más de 10 millones en proyectos con Conagua (Proagua) para drenaje, agua potable, alcantarillado y la planta de tratamiento La Trinidad, más un fondo de 2 millones para daños ([Publimetro, 26-may-2026](https://www.publimetro.com.mx/queretaro/2026/05/26/tequisquiapan-gestiona-mas-de-10-mdp-en-proyectos-con-conagua/)). No se encontraron obras de desazolve del río, bordos ni rehabilitación de La Pila; El Sol de San Juan del Río publicó "Parque La Pila está en ruinas" (24-nov-2025, ver `investigacion-guias-2026-11.md`).

---

## 6. Alrededores

La Peña de Bernal ya está en `investigacion-guias-2026-11.md` (30.2 km / 39 min [CÁLCULO]).

### Dos avisos
- **Ranas y Toluquilla están cerradas.** "Permanecerán cerradas al público, desde este viernes 10 de octubre de 2025 y hasta nuevo aviso, como medida de protección civil"; el INAH recomienda en su lugar El Cerrito y Tancama ([INAH, Boletín 529, 10-oct-2025](https://inah.gob.mx/images/boletines/2025/529/Boletin%20529.pdf)). No se encontró anuncio de reapertura, aunque las fichas del INAH de abajo todavía dan horario y precios. Confirmar antes de recomendarlas.
- **La lista de Pueblos Mágicos de Querétaro puede cambiar este mes**: ninguno de los siete quedó como "consolidado" en la evaluación de SECTUR; Bernal y Cadereyta sacaron "A", la categoría más baja, y en noviembre de 2026 se define si se pierde algún nombramiento ([Publimetro, 31-jul-2026](https://www.publimetro.com.mx/queretaro/2026/07/31/queretaro-no-logro-tener-pueblos-magicos-consolidados-en-noviembre-se-define-si-pierde-nombramientos/)). Revisar antes de publicar.

### Distancias desde la Plaza Miguel Hidalgo [CÁLCULO]

| Destino | Distancia | Tiempo (sin tráfico) | Pueblo Mágico |
|---|---|---|---|
| Ezequiel Montes (cabecera) | 17.8 km | 21 min | No (solo Bernal, en su municipio) |
| San Juan del Río (Puente de la Historia) | 23.3 km | 27 min | No |
| Cadereyta (parroquia) | 28.6 km | 38 min | Sí, 2011 |
| Cadereyta, Quinta Schmoll | 28.9 km | 39 min | |
| Cadereyta, Jardín Botánico Regional | 30.2 km | 42 min | |
| Colón (Basílica de Soriano) | 41.9 km | 47 min | No |
| Amealco de Bonfil | 61.4 km | 1 h 10 min | Sí, 2018 |
| Querétaro (Plaza de Armas) | 62.0 km | 1 h 02 min | (Patrimonio UNESCO) |
| San Joaquín (cabecera) | 86.1 km | 1 h 55 min | Sí, 2015 |
| Peñamiller (cabecera) | 89.4 km | 1 h 54 min | No |
| Peñamiller, Cañón del Paraíso | 86.6 km | 1 h 54 min | |
| Pinal de Amoles | 114.0 km | 2 h 09 min | Sí, 2023 |
| San Miguel de Allende (Jardín Allende) | 114.9 km | 1 h 54 min | No (Patrimonio UNESCO) |
| Atotonilco (santuario) | 129.9 km | 2 h 08 min | |
| Jalpan de Serra (misión) | 153.0 km | 2 h 49 min | Sí, 2010 |
| Xilitla, Las Pozas (SLP) | 238.8 km | 4 h 39 min | Xilitla sí, 2011 |
| CDMX (Zócalo) | 188.2 km | 2 h 35 min | |

- Comparar con lo publicado: Wikipedia da Tequis "a 60 km al oriente de la ciudad de Querétaro" (ver `investigacion-guias`); para la CDMX, SICT da 175-185 km (ver `investigacion-transporte`).
- OSRM no conoce el tráfico ni las curvas de la Sierra Gorda: a San Joaquín, Jalpan y Xilitla el tiempo real es mayor.

### Pueblos Mágicos de Querétaro (7)
La página de SECTUR todavía lista solo seis, sin años: Amealco, Bernal, Cadereyta, Jalpan, San Joaquín y Tequisquiapan ([gob.mx/sectur](https://www.gob.mx/sectur/articulos/pueblos-magicos-206528)). El séptimo, Pinal de Amoles, entró en 2023.

| Pueblo | Año | Fuente |
|---|---|---|
| Bernal | 2005 o 2006 [CONFLICTO] | 2006: [queretaro.travel – Ezequiel Montes](https://queretaro.travel/lugares/ezequiel-montes/?lang=en) y [El Financiero, 25-sep-2015](https://www.elfinanciero.com.mx/bajio/san-joaquin-el-nuevo-pueblo-magico-del-estado-de-queretaro/). 2005: Wikipedia (ver `investigacion-guias`). |
| Jalpan de Serra | 2010 | [El Financiero, 2015](https://www.elfinanciero.com.mx/bajio/san-joaquin-el-nuevo-pueblo-magico-del-estado-de-queretaro/); [jalpan.travel](https://jalpan.travel/en/) |
| Cadereyta de Montes | 2011 (agosto) | [queretaro.travel – Cadereyta](https://queretaro.travel/lugares/cadereyta-de-montes/?lang=en) |
| Tequisquiapan | 2012 (17 de octubre) | ver la sección 1 |
| San Joaquín | 2015 (septiembre) | [El Financiero, 25-sep-2015](https://www.elfinanciero.com.mx/bajio/san-joaquin-el-nuevo-pueblo-magico-del-estado-de-queretaro/) |
| Amealco de Bonfil | 2018 (octubre, en Morelia) | [El Financiero](https://www.elfinanciero.com.mx/bajio/amealco-capital-de-la-muneca-otomi/); [Diario de Querétaro](https://oem.com.mx/diariodequeretaro/local/nombran-a-amealco-pueblo-magico-17893803) |
| Pinal de Amoles | 2023 (anuncio el 26 de junio; entrega en septiembre) | [Expansión, 26-jun-2023](https://expansion.mx/empresas/2023/06/26/45-nuevos-pueblos-magicos); [Tus Buenas Noticias, 9-sep-2023](https://www.tusbuenasnoticias.com/amp/noticias/buenas-noticias/2023/09/09/23516-pinal-de-amoles-en-queretaro-recibe-el-nombramiento-oficial-de-pueblo-magico) |

- No son Pueblo Mágico: Ezequiel Montes como municipio ([N+](https://www.nmas.com.mx/queretaro/sociedad/pueblo-magico-corresponde-a-pena-de-bernal-y-no-a-todo-ezequiel-montes-esto-sabemos/)), San Juan del Río, Colón, Peñamiller.
- San Francisco Anbanica (Corregidora) es "Barrio Mágico" desde junio de 2024, otro programa ([Tus Buenas Noticias, 30-jun-2024](https://www.tusbuenasnoticias.com/amp/noticias/turismo/2024/06/30/34998-san-francisco-anbanica-es-declarado-barrio-magico-de-queretaro)).

### Ezequiel Montes
- Municipio vecino, entre los valles centrales y el semidesierto; Bernal pertenece a él. Concentra bodegas de la Ruta Arte, Queso y Vino (La Redonda, Finca Sala Vivé by Freixenet, De Cote, Viñedos Azteca, Bodegas Vaivén) y Villa Progreso, con capillas otomíes y talleres de ixtle y cerámica ([queretaro.travel – Ezequiel Montes](https://queretaro.travel/lugares/ezequiel-montes/?lang=en)). Detalles de los viñedos y del aviso de La Redonda en `investigacion-guias-2026-11.md`.

### Cadereyta de Montes (Pueblo Mágico, 2011)
- Por qué ir: dos colecciones de flora del semidesierto (Quinta Schmoll y Jardín Botánico Regional), la parroquia de San Pedro y San Pablo, la presa Zimapán y la isla Tzibanzá, el mármol de Vizarrón y viñedos ([queretaro.travel – Cadereyta](https://queretaro.travel/lugares/cadereyta-de-montes/?lang=en)).
- **Jardín Botánico Regional "Ing. Manuel González de Cosío"** (CONCYTEQ): 15 ha (12 de vegetación natural y 3 de jardín), 1,200 m² de invernaderos, colecciones de cactáceas, agaváceas y fabáceas; Camino Antiguo a Tovares s/n ([BGCI](https://tools.bgci.org/garden.php?id=2169)). Fundado en 1990 según BGCI, 1991 según Atlas Obscura [CONFLICTO]. El sitio oficial (concyteq.edu.mx/JB) no cargó.
  - Horario [FRÁGIL / CONFLICTO]: diario de 9:00 a 17:00, gratis, visitas guiadas de 60 min con reservación por WhatsApp ([México Desconocido – Escapadas](https://escapadas.mexicodesconocido.com.mx/atractivos/jardin-botanico-regional-de-cadereyta/)); de 9:00 a 16:00 ([Líder Empresarial, 2022](https://www.liderempresarial.com/jardin-botanico-de-cadereyta-un-museo-viviente-en-queretaro/)).
- **Quinta Fernando Schmoll**: vivero fundado por Fernando Schmoll y Carolina Wagner, hoy de la familia; unas 4,500 variedades de cactáceas, suculentas y euforbias; Pilancón 1, Barrio de las Fuentes. Martes a domingo de 9:00 a 17:00, $50 con visita guiada y una planta de regalo [FRÁGIL] ([México Desconocido – Escapadas](https://escapadas.mexicodesconocido.com.mx/atractivos/invernaderos-quinta-fernando-schmoll/)). [CONFLICTO] otra fuente da $40. Sin web propia.
- **Toluquilla** (INAH): ciudad ligada a la minería del cinabrio, con unos 200 monumentos y dos juegos de pelota; ficha con miércoles a domingo de 9:00 a 15:00 ([INAH](https://lugares.inah.gob.mx/en/node/4358)). **Cerrada** (ver avisos).

### San Juan del Río
- Su centro histórico es parte del **Camino Real de Tierra Adentro**, Patrimonio de la Humanidad desde 2010 ([INAH](https://lugares.inah.gob.mx/en/node/4812)). Otros componentes en Querétaro: la ex hacienda de Chichimequillas, la capilla de la ex hacienda de Buenavista y el centro histórico de Querétaro ([Programa Destinos México](https://programadestinosmexico.com/patrimonio-de-la-humanidad/camino-real-de-tierra-adentro.html)). [SIN CONFIRMAR en whc.unesco.org, que respondió 403.]
- Qué ver (INAH): el Puente de la Historia (1710-1711), el templo de Santo Domingo, el Jesusito de la Portería, el Portal del Diezmo y la Casa de las Diligencias.
- Para el viajero: es el paso obligado desde la CDMX (salida de la autopista a Tequis, ver `investigacion-transporte`).

### Santiago de Querétaro
- La Zona de Monumentos Históricos es Patrimonio de la Humanidad desde el 7-dic-1996: unos 1,400 monumentos en 4 km² ([INAH](https://lugares.inah.gob.mx/en/node/6144)).
- El acueducto, del siglo XVIII: 74 arcos, unos 1,280 m de largo y más de 23 m de alto ([México Desconocido](https://www.mexicodesconocido.com.mx/acueducto-de-queretaro.html)).
- Qué ver: Palacio de Gobierno (Casa de la Corregidora), Casa de la Marquesa, ex conventos de San Agustín y Santa Clara, Fuente de Neptuno, Jardín Zenea (INAH).

### San Miguel de Allende (Guanajuato)
- "Villa Protectora de San Miguel el Grande y Santuario de Jesús Nazareno de Atotonilco", Patrimonio de la Humanidad desde el 7-jul-2008 ([Ciudades Patrimonio](https://ciudadespatrimonio.mx/san-miguel-de-allende/?lang=en)).
- Qué ver: la parroquia de San Miguel Arcángel, el Oratorio de San Felipe Neri, el Centro Cultural El Nigromante, el Museo Casa de Allende y el Teatro Ángela Peralta.
- El Santuario de Atotonilco (1740-1776), a unos 14 km, con murales de Martínez de Pocasangre; lo llaman la "Capilla Sixtina mexicana" ([National Geographic, ago-2025](https://www.nationalgeographicla.com/viajes/2025/08/capilla-sixtina-mexicana-donde-esta-y-cual-es-la-historia-de-este-sitio-reconocido-por-la-unesco); [Expansión, 7-jul-2008](https://expansion.mx/lifestyle/2008/07/07/san-miguel-de-allende-patrimonio-mundial)).
- "Tequis y San Miguel de Allende": no es Pueblo Mágico; a ~1 h 55 min [CÁLCULO], se combinan mejor en viajes de varios días.

### San Joaquín (Pueblo Mágico, 2015)
- **Zona arqueológica de Ranas** (INAH): más de 180 estructuras y dos juegos de pelota en lo alto de dos cerros, ligada a la minería del cinabrio ([INAH](https://lugares.inah.gob.mx/en/node/4355)). **Cerrada** (ver avisos).
- **Campo Alegre**: zona boscosa con palapas y asadores ([queretaro.travel](https://queretaro.travel/fichas/san-joaquin-sierra-gorda-queretaro/?lang=en)).
- **Concurso Nacional de Huapango**, a principios de abril; en 1982 Bellas Artes le dio a San Joaquín el título de "Catedral del Huapango" ([queretaro.travel](https://queretaro.travel/eventos/san-joaquin-the-cathedral-of-huapango/?lang=en)). 2025: 54.ª edición, del 10 al 12 de abril ([El Sol de San Juan del Río](https://oem.com.mx/elsoldesanjuandelrio/local/huapangueros-rendiran-homenaje-a-perla-22653535)). Fechas de 2026 [SIN CONFIRMAR].
- Se llega por la carretera Vizarrón–San Joaquín, que sale de la federal 120.

### Sierra Gorda, Jalpan y Pinal de Amoles
- **Reserva de la Biosfera Sierra Gorda**: decreto del 19-may-1997, 383,567 ha (32 % del estado), en Arroyo Seco, Jalpan, Landa, Peñamiller y Pinal de Amoles ([DOF](https://dof.gob.mx/nota_detalle_popup.php?codigo=2054567)). Red MAB de la UNESCO desde 2001 ([México Desconocido](https://www.mexicodesconocido.com.mx/reserva-de-la-biosfera-sierra-gorda-de-queretaro.html)); [CONFLICTO] una fuente dice 2003.
- **Misiones franciscanas de la Sierra Gorda**, Patrimonio de la Humanidad desde 2003: Jalpan, Tancoyol, Landa, Tilaco y Concá ([México Desconocido](https://www.mexicodesconocido.com.mx/misiones-de-la-sierra-gorda-patimonio-cultural-de-la-humanidad.html)). La de Jalpan se construyó entre 1751 y 1758.
- **Jalpan de Serra**: Pueblo Mágico desde 2010; su presa es sitio Ramsar desde 2004 ([jalpan.travel](https://jalpan.travel/en/)).
- **Carretera**: la federal 120 se llama "San Juan del Río–Xilitla" y pasa por los entronques de Tequis y Ezequiel Montes ([The Logistics World](https://thelogisticsworld.com/transporte/sct-pone-en-operacion-infraestructura-en-queretaro)) y por Pinal de Amoles, donde hay derrumbes en temporada de lluvias ([N+](https://www.nmas.com.mx/queretaro/carretera-federal-120-san-juan-del-rio-xilitla-cerrada-por-derrumbe-en-pinal-de-amoles)). La terminal de Tequis está sobre esa carretera (ETN la da como "Carretera San Juan del Río-Xilitla").

### Xilitla (San Luis Potosí; Pueblo Mágico, 2011)
- Año: [infografía del gobierno de SLP](https://cefimslp.gob.mx/infografias/2023/57-Xilitla.pdf).
- **Jardín Escultórico Edward James – Las Pozas** ([sitio oficial](https://laspozasxilitla.org.mx)): estructuras empezadas en 1962, obras paradas en 1984, abierto al público en 1991, Monumento Artístico desde 2012; lo administra la Fundación Pedro y Elena Hernández desde 2007. Abre de miércoles a lunes de 9:00 a 18:00 (último acceso 16:00), **cierra los martes**; adultos $180, mayores de 65 y niños de 6 a 12 $120, guía obligatoria $30; reservación previa y pago en taquilla [FRÁGIL].
- Desde Tequis son ~4 h 40 min sin tráfico [CÁLCULO]: es viaje de al menos una noche, no excursión de un día.

### Amealco de Bonfil (Pueblo Mágico, 2018)
- Tierra de la muñeca otomí: la Lele de Santiago Mexquititlán y la Dönxu de San Ildefonso Tultepec, las dos con Indicación Geográfica del IMPI ([Uno TV, 12-feb-2026](https://www.unotv.com/cultura/impi-reconoce-a-la-muneca-lele-como-patrimonio-de-amealco-queretaro/)). Festival Nacional de la Muñeca (2017: del 17 al 20 de noviembre, [México Desconocido](https://www.mexicodesconocido.com.mx/festival-nacional-munecas-artesanales-amealco.html)) y Museo de la Muñeca. Fechas de 2026 [SIN CONFIRMAR].

### Colón (Soriano)
- Basílica de Nuestra Señora de los Dolores de Soriano (1880-1912), santuario de peregrinación; fiestas el Viernes de Dolores y el 15 de septiembre; museo comunitario junto a la basílica ([queretaro.travel – Colón](https://queretaro.travel/lugares/colon-captivating-and-classic/?lang=en)). Fecha de basílica menor [CONFLICTO]: 7-feb-2009 (queretaro.travel) u 11-ago-2008 ([GCatholic](https://gcatholic.org/churches/data/basMX)).
- Colón también tiene el aeropuerto de Querétaro (AIQ), ver `investigacion-transporte`.

### Peñamiller
- **Cañón del Paraíso**: paredes de mármol negro de unos 700 m con el río Extoraz adentro, para rapel; también el manantial La Guayaba y petroglifos ([queretaro.travel – Peñamiller](https://queretaro.travel/lugares/penamiller/?lang=en)). Es parte de la Reserva Sierra Gorda (DOF). No es Pueblo Mágico. No se encontró un jardín de cactáceas propio.

### Para redactar "lugares cerca de Tequisquiapan"
- **Medio día**: Ezequiel Montes y sus viñedos, Bernal, Cadereyta (jardines de cactáceas), San Juan del Río.
- **Un día**: Querétaro capital, Colón, Amealco.
- **Con noche**: San Miguel de Allende, San Joaquín, Sierra Gorda y misiones, Xilitla.

---

## 7. Bodas en Tequis

### Recursos oficiales
El municipio tiene tres recursos para bodas. Las dos páginas de tequis.travel y el directorio no coinciden entre sí.

1. **"Cásate en Tequis"** ([tequis.travel/casate_en_tequis_tequisquiapan/](https://tequis.travel/casate_en_tequis_tequisquiapan/), publicada el 4-abr-2024 y modificada por última vez el 25-abr-2024). Lista **12 proveedores**: Alma de Agua Eventos, Arte en Flor, Callejonadas Tequisquiapan, Karla Cuahonte Makeup, Alauda Jardín de Eventos, Gypso Alta Floristería, Cineluk Wedding Photo & Video, Santuario de Nuestra Señora del Perpetuo Socorro, Château du Vin, un servicio de Wedding Designer & Event Planner, Dalila Copado Makeup y Finca las Lilys.
2. **"Enamórate en Tequis"** ([tequis.travel/casate_tequis_tequisquiapan/](https://tequis.travel/casate_tequis_tequisquiapan/), modificada el 29-oct-2025): es la versión más nueva, organizada por tipo.
   - Wedding planners: Monse Puebla y Menta Eventos Creativos.
   - Salones y jardines: Floresta (jardín de 1,300 m² y salón de 500 m²), Arantia Hotel Boutique (jardín de 2,500 m²), Château du Vin y Alma de Agua.
   - Además: cuatro maquillistas, dos fotógrafos (Cineluk y Mison), una florería (Gypso), música (Lucy's Eventos), autos (Autos de Ensueño), ceremonias holísticas (Mi Despertar Holístico) y callejonadas.
   - [CONFLICTO] La ficha de Menta Eventos Creativos trae el sitio disenandoexperiencias.com y el teléfono 414 219 6537, que en el directorio municipal es de Alma de Agua y Alauda. Verificar antes de publicar.
3. **Directorio Tequisquiapan 2025**, en PDF ([tequis.travel](https://tequis.travel/wp-content/uploads/2025/10/Directorio-Tequisquiapan-2025.pdf)). Tiene secciones propias:

   | Sección | Cuántos |
   |---|---|
   | Wedding destinations (jardines, salones, viñedos y hoteles para bodas) | **24** |
   | Wedding planners | **10** |
   | Salones de reuniones | 18 |
   | Haciendas (cascos de ex haciendas) | 6 |
   | Fotógrafos | 18 |
   | Maquillistas | 5 |
   | Florerías | 12 |

   - En los 24 "wedding destinations" hay varios viñedos (Alma de Agua, Finca el Consuelo, San Juanito, Vinícola Tequisquiapan, Viña Magal, Viña TX, Los Rosales) y hoteles (Firenze, La Querencia, Regalo del Alma —con capilla—, Villa Antigua, Arantia, Casa Martha). Entra también Freixenet de México, que está en Ezequiel Montes.
   - Uno de ellos (Hotel Matian) solo ofrece cenas románticas y otro (Mirendy) es más bien banquetero, así que en sentido estricto son unos 22 lugares para boda.
   - Los conteos son [CÁLCULO], hechos sobre el texto del PDF.
   - Los Rosales: no enlazar `vinedoslosrosales.com.mx`, el dominio está secuestrado (aviso 3 de `investigacion-guias`).

- El texto de las dos páginas dice que Tequis "se ha consolidado como un destino de bodas" y que está "a 25 minutos del Aeropuerto Internacional de Querétaro". [CONFLICTO] La investigación de transporte da ~40 min (Uber) y 41 min [CÁLCULO]. No copiar los 25 minutos.
- El sitio municipal (`tequisquiapan.gob.mx`) tiene un apartado de trámites del Registro Civil, sin sección de bodas.

### ¿Cuántas bodas recibe Tequis?
- **[SIN CONFIRMAR]**: no se encontró ninguna cifra. Se acabó el límite de búsquedas web de la sesión antes de poder buscar en prensa. Queda pendiente buscar notas de turismo de romance de la Secretaría de Turismo de Querétaro o del municipio con número de bodas al año.

### Para redactar "Casarse en Tequis"
- Qué ofrece: jardines y viñedos para la ceremonia y la fiesta, haciendas, hoteles con capilla, wedding planners locales y todos los proveedores. Fuentes: las dos páginas del municipio y el directorio.
- Logística: el aeropuerto de Querétaro a ~40 minutos, la CDMX a 2 h 30-3 h y la temporada de lluvias de junio a septiembre (sección 1).
- No dar precios: ningún proveedor los publica en estas fuentes.

---

## 8. Webcams y cámaras en vivo

- **No hay cámara oficial.** El sitio del municipio (`tequisquiapan.gob.mx`) no tiene cámaras en vivo, y ninguna de las ~170 páginas de tequis.travel trata de cámaras (revisé la lista completa de páginas con la API de su WordPress; `/webcam/` y `/en-vivo/` dan 404).
- **Hay una cámara privada**, de la red Webcams de México: "Vista de la Plaza Principal de Tequisquiapan", con transmisión marcada "En vivo" ([webcamsdemexico.com/webcam/tequisquiapan/](https://webcamsdemexico.com/webcam/tequisquiapan/)).
  - Es la única que tiene esa red en Tequis. En el estado también tiene Bernal, Amealco y San Joaquín.
  - La página no dice quién opera la cámara ni desde cuándo, y trae un botón "Reservar hotel" con el logo de tequis.travel.
  - [FRÁGIL] No pude comprobar que la transmisión estuviera funcionando.
- SkylineWebcams no tiene ninguna cámara en Querétaro ([skylinewebcams.com – México](https://www.skylinewebcams.com/es/webcam/mexico.html)).
- Para redactar ("webcam Tequisquiapan", "cámaras en vivo", "en tiempo real"): "No hay cámara oficial del municipio. Webcams de México transmite la Plaza Principal", con enlace. No incrustar el video sin el permiso de Webcams de México.

---

## Qué páginas se pueden armar

"Suficiente" quiere decir que hay datos con fuente para una página completa sin inventar. "Parcial" quiere decir que se puede publicar, pero con huecos.

| Página | Búsquedas que responde | Datos | Qué falta |
|---|---|---|---|
| **Clima en Tequisquiapan por mes / mejor época para ir** | "clima en tequisquiapan en julio / agosto / octubre / diciembre", "weather by month", "weather year round", "temperatura", "lluvia", "tequisquiapan en octubre / diciembre / septiembre", "nieve", "viajar a tequisquiapan en octubre" | **Suficiente**: tabla mensual del SMN (sección 1), consejos por temporada y fiestas de cada mes (guía práctica y `investigacion-eventos-2027`) | El "clima hoy / mañana / fin de semana" necesita un pronóstico en vivo o un enlace al SMN |
| **Datos de Tequis (ficha)**: ¿dónde está?, ¿en qué estado?, altitud, población, CP, hora | "a qué estado pertenece", "en qué estado está", "dónde queda", "tequis estado de méxico", "tequis hidalgo", "nivel del mar", "altitude", "habitantes", "population", "código postal / zip code / cp", "time zone", "inegi", "es un municipio", "es pueblo mágico" | **Suficiente** (INEGI 2020, Ley de Husos Horarios, Expansión 2012) | Superficie oficial (INAFED caído) y una cifra de población posterior a 2020 |
| **Distancias desde Tequis** (puede ir dentro de la ficha o de "Alrededores") | "distancia de querétaro", "tequisquiapan a querétaro / san juan del río / cdmx / bernal / cadereyta / xilitla / san miguel de allende", "tequisquiapan km", "está cerca de querétaro / de peña de bernal" | **Suficiente**: tabla [CÁLCULO] de la sección 6, más `investigacion-transporte` | Tiempos con tráfico (redactar "unos…") |
| **Historia y origen del nombre** (ampliar `por-que-tequis`) | "historia", "significado", "origen del nombre", "tequis significado", "vocablo tequis", "centro de méxico / centro del país / el centro de méxico", "tequis carranza", "cantinflas", "what is tequisquiapan known for" | **Parcial**: fundación, nombre, Cantinflas, artesanías y Pueblo Mágico están confirmados; Carranza solo según el municipio | Fuente seria del decreto de 1916 y del centro "real", y fuente del siglo XX balneario. Corregir el aviso 4 en la página actual |
| **Cestería, mimbre y ópalo** (artesanías: dónde ver y comprar) | "artesanías", "mimbre", "muebles de mimbre", "mercado de artesanías", "minas de ópalo", "opal" | **Suficiente**: 14 talleres con dirección, 4 mercados y fiestas del mimbre (sección 2), y minas en `investigacion-actividades-patrimonio` | Fotos: los talleres no tienen web propia |
| **¿Es seguro Tequisquiapan?** | "es seguro", "es seguro para vivir", "seguridad", "safety", "mexico safe", "para vivir" | **Suficiente para una página neutra**: SESNSP 2023-2026, tasas frente al estado, avisos de EE. UU. y Canadá, CAPTA (sección 3) | Encuesta de percepción municipal (no existe). Actualizar las cifras cada año [FRÁGIL] |
| **¿Se inunda Tequis?** (puede ir dentro de clima o de seguridad) | "inundado 2025", "inundado hoy", "se inunda", "inundación", "flood", "lluvia", "presa", "río" | **Suficiente**: fechas, zonas y contexto (sección 5) | "Inundado hoy" necesita enlazar a Protección Civil; no hay Atlas de Riesgos publicado |
| **Cómo moverse sin auto** (ampliar la guía práctica) | "hay uber", "hay didi", "taxi tequis", "terminal de autobuses", "bus station", "camiones", "tren", "turibus", "tranvía" | **Parcial**: autobuses, Uber, terminal, tranvía y tren (sección 4 y `investigacion-transporte`) | DiDi en Tequis y un sitio de taxis confirmado |
| **Lugares cerca de Tequisquiapan / alrededores** | "lugares cerca de tequisquiapan para visitar", "qué hacer cerca de tequisquiapan", "qué hacer en tequisquiapan y alrededores", "tequisquiapan a cadereyta / xilitla / san miguel de allende", "tequisquiapan y san miguel de allende" | **Suficiente**: 11 destinos con distancia, qué ver, Pueblo Mágico sí o no y fuente (sección 6) | Revisar el resultado de SECTUR de noviembre de 2026 y si reabren Ranas y Toluquilla. Faltan fotos con licencia |
| **Tequisquiapan vs Bernal / Tequis y Bernal** | "tequisquiapan vs bernal", "tequisquiapan o bernal", "tequis y bernal", "tequisquiapan y peña de bernal", "qué hacer en tequisquiapan y peña de bernal" | **Suficiente para comparar**: distancia 30 km / 39 min; Bernal tiene 3,962 habitantes y está a 2,054 msnm (INEGI 2020), y la cabecera de Tequis 34,955 a 1,870 msnm; Bernal es Pueblo Mágico desde 2005 o 2006 [CONFLICTO], Tequis desde 2012; qué tiene cada uno (Peña, textiles y gorditas contra balnearios, mimbre, plaza y viñedos), en `investigacion-guias` y aquí | Sin clima comparable (Villa Bernal no tiene normal publicada). La comparación debe ser "qué ofrece cada uno", no un "mejor" |
| **Casarse en Tequis** | "casarse en tequis", "bodas", "jardines para eventos", "wedding", "haciendas" | **Parcial**: 24 lugares y 10 wedding planners en el directorio municipal, más las dos páginas oficiales (sección 7) | Cifra de bodas al año, precios y fotos propias de cada lugar. Ojo: a ningún proveedor se le confirmó su web; habría que revisarlos como se hizo con los negocios |
| **Webcam de Tequisquiapan** (una sección pequeña de la ficha, no una página) | "webcam", "cámaras en vivo", "en vivo", "en tiempo real", "en vivo hoy" | **Suficiente** para decir que no hay cámara oficial y enlazar la privada (sección 8) | Permiso para incrustarla |
| **Tequis en inglés** (ficha y clima) | "tequisquiapan in english", "pronunciation", "what is tequisquiapan known for", "things to do" | Mismos datos que arriba | La pronunciación no se investigó |

Búsquedas de la lista que no son informativas o no son de este pueblo (no requieren página): "tequis yucatán", "tequis ecatepec / acolman / zumpango / texcoco" (parecen negocios o lugares homónimos; no se investigó), "tequis panamá", "tequisistlan" y las marcas sueltas (Waldos, KFC, Soriana).

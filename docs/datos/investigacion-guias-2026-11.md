# Investigación para 4 guías de tequismagico.com

Consultado el 2 de noviembre de 2026. Marcas:
- **[FRÁGIL]**: precio u horario que cambia. Mejor redactar sin cifra ("unos cientos de pesos", "por la mañana") o con "en 2026 costaba…".
- **[CONFLICTO]**: las fuentes no coinciden. Se anotan todas.
- **[CÁLCULO]**: distancia y tiempo calculados por mí con OpenStreetMap (Nominatim + OSRM) desde la Plaza Miguel Hidalgo, sin tráfico. No vienen de una fuente publicada y suelen quedarse cortos.

---

## Avisos antes de redactar (afectan a varias guías)

1. **Viñedos La Redonda tuvo un conflicto legal en 2026.** Según El Financiero, la operación quedó parada desde diciembre de 2025 por un pleito interno, la Fiscalía cateó el lugar y hubo 4 detenidos; también se pospuso su festival "100 Vinos Mexicanos" ([El Financiero, 12-feb-2026](https://www.elfinanciero.com.mx/food-and-drink/2026/02/12/la-historia-de-la-redonda-vinedo-cateado-en-queretaro/); [El Financiero, 11-feb-2026](https://www.elfinanciero.com.mx/estados/2026/02/11/conflicto-en-vinedos-la-redonda-quien-es-el-fundador-de-la-casa-vitivinicola-en-queretaro/)). Diario de Querétaro publicó "Preparan la reapertura de La Redonda" en marzo de 2026 ([oem.com.mx](https://oem.com.mx/diariodequeretaro/local/preparan-la-reapertura-de-la-redonda-28729251); el sitio me bloqueó, solo vi el titular). La tienda oficial vendió boletos para la Vendimia 2026 ([tienda.laredonda.com.mx](https://tienda.laredonda.com.mx/products/preventa-general-vendimia-2026)), pero **laredonda.com.mx muestra "Estamos actualizando el sitio"** (nov-2026) y no encontré nada que confirme que la vendimia 2026 sí se hizo. Conviene mencionarla con cautela o con un "confirma antes de ir".
2. **Estación Bernal**: el texto de `web/app/por-que-tequis/page.tsx` dice "1902… hoy un mirador con vista a la Peña". Ese dato viene de tequis.travel ([Históricos](https://tequis.travel/historicos_tequisquiapan/)), pero una proposición en la Cámara de Diputados del 28-oct-2026 dice que "aún deben corroborarse su fecha de construcción, sus antecedentes administrativos, su titularidad", y describe "acumulación de residuos, afectaciones visibles en superficies interiores y oxidación en una locomotora" ([Gaceta Parlamentaria 7156-III-1](https://gaceta.diputados.gob.mx/Gaceta/66/2026/oct/20261028-III-1.html)). **Está en Tequisquiapan y no en Bernal**: a unos 3.8 km y 6 min del centro [CÁLCULO]; la dirección es Juárez Oriente.
3. **Los Rosales: no enlazar `vinedoslosrosales.com.mx`.** Al consultarlo el 2-nov-2026, el dominio mostraba publicidad de apuestas ("togel"), así que parece secuestrado. `vinedoslosrosales.com` responde, pero vacío.
4. **Datos de la carga inicial con dirección equivocada** (de `database/databaseseed_part1.sql`; `databasefix_research_2026-09.sql` corrigió sitio y horario, pero no la dirección):
   - La Redonda dice "Camino a La Trinidad km 2". La real es Carr. San Juan del Río–Ezequiel Montes km 33.5.
   - Viñedos Azteca dice "Carr. Tequisquiapan-Ezequiel Montes km 8". La real es Camino a Viñedos Azteca 12, Ezequiel Montes.
   - Freixenet tiene el teléfono 414-197-8080, que no aparece en ninguna fuente; tequis.travel da 441 277 0147.
   - Las coordenadas de las tres caen dentro de Tequisquiapan, pero los tres viñedos están en Ezequiel Montes.
5. **Inundaciones**: la Presa Centenario se desbordó en septiembre de 2025 (llegó al 112 %) y obligó a evacuar la zona hotelera y nueve colonias ([La Razón, 7-sep-2025](https://www.razon.com.mx/estados/2025/09/07/presa-el-centenario-en-tequisquiapan-queretaro-se-desborda-alcanza-112-de-su-capacidad/)). Ya había pasado en 2021, cuando el agua inundó por completo el Parque La Pila ([Uno TV](https://www.unotv.com/estados/queretaro/queretaro-tequisquiapan-comienza-a-levantarse-tras-inundacion/)). El Sol de San Juan del Río publicó "Parque La Pila está en ruinas" el 24-nov-2025 ([oem.com.mx](https://oem.com.mx/elsoldesanjuandelrio/local/parque-la-pila-esta-en-ruinas-26941902); solo vi el titular y un fragmento: plagas y maleza). No encontré noticias de una rehabilitación en 2026. Aun así, La Pila fue la sede del festival de mayo de 2026 ([Excélsior](https://www.excelsior.com.mx/estilo-de-vida/festival-queso-y-vino-queretaro-2026-costos-y-actividades)).

---

## 1. Un fin de semana en Tequis

### Lo básico del pueblo
- Fundado en 1551 en los barrios de San Juan y La Magdalena; declarado Pueblo Mágico el 17-oct-2012 ([tequis.travel – Históricos](https://tequis.travel/historicos_tequisquiapan/)). Fue el 4.º Pueblo Mágico de Querétaro ([Wikipedia](https://es.wikipedia.org/wiki/Tequisquiapan)).
- Está a 60 km al oriente de la ciudad de Querétaro ([Wikipedia](https://es.wikipedia.org/wiki/Tequisquiapan)). Desde la CDMX: 2:30 a 3 h en auto y 4 casetas, unos $320 por viaje sencillo [FRÁGIL]. Hay autobuses directos desde la Central del Norte ([tequis.travel – Tips](https://tequis.travel/tips_de_viaje_tequisquiapan/)).
- Clima: lluvias de junio a octubre, temporada seca de noviembre a abril y más calor de abril a junio. Por la noche hace frío, así que conviene llevar abrigo ([tequis.travel – Tips](https://tequis.travel/tips_de_viaje_tequisquiapan/)). Wikipedia: clima semiárido, máxima promedio anual de 28.6 °C y mínima de 8.1 °C.
- tequis.travel recomienda quedarse 2 noches y empezar el itinerario el sábado temprano ([¿Qué hacer?](https://tequis.travel/que_hacer_tequisquiapan/)).

### Plaza, templo y centro
- **Plaza Miguel Hidalgo**: portales de cantera, quiosco de principios del siglo XX, sabinos y fresnos, puestos de dulces y nieves artesanales. Abierta las 24 h ([tequis.travel – Históricos](https://tequis.travel/historicos_tequisquiapan/)).
- **Parroquia de Santa María de la Asunción**: neoclásica, de cantera, construida en etapas entre los siglos XVI y XIX, con un reloj de 1897. Su fiesta principal es el 15 de agosto (juegos mecánicos, danzas y fuegos artificiales) ([tequis.travel – Iglesias](https://tequis.travel/iglesias_tequisquiapan/)). Las misas de domingo son a las 9:00, 10:30, 12:00 y 17:30 [FRÁGIL] (dato ya confirmado en `databasefix_research_2026-09.sql`).
- **Sábado por la noche en la plaza**:
  - tequis.travel menciona un video mapping en la fachada de la parroquia y, el primer sábado de cada mes, una callejoneada con estudiantina ([¿Qué hacer?](https://tequis.travel/que_hacer_tequisquiapan/)).
  - "Noches de leyendas": los sábados por la noche, actores recorren las calles contando leyendas; salen de un costado de la parroquia ([Fiestas y eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)).
  - [FRÁGIL] No encontré otra fuente del video mapping ni su horario, así que conviene redactarlo sin hora.
- **Monumento al Centro Geográfico** (péndulo, placa de 1978, decreto de Carranza de 1916): Niños Héroes 17 ([tequis.travel – Históricos](https://tequis.travel/historicos_tequisquiapan/)).
- **Callejón del Piojo**: antiguos lavaderos públicos, reabiertos en 2018, detrás de La Pila ([mismo enlace](https://tequis.travel/historicos_tequisquiapan/)).
- **Tranvía turístico**: recorrido de 1 a 1:30 h; sale de viernes a domingo entre las 11:00 y las 17:00 [FRÁGIL] ([tequis.travel – Imperdibles](https://tequis.travel/imperdibles_tequisquiapan/)). No encontré el precio ni el punto de salida en otra fuente.

### Mercados (para desayunar o comprar)
Todos en [tequis.travel – Mercados](https://tequis.travel/mercados_tequisquiapan/); los horarios son [FRÁGIL]:
- **Mercado Guadalupano Municipal** (Ezequiel Montes s/n): fruta, verdura y comida regional; abre a diario de 9 a 18 h. tequis.travel lo propone para el desayuno del sábado ([¿Qué hacer?](https://tequis.travel/que_hacer_tequisquiapan/)).
- **Mercado Artesanal Telésforo Trejo** (Ezequiel Montes y Salvador Michaus, cerca de la plaza): más de 60 locales en dos pisos; vara de sauz, raíz de sabino, ópalo y textiles de Bernal. Abre a diario de 10 a 19 h.
- **Mercado Tequesquicalli** (Independencia 13): el mercado de artesanías más antiguo y el más pequeño; abre de lunes a viernes de 10 a 19 h y fines de semana de 10 a 20:30 h.
- **Parador Artesanal Luis Donaldo Colosio** (Carr. SJR–Tequis km 20, junto a la terminal): unos 600 locales y un corredor de antojitos. **Solo abre sábados, domingos, puentes y festivos, de 10 a 18 h.**
- tequis.travel recomienda llevar efectivo para los mercados y una hielera para los quesos ([Tips](https://tequis.travel/tips_de_viaje_tequisquiapan/)).

### Parque La Pila
- Está donde estaba el viejo molino. Conserva la pila que guardaba el agua del pueblo en 1567 y es la sede tradicional de la Feria del Queso y el Vino. Dirección: Ezequiel Montes 29 ([tequis.travel – Históricos](https://tequis.travel/historicos_tequisquiapan/)).
- [CONFLICTO] tequis.travel da horario de 24 h; `databasefix_research_2026-09.sql` (ya confirmado) da 7:00–19:00.
- Ver el aviso 5 sobre su estado.

### Comer
- **K'puchinos** (Independencia 7, Centro): comida típica queretana; especialidades: ayocotadas, enmoladas, mole de olla, filete Celiztli. Buffet de desayuno los domingos y festivos, con descuento para niños y adultos mayores ([kpuchinos.com.mx](https://kpuchinos.com.mx)).
  - [CONFLICTO] El sitio da dos horarios. Coinciden en 8:00–22:00 casi toda la semana y en 8:00–24:00 viernes y sábado.

### Domingo: globo al amanecer
- Los vuelos salen con la primera luz porque "Para volar con seguridad es necesario un clima muy estable, esto ocurre justo en las primeras horas después del amanecer" ([vuelaenglobo.com – FAQ](https://vuelaenglobo.com/preguntas-frecuentes/)).
- tequis.travel sugiere despertarse "alrededor de las 4 de la madrugada" para esperar el transporte al globopuerto ([¿Qué hacer?](https://tequis.travel/que_hacer_tequisquiapan/)). Un listado de Yumping pide llegar a las 6:00 al globopuerto ([Yumping](https://www.yumping.com/ofertas/paseo-en-globo/queretaro/paseo-en-globo-por-pena-de-bernal-con-buffet--o47568)). La hora exacta la da el operador.
- El vuelo dura de 45 a 60 min ([vuelaenglobo.com/tequisquiapan](https://vuelaenglobo.com/tequisquiapan)) y la experiencia completa unas 2 h 30 min ([Civitatis](https://www.civitatis.com/es/tequisquiapan/paseo-globo-tequisquiapan/)).
- Se cancela con viento mayor a 12 km/h, lluvia o neblina; el vuelo se reprograma sin costo dentro de un año ([Términos](https://vuelaenglobo.com/terminos-y-condiciones/)).
- Precios del sitio oficial, sin año [FRÁGIL] ([vuelaenglobo.com/tequisquiapan](https://vuelaenglobo.com/tequisquiapan)): vuelo compartido $2,799 por persona; privado para 2, $8,499. Civitatis: "desde 2799 MXN".
- Dato distintivo: la empresa dice ser la única fabricante mexicana de globos certificada por la DGAC, desde 1982 (Sepansa Balloons, en Tequisquiapan) ([vuelaenglobo.com/historia](https://vuelaenglobo.com/historia/); [tequis.travel – Vuela en globo](https://tequis.travel/vuela-en-globo/)).
- Punto de reunión: Jazmín 35(A), Hacienda Grande ([vuelaenglobo.com](https://vuelaenglobo.com/tequisquiapan); [Civitatis](https://www.civitatis.com/es/tequisquiapan/paseo-globo-tequisquiapan/)).

### Domingo: queso y vino después del globo
- tequis.travel sugiere, al bajar del globo, visitar una cava de quesos y un viñedo con cata, y terminar en los mercados ([¿Qué hacer?](https://tequis.travel/que_hacer_tequisquiapan/)). Detalle en la guía 2.
- Horarios útiles para ese domingo [FRÁGIL]:
  - Cava Bocanegra: domingo de 9 a 19 h; recorridos cada hora de 10 a 16 h.
  - Sala Vivé: recorridos cada hora de 11 a 17 h los fines de semana.
  - De Cote: recorridos de 11 a 17 h.
  - Fuentes en la guía 2.

### Tiempos desde la plaza [CÁLCULO]
| Destino | Distancia y tiempo |
|---|---|
| Estación Bernal | 3.8 km / 6 min |
| Presa Centenario | 5.7 km / 10 min |
| Los Rosales | 8 km / 10 min |
| La Redonda | ~15 km / 18 min |
| Freixenet / Sala Vivé | 21.8 km / 26 min |
| Viñedos Azteca | 22 km / 27 min |
| De Cote | 22 km / 28 min |
| Finca VAI | 29 km / 30 min |
| Bernal | 29.5 km / 38 min |

- Referencia publicada: según tequis.travel, los viñedos del municipio están a no más de 20 min del centro y los de municipios vecinos a no más de 30 min ([Vinos](https://tequis.travel/vinedos_tequisquiapan/)).

### Fechas que cambian el ambiente del fin de semana
Fuente: [tequis.travel – Fiestas y eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/), salvo donde se indica.
- **Mayo–junio: Festival Internacional del Arte, Queso y Vino**, con acceso gratuito.
  - En 2026 empezó el 7 de mayo, con sede en el Parque La Pila, la Plaza Hidalgo y el Jardín del Arte ([Excélsior 2026](https://www.excelsior.com.mx/estilo-de-vida/festival-queso-y-vino-queretaro-2026-costos-y-actividades)).
  - Para las degustaciones de 2026 había que registrarse en tequis.travel/festival ([Posta](https://www.posta.com.mx/cdmx/festival-del-arte-queso-y-vino-2026-en-tequisquiapan/vl2190148)).
  - La edición de 2025 fue del 22 de mayo al 8 de junio.
- **Julio–septiembre**: vendimias (ver guía 2).
- **15 de agosto**: fiesta patronal.
- [CONFLICTO] Fiesta de la Fundación: la página de Fiestas dice "24 de julio" y la de Iglesias dice "24 de junio" ([Iglesias](https://tequis.travel/iglesias_tequisquiapan/)).
- **Noviembre: "Tejedores de Luz"**, figuras de mimbre por Día de Muertos.
- **Diciembre**: Villa Navideña con figuras de mimbre todo el mes; a mediados de mes, "Fiesta en el Aire" con globos aerostáticos y de Cantoya.
- **Marzo**: Festival del Artesano en el Jardín Principal.

---

## 2. Viñedos y queserías cerca de Tequis

### Cómo funciona en general
- Casi todo es recorrido guiado con cata al final. Las casas grandes venden boletos en línea por horario. Las experiencias especiales (maridajes, cavas privadas) piden reservar.
- Época de vendimia: de julio a septiembre ([tequis.travel – Vinos](https://tequis.travel/vinedos_tequisquiapan/)); "Julio–Agosto" según la página de [Fiestas](https://tequis.travel/fiestas_y_eventos_tequisquiapan/).
  - El calendario de 2026 fue del 6 de junio (Viñedos del Polo) al 12 de septiembre (Viñedos Azteca), y cerró con el Festival del Vino Queretano del 16 al 18 de octubre en Tequisquiapan ([El Universal Querétaro, may-2026](https://www.eluniversalqueretaro.mx/municipios/vendimias-2026-conoce-el-calendario-de-eventos-en-los-vinedos-de-queretaro/); [Grupo Animal, 2-jun-2026](https://www.grupoanimal.mx/gastronomia/donde-comer/vendimias-queretaro-2026-fechas-costos-eventos)).
- **Menores**: se prohíbe venderles alcohol (18+) ([laredonda.com.mx](https://laredonda.com.mx)). Varias casas tienen tarifa infantil (ver abajo).
- tequis.travel menciona que hay tours organizados por agencias locales (Viajes y Enoturismo, Vino Tours) para quien no quiere manejar ([Vinos](https://tequis.travel/vinedos_tequisquiapan/)).

### Freixenet México / Finca Sala Vivé
- **Ubicación**: Carr. San Juan del Río–Cadereyta km 40.5, Los Pérez, Ezequiel Montes ([tequis.travel – Vinos](https://tequis.travel/vinedos_tequisquiapan/)). Desde la plaza: 21.8 km / 26 min [CÁLCULO].
- **Qué la distingue**:
  - Se presenta como "la bodega más grande de vino espumoso en México desde 1979" y "La Casa del Espumoso Mexicano" ([salavive.mx/nuestra-historia](https://salavive.mx/inicio-2/nuestra-historia/); [salavive.mx](https://salavive.mx)).
  - Cronología: Freixenet llega en 1979, planta sus viñedos en 1982, saca su primer espumoso (Sala Vivé) en 1984 y se inaugura oficialmente en 1988.
  - El recorrido baja a una **cava a 25 m de profundidad**, que está a 14–18 °C, así que conviene llevar suéter ([FAQ](https://salavive.mx/inicio-2/preguntas-frecuentes/)).
- **Recorrido "Visita Sala Vivé"** ([salavive.mx](https://salavive.mx/inicio-2/enoturismo/visita-sala-vive/)):
  - 45 min, con cata.
  - Entre semana a las 12, 14 y 17 h; fines de semana cada hora de 11 a 17 h.
  - Precios [FRÁGIL], consultados en nov-2026: adulto $310, adulto mayor o persona con discapacidad $250, niño $210 (incluye souvenir).
  - [CONFLICTO] Zona Turística, con precios reportados por usuarios, da $180 adulto y $100 niño (dato viejo).
- **Otras experiencias**: Uva Bus, Cata de Vinos, Cata Maridaje, Gastro Tour, cabalgata en viñedos ([salavive.mx](https://salavive.mx)).
- **Reservar**:
  - Solo hace falta para los recorridos. Se compran en línea o en taquilla, pero en fin de semana se agotan.
  - Entrar al viñedo, comer o tomar vino no cuesta.
  - El estacionamiento es gratis.
  - Las mascotas pueden estar en áreas abiertas, pero no entrar a la cava.
  - Fuente: [FAQ](https://salavive.mx/inicio-2/preguntas-frecuentes/).
- **Food Garden** [FRÁGIL]: lunes y de miércoles a domingo de 11 a 18 h, sábado de 12 a 19 h; el martes no aparece ([salavive.mx](https://salavive.mx)).
- **Vendimia 2026**: 3 a 5 de julio, con pisado de uva, conciertos y visita a la cava ([salavive.mx](https://salavive.mx/inicio-2/eventos-anuales/fiesta-de-la-vendimia-2026/)).
  - [CONFLICTO] precio 2026: "$350 a $1,750" según [El Universal Qro](https://www.eluniversalqueretaro.mx/municipios/vendimias-2026-conoce-el-calendario-de-eventos-en-los-vinedos-de-queretaro/) y "$990" según [Grupo Animal](https://www.grupoanimal.mx/gastronomia/donde-comer/vendimias-queretaro-2026-fechas-costos-eventos).

### Viñedos Azteca
- **Ubicación**: Camino a Viñedos Azteca No. 12 (antes Camino Antiguo a Cadereyta km 40 + 0.4), Ezequiel Montes ([vinedosazteca.com](https://vinedosazteca.com)). Queda frente a Freixenet, cruzando la carretera. Desde la plaza: 22 km / 27 min [CÁLCULO].
- **Qué lo distingue**: ambiente de hacienda mexicana "a tiro de caballos", jardines y lagos. Se presenta como "el Viñedo más Mexicano". Hace vinos y también **vermuts** premiados ([RECORRIDOS-2026.pdf](https://vinedosazteca.com/kowine/wp-content/uploads/2026/05/RECORRIDOS-2026.pdf)).
- **Recorridos 2026** [FRÁGIL], todos con copa grabada, de [RECORRIDOS-2026.pdf](https://vinedosazteca.com/kowine/wp-content/uploads/2026/05/RECORRIDOS-2026.pdf):

  | Recorrido | Precio | Incluye | Duración |
  |---|---|---|---|
  | Recorrido 1 | $295 | 1 degustación | 1 h |
  | Recorrido 2 | $350 | 3 degustaciones | 1:15 h |
  | Recorrido 3 | $400 | 2 degustaciones | 1:30 h |
  | Vermuteando | $500 | | 1:30 h |
  | Premium | $600 | 3 tintos y maridaje | 1:30 h |
  | VIP | $750 | 5 vinos y sommelier | 1:50 h |

  - Al viñedo se entra toda la semana; **la bodega solo se visita sábado y domingo**.
- **Para niños**: "Pinta tu botella", $150 por persona, sin reservación.
- **Restaurante El Itacate**: de martes a domingo, de 12 a 17 h.
- **Vendimia 2026**: 12 de septiembre, $950 ([Grupo Animal](https://www.grupoanimal.mx/gastronomia/donde-comer/vendimias-queretaro-2026-fechas-costos-eventos)).
- [CONFLICTO] El horario guardado en la BD (de lunes a jueves de 11 a 15 h, de viernes a domingo de 11 a 18 h) no aparece en el sitio actual.

### Viñedos La Redonda (ver el aviso 1)
- **Ubicación**: Carr. San Juan del Río–Ezequiel Montes km 33.5, Ezequiel Montes ([queretaro.travel](https://queretaro.travel/fichas/vinedos-la-redonda/)). Desde la plaza: unos 15 km / 18 min [CÁLCULO, punto aproximado].
- **Qué la distingue**:
  - Fundada en 1975 por el italiano Vittorio Bortoluz, a ~1,950 msnm.
  - Durante décadas vendió uva y empezó a hacer su propio vino en 2003.
  - Etiquetas: La Redonda, Orlandi y Sierra Gorda.
  - Tiene la Trattoria Orlandi, un restaurante italiano.
  - Recorridos con cata.
  - Fuente: [El Financiero, feb-2026](https://www.elfinanciero.com.mx/food-and-drink/2026/02/12/la-historia-de-la-redonda-vinedo-cateado-en-queretaro/).
- **Famosa por su vendimia con pisado de uva.** En 2025 cumplió 50 años y la entrada fue gratis todos los fines de semana de verano ([Publimetro, 8-ago-2025](https://www.publimetro.com.mx/plus/2025/08/08/aun-estas-a-tiempo-la-vendimia-no-termina-ven-a-celebrar-los-50-anos-de-este-vinedo/)).
- **Vendimia 2026 anunciada** [FRÁGIL]: sábados y domingos del 18 de julio al 16 de agosto, preventa a $300 ([Grupo Animal](https://www.grupoanimal.mx/gastronomia/donde-comer/vendimias-queretaro-2026-fechas-costos-eventos); [tienda oficial](https://tienda.laredonda.com.mx/products/preventa-general-vendimia-2026)).
- Teléfono [CONFLICTO]: 441 277 0919 ([queretaro.travel](https://queretaro.travel/fichas/vinedos-la-redonda/)) frente a 442 277-0919 ([laredonda.com.mx](https://laredonda.com.mx)).

### Los Rosales Viñedos (ver el aviso 3)
- **Ubicación** [CONFLICTO]:
  - "Carr. Tequisquiapan-Ezequiel Montes km 7" ([tequis.travel](https://tequis.travel/vinedos_tequisquiapan/)).
  - "Km 47, El Sauz" y "km 27" en la misma ficha de [queretaro.travel](https://queretaro.travel/fichas/los-rosales-tx/).
  - La BD dice km 27.
  - OpenStreetMap lo sitúa en La Tortuga, a ~8 km / 10 min [CÁLCULO]; queretaro.travel dice "10 minutos de Tequisquiapan".
- **Qué lo distingue**:
  - Tiene más de 40 años, pero hace vino solo desde 2011 ([queretaro.travel](https://queretaro.travel/fichas/los-rosales-tx/)).
  - Su vid más antigua ("Salvador") tiene 54 años y vino de Burdeos.
  - Produce entre 20 y 30 mil botellas al año.
  - Fuente de los dos últimos puntos: [Uno TV, 21-jun-2024](https://www.unotv.com/turismo/que-vinedos-visitar-en-queretaro-los-rosales/).
- **Visitas**: recorridos guiados con cata y comidas en el jardín. No encontré horarios ni precios.
- **Vendimia**: en julio. La de 2026 fue el 25 de julio, a $1,300 [FRÁGIL] ([Grupo Animal](https://www.grupoanimal.mx/gastronomia/donde-comer/vendimias-queretaro-2026-fechas-costos-eventos)).
- **Teléfonos** [CONFLICTO]: 414 273 9424 ([tequis.travel](https://tequis.travel/vinedos_tequisquiapan/)) y 414 280 7480 ([queretaro.travel](https://queretaro.travel/fichas/los-rosales-tx/)). La BD borró el teléfono por esta discrepancia.

### Cava de Quesos Bocanegra / Quesos Néole
- **Ubicación**: Carretera Estatal 200 km 50, Fuentezuelas, Tequisquiapan ([cavabocanegra.com](https://www.cavabocanegra.com/)).
- **Qué la distingue**:
  - "La primera cava de quesos en Tequisquiapan".
  - Cava subterránea donde maduran quesos de autor de receta europea, de la marca **NéOle**.
  - Iker Pedrero es dueño de la fábrica Néole y abrió la cava.
  - Fuentes: [tequis.travel – Quesos](https://tequis.travel/quesos_tequisquiapan/); [Culinary Backstreets](https://culinarybackstreets.com/?p=45469).
- **Horario** [FRÁGIL]: lunes, miércoles y jueves de 10 a 18 h; martes de 10 a 17 h (sin restaurante); viernes y sábado de 10 a 19 h; domingo de 9 a 19 h.
- **"Visita a la Cava"** ([/experiencias](https://www.cavabocanegra.com/experiencias)):
  - 40 min, cada hora de 10 a 16 h, todos los días.
  - $260 sin bebida; $310 con cerveza; $370 con vino, mezcal o tequila [FRÁGIL].
  - Los menores de 5 años no pagan.
  - No admite mascotas.
- **Otras experiencias**: "Queso, Amor & Vino" para pareja, $1,300; "Para Nosotros", cava privada, $3,600–7,500, solo con reservación.
- El sitio recomienda reservar.

### Finca VAI (Quesos VAI)
- **Ubicación**: km 30 de la carretera libre Querétaro–Tequisquiapan, a medio camino de la capital ([tequis.travel – Quesos](https://tequis.travel/quesos_tequisquiapan/); [México Desconocido](https://www.mexicodesconocido.com.mx/ruta-del-queso-en-queretaro.html)). OpenStreetMap la ubica en Purísima de Cubos, **municipio de Colón**. Desde la plaza: 29 km / 30 min [CÁLCULO].
- **Qué la distingue**: historia familiar desde los años 1920 (Hacienda de La Soledad, CDMX); se ven las vacas, cabras y borregas, la fábrica antigua y el sótano de maduración ([quesosvai.com](https://www.quesosvai.com/)).
- **"Recorrido del queso"** ([tourvai.html](https://www.quesosvai.com/tourvai.html)):
  - De lunes a viernes de 10 a 16 h; sábado y domingo de 10 a 17 h.
  - **$210 por persona; los menores de 4 años entran gratis** [FRÁGIL].
  - Incluye ganadería, fábrica, sótano y degustación guiada.
  - **No hace falta reservar para grupos pequeños**; con más de 10 personas, sí.
- [CONFLICTO] Horario: México Desconocido, sin fecha, da de 10 a 18 h.

### Bodegas De Cote (fuera de la lista del sitio)
Ver la sección de candidatos.

### Para comprar queso en el centro, sin hacer ruta
Fuente: [tequis.travel – Quesos](https://tequis.travel/quesos_tequisquiapan/).
- Quesos Quiroz ("pioneros del queso en Tequisquiapan desde 1972", Andador Morelos 5).
- ORIGENS Deli (Andador Niños Héroes 30).
- La Vaca Feliz (Ezequiel Montes 13).
- Quesería La Mexicana Olé (3 sucursales).
- La Fromelier (Matamoros 17, catas para grupos).

---

## 3. Tequis en familia / con niños

### Globo con niños
- **Sitio oficial**:
  - "VEG no permite el vuelo a niños menores de 4 años de edad. VEG no recomienda el vuelo para niños de menos de 6 años de edad."
  - Los menores de 12 años vuelan acompañados de un adulto.
  - Los niños de hasta 9 años tienen tarifa especial.
  - No vuelan embarazadas ni personas con problemas de columna.
  - Fuente: [vuelaenglobo.com – Términos](https://vuelaenglobo.com/terminos-y-condiciones/). La [FAQ](https://vuelaenglobo.com/preguntas-frecuentes/) dice "mayores de 4 años acompañados por un adulto".
- [CONFLICTO] Civitatis, que revende el mismo operador en Jazmín 35A, pone el mínimo en 5 años ([Civitatis](https://www.civitatis.com/es/tequisquiapan/paseo-globo-tequisquiapan/)).
- Para redactar: "a partir de 4 años según el operador; recomiendan 6 o más".
- Recordar la madrugada (~4 a.m.) y que el piloto puede cancelar por clima.

### Actividades con animales, talleres y museos
- **Finca VAI**: se conocen los animales que dan la leche; los menores de 4 años no pagan ([quesosvai.com](https://www.quesosvai.com/tourvai.html)). Una nota la describe como "ideal para ir con niños" y menciona granja interactiva y taller de queso ([Food & Pleasure](https://foodandpleasure.com/finca-vai-en-queretaro/)).
- **Ranchito TX** (Carr. Tequisquiapan–Querétaro km 50.2): se alimenta a los animales de granja ([tequis.travel – Imperdibles](https://tequis.travel/imperdibles_tequisquiapan/)).
- **Granja Lavyn** (lavanda; Carr. La Tortuga–Santillán km 5): visita guiada, taller de destilación, picnic y experiencias educativas ([tequis.travel](https://tequis.travel/imperdibles_tequisquiapan/); [lavyn.mx](https://www.lavyn.mx)).
- **Museo ¡México me encanta!** (5 de Mayo 11): fiestas mexicanas en miniatura, más de 500 personajes en 175 maquetas ([tequis.travel](https://tequis.travel/imperdibles_tequisquiapan/)).
- **Minas de ópalo** (La Trinidad, 12 km al sur): visita guiada para ver cómo se extrae y pule el ópalo; también se llega en tour 4x4 ([tequis.travel](https://tequis.travel/imperdibles_tequisquiapan/)).
- **Hecho en Babu** (Paseo del Jazmín 8): talleres de vidrio "para todas las edades", solo con reserva ([tequis.travel](https://tequis.travel/imperdibles_tequisquiapan/)).
- **Tranvía turístico**: de viernes a domingo, de 11 a 17 h ([tequis.travel](https://tequis.travel/imperdibles_tequisquiapan/)).
- **Viñedos con algo para niños**:
  - Viñedos Azteca: "Pinta tu botella", $150, "actividad para grandes y chicos" ([PDF 2026](https://vinedosazteca.com/kowine/wp-content/uploads/2026/05/RECORRIDOS-2026.pdf)).
  - Sala Vivé: tarifa infantil de $210 con souvenir ([salavive.mx](https://salavive.mx/inicio-2/enoturismo/visita-sala-vive/)).
  - Cava Bocanegra: los menores de 5 años no pagan ([experiencias](https://www.cavabocanegra.com/experiencias)).
- **Festival de mayo–junio**: tiene ludoteca y es "un Festival familiar, con acceso totalmente gratuito" ([tequis.travel – Fiestas](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)).
- **Diciembre**: la Villa Navideña tiene espectáculos familiares y "la emoción de la nieve" ([mismo enlace](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)).

### Parque La Pila
- Parque arbolado y gratuito en el centro, sede del festival (fuentes arriba).
- No encontré una fuente que confirme juegos infantiles; la BD los menciona, pero viene de la carga inicial no verificada.
- Ver el aviso 5 sobre su estado (nov-2025).

### Puente colgante
- **No encontré ninguna evidencia** de un puente colgante turístico en Tequisquiapan (ver la sección "sin confirmar"). Recomiendo no mencionarlo.

### Balnearios (en general)
- Tequis está en una antigua zona de aguas termales; "en los alrededores de la localidad abundan los balnearios con aguas termales y azufradas" ([Wikipedia](https://es.wikipedia.org/wiki/Tequisquiapan)). Su auge fue en los años 50 (dato ya publicado en el sitio).
- Tres balnearios con notas de prensa de 2026 [FRÁGIL en precios y horarios]:
  - **Termas del Rey**:
    - Parque acuático a "15 minutos de la zona centro", con 13 albercas, toboganes y área infantil "Reino Infantil".
    - En temporada abre de miércoles a domingo, de 9 a 18 h.
    - $199 adulto y $125 niño en jul-2026 ([Luz Noticias, 27-jul-2026](https://www.luznoticias.mx/2026-07-27/mexico/este-balneario-cuenta-con-13-albercas-y-cuesta-solo-200-pesos-la-entrada-donde-esta/298594)).
    - [CONFLICTO] Otras notas dan $170 y $100, y distintos días de apertura.
  - **Parque Acuático El Oasis**:
    - Km 10 de la carretera Tequisquiapan–Ezequiel Montes, con albercas termales a 36 °C.
    - En otoño de 2026 abre de viernes a domingo, de 9 a 18 h; precio único de $120 en oct-2026 ([adn40, 18-oct-2026](https://www.adn40.mx/tiempo-libre/2026-10-18/las-aguas-termales-a-36-grados-en-queretaro-que-siguen-abiertas-en-otono-cuanto-cuesta-entrar-a-40-minutos-de-la-capital/)).
    - [CONFLICTO] Otra nota da $150 y apertura diaria.
  - **Balneario La Vega**:
    - Paseo de la Vega, Barrio de la Magdalena, en el centro.
    - Alberca olímpica, chapoteadero, toboganes y camping; abre todos los días.
    - $100 general y $50 menores de 12 en ago-2026 ([adn40, 25-ago-2026](https://www.adn40.mx/mexico/2026-08-25/que-hacer-el-dia-del-abuelo-2026-el-balneario-de-tequisquiapan-queretaro-abre-los-7-dias-de-la-semana-y-es-ideal-para-ir-con-toda-la-familia/)).
- Para redactar: "varios balnearios con agua termal a menos de 20 minutos, abiertos sobre todo en fin de semana fuera del verano".
- **No encontré el sitio oficial de ninguno** (ver la sección de candidatos).

---

## 4. La Peña de Bernal desde Tequis

### Cómo llegar
- **En auto** [CONFLICTO]:
  - 29.5 km / 38 min [CÁLCULO].
  - Uber: 35 km y 48 min promedio ([uber.com](https://uber.com/global/es/r/routes/tequisquiapan-qt-mx-to-bernal-qt-mx)).
  - Chilango: Bernal o Tequis a "40-50 minutos" de los viñedos de la zona.
  - Alternativo.mx dice "15 minutos", lo cual es claramente un error.
  - Para redactar: "unos 40 minutos".
- Ruta: por la carretera 120 a Ezequiel Montes y de ahí a Bernal. Bernal pertenece al **municipio de Ezequiel Montes** ([Wikipedia](https://es.wikipedia.org/wiki/San_Sebastián_Bernal)).
- **Transporte público**:
  - No encontré una ruta directa Tequis–Bernal.
  - Hay autobuses hacia Ezequiel Montes y, de ahí, transporte local a Bernal, por "poco más de 20 pesos" (fuente de calidad baja y sin fecha: [unchartedlens](https://unchartedlens.com/routes/mexico/queretaro-airport-to-pena-de-bernal-transport/)).
  - Desde la ciudad de Querétaro salen autobuses a Bernal cada ~90 min ([Alternativo, may-2026](https://alternativo.mx/pena-bernal-queretaro-subida-monolito-mejores-horarios/)).
  - Para redactar: "lo más práctico es en auto o con un tour".

### La Peña
- 350 m de altura y 2,515 msnm. Suele llamarse "el tercer monolito más grande del mundo", pero Wikipedia aclara que esa cifra viene sobre todo de fuentes turísticas ([Wikipedia](https://es.wikipedia.org/wiki/Peña_de_Bernal)).
  - [CONFLICTO] México Desconocido da 340 m y 2,525 msnm ([México Desconocido](https://www.mexicodesconocido.com.mx/pena-de-bernal.html)).
  - Para redactar: "uno de los monolitos más grandes del mundo".
- **UNESCO 2009**: "Lugares de memoria y tradiciones vivas de los otomí-chichimecas de Tolimán: la Peña de Bernal, guardiana de un territorio sagrado" (Patrimonio Cultural Inmaterial) ([Wikipedia](https://es.wikipedia.org/wiki/Peña_de_Bernal)).
- **Hasta dónde se sube sin equipo**:
  - El sendero público llega a la cruz, a media peña, "alrededor de 350 metros desde la base". Toma de 45 a 75 min según la condición física.
  - El tramo final, de unos 45 m verticales con grapas, requiere equipo, guía certificado y permiso.
  - Fuentes: [Alternativo, 4-may-2026](https://alternativo.mx/pena-bernal-queretaro-subida-monolito-mejores-horarios/); [Wikipedia](https://es.wikipedia.org/wiki/Peña_de_Bernal); [Grupo Animal](https://grupoanimal.mx/estilo-de-vida/que-hacer-pena-de-bernal-subir-queretaro).
  - México Desconocido menciona que el camino sube primero por una vereda hasta una capilla.
- **Estado del sendero en 2026**:
  - Estuvo cerrado ~1 año por riesgo de deslaves. Se reabrió después de trabajos de reforzamiento en las laderas, con motivo del equinoccio de primavera 2026 (14–16 y 21–22 de marzo) ([N+, 10-mar-2026](https://www.nmas.com.mx/queretaro/reabren-sendero-a-la-cima-de-la-pena-de-bernal-para-el-equinoccio-tras-un-ano-cerrado/)).
  - En enero de 2026 se anunció un tope de 16 mil personas por semana, por un decreto de zona protegida ([Quadratín, 18-ene-2026](https://queretaro.quadratin.com.mx/solo-podran-subir-16-mil-personas-a-la-pena-de-bernal/)).
- **Costo** [FRÁGIL / CONFLICTO]:
  - $30 por persona en enero de 2026, gratis para locales ([Quadratín](https://queretaro.quadratin.com.mx/solo-podran-subir-16-mil-personas-a-la-pena-de-bernal/)).
  - **Gratis desde el 14 de agosto de 2026**, según un anuncio municipal recogido por [Cadena Política, 15-ago-2026](https://cadenapolitica.com/2026/08/15/pena-de-bernal-suspende-cobro-acceso-2026-turismo-rehabilitacion/) (fuente de calidad media).
  - Para redactar sin cifra: "acceso gratuito o con una cuota simbólica".
- **Horario** [FRÁGIL]: 8:00 a 17:00, según fuentes viejas (2020) y guías. No encontré un horario oficial de 2026.
- **Mejor hora por el calor**:
  - De marzo a mayo hay "sol intenso después de las 10:00".
  - Recomiendan salir entre 7:30 y 8:30 y bajar antes de las 11:00.
  - En temporada de lluvias (junio a septiembre), no subir si está nublado porque hay tormentas por la tarde.
  - Llevar al menos 1 litro de agua por persona, gorra, bloqueador y calzado con buen agarre.
  - Fuente: [Alternativo, may-2026](https://alternativo.mx/pena-bernal-queretaro-subida-monolito-mejores-horarios/).
- **Equinoccio**: del 19 al 21 de marzo, con miles de visitantes ([Wikipedia](https://es.wikipedia.org/wiki/San_Sebastián_Bernal)). Si se va en esas fechas, salir antes de las 6:00 ([Alternativo](https://alternativo.mx/pena-bernal-queretaro-subida-monolito-mejores-horarios/)).
- **Escalada**: la cara sur, del lado del pueblo, está cerrada a la escalada por el Estado ([Mountain Project](https://mountainproject.com/route/111727921/feel-the-bernal)). Fuente de comunidad, sin fecha clara.

### El pueblo de Bernal
- Pueblo Mágico desde 2005 ([Wikipedia – Peña de Bernal](https://es.wikipedia.org/wiki/Peña_de_Bernal)). 3,962 habitantes en el censo de 2020 ([Wikipedia – Bernal](https://es.wikipedia.org/wiki/San_Sebastián_Bernal)).
- Fuente de los siguientes cuatro puntos: [Wikipedia – Bernal](https://es.wikipedia.org/wiki/San_Sebastián_Bernal).
- Templo de San Sebastián Mártir (1700–1725).
- El Castillo (siglo XVII, con reloj alemán; hoy es la delegación).
- Capilla de las Ánimas (siglo XVIII).
- Museo de la Máscara.
- **Textiles de lana** en telares de más de 100 años (rebozos, tapetes, cojines, chamarras) ([Wikipedia](https://es.wikipedia.org/wiki/San_Sebastián_Bernal)). Hay souvenirs tejidos en el Centro Artesanal La Aurora ([El Universal, 2017, act. 2023](https://www.eluniversal.com.mx/destinos/que-hacer-en-pena-de-bernal-con-500-pesos/)).
- **Fiestas** ([Wikipedia](https://es.wikipedia.org/wiki/San_Sebastián_Bernal)):
  - San Sebastián, del 11 al 20 de enero.
  - Equinoccio, del 19 al 21 de marzo.
  - Santa Cruz, del 1 al 5 de mayo, con subida a la cumbre y concurso de máscaras.
- **Fuentes danzantes**: espectáculo gratuito en la base de la Peña los fines de semana ([El Universal, 2017/2023](https://www.eluniversal.com.mx/destinos/que-hacer-en-pena-de-bernal-con-500-pesos/)) [FRÁGIL: dato viejo].

### Gorditas de maíz quebrado
- Fuente principal: [Food & Pleasure, 31-jul-2026](https://foodandpleasure.com/gorditas-maiz-quebrado/); Wikipedia las cita como "lo típico de Bernal".
- **Qué son**: la masa no se muele fino en el metate. Por eso quedan con "una textura ligeramente crujiente", "crujientes por fuera y muy suaves por dentro". Se abren, se rellenan y se fríen en aceite o manteca.
- **Rellenos tradicionales**: queso, queso enchilado y "migajas" (asientos del chicharrón). También hay de guisados (tinga, chicharrón prensado, nopales, rajas), siempre con salsa molcajeteada.
- **Dónde**: el **mercado gastronómico** de la calle Benito Juárez, cerca de la carretera, abre a diario de 9 a 19 h [FRÁGIL].
- Precio: $12 cada una en 2017 ([El Universal](https://www.eluniversal.com.mx/destinos/que-hacer-en-pena-de-bernal-con-500-pesos/)). Es un dato viejo; no usar la cifra.

### Vista desde la Estación Bernal
- Según tequis.travel ([Históricos](https://tequis.travel/historicos_tequisquiapan/)):
  - "Debe su nombre a la hermosa vista que regala de la Peña de Bernal… funciona actualmente como un mirador. Es el sitio perfecto para retratar el amanecer y el atardecer de Tequisquiapan."
  - Inaugurada en 1902 para el tren presidencial de Porfirio Díaz.
  - Dirección: Juárez Oriente, Tequisquiapan; abierta 24 h.
- **Pero**: la Gaceta Parlamentaria (28-oct-2026) dice que la fecha está sin corroborar y que el inmueble está deteriorado, con basura y una locomotora oxidada ([Gaceta](https://gaceta.diputados.gob.mx/Gaceta/66/2026/oct/20261028-III-1.html)). Ver el aviso 2.
- Hay tours en UTV que suben "al cerro de la Estación del Tren Bernal" y siguen a la Presa Centenario ([Yumping](https://www.yumping.com/es-MX/ofertas/buggies/queretaro/razer-por-monte-san-jose-y-presa-tequisquiapan-2h--o67405)).
- Para redactar: mencionarla como "la antigua estación, a las afueras de Tequis, desde donde se ve la Peña a lo lejos", sin presentarla como un mirador acondicionado.
- La vista de la Peña desde Tequis existe: hay tomas aéreas de la Plaza Hidalgo con la Peña al fondo ([Adobe Stock](https://stock.adobe.com/video/aerial-shot-over-plaza-miguel-hidalgo-on-a-busy-sunday-evening-moving-forward-to-santa-maria-de-la-asuncion-parish-church-with-bernal-s-boulder-in-the-background-in-tequisquiapan-queretaro/490102300)).

### Combinar con viñedos
- Freixenet, Azteca y De Cote quedan en Ezequiel Montes, de camino a Bernal (sus coordenadas en OSM están entre Tequis y Bernal).
- Una nota sitúa Viñedos Azteca a ~15 min de Bernal ([El Universal](https://www.eluniversal.com.mx/destinos/que-hacer-en-pena-de-bernal-con-500-pesos/)).

---

## Lugares encontrados fuera de la lista (candidatos para que el dueño los agregue)

| Lugar | Qué es | Sitio / contacto | Datos clave |
|---|---|---|---|
| **Bodegas De Cote** | Viñedo, Ezequiel Montes (Valle de Bernal) | [decote.mx](https://decote.mx) · 441 277 5000 · reservaciones@decote.mx | Libramiento Norponiente km 5.9, Tunas Blancas. Más de 50 ha y 21 variedades. Tours a pie, en bici, en tren, cata, Gran Reserva y pisado de uva. Recorridos de lunes a domingo de 11 a 17 h. No publica precios. Vendimia el 7-ago-2026 ([decote.mx/calendario](https://decote.mx/calendario)). Su formulario de reserva tiene texto "Lorem ipsum". |
| **Cava de Quesos Bocanegra** | Cava de quesos (marca Néole) | [cavabocanegra.com](https://www.cavabocanegra.com/) · 414 273 3369 | Carr. Estatal 200 km 50, Fuentezuelas, Tequisquiapan. Precios en la guía 2. |
| **Quesos Néole** (fábrica) | Quesería | quesosneole.com (no respondió el 2-nov-2026) · 414 273 3369 | Carr. Tequisquiapan–Ezequiel Montes km 0.1, La Lagunita. Se ve la producción tras vitrinas de 10 a 14 h y se prueban 4 quesos ([tequis.travel](https://tequis.travel/quesos_tequisquiapan/)). |
| **Finca VAI / Quesos VAI** | Rancho quesero | [quesosvai.com](https://www.quesosvai.com/) · WhatsApp 414 226 4353 · @fincavai | Km 30 carr. libre Qro–Tequis (municipio de Colón según OSM). $210; menores de 4 gratis. Es la "Quesería Vai" de la lista sin confirmar. |
| **La Biquette** | Quesos de cabra estilo francés | [labiquette.mx](https://labiquette.mx) · 414 112 3575 | Carr. Tequis–Ezequiel Montes km 2, La Lagunita ([tequis.travel](https://tequis.travel/quesos_tequisquiapan/)). |
| **Quesos Quiroz / Restaurante La Carreta** | Quesería en el centro | 414 273 2315 | Andador Morelos 5. Funciona "desde 1972" ([tequis.travel](https://tequis.travel/quesos_tequisquiapan/)). |
| **ORIGENS (Deli y Vinoteca)** | Tienda de quesos y vinos con degustaciones | [origens.mx](https://origens.mx) · 414 119 8018 | Andador Niños Héroes 30. |
| **Granja del Carmen** | Granja de cabras con ordeña | 414 219 6798 | Fuentezuelas, con cita ([tequis.travel](https://tequis.travel/quesos_tequisquiapan/)). |
| **CR Vinos MX / Cartinto House** | Viñedo y restaurante en Tequis | WhatsApp 442 773 2600 | Camino El Tejocote a San José la Laja. Abre de miércoles a domingo de 12 a 18 h; recorridos con reservación. Vendimia 8-ago-2026, $1,800 ([tequis.travel](https://tequis.travel/vinedos_tequisquiapan/)). |
| **Viña TX** | Viñedo urbano, restaurante y cava | 414 219 6736 | Fray Junípero Serra 33, Barrio de la Magdalena ([tequis.travel](https://tequis.travel/vinedos_tequisquiapan/)). |
| **Otros viñedos del municipio** listados por [tequis.travel](https://tequis.travel/vinedos_tequisquiapan/) | Viñedos | Ver la fuente | Bodegas Norte B (norteb.mx), Bodegas Vaivén (con hospedaje), Viña Magal, Viñedo San Martín (orgánico), Vinícola San Juanito (sanjuanito.carrd.co), Vinícola San Patricio. |
| **Viñedos de municipios cercanos** | Viñedos | Ver la fuente | Tierra de Alonso (tierradealonso.com), Cava 57 (cava57.com), Vinaltura (vinaltura.mx), Vinos del Marqués (vinosdelmarques.com), Viñedos Donato. |
| **Granja Lavyn** | Granja de lavanda | [lavyn.mx](https://www.lavyn.mx) · 414 226 6883 | Carr. La Tortuga–Santillán km 5. |
| **Museo ¡México me encanta!** | Museo de miniaturas | 414 273 1970 | 5 de Mayo 11, Centro. |
| **Ranchito TX** | Granja para niños y restaurante | 414 280 3590 | Carr. Tequis–Querétaro km 50.2. |
| **Termas del Rey** | Parque acuático termal | Sin sitio oficial encontrado · (441) 277 1525 según prensa | Km 10 carr. Tequis–Ezequiel Montes. |
| **Parque Acuático El Oasis** | Balneario termal | Sin URL encontrada · 446 138 4112 / 4113 / 4114 según prensa; antes 414 273 0412 | Km 10 carr. Tequis–Ezequiel Montes. Es el "Balneario El Oasis" de la lista sin confirmar. |
| **Balneario La Vega** | Balneario | Sin sitio oficial encontrado | Paseo de la Vega, Barrio de la Magdalena. |
| **Minas de ópalo** (El Redentor / El Pilón) | Visita a minas | 414 231 8036 | La Trinidad, 12 km al sur ([tequis.travel](https://tequis.travel/imperdibles_tequisquiapan/)). |
| **Cabalgando en Tequis / Caballos Tequis en Rancho Maguey** | Paseos a caballo | Fichas en [tequis.travel – Aventura](https://tequis.travel/aventura_tequisquiapan/); Vuela en Globo vende un paquete "vuela en globo y cabalga" a $4,449 | Sin más datos verificados. |

---

## Lugares sin confirmar: lo que encontré

- **Quesería Vai**: **existe** con el nombre **Finca VAI / Quesos VAI** ([quesosvai.com](https://www.quesosvai.com/)), en el km 30 de la carretera libre Querétaro–Tequisquiapan. OSM la ubica en Purísima de Cubos, municipio de Colón, así que **no está en Tequisquiapan**. Datos completos en la guía 2.
- **Quesos El Peregrino**: no encontré ninguna evidencia.
- **Quesos San Juanico**: no encontré ninguna evidencia. Existe la **Vinícola San Juanito** (San José de la Laja, Tequisquiapan; [sanjuanito.carrd.co](https://sanjuanito.carrd.co)), pero es un viñedo, no una quesería. Puede ser una confusión de nombre.
- **Balneario El Oasis**: **existe** como **Parque Acuático El Oasis**, en el km 10 de la carretera Tequisquiapan–Ezequiel Montes, con aguas termales a 36 °C ([adn40, oct-2026](https://www.adn40.mx/tiempo-libre/2026-10-18/las-aguas-termales-a-36-grados-en-queretaro-que-siguen-abiertas-en-otono-cuanto-cuesta-entrar-a-40-minutos-de-la-capital/)). No encontré su sitio oficial.
- **Balneario La Fuente**: no encontré evidencia en Tequisquiapan. El nombre más parecido es el **Balneario La Vega**, en el centro.
- **Puente Colgante México-Querétaro**: no encontré ninguna evidencia. Las búsquedas de "puente colgante" en Tequisquiapan solo dan puentes de Puebla y Jalisco, y en el río San Juan solo aparecen puentes vehiculares de San Juan del Río.
- **Ex Convento de San José**: no encontré evidencia en Tequisquiapan; los resultados son de Orizaba y Oaxaca. Las iglesias que lista tequis.travel son Santa María de la Asunción, Santa María Magdalena, las Capillas de Indios y la Capilla de Nuestro Padre Jesús ([Iglesias](https://tequis.travel/iglesias_tequisquiapan/)).
- **Mercado de Artesanías**: no existe con ese nombre exacto. Hay **cuatro mercados reales** (ver la guía 1): Guadalupano Municipal, Parador Artesanal Luis Donaldo Colosio, Tequesquicalli y Telésforo Trejo ([tequis.travel – Mercados](https://tequis.travel/mercados_tequisquiapan/)).
- **Spa Azteca**: no encontré evidencia.
- **Cicloturismo Tequisquiapan**: no encontré ningún operador con ese nombre. Hay tours en bici dentro de viñedos (De Cote, "Tour en Bici"), y tequis.travel menciona "recorridos en bicicleta" de agencias de enoturismo, sin nombre.
- **Paseos a Caballo Rancho San José**: no encontré evidencia. Sí existen otros operadores ("Cabalgando en Tequis" y "Caballos Tequis en Rancho Maguey" en [tequis.travel – Aventura](https://tequis.travel/aventura_tequisquiapan/)), además de la cabalgata en viñedos de Sala Vivé.

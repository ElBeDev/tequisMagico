# Investigación del calendario de eventos (2026-2027)

Consultado el 9 de noviembre de 2026, sobre los 17 eventos del API (`GET /api/events`). Marcas:
- **[FRÁGIL]**: precio u horario que cambia cada año. Mejor redactar sin cifra o con "en 2026 costaba…".
- **[CONFLICTO]**: las fuentes no coinciden. Se anotan todas.
- **[PROBABLE]**: fecha deducida de un patrón (fecha litúrgica o cívica fija, o de las ediciones anteriores), sin anuncio oficial de 2027. No darla por confirmada en el sitio: conviene "se celebra cada 15 de agosto" o "suele ser en mayo".

El Sol de San Juan del Río y Diario de Querétaro (`oem.com.mx`) me devolvieron 403, así que de ellos solo vi titulares. La prensa local que sí abrió es AlertaQro, Amanecer Querétaro, Al Minuto Noticias y Crónica Regional, que publican los comunicados del municipio casi textuales.

---

## Avisos antes de editar el calendario

1. **Hay dos eventos de los que no encontré ninguna evidencia: el "Festival de la Cestería" y el "Festival del Vino Joven".** Conviene desactivarlos. El de Cestería está marcado del 8 al 10 de noviembre de 2026, así que **en este momento sale como evento de hoy** en la web y en la app (ver las fichas 9 y 13).
2. **`https://festivaldelvino.com` no existe.** El dominio da NXDOMAIN en 1.1.1.1 y 8.8.8.8, `whois` responde "No match for domain" y el RDAP de Verisign da 404 ([rdap.verisign.com](https://rdap.verisign.com/com/v1/domain/festivaldelvino.com)). No está registrado, así que cualquiera puede comprarlo y poner ahí lo que quiera, que es justo como se secuestraron `vinedoslosrosales.com.mx` y `lacasonatequisquiapan.com`. **Hay que quitar ese `ticket_url` ya.**
3. **El "Festival del Globo" de marzo no tiene fuente.** El festival de globos de Tequis se llama **Fiesta en el Aire**, tequis.travel lo pone "a mediados de diciembre" y la última edición que encontré documentada es la de 2019. Las búsquedas "festival del globo 2027" y "globo 2027" de Search Console seguramente buscan el **Festival Internacional del Globo de León**, Guanajuato, que en 2026 es del 13 al 16 de noviembre ([Crónica, 8-oct-2026](https://www.cronica.com.mx/nacional/2026/10/08/festival-del-globo-2026-cuando-es-y-que-artistas-habra-en-leon-guanajuato/)). Ese festival no es de Tequis, así que no hay que presentarlo como si lo fuera.
4. **El calendario oficial de tequis.travel está abandonado.** Su plugin de eventos (EventON, 196 entradas en `/wp-json/wp/v2/ajde_events`) no tiene nada publicado después de julio de 2024. La fuente útil es la página fija [Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/), que da los meses pero no los días. Trae además un PDF municipal, [Principales fiestas patronales comunitarias](https://tequis.travel/wp-content/uploads/2025/10/Principales-fiestas-patronales-comunitarias.pdf), con fechas fijas. Los avisos de cada año salen en prensa local con 1 a 3 semanas de anticipación.
5. **El patrón del Festival del Queso y Vino no es "el último fin de semana de mayo".** Empieza en jueves, pero cambia mucho de un año a otro: en 2025 fue del 22 de mayo al 8 de junio y en 2026 del 7 al 24 de mayo (ver la ficha 2).
6. **Semana Santa 2027 cae en marzo y choca con otros dos eventos.** Va del 21 al 28 de marzo. Coincide con el fin de semana del equinoccio (Espíritus de Primavera) y quizá con el Festival del Artesano, que en 2026 fue del 13 al 22 de marzo. Es probable que el municipio mueva alguno de los dos; no les pongas fecha fija hasta que la anuncien.
7. **Las horas de "Año Nuevo en la Plaza" están en UTC y no en hora local.** `start_date 2026-12-31T20:00Z` y `end_date 2027-01-01T02:00Z` equivalen a las 14:00 y las 20:00 del 31 de diciembre en Tequis (UTC-6, sin horario de verano), así que el evento "termina" antes de la medianoche. La web solo muestra la fecha (`dateOnly`) y ahí no se nota, pero cualquier lugar que muestre la hora sí lo enseña mal. En 2025 la fiesta empezó a las 22:00 (ficha 11).

---

## Tabla resumen

| # | Evento | Fecha que tenemos | Fecha correcta 2027 (o "sin anunciar") | Estado | Fuente |
|---|---|---|---|---|---|
| 1 | Fiesta de la Santa Cruz | 3-may-2026 | 3-may-2027 (lunes); la fiesta del barrio va del 1 al 5 de mayo | probable (fecha fija) | [tequis.travel](https://tequis.travel/fiestas_y_eventos_tequisquiapan/), [PDF municipal](https://tequis.travel/wp-content/uploads/2025/10/Principales-fiestas-patronales-comunitarias.pdf) |
| 2 | Feria Nacional del Queso y Vino | 22-may al 7-jun-2026 (**mal**: fue del 7 al 24 de mayo de 2026) | Sin anunciar. Mayo de 2027 [PROBABLE] | sin anunciar | [SECTUR, 14-abr-2026](https://www.gob.mx/sectur/articulos/tequisquiapan-celebra-50-anos-del-festival-internacional-del-arte-queso-y-vino-2026) |
| 3 | Fiesta de la Fundación de Tequisquiapan | 24-jul-2026 | 24-jul-2027 (sábado), dentro de las fiestas de La Magdalena (~19 al 26 de julio) | probable (fecha fija) | [Amanecer Qro, 22-jul-2026](https://amanecerqro.com/fiesta-patronal-santa-maria-magdalena-tequisquiapan-475-aniversario/) |
| 4 | La Fiesta del Pueblo | 12 al 16-ago-2026 (correcta) | Sin anunciar. Mediados de agosto, alrededor del 15 [PROBABLE] | sin anunciar | [AlertaQro, 4-ago-2026](https://www.alertaqronoticias.com/2026/08/04/presentan-las-fiestas-del-pueblo-tequisquiapan-2026/) |
| 5 | Fiesta de Santa María de la Asunción | 15-ago-2026 | 15-ago-2027 (domingo) | probable (fecha fija) | [tequis.travel](https://tequis.travel/fiestas_y_eventos_tequisquiapan/), [PDF municipal](https://tequis.travel/wp-content/uploads/2025/10/Principales-fiestas-patronales-comunitarias.pdf) |
| 6 | Noches de Leyendas | 12-sep-2026, semanal | Todo el año, sábados por la noche (no tiene fecha anual) | recurrente; **de pago** | [tequis.travel – Fiestas](https://tequis.travel/fiestas_y_eventos_tequisquiapan/), [tequis.travel – Tours](https://tequis.travel/tours_tequisquiapan/) |
| 7 | Fiestas Patrias | 15 al 16-sep-2026 (el programa de 2026 fue del 11 al 16) | 15 y 16-sep-2027 (miércoles y jueves); programa sin anunciar | probable (fecha fija) | [AlertaQro, 2-sep-2026](https://www.alertaqronoticias.com/2026/09/02/ecos-de-libertad-llegara-a-tequisquiapan-del-11-al-16-de-septiembre/) |
| 8 | Día de Muertos | 1 al 2-nov-2026 (el festival real, Tejedores de Luz, fue del 28 de oct al 2 de nov) | Sin anunciar. Finales de octubre al 2-nov-2027 [PROBABLE] | sin anunciar | [Al Minuto, 4-nov-2026](https://www.alminutonoticias.com.mx/tequisquiapan/concluye-tejedores-de-luz-2026-en-tequisquiapan-con-75-mil-visitantes/2026/11/04/) |
| 9 | Festival de la Cestería | 8 al 10-nov-2026 | **No encontré que exista** | no confirmado: desactivar | (ver ficha) |
| 10 | Posadas Navideñas | 16 al 23-dic-2026 | 16 al 23-dic (fecha fija); programa 2026 sin anunciar | probable (fecha fija) | [tequis.travel](https://tequis.travel/fiestas_y_eventos_tequisquiapan/) |
| 11 | Año Nuevo en la Plaza | 31-dic-2026 (horas en UTC, ver aviso 7) | 31-dic-2026, desde las 22:00 [PROBABLE] | probable | [Gaceta Queretana, 30-dic-2025](https://www.gacetaqueretana.com.mx/2025/12/30/tequisquiapan-se-enciende-para-recibir-el-ano-nuevo-con-fiesta-musica-y-fuegos-artificiales-%F0%9F%8E%86%E2%9C%A8/) |
| 12 | Enamórate en Tequisquiapan | 13 al 15-feb-2027 | Sin anunciar. Febrero de 2027, alrededor del 14 [PROBABLE]; en 2026 fue del 12 al 22 | sin anunciar | [AlertaQro, 4-feb-2026](https://www.alertaqronoticias.com/2026/02/04/enamorate-en-tequisquiapan-este-mes-de-febrero-con-musica-y-cultura/) |
| 13 | Festival del Vino Joven | 20 al 21-feb-2027 | **No encontré que exista**; el sitio de boletos no existe | no confirmado: desactivar | (ver ficha y aviso 2) |
| 14 | Festival del Artesano: El Arte de Nuestras Raíces | 6 al 8-mar-2027 | Sin anunciar. Marzo de 2027 [PROBABLE]; en 2026 fue del 13 al 22 | sin anunciar | [AlertaQro, 12-mar-2026](https://www.alertaqronoticias.com/2026/03/12/tequisquiapan-celebra-el-talento-y-las-tradiciones-con-el-festival-del-artesano/) |
| 15 | Festival del Globo | 12 al 14-mar-2027 | **Sin fuente para marzo.** La "Fiesta en el Aire" se hacía a mediados de diciembre; la última edición documentada es de 2019 | no confirmado | [tequis.travel](https://tequis.travel/fiestas_y_eventos_tequisquiapan/), [Amanecer Qro, 14-dic-2019](https://amanecerqro.com/inauguran-fiesta-en-el-aire-en-tequisquiapan/) |
| 16 | Espíritus de Primavera | 20 al 21-mar-2027 | Sin anunciar. Fin de semana del equinoccio [PROBABLE]; en 2026 fue el 21 y 22 de marzo. [CONFLICTO] con Semana Santa 2027 | sin anunciar | [AlertaQro, 18-mar-2026](https://www.alertaqronoticias.com/2026/03/18/tequisquiapan-celebrara-el-equinoccio-con-el-festival-espiritus-de-primavera/) |
| 17 | Semana Santa | 11 al 18-abr-2027 (**mal**) | **21 al 28-mar-2027**: Domingo de Ramos 21, Jueves Santo 25, Viernes Santo 26, Sábado de Gloria 27 y Pascua 28 | confirmada (calendario litúrgico); el programa local está sin anunciar | [N+](https://www.nmas.com.mx/cultura/cuando-cae-semana-santa-2027-mexico-fechas-inicio-fin-vacaciones/) |

**Qué cambiar ya:** Semana Santa (al 21-28 de marzo de 2027); Festival de la Cestería y Festival del Vino Joven (desactivarlos); el `ticket_url` del Vino Joven; las horas de Año Nuevo; el Festival del Globo (desactivarlo o convertirlo en "Fiesta en el Aire" sin fecha). Los eventos de 2026 que ya pasaron se pueden mover a su fecha probable de 2027 con un texto que no prometa el día exacto.

---

## Ficha por evento

### 1. Fiesta de la Santa Cruz
- tequis.travel la pone el **3 de mayo** en el **Barrio de San Juan**, "se organiza desde un año antes" y destaca la Danza de Moros y Cristianos ([Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)).
- El PDF municipal la pone **"Del 01 al 05 de mayo"**, Barrio de San Juan ([PDF](https://tequis.travel/wp-content/uploads/2025/10/Principales-fiestas-patronales-comunitarias.pdf)). No es un conflicto: el 3 es el día principal y la fiesta del barrio dura cinco días.
- 2027: el 3 de mayo cae en **lunes**. [PROBABLE] fiesta del 1 al 5 de mayo, con la danza el día 3.
- **Organizador:** tenemos "Parroquia de Santa María de la Asunción", pero ninguna fuente lo dice. La fiesta es del barrio, en la capilla de la Santa Cruz Verde, según una página de Facebook que solo vi en el buscador ("Fiesta en Honor a la Santa Cruz Verde de Jesucristo", 1 al 5 de mayo). Mejor poner "Barrio de San Juan" o dejar el organizador vacío.
- No encontré cobertura de la edición 2026.

### 2. Feria Nacional del Queso y Vino → nombre oficial: **Festival Internacional del Arte, Queso y Vino**
- **La fecha de 2026 que tenemos está mal.** La edición 2026 (la 50.ª) fue **del 7 al 24 de mayo de 2026**, con acceso gratuito, en el Parque La Pila, el Jardín Principal Miguel Hidalgo, el Jardín del Arte y el Teatro del Pueblo. Se inauguró el 7 de mayo en la Plaza Principal ([SECTUR, comunicado 072/2026](https://www.gob.mx/sectur/articulos/tequisquiapan-celebra-50-anos-del-festival-internacional-del-arte-queso-y-vino-2026)). Posta da el mismo periodo, horario diario de 12:00 a 22:00 [FRÁGIL] y registro en tequis.travel/festival para recibir la pulsera de degustaciones ([Posta](https://www.posta.com.mx/cdmx/festival-del-arte-queso-y-vino-2026-en-tequisquiapan/vl2190148)).
- **2025:** del jueves 22 de mayo al domingo 8 de junio, en la plaza principal, el Parque La Pila y el Jardín del Arte, gratuito ([El Universal Querétaro](https://www.eluniversalqueretaro.mx/vida-q/tequisquiapan-se-prepara-para-el-festival-internacional-del-arte-queso-y-vino-2025/); [queretaro.travel](https://queretaro.travel/noticias/international-festival-of-art-cheese-and-wine-2025-inaugurated-in-tequisquiapan/?lang=en)). Las fechas que tenemos para 2026 (22 de mayo al 7 de junio) parecen las de 2025 movidas un año.
- **2027: sin anunciar.** tequis.travel dice "Mayo y junio" ([Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)). ZonaTurística dice "mediados de mayo a principios de junio 2027", pero es un relleno sin fuente ([zonaturistica](https://www.zonaturistica.com/en/events-in/queretaro/tequisquiapan/festival-internacional-del-arte-el-queso-y-el-vino)). [PROBABLE]: empieza un jueves de mayo y dura de 2.5 a 3 semanas. Sería la edición 51. Ojo: `tequis.travel/festival` ya no muestra el festival, ahora anuncia Tejedores de Luz.
- **Datos que corregir:** el nombre (vale la pena dejar "queso y vino" en el título, porque así lo busca la gente); la sede (la principal es el Parque La Pila, no solo la plaza); la descripción (dice "10-15 días" y en 2026 fueron 18); el organizador (Municipio de Tequisquiapan; el comunicado lo presentan SECTUR federal, la Secretaría de Turismo del estado y el municipio). `is_free = true` es correcto.

### 3. Fiesta de la Fundación de Tequisquiapan
- **2026 (475 años):** las fiestas de Santa María Magdalena fueron del **19 al 26 de julio** en el Barrio de La Magdalena, con sesión solemne de Cabildo el **24 de julio** por el aniversario. Las organiza el "Comité de Fiestas Patronales, Tradicionales y de Fundación de Tequisquiapan del Barrio de La Magdalena" ([Amanecer Qro, 22-jul-2026](https://amanecerqro.com/fiesta-patronal-santa-maria-magdalena-tequisquiapan-475-aniversario/)).
- tequis.travel: "24 de julio", en el Barrio de la Magdalena, con feria, kermés y desfile de carros alegóricos ([Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)). La nota de 2026 no menciona el desfile.
- [CONFLICTO] sobre el día de la fundación: el sitio del municipio dice "**25 de julio de 1551**" ([tequisquiapan.gob.mx/municipio](https://www.tequisquiapan.gob.mx/municipio)); tequis.travel y el Cabildo la celebran el 24.
- 2027: el 24 de julio cae en **sábado**. [PROBABLE] fiestas de La Magdalena alrededor del 19 al 26 de julio. El PDF municipal también pone del 24 al 26 de julio la fiesta de Santiago Apóstol en la "Delegación Cabecera Poniente" ([PDF](https://tequis.travel/wp-content/uploads/2025/10/Principales-fiestas-patronales-comunitarias.pdf)).
- **Organizador:** tenemos "Gobierno Municipal". La fiesta la organiza el comité del barrio y el municipio pone la sesión de Cabildo. Conviene cambiarlo.

### 4. La Fiesta del Pueblo
- **2026: del 12 al 16 de agosto**, en el Centro Histórico, con conciertos gratuitos en el Teatro del Pueblo (Av. Juárez) ([AlertaQro, 4-ago-2026](https://www.alertaqronoticias.com/2026/08/04/presentan-las-fiestas-del-pueblo-tequisquiapan-2026/)). Cartel: Alacranes Musical el 12, Conjunto Nuevo Amanecer el 13, Cardenales de Nuevo León el 14 y Titanes de Durango el 16; Carrera del Pueblo de 5 y 10 km el 16, a $300/$350 [FRÁGIL] ([Eje Central](https://www.ejecentral.com.mx/nuestro-eje/fiesta-del-pueblo-tequisquiapan-2026-cuando-es-y-cual-es-su-cartelera-completa-asi-puedes-ver-a-los-cardenales-de-nuevo-leon-gratis)). Balance: más de 175 mil visitantes ([Al Minuto, 18-ago-2026](https://www.alminutonoticias.com.mx/tequisquiapan/fiesta-del-pueblo-2026-supera-los-175-mil-visitantes-en-tequisquiapan-y-revive-la-tradicion/2026/08/18/)).
- **2025: del 14 al 17 de agosto**, "en honor a Santa María de la Asunción" ([Querétaro de Verdad](https://queretarodeverdad.mx/concluye-con-gran-exito-la-fiesta-del-pueblo-2025-en-honor-a-santa-maria-de-la-asuncion-en-tequisquiapan/)).
- 2027: sin anunciar. [PROBABLE] 4 o 5 días alrededor del domingo 15 de agosto.
- Tenemos `is_recurring = false`, pero se repite cada año: debería ser `true`. La descripción es muy pobre y se le puede agregar teatro del pueblo, conciertos gratuitos y la carrera.

### 5. Fiesta de Santa María de la Asunción
- Fiesta patronal del 15 de agosto, en la parroquia central: misa con mañanitas, danzas, verbena y castillo pirotécnico al anochecer ([tequis.travel](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)). El PDF municipal la pone el "15 de agosto", Centro Histórico ([PDF](https://tequis.travel/wp-content/uploads/2025/10/Principales-fiestas-patronales-comunitarias.pdf)).
- 2027: **domingo 15 de agosto** (fecha fija). Cae dentro de la Fiesta del Pueblo; se podrían enlazar los dos eventos.
- Lugar, organizador y gratuidad coinciden.

### 6. Noches de Leyendas
- tequis.travel: "Todo el año. Los sábados por la noche, actores y actrices realizan un recorrido por las calles del pueblo… La travesía parte a un costado de la Parroquia" ([Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)). No dice quién lo organiza ni cuánto cuesta.
- **¿De pago o gratis? De pago**, hasta donde encontré. El único recorrido de leyendas con horario y precio publicados en tequis.travel es la **Callejoneada teatral de leyendas de ViveTours**: viernes, sábados y festivos a las 20:45; 1 hora; **$100 adultos y $60 niños e INAPAM** [FRÁGIL]; sale de la Plaza Miguel Hidalgo junto a la Plaza Santa Cecilia; tel. 427 121 02 48; Instagram @gus_vivetours ([tequis.travel – Tours](https://tequis.travel/tours_tequisquiapan/)). No encontré ninguna fuente que diga que hay una versión gratuita o municipal.
- [CONFLICTO] sobre el punto de salida: junto a la Parroquia (tequis.travel, Fiestas), Plaza Miguel Hidalgo con Santa Cecilia (tequis.travel, Tours) o "Plaza de Armas a las 19:30" (México Desconocido, sin fecha: [escucha las leyendas](https://www.mexicodesconocido.com.mx/escapadas/escucha-las-leyendas-de-tequisquiapan)). Están todos a una cuadra; mejor decir "centro, junto a la parroquia".
- **Datos que corregir:** el organizador (tenemos "Gobierno Municipal" sin fuente; puede ser ViveTours u otro operador, mejor dejarlo vacío o "operadores locales"). `is_free = false` es correcto; `ticket_price` podría ser "Desde $60" con [FRÁGIL]. Aparte, Vinotours organiza una "Noche de Leyendas" especial cada 1 de noviembre en el Callejón del Piojito (6.ª edición en 2026), que es otro evento ([Críptica](https://criptica.com.mx/tequisquiapan-iluminara-sus-calles-con-el-festival-tejedores-de-luz-habra-altares-leyendas-y-gastronomia-por-dia-de-muertos/); solo lo vi en el buscador).

### 7. Fiestas Patrias
- **2026: "Ecos de Libertad", del 11 al 16 de septiembre**, en la Plaza Miguel Hidalgo. El Grito fue el 15 a las 23:00, con el presidente municipal Héctor Magaña Rentería. Hubo festival de huapango el 13 (16:00 a 23:00), pabellón gastronómico y artesanal el 15 y 16 en las calles Ezequiel Montes y Juárez, y vendimia en Viña Magal el 12 ([AlertaQro, 2-sep-2026](https://www.alertaqronoticias.com/2026/09/02/ecos-de-libertad-llegara-a-tequisquiapan-del-11-al-16-de-septiembre/)). Balance: más de 25 mil personas, del 11 al 16 en las plazas Miguel Hidalgo y Santa Cecilia; el 16 hubo honores a la bandera y medallas para los 50 corredores de la antorcha desde Dolores Hidalgo ([Quadratín](https://queretaro.quadratin.com.mx/fiestas-patrias-reunen-a-mas-de-25-mil-personas-en-tequisquiapan/)).
- **La descripción que tenemos menciona un "desfile cívico matutino" que ninguna fuente de 2026 confirma**, y "mariachi" tampoco aparece: el cierre de 2026 fue con Los Ángeles de Charly ([AlertaQro, 5-sep-2026](https://www.alertaqronoticias.com/2026/09/05/los-angeles-de-charly-pondran-el-ambiente-el-15-de-septiembre-en-tequisquiapan/)). El Grito a las 23:00 sí está confirmado.
- 2027: el Grito es el **miércoles 15 de septiembre** y el 16 es jueves (fechas fijas). El programa de varios días está sin anunciar.

### 8. Día de Muertos → en Tequis el festival se llama **Tejedores de Luz**
- **2026 (3.ª edición): del 28 de octubre al 2 de noviembre.** El altar monumental, de mimbre y con el tema del aire, se encendió el jueves 29 a las 20:00 en la Plaza Miguel Hidalgo. Hubo más de 10 altares en el centro, pabellones gastronómicos, el altar de mascotas "Huellitas de Luz" y, por primera vez, actividades en San Nicolás, La Fuente, El Tejocote y La Magdalena (desfile de Xantolo, catrinas, mojigangas). Sedes: Plaza Miguel Hidalgo, Jardín del Arte, Plaza Santa Cecilia, Parque La Pila y Casa de la Cultura. Balance: más de 75 mil visitantes ([Al Minuto, 4-nov-2026](https://www.alminutonoticias.com.mx/tequisquiapan/concluye-tejedores-de-luz-2026-en-tequisquiapan-con-75-mil-visitantes/2026/11/04/); [Amanecer Qro](https://amanecerqro.com/tejedores-de-luz-2026-tequisquiapan-altar-monumental/)).
- **2025 (2.ª edición):** del 30 de octubre al 2 de noviembre ([Amanecer Qro](https://amanecerqro.com/tequisquiapan-se-iluminara-con-el-2o-festival-tejedores-de-luz-tradicion-arte-y-turismo/)).
- 2027: sin anunciar. [PROBABLE] de finales de octubre al martes 2 de noviembre.
- **Datos que corregir:** el título (que diga "Tejedores de Luz – Día de Muertos", porque la gente busca "tequisquiapan dia de muertos"); las fechas (empieza unos días antes del 1 de noviembre); la descripción (menciona "concurso de altares", "maquillaje tradicional gratuito" y "procesión nocturna al cementerio", y no encontré nada de eso; lo confirmado es el altar monumental, la ruta de altares, las catrinas y el desfile de Xantolo en las comunidades); el organizador (Municipio de Tequisquiapan, Secretaría de Turismo municipal).

### 9. Festival de la Cestería: no encontré que exista
- Ninguna búsqueda da un "Festival de la Cestería" en Tequis, ni en noviembre ni en otro mes. Lo más parecido:
  - **Festival Artesanal "Manos Mágicas"**: artesanos de fibras vegetales (vara, mimbre, palma). Su 5.ª edición fue el 16 y 17 de marzo de 2024 en la Plaza Miguel Hidalgo ([tequis.travel](https://tequis.travel/festejemos_a_las_manos_magicas_de_tequis_tequisquiapan/)). Después de 2024 parece haberse fusionado con el Festival del Artesano de marzo (ficha 14).
  - **Tejedores de Luz** (oct-nov) y la **Villa Navideña** (dic), que usan figuras de mimbre de los artesanos ([tequis.travel](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)).
  - **"Estrellas y Raíces", 14 de noviembre de 2026**: artesanías locales y talleres de tejido de mimbre en la Plaza Miguel Hidalgo (ver la ficha nueva B).
- **Recomendación:** desactivarlo hoy, porque sale como "evento de hoy". Si se quiere un evento de cestería, el real es el Festival del Artesano de marzo.

### 10. Posadas Navideñas
- tequis.travel: "16 al 23 - Posadas Navideñas" (no dice el mes, pero va en la sección de Navidad). Salen de la plaza principal y llevan villancicos, aguinaldos, ponche, tamales y piñata ([Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)). No dice quién las organiza.
- Los programas navideños del municipio de 2025 no las mencionan ([AlertaQro, 12-dic-2025](https://www.alertaqronoticias.com/2025/12/12/asi-se-vivira-la-navidad-en-tequisquiapan/); [Amanecer Qro](https://amanecerqro.com/tequisquiapan-2025-vive-la-villa-navidena-con-eventos-y-cultura/)). Pueden ser parroquiales o vecinales.
- 2026: del 16 al 23 de diciembre (fecha litúrgica fija); programa sin anunciar. El organizador "Gobierno Municipal" no está confirmado.

### 11. Año Nuevo en la Plaza
- **Año Nuevo 2025-2026:** fiesta desde las **22:00**, con "espectacular show pirotécnico y música versátil en vivo", y "el punto de encuentro será la Plaza Miguel Hidalgo" ([Gaceta Queretana, 30-dic-2025](https://www.gacetaqueretana.com.mx/2025/12/30/tequisquiapan-se-enciende-para-recibir-el-ano-nuevo-con-fiesta-musica-y-fuegos-artificiales-%F0%9F%8E%86%E2%9C%A8/)).
- [CONFLICTO] sobre la plaza: el programa municipal la pone en la **Plaza Santa Cecilia**, con cuenta regresiva a las 22:00 ([AlertaQro, 12-dic-2025](https://www.alertaqronoticias.com/2025/12/12/asi-se-vivira-la-navidad-en-tequisquiapan/); [Amanecer Qro](https://amanecerqro.com/tequisquiapan-2025-vive-la-villa-navidena-con-eventos-y-cultura/)). Las dos plazas son contiguas; se puede poner "Plaza Miguel Hidalgo y Santa Cecilia".
- 2026-2027: sin anunciar. [PROBABLE] 31 de diciembre desde las 22:00. Corregir las horas (aviso 7). La descripción ("brindis colectivo") no tiene fuente; los fuegos y la música en vivo sí.

### 12. Enamórate en Tequisquiapan (en prensa también "Enamórate en Tx")
- **2026 (2.ª edición): del 12 al 22 de febrero**, en la Plaza Miguel Hidalgo, con conciertos gratuitos: Los Ángeles Negros el domingo 15 y La Sonora Santanera el sábado 21. Lo organiza el Municipio de Tequisquiapan ([AlertaQro, 4-feb-2026](https://www.alertaqronoticias.com/2026/02/04/enamorate-en-tequisquiapan-este-mes-de-febrero-con-musica-y-cultura/)). Hubo también autocine en el Parque La Pila el 19 y 20 ([Al Diálogo](https://aldialogo.mx/vsd/2026/02/11/festival-enamorate-en-tequisquiapan-invita-celebra-y-hace-historia-con-cine-mexicano-al-aire-libre)). [CONFLICTO]: algunas notas ponen a la Sonora Santanera el 22.
- tequis.travel: "Febrero", con catas de vino, mercadito, talleres y conciertos; gratuito ([Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)).
- 2027: sin anunciar. [PROBABLE] alrededor del domingo 14 de febrero; en 2026 duró 11 días y no 3.

### 13. Festival del Vino Joven: no encontré que exista
- Ninguna búsqueda da un "Festival del Vino Joven" en Querétaro ni en Tequis. Los festivales de vino reales de la zona son:
  - **Festival del Vino Queretano**: 5.ª edición del 17 al 19 de octubre de 2025, en Corregidora, organizado por la Secretaría de Turismo del estado y el Clúster Vitivinícola de Querétaro ([El Financiero](https://www.elfinanciero.com.mx/viajes/2025/10/17/queretaro-celebra-la-quinta-edicion-del-festival-del-vino-queretano/)). En 2026 fue del 16 al 18 de octubre ([Escapadah](https://www.escapadah.com/tendencias/2026/7/14/calendario-de-vendimias-para-disfrutar-tus-viajes-por-queretaro-esta-temporada-41685.html)). No es en Tequis.
  - **Festival 100 Vinos Mexicanos**, en La Redonda (Ezequiel Montes); está pospuesto por el conflicto legal de 2026 (ver `investigacion-guias-2026-11.md`, aviso 1).
- **La "Asociación de Vinicultores de Querétaro" no aparece así en ninguna fuente.** Existe la **Asociación de Vitivinicultores de Querétaro**, que organizó la 1.ª edición del Festival del Vino Queretano en 2019, en el Centro de las Artes de Querétaro ([Chilango](https://www.chilango.com/viajes/escapate/festival-del-vino-queretano/)).
- **`festivaldelvino.com` no existe ni está registrado** (aviso 2). El precio "Desde $350" tampoco tiene fuente.
- **Recomendación:** desactivarlo y quitar el `ticket_url`. Para cubrir el vino, sirve más la ficha nueva E (temporada de vendimias).

### 14. Festival del Artesano: "El Arte de Nuestras Raíces"
- **2026: del 13 al 22 de marzo**, en la Plaza Miguel Hidalgo, organizado por el municipio. Hubo exhibición y venta de artesanías, música (tríos huastecos y grupos de rock) y talleres; el "Ritual del Equinoccio de Primavera" fue el 21 de marzo ([AlertaQro, 12-mar-2026](https://www.alertaqronoticias.com/2026/03/12/tequisquiapan-celebra-el-talento-y-las-tradiciones-con-el-festival-del-artesano/)). Balance: 20 expositores y más de 120 artesanos ([Al Minuto, 23-mar-2026](https://www.alminutonoticias.com.mx/tequisquiapan/concluye-con-exito-el-festival-artesanal-el-arte-de-nuestras-raices-en-tequisquiapan/2026/03/23/)).
- tequis.travel: "Marzo", en el Jardín Principal Miguel Hidalgo, con piezas de fibras vegetales ([Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)).
- 2027: sin anunciar. [PROBABLE] marzo, pero Semana Santa (21 al 28) puede moverlo. Las fechas que tenemos (6 al 8 de marzo) no salen de ninguna fuente.

### 15. Festival del Globo → en Tequis es **Fiesta en el Aire**
- tequis.travel: "A mediados de diciembre - Fiesta en el Aire. El globo aerostático y el de Cantoya tienen su propio festival en Tequisquiapan", con talleres, pícnic, película y degustaciones ([Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)).
- **Ediciones documentadas:** 14 al 16 de diciembre de 2012 (la 1.ª), 6 al 8 de diciembre de 2013 y 22 y 23 de noviembre de 2014 ([travelbymexico, 2012](https://www.travelbymexico.com/blog/13476-fiesta-en-el-aire-festival-del-globo-en-tequisquiapan/); [travelbymexico, 2013](https://www.travelbymexico.com/blog/15237-fiesta-en-el-aire-festival-del-globo-2013-en-tequisquiapan/); [Códice Informativo, nov-2014](https://codiceinformativo.com/2014/11/tequisquiapan-invita-al-festival-del-globo-fiesta-en-el-aire/)). La última fue el **13 y 14 de diciembre de 2019**, organizada por el Municipio a través del DIF, con la empresa Vuela en Globo, en la Plaza Santa Cecilia, el Jardín Miguel Hidalgo y el Auditorio Municipal ([Amanecer Qro, 14-dic-2019](https://amanecerqro.com/inauguran-fiesta-en-el-aire-en-tequisquiapan/)).
- **Después de 2019 no encontré ninguna edición.** En el programa navideño de 2025 solo hubo "Elevaciones en globo" para la carta a los Reyes Magos, el 27 y 28 de diciembre en el Parque La Pila ([Amanecer Qro](https://amanecerqro.com/tequisquiapan-2025-vive-la-villa-navidena-con-eventos-y-cultura/)).
- **Datos que corregir:** la fecha (12 al 14 de marzo de 2027 no tiene fuente), el organizador ("Asociación de Globos Aerostáticos de Querétaro" no aparece en ninguna fuente) y el lugar ("Campo de Despegue Principal", coordenadas inventadas).
- **Recomendación:** desactivarlo. Si se quiere captar la búsqueda "globo", lo honesto es una guía de vuelos en globo, que se hacen todo el año (la guía 3 de `investigacion-guias-2026-11.md` ya lo cubre), y no un festival sin fecha.

### 16. Espíritus de Primavera
- **2026: 21 y 22 de marzo**, de 9:00 a 18:00 [FRÁGIL], en la Plaza Miguel Hidalgo, el Jardín del Arte y la Plaza Santa Cecilia, como cierre del Festival del Artesano ([AlertaQro, 18-mar-2026](https://www.alertaqronoticias.com/2026/03/18/tequisquiapan-celebrara-el-equinoccio-con-el-festival-espiritus-de-primavera/)). [CONFLICTO]: Tequis Conecta lo ponía del 21 al 30 de marzo ([Tequis Conecta](https://tequisconecta.com/articulo/40/preparate-para-el-festival-espiritus-de-primavera)); seguramente es la nota de 2025.
- **2025:** del 21 al 30 de marzo, con yoga, meditación, música en vivo y comida saludable ([Tus Buenas Noticias, 19-mar-2025](https://www.tusbuenasnoticias.com/noticias/mexico/2025/03/19/42801-festival-espiritus-de-primavera-2025-en-tequisquispan-actividades)).
- tequis.travel: "Marzo", con ritual del equinoccio, conciertos y mercadito; gratuito ([Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)).
- 2027: sin anunciar. [PROBABLE] fin de semana del 20 y 21 de marzo, pero el 21 es Domingo de Ramos. [CONFLICTO] de calendario: puede que lo adelanten o lo junten con Semana Santa.

### 17. Semana Santa
- **2027: del 21 al 28 de marzo.** Domingo de Ramos el 21, Jueves Santo el 25, Viernes Santo el 26, Sábado de Gloria el 27 y Domingo de Resurrección el 28. Las vacaciones de la SEP van del 22 de marzo al 2 de abril ([N+](https://www.nmas.com.mx/cultura/cuando-cae-semana-santa-2027-mexico-fechas-inicio-fin-vacaciones/)). Lo comprobé además con el cálculo de Pascua (algoritmo de Meeus/Butcher). **La fecha que tenemos (11 al 18 de abril) está mal.**
- Programa en Tequis según tequis.travel: el miércoles, representación de la captura de Jesús; Vía Crucis en la plaza principal; el Sábado de Gloria, quema de judas y diablos y bendición del fuego y el agua; el domingo, fiesta de Resurrección ([Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)). En 2027 el Miércoles Santo es el 24 de marzo.
- **La descripción que tenemos dice "alfombras de aserrín teñido" y "procesiones diarias"**, y no encontré ninguna fuente para eso en Tequis. Conviene cambiarla por lo de tequis.travel. No encontré el programa parroquial de 2026.

---

## Eventos que faltan y conviene agregar

### A. Villa Navideña 2026-2027 (confirmada)
- **Fechas:** **13 de diciembre de 2026 al 6 de enero de 2027**. "Ya tenemos fecha; va a ser del 13 de diciembre al 6 de enero", según Iván Reséndiz Guerrero, secretario de Turismo municipal ([AlertaQro, 9-nov-2026](https://www.alertaqronoticias.com/2026/11/09/volvera-la-villa-navidena-a-tequisquiapan-en-diciembre/)).
- **Qué es:** villa decorada con figuras de mimbre de los artesanos, con eventos culturales y musicales, gastronomía navideña y nieve artificial ([tequis.travel](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)). En 2026 repite el tema de productos mexicanos y el carrusel de dos pisos, que es gratuito. En 2025 tuvo 700 mil visitantes, según el municipio (misma nota de AlertaQro).
- **Sede:** la nota de 2026 no la dice. En 2025 fue en la Plaza Santa Cecilia, la Plaza Miguel Hidalgo y el Parque La Pila (este último del 19 de diciembre al 2 de enero), y el árbol de mimbre se encendió el 14 de diciembre a las 20:00 en el Jardín Miguel Hidalgo ([Amanecer Qro](https://amanecerqro.com/tequisquiapan-2025-vive-la-villa-navidena-con-eventos-y-cultura/); [AlertaQro, 12-dic-2025](https://www.alertaqronoticias.com/2025/12/12/asi-se-vivira-la-navidad-en-tequisquiapan/)).
- **Organizador:** Municipio de Tequisquiapan (Secretaría de Turismo). **Gratis.**
- Es la más importante de las que faltan: dura casi un mes y cubre "eventos este fin de semana" en diciembre y enero.

### B. Festival "Estrellas y Raíces" (confirmado, 14 de noviembre de 2026)
- **Fecha y hora:** sábado **14 de noviembre de 2026**, de 12:00 a 19:00; la sesión de meditación con sonido es a las 17:30 [FRÁGIL] ([AlertaQro, 9-nov-2026](https://www.alertaqronoticias.com/2026/11/09/tequisquiapan-reunira-a-mas-de-800-personas-en-sesion-de-meditacion/)).
- **Sede:** Plaza Miguel Hidalgo. **Gratis.**
- **Qué es:** venta de artesanías locales, talleres como el de tejido de mimbre y una meditación colectiva para más de 800 personas "bajo la luz de las estrellas". La anuncian la Secretaría de Cultura del estado (Ana Paola López Birlain) y la Secretaría de Turismo de Tequisquiapan (Iván Reséndiz); la nota no dice quién la organiza.
- Es lo que hay este fin de semana y lo más cercano a la "cestería" que tenemos ahora. Es de un solo día y no sé si se repetirá, así que va con `is_recurring = false`.

### C. Fiesta de los Papalotes 2027 ([PROBABLE], febrero-marzo)
- **2026 (8.ª edición):** sábado 21 y domingo 22 de febrero y sábado 28 de febrero y domingo 1 de marzo; de 11:00 a 19:00; **$180 por adulto en taquilla; menores de 1.20 m gratis** [FRÁGIL]. Sede: **Cava Bocanegra**, Carretera Estatal 200 km 50, Fuentezuelas, Tequisquiapan. La novedad fueron los papalotes gigantes con luz al atardecer. Redes: Instagram @fiestaenelcielotequis ([Excélsior](https://www.excelsior.com.mx/cultura/fiesta-papalotes-2026-queretaro-fechas-precios-sede)).
- **Organizador:** Adolfo Barrón, según El Universal Querétaro; la Secretaría de Turismo del estado participó en el anuncio ([El Universal Qro](https://www.eluniversalqueretaro.mx/vida-q/lanzate-al-festival-del-papalote-en-tequisquiapan/); solo lo vi en el buscador). Es un evento privado y de pago.
- **2027:** sin anunciar. Las ediciones anteriores fueron en fines de semana de finales de enero a principios de marzo. [PROBABLE] dos fines de semana entre febrero y principios de marzo de 2027. [CONFLICTO]: notas de 2025 también llamaron "octava" a esa edición, que fue en marzo y costó $150.
- La Cava Bocanegra ya está investigada en `investigacion-guias-2026-11.md` (guía 2), así que la sede se puede enlazar.

### D. Temporada de vendimias ([PROBABLE], julio-agosto de 2027)
- tequis.travel: "Julio-Agosto - Fiestas de la Vendimia", en viñedos como Viña Magal, Viña TX, Vinícola Tequisquiapan y Los Rosales ([Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)).
- **Fechas de 2026 dentro del municipio de Tequisquiapan:**
  - Los Rosales, 13.ª vendimia: sábado 25 de julio, de 12:00 a 22:00, $1,300 por persona [FRÁGIL], Carr. Tequisquiapan–Ezequiel Montes km 47, El Sauz ([de-paseo](https://www.de-paseo.com/queretaro/event-pro/vendimia-los-rosales/)). **No enlazar `vinedoslosrosales.com.mx`** (dominio secuestrado; ver CLAUDE.md).
  - CR Vinos MX / Cartinto House: 8 de agosto, $1,800 [FRÁGIL] ([tequis.travel – Vinos](https://tequis.travel/vinedos_tequisquiapan/); [Escapadah](https://www.escapadah.com/tendencias/2026/7/14/calendario-de-vendimias-para-disfrutar-tus-viajes-por-queretaro-esta-temporada-41685.html)).
  - Viña Magal: 12 de septiembre, dentro del programa de Fiestas Patrias ([AlertaQro](https://www.alertaqronoticias.com/2026/09/02/ecos-de-libertad-llegara-a-tequisquiapan-del-11-al-16-de-septiembre/)).
- **Cerca, en Ezequiel Montes:** Freixenet / Sala Vivé, del 3 al 5 de julio de 2026 ([Tours Alsana](https://toursalsana.com/producto/vendimia_vinedosfreixenet_2026/); solo lo vi en el buscador); Bodegas De Cote, 7 de agosto ([decote.mx/calendario](https://decote.mx/calendario)); Cava 57 con "mini vendimias" todos los fines de semana de agosto; Viñedos Azteca, 12 de septiembre ([Escapadah](https://www.escapadah.com/tendencias/2026/7/14/calendario-de-vendimias-para-disfrutar-tus-viajes-por-queretaro-esta-temporada-41685.html)). La Redonda vendió boletos para 2026, pero tiene el conflicto legal (aviso 1 de la investigación de guías).
- **Recomendación:** un solo evento, "Temporada de vendimias", de julio a agosto de 2027, con el texto "cada viñedo pone su fecha; se anuncian en junio", en vez de una fecha por viñedo. Las vendimias son de pago, a precio de cada viñedo.

### E. Fiestas patronales comunitarias (opcional, fechas fijas del PDF municipal)
Fuente: [Principales fiestas patronales comunitarias](https://tequis.travel/wp-content/uploads/2025/10/Principales-fiestas-patronales-comunitarias.pdf), enlazado desde tequis.travel. Son fiestas de barrio o comunidad, de interés más local. Si se agrega alguna, las del centro son las únicas que un visitante encuentra sin buscarlas:

| Comunidad | Fecha | Fiesta |
|---|---|---|
| Barrio de San Juan | 25 y 26 de diciembre | San Juan Evangelista |
| Delegación Cabecera Poniente | 24 al 26 de julio | Santiago Apóstol |
| El Tejocote | 10 al 17 de mayo | San Isidro Labrador |
| San José la Laja | 18 al 20 de marzo | "En Honor a el Señor" |
| Los Cerritos | 17 al 20 de marzo | San José |
| La Fuente / El Sauz | 10 al 14 de enero / 10 al 12 de enero | Virgen de Guadalupe |
| La Tortuga, Fuentezuelas, La Laja, Hacienda Grande, Bordo Blanco | 10 al 14 de diciembre | Virgen de Guadalupe |
| Santillán | 23 al 27 de diciembre | Niño Dios |

---

## Lo que busqué y no encontré (no agregar)

- **Carnaval de Tequisquiapan**: ninguna evidencia.
- **Día de la Candelaria (2 de febrero)**: ninguna evidencia de una fiesta propia en Tequis. No sale en tequis.travel ni en el PDF municipal.
- **Fiesta de San Juan Bautista (24 de junio)**: ninguna evidencia. La fiesta del **Barrio de San Juan** es a **San Juan Evangelista**, el 25 y 26 de diciembre (PDF municipal), y la del 3 de mayo es la Santa Cruz. SECTUR pone el 24 de junio como fecha de la fundación ([sectur.gob.mx](https://www.sectur.gob.mx/gobmx/pueblos-magicos/tequisquiapan-queretaro/)), pero eso choca con todo lo demás (ficha 3).
- **Festivales del Parque La Pila**: La Pila no tiene festivales propios; es sede del Festival del Queso y Vino, del cine de Enamórate, de la Villa Navideña y de conciertos. Ver además el aviso 5 de `investigacion-guias-2026-11.md` sobre su estado después de la inundación de 2025.
- **"Festival Aniversario del Pueblo Mágico" (octubre)**: tequis.travel lo lista sin descripción ([Fiestas y Eventos](https://tequis.travel/fiestas_y_eventos_tequisquiapan/)) y no encontré ninguna edición con fecha. El nombramiento fue el 17 de octubre de 2012.
- **Fiesta en el Aire 2025 o 2026**: ninguna (ver ficha 15).
- **Ediciones 2027 de cualquier evento**: a la fecha de consulta, **el municipio no ha anunciado ninguna**. Lo único confirmado hacia adelante es la Villa Navideña (13-dic-2026 al 6-ene-2027) y Estrellas y Raíces (14-nov-2026).

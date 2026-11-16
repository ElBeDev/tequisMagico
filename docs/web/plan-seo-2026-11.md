# Plan SEO con datos de Search Console (16 nov 2026)

Diagnóstico de `tequismagico.com` con los datos de Google Search Console y plan de trabajo. Cada tarea dice qué se cambia, dónde y cómo comprobarlo. El estado de cada tarea se actualiza en este archivo conforme se hace.

## 0. Acceso al API

- **Cuenta de servicio:** `tequismagico@tequis-magico.iam.gserviceaccount.com`, del proyecto `tequis-magico` de Google Cloud. El API de Search Console está activado.
- **Permiso en Search Console:** propietario de la propiedad `sc-domain:tequismagico.com`.
- **Llave:** `~/.config/tequis/gsc-key.json` en la Mac de trabajo, fuera del repo y con permisos 600. **No va en el repo**, igual que el token del DENUE.
- **Qué permite:** leer rendimiento (búsquedas, páginas, países, dispositivos), inspeccionar URLs (hasta 2,000 al día) y ver o reenviar sitemaps.
- **Qué no permite:** pedir indexación ni validar correcciones del reporte "Indexación de páginas". Eso sigue siendo manual en la consola.

## 1. Diagnóstico

Los datos van del 3 al 15 de noviembre de 2026. Antes de eso Search Console no tiene nada, así que es una foto temprana.

### Números generales

| Indicador | Valor |
|---|---|
| Apariciones en Google (13 días) | 3,112 |
| Clics | 32 (CTR 1.0 %) |
| Posición promedio | 13.8 |
| Apariciones por día | de 18 (3 nov) a 706 (14 nov) |
| Posición diaria | de ~21 a 10.5 |
| Celular | 2,207 apariciones, posición 8.5 |
| Computadora | 891 apariciones, posición 27.2. La jalan hacia abajo las búsquedas de traslados en inglés |
| Países | México 90 %, Estados Unidos 4 % |

### Indexación

Se inspeccionaron 26 URLs clave con el API. Todas las que deben estar en Google están en "Enviada e indexada" y Google respeta nuestra canónica: portada, categorías, páginas por tipo y por necesidad, guías, `/eventos`, `/guia-practica`, fichas y `/en`.

El sitemap no tiene errores ni advertencias (294 URLs). El campo "indexadas: 0" que devuelve el API de sitemaps ya no lo llena Google, así que no significa nada; la inspección URL por URL es la fuente buena.

Los 404 que aparecen son esperados:
- **Spa Azteca:** lugar falso de la carga inicial, dado de baja.
- **Festival del Globo y Festival del Vino Joven:** eventos sin fuente, dados de baja el 9 nov.
- **`/lugares/experiencias/globo`:** tipo con menos de 2 lugares (`MIN_PLACES`).

### Por tema

| Tema | Apariciones | Posición media | Clics |
|---|---|---|---|
| Hoteles (alberca, pet friendly, spa, centro…) | 313 | 14.7 | 2 |
| Balnearios y aguas termales | 225 | 14.5 | 0 |
| Traslados CDMX ↔ Tequis (inglés) | 167 | 61.1 | 0 |
| Restaurantes y comida | 158 | 11.7 | 1 |
| Viñedos y vino | 112 | 17.2 | 1 |
| Plaza, mercados, artesanías | 91 | 11.2 | 0 |
| Eventos | 84 | 8.4 | 0 |

### Hallazgos

1. **Fichas en la primera página que no reciben clics.** Plaza Miguel Hidalgo (95 apariciones, posición 6.4), Balneario La Vega (77, 8.4), Mercado Guadalupano (50, 5.0), Parador Artesanal (42, 7.7) y Pizzas Don Rigo (30, 5.9) tienen cero clics. Su descripción en Google es una línea genérica: "Corazón del pueblo mágico. Plaza en Tequisquiapan, Querétaro." No dice qué trae la ficha (precios, teléfono, fotos, cómo llegar). En búsquedas del nombre de un negocio, Google enseña su ficha de Maps y el CTR siempre será bajo, pero una descripción concreta ayuda. La gente busca "fotos de balneario la vega", y la ficha sí las tiene.
2. **La Pila está duplicada.** "La Pila" (monumento) y "Parque La Pila" (parque) tienen la misma dirección (Ezequiel Montes 29) y las mismas coordenadas. Google reparte la señal y "parque la pila" se queda en la posición 13 (34 apariciones). La pila de 1567 está dentro del parque y le da su nombre: es el mismo sitio.
3. **Datos sin fuente en sitios turísticos clave.** Las descripciones de la Plaza Miguel Hidalgo y del Parque La Pila son de la carga inicial y traen cosas que ninguna fuente confirma: "WiFi gratuito", "baños públicos cercanos", "fuente ornamental", "juegos infantiles, canchas, zona de picnic" y "limpio y bien mantenido". Del parque, El Sol de San Juan del Río publicó "Parque La Pila está en ruinas" en nov 2025. `docs/datos/investigacion-guias-2026-11.md` ya tiene los datos con fuente.
4. **"Aguas termales" no aparece en la página de balnearios.** "aguas termales tequisquiapan" y "aguas termales en tequisquiapan" están en la posición 20 a 22 y caen en `/lugares/experiencias/balnearios`, que no usa esas palabras. El Oasis sí tiene agua termal a 36 °C, según su web.
5. **"Eventos en Tequisquiapan este fin de semana"** tiene 17 apariciones en la posición 8.6 y cero clics. `/eventos` agrupa "Está pasando / Próximos / Ya pasaron", pero no dice qué hay este fin de semana. Además, su descripción en Google todavía anuncia el Festival del Globo, que se dio de baja.
6. **Viñedos se reparte entre 7 páginas.** "viñedos tequisquiapan" (13 apariciones) sale en la posición 23 a 98 con la guía, la categoría, De Cote, Azteca, Norte B y la ruta. La página que debe ganar es `/lugares/experiencias/vinedos` (posición 20).
7. **"restaurantes en tequisquiapan"** está en la posición 22.9 en `/lugares/gastronomia`. Es la búsqueda más competida (TripAdvisor, Google Maps) y la que más tarda.
8. **Feria del Queso y Vino 2027: ya resuelto.** La ficha de un evento anual que ya pasó no lleva el año en el título y dice que las fechas de 2027 no se han anunciado (`generateMetadata` de `app/[lang]/evento/[slug]/page.tsx`). Google ya la pone en la posición 1 para "feria del vino y el queso 2027". Las 13 apariciones que caen en el Vino Joven (404) se irán solas. Solo hay que vigilarlo.

### Lo que no se persigue

- **Traslados CDMX ↔ Tequis en inglés** ("shuttle from mexico city to tequisquiapan", 167 apariciones en la posición 60 a 80): buscan una empresa que venda el viaje. `/en/travel-tips` ya explica cómo llegar; competir por esas búsquedas no tiene sentido sin un servicio real.
- **"festival del globo 2027"** (45 apariciones): la gente busca el Festival Internacional del Globo de León. En Tequis no hay festival en esas fechas (ver `docs/datos/investigacion-eventos-2027.md`). El 404 es correcto.
- **Búsquedas por nombre de negocio** (Madre Selva, Il Sapore, Cabañas Gil…): ahí gana la ficha de Google Maps del negocio. No se forzará nada.

## 2. Plan

### Fase 1: datos (SQL en el VPS + traducciones)

Archivo: `database/databasefix_seo_2026-11-16.sql`, con respaldo previo de `places` en `/root/respaldos/`.

| # | Tarea | Detalle | Estado |
|---|---|---|---|
| 1.1 | Unir La Pila con Parque La Pila | Soft-delete de "La Pila" (`7ac9dd61-…`). Redirección `la-pila → parque-la-pila` en `web/lib/redirects.ts`. Las guías que nombran "La Pila" (`guides.ts` y `guides-en.ts`, guía "fin de semana") pasan a "Parque La Pila" | Hecho (aplicado el 16 nov) |
| 1.2 | Descripción con fuente del Parque La Pila | Pila de agua de 1567 en el antiguo molino; sede tradicional de la Feria del Queso y Vino (2026 incluido); Villa Navideña 2025 y Expo Cactus; junto al río, se inundó en 2021 y 2025. Se quitan amenidades sin fuente. Fuentes: tequis.travel – Históricos, Excélsior 2026, AlertaQro, Al Minuto, Uno TV | Hecho (aplicado el 16 nov) |
| 1.3 | Descripción con fuente de la Plaza Miguel Hidalgo | Portales de cantera, quiosco de principios del siglo XX, sabinos y fresnos, dulces y nieves artesanales, abierta las 24 h; frente a la Parroquia; sede del Grito, Año Nuevo y Villa Navideña. Se quitan "WiFi gratuito", "baños cercanos" y "fuente ornamental" | Hecho (aplicado el 16 nov) |
| 1.4 | Traducciones | `web/lib/i18n/data-en.ts` con los textos nuevos de 1.2 y 1.3; se quita la entrada de La Pila | Hecho |

### Fase 2: código en `web/`

| # | Tarea | Detalle | Estado |
|---|---|---|---|
| 2.1 | Meta description de las fichas | `app/[lang]/lugar/[slug]/page.tsx`: después de la descripción corta, decir qué trae la ficha, solo si es cierto: precios (si la descripción los da), teléfono, horario, fotos propias del negocio, mapa y cómo llegar. Ejemplo: "Balneario familiar con alberca olímpica, abierto toda la semana. Balneario en Tequisquiapan, Querétaro: precios, teléfono, fotos, mapa y cómo llegar." | Hecho |
| 2.2 | Balnearios y aguas termales | `web/lib/tipos.ts` (`balnearios`): título "Balnearios y aguas termales en Tequisquiapan" y descripción que mencione el agua termal. En inglés ya dice "hot springs" | Hecho |
| 2.3 | "Este fin de semana" en `/eventos` | Grupo nuevo arriba con los eventos que caen entre el viernes y el domingo de esta semana (o del próximo fin de semana si hoy es lunes a jueves). Si no hay ninguno, lo dice y enlaza a la guía "Un fin de semana en Tequis". Título y descripción con "este fin de semana" | Hecho |
| 2.4 | Descripción de `/eventos` | Quitar el Festival del Globo (dado de baja) y nombrar eventos que sí están en el calendario | Hecho |

### Fase 3: enlaces internos (viñedos y restaurantes)

| # | Tarea | Detalle | Estado |
|---|---|---|---|
| 3.1 | Viñedos: una página principal | La introducción de la guía `vinedos-y-quesos` enlaza a `/lugares/experiencias/vinedos` con el texto "viñedos en Tequisquiapan y Ezequiel Montes", también en inglés. La ruta `vino-y-queso` no tiene texto donde ponerlo: solo lista lugares. Los títulos no compiten: la guía es "Viñedos y queserías cerca de Tequis" y la categoría, "Viñedos cerca de Tequisquiapan: recorridos y catas" | Hecho |
| 3.2 | Restaurantes | La introducción de la guía "Qué comer en Tequis" enlaza a `/lugares/gastronomia/restaurantes` con el texto "restaurantes en Tequisquiapan", también en inglés. La portada no se tocó: ya enlaza a la categoría desde el menú | Hecho |

### Fase 4: reporte semanal

| # | Tarea | Detalle | Estado |
|---|---|---|---|
| 4.1 | Script de reporte | `deploy/gsc-report.mjs`, en Node y sin dependencias. Lee la llave de `GSC_KEY` o de `~/.config/tequis/gsc-key.json` y saca en Markdown: totales por semana, búsquedas top, búsquedas en posición 4–20 (las que casi llegan), páginas en la primera página sin clics y estado de indexación de una lista de URLs clave | Hecho |
| 4.2 | Documentar | Cómo correrlo en `deploy/README.md` y un punto en `CLAUDE.md` | Hecho |

### Fase 5: aplicar y desplegar

| # | Tarea | Detalle | Estado |
|---|---|---|---|
| 5.1 | Build local | `npm run build` en `web/` sin errores | Hecho |
| 5.2 | Aplicar SQL | Respaldo de `places` y luego `databasefix_seo_2026-11-16.sql` en el VPS. Primero el SQL y luego el despliegue: así el build ya no genera la ficha de La Pila | Hecho: respaldo en `/root/respaldos/places-20261116-seo.sql` |
| 5.3 | Desplegar | `deploy/deploy.sh web` | Hecho (16 nov) |
| 5.4 | Comprobar en vivo | `/lugar/la-pila` da 308 a `/lugar/parque-la-pila`; títulos y descripciones nuevos en el HTML; `/eventos` con el bloque del fin de semana | Hecho: títulos y descripciones nuevos en vivo; `/lugar/la-pila` y `/en/place/la-pila` dan 308; La Pila ya no está en el sitemap |
| 5.5 | Bitácora | Entrada en `docs/web/bitacora.md` | Hecho (sección 18) |

## 3. Cómo medir

Correr `node deploy/gsc-report.mjs` cada semana y comparar contra la línea base de abajo. Google tarda de 2 a 4 semanas en reflejar cambios de título y descripción. No se juzga nada antes del **7 de diciembre de 2026**.

| Búsqueda o página | Línea base (3–15 nov) | Meta al 7 dic |
|---|---|---|
| Sitio completo | 3,112 apariciones, 32 clics, CTR 1.0 %, posición 13.8 | CTR ≥ 2 % |
| Plaza, La Vega, Mercado, Parador | 264 apariciones, 0 clics | ≥ 5 clics |
| "parque la pila" | posición 13.0 | ≤ 8 |
| "aguas termales tequisquiapan" | posición 20–22 | ≤ 12 |
| "eventos en tequisquiapan este fin de semana" | posición 8.6, 0 clics | ≥ 1 clic |
| "viñedos tequisquiapan" | posición 23, repartida en 7 páginas | ≤ 15, en `/lugares/experiencias/vinedos` |

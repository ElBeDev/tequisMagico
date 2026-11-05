# Plan del sitio web público — tequismagico.com

> Estado: **en línea en https://tequismagico.com** (noviembre 2026). Tres referencias, cada una para algo distinto:
> - **Estética y animaciones:** https://turismo.gov.st/fr (fondo hueso, verde olivo, Outfit + Gilda Display, portada a pantalla completa, GSAP).
> - **Presentación de la información** (desde el 2 nov 2026): https://www.visitshropshire.co.uk/ (header con buscador y mega menú, "Explora" con lista + mapa, "Mi viaje", destacado, pueblos cercanos).
> - **Reglas de diseño** (desde el 2 nov 2026): tasteskill v2, https://www.tasteskill.dev/, para que la página no se vea hecha por IA (ver §6c).
> Contexto de negocio: [`../negocio/propuesta-sitio-web.md`](../negocio/propuesta-sitio-web.md).
> Registro de cómo se hizo (separación, dominio, despliegues, diseño, problemas y arreglos): [`bitacora.md`](bitacora.md).

---

## 1. Qué es y cómo se relaciona con la app

- **Mismo nombre, mismos datos.** La web y la app iOS leen del mismo API (`GET /api/places` y `GET /api/events` de `web-admin/`). Lo que se edita en el panel aparece en las dos.
- **El panel sigue siendo el único lugar donde se edita.** La web es solo lectura.
- **Cada una tiene su momento:** la web sirve **antes del viaje** (Google, links por WhatsApp, Android) y la app **durante el viaje** (cerca de mí, favoritos, sin conexión).

```
                 ┌──────────────┐
                 │  PostgreSQL  │
                 └──────┬───────┘
                 web-admin/ (panel + API)
          ┌─────────────┴──────────────┐
      App iOS                        web/
  (sync al abrir)         (se regenera cada 5 min)
```

## 2. Estructura del repo

```
tequisMagico/
├── Tequis Magico/   App iOS
├── web-admin/       Panel + API  → panel.tequismagico.com (privado)
├── web/             Sitio público → tequismagico.com
├── database/        Esquema, seeds y copia de los datos
├── deploy/          Configuración del servidor
└── docs/
```

`web/` es otro proyecto de Next.js, independiente del panel. Tiene su propio `package.json` y corre como su propio servicio en el VPS.

---

## 3. Mapa del sitio

| Ruta | Página | Para qué |
|---|---|---|
| `/` | Portada | Entrada principal; captura búsquedas tipo "Tequisquiapan" |
| `/lugares` | Todos los lugares | Directorio completo |
| `/lugares/[categoria]` | Lugares por categoría | "restaurantes en Tequisquiapan", "hoteles en…" |
| `/lugar/[slug]` | Ficha de un lugar | **La página que vende**: una por negocio, indexable |
| `/eventos` | Calendario de eventos | En curso, próximos y pasados |
| `/evento/[slug]` | Ficha de un evento | "Feria del Queso y Vino 2027", etc. |
| `/rutas` | Rutas temáticas | Las 4 rutas de la app |
| `/rutas/[ruta]` | Detalle de una ruta | Paradas en orden y mapa |
| `/mapa` | Mapa completo | Todos los lugares con filtro por categoría |
| `/por-que-tequis` | Por qué Tequis | Pueblo Mágico, origen del nombre, historia (línea de tiempo), patrimonio, cestería, queso y vino, Peña de Bernal |
| `/guia-practica` | Guía práctica | Cómo llegar (auto y autobús), cuándo ir (clima y temporadas), información útil y teléfonos |
| `/guias` y `/guias/[slug]` | Guías de viaje | Fin de semana, viñedos y queserías, Tequis con niños, Peña de Bernal (contenido en `web/lib/guides.ts`) |
| `/app` | La app | Qué ofrece la app y cómo descargarla |
| `/creditos` | Créditos de fotos | Obligatorio por las licencias CC |
| `/privacidad`, `/terminos` | Legales | Aviso de privacidad (LFPDPPP) y términos |
| `/sitemap.xml`, `/robots.txt` | Para Google | Se generan solos (el sitemap trae las dos versiones de cada página con `hreflang`) |
| `/en/...` | Versión en inglés | Todas las páginas, con rutas en inglés: `/en/places`, `/en/place/[slug]`, `/en/events`, `/en/routes`, `/en/map`, `/en/why-tequis`, `/en/travel-tips`, `/en/guides`, `/en/my-trip`, `/en/app`, `/en/credits`, `/en/privacy`, `/en/terms` |

Categorías (mismos códigos que la app): `sitios-turisticos`, `experiencias`, `gastronomia`, `hospedaje`, `compras` (y `eventos`, `rutas`, que hoy no tienen lugares).
Rutas: `vino-y-queso`, `artesanal`, `historica`, `aventura`.

---

## 4. Contenido de cada página

Esto es **qué va** en cada página. El **cómo se ve** está en las secciones 6b y 6c.

### Elementos comunes
- **Header en dos pisos** (`web/components/SiteNav.tsx`). Arriba: logo, buscador, "Mi viaje" (con el número de guardados) y "Explorar mapa". Abajo, en escritorio: 8 secciones (Qué hacer, Comer y beber, Dónde dormir, Compras, Eventos, Rutas, ¿Por qué Tequis?, Guía práctica). Es transparente sobre la foto en la portada, `/por-que-tequis` y `/guia-practica`, y se esconde al bajar.
- **Mega menú:** al pasar el mouse por una sección se abre un panel con columnas de links y una tarjeta destacada con foto. Se arma con los datos reales en `web/lib/nav.ts`: subcategorías con su conteo (llevan a `/lugares/<categoria>?tipo=<subcategoría>`), próximos eventos y rutas. La tarjeta de Qué hacer / Comer / Dormir es un lugar destacado **con información confirmada**.
- **Buscador** (`web/components/SearchDialog.tsx`): lugares, eventos y páginas, al instante mientras escribes; se abre con el botón, con `/` o con ⌘K. El índice se arma en el servidor (`web/lib/search.ts`) y la búsqueda corre en el navegador.
- **En celular:** buscador y corazón arriba; las secciones van en el menú verde a pantalla completa.
- **Footer** (verde bosque, en `web/app/layout.tsx`): título "¿Tienes un negocio en Tequis?" con botón de correo a `hola@tequismagico.com`, columnas de links (Explora, Útil), texto de la app, legales, la palabra gigante "Tequisquiapan" en salvia y la nota "Guía independiente; no es un sitio oficial del municipio".
- **Datos del header:** el layout pide lugares y eventos al API para armar el menú y el índice del buscador. Si el API falla, el header sale sin datos en vez de romper la página.

### Portada `/`
En orden, todo en `web/app/page.tsx`:
1. **Hero** (`Hero`): h1 "Tequisquiapan" en grande y "Pueblo Mágico de Querétaro, a dos horas de la Ciudad de México", seguido de una frase que rota con cada foto ("La promesa de un pueblo de cantera", "…de un amanecer en globo", etc.). 5 fotos; las barras de abajo marcan el avance y sirven para cambiar de foto. Botones "¿Qué hay este mes?" y "Qué hacer".
2. **Banda ocre del evento** (`EventStrip`): el que está pasando o el próximo, con "Ver evento" y "Todo el calendario".
3. **Bienvenidos a Tequis** (`Intro`): texto, botón "Inspírame" y tres puertas en arco (Qué hacer, Dónde comer, Dónde dormir) con su número de lugares, a distintas velocidades de parallax.
4. **Explora Tequis** (`ExploreTequis`, campo verde bosque): pestañas por tipo, a la izquierda un índice de guía impresa (nombre en Gilda, miniatura en arco, tipo y precio; 8 y "Cargar más") y el mapa real fijo a la derecha; pasar el cursor por un renglón agranda su pin. En celular se cambia entre lista y mapa.
5. **Destacado** (`Featured`, campo salvia): un lugar `is_featured` **y** `content_verified`; cambia cada día entre los que haya.
6. **Fiestas y eventos:** el próximo evento en grande y los siguientes en lista, con la fecha grande a la izquierda.
7. **Un pueblo de agua, cantera y mimbre:** palabras grandes (Historia, Cestería, Queso & vino, Peña de Bernal) que llevan a `/por-que-tequis`; el fondo cambia a salvia.
8. **Experiencias** (`Activities`): Viñedos, Queserías, Globo, Balnearios y Cestería, cada una con foto (banda verde fija).
9. **Rutas y guías** (campo ocre): las rutas y las guías en tarjetas de arco para arrastrar.
10. **Mapa** (`MapStory`): México → Tequis → mapa real del pueblo con todos los lugares; botones "Explorar el mapa" y "Cómo llegar".
11. **Cerca de Tequis** (`Surroundings`, datos en `web/lib/surroundings.ts`): Peña de Bernal, Ezequiel Montes, Cadereyta, San Juan del Río y Querétaro, con foto, distancia aproximada y "Cómo llegar", junto a un esquema de carreteras con anillos de 15 y 30 km.
12. **La app** (`AppInvite`, paso de tono `surface`): invitación con fotos en parallax. Es el único bloque centrado del sitio.

### Mi viaje `/mi-viaje`
Lo que la persona guardó con el corazón (tarjetas de lugar y evento, fichas). Se guarda **solo en su navegador** (`localStorage`, `web/lib/favorites.ts`), igual que los favoritos de la app viven solo en el teléfono. Muestra lugares y eventos, el mapa de los lugares y "Abrir ruta en Google Maps" (hasta 10 paradas, en el orden en que se guardaron). No se indexa.

### Lugares `/lugares` y `/lugares/[categoria]`
1. Título y descripción de la categoría.
2. Filtros de categoría. Cada filtro es un link a su propia página, para que Google la indexe.
3. Filtro por tipo (subcategoría) con `?tipo=`, y cambio entre lista y mapa (`web/components/PlaceExplorer.tsx`). La página lo envuelve en `<Suspense>` con la cuadrícula completa de respaldo: eso es lo que trae el HTML del servidor.
4. Cuadrícula de tarjetas de lugar.

**Tarjeta de lugar** (`PlaceCard` en `web/components/Cards.tsx`): foto recta con la subcategoría encima, corazón para guardar, nombre, descripción corta, categoría y precio. Toda la tarjeta es el link (sin "Ver detalles").

### Ficha de lugar `/lugar/[slug]`
1. Migas de pan (Lugares / Categoría).
2. Galería de fotos (1 a 3).
3. Categoría, nombre, subcategoría, precio, insignia **Verificado** (`is_verified`) e indicador **Abierto ahora / Cerrado** (calculado del horario).
4. Descripción corta y descripción completa.
5. Servicios (`amenities`).
6. Horarios por día.
7. Mapa de ubicación.
8. **Caja de contacto**: dirección, teléfono, WhatsApp, sitio web, correo y botón **Cómo llegar**.
9. Aviso **"Información por confirmar"** cuando `content_verified = false`.
10. Etiquetas (`tags`).
11. **Cerca de aquí**: los 3 lugares más cercanos.

### Eventos `/eventos`
Tres grupos, igual que en la app: **En curso**, **Próximos** y **Ya pasaron**.

**Evento en lista** (`EventCard`): renglón con el día grande, el mes, título, estado, fechas, lugar y foto. **Evento con foto grande** (`EventTile`): el primero de la agenda y los de "Mi viaje".

### Ficha de evento `/evento/[slug]`
1. Foto.
2. Categoría y título.
3. Aviso de estado: "ya pasó, se repite cada año" o "está pasando ahora".
4. Datos: fechas, lugar, precio o entrada libre, si requiere reservación, si se repite cada año y organizador.
5. Descripción.
6. Botón de boletos, si hay link.
7. Mapa y "Cómo llegar".

### Rutas `/rutas` y `/rutas/[ruta]`
Lista de las rutas. En el detalle: paradas numeradas (foto, nombre, subcategoría) y un mapa con las paradas.

### Mapa `/mapa`
Mapa con todos los lugares, filtros por categoría y una ventana al tocar cada punto con link a la ficha.

### App `/app`
Funciones de la app (cerca de mí, mapa, favoritos, sin conexión, Spotlight/Siri), estado de "Muy pronto en el App Store" y un link para usuarios de Android.

---

## 5. Datos disponibles para el diseño

Lo que se puede mostrar sin tocar la base. Útil para que el diseño no pida campos que no existen.

**Lugar:** nombre, categoría, subcategoría, descripción corta y completa, precio (`Gratis`, `$` … `$$$$`), fotos (lista), dirección, coordenadas, teléfono, WhatsApp, sitio web, correo, horario por día (texto libre), servicios, etiquetas, destacado, verificado, info confirmada.

**Evento:** título, descripción corta y completa, fecha de inicio y fin, se repite (sí/no), lugar y dirección, coordenadas, categoría, etiquetas, fotos, gratis o precio, link de boletos, requiere reservación, organizador.

**No existen todavía** (requerirían cambios en la base y el panel): textos en inglés, slug guardado en la base (hoy se deriva del nombre), estadísticas de vistas o clics, reseñas reales.

**Decidido no mostrar:** `rating` y `reviews_count`. Son datos de la carga inicial, no reseñas reales, y publicarlos en una web indexada sería presentar reseñas inventadas como reales. La app sí los muestra hoy; conviene quitarlos ahí también o reemplazarlos con reseñas reales.

---

## 6. Comportamiento (independiente del diseño)

- **Actualización:** las páginas se regeneran cada 5 minutos (ISR). Un cambio en el panel tarda como máximo eso en verse.
- **Lugares nuevos:** tienen página automáticamente.
- **Lugares desactivados:** dejan de aparecer.
- **"Abierto ahora":** se calcula en el navegador con la hora de Tequisquiapan. Si el horario no se puede interpretar (por ejemplo, horarios de misa), no se muestra.
- **Estado de eventos:** se calcula por fecha (zona `America/Mexico_City`).
- **SEO:**
  - Título y descripción por página.
  - Datos estructurados de schema.org: `Restaurant`, `Hotel`, `Winery`, `Event`, etc.
  - Migas de pan, `sitemap.xml` y URL canónica.
  - **Imagen para compartir** (`web/app/opengraph-image.tsx`): 1200×630 con "Tequisquiapan" en Gilda y la parroquia en arco, generada en el build. Las fichas de lugar y evento usan su propia foto.
  - Teléfono y horario solo van a los datos estructurados cuando `content_verified = true`.
- **Fotos:** hotlink a Wikimedia Commons, igual que en la app, y fotos reales de negocios en nuestro servidor. Cada `<img>` toma sus atributos de `photoAttrs` (`web/lib/images.ts`): las de Commons llevan `srcset` con los anchos estándar de Wikimedia (500/960/1280/1920) y `crossOrigin="anonymous"` (sin la cookie de Wikimedia); las de los hosts de `OPTIMIZED_HOSTS` (sitios de negocios y Vercel Blob) pasan por el optimizador de Vercel. En celular, la portada bajó de 7.2 MB a 2.7 MB.
- **Analítica:** ninguna desde el 5 nov 2026. La de Vercel solo funcionaba en Vercel y se quitó, junto con su mención en el aviso de privacidad. Search Console sigue activo.
- **Mapas:** MapLibre GL con teselas vectoriales de OpenFreeMap, sin API key ni costo, recoloreadas con la paleta del sitio (`web/lib/mapStyle.ts`). Muestran el crédito de OpenFreeMap/OpenStreetMap. En los mapas chicos la rueda del mouse sigue bajando la página; para acercar se usa ctrl/⌘ + rueda o dos dedos. En `/mapa` la rueda sí acerca.

---

## 6b. Animación e interacción

Inspirada en lo que hace la referencia, que usa GSAP + ScrollTrigger + Lenis. En la portada:

- **Portada:** las fotos entran como cortina, la frase que rota entra letra por letra, las barras de abajo marcan el avance (y se pueden tocar) y hay parallax al bajar.
- **Bienvenidos:** las tres puertas en arco suben a distintas velocidades.
- **Explora Tequis:** la lista y el mapa están sincronizados; al pasar por una tarjeta su pin crece.
- **Palabras grandes:** una foto sigue al cursor, y el fondo pasa de hueso a verde salvia.
- **Experiencias:** la banda verde se queda fija y el scroll va cambiando de experiencia (en celular, flechas o deslizar).
- **Rutas:** carrusel que se arrastra con inercia.
- **Mapa:** se queda fijo mientras termina de dibujarse México (arranca relleno con el paso de tono y un tercio del contorno trazado). Aparecen Ciudad de México y Querétaro con su distancia y una línea punteada a Tequis, y al hacer zoom se abren hasta salir del encuadre. Al terminar el zoom, el dibujo se funde con el mapa real de calles, alineado al mismo encuadre, y caen los pines. Cada pin muestra la foto del lugar al pasar el mouse y lleva a su ficha.
- **Cerca de Tequis:** el esquema de carreteras se dibuja al bajar.
- **Corazón:** al guardar, el corazón late una vez.

En todo el sitio hay scroll suave, textos y fotos que se revelan al entrar, cursor con etiqueta, header que se esconde al bajar y un menú que abre como cortina. Con "reducir movimiento" activado no se anima nada y todo se ve.

## 6c. Diseño visual

Desde el 2 nov 2026 el diseño sigue las reglas "anti-IA" de tasteskill v2 (https://www.tasteskill.dev/): se quitó todo lo que hace que una página se vea generada y se dejó la idea que sale del lugar, el arco de los portales.

- **Colores** (variables en `web/app/globals.css`): fondo hueso `#eeedea`, tinta `#141412`, un paso de tono `--surface` para separar sin líneas, y campos planos de orilla a orilla: verde `#38492a`, verde bosque `#1f2a1a`, salvia `#a3ad94` y ocre de los portales `#d9a63e`. **Sin terracota ni cremas** (son los colores de las páginas hechas por IA).
- **Tipografías:** Gilda Display para **todos** los títulos, y Outfit para el texto. Cada título va en una sola cara: sin etiqueta en mayúsculas arriba ni remate en otra tipografía. Hay seis tamaños (`--step-small/body/lead/title/head/display`, clases `text-lead`, `text-title`, `.heading`, `.display`; `title` es para títulos de tarjeta, fechas y citas). Fuera de la escala solo quedan el nombre gigante de la portada y el logo, con el interletrado cerrado en los grandes y dos renglones como máximo por título.
- **Títulos:** `SectionTitle` (título + frase de apoyo opcional) y `PageIntro` en `web/components/Section.tsx`, alineados a la izquierda. Solo hay un momento centrado en la portada (la app).
- **Marco:** un solo par de márgenes en todo el sitio (`.frame`, `--margin`, 20–48 px, máximo 1600 px).
- **Fotos:** el arco de medio punto (`ArchPhoto`, `web/components/Frame.tsx`) es la única forma; las demás fotos van con esquinas rectas. Sin sombras ni contornos.
- **Botones:** planos y redondos. `.btn` (tinta) es el principal; `.btn-outline` es un paso de tono sobre lo que tenga detrás (en realidad ya no lleva contorno). Sin sombras en nada que esté en reposo, sin líneas divisorias, sin desenfoque, sin numeración 01/02 y sin "ver detalles" en tarjetas que ya son link.
- **Pines del mapa:** gota del color de la categoría con borde blanco. Al tocarla abre una ventana con foto, nombre y "Ver lugar →".

## 6d. Cómo está hecho (dónde está cada cosa)

| Qué | Dónde |
|---|---|
| Lectura del API, tipos, slugs, categorías, rutas, fechas | `web/lib/data.ts` |
| Horarios, "abierto ahora" y horario para schema.org | `web/lib/schedule.ts` |
| Fotos editoriales con autor y licencia | `web/lib/photos.ts` |
| Menú y mega menú (secciones, subcategorías, tarjeta destacada) | `web/lib/nav.ts` |
| Índice del buscador | `web/lib/search.ts` |
| "Mi viaje" (favoritos en `localStorage`) | `web/lib/favorites.ts` |
| Pueblos cercanos (distancias y coordenadas) | `web/lib/surroundings.ts` |
| Contorno de México para el mapa animado (generado con d3-geo, Mercator) | `web/lib/mexico-outline.ts` |
| Carga de MapLibre y estilo del mapa | `web/lib/mapStyle.ts` |
| Registro de GSAP y utilidades de movimiento | `web/lib/motion.ts` |
| Scroll suave, revelados por atributo y cursor | `web/components/motion/` |
| Header, mega menú y menú de celular | `web/components/SiteNav.tsx` |
| Buscador | `web/components/SearchDialog.tsx` |
| Corazón para guardar | `web/components/SaveButton.tsx` |
| Página "Mi viaje" (lista, mapa y ruta) | `web/components/TripPlanner.tsx` |
| Listados con filtro `?tipo=` y lista/mapa | `web/components/PlaceExplorer.tsx` |
| Tarjetas de lugar y evento | `web/components/Cards.tsx` |
| Títulos de sección e intro de página | `web/components/Section.tsx`, `PageHero.tsx` |
| Secciones de la portada | `web/components/Hero.tsx`, `Activities.tsx` y `web/components/home/` |
| Mapa de lugares (fichas, rutas, `/mapa`) | `web/components/PlacesMap.tsx` |
| Marco en arco | `web/components/Frame.tsx` |

Las páginas son Server Components y se animan **por atributos** (`data-reveal`, `data-split`, `data-parallax`, `data-draw`, `data-cursor`). Las trampas técnicas (worker de MapLibre, transiciones de Tailwind contra GSAP, secciones fijas) están en `CLAUDE.md`.

**Dependencias principales:**
- Next.js 16.3 y React 19.2
- Tailwind 4
- GSAP 3.15 y `@gsap/react`
- Lenis 1.3
- MapLibre GL 6.16
- lucide-react

## 7. Contenido editorial y fotos

- Los textos de `/por-que-tequis`, `/guia-practica` y la portada salen de una investigación con fuentes (Wikipedia, tequis.travel, gob.mx/Sectur, INEGI, queretaro.travel, prensa), noviembre 2026. Donde las fuentes no coinciden, el texto se queda con lo que sí coincide:
  - **Día de la fundación:** se dice "1551", sin día. Las fuentes oficiales dan 24 de junio, 24 de julio o 25 de julio.
  - **Centro geográfico:** se presenta como "decretado por Carranza en 1916", aclarando que el centro geográfico real está en Zacatecas.
  - **Número de edición de la Feria del Queso y el Vino:** no se cita; las fuentes no cuadran.
  - **Presa Centenario:** no se presenta como atractivo estable, porque su nivel cambia mucho de un año a otro.
- Las fotos editoriales son 28 de Wikimedia Commons, con autor y licencia verificados uno por uno: 16 de Tequis, 4 de los pueblos cercanos (Cadereyta, Ezequiel Montes, San Juan del Río y el acueducto de Querétaro) y las 8 genéricas de la base. Viven en `web/lib/photos.ts` y aparecen solas en `/creditos`.
- Lo que **no** se usó de tequis.travel: ni textos ni fotos (es el sitio oficial del municipio). Solo se consultó como fuente de datos.

## 8. Despliegue y dominio

- **Servidor:** VPS `72.60.173.175`; ver [`../../deploy/README.md`](../../deploy/README.md). Se despliega con `deploy/deploy.sh web`, y `NEXT_PUBLIC_SITE_URL=https://tequismagico.com` está en `/etc/tequis/web.env`.
- **Dominios:** `tequismagico.com` y `www.tequismagico.com` (redirige con 301 al dominio sin www) y `panel.tequismagico.com`.
- **Registro:** comprado en Hostinger el 1 nov 2026; **vence el 2 nov 2027**.
- **DNS en Hostinger:** `A @ → 72.60.173.175`, `A panel → 72.60.173.175` y `CNAME www → tequismagico.com.`. Además hay un `TXT @` con `google-site-verification=…` (2 nov 2026) para Google Search Console: no lo borres o se pierde la verificación. Se reemplazaron los registros de la página de estacionamiento de Hostinger.
- **Correo (Hostinger, 5 nov 2026):** buzón `hola@tequismagico.com`, que usan los legales, el footer y la app. Registros: `MX` (`mx1`/`mx2.hostinger.com`), `TXT @` con SPF, `CNAME` de DKIM (`hostingermail-a/b/c._domainkey`), `TXT _dmarc` (`p=none`) y `CNAME` de `autodiscover`/`autoconfig`. **Activar el correo borró el TXT de Google**; se repuso desde el snapshot de DNS. Revisa ese TXT después de cualquier cambio de correo en Hostinger.

## 9. Pendientes

La lista completa, con quién hace cada cosa, está en [`bitacora.md`](bitacora.md#pendientes).

- **Renovar el dominio** antes del 2 nov 2027.
- **Verificar direcciones, horarios y teléfonos** de los 28 lugares sin confirmar.
- **Permisos** de las fotos tomadas de sitios de negocios. La web ya las publica.
- **Revisión legal** del aviso de privacidad y los términos.
- **Link real del App Store** cuando se publique la app.
- **Inglés:** traducir los lugares y eventos nuevos en `web/lib/i18n/data-en.ts` (mientras tanto salen en español en `/en`).

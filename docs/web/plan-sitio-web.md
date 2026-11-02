# Plan del sitio web público — tequismagico.com

> Estado: **en línea en https://tequismagico.com** (noviembre 2026). Diseño basado en la referencia https://turismo.gov.st/fr (fondo hueso, banda verde olivo, Outfit + Gilda Display, títulos de tres pisos, portada a pantalla completa), llevado al contexto de Tequis.
> Contexto de negocio: [`../negocio/propuesta-sitio-web.md`](../negocio/propuesta-sitio-web.md).
> Registro de cómo se hizo (separación, dominio, despliegues, diseño, problemas y arreglos): [`bitacora.md`](bitacora.md).

---

## 1. Qué es y cómo se relaciona con la app

- **Mismo nombre, mismos datos.** La web y la app iOS leen del mismo API (`GET /api/places` y `GET /api/events` de `web-admin/`). Lo que se edita en el panel aparece en las dos.
- **El panel sigue siendo el único lugar donde se edita.** La web es solo lectura.
- **Cada una tiene su momento:** la web sirve **antes del viaje** (Google, links por WhatsApp, Android) y la app **durante el viaje** (cerca de mí, favoritos, sin conexión).

```
                 ┌──────────────┐
                 │  Neon (BD)   │
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
├── web-admin/       Panel + API  → tequis-magico.vercel.app (privado)
├── web/             Sitio público → tequismagico.com
├── database/        Esquema de Neon
└── docs/
```

`web/` es otro proyecto de Next.js, independiente del panel. Tiene su propio `package.json` y se despliega como **otro proyecto de Vercel**, con Root Directory = `web`.

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
| `/app` | La app | Qué ofrece la app y cómo descargarla |
| `/creditos` | Créditos de fotos | Obligatorio por las licencias CC |
| `/privacidad`, `/terminos` | Legales | Aviso de privacidad (LFPDPPP) y términos |
| `/sitemap.xml`, `/robots.txt` | Para Google | Se generan solos |

Categorías (mismos códigos que la app): `sitios-turisticos`, `experiencias`, `gastronomia`, `hospedaje`, `compras` (y `eventos`, `rutas`, que hoy no tienen lugares).
Rutas: `vino-y-queso`, `artesanal`, `historica`, `aventura`.

---

## 4. Contenido de cada página

Esto es **qué va** en cada página. El **cómo se ve** está en las secciones 6b y 6c.

### Elementos comunes
- **Header:** logo y botón de menú. Es transparente sobre la foto en la portada, `/por-que-tequis` y `/guia-practica`, y se esconde al bajar.
- **Menú a pantalla completa**, en tres grupos (`web/lib/nav.ts`):
  - **¿Por qué Tequis?:** Pueblo Mágico, historia, cestería, queso y vino, rutas.
  - **Planea tu visita:** qué hacer, experiencias, dónde comer, dónde dormir, compras, eventos, mapa.
  - **Guía práctica:** cómo llegar, cuándo ir, información útil, la app.
- **Footer:** columnas de links, la palabra gigante "Tequisquiapan" y la nota "Guía independiente; no es un sitio oficial del municipio".

### Portada `/`
1. **Hero:** 5 fotos que rotan, cada una con su frase (un pueblo de cantera, un amanecer en globo, un brindis entre viñedos, manos que tejen mimbre, noches de leyenda). Abajo, una tarjeta con el próximo evento.
2. **Bienvenidos:** texto de bienvenida con la foto de los portales.
3. **¿Por qué Tequis?:** palabras grandes (Historia, Cestería, Queso & vino, Peña de Bernal) que llevan a `/por-que-tequis`.
4. **Experiencias:** Viñedos, Queserías, Globo, Balnearios y Cestería, cada una con foto.
5. **Ideas de viaje:** carrusel con las 4 rutas, Fiestas, Peña de Bernal y Fin de semana.
6. **Dónde dormir:** collage de fotos y lista de hoteles.
7. **Mapa:** México → Tequis → mapa real del pueblo con todos los lugares; botones "Explorar el mapa" y "Cómo llegar".
8. **Fiestas y eventos:** los próximos, incluidos los que están en curso.
9. **La app:** invitación a descargarla.

### Lugares `/lugares` y `/lugares/[categoria]`
1. Título y descripción de la categoría.
2. Filtros de categoría. Cada filtro es un link a su propia página, para que Google la indexe.
3. Cuadrícula de tarjetas de lugar.

**Tarjeta de lugar**: foto, categoría (con su color), nombre, descripción corta, subcategoría y precio.

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

**Tarjeta de evento**: foto, estado, título, fechas y lugar.

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

**No existen todavía** (requerirían cambios en Neon y el panel): textos en inglés, slug guardado en la base (hoy se deriva del nombre), estadísticas de vistas o clics, reseñas reales.

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
  - Migas de pan, `sitemap.xml`, imagen para compartir y URL canónica.
  - Teléfono y horario solo van a los datos estructurados cuando `content_verified = true`.
- **Fotos:** hotlink, igual que en la app (Wikimedia Commons y algunos sitios de negocios).
- **Mapas:** MapLibre GL con teselas vectoriales de OpenFreeMap, sin API key ni costo, recoloreadas con la paleta del sitio (`web/lib/mapStyle.ts`). Muestran el crédito de OpenFreeMap/OpenStreetMap. En los mapas chicos la rueda del mouse sigue bajando la página; para acercar se usa ctrl/⌘ + rueda o dos dedos. En `/mapa` la rueda sí acerca.

---

## 6b. Animación e interacción

Inspirada en lo que hace la referencia, que usa GSAP + ScrollTrigger + Lenis. En la portada:

- **Portada:** las fotos entran como cortina, la frase entra letra por letra, hay un contador con barra de progreso y parallax al bajar.
- **Bienvenida:** la foto se encoge hasta quedar enmarcada y la palabra gigante se desliza.
- **Palabras grandes:** una foto sigue al cursor, y el fondo pasa de hueso a verde salvia.
- **Experiencias:** la banda verde se queda fija y el scroll va cambiando de experiencia (en celular, flechas o deslizar).
- **Ideas de viaje:** carrusel que se arrastra con inercia.
- **Hospedaje:** foto en parallax y collage a distintas velocidades.
- **Mapa:** se queda fijo mientras se dibuja México, late Tequis y hace zoom al pueblo. Al terminar el zoom, el dibujo se funde con el mapa real de calles, alineado al mismo encuadre, y caen los pines. Cada pin muestra la foto del lugar al pasar el mouse y lleva a su ficha.

En todo el sitio hay scroll suave, textos y fotos que se revelan al entrar, cursor con etiqueta, header que se esconde al bajar y un menú que abre como cortina. Con "reducir movimiento" activado no se anima nada y todo se ve.

## 6c. Diseño visual

- **Colores:** fondo hueso `#eeedea`, tinta negra, verde olivo `#38492a` (bandas oscuras), verde salvia `#a3ad94` (al bajar a "¿Por qué Tequis?") y gris piedra `#777673`. Están como variables en `web/app/globals.css`.
- **Tipografías:** Outfit (texto) y Gilda Display (títulos en serif).
- **Títulos de tres pisos:** etiqueta pequeña, título en sans y remate en serif (`SectionTitle` en `web/components/Section.tsx`).
- **Fotos sueltas en arco:** las del collage, la bienvenida, las editoriales y las ideas de viaje tienen un arco de medio punto arriba, como los portales de cantera de la plaza. Llevan sombra que sigue la forma y una línea con la misma forma desplazada detrás (`ArchPhoto` en `web/components/Frame.tsx`).
- **Tarjetas y botones:** esquinas redondeadas en las tarjetas; botones y filtros en forma de píldora.
- **Pines del mapa:** gota del color de la categoría con borde blanco. Al tocarla abre una ventana con foto, nombre y "Ver lugar →".

## 6d. Cómo está hecho (dónde está cada cosa)

| Qué | Dónde |
|---|---|
| Lectura del API, tipos, slugs, categorías, rutas, fechas | `web/lib/data.ts` |
| Horarios, "abierto ahora" y horario para schema.org | `web/lib/schedule.ts` |
| Fotos editoriales con autor y licencia | `web/lib/photos.ts` |
| Menú | `web/lib/nav.ts` |
| Contorno de México para el mapa animado (generado con d3-geo, Mercator) | `web/lib/mexico-outline.ts` |
| Carga de MapLibre y estilo del mapa | `web/lib/mapStyle.ts` |
| Registro de GSAP y utilidades de movimiento | `web/lib/motion.ts` |
| Scroll suave, revelados por atributo y cursor | `web/components/motion/` |
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
- Las fotos editoriales son 16 fotos de Tequis en Wikimedia Commons, con autor y licencia verificados uno por uno, más las 8 genéricas de la base. Viven en `web/lib/photos.ts` y aparecen solas en `/creditos`.
- Lo que **no** se usó de tequis.travel: ni textos ni fotos (es el sitio oficial del municipio). Solo se consultó como fuente de datos.

## 8. Despliegue y dominio

- **Vercel:** proyecto `tequis-magico-web`, Root Directory = `web`, conectado a `ElBeDev/tequisMagico` (rama `main`). Cada push a `main` lo redespliega. Variable `NEXT_PUBLIC_SITE_URL=https://tequismagico.com`.
- **Dominios:** `tequismagico.com` y `www.tequismagico.com` (redirige con 308 al dominio sin www).
- **Registro:** comprado en Hostinger el 1 nov 2026; **vence el 2 nov 2027**.
- **DNS en Hostinger:** `A @ → 216.198.79.1, 64.29.17.1` y `CNAME www → 5aacadb8be777d2d.vercel-dns-017.com.`. Son los valores que recomienda Vercel. Se reemplazaron los registros de la página de estacionamiento de Hostinger; el dominio no tenía correo ni otros registros.
- **Pendiente:** cambiar el Root Directory del proyecto del panel (`tequis-magico`) a `web-admin` para poder borrar los restos del scaffold en la raíz (ver CLAUDE.md).

## 9. Pendientes

La lista completa, con quién hace cada cosa, está en [`bitacora.md`](bitacora.md#pendientes).

- **Renovar el dominio** antes del 2 nov 2027.
- **Correo de contacto:** los legales usan `contacto@tequismagico.com`, que hay que crear (Hostinger ofrece correo con el dominio).
- **Verificar horarios y teléfonos** de los ~36 lugares sin confirmar.
- **Permisos** de las fotos tomadas de sitios de negocios. La web ya las publica.
- **Revisión legal** del aviso de privacidad y los términos.
- **Link real del App Store** cuando se publique la app.

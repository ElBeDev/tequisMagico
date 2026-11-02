# Plan del sitio web público — tequismagico.com

> Estado: **en línea en https://tequismagico.com** (noviembre 2026). Diseño basado en la referencia https://turismo.gov.st/fr (fondo hueso, banda verde olivo, Outfit + Gilda Display, títulos de tres pisos, portada a pantalla completa), llevado al contexto de Tequis.
> Contexto de negocio: [`../negocio/propuesta-sitio-web.md`](../negocio/propuesta-sitio-web.md).

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

## 4. Contenido de cada página (bloques, sin diseño)

Esto es **qué va** en cada página. El **cómo se ve** lo define el diseño.

### Elementos comunes
- **Header**: logo/nombre y navegación (Lugares, Eventos, Rutas, Mapa, App).
- **Footer**: descripción corta, links de explorar y legales, ©.

### Portada `/`
1. **Hero**: título, frase, botones "Explorar lugares" y "Ver eventos", foto de fondo.
2. **¿Qué buscas?**: tarjetas de categoría con su número de lugares.
3. **Próximos eventos**: los 4 siguientes, incluidos los que están en curso.
4. **Destacados**: hasta 6 lugares con `is_featured`.
5. **Rutas temáticas**: las 4 rutas con su número de paradas.
6. **Bloque de la app**: invitación a descargarla.

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
- **Mapas:** Leaflet + OpenStreetMap, sin API key ni costo. Requieren el crédito "© OpenStreetMap".

---

## 6b. Animación e interacción

Inspirada en lo que hace la referencia, que usa GSAP + ScrollTrigger + Lenis. En la portada:

- **Portada:** las fotos entran como cortina, la frase entra letra por letra, hay un contador con barra de progreso y parallax al bajar.
- **Bienvenida:** la foto se encoge hasta quedar enmarcada y la palabra gigante se desliza.
- **Palabras grandes:** una foto sigue al cursor, y el fondo pasa de hueso a verde salvia.
- **Experiencias:** la banda verde se queda fija y el scroll va cambiando de experiencia (en celular, flechas o deslizar).
- **Ideas de viaje:** carrusel que se arrastra con inercia.
- **Hospedaje:** foto en parallax y collage a distintas velocidades.
- **Mapa:** fijo mientras se dibuja México, late Tequis, hace zoom al pueblo y caen los pines de los lugares reales, que llevan a su ficha.

En todo el sitio hay scroll suave, textos y fotos que se revelan al entrar, cursor con etiqueta, header que se esconde al bajar y un menú que abre como cortina. Con "reducir movimiento" activado no se anima nada y todo se ve.

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
- **DNS en Hostinger:** `A @ → 216.198.79.1, 64.29.17.1` y `CNAME www → 5aacadb8be777d2d.vercel-dns-017.com.`. Son los valores que recomienda Vercel. Se reemplazaron los registros de la página de estacionamiento de Hostinger; el dominio no tenía correo ni otros registros.
- **Pendiente:** cambiar el Root Directory del proyecto del panel (`tequis-magico`) a `web-admin` para poder borrar los restos del scaffold en la raíz (ver CLAUDE.md).

## 9. Pendientes antes de lanzar

- **Diseño visual** (en camino).
- **Correo de contacto:** los legales usan `contacto@tequismagico.com`, que hay que crear (Hostinger ofrece correo con el dominio).
- **Verificar horarios y teléfonos** de los ~36 lugares sin confirmar.
- **Permisos** de las fotos tomadas de sitios de negocios.
- **Revisión legal** del aviso de privacidad y los términos.
- **Link real del App Store** cuando se publique la app.

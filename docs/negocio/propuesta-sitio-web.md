# Propuesta: sitio web público de Tequisquiapan Mágico

> Estado: propuesta, nada construido todavía. Septiembre 2026.
> Objetivo: que cuando alguien planee un viaje a Tequisquiapan, lo primero que encuentre en Google sea nuestro sitio, y que ya estando en el pueblo use nuestra app.

---

## 1. La tesis en corto

1. **Hay demanda real.** Tequisquiapan llena sus hoteles en temporada alta y sus eventos grandes mueven cientos de miles de personas (ver sección 2).
2. **Nadie tiene la guía completa.** El sitio más completo es el oficial (tequis.travel): tiene directorio, pero no mapa interactivo, ni horarios por negocio, ni calendario con fechas, ni búsqueda. No encontramos ninguna app dedicada a Tequis.
3. **La app sola no alcanza.** El turista planea en Google antes de ir, y a Google solo llega una web. Además, la app hoy es solo para iPhone, y la mayoría de los teléfonos en México son Android.
4. **Buena parte ya está construida.** La base de datos, el API, el panel y las fotos ya existen. El sitio sería otra "cara" de los mismos datos, no un sistema nuevo.
5. **El negocio está en los negocios.** Cada lugar tendría su propia página en Google: eso es lo que hace que un restaurante o un hotel pague la suscripción que ya está diseñada en la app (Básico $499, Premium $999 al mes).

**El riesgo principal no es técnico, son los datos.** ~36 de los 47 lugares activos siguen sin verificar. Una web pública que Google indexa amplifica cualquier teléfono falso o negocio inexistente. Hay que resolverlo antes de lanzar (sección 9).

---

## 2. El mercado

| Dato | Cifra | Alcance | Fuente |
|---|---|---|---|
| Villa Navideña 2025 | +700 mil visitantes, 100% de ocupación hotelera, +40 emprendimientos locales | Tequisquiapan | Líderes Mexicanos, ene 2026 (presentado en FITUR 2026) |
| Festival Internacional de Arte, Queso y Vino 2026 (7–24 mayo) | ~200 mil visitantes esperados, 180–200 mdp de derrama proyectada | Tequisquiapan | Cúspide México, abr 2026 (cita a Rodrigo Ibarra, promoción turística del estado) |
| Enoturismo 2025 | 1.5 millones de visitantes, 4,500 mdp de derrama | **Todo el estado** de Querétaro, no solo Tequis | Misma nota de Cúspide México |
| Empleo | 40% de los habitantes de Tequis se dedica a actividades turísticas | Tequisquiapan | Misma nota (cita al presidente municipal Héctor Magaña) |
| Hospedaje | ~102 hoteles listados | Tequisquiapan | MX Hotels (agregador; cifra aproximada) |
| Ocupación | 95–100% en temporada alta (fin de año, puentes) | Tequisquiapan | Azteca Querétaro, Noticias de Querétaro (ene 2026) |
| Perfil del visitante | 98.5% nacional; 40.6% viene de CDMX | Tequisquiapan | El Financiero, **2015** (dato viejo, solo orientativo) |

**Qué nos dice esto:**
- El visitante típico es nacional, llega en fin de semana o temporada y viene sobre todo de CDMX y Querétaro. Planea desde el celular, casi siempre buscando en Google o preguntando por WhatsApp.
- La demanda se concentra en picos (Navidad, Festival de Queso y Vino, puentes). Ahí la gente necesita justo lo que nadie da bien: **qué hay, cuándo, dónde, si está abierto y cómo llegar**.
- Hay cientos de negocios que dependen del turismo y no tienen dónde destacar más allá de Google Maps.

> Pendiente: validar volúmenes de búsqueda reales con Google Keyword Planner / Search Console antes de invertir fuerte en contenido. Las cifras de arriba son de prensa, no de un estudio de mercado propio.

---

## 3. La competencia

| Sitio | Qué es | Qué tiene | Qué le falta |
|---|---|---|---|
| **tequis.travel** | Oficial (logos del estado y de la Secretaría de Turismo) | Directorio por categorías, galería, fiestas y eventos, PDF "Directorio Tequisquiapan 2025", botón de WhatsApp | Mapa interactivo (solo un link a Google Maps), horarios por negocio, calendario con fechas, búsqueda/filtros, inglés, app |
| **tequisquiapan.com.mx** | Directorio privado antiguo | Fichas de lugares | Diseño y datos viejos; sin mapa ni eventos actualizados |
| **queretaro.travel**, **México Desconocido**, **Pueblos Mágicos** | Portales estatales o nacionales | Buen SEO, artículos | Tequis es una página más entre cientos; sin detalle local |
| **TripAdvisor / Google Maps** | Plataformas globales | Reseñas, fotos de usuarios | No hay curaduría ni rutas; eventos locales ausentes; mucha información desactualizada |
| **tequisquiapan.travel** | Dominio abandonado | — | Hoy redirige a un sitio de apuestas: señal de que nadie cuida el nombre del pueblo en internet |
| **Apps en tiendas** | — | No encontramos ninguna app dedicada a Tequisquiapan (hay para Guanajuato, Teotihuacán, Xochimilco) | — |

> La búsqueda de apps no fue exhaustiva: vale la pena buscar a mano "Tequisquiapan" en App Store y Google Play antes de decidir.

**El hueco:** nadie junta en un solo lugar mapa + horarios + "abierto ahora" + eventos con fecha + rutas + app. tequis.travel es el rival más serio, pero es de gobierno: se mueve lento y no vende espacios a negocios. **Puede ser un aliado más que un rival** (ver sección 10).

---

## 4. Por qué web + app, y qué hace cada una

| | Sitio web | App iOS |
|---|---|---|
| Momento | **Antes del viaje**: "qué hacer en Tequis", "Feria del Queso 2027 fechas" | **Durante el viaje**: ya en el pueblo |
| Cómo llega la gente | Google, links compartidos por WhatsApp/redes | La descargan cuando ya decidieron ir |
| Fortalezas | Sin instalar nada, funciona en Android, se comparte fácil, cada página compite en Google | "Cerca de mí", mapa rápido, favoritos, funciona sin conexión, Spotlight y Siri |
| Para los negocios | Su ficha aparece en Google: es lo que venden a sus clientes | Visibilidad con quien ya está en el pueblo |

**El embudo:** Google → página del sitio → "abre en la app" (banner inteligente de Safari en iPhone) → uso en el pueblo → favoritos y regreso.

Además el sitio cubre a **Android**, que hoy no tenemos. Hacer una app Android nativa es otro proyecto completo; el sitio lo resuelve en buena parte.

---

## 5. Qué tendría el sitio

### Páginas

| Ruta | Contenido | Por qué importa |
|---|---|---|
| `/` | Qué hacer hoy/este fin de semana, eventos próximos, destacados, rutas | Portada; captura "Tequisquiapan" a secas |
| `/lugares` y `/lugares/[categoria]` | Listado con filtros (categoría, precio, abierto ahora) y mapa | "restaurantes en Tequisquiapan", "hoteles en Tequisquiapan" |
| `/lugar/[slug]` | Ficha completa: fotos, horario, "abierto ahora", teléfono, WhatsApp, sitio, cómo llegar, lugares cercanos | **La página que vende**: una por negocio, indexable |
| `/eventos` y `/evento/[slug]` | Calendario con fechas, precio, ubicación | "Feria del Queso y Vino 2027", "Villa Navideña Tequisquiapan" |
| `/rutas/[ruta]` | Vino y Queso, Artesanal, Histórica, Aventura (ya existen en la app) | Contenido único que nadie tiene |
| `/mapa` | Mapa completo con filtros | Uso rápido desde el celular |
| `/planea-tu-visita/...` | Guías: fin de semana en Tequis, cómo llegar desde CDMX/Querétaro, qué hacer con niños, temporada de viñedos | Las búsquedas de planeación, que son las que más traen gente |
| `/negocios` | Landing para vender a negocios: planes, beneficios, contacto | Canal de ventas |
| `/app` | Descarga de la app | Conversión |
| `/creditos`, `/privacidad`, `/terminos` | Legales y créditos de fotos (obligatorios por las licencias CC) | Cumplimiento |

Más adelante: versión en inglés (`/en/...`) para turismo extranjero y el público de San Miguel de Allende y Querétaro.

### Lo que nos diferencia
- **"Abierto ahora"**, calculado del horario (`schedule_json`). Nadie lo tiene para Tequis.
- **Calendario de eventos con fechas reales**, no solo una lista de fiestas.
- **Información verificada**: podemos mostrar "Info confirmada en [mes]" solo en los lugares con `content_verified = true`.
- **WhatsApp directo** en cada ficha, como se comunica la gente en México.
- **Rutas temáticas** listas para seguir.

---

## 6. SEO: la parte que gana el negocio

Nadie va a teclear nuestra URL. El sitio gana si aparece en Google para lo que la gente ya busca.

**Técnico (se construye una vez):**
- Páginas renderizadas en servidor y regeneradas cada cierto tiempo (Next.js), rápidas en celular.
- Datos estructurados de schema.org en cada página: `TouristAttraction`, `Restaurant`, `LodgingBusiness`, `Winery`, `Event`, con `openingHoursSpecification`. Así Google puede mostrar horario, fechas y ubicación directo en los resultados.
- `sitemap.xml`, URLs legibles (`/lugar/vinedos-la-redonda`), imagen para compartir en WhatsApp/redes por cada página.
- Registro en Google Search Console desde el día uno.

**Contenido (es trabajo continuo):**
- Una ficha por lugar con texto propio, no copiado de otros sitios.
- Página de cada evento anual con su fecha del año siguiente en cuanto se anuncie. Los eventos se repiten cada año y acumulan autoridad.
- Guías de planeación, que son las que atraen a quien todavía no decide.

**Búsquedas objetivo (ejemplos; hay que validar volumen):** "qué hacer en Tequisquiapan", "viñedos en Tequisquiapan", "Feria del Queso y Vino fechas", "Villa Navideña Tequisquiapan", "hoteles en el centro de Tequisquiapan", "restaurantes en Tequisquiapan", "Tequisquiapan fin de semana".

---

## 7. Modelo de negocio

### Lo que ya está diseñado en la app

`ModelsBusinessTier.swift` ya define tres planes para negocios:

| Plan | Precio/mes | Fotos | Videos | Promociones | Destacado | Estadísticas |
|---|---|---|---|---|---|---|
| Sin suscripción | $0 | 3 | 0 | No | No | No |
| Básico | $499 | 10 | 0 | No | No | Sí |
| Premium | $999 | Sin límite | 3 | Sí | Sí | Sí |

El sitio hace que estos planes valgan más: no solo aparecen en una app, aparecen en Google.

**Ejemplo de ingresos** (solo aritmética, no es proyección): 10 negocios Premium + 20 Básico = $9,990 + $9,980 = **~$20,000 MXN al mes**. Con ~102 hoteles más restaurantes, viñedos y queserías, el techo es bastante más alto.

### Otras fuentes posibles (sin validar)
- **Patrocinio de eventos y rutas**: "Ruta del Vino presentada por…".
- **Afiliados de hospedaje**: comisión por reservas enviadas a Booking/Expedia desde las fichas de hoteles que no pagan plan.
- **Publicidad de temporada**: banners durante Navidad y el Festival de Queso y Vino, cuando el tráfico explota.
- **Alianza con el municipio**: reportes de visitas o licencia de la plataforma (ver sección 10).

### Lo que hay que arreglar para poder vender
- **Estadísticas reales por negocio**: hoy `views_count`/`favorites_count` nunca se incrementan. Sin números no hay cómo cobrarle a un negocio. El sitio tiene que registrar vistas, clics a teléfono, WhatsApp y "cómo llegar".
- **Login por negocio y cobro** (Stripe/Conekta): ya están en el roadmap, pendientes de tu decisión de proveedor.

---

## 8. Arquitectura técnica

**Recomendación:** un proyecto Next.js nuevo `web-publica/` en el mismo repo, desplegado como **otro proyecto de Vercel** con su propio dominio, leyendo de la misma base de Neon.

- **Por qué separado del panel:** el panel es privado y con contraseña; el sitio público necesita otro dominio, caché agresivo y cero riesgo de exponer rutas de admin.
- **Datos:** lectura directa de Neon con un **usuario de solo lectura** (o vía el `GET` del API que ya existe). Páginas regeneradas cada pocos minutos: rápido y barato.
- **Cero duplicación:** el panel sigue siendo el único lugar donde se editan lugares y eventos. Lo que se cambie ahí aparece en la app y en el sitio.

**Cambios que necesita lo que ya existe:**

| Cambio | Dónde | Por qué |
|---|---|---|
| Columna `slug` en `places` y `events` | Neon + panel | URLs legibles para SEO |
| Registrar vistas/clics | API + sitio (y app) | Estadísticas para vender planes |
| Decidir qué se publica sin verificar | Sitio | Ocultar teléfono/horario si `content_verified = false`, o no publicar esos lugares |
| Universal links (`apple-app-site-association`) | Dominio + app (Associated Domains) | Que los links del sitio abran la app si está instalada. Necesita la cuenta de Apple Developer |
| Campos en inglés (`name_en`, `description_en`…) | Neon + panel | Versión en inglés, fase posterior |
| Analytics web (Vercel Analytics o Plausible) | Sitio | Medir tráfico sin cookies invasivas |

---

## 9. Antes de lanzar (bloqueantes)

1. **Verificar los ~36 lugares sin confirmar.** Llamar o visitar; en el panel, el filtro "Mostrar solo sin verificar". Lo que no se confirme no se publica en la web.
2. **Permisos de fotos.** Las fotos reales de negocios destacados se tomaron de sus sitios oficiales **sin permiso escrito** y se enlazan directo a sus servidores. En la app pasa desapercibido; en una web indexada es un riesgo de derechos de autor. Opciones: pedir autorización por escrito, tomar fotos propias o usar solo las de Wikimedia Commons (esas sí tienen licencia, con crédito).
3. **Dominio.** Comprar un dominio corto y claro (revisar disponibilidad; la idea sería algo como "tequismagico.mx"). También conviene pensar si vale la pena intentar recuperar tequisquiapan.travel.
4. **Legales web.** Aviso de privacidad (LFPDPPP) y términos adaptados al sitio, revisados por un abogado. Los borradores de la app sirven de base.
5. **Marca.** Registrar "Tequisquiapan Mágico" ante el IMPI antes de invertir en posicionarla.

---

## 10. Riesgos

| Riesgo | Impacto | Cómo mitigarlo |
|---|---|---|
| Datos falsos o viejos en fichas públicas | Pérdida de confianza, quejas de negocios | Publicar solo lo verificado; fecha de "última verificación" visible; botón "reportar un error" |
| Fotos sin permiso | Reclamos de derechos de autor | Sección 9, punto 2 |
| tequis.travel (gobierno) nos ve como competencia | Fricción con el municipio | **Proponer alianza**: nuestra plataforma como su directorio interactivo o app oficial, a cambio de datos verificados y promoción. Es la jugada más rápida para quedarse con el mercado |
| El SEO tarda meses | Poco tráfico al inicio | Arrancar antes de un evento grande (Villa Navideña, Festival de Queso y Vino) y empujar con redes y negocios aliados que compartan su ficha |
| Negocios no quieren pagar | Sin ingresos | Primeros meses gratis para los que se registren; mostrarles estadísticas reales de visitas antes de cobrar |
| Dependencia de Google | Cambios de algoritmo | Construir canales propios: app, lista de WhatsApp o correo, redes |

---

## 11. Plan por fases

Los tiempos son estimados y dependen de cuánto se avance en paralelo con lo que te toca.

| Fase | Qué incluye | Quién | Estimado |
|---|---|---|---|
| **0. Preparación** | Verificar lugares, dominio, permisos de fotos, marca, decidir si se busca alianza con el municipio | Tú | 2–4 semanas |
| **1. Sitio base** | Portada, lugares, ficha por lugar, eventos, mapa, SEO técnico, banner para abrir la app, analytics | Código | ~2–3 semanas |
| **2. Contenido y diferenciadores** | "Abierto ahora", rutas, guías de planeación, estadísticas de vistas/clics por negocio | Código + contenido | ~2–3 semanas |
| **3. Monetización** | Landing `/negocios`, login por negocio, cobro con Stripe/Conekta, panel de estadísticas para cada negocio | Código + tus cuentas | ~3–4 semanas |
| **4. Crecimiento** | Inglés, afiliados de hospedaje, patrocinios de temporada | Código + ventas | Continuo |

**Momento ideal de lanzamiento:** tener la Fase 1 en línea **antes de la Villa Navideña**. Es el pico de visitantes y búsquedas del año.

---

## 12. Cómo medimos si funciona

- **Tráfico orgánico** (Search Console): clics e impresiones por página; posición en las búsquedas objetivo.
- **Conversión a app**: clics en "abrir/descargar app" desde el sitio.
- **Acciones de contacto por negocio**: clics a teléfono, WhatsApp, sitio y "cómo llegar". Es el número que convence a un negocio de pagar.
- **Negocios**: registrados, en plan pagado, renovaciones.
- **Calidad de datos**: % de lugares publicados con `content_verified = true`.

---

## 13. Decisiones que necesito de ti

1. ¿Vamos con el sitio? ¿Mismo nombre "Tequisquiapan Mágico"?
2. Dominio: ¿cuál compramos?
3. Lugares sin verificar: ¿no se publican en la web hasta confirmarlos, o se publican sin teléfono ni horario?
4. Fotos de negocios: ¿pedimos permiso, tomamos fotos propias o nos quedamos solo con Wikimedia?
5. Municipio: ¿intentamos la alianza con tequis.travel o vamos por nuestra cuenta?
6. Cobro y login por negocio: ¿qué proveedor (Stripe o Conekta; Clerk, Auth.js u otro)?

---

## Fuentes

- [Tequisquiapan, referente turístico internacional en FITUR 2026 — Líderes Mexicanos](https://lideresmexicanos.com/tendencias/tequisquiapan-referente-turistico-internacional-en-fitur-2026)
- [Viñedos en Tequisquiapan generan 4,500 millones de pesos anuales — Cúspide México](https://cuspidemexico.com/2026/04/15/vinedos-en-tequisquiapan-queretaro-generan-4500-millones-de-pesos-anuales-por-actividad-turistica/)
- [Tequisquiapan alcanza ocupación hotelera total — Noticias de Querétaro](https://noticiasdequeretaro.com.mx/2026/01/03/tequisquiapan-alcanza-ocupacion-hotelera-total/)
- [Ocupación hotelera en Tequisquiapan de hasta 100 por ciento — Azteca Querétaro](https://www.aztecaqueretaro.com/turismo/notas/ocupacion-hotelera-en-tequisquiapan-hasta-100-por-ciento/)
- [Hoteles en Tequisquiapan — MX Hotels](https://www.mx-hotels.net/en/tequisquiapan-hotels-35280/hotels/)
- [Tequisquiapan, destino turístico en decadencia — El Financiero (2015)](https://www.elfinanciero.com.mx/bajio/tequisquiapan-destino-turistico-en-decadencia/)
- [tequis.travel](https://tequis.travel/) — revisado en septiembre 2026
- Investigación propia de los 50 lugares de la base: ver [`../datos/base-de-datos.md`](../datos/base-de-datos.md)

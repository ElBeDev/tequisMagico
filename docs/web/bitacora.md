# Bitácora del sitio web — tequismagico.com

Registro en orden de lo que se hizo para separar la web de la app, registrar y conectar el dominio, construir el sitio y dejarlo en línea. Qué es y cómo funciona hoy: [`plan-sitio-web.md`](plan-sitio-web.md).

---

## Resumen: qué tenemos (2 nov 2026)

| Pieza | Dónde | Estado |
|---|---|---|
| Sitio público | `web/` → https://tequismagico.com | En línea, se redespliega en cada push a `main` |
| Proyecto de Vercel | `tequis-magico-web` (Root Directory `web`, Node 24) | Conectado a GitHub `ElBeDev/tequisMagico`, rama `main` |
| Dominio | `tequismagico.com` en Hostinger | Registrado el 1 nov 2026, **vence el 2 nov 2027** |
| DNS | Hostinger | `A @` y `CNAME www` apuntando a Vercel; `www` redirige al dominio sin www |
| Datos | `GET /api/places` y `GET /api/events` del panel | Los mismos que usa la app iOS; la web se regenera cada 5 min |
| Mapas | MapLibre + OpenFreeMap | Sin API key ni costo |
| Fotos editoriales | Wikimedia Commons (`web/lib/photos.ts`) | 28 fotos con autor y licencia, listadas en `/creditos` |
| Diseño | Estética de turismo.gov.st, información estilo visitshropshire.co.uk, reglas de tasteskill v2 | Ver secciones 5 a 10 y `plan-sitio-web.md` §6c |

---

## 1. Separar la web de la app (1 nov 2026)

**Qué se pidió:** tener, además de la app iOS, un sitio web con el mismo nombre que muestre lo mismo, dentro del mismo proyecto.

**Qué se decidió:**
- **Mismo repo, carpeta nueva `web/`.** Es otro proyecto de Next.js, independiente del panel (`web-admin/`), con su propio `package.json` y su propio proyecto en Vercel.
- **La web no lee Neon.** Consume el mismo API público que la app. Así la web y la app muestran exactamente lo mismo, la web no necesita credenciales de la base y el panel sigue siendo el único lugar donde se edita.
- **La propuesta de negocio** (`docs/negocio/propuesta-sitio-web.md`) sugería `web-publica/` leyendo directo de Neon. Se cambió a `web/` y al API por las razones de arriba.

**Commit:** `ce7a50e` feat: sitio público tequismagico.com en web/

## 2. Registro y conexión del dominio (1 nov 2026)

1. **Registro:** `tequismagico.com` se compró en Hostinger el 1 nov 2026, por un año: vence el **2 nov 2027**. Hay que renovarlo antes de esa fecha o el sitio se cae.
2. **Proyecto en Vercel:** se creó `tequis-magico-web` con Root Directory = `web` y se le agregaron los dominios `tequismagico.com` y `www.tequismagico.com`. `www` redirige con 308 al dominio sin www.
3. **DNS en Hostinger:** se reemplazaron los registros de la página de estacionamiento de Hostinger por los que pide Vercel. El dominio no tenía correo ni otros registros.

   | Tipo | Nombre | Valor | TTL |
   |---|---|---|---|
   | A | `@` | `216.198.79.1` | 300 |
   | A | `@` | `64.29.17.1` | 300 |
   | CNAME | `www` | `5aacadb8be777d2d.vercel-dns-017.com.` | 300 |

4. **Variable de entorno:** `NEXT_PUBLIC_SITE_URL=https://tequismagico.com` en producción. Se usa en las URLs canónicas, el sitemap y las imágenes para compartir.

## 3. Problemas al desplegar (1 nov 2026)

| Problema | Causa | Arreglo | Commit |
|---|---|---|---|
| El build de la web corría `cd web-admin` | Heredaba el `vercel.json` de la raíz (el del panel) | `web/vercel.json` propio | `7c0a223` |
| El panel dejó de compilar con `NEXT_NO_VERSION` | Vercel no encontraba la versión de Next. Antes funcionaba solo por un caché de build viejo, que expiró | El `installCommand` de la raíz instala también la raíz | `e05b779` |

Por eso hay dos `vercel.json`; está explicado en `CLAUDE.md` (`290ed42`).

## 4. Plan del sitio (1 nov 2026)

Antes de diseñar se armó el plan: mapa del sitio, contenido de cada página, datos disponibles y comportamiento. Está en [`plan-sitio-web.md`](plan-sitio-web.md).

Decisiones de contenido que vienen de ahí:
- **No se publican `rating` ni `reviews_count`.** Son de la carga inicial, no son reseñas reales.
- **Teléfono y horario** solo entran a los datos estructurados de Google si `content_verified = true`.
- **Aviso "Información por confirmar"** en las fichas de los lugares sin verificar.

## 5. Diseño con referencia turismo.gov.st (1 nov 2026)

**Referencia:** https://turismo.gov.st/fr, llevada al contexto de Tequis.

**Del diseño de la referencia se tomó:**
- fondo hueso y banda verde olivo;
- las tipografías Outfit y Gilda Display;
- títulos de tres pisos;
- portada a pantalla completa;
- menú en tres grupos: ¿Por qué Tequis?, Planea tu visita y Guía práctica.

**Contenido:** salió de una investigación con fuentes (Wikipedia, tequis.travel, gob.mx/Sectur, INEGI, queretaro.travel, prensa). De tequis.travel, que es el sitio oficial del municipio, solo se tomaron datos. No se copiaron ni textos ni fotos.

**Páginas nuevas:**
- `/por-que-tequis`: nombre, historia de 1551 a 2012, patrimonio, tradiciones, sabores y alrededores.
- `/guia-practica`: cómo llegar, cuándo ir y teléfonos útiles.

**Fotos:** 16 fotos de Tequis de Wikimedia Commons, con autor y licencia revisados uno por uno.

## 6. Animaciones e interacción (1 nov 2026)

**Qué se pidió:** "no la quiero estática, debería de ser dinámica e interactiva".

**Herramientas:** GSAP (ScrollTrigger, SplitText y DrawSVG, gratis desde la versión 3.13) y Lenis para el scroll suave.

**En todo el sitio:**
- textos que entran por línea o por letra;
- fotos que se revelan como cortina;
- parallax;
- cursor con etiqueta;
- header que se esconde al bajar;
- menú que abre como cortina.

**En la portada:**
- carrusel con contador;
- foto de bienvenida que se encoge;
- palabras grandes con una foto que sigue al cursor;
- experiencias fijas que cambian con el scroll;
- carrusel que se arrastra;
- mapa animado.

El detalle está en la sección 6b del plan. Con "reducir movimiento" activado no se anima nada.

| Arreglo | Commit |
|---|---|
| Animaciones e interacción | `2ce0950` |
| La foto de las palabras grandes se quedaba en la esquina al hacer scroll | `e86b6d5` |

## 7. Fotos en arco y mapa real del pueblo (1 nov 2026)

**Qué se pidió:**
- Las fotos sueltas se veían "muy rectangulares… medio chafa".
- El mapa no se veía: "cuando se acerca la animación pues no sale".

**Fotos:**
- Las fotos sueltas usan un arco de medio punto, como los portales de cantera de la plaza, con sombra que sigue la forma y una línea desplazada detrás (`web/components/Frame.tsx`).
- La foto de bienvenida pasa de rectángulo a arco mientras bajas.
- Tarjetas, botones y filtros tienen esquinas redondeadas.

**Mapa de la portada:**
- Se dibuja México, late Tequis y se hace zoom al pueblo.
- Al terminar el zoom, el dibujo se funde con el mapa real de calles, alineado al mismo encuadre, y caen los pines. Antes, al hacer zoom, el contorno se salía de la pantalla y solo quedaban puntitos sobre un fondo liso.

**Los demás mapas:** se cambiaron de Leaflet + OpenStreetMap a MapLibre + OpenFreeMap, con la paleta del sitio, pines por categoría y ventana con foto.

**Fallas técnicas que impedían ver el mapa:**
- **Mapa de 0 px de alto:** el CSS de MapLibre le cambia la posición al contenedor.
- **Mapa en blanco:** el worker de MapLibre no se incluía en el build. Ahora se copia a `public/` antes de cada build.

| Arreglo | Commit |
|---|---|
| Fotos en arco y mapa real del pueblo | `8180bd1` |
| El primer despliegue falló porque `public/` no existe en el repo; se crea antes de copiar | `b78abf1` |

**Verificado en producción:**
- el mapa del pueblo se ve con sus 47 pines;
- no hay errores en consola;
- no hay scroll horizontal en celular (390 px);
- con "reducir movimiento" no queda nada oculto.

---

## 8. Presentación de la información estilo visitshropshire.co.uk (2 nov 2026)

Se mantuvieron la estética (hueso, verde, Outfit + Gilda, arcos de portal) y las animaciones; cambió **cómo se presenta la información**, tomando la estructura de https://www.visitshropshire.co.uk/ (estudiada en la copia del Internet Archive, porque el sitio bloquea visitas automatizadas).

**Nuevo:**
- Header en dos pisos con buscador instantáneo, "Mi viaje" y "Explorar mapa"; mega menú con subcategorías, conteos y una tarjeta destacada.
- "Mi viaje": corazón en tarjetas y fichas, página `/mi-viaje` con mapa y ruta en Google Maps. Solo en el navegador.
- Portada reorganizada: banda ocre del evento, bienvenida con tres puertas, "Explora Tequis" (lista + mapa fijo sincronizados), destacado, agenda en tarjetas, rutas en tarjeta terracota, "Cerca de Tequis" con esquema de carreteras e invitación a la app con fotos flotando. Se quitó la banda de hospedaje (ahora vive en Explora y en el menú).
- Listados con filtro por tipo (`?tipo=`) y vista de mapa.
- Footer verde bosque con banda ocre para negocios.
- Paleta ampliada: ocre (portales), terracota, salvia y verde bosque (`globals.css`).
- 4 fotos nuevas de Commons para los pueblos cercanos (salen solas en `/creditos`).

**Problemas encontrados y arreglados:**
- **La página se veía alejada en celular:** los paneles del mega menú (invisibles, pero con ancho fijo) y la fila de pestañas de Explora (dentro de un grid de una columna automática) hacían que el navegador móvil ensanchara el viewport a 529 px. Los paneles ahora solo existen en escritorio y el grid usa `grid-cols-1`.
- **Error de ScrollTrigger en celular** ("reading 'end'"): un `data-reveal` dentro de algo con `display:none` creaba un trigger `once` que se borraba a media actualización. `Reveals` ya ignora lo que no se pinta.

---

## 9. Restyle con las reglas de tasteskill (2 nov 2026)

Se aplicó tasteskill v2 (https://www.tasteskill.dev/), un conjunto de reglas para que una página no se vea "hecha por IA". Se usó su protocolo de restyle: se conservaron la estructura, el contenido y las animaciones, y se cambiaron tipografía, color y componentes.

**Se quitó** (el skill lo marca como señal de página generada): etiquetas pequeñas en mayúsculas arriba de cada título, títulos que mezclan negrita sans con remate en serif, sombras en tarjetas, líneas divisorias, botones de contorno de 1 px, desenfoque tipo vidrio, la terracota, el contador 01/05 de la portada, el número "01" de experiencias, el globo que giraba, los puntos que laten, la marca de agua "Bienvenidos", el radio de 22 px en todo y las tarjetas con ícono arriba (guía práctica y la app).

**Se puso en su lugar:** el h1 "Tequisquiapan" en grande en la primera pantalla; títulos en una sola cara y más grandes; cinco tamaños de letra; campos de color planos de orilla a orilla (salvia, ocre, verde, bosque) en vez de cajas redondeadas; separación por pasos de tono; el arco de los portales como la única forma de foto; la agenda como "evento principal + lista" en vez de tres tarjetas iguales; y el footer como cierre (invitación a negocios y el nombre a todo lo ancho).

**Cómo se verificó:** el inspector y el linter del skill no se pudieron correr (el entorno no permitió ejecutar código descargado), así que se revisó con capturas en 1440 y 390 px y con un verificador propio de las reglas medibles. En producción, en 6 páginas y los dos anchos: 0 etiquetas en mayúsculas, sombras, bordes ni desenfoque; h1 en la primera pantalla; ningún título de más de dos renglones; sin errores ni desborde en celular.

**Problemas encontrados en las capturas y arreglados:** una foto flotante de la invitación a la app tapaba el título en celular, las etiquetas del esquema de carreteras se encimaban, y tres títulos ocupaban tres renglones ("Rutas por Tequis", "La Peña de Bernal" y el del footer se acortaron o ensancharon).

**Autoevaluación con la rúbrica del skill:** diseño 7.5, usabilidad 8, creatividad 7.5, contenido 7 (≈ 7.6). Lo que falta pulir está en Pendientes.

---

## 10. Publicación del rediseño (2 nov 2026)

Las secciones 8 y 9 se subieron juntas en el commit `0cf3e1b` ("estructura estilo Visit Shropshire y restyle sin AI slop"), con 53 archivos: 36 modificados, 16 nuevos y 1 borrado (`Welcome.tsx`). Vercel lo publicó en unos 2 minutos; se comprobó en línea que la portada nueva sale y que `/`, `/lugares`, `/eventos`, `/mi-viaje`, `/rutas` y `/app` responden 200.

- El HTML de la portada pasó de unos 124 kB a 256 kB sin comprimir (menú, buscador y Explora traen los datos de todos los lugares).
- `web/AGENTS.md` y `web/CLAUDE.md` entraron al repo: los genera `next dev` y, si no se suben, vuelven a aparecer como cambios pendientes.
- El push a `main` también redespliega el panel (`tequis-magico`); no se tocó su código.

---

## Pendientes

| Pendiente | Quién |
|---|---|
| **Renovar el dominio** antes del 2 nov 2027 (conviene activar la renovación automática en Hostinger) | Tú |
| Crear el buzón `contacto@tequismagico.com`, que usan los avisos legales | Tú (Hostinger) |
| Cambiar el Root Directory del proyecto del panel (`tequis-magico`) a `web-admin` en Vercel. Después se pueden borrar los restos del scaffold en la raíz (ver `CLAUDE.md`) | Tú en Vercel, luego el código |
| Verificar horarios, teléfonos y coordenadas de los ~36 lugares sin confirmar. Varios pines del centro están amontonados porque tienen coordenadas aproximadas | Llamar o visitar |
| Pedir permiso escrito para las fotos tomadas de sitios de negocios (Freixenet, globos), que la web ya publica | Tú |
| Confirmar la fecha de la "Fiesta de la Fundación" en la base (las fuentes dicen 24 jun, 24 jul o 25 jul) | Datos |
| Revisión legal del aviso de privacidad y los términos | Abogado |
| Link real del App Store en `/app` cuando se publique la app | Código |
| Bajar la portada a los cinco tamaños de letra del sistema (hoy hay ~12, sobre todo en el esquema de carreteras) | Código |
| Darle más vida al arranque del mapa México → Tequis | Código |
| Buscar una forma menos "de plantilla" para Explora que la cuadrícula de tarjetas | Código |
| Revisar el peso del HTML de la portada (256 kB sin comprimir) si afecta la carga en celular | Código |

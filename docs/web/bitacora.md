# Bitácora del sitio web — tequismagico.com

Registro en orden de lo que se hizo para separar la web de la app, registrar y conectar el dominio, construir el sitio y dejarlo en línea. Qué es y cómo funciona hoy: [`plan-sitio-web.md`](plan-sitio-web.md).

---

## Resumen: qué tenemos (1 nov 2026)

| Pieza | Dónde | Estado |
|---|---|---|
| Sitio público | `web/` → https://tequismagico.com | En línea, se redespliega en cada push a `main` |
| Proyecto de Vercel | `tequis-magico-web` (Root Directory `web`, Node 24) | Conectado a GitHub `ElBeDev/tequisMagico`, rama `main` |
| Dominio | `tequismagico.com` en Hostinger | Registrado el 1 nov 2026, **vence el 2 nov 2027** |
| DNS | Hostinger | `A @` y `CNAME www` apuntando a Vercel; `www` redirige al dominio sin www |
| Datos | `GET /api/places` y `GET /api/events` del panel | Los mismos que usa la app iOS; la web se regenera cada 5 min |
| Mapas | MapLibre + OpenFreeMap | Sin API key ni costo |
| Fotos editoriales | Wikimedia Commons (`web/lib/photos.ts`) | 24 fotos con autor y licencia, listadas en `/creditos` |

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

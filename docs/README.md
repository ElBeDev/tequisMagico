# Documentación — Tequisquiapan Mágico

Todo lo del proyecto en un solo lugar. Empieza por "El proyecto hoy" y luego ve a la sección que necesites.

## Índice

| Documento | Para qué sirve |
|---|---|
| [`web/plan-sitio-web.md`](web/plan-sitio-web.md) | El sitio público `tequismagico.com` (`web/`): páginas, contenido, datos, animaciones, diseño, dónde está cada cosa en el código, despliegue y dominio |
| [`web/bitacora.md`](web/bitacora.md) | Registro de cómo se hizo la web: separación de la app, registro y DNS del dominio, despliegues, diseño, problemas y arreglos, pendientes |
| [`marca/README.md`](marca/README.md) | El logo: qué archivo usar en cada fondo, colores y reglas |
| [`negocio/propuesta-sitio-web.md`](negocio/propuesta-sitio-web.md) | Propuesta del sitio web público: mercado, competencia, modelo de negocio, arquitectura y plan por fases |
| [`app-ios/roadmap.md`](app-ios/roadmap.md) | Estado completo y roadmap de la app iOS: qué está hecho, qué falta, bugs, auditoría, legal |
| [`panel/panel-admin.md`](panel/panel-admin.md) | El panel de administración (`web-admin/`): qué hace, cómo se protege, cómo correrlo |
| [`datos/base-de-datos.md`](datos/base-de-datos.md) | La base PostgreSQL: archivos SQL, qué datos están verificados y cuáles no |
| [`datos/creditos-imagenes.md`](datos/creditos-imagenes.md) | Origen y licencia de cada foto (atribución obligatoria) |
| [`datos/investigacion-guias-2026-11.md`](datos/investigacion-guias-2026-11.md) | Investigación con fuentes de las guías de la web: viñedos, queserías, familia, Bernal; lugares de la base que no existen |
| [`historico/`](historico/) | Documentos viejos (catálogo original de los 50 lugares y setup inicial). **No reflejan el estado actual** |

Fuera de esta carpeta, a propósito:
- [`../README.md`](../README.md): portada del repo en GitHub.
- [`../CLAUDE.md`](../CLAUDE.md): notas técnicas no obvias para quien programe en el proyecto (humano o IA).

---

## El proyecto hoy (noviembre 2026)

### Qué existe

| Pieza | Dónde | Estado |
|---|---|---|
| App iOS | `Tequis Magico/` (Xcode, SwiftUI + SwiftData) | Funcional: mapa, explorar, eventos, favoritos, "cerca de mí", compartir con foto, Spotlight, Siri. En el iPhone se llama "Tequis Mágico", pide iOS 18 o mayor y lleva el Globo de ícono. Sin publicar en App Store |
| Panel de admin | `web-admin/`, https://panel.tequismagico.com/admin | En producción. Contraseña única; CRUD de lugares y eventos, fotos, analytics, etiqueta "Sin verificar" |
| API | `web-admin/app/api/` | En producción. Lectura pública (la usa la app), escritura con contraseña |
| Base de datos | PostgreSQL 18 en nuestro VPS | 45 lugares activos (17 confirmados) y 17 eventos |
| Fotos | Disco del VPS (`/srv/tequis/uploads`) + Wikimedia Commons | Genéricas por categoría con crédito; 7 negocios con fotos reales de su propia web |
| Sitio web público | `web/` → https://tequismagico.com | **En línea** desde el 1 nov 2026. Mismos datos que la app (lee el mismo API). Estética y animaciones de turismo.gov.st; desde el 2 nov, información presentada como visitshropshire.co.uk (buscador, mega menú, "Explora" con lista + mapa, "Mi viaje" con ruta, pueblos cercanos) y diseño con las reglas anti-IA de tasteskill (ver [`web/plan-sitio-web.md`](web/plan-sitio-web.md) y [`web/bitacora.md`](web/bitacora.md)) |
| App Android | — | **No existe** |

### Cuentas y servicios en uso
- **GitHub**: `ElBeDev/tequisMagico` (un solo repo para todo).
- **VPS** `72.60.173.175`: sitio, panel, API, base y fotos. Se despliega con `deploy/deploy.sh`; ver [`../deploy/README.md`](../deploy/README.md). **Vercel y Neon se dieron de baja el 5 nov 2026.**
- **Hostinger**: registro y DNS de `tequismagico.com` (vence el **2 nov 2027**) y correo `hola@tequismagico.com`.
- **OpenFreeMap**: teselas de los mapas de la web (gratis, sin cuenta).

### Lo más importante pendiente

1. **Verificar 28 lugares** sin confirmar: 26 sin web propia y 2 balnearios que solo salen en prensa (llamar o visitar; usar el filtro del panel). La web ya está publicada, así que esos datos ya están a la vista de Google: es lo que más pesa.
2. **Permisos de las fotos reales de negocios**: se tomaron de sus sitios sin autorización escrita, y la web ya las publica.
3. **Pendientes de la web** (detalle en [`web/bitacora.md`](web/bitacora.md#pendientes)):
   - Copiar los respaldos fuera del VPS: hoy están en el mismo disco.
   - Forma de desplegar sin llave manual, y borrar los restos de Vercel en la raíz del repo.
   - Renovar el dominio antes del 2 nov 2027.
4. **Lo que depende de tus cuentas o decisiones**:
   - Apple Developer (publicar la app, universal links, push).
   - Proveedor de push (Firebase o APNs).
   - Crear el target de Widgets en Xcode.
   - Cobro (Stripe/Conekta) y login por negocio.
   - Registro de marca en el IMPI.
   - Revisión legal de Términos y Privacidad.
5. **Técnico menor**:
   - Probar la app en un iPhone o simulador con iOS 18 antes de publicarla: en esa versión solo se ha comprobado compilando.
   - Vista para reactivar lugares desactivados en el panel.
   - Contador de vistas y favoritos que nunca se incrementa.
   - Tests.
   - Accesibilidad.

El detalle de cada punto está en [`app-ios/roadmap.md`](app-ios/roadmap.md).

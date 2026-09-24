# Documentación — Tequisquiapan Mágico

Todo lo del proyecto en un solo lugar. Empieza por "El proyecto hoy" y luego ve a la sección que necesites.

## Índice

| Documento | Para qué sirve |
|---|---|
| [`negocio/propuesta-sitio-web.md`](negocio/propuesta-sitio-web.md) | Propuesta del sitio web público: mercado, competencia, modelo de negocio, arquitectura y plan por fases |
| [`app-ios/roadmap.md`](app-ios/roadmap.md) | Estado completo y roadmap de la app iOS: qué está hecho, qué falta, bugs, auditoría, legal |
| [`panel/panel-admin.md`](panel/panel-admin.md) | El panel de administración (`web-admin/`): qué hace, cómo se protege, cómo correrlo |
| [`datos/base-de-datos.md`](datos/base-de-datos.md) | La base en Neon: archivos SQL, qué datos están verificados y cuáles no |
| [`datos/creditos-imagenes.md`](datos/creditos-imagenes.md) | Origen y licencia de cada foto (atribución obligatoria) |
| [`historico/`](historico/) | Documentos viejos (catálogo original de los 50 lugares y setup inicial). **No reflejan el estado actual** |

Fuera de esta carpeta, a propósito:
- [`../README.md`](../README.md): portada del repo en GitHub.
- [`../CLAUDE.md`](../CLAUDE.md): notas técnicas no obvias para quien programe en el proyecto (humano o IA).

---

## El proyecto hoy (septiembre 2026)

### Qué existe

| Pieza | Dónde | Estado |
|---|---|---|
| App iOS | `Tequis Magico/` (Xcode, SwiftUI + SwiftData) | Funcional: mapa, explorar, eventos, favoritos, "cerca de mí", compartir con foto, Spotlight, Siri. Sin publicar en App Store |
| Panel de admin | `web-admin/`, https://tequis-magico.vercel.app/admin | En producción. Contraseña única; CRUD de lugares y eventos, fotos, analytics, etiqueta "Sin verificar" |
| API | `web-admin/app/api/` | En producción. Lectura pública (la usa la app), escritura con contraseña |
| Base de datos | Neon (Postgres) | 47 lugares activos (11 verificados) y 17 eventos |
| Fotos | Vercel Blob (`tequis-magico-photos`) + Wikimedia Commons | Genéricas por categoría con crédito, más algunas reales de negocios |
| Sitio web público | — | **No existe todavía** (ver la propuesta) |
| App Android | — | **No existe** |

### Cuentas y servicios en uso
- **GitHub**: `ElBeDev/tequisMagico` (un solo repo para todo).
- **Vercel**: proyecto `tequis-magico` (despliega `web-admin/` en cada push a `main`).
- **Neon**: base Postgres de producción.
- **Vercel Blob**: store `tequis-magico-photos`.

### Lo más importante pendiente

1. **Verificar ~36 lugares** que no tienen ninguna presencia en internet (llamar o visitar; usar el filtro del panel). Es lo que más pesa antes de publicar la app o lanzar la web.
2. **Decidir el sitio web** (ver [`negocio/propuesta-sitio-web.md`](negocio/propuesta-sitio-web.md), sección 13).
3. **Permisos de las fotos reales de negocios**: se tomaron de sus sitios sin autorización escrita.
4. **Lo que depende de tus cuentas o decisiones**:
   - Apple Developer (publicar la app, universal links, push).
   - Proveedor de push (Firebase o APNs).
   - Crear el target de Widgets en Xcode.
   - Cobro (Stripe/Conekta) y login por negocio.
   - Dominio.
   - Registro de marca en el IMPI.
   - Revisión legal de Términos y Privacidad.
5. **Técnico menor**:
   - Vista para reactivar lugares desactivados en el panel.
   - Contador de vistas y favoritos que nunca se incrementa.
   - Tests.
   - Accesibilidad.
   - Ícono definitivo de la app.

El detalle de cada punto está en [`app-ios/roadmap.md`](app-ios/roadmap.md).

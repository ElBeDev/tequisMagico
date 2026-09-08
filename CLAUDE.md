@AGENTS.md

# Tequisquiapan Mágico — monorepo

Una app iOS (SwiftUI + SwiftData) y el panel Next.js/Vercel/Neon que la alimenta, en un solo repo. Detalle completo en [README.md](README.md).

## Convención de trabajo
- **App iOS** (`Tequis Magico/`): se edita directo en los archivos Swift del proyecto Xcode, no a través del asistente integrado de Xcode.
- **Panel/Vercel/Neon** (`web-admin/`, `database/`): se trabaja como cualquier proyecto Next.js normal.
- Es un solo repo con un solo remoto de GitHub — no vuelvas a inicializar un `.git` dentro de `Tequis Magico/` (eso fue justo el bug que causó una historia divergida, resuelto en el commit `ae52063`).

## Puntos no obvios
- El API (`web-admin/app/api/places`) devuelve `category`/`price_range`/`business_tier` como códigos cortos (`"turistico"`, `"moderate"`, `"premium"`), no el `rawValue` de despliegue de esos enums en Swift (`"Sitios Turísticos"`, `"$$"`, etc.) — de ahí los `init?(dbValue:)` en `ModelsPlaceCategory.swift`, `ModelsPriceRange.swift` y `ModelsBusinessTier.swift`.
- Neon devuelve `latitude`/`longitude`/`rating` como strings (no números JSON) — `ServicesPlaceAPIService.swift` lo maneja con `decodeFlexibleDouble`.
- Favoritos (`Place.isFavorite`) son puramente locales — no existen en el schema de Neon ni se sincronizan.
- El sync de `Place`/`Event` borra la copia local de lo que el API deja de devolver activo (soft-delete), pero solo cuando el fetch tiene éxito y no viene vacío — nunca se borra nada si falla la red.
- Cualquier archivo de config nuevo (Info.plist, entitlements, etc.) debe ir FUERA de `Tequis Magico/Tequis Magico/` (la carpeta que Xcode 16 sincroniza sola al target vía `PBXFileSystemSynchronizedRootGroup`) — si un archivo ahí adentro también está referenciado por build settings (como `INFOPLIST_FILE`), Xcode lo cuenta dos veces y el build falla con "Multiple commands produce". Por eso `Info.plist`, `README.md` y `.gitignore` de la app vivan un nivel arriba, junto al `.xcodeproj`.
- No uses `Map(selection:)` de MapKit junto con un `.onTapGesture` manual que setee el mismo `@State` — compiten por el mismo binding y el tap se deshace solo al instante (pasó en `ViewsMapView.swift`, fix: quitar `selection:` y dejar solo el tap gesture).
- Fotos de `places`/`events`: nunca sacarlas de Google Maps (viola su ToS) ni de scraping masivo de redes/sitios. Los negocios destacados que sí tienen foto real la tienen porque se revisó su sitio oficial a mano (ver `database/IMAGE_CREDITS.md`); el resto usa una foto genérica por categoría de Wikimedia Commons con crédito obligatorio (licencias CC).
- `web-admin` usa `proxy.ts` (no `middleware.ts` — Next.js 16 renombró la convención, la vieja tira warning de deprecada) para proteger `/admin/*`, `/api/upload` y las escrituras (`POST`/`PUT`/`DELETE`) de `/api/places` y `/api/events` con una sola contraseña compartida (`ADMIN_PASSWORD`). Las lecturas (`GET`) de esos dos quedan siempre públicas a propósito — la app iOS las necesita sin login. No hay login por negocio individual todavía.
- El store de Vercel Blob para fotos es `tequis-magico-photos` (público, conectado al proyecto) — el upload usa el patrón de client-upload de `@vercel/blob` (`/api/upload` + `handleUpload`), no sube el archivo a través del cuerpo de la función serverless.

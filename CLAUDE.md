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
- No hay API de eventos todavía; `Event` sigue sembrado localmente en la app.

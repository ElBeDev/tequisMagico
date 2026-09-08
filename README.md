# Tequisquiapan Mágico

Monorepo del proyecto: una app iOS nativa y el panel web que la alimenta.

## Estructura

```
tequisMagico/
├── Tequis Magico/        # App iOS (Xcode, SwiftUI + SwiftData)
│   └── Tequis Magico/README.md   # Estado y roadmap de la app
├── web-admin/             # Panel de administración (Next.js, deploy en Vercel)
├── database/              # Esquema y seeds SQL de Neon (Postgres)
├── app/, lib/              # Restos del scaffold inicial de create-next-app, sin uso (vercel.json ya no los referencia)
└── vercel.json             # Le dice a Vercel que compile desde web-admin/
```

## Cómo se conectan las piezas

- **Backend real**: Neon (Postgres), consultado desde `web-admin/app/api/`.
- **Panel** (`web-admin/`): Next.js desplegado en Vercel como `tequis-magico` → https://tequis-magico.vercel.app. Lee/escribe directo en Neon. `/admin` y las escrituras del API están protegidas con contraseña compartida (`ADMIN_PASSWORD`); las lecturas (`GET /api/places`, `GET /api/events`) siguen públicas porque la app las necesita sin login. Fotos se suben a Vercel Blob (`tequis-magico-photos`).
- **App iOS** (`Tequis Magico/`): en cada arranque sincroniza `Place` y `Event` desde `GET /api/places` y `GET /api/events` hacia SwiftData (ver `ServicesPlaceAPIService.swift` / `ServicesEventAPIService.swift`), quitando localmente lo que ya no viene activo del API; si no hay conexión y no hay nada guardado, cae a datos locales de respaldo. Favoritos (`Place.isFavorite`) son puramente locales, no se sincronizan.
- **`database/`**: el esquema (`databaseschema.sql`) y los seeds (`databaseseed_part*.sql`, `databaseseed_events*.sql`, `databaseseed_images.sql`, `databaseseed_business_photos.sql`) con los 50 lugares y 17 eventos reales ya cargados en Neon, incluyendo fotos. Referencia, no se ejecutan automáticamente. Ver `IMAGE_CREDITS.md` para la atribución de cada foto.

## Flujo de trabajo

- Todo lo que sea de la **app iOS** (Swift/SwiftUI/SwiftData, `Tequis Magico/`) se edita directo en los archivos del proyecto Xcode.
- Todo lo que sea del **panel/Vercel/Neon** (`web-admin/`, `database/`) se maneja como cualquier proyecto Next.js normal.
- Un solo repo, un solo remoto de GitHub — ya no hay repos anidados.

## Detalles por pieza

- App iOS: [`Tequis Magico/README.md`](<Tequis Magico/README.md>)
- Panel web: [`web-admin/README.md`](web-admin/README.md)

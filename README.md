# Tequisquiapan Mágico

Monorepo del proyecto: una app iOS nativa, el panel web que la alimenta y el sitio público [tequismagico.com](https://tequismagico.com).

## Estructura

```
tequisMagico/
├── Tequis Magico/        # App iOS (Xcode, SwiftUI + SwiftData)
├── web-admin/             # Panel de administración (Next.js, deploy en Vercel)
├── web/                   # Sitio público tequismagico.com (Next.js, otro proyecto de Vercel)
├── database/              # Esquema y seeds SQL de Neon (Postgres)
├── docs/                  # Toda la documentación (roadmap, panel, datos, propuestas de negocio)
├── app/, lib/              # Restos del scaffold inicial de create-next-app, sin uso (vercel.json ya no los referencia)
└── vercel.json             # Le dice a Vercel que compile el panel desde web-admin/ (web/ tiene el suyo)
```

## Cómo se conectan las piezas

- **Backend real**: Neon (Postgres), consultado desde `web-admin/app/api/`.
- **Panel** (`web-admin/`): Next.js desplegado en Vercel como `tequis-magico` → https://tequis-magico.vercel.app. Lee/escribe directo en Neon. `/admin` y las escrituras del API están protegidas con contraseña compartida (`ADMIN_PASSWORD`); las lecturas (`GET /api/places`, `GET /api/events`) siguen públicas porque la app las necesita sin login. Fotos se suben a Vercel Blob (`tequis-magico-photos`).
- **App iOS** (`Tequis Magico/`): en cada arranque sincroniza `Place` y `Event` desde `GET /api/places` y `GET /api/events` hacia SwiftData (ver `ServicesPlaceAPIService.swift` / `ServicesEventAPIService.swift`), quitando localmente lo que ya no viene activo del API; si no hay conexión y no hay nada guardado, cae a datos locales de respaldo. Favoritos (`Place.isFavorite`) son puramente locales, no se sincronizan.
- **Sitio público** (`web/`): Next.js desplegado en Vercel como `tequis-magico-web` → https://tequismagico.com (dominio y DNS en Hostinger). No toca Neon: lee el mismo `GET /api/places` y `GET /api/events` públicos que la app y se regenera cada 5 min, así web y app muestran lo mismo. Ver [`docs/web/plan-sitio-web.md`](docs/web/plan-sitio-web.md).
- **`database/`**: el esquema (`databaseschema.sql`) y los seeds (`databaseseed_part*.sql`, `databaseseed_events*.sql`, `databaseseed_images.sql`, `databaseseed_business_photos.sql`) con la carga inicial de lugares y los 17 eventos, ya en Neon (no todos los lugares están verificados: ver [`docs/datos/base-de-datos.md`](docs/datos/base-de-datos.md)). Referencia, no se ejecutan automáticamente. Ver [`docs/datos/creditos-imagenes.md`](docs/datos/creditos-imagenes.md) para la atribución de cada foto.

## Flujo de trabajo

- Todo lo que sea de la **app iOS** (Swift/SwiftUI/SwiftData, `Tequis Magico/`) se edita directo en los archivos del proyecto Xcode.
- Todo lo que sea del **panel/Vercel/Neon** (`web-admin/`, `database/`) y del **sitio público** (`web/`) se maneja como cualquier proyecto Next.js normal.
- Un solo repo, un solo remoto de GitHub — ya no hay repos anidados.

## Documentación

Todo está en [`docs/`](docs/README.md): estado del proyecto, roadmap de la app, panel, base de datos, el sitio web público (plan y bitácora) y su propuesta de negocio.

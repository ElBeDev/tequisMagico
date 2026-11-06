# Tequisquiapan Mágico

Monorepo del proyecto: una app iOS nativa, el panel web que la alimenta y el sitio público [tequismagico.com](https://tequismagico.com).

## Estructura

```
tequisMagico/
├── Tequis Magico/        # App iOS (Xcode, SwiftUI + SwiftData)
├── web-admin/             # Panel de administración y API (Next.js)
├── web/                   # Sitio público tequismagico.com (Next.js)
├── database/              # Esquema, seeds SQL y copia de los datos (Postgres)
├── deploy/                # Configuración del servidor y script de despliegue
├── docs/                  # Toda la documentación (roadmap, panel, datos, marca, propuestas de negocio)
└── app/, lib/, vercel.json  # Restos del scaffold y de Vercel, sin uso
```

## Cómo se conectan las piezas

- **Servidor**: todo corre en un solo VPS (ver [`deploy/README.md`](deploy/README.md)).
- **Backend real**: PostgreSQL en ese VPS, consultado desde `web-admin/app/api/`.
- **Panel** (`web-admin/`): Next.js → https://panel.tequismagico.com. Lee y escribe directo en la base. `/admin` y las escrituras del API están protegidas con contraseña compartida (`ADMIN_PASSWORD`); las lecturas (`GET /api/places`, `GET /api/events`) siguen públicas porque la app las necesita sin login. Las fotos se guardan en el disco del servidor.
- **App iOS** (`Tequis Magico/`): en el iPhone se llama "Tequis Mágico" y pide iOS 18 o mayor. En cada arranque sincroniza `Place` y `Event` desde `GET /api/places` y `GET /api/events` hacia SwiftData (ver `ServicesPlaceAPIService.swift` / `ServicesEventAPIService.swift`), quitando localmente lo que ya no viene activo del API; si no hay conexión y no hay nada guardado, cae a datos locales de respaldo. Favoritos (`Place.isFavorite`) son puramente locales, no se sincronizan.
- **Sitio público** (`web/`): Next.js → https://tequismagico.com (dominio y DNS en Hostinger). No toca la base: lee el mismo `GET /api/places` y `GET /api/events` públicos que la app y se regenera cada 5 min, así web y app muestran lo mismo. Ver [`docs/web/plan-sitio-web.md`](docs/web/plan-sitio-web.md).
- **`database/`**: el esquema (`databaseschema.sql`) y los seeds (`databaseseed_part*.sql`, `databaseseed_events*.sql`, `databaseseed_images.sql`, `databaseseed_business_photos.sql`) con la carga inicial de lugares y los 17 eventos (no todos los lugares están verificados: ver [`docs/datos/base-de-datos.md`](docs/datos/base-de-datos.md)). Referencia, no se ejecutan automáticamente. `snapshot_2026-11-05/` es la copia de los datos con la que se restauró la base, y los `*_2026-11*.sql` son las correcciones y altas de noviembre. Ver [`docs/datos/creditos-imagenes.md`](docs/datos/creditos-imagenes.md) para el origen de cada foto.
- **Marca**: el logo es el Globo. Qué archivo usar en cada fondo y cómo regenerarlo, en [`docs/marca/README.md`](docs/marca/README.md).

## Flujo de trabajo

- Todo lo que sea de la **app iOS** (Swift/SwiftUI/SwiftData, `Tequis Magico/`) se edita directo en los archivos del proyecto Xcode.
- Todo lo que sea del **panel** (`web-admin/`, `database/`) y del **sitio público** (`web/`) se maneja como cualquier proyecto Next.js normal.
- Un solo repo, un solo remoto de GitHub — ya no hay repos anidados.

## Documentación

Todo está en [`docs/`](docs/README.md): estado del proyecto, roadmap de la app, panel, base de datos, el sitio web público (plan y bitácora) y su propuesta de negocio.

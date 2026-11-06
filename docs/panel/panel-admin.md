# Panel de administración (`web-admin/`)

Panel de administración de Tequisquiapan Mágico. Next.js + PostgreSQL, en nuestro VPS (https://panel.tequismagico.com). Expone `GET/POST /api/places`, `GET/PUT/DELETE /api/places/[id]`, `GET/POST /api/events` y `GET/PUT/DELETE /api/events/[id]`, consumidos por la app iOS en `Tequis Magico/`. El esquema y seeds de la base están en `database/`.

`/admin` (login, CRUD de lugares con fotos en el disco del servidor, analytics) requiere la contraseña en `ADMIN_PASSWORD` — protegido en `proxy.ts` (antes `middleware.ts`; Next.js 16 renombró la convención). Las lecturas del API (`GET`) siguen públicas a propósito, la app las necesita sin login; solo las escrituras y `/api/upload` piden sesión.

## Qué tiene

| Ruta | Para qué sirve |
|---|---|
| `/admin/login` | Entrar con la contraseña compartida |
| `/admin/places` | Crear, editar y eliminar lugares, con su galería de fotos |
| `/admin/events` | Crear, editar y eliminar eventos |
| `/admin/analytics` | Lugares por categoría y por nivel de negocio, y los mejor calificados |

## Lo que hay que saber

- **Eliminar un lugar** solo lo desactiva (`is_active = false`). Desaparece del panel, de la app y del sitio, y hoy solo se reactiva por SQL.
- **"Sin verificar"** significa `content_verified = false`: nadie ha confirmado sus datos. No es lo mismo que `is_verified`, la insignia que el usuario ve en la app.
- **Fotos:** hasta 10 MB cada una, y se guardan en `/srv/tequis/uploads`. La foto real de un lugar sale solo de su propia web; ver [`../datos/creditos-imagenes.md`](../datos/creditos-imagenes.md).
- **Lugar nuevo:** tarda hasta 5 minutos en verse en el sitio, y sale en español en `/en` hasta que se traduzca en `web/lib/i18n/data-en.ts`.

## Correrlo en tu Mac

```bash
cd web-admin
npm install
npm run dev -- -p 3100
```

Abre http://localhost:3100/admin. El puerto 3100 evita que choque con `web/`, que usa el 3000.

`next dev` lee las variables de `web-admin/.env.local`, que no entra a git:

| Variable | Para qué sirve |
|---|---|
| `DATABASE_URL` | La base. La del VPS solo escucha en local, así que aquí va un PostgreSQL de tu Mac; [`../datos/base-de-datos.md`](../datos/base-de-datos.md) explica cómo reconstruirla |
| `ADMIN_PASSWORD` | La contraseña del panel |
| `UPLOAD_DIR` | Carpeta donde se guardan las fotos |
| `PUBLIC_UPLOAD_URL` | La dirección con la que se ven esas fotos |

**Ojo:** el `.env.local` que hay hoy es de cuando el panel estaba en Vercel. Su `DATABASE_URL` apunta a Neon, que ya no existe, y le faltan las dos variables de fotos, así que hay que rehacerlo antes de correr el panel en local.

Para probar `web/` contra este panel, córrelo con `TEQUIS_API_URL=http://localhost:3100`.

## Despliegue

Ver [`../../deploy/README.md`](../../deploy/README.md).

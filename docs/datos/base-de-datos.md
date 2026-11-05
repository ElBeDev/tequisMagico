# Base de datos (PostgreSQL)

La base es PostgreSQL 18 y vive en nuestro VPS (solo escucha en local; el panel entra por socket). Hasta el 5 nov 2026 estuvo en la base. La usa el panel (`web-admin/`) y la consume la app iOS vía `GET /api/places` y `GET /api/events`. Los archivos SQL están en [`database/`](../../database/).

## Archivos

- `database/snapshot_2026-11-05/` — copia en JSON de los 47 lugares y 17 eventos activos, con sus IDs. **De aquí se restauró la base** al migrar: Neon se dio de baja sin sacar un respaldo y los datos salieron de la caché de compilación de la web. Lo que el API no devolvía no se recuperó: los lugares desactivados (Puerta del Lobo, Grutas Los Herrera, Hotel El Relox) y las tablas `users`, `reviews` y `favorites`.
- `database/databaseseed_business_photos_2026-11.sql` — fotos reales de 4 negocios, aplicado.
- `database/databasefix_research_2026-11.sql` — aplicado el 5 nov 2026: viñedos, La Redonda fuera de destacados y 11 lugares sin evidencia desactivados.
- `database/databasefix_direcciones_2026-11-05.sql` — aplicado el 5 nov 2026: direcciones y pines de los lugares con fuente.
- `database/databaseseed_lugares_reales_2026-11.sql` — aplicado el 5 nov 2026: 9 lugares reales (2 queserías, 1 viñedo, 4 mercados y 2 balnearios) y el teléfono de Vuela en Globo.
- `database/databaseschema.sql` — esquema de referencia de las tablas `places` y `events`. Se actualiza a mano cada vez que se corre un `ALTER TABLE` (último cambio: columna `content_verified`).
- `database/databaseseed_part1.sql`, `databaseseed_part2.sql`, `databaseseed_part3_final.sql` — la carga inicial de 50 lugares. **Ojo**: no todos están verificados como negocios reales (ver abajo).
- `database/databasefix_research_2026-09.sql` — registro de las correcciones aplicadas tras investigar teléfono/sitio/horario de los 50 lugares: columna `content_verified`, datos nuevos de 7 lugares, 3 lugares desactivados y 1 dirección corregida. Ya está aplicado; solo es referencia.
- `database/databaseseed_events.sql` — 8 eventos reales (Feria del Queso y Vino, Festival del Globo, etc.).
- `database/databaseseed_events_tequistravel.sql` — 9 eventos más (Fiesta de la Fundación, Santa Cruz, Santa María de la Asunción, Posadas, Enamórate en Tequisquiapan, etc.), tomados y parafraseados de [tequis.travel](https://tequis.travel/fiestas_y_eventos_tequisquiapan/). 17 eventos en total.
- `database/databaseseed_images.sql` — asigna fotos de Wikimedia Commons a los lugares/eventos que no tenían. La atribución obligatoria de cada foto (licencias CC) está en [`creditos-imagenes.md`](creditos-imagenes.md).
- `database/databaseseed_business_photos.sql` — fotos reales de negocios destacados, revisadas a mano en su sitio oficial.

Estos archivos son de referencia: correrlos otra vez reinsertaría los mismos lugares (no hay `ON CONFLICT`/upsert), así que no son idempotentes.

Para reconstruir la base desde el repo: `databaseschema.sql`, `snapshot_2026-11-05/` y luego, en este orden, `databaseseed_business_photos_2026-11.sql`, `databasefix_research_2026-11.sql`, `databasefix_direcciones_2026-11-05.sql` y `databaseseed_lugares_reales_2026-11.sql`. Lo normal es restaurar el respaldo diario del servidor; esto es para cuando se perdió también el servidor. Las fotos propias no están en el repo.

## Qué tan confiables son los datos

Tras investigar los lugares de la carga inicial (septiembre y noviembre de 2026):

| Estado | Cuántos | Qué significa |
|---|---|---|
| `content_verified = true` | 17 | Teléfono/sitio/horario confirmados contra una fuente externa |
| Desactivados (`is_active = false`) | 11 | Lugares sin evidencia de que existan (lista en `databasefix_research_2026-11.sql`). Quesería Vai y Balneario El Oasis sí existen con otro nombre y otra dirección, y hay que darlos de alta de nuevo |
| Sin verificar | 28 activos | 26 sin web propia encontrada, con dirección y pin de la carga inicial que no son confiables, y hay que confirmarlos llamando o visitando (incluye La Redonda, con operación suspendida). Los otros 2 son Parque Acuático El Oasis y Termas del Rey: existen según la prensa, pero tienen pin aproximado y horarios que se contradicen |

`content_verified` es distinto de `is_verified`: el segundo es la insignia "Verificado" que el usuario ve en la app.

## Documentos históricos

El catálogo con el que se armó la carga inicial y el setup original del proyecto están en [`../historico/`](../historico/). Son de antes de la investigación: no los tomes como datos confirmados.

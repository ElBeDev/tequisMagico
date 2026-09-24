# Base de datos (Neon / Postgres)

La base vive en Neon (Postgres). La usa el panel (`web-admin/`) y la consume la app iOS vía `GET /api/places` y `GET /api/events`. Los archivos SQL están en [`database/`](../../database/).

## Archivos

- `database/databaseschema.sql` — esquema de referencia de las tablas `places` y `events`. Se actualiza a mano cada vez que se corre un `ALTER TABLE` en Neon (último cambio: columna `content_verified`).
- `database/databaseseed_part1.sql`, `databaseseed_part2.sql`, `databaseseed_part3_final.sql` — la carga inicial de 50 lugares, ya en Neon. **Ojo**: no todos están verificados como negocios reales (ver abajo).
- `database/databasefix_research_2026-09.sql` — registro de las correcciones aplicadas en Neon tras investigar teléfono/sitio/horario de los 50 lugares: columna `content_verified`, datos nuevos de 7 lugares, 3 lugares desactivados y 1 dirección corregida. Ya está aplicado; solo es referencia.
- `database/databaseseed_events.sql` — 8 eventos reales (Feria del Queso y Vino, Festival del Globo, etc.), ya en Neon.
- `database/databaseseed_events_tequistravel.sql` — 9 eventos más (Fiesta de la Fundación, Santa Cruz, Santa María de la Asunción, Posadas, Enamórate en Tequisquiapan, etc.), tomados y parafraseados de [tequis.travel](https://tequis.travel/fiestas_y_eventos_tequisquiapan/), ya en Neon. 17 eventos en total.
- `database/databaseseed_images.sql` — asigna fotos de Wikimedia Commons a los lugares/eventos que no tenían. La atribución obligatoria de cada foto (licencias CC) está en [`creditos-imagenes.md`](creditos-imagenes.md).
- `database/databaseseed_business_photos.sql` — fotos reales de negocios destacados, revisadas a mano en su sitio oficial.

Estos archivos son de referencia: correrlos otra vez reinsertaría los mismos lugares (no hay `ON CONFLICT`/upsert), así que no son idempotentes.

## Qué tan confiables son los datos

Tras investigar los 50 lugares de la carga inicial (septiembre 2026):

| Estado | Cuántos | Qué significa |
|---|---|---|
| `content_verified = true` | 11 | Teléfono/sitio/horario confirmados contra una fuente externa |
| Desactivados (`is_active = false`) | 3 | Puerta del Lobo y Grutas Los Herrera (están en otros municipios), Hotel El Relox (aún no opera) |
| Sin verificar | ~36 activos | Sin ninguna presencia web indexada; hay que confirmarlos llamando o visitando |

`content_verified` es distinto de `is_verified`: el segundo es la insignia "Verificado" que el usuario ve en la app.

## Documentos históricos

El catálogo con el que se armó la carga inicial y el setup original del proyecto están en [`../historico/`](../historico/). Son de antes de la investigación: no los tomes como datos confirmados.

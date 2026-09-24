# Database

Esquema y seeds SQL de la base en Neon (Postgres) que usa `web-admin` y consume la app iOS vía `/api/places`.

- `databaseschema.sql` — define las tablas `places` y `events`.
- `databaseseed_part1.sql`, `databaseseed_part2.sql`, `databaseseed_part3_final.sql` — la carga inicial de 50 lugares, ya en Neon. **Ojo**: no todos están verificados como negocios reales — ver `databasefix_research_2026-09.sql` y la columna `content_verified`.
- `databasefix_research_2026-09.sql` — registro de las correcciones aplicadas en Neon tras investigar teléfono/sitio/horario de los 50 lugares (columna `content_verified`, datos nuevos de 7 lugares, 3 lugares desactivados, 1 dirección corregida). Ya está aplicado; solo es referencia.
- `databaseseed_events.sql` — los 8 eventos reales (Feria del Queso y Vino, Festival del Globo, etc.), ya cargados en Neon.
- `databaseseed_events_tequistravel.sql` — 9 eventos reales más (Fiesta de la Fundación, Santa Cruz, Santa María de la Asunción, Posadas, Enamórate en Tequisquiapan, etc.), tomados y parafraseados de [tequis.travel](https://tequis.travel/fiestas_y_eventos_tequisquiapan/), ya cargados en Neon. 17 eventos en total.
- `databaseseed_images.sql` — asigna fotos de Wikimedia Commons a los places/events que no tenían. Ver `IMAGE_CREDITS.md` para la atribución obligatoria de cada foto (licencias CC).
- `datatequisquiapan_complete_database.md`, `docsDATABASE_SETUP.md` — notas de referencia sobre el modelo de datos.

Estos archivos son de referencia: correrlos de nuevo reinsertaría los mismos lugares (no hay `ON CONFLICT`/upsert), así que no son idempotentes.

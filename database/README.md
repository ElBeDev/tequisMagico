# Database

Esquema y seeds SQL de la base en Neon (Postgres) que usa `web-admin` y consume la app iOS vía `/api/places`.

- `databaseschema.sql` — define las tablas `places` y `events`.
- `databaseseed_part1.sql`, `databaseseed_part2.sql`, `databaseseed_part3_final.sql` — los 50 lugares reales de Tequisquiapan, ya cargados en Neon.
- `databaseseed_events.sql` — los 8 eventos reales (Feria del Queso y Vino, Festival del Globo, etc.), ya cargados en Neon.
- `datatequisquiapan_complete_database.md`, `docsDATABASE_SETUP.md` — notas de referencia sobre el modelo de datos.

Estos archivos son de referencia: correrlos de nuevo reinsertaría los mismos lugares (no hay `ON CONFLICT`/upsert), así que no son idempotentes.

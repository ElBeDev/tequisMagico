# Base de datos (PostgreSQL)

La base es PostgreSQL 18 y vive en nuestro VPS (solo escucha en local; el panel entra por socket). Hasta el 5 nov 2026 estuvo en Neon. La usa el panel (`web-admin/`) y la consume la app iOS vía `GET /api/places` y `GET /api/events`. Los archivos SQL están en [`database/`](../../database/).

## Archivos

- `database/snapshot_2026-11-05/` — copia en JSON de los 47 lugares y 17 eventos activos, con sus IDs. **De aquí se restauró la base** al migrar: Neon se dio de baja sin sacar un respaldo y los datos salieron de la caché de compilación de la web. Lo que el API no devolvía no se recuperó: los lugares desactivados (Puerta del Lobo, Grutas Los Herrera, Hotel El Relox) y las tablas `users`, `reviews` y `favorites`.
- `database/databaseseed_business_photos_2026-11.sql` — fotos reales de 4 negocios, aplicado.
- `database/databasefix_research_2026-11.sql` — aplicado el 5 nov 2026: viñedos, La Redonda fuera de destacados y 11 lugares sin evidencia desactivados.
- `database/databasefix_direcciones_2026-11-05.sql` — aplicado el 5 nov 2026: direcciones y pines de los lugares con fuente.
- `database/databaseseed_lugares_reales_2026-11.sql` — aplicado el 5 nov 2026: 9 lugares reales (2 queserías, 1 viñedo, 4 mercados y 2 balnearios) y el teléfono de Vuela en Globo.
- `database/databaseseed_hospedaje_2026-11-10.sql`, `databaseseed_gastronomia_2026-11-10.sql`, `databaseseed_balnearios_vinedos_2026-11-10.sql` y `databasefix_ajustes_2026-11-10.sql` — aplicados el 10 nov 2026 (respaldo previo en `/root/respaldos/` del VPS): 83 altas (51 hospedajes, 26 restaurantes, 6 viñedos y tours), 14 correcciones y 19 bajas de la carga inicial sin rastro (3 hoteles, 13 restaurantes y 3 de cestería). Investigación en `docs/datos/investigacion-*-2026-11.md`.
- `database/databaseschema.sql` — esquema de referencia de las tablas `places` y `events`. Se actualiza a mano cada vez que se corre un `ALTER TABLE` (último cambio: columna `content_verified`).
- `database/databaseseed_part1.sql`, `databaseseed_part2.sql`, `databaseseed_part3_final.sql` — la carga inicial de 50 lugares. **Ojo**: no todos están verificados como negocios reales (ver abajo).
- `database/databasefix_research_2026-09.sql` — registro de las correcciones aplicadas tras investigar teléfono/sitio/horario de los 50 lugares: columna `content_verified`, datos nuevos de 7 lugares, 3 lugares desactivados y 1 dirección corregida. Ya está aplicado; solo es referencia.
- `database/databaseseed_events.sql` — 8 eventos reales (Feria del Queso y Vino, Festival del Globo, etc.).
- `database/databaseseed_events_tequistravel.sql` — 9 eventos más (Fiesta de la Fundación, Santa Cruz, Santa María de la Asunción, Posadas, Enamórate en Tequisquiapan, etc.), tomados y parafraseados de [tequis.travel](https://tequis.travel/fiestas_y_eventos_tequisquiapan/). 17 eventos en total.
- `database/databaseseed_images.sql` — asigna fotos de Wikimedia Commons a los lugares/eventos que no tenían. La atribución obligatoria de cada foto (licencias CC) está en [`creditos-imagenes.md`](creditos-imagenes.md).
- `database/databaseseed_business_photos.sql` — fotos reales de negocios destacados, revisadas a mano en su sitio oficial.

- `database/databaseseed_denue_2026-11-11.sql` — 84 altas con el DENUE del INEGI como segunda fuente (ver [`denue-2026-11.md`](denue-2026-11.md)).

Estos archivos son de referencia: correrlos otra vez reinsertaría los mismos lugares (no hay `ON CONFLICT`/upsert), así que no son idempotentes.

Para reconstruir la base desde el repo: `databaseschema.sql`, `snapshot_2026-11-05/` y luego, en este orden, `databaseseed_business_photos_2026-11.sql`, `databasefix_research_2026-11.sql`, `databasefix_direcciones_2026-11-05.sql` y `databaseseed_lugares_reales_2026-11.sql`. Lo normal es restaurar el respaldo diario del servidor; esto es para cuando se perdió también el servidor. Las fotos propias no están en el repo.

## Qué tan confiables son los datos

Al 10 nov 2026 hay **114 lugares activos**: 52 de hospedaje, 32 de comida, 20 experiencias, 5 sitios turísticos y 5 de compras.

| Estado | Cuántos | Qué significa |
|---|---|---|
| `content_verified = true` | 41 | Web propia, verificada como del negocio, que confirma teléfono y dirección (y horario en restaurantes y actividades) |
| `content_verified = false` | 73 | Casi todos tienen como única fuente a Turismo municipal (tequis.travel y el Directorio Tequisquiapan 2025 cuentan como una sola): nombre, dirección y teléfono coinciden entre las dos, pero no hay web propia. No llevan amenidades salvo que dos fuentes coincidan, y usan la foto genérica de su categoría |
| Desactivados | 30 en total | Los 11 de noviembre más 19 del 10 nov 2026: lugares de la carga inicial sin ningún rastro en internet ni en el directorio municipal |

## Redes sociales

`instagram_url` y `facebook_url` (columnas nuevas del 16 nov 2026, `database/databasefix_redes_2026-11-16.sql`) guardan la URL completa de la cuenta oficial del negocio. Es oficial si su teléfono, dirección o web coinciden con los del negocio. El panel las edita y rechaza cualquier URL que no sea de instagram.com o facebook.com. El 16 nov 2026 se llenaron 45 lugares: los cuatro viñedos revisados ese día; 39 con web propia, con las cuentas que enlaza su web (`database/databasefix_redes_webs_2026-11-16.sql`, con los descartes explicados); y Norte B y Los Rosales (`databasefix_redes_vinedos_2026-11-16.sql`). Los 12 viñedos tienen Instagram y Facebook. Al dar de alta o revisar un lugar, cópialas de su web o confirma la cuenta como en los viñedos.

## Vocabulario de amenidades, etiquetas y subcategorías

Las páginas por necesidad de la web (`web/lib/tipos.ts`: "hoteles con alberca", "restaurantes pet friendly"…) filtran por estas palabras exactas en `amenities` o `tags`. Escríbelas igual al dar de alta, y solo si la fuente lo dice (la web del lugar; los íconos de tequis.travel no son fiables, hay fichas copiadas de otro hotel):

- **Hospedaje (amenities):** `Alberca`, `Alberca techada`, `Alberca climatizada`, `Jacuzzi`, `Jacuzzi privado`, `Pozas privadas`, `Spa`, `Temazcal`, `Pet Friendly`, `Desayuno incluido`, `Comidas incluidas`, `Estacionamiento`, `Restaurante`, `Solo adultos`, `Bodas y eventos`, `WiFi`.
- **Comida (amenities):** `Desayunos`, `Terraza`, `Pet Friendly`, `Área de juegos`, `Música en vivo`, `Reservaciones`, `Para llevar`, `Delivery`, `Bar`, `Vinos locales`, `Opciones veganas`.
- **Etiquetas:** `Centro` (a pie de la Plaza Miguel Hidalgo, ~1 km), `Familiar`, `Romántico` (solo si el negocio se anuncia así), `Cortes`, `Mariscos`, `Pizza`, `Mexicana`, `Italiana`, `Barbacoa`, `Café`, `Postres`, `Hamburguesas`, `Gratis`, `De noche`. En experiencias, `Camping`.
- **Subcategorías:** hospedaje `Hotel`, `Hotel Boutique`, `Cabañas`, `Glamping`; comida `Restaurante`, `Cafetería`, `Bar`, `Pizzería`, `Nevería`, `Antojitos`, `Mariscos`, `Parrilla`, `Panadería`, `Cervecería`; experiencias `Viñedo`, `Quesería`, `Balneario`, `Spa`, `Temazcal`, `Globo Aerostático`, `Tour`, `Taller`, `Cabalgata`, `Mina de ópalo`, `Granja`; turístico `Templo`, `Plaza`, `Monumento`, `Parque`, `Naturaleza`, `Museo`, `Hacienda`, `Galería`.

Toda amenidad, etiqueta o subcategoría nueva necesita su traducción en `web/lib/i18n/data-en.ts` (`TERMS_EN`, `SUBCATEGORIES_EN`) y, si es subcategoría, su plural en español en `SUBCATEGORY_PLURALS` de `web/lib/data.ts`. Los ids de lugares nuevos son `uuid5(NAMESPACE_URL, 'https://tequismagico.com/lugar/<slug>')`.

`content_verified` es distinto de `is_verified`: el segundo es la insignia "Verificado" que el usuario ve en la app.

## Documentos históricos

El catálogo con el que se armó la carga inicial y el setup original del proyecto están en [`../historico/`](../historico/). Son de antes de la investigación: no los tomes como datos confirmados.

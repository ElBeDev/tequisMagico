# Créditos de fotos

Todas las fotos de `places`/`events` vienen de Wikimedia Commons bajo licencias libres que exigen atribución. Son fotos **representativas por categoría** (p. ej. una foto genérica de "quesería" para todos los negocios de esa subcategoría), no necesariamente del negocio exacto — excepción hecha de las de la Plaza Miguel Hidalgo, la Iglesia y los globos, que sí son de Tequisquiapan/Querétaro específicamente.

La app muestra el crédito agregado en Perfil → Créditos de fotos (`ViewsProfileView.swift`). La web (tequismagico.com) usa las mismas fotos de la base y, además, 16 fotos editoriales de Tequis (portada, historia, guía) que viven en `web/lib/photos.ts` con autor y licencia; todas aparecen solas en https://tequismagico.com/creditos. Si se reemplaza cualquiera de estas fotos por una real del negocio, hay que quitar su fila de aquí.

| Foto | Autor | Licencia | Uso |
|---|---|---|---|
| [Plaza_principal_en_Tequisquiapan.jpg](https://commons.wikimedia.org/wiki/File:Plaza_principal_en_Tequisquiapan.jpg) | A01651034 MaferGonzález | CC BY-SA 4.0 | turistico/Plaza; eventos: Fiestas Patrias, Año Nuevo en la Plaza, Día de Muertos |
| [Iglesia_Tequisquiapan.jpg](https://commons.wikimedia.org/wiki/File:Iglesia_Tequisquiapan.jpg) | A01197141 Zuriel | CC BY-SA 4.0 | turistico/Templo; evento: Semana Santa |
| [Portales_de_Tequisquiapan.jpg](https://commons.wikimedia.org/wiki/File:Portales_de_Tequisquiapan.jpg) | A01703787 Edith | CC BY-SA 4.0 | turistico/Grutas,Monumento,Museo,Naturaleza,Parque; experiencias/Taller,Tour |
| [Globos_Querétaro.jpg](https://commons.wikimedia.org/wiki/File:Globos_Quer%C3%A9taro.jpg) | Melissaromeroor | CC BY-SA 4.0 | experiencias/Globo Aerostático; evento: Festival del Globo |
| [Cata_de_quesos_y_vino.jpg](https://commons.wikimedia.org/wiki/File:Cata_de_quesos_y_vino.jpg) | Axel Ricardo Ramos Muñoz | CC BY-SA 4.0 | experiencias/Quesería,Viñedo; eventos: Feria Nacional del Queso y Vino, Festival del Vino Joven |
| [Tequis_Hotel_Pool_(4)_-_Flickr_-_Carl_Campbell.jpg](https://commons.wikimedia.org/wiki/File:Tequis_Hotel_Pool_(4)_-_Flickr_-_Carl_Campbell.jpg) | Carl Campbell ([Flickr](https://www.flickr.com/photos/carlbcampbell/50321347871/)) | CC BY 2.0 | experiencias/Balneario,Spa; hospedaje (todas) |
| [Gastronomía_mexicana.jpg](https://commons.wikimedia.org/wiki/File:Gastronom%C3%ADa_mexicana.jpg) | Enrique Damián (Kikeedm) | CC BY-SA 4.0 | gastronomia (todas las subcategorías) — genérica |
| [Artesanías_en_Tequisquiapan.jpg](https://commons.wikimedia.org/wiki/File:Artesan%C3%ADas_en_Tequisquiapan.jpg) | WikiMZC | CC BY-SA 4.0 | compras (todas las subcategorías); evento: Festival de la Cestería |

Asignación aplicada con `database/databaseseed_images.sql`.

## Fotos reales de negocios (5 nov 2026)

Regla: la foto real de un lugar sale **solo de su propia web**, revisada a mano. Si no tiene web, se queda con la genérica de categoría.

Estas 25 fotos se copiaron a `/srv/tequis/uploads/lugares/` (se sirven desde `panel.tequismagico.com`, ya no son hotlink) y se aplicaron con `database/databaseseed_business_photos_2026-11.sql` y `database/databaseseed_lugares_reales_2026-11.sql`.

| Lugar | Archivo | Página de origen | Archivo original |
|---|---|---|---|
| K'puchinos Restaurant | `kpuchinos-entrada.jpg` | [kpuchinos.com.mx/blog-kpuchinos-tequisquiapan-queretaro](https://kpuchinos.com.mx/blog-kpuchinos-tequisquiapan-queretaro/) | [original](https://kpuchinos.com.mx/wp-content/uploads/2026/04/IMG_5279-scaled.jpg) |
| K'puchinos Restaurant | `kpuchinos-salon.jpg` | [kpuchinos.com.mx/blog-kpuchinos-tequisquiapan-queretaro](https://kpuchinos.com.mx/blog-kpuchinos-tequisquiapan-queretaro/) | [original](https://kpuchinos.com.mx/wp-content/uploads/2023/05/Instalacion-Kpuchinos-2048x1560.png) |
| K'puchinos Restaurant | `kpuchinos-terraza-la-luna.jpg` | [kpuchinos.com.mx/blog-kpuchinos-tequisquiapan-queretaro](https://kpuchinos.com.mx/blog-kpuchinos-tequisquiapan-queretaro/) | [original](https://kpuchinos.com.mx/wp-content/uploads/2023/05/laLunaTerraza.jpeg) |
| K'puchinos Restaurant | `kpuchinos-bar.jpg` | [kpuchinos.com.mx/blog-kpuchinos-tequisquiapan-queretaro](https://kpuchinos.com.mx/blog-kpuchinos-tequisquiapan-queretaro/) | [original](https://kpuchinos.com.mx/wp-content/uploads/2023/06/DSC_1544-scaled-e1686840977709.jpg) |
| K'puchinos Restaurant | `kpuchinos-platillos.jpg` | [kpuchinos.com.mx/blog-kpuchinos-tequisquiapan-queretaro](https://kpuchinos.com.mx/blog-kpuchinos-tequisquiapan-queretaro/) | [original](https://kpuchinos.com.mx/wp-content/uploads/2026/04/IMG_3193-scaled-e1775202211138.jpg) |
| K'puchinos Restaurant | `kpuchinos-escamoles.jpg` | [kpuchinos.com.mx/blog-kpuchinos-tequisquiapan-queretaro](https://kpuchinos.com.mx/blog-kpuchinos-tequisquiapan-queretaro/) | [original](https://kpuchinos.com.mx/wp-content/uploads/2025/04/Escamoles1-2048x1536.jpg) |
| Viñedos Azteca | `vinedos-azteca-fuente.jpg` | [vinedosazteca.com/kowine](https://vinedosazteca.com/kowine/) | [original](https://vinedosazteca.com/kowine/wp-content/uploads/2026/01/Vinedo1.jpg) |
| Viñedos Azteca | `vinedos-azteca-lago.jpg` | [vinedosazteca.com/kowine/nosotros](https://vinedosazteca.com/kowine/nosotros/) | [original](https://vinedosazteca.com/kowine/wp-content/uploads/2025/01/vinedo-azteca_lago-1024x768.webp) |
| Freixenet México | `sala-vive-vinedo.jpg` | [salavive.mx/inicio-2/nuestra-historia](https://salavive.mx/inicio-2/nuestra-historia/) | [original](https://salavive.mx/wp-content/uploads/2022/05/Vinedos-Freixenet-Mexico-historia.jpg) |
| Freixenet México | `sala-vive-edificio.jpg` | [salavive.mx/inicio-2/nuestra-historia](https://salavive.mx/inicio-2/nuestra-historia/) | [original](https://salavive.mx/wp-content/uploads/2022/11/nuestra-historia_NOV22_min.jpg) |
| Freixenet México | `sala-vive-cava.jpg` | [salavive.mx](https://salavive.mx) | [original](https://salavive.mx/wp-content/uploads/2021/09/Botellas-de-vino-espumoso-en-cava-1024x683.jpg) |
| Freixenet México | `sala-vive-cabalgata.jpg` | [salavive.mx/inicio-2/enoturismo/cabalgando-en-vinedos](https://salavive.mx/inicio-2/enoturismo/cabalgando-en-vinedos/) | [original](https://salavive.mx/wp-content/uploads/2022/05/Enoturismo-Freixenet-Mexico-cabalgando.jpg) |
| Globos Aerostáticos Tequisquiapan | `globos-tequis-hacienda.jpg` | [vuelaenglobo.com/tequisquiapan](https://vuelaenglobo.com/tequisquiapan/) | [original](https://vuelaenglobo.com/wp-content/uploads/2018/06/ale_3750.jpg) |
| Globos Aerostáticos Tequisquiapan | `globos-tequis-despegue.jpg` | [vuelaenglobo.com/tequisquiapan](https://vuelaenglobo.com/tequisquiapan/) | [original](https://vuelaenglobo.com/wp-content/uploads/2018/06/ale_3736.jpg) |
| Globos Aerostáticos Tequisquiapan | `globos-tequis-vinedo.jpg` | [vuelaenglobo.com/tequisquiapan](https://vuelaenglobo.com/tequisquiapan/) | [original](https://vuelaenglobo.com/wp-content/uploads/2018/06/img_8807.jpg) |
| Globos Aerostáticos Tequisquiapan | `globos-tequis-valle.jpg` | [vuelaenglobo.com/tequisquiapan](https://vuelaenglobo.com/tequisquiapan/) | [original](https://vuelaenglobo.com/wp-content/uploads/2018/06/ale_5291.jpg) |
| Globos Aerostáticos Tequisquiapan | `globos-tequis-parroquia.jpg` | [vuelaenglobo.com/tequisquiapan](https://vuelaenglobo.com/tequisquiapan/) | [original](https://vuelaenglobo.com/wp-content/uploads/2018/06/1-VUELO-compartido.jpg) |
| Cava de Quesos Bocanegra | `cava-bocanegra-cava.jpg` | [www.cavabocanegra.com/experiencias](https://www.cavabocanegra.com/experiencias) | [original](https://images.squarespace-cdn.com/content/v1/6194526668de7b677826a3d7/0a2ccbf0-9de0-478b-a363-e0f80a84d899/IMG_2157.jpg) |
| Cava de Quesos Bocanegra | `cava-bocanegra-estantes.jpg` | [www.cavabocanegra.com/cava-de-quesos](https://www.cavabocanegra.com/cava-de-quesos) | [original](https://images.squarespace-cdn.com/content/v1/6194526668de7b677826a3d7/0e874b9b-0559-4101-8b21-4cbd9db076c3/CB_QUESOS_SEP-79.jpg) |
| Cava de Quesos Bocanegra | `cava-bocanegra-queso.jpg` | [www.cavabocanegra.com](https://www.cavabocanegra.com/) | [original](https://images.squarespace-cdn.com/content/v1/6194526668de7b677826a3d7/d319e678-bfa5-44a0-9004-9fa8852d9020/CB_QUESOS_SEP-86.jpg) |
| Cava de Quesos Bocanegra | `cava-bocanegra-terraza.jpg` | [www.cavabocanegra.com/restaurante](https://www.cavabocanegra.com/restaurante) | [original](https://images.squarespace-cdn.com/content/v1/6194526668de7b677826a3d7/8f573f29-6b6d-40a3-b3c3-e2c268f57772/CBN_FIESTA_PAPALOTES-146.jpg) |
| Bodegas De Cote | `de-cote-vista-aerea.jpg` | [decote.mx](https://decote.mx) | [original](https://decote.mx/mediamanager/33df3d065f0130255d455a86c0f3ea7d2cacbc58.jpg) |
| Bodegas De Cote | `de-cote-barricas.jpg` | [decote.mx/blog/posts/clima_en_de_cote_el_sol_la_temperatura_y_las_lluvias_en_el_vinedo](https://decote.mx/blog/posts/clima_en_de_cote_el_sol_la_temperatura_y_las_lluvias_en_el_vinedo) | [original](https://decote.mx/mediamanager/5b1bcaecff428c9a5b3e835b6f99a80f4e806b22.jpg) |
| Finca VAI | `finca-vai-rancho.jpg` | [www.quesosvai.com/nosotros.html](https://www.quesosvai.com/nosotros.html) | [original](https://www.quesosvai.com/images/12.jpg) |
| Finca VAI | `finca-vai-sotano.jpg` | [www.quesosvai.com/nosotros.html](https://www.quesosvai.com/nosotros.html) | [original](https://www.quesosvai.com/images/11.jpg) |

⚠️ **Permisos**: ninguna tiene autorización escrita del negocio. Hay que pedirla o quitarlas. Si un negocio lo pide, borra su archivo y cambia `image_urls` y `thumbnail_url` en `places`. Se descartaron dos: una de Globos firmada "© Samuel Vega", porque tiene otro autor, y la fachada de K'puchinos, porque es una prueba de color con el texto "Pantone 475" sobre la pared.

**Sin foto real, y por qué:**
- **Mercado Tequesquicalli**: no tiene web. Usa `Tequis009.jpg` de Wikimedia Commons (Thelmadatter, CC BY-SA 4.0), que es de ese mismo mercado y ya se acreditaba en la web; también está en los créditos de la app.
- **Telésforo Trejo, Guadalupano, Parador Colosio, El Oasis y Termas del Rey**: no tienen web. Usan las genéricas de categoría ya acreditadas.
- **Viñedos La Redonda**: su web está en mantenimiento y la tienda pide contraseña. Solo hay una imagen para redes con el logo encima, y su operación está suspendida.
- **Los Rosales Viñedos**: `vinedoslosrosales.com.mx` hoy es un sitio de apuestas. El dominio fue secuestrado; no se usó nada de ahí.
- **Hotel Museo La Casona**: `lacasonatequisquiapan.com` redirige a un sitio de tragamonedas, y ese hotel está en otra dirección (Camino al Sauz, no Morelos 11).
- **La Casa del Atrio** y **Hotel Hidalgo**: los que aparecen con ese nombre están en Querétaro capital.
- **Templo, Plaza Miguel Hidalgo, La Pila, Parque La Pila y Presa Centenario**: son lugares públicos, sin web propia.
- **Los otros lugares sin confirmar**: no se les encontró web en un buscador general (5 nov 2026).

## Historial anterior

### Fotos reales de negocios específicos (hasta oct 2026; ya no aplica a Freixenet ni Globos)

Para un puñado de lugares destacados (`is_featured = true`) sí conseguimos la foto real del negocio, tomada de su propio sitio oficial (no de Google Maps ni redes — eso rompe términos de servicio o no es del negocio). Se revisó a mano uno por uno, no se hizo para los 50. Aplicado con `database/databaseseed_business_photos.sql`.

| Lugar | Foto | Fuente |
|---|---|---|
| Freixenet México | Cava con botellas de espumoso | [salavive.mx](https://salavive.mx) (sitio oficial actual; el `website` que tenía la DB, freixenet.com.mx, ya no resuelve) |
| Viñedos Puerta del Lobo | Viñedo con vista al valle | [puertadellobo.mx](https://puertadellobo.mx) |
| Globos Aerostáticos Tequisquiapan | Globos inflándose en Tequisquiapan | [vuelaenglobo.com/tequisquiapan](https://vuelaenglobo.com/tequisquiapan/) |

**Corregido en septiembre 2026:**
- **La Casa del Atrio**: su foto venía de lacasadelatrio.com, que resultó ser un hotel homónimo en Querétaro capital, no el de Tequisquiapan. Se regresó a la foto genérica de hospedaje.
- **Viñedos Puerta del Lobo**: se desactivó (el negocio está en El Marqués), así que su foto ya no se muestra.

⚠️ **Permisos**: estas fotos se usan sin permiso escrito de los negocios, y desde el 1 nov 2026 la web pública (tequismagico.com) ya las muestra. Hay que pedirles autorización por escrito o reemplazarlas por fotos propias (ver `docs/negocio/propuesta-sitio-web.md`).

**No se pudo conseguir** (se quedan con la foto genérica de categoría): Viñedos La Redonda (su sitio, laredondavinos.com, está en mantenimiento) y La Estancia Tequisquiapan (no se le encontró sitio ni redes sociales).

Estas fotos son hotlink directo a los sitios de los negocios (no se re-subieron a nuestra infraestructura). Si algún negocio pide que se quiten, hay que actualizar `thumbnail_url`/`image_urls` en `places` y borrar su fila de esta tabla.

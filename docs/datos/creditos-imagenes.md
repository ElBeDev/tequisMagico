# Créditos de fotos

Las fotos de `places`/`events` son de dos tipos: genéricas de Wikimedia Commons (esta primera tabla) y reales de cada negocio, de su propia web (más abajo). Las de Commons tienen licencias libres que exigen atribución, y son **representativas por categoría** (p. ej. una foto genérica de "quesería" para todos los negocios de esa subcategoría), no necesariamente del negocio exacto — excepción hecha de las de la Plaza Miguel Hidalgo, la Iglesia y los globos, que sí son de Tequisquiapan/Querétaro específicamente.

La app muestra el crédito agregado en Perfil → Créditos de fotos (`ViewsProfileView.swift`). La web (tequismagico.com) usa las mismas fotos de la base y, además, 20 fotos editoriales, 16 de Tequis y 4 de pueblos cercanos (portada, historia, guía), que viven en `web/lib/photos.ts` con autor y licencia; todas aparecen solas en https://tequismagico.com/creditos. Si se reemplaza cualquiera de estas fotos por una real del negocio, hay que quitar su fila de aquí.

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

Regla: la foto real de un lugar sale **solo de su propia web**, revisada a mano. Desde el 16 nov 2026, si no tiene web, también valen **sus cuentas oficiales** de Facebook o Instagram (ver la sección de esa fecha). Si no tiene ninguna, se queda con la genérica de categoría.

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
| Freixenet México | `sala-vive-tunel.jpg` (16 nov 2026; sustituye a la cabalgata y al edificio) | [salavive.mx/inicio-2/enoturismo/visita-sala-vive](https://salavive.mx/inicio-2/enoturismo/visita-sala-vive/) | [original](https://salavive.mx/wp-content/uploads/2022/03/enoturismo-visita-clasica-freixenet-Mexico.jpg) |
| Freixenet México | `sala-vive-cata.jpg` (16 nov 2026) | [salavive.mx/inicio-2/enoturismo/cata-de-vinos](https://salavive.mx/inicio-2/enoturismo/cata-de-vinos/) | [original](https://salavive.mx/wp-content/uploads/2022/03/enoturismo-cata-de-vinos-Freixenen-Mexico.jpg) |
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
- **Telésforo Trejo, Guadalupano, Parador Colosio, El Oasis y Termas del Rey**: no tenían web el 5 nov (El Oasis y Termas del Rey sí la tienen; ver la sección del 9 nov). Usan las genéricas de categoría ya acreditadas.
- **Viñedos La Redonda**: su web está en mantenimiento y la tienda pide contraseña. Se desactivó el 11 nov 2026 (`database/databasefix_vinedos_2026-11-11.sql`).
- **Los Rosales Viñedos**: `vinedoslosrosales.com.mx` hoy es un sitio de apuestas. El dominio fue secuestrado; no se usó nada de ahí.
- **Hotel Museo La Casona**: `lacasonatequisquiapan.com` redirige a un sitio de tragamonedas, y ese hotel está en otra dirección (Camino al Sauz, no Morelos 11).
- **La Casa del Atrio** y **Hotel Hidalgo**: los que aparecen con ese nombre están en Querétaro capital.
- **Templo, Plaza Miguel Hidalgo, La Pila, Parque La Pila y Presa Centenario**: son lugares públicos, sin web propia.
- **Los otros lugares sin confirmar**: no se les encontró web en un buscador general (5 nov 2026).

## Fotos reales de negocios (9 nov 2026)

Misma regla y mismo destino (`/srv/tequis/uploads/lugares/`), aplicadas con `database/databasefix_lugares_busquedas_2026-11-09.sql`. Investigación en `docs/datos/investigacion-negocios-2026-11.md`. Se convirtieron a JPG y se redujeron a 1920 px como máximo, sin agrandar las chicas (las de ORIGENS miden 500 px en su web). **La Luna Terraza** usa `kpuchinos-terraza-la-luna.jpg`, que ya estaba (de la web de K'puchinos, el mismo negocio).

| Lugar | Archivo | Página de origen | Archivo original |
|---|---|---|---|
| El Maravillas | `el-maravillas-terraza.jpg` | [www.elmaravillas.com.mx](https://www.elmaravillas.com.mx) | [original](https://www.elmaravillas.com.mx/images/Restaurante/Terraza%20+%20iglesia.jpg) |
| El Maravillas | `el-maravillas-tacos.jpg` | [www.elmaravillas.com.mx](https://www.elmaravillas.com.mx) | [original](https://www.elmaravillas.com.mx/images/2026/tacos-olvidados.jpg) |
| El Maravillas | `el-maravillas-camarones.jpg` | [www.elmaravillas.com.mx](https://www.elmaravillas.com.mx) | [original](https://www.elmaravillas.com.mx/images/2026/camarones-roca.jpg) |
| ORIGENS | `origens-platillo.jpg` | [origens.mx](https://origens.mx) | [original](https://origens.mx/wp-content/uploads/2024/05/ORIGENS-SW-Principales-Home-500x350px-01.jpg) |
| ORIGENS | `origens-deli.jpg` | [origens.mx](https://origens.mx) | [original](https://origens.mx/wp-content/uploads/2024/05/ORIGENS-SW-Principales-Home-500x350px-02.jpg) |
| ORIGENS | `origens-patio.jpg` | [origens.mx](https://origens.mx) | [original](https://origens.mx/wp-content/uploads/2024/05/ORIGENS-SW-Principales-Home-500x456px-01.jpg) |
| Río 33 | `rio-33-comedor.jpg` | [hotelesriotequisquiapan.com/restaurants.html](https://www.hotelesriotequisquiapan.com/restaurants.html) | [original](https://webbox.imgix.net/images/mfnwobnjdatqgshi/bc67d772-3259-4069-b535-35ece8f42c7a.jpg) |
| Río 33 | `rio-33-cava.jpg` | [hotelesriotequisquiapan.com/restaurants.html](https://www.hotelesriotequisquiapan.com/restaurants.html) | [original](https://webbox.imgix.net/images/mfnwobnjdatqgshi/4ab3ef9e-1a4a-4c97-a09f-55586162619c.jpg) |
| Espacio Sense Spa – La Casona | `espacio-sense-cabina.jpg` | [lacasonatequisquiapan.mx/es/espacio-sense](https://lacasonatequisquiapan.mx/es/espacio-sense) | [original](https://lacasonatequisquiapan.mx/images/sliders/gal-sense-slider/image-04.jpg) |
| Espacio Sense Spa – La Casona | `espacio-sense-jardin.jpg` | [lacasonatequisquiapan.mx/es/espacio-sense](https://lacasonatequisquiapan.mx/es/espacio-sense) | [original](https://lacasonatequisquiapan.mx/images/sliders/gal-sense-slider/image-01.jpg) |
| Espacio Sense Spa – La Casona | `espacio-sense-temazcal.jpg` | [lacasonatequisquiapan.mx/es/espacio-sense](https://lacasonatequisquiapan.mx/es/espacio-sense) (agregada el 16 nov 2026) | [original](https://lacasonatequisquiapan.mx/images/sliders/gal-sense-slider/image-10.jpg) |
| Espacio Sense Spa – La Casona | `espacio-sense-sauna.jpg` | [lacasonatequisquiapan.mx/es/espacio-sense](https://lacasonatequisquiapan.mx/es/espacio-sense) (agregada el 16 nov 2026) | [original](https://lacasonatequisquiapan.mx/images/sliders/gal-sense-slider/image-05.jpg) |
| Balneario La Vega | `balneario-la-vega-jardin.jpg` | [balneariolavega.mx](https://balneariolavega.mx) | [original](https://balneariolavega.mx/templates/plantilla_balneario/imagenes/fondo-banner.jpg) |
| Vinícola San Juanito | `san-juanito-terraza.jpg` | [www.sanjuanito.com.mx](https://www.sanjuanito.com.mx) | [original](https://www.sanjuanito.com.mx/wp-content/uploads/2024/09/paisaje-bodega.webp) |
| Vinícola San Juanito | `san-juanito-cava.jpg` | [www.sanjuanito.com.mx](https://www.sanjuanito.com.mx) | [original](https://www.sanjuanito.com.mx/wp-content/uploads/2024/09/cava-vinos.webp) |
| Vinícola San Juanito | `san-juanito-cosecha.jpg` | [www.sanjuanito.com.mx](https://www.sanjuanito.com.mx) | [original](https://www.sanjuanito.com.mx/wp-content/uploads/2024/09/Uva-cosecha.webp) |
| Termas del Rey | `termas-del-rey-campamento.jpg` | [www.termasdelrey.com](https://www.termasdelrey.com) | [original](https://irp.cdn-website.com/32521487/dms3rep/multi/opt/camp-1920w.jpg) |
| Termas del Rey | `termas-del-rey-isla.jpg` | [www.termasdelrey.com](https://www.termasdelrey.com) | [original](https://irp.cdn-website.com/32521487/dms3rep/multi/opt/La+Isla-1920w.jpg) |
| Termas del Rey | `termas-del-rey-castillo.jpg` | [www.termasdelrey.com](https://www.termasdelrey.com) (agregada el 16 nov 2026) | [original](https://irp.cdn-website.com/32521487/dms3rep/multi/IMG_4449.jpg) |

⚠️ **Permisos**: igual que las anteriores, sin autorización escrita del negocio.

**Sin foto real, y por qué:** Spa Studio 7 (su única foto es una tira de 1200×301 px), Pizzas Don Rigo (sin web), El Oasis (su portada solo tiene un cartel) y el jacuzzi de Espacio Sense (360 px, se descartó). Usan las genéricas de categoría ya acreditadas.

## Fotos reales de hospedaje (10 nov 2026)

Misma regla y mismo destino (`/srv/tequis/uploads/lugares/`), para `database/databaseseed_hospedaje_2026-11-10.sql`. Investigación en `docs/datos/investigacion-hospedaje-2026-11.md`. Todas salen de la web propia de cada hotel y se revisaron a ojo (se descartaron logos, dibujos, banners con texto, fotos del pueblo, de banco y con personas como protagonistas). Se convirtieron a JPG y se redujeron a 1920 px como máximo, sin agrandar las chicas. Las de Arantia y La Casona de San Juanito se bajaron por la API de WordPress de su sitio, porque la página pide verificación anti-bots. **La Casona de San Juanito** usa además `san-juanito-terraza.jpg`, que ya estaba (de la web del mismo viñedo). Sin foto propia (foto genérica de hospedaje): Hotel Sol y Fiesta (su web solo tiene un dibujo y el logo), Hotel Real de TX y Rancho Los Venados (sus webs bloquean descargas automáticas) y todos los del bloque de solo Turismo.

| Lugar | Archivo | Página de origen | Archivo original |
|---|---|---|---|
| Hotel Río Tequisquiapan | `hotel-rio-tequisquiapan-fachada.jpg` | [www.hotelesriotequisquiapan.com/gallery.html](https://www.hotelesriotequisquiapan.com/gallery.html) | [original](https://webbox.imgix.net/images/mfnwobnjdatqgshi/62b0cc18-6121-4820-8f88-258b7dda9da7.jpg) |
| Hotel Río Tequisquiapan | `hotel-rio-tequisquiapan-alberca.jpg` | [www.hotelesriotequisquiapan.com/gallery.html](https://www.hotelesriotequisquiapan.com/gallery.html) | [original](https://webbox.imgix.net/images/mfnwobnjdatqgshi/04272146-84b1-4563-b943-f4e0a39ae9a3.jpg) |
| Hotel Río Tequisquiapan | `hotel-rio-tequisquiapan-jardin.jpg` | [www.hotelesriotequisquiapan.com/gallery.html](https://www.hotelesriotequisquiapan.com/gallery.html) | [original](https://webbox.imgix.net/images/mfnwobnjdatqgshi/17420ac3-3e5a-43c4-9058-d366c7ca3ad6.jpg) |
| Hotel San Carlos | `hotel-san-carlos-fachada.jpg` | [www.hotelsancarlostx.com](https://www.hotelsancarlostx.com/) | [original](https://www.hotelsancarlostx.com/images/hotel-san-carlos-tequisquiapan.jpg) |
| Hotel San Carlos | `hotel-san-carlos-alberca.jpg` | [www.hotelsancarlostx.com/servicios/alberca.php](https://www.hotelsancarlostx.com/servicios/alberca.php) | [original](https://www.hotelsancarlostx.com/images/alberca/jumbotron.jpg) |
| Hotel San Carlos | `hotel-san-carlos-master-suite.jpg` | [www.hotelsancarlostx.com](https://www.hotelsancarlostx.com/) | [original](https://www.hotelsancarlostx.com/images/habitacion-master-suite-hotel-san-carlos-tequis.jpg) |
| Matian Hotel Boutique | `matian-hotel-boutique-alberca.jpg` | [hotelmatian.com/es](https://hotelmatian.com/es) | [original](https://img.guruhotel.dev/insecure/rs:fill:1600:0/g:sm/czM6Ly9ndXJ1aG90ZWxmaWxlcy9wcm9kdWN0aW9uLzBkYzQzMTNmLTQ1NDYtNDE0YS04NGFjLWY4OTU2MDExNDA5Zi9pbWFnZS0xNzg4Mjg5MzEyNjA3LTJoM3Q3ZWwzcXl1LmpwZWc=) |
| Matian Hotel Boutique | `matian-hotel-boutique-jardin.jpg` | [hotelmatian.com/es](https://hotelmatian.com/es) | [original](https://img.guruhotel.dev/insecure/rs:fill:1600:0/g:sm/czM6Ly9ndXJ1aG90ZWxmaWxlcy9wcm9kdWN0aW9uLzBkYzQzMTNmLTQ1NDYtNDE0YS04NGFjLWY4OTU2MDExNDA5Zi9pbWFnZS0xNzg4Mjg5MzEyNTY1LWl6bmFxOGR2enMuanBlZw==) |
| Matian Hotel Boutique | `matian-hotel-boutique-habitacion.jpg` | [hotelmatian.com/es](https://hotelmatian.com/es) | [original](https://img.guruhotel.dev/insecure/rs:fill:1600:0/g:sm/czM6Ly9ndXJ1aG90ZWxmaWxlcy9wcm9kdWN0aW9uLzBkYzQzMTNmLTQ1NDYtNDE0YS04NGFjLWY4OTU2MDExNDA5Zi9pbWFnZS0xNzg4Mjg5NzU1MDg1LWgxOHk4dWMwOHcuanBn) |
| Hotel La Plaza de Tequisquiapan | `hotel-la-plaza-de-tequisquiapan-fachada.jpg` | [hotelplazatequis.com](https://hotelplazatequis.com) | [original](https://hotelplazatequis.com/wp-content/uploads/2024/10/fechada-hotel-la-plaza-de-tequisquiapan-hero.webp) |
| Hotel La Plaza de Tequisquiapan | `hotel-la-plaza-de-tequisquiapan-alberca.jpg` | [hotelplazatequis.com](https://hotelplazatequis.com) | [original](https://hotelplazatequis.com/wp-content/uploads/2024/10/alberca-jardin-hotel-la-plaza-de-tequisquiapan-img.jpg) |
| Hotel La Plaza de Tequisquiapan | `hotel-la-plaza-de-tequisquiapan-habitacion-jacuzzi.jpg` | [hotelplazatequis.com](https://hotelplazatequis.com) | [original](https://hotelplazatequis.com/wp-content/uploads/2024/10/habitacion-con-jacuzzi-hotel-la-plaza-de-tequisquiapan-img.jpg) |
| Hotel Quinta Tequisquiapan | `hotel-quinta-tequisquiapan-fachada.jpg` | [quintatequisquiapan.mx](http://quintatequisquiapan.mx/) | [original](http://quintatequisquiapan.mx/images/courtyard-03.jpg) |
| Hotel Quinta Tequisquiapan | `hotel-quinta-tequisquiapan-alberca.jpg` | [quintatequisquiapan.mx](http://quintatequisquiapan.mx/) | [original](http://quintatequisquiapan.mx/images/pool-02.jpg) |
| Hotel Quinta Tequisquiapan | `hotel-quinta-tequisquiapan-suite-jacuzzi.jpg` | [quintatequisquiapan.mx](http://quintatequisquiapan.mx/) | [original](http://quintatequisquiapan.mx/images/room-suite-02.jpg) |
| Suites Poza Real | `suites-poza-real-fachada.jpg` | [www.pozareal.com.mx/Galer%C3%ADa](https://www.pozareal.com.mx/Galer%C3%ADa/) | [original](https://www.pozareal.com.mx/gallery_gen/f10741b0b0c2015824c455fa3bb27598_fit.jpg) |
| Suites Poza Real | `suites-poza-real-poza-privada.jpg` | [www.pozareal.com.mx/Galer%C3%ADa](https://www.pozareal.com.mx/Galer%C3%ADa/) | [original](https://www.pozareal.com.mx/gallery_gen/0937e6c23425d2666b8e1833dd0f0195_fit.jpg) |
| Suites Poza Real | `suites-poza-real-alberca.jpg` | [www.pozareal.com.mx/Galer%C3%ADa](https://www.pozareal.com.mx/Galer%C3%ADa/) | [original](https://www.pozareal.com.mx/gallery_gen/eb8b07032627eda492d72d82d840ea6b_fit.jpg) |
| Quinta Los Vela | `quinta-los-vela-jardin.jpg` | [quintalosvela.com.mx/jardines](https://quintalosvela.com.mx/jardines/) | [original](https://quintalosvela.com.mx/wp-content/uploads/2023/07/portada-introduccion-cabanas-quinta-patricia-min.jpg) |
| Quinta Los Vela | `quinta-los-vela-alberca.jpg` | [quintalosvela.com.mx](https://quintalosvela.com.mx/) | [original](https://quintalosvela.com.mx/wp-content/uploads/2025/09/quinta-los-vela-hero-2.jpg) |
| Quinta Los Vela | `quinta-los-vela-cabana.jpg` | [quintalosvela.com.mx/cabanas](https://quintalosvela.com.mx/cabanas/) | [original](https://quintalosvela.com.mx/wp-content/uploads/2023/08/hospedaje-cabana-8-quinta-patricia-portada.jpg) |
| Hotel Boutique La Granja | `hotel-boutique-la-granja-alberca.jpg` | [hotelboutiquelagranja.com](http://hotelboutiquelagranja.com) | [original](https://0201.nccdn.net/1_2/000/000/183/711/img_8437.jpg) |
| Hotel Boutique La Granja | `hotel-boutique-la-granja-patio.jpg` | [hotelboutiquelagranja.com](http://hotelboutiquelagranja.com) | [original](https://0201.nccdn.net/4_2/000/000/03f/ac7/img_9353.jpg) |
| Hotel Boutique La Granja | `hotel-boutique-la-granja-suite.jpg` | [hotelboutiquelagranja.com](http://hotelboutiquelagranja.com) | [original](https://0201.nccdn.net/1_2/000/000/11d/6f6/img_4096-copy-1280x853.jpg) |
| Arantia Hotel Boutique | `arantia-hotel-boutique-alberca.jpg` | [hotelboutiquearantia.com.mx/galeria](https://hotelboutiquearantia.com.mx/galeria/) | [original](https://hotelboutiquearantia.com.mx/wp-content/uploads/2023/08/DSC07256.jpg) |
| Arantia Hotel Boutique | `arantia-hotel-boutique-jardin.jpg` | [hotelboutiquearantia.com.mx/galeria](https://hotelboutiquearantia.com.mx/galeria/) | [original](https://hotelboutiquearantia.com.mx/wp-content/uploads/2023/07/DSC07434.jpg) |
| Arantia Hotel Boutique | `arantia-hotel-boutique-entrada.jpg` | [hotelboutiquearantia.com.mx/galeria](https://hotelboutiquearantia.com.mx/galeria/) | [original](https://hotelboutiquearantia.com.mx/wp-content/uploads/2023/07/DSC07320.jpg) |
| La Casona Tequisquiapan Hotel & Spa | `la-casona-tequisquiapan-hotel-spa-alberca.jpg` | [lacasonatequisquiapan.mx/es/instalaciones](https://lacasonatequisquiapan.mx/es/instalaciones) | [original](https://lacasonatequisquiapan.mx/images/alberca.jpg) |
| La Casona Tequisquiapan Hotel & Spa | `la-casona-tequisquiapan-hotel-spa-terraza.jpg` | [lacasonatequisquiapan.mx/es/instalaciones](https://lacasonatequisquiapan.mx/es/instalaciones) | [original](https://lacasonatequisquiapan.mx/images/terraza.jpg) |
| La Casona Tequisquiapan Hotel & Spa | `la-casona-tequisquiapan-hotel-spa-deluxe-suite.jpg` | [lacasonatequisquiapan.mx/es/habitaciones/deluxe](https://lacasonatequisquiapan.mx/es/habitaciones/deluxe) | [original](https://lacasonatequisquiapan.mx/images/sliders/deluxe/image-01.jpg) |
| Hotel St. George Spa & Temazcal | `hotel-st-george-spa-temazcal-alberca.jpg` | [hotelstgeorge.mx](http://hotelstgeorge.mx/) | [original](http://hotelstgeorge.mx/wp-content/uploads/2024/11/DSC_0520-scaled.jpg) |
| Hotel St. George Spa & Temazcal | `hotel-st-george-spa-temazcal-temazcal.jpg` | [hotelstgeorge.mx/spa](http://hotelstgeorge.mx/spa/) | [original](http://hotelstgeorge.mx/wp-content/uploads/2024/11/Editada-2-1980-scaled.jpg) |
| Hotel St. George Spa & Temazcal | `hotel-st-george-spa-temazcal-habitacion.jpg` | [hotelstgeorge.mx](http://hotelstgeorge.mx/) | [original](http://hotelstgeorge.mx/wp-content/uploads/2024/11/20211030161044_IMG_0781.jpg) |
| La Toscana de Tequisquiapan | `la-toscana-de-tequisquiapan-fogata.jpg` | [www.hoteltoscanadetequisquiapan.com/instalaciones](https://www.hoteltoscanadetequisquiapan.com/instalaciones) | [original](https://images.squarespace-cdn.com/content/v1/63d0384d73628f6370d9c663/185bdb08-6b4a-4862-8d54-fbed7215d4bc/DSC07896.jpg?format=1500w) |
| La Toscana de Tequisquiapan | `la-toscana-de-tequisquiapan-habitacion.jpg` | [www.hoteltoscanadetequisquiapan.com/instalaciones](https://www.hoteltoscanadetequisquiapan.com/instalaciones) | [original](https://images.squarespace-cdn.com/content/v1/63d0384d73628f6370d9c663/33c6b90c-f40b-4534-bf11-0c465d55eede/IMG_6571.JPG?format=1500w) |
| La Toscana de Tequisquiapan | `la-toscana-de-tequisquiapan-terraza.jpg` | [www.hoteltoscanadetequisquiapan.com/instalaciones](https://www.hoteltoscanadetequisquiapan.com/instalaciones) | [original](https://images.squarespace-cdn.com/content/v1/63d0384d73628f6370d9c663/4ea17f62-2974-4c5e-8e7b-741ab000b3d2/IMG_6605.JPG?format=1500w) |
| Villa Bugambilia | `villa-bugambilia-alberca.jpg` | [www.villabugambilia.mx](https://www.villabugambilia.mx) | [original](https://images.squarespace-cdn.com/content/v1/65539047a17a3e443a71321e/bc54c5e4-4e75-47f8-955f-4330437b005f/WhatsApp+Image+2023-10-12+at+9.38.53+PM.jpeg?format=1500w) |
| Villa Bugambilia | `villa-bugambilia-cabana.jpg` | [www.villabugambilia.mx](https://www.villabugambilia.mx) | [original](https://images.squarespace-cdn.com/content/v1/65539047a17a3e443a71321e/75c5562e-8821-4380-8031-21b1e9027dc3/IMG_0237.jpg?format=1500w) |
| Villa Bugambilia | `villa-bugambilia-habitacion.jpg` | [www.villabugambilia.mx](https://www.villabugambilia.mx) | [original](https://images.squarespace-cdn.com/content/v1/65539047a17a3e443a71321e/0c130cf2-9907-458e-a851-b845799c6680/WhatsApp+Image+2025-06-09+at+12.13.36+p.m.+%281%29.jpeg?format=1500w) |
| Salterra Glamping | `salterra-glamping-tienda.jpg` | [www.salterraglamping.com](https://www.salterraglamping.com) | [original](https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/03d373f5-24db-4fef-bd73-3b34c2582900/public) |
| Salterra Glamping | `salterra-glamping-vista-aerea.jpg` | [www.salterraglamping.com](https://www.salterraglamping.com) | [original](https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/09f1ee20-7f89-4b05-033b-e8b95f70ba00/public) |
| Salterra Glamping | `salterra-glamping-estanque.jpg` | [www.salterraglamping.com](https://www.salterraglamping.com) | [original](https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/6bb63a90-3570-4d38-c68a-cf4930eeb500/public) |
| Hotel Villa Antigua | `hotel-villa-antigua-jardin.jpg` | [www.villa-antigua.com.mx/galeria.html](http://www.villa-antigua.com.mx/galeria.html) | [original](http://www.villa-antigua.com.mx/img/VA-08.jpg) |
| Hotel Villa Antigua | `hotel-villa-antigua-alberca.jpg` | [www.villa-antigua.com.mx/galeria.html](http://www.villa-antigua.com.mx/galeria.html) | [original](http://www.villa-antigua.com.mx/img/VA-14.jpg) |
| Hotel Villa Antigua | `hotel-villa-antigua-terraza.jpg` | [www.villa-antigua.com.mx/galeria.html](http://www.villa-antigua.com.mx/galeria.html) | [original](http://www.villa-antigua.com.mx/img/VA-04.jpg) |
| Hotel & Spa Hacienda Tres Vidas | `hotel-spa-hacienda-tres-vidas-alberca.jpg` | [haciendatresvidas.com.mx](https://haciendatresvidas.com.mx/) | [original](https://img1.wsimg.com/isteam/ip/58999d59-7816-4f37-96f1-d8d53786b683/WhatsApp%20Image%202023-04-23%20at%206.10.53%20-d104c8f.jpeg) |
| Hotel & Spa Hacienda Tres Vidas | `hotel-spa-hacienda-tres-vidas-fachada.jpg` | [haciendatresvidas.com.mx](https://haciendatresvidas.com.mx/) | [original](https://img1.wsimg.com/isteam/ip/58999d59-7816-4f37-96f1-d8d53786b683/WhatsApp%20Image%202023-04-23%20at%206.08.26%20PM.jpeg) |
| Hotel & Spa Hacienda Tres Vidas | `hotel-spa-hacienda-tres-vidas-habitacion.jpg` | [haciendatresvidas.com.mx](https://haciendatresvidas.com.mx/) | [original](https://img1.wsimg.com/isteam/ip/58999d59-7816-4f37-96f1-d8d53786b683/_CHG9862.jpg) |
| La Casona de San Juanito | `la-casona-de-san-juanito-habitacion.jpg` | [www.sanjuanito.com.mx/la-casona](https://www.sanjuanito.com.mx/la-casona/) | [original](https://www.sanjuanito.com.mx/wp-content/uploads/2024/12/Sobre-la-casona-img.webp) |
| La Casona de San Juanito | `la-casona-de-san-juanito-comedor.jpg` | [www.sanjuanito.com.mx/la-casona](https://www.sanjuanito.com.mx/la-casona/) | [original](https://www.sanjuanito.com.mx/wp-content/uploads/2024/12/la-casona-cover-img.webp) |

## Fotos reales de negocios: gastronomía (10 nov 2026)

Misma regla y mismo destino (`/srv/tequis/uploads/lugares/`), para `database/databaseseed_gastronomia_2026-11-10.sql`. Investigación en `docs/datos/investigacion-gastronomia-2026-11.md`. Se convirtieron a JPG y se redujeron a 1920 px como máximo, sin agrandar las chicas (las del Hotel La Plaza miden 960 px en su web y la de Rincón Austriaco, 640 px). Las de La Valentina, Las Brasas y La Cantina son de la web del Hotel La Plaza, dueño de los tres. Se descartaron: el banner con texto de Rincón Mexicano, las fotos de banco de El Atorón, la foto con texto de Capricho's y sus páginas de menú, y las ilustraciones de La Palapa Sensorial; esos lugares llevan la foto genérica de Commons.

| Lugar | Archivo | Página de origen | Archivo original |
|---|---|---|---|
| La Valentina | `la-valentina-comedor.jpg` | [hotelplazatequis.com/restaurantes-en-tequisquiapan](https://hotelplazatequis.com/restaurantes-en-tequisquiapan/) | [original](https://hotelplazatequis.com/wp-content/uploads/2024/11/restaurante-la-valentina-cocina-mexicana-y-buffet-dominical.jpg) |
| Las Brasas | `las-brasas-entrada.jpg` | [hotelplazatequis.com/restaurantes-en-tequisquiapan](https://hotelplazatequis.com/restaurantes-en-tequisquiapan/) | [original](https://hotelplazatequis.com/wp-content/uploads/2024/11/restaurante-las-brasas-especialidad-en-carnes-al-carbon.jpg) |
| La Cantina (Hotel La Plaza) | `la-cantina-barra.jpg` | [hotelplazatequis.com/restaurantes-en-tequisquiapan](https://hotelplazatequis.com/restaurantes-en-tequisquiapan/) | [original](https://hotelplazatequis.com/wp-content/uploads/2024/11/restaurante-la-cantina-el-bar-de-tequisquiapan.jpg) |
| Capricho's | `capricho-s-comedor.jpg` | [caprichosrestaurante-com.webnode.mx](https://caprichosrestaurante-com.webnode.mx/) | [original](https://eb95ecd7c0.cbaul-cdnwnd.com/e50b489cfaae3496f6adde4d736d1c1a/200000095-4aaaa4aaab/cap.%202.jpg) |
| Capricho's | `capricho-s-salon.jpg` | [caprichosrestaurante-com.webnode.mx/el-restaurante](https://caprichosrestaurante-com.webnode.mx/el-restaurante/) | [original](https://eb95ecd7c0.cbaul-cdnwnd.com/e50b489cfaae3496f6adde4d736d1c1a/200000077-bd066bd069/Eventos%202.jpg) |
| Rincón Austriaco | `rincon-austriaco-tabla.jpg` | [rinconaustriaco.com.mx](https://rinconaustriaco.com.mx/) | [original](https://rinconaustriaco.com.mx/wp-content/uploads/2024/02/20140129_IMG_2646.jpg) |
| Alux Resto Café | `alux-resto-cafe-chilaquiles.jpg` | [casaaluxtx.wixsite.com/tequis](https://casaaluxtx.wixsite.com/tequis) | [original](https://static.wixstatic.com/media/d4ee0c_d0d2a60e725d41a49a89c28720d4c977~mv2.jpg) |
| Alux Resto Café | `alux-resto-cafe-hotcakes.jpg` | [casaaluxtx.wixsite.com/tequis](https://casaaluxtx.wixsite.com/tequis) | [original](https://static.wixstatic.com/media/d4ee0c_5794ada7246a4e83916b28ea594d47f0~mv2.jpg) |
| Alux Resto Café | `alux-resto-cafe-cafe.jpg` | [casaaluxtx.wixsite.com/tequis](https://casaaluxtx.wixsite.com/tequis) | [original](https://static.wixstatic.com/media/d4ee0c_5011bfe6c8d74b47880733b8dffea238~mv2.jpg) |
| La Casa del Horno | `la-casa-del-horno-terraza.jpg` | [www.lacasadelhorno.com.mx](https://www.lacasadelhorno.com.mx/) | [original](https://static.wixstatic.com/media/b704d8_6967ac017f044f00a85044eda205881d~mv2.jpeg) |
| La Casa del Horno | `la-casa-del-horno-fachada.jpg` | [www.lacasadelhorno.com.mx](https://www.lacasadelhorno.com.mx/) | [original](https://static.wixstatic.com/media/b704d8_954033890481490c943d23bb41eb1b6e~mv2.jpeg) |
| La Casa del Horno | `la-casa-del-horno-patio.jpg` | [www.lacasadelhorno.com.mx](https://www.lacasadelhorno.com.mx/) | [original](https://static.wixstatic.com/media/b704d8_d726ac86626449f38e8d47d4a69c334a~mv2.jpeg) |

## Fotos reales de negocios: balnearios y viñedos (10 nov 2026)

Misma regla y mismo destino (`/srv/tequis/uploads/lugares/`), aplicadas con `database/databaseseed_balnearios_vinedos_2026-11-10.sql`. Investigación en `docs/datos/investigacion-balnearios-globo-vinedos-2026-11.md`. Se convirtieron a JPG y se redujeron a 1920 px como máximo, sin agrandar las chicas. **Norte B** solo tiene fotos en tiras panorámicas; se usó la menos estrecha (2500×907). **Viajes y Enoturismo**, **Viña Magal** y **Vinícola San Patricio** se quedan con la genérica de viñedo (la primera solo tiene separadores gráficos en su web; las otras dos no tienen web que funcione).

| Lugar | Archivo | Página de origen | Archivo original |
|---|---|---|---|
| Parque Acuático El Oasis | `parque-acuatico-el-oasis-olas.jpg` | [eloasistequisquiapan.com](https://eloasistequisquiapan.com) (Galería) | [original](https://eloasistequisquiapan.com/storage/media/gallery/fTukBW7e0waplfrJ6gsWbVSx83W8nmn2VxlpWyn0.jpg) |
| Parque Acuático El Oasis | `parque-acuatico-el-oasis-vista.jpg` | [eloasistequisquiapan.com](https://eloasistequisquiapan.com) (Galería) | [original](https://eloasistequisquiapan.com/storage/media/gallery/TllZIpKDZZVpaKLUN8NKvKLDzSMC5DPdKCKh5DCU.jpg) |
| Parque Acuático El Oasis | `parque-acuatico-el-oasis-toboganes.jpg` | [eloasistequisquiapan.com](https://eloasistequisquiapan.com) (Galería) | [original](https://eloasistequisquiapan.com/storage/media/gallery/lKqsfgbHsQ4ics3zHeyk8IIrRev0FGEkbkZfAtFg.jpg) |
| Parque Acuático El Oasis | `parque-acuatico-el-oasis-fantasia.jpg` | [eloasistequisquiapan.com](https://eloasistequisquiapan.com) (Galería, agregada el 16 nov 2026) | [original](https://eloasistequisquiapan.com/storage/media/gallery/GFmDgUYbEuipPpQS52GfMP1kLrWqxq5aW7SqZucA.jpg) |
| Parque Acuático El Oasis | `parque-acuatico-el-oasis-campamento.jpg` | [eloasistequisquiapan.com](https://eloasistequisquiapan.com) (Galería, agregada el 16 nov 2026) | [original](https://eloasistequisquiapan.com/storage/media/gallery/wqp890M52wSP9eJ4VBb4Dh8vPuKGviT1FG5CPwHe.jpg) |
| Norte B | `norte-b-bodega.jpg` (retirada el 16 nov 2026: tira panorámica; ver abajo) | [norteb.mx](https://norteb.mx) | [original](https://norteb.mx/wp-content/uploads/2020/02/seccion-vinos.jpg) |
| CR Vinos MX | `cr-vinos-mx-picnic.jpg` | [crvinosmx.com/enotourism/experiences](https://crvinosmx.com/enotourism/experiences) | [original](https://cdn.sanity.io/images/25ql29fy/production/378d1879e986d0d300b66f9620c3afc9c0e937cc-5184x3456.jpg) |
| CR Vinos MX | `cr-vinos-mx-tanques.jpg` | [crvinosmx.com/enotourism/experiences](https://crvinosmx.com/enotourism/experiences) | [original](https://cdn.sanity.io/images/25ql29fy/production/c02db05fdfa682998843f6b749a685902e90322d-1080x1080.jpg) |
| CR Vinos MX | `cr-vinos-mx-cartinto.jpg` | [crvinosmx.com/restaurant](https://crvinosmx.com/restaurant) | [original](https://cdn.sanity.io/images/25ql29fy/production/15f23ea55f168cfd49c6c14f1a363e966c13a63f-6240x4160.jpg) |
| Viñedo La Revuelta | `vinedo-la-revuelta-vinedo.jpg` | [larevuelta.com.mx](https://larevuelta.com.mx) | [original](https://img1.wsimg.com/isteam/ip/235efc7c-73f3-4650-85cd-ce9ee72e249b/IMG_9268.JPG) |
| Viñedo La Revuelta | `vinedo-la-revuelta-comedor.jpg` | [larevuelta.com.mx](https://larevuelta.com.mx) | [original](https://img1.wsimg.com/isteam/ip/235efc7c-73f3-4650-85cd-ce9ee72e249b/WhatsApp%20Image%202021-10-27%20at%2018.46.34.jpeg) |
| Viñedo La Revuelta | `vinedo-la-revuelta-platillo.jpg` | [larevuelta.com.mx/gran-reserva](https://larevuelta.com.mx/gran-reserva) | [original](https://img1.wsimg.com/isteam/ip/235efc7c-73f3-4650-85cd-ce9ee72e249b/WhatsApp%20Image%202021-10-27%20at%2018.47.12.jpeg) |

## Fotos reales de negocios: altas con el DENUE (11 nov 2026)

Misma regla y mismo destino (`/srv/tequis/uploads/lugares/`), para `database/databaseseed_denue_2026-11-11.sql`. Todas salen de la web propia de cada negocio (confirmada con el teléfono o la dirección del DENUE y de Turismo) y se revisaron a ojo. Se convirtieron a JPG y se redujeron a 1920 px como máximo, sin agrandar las chicas. Los otros 79 negocios de esa alta no tienen web propia que funcione y se quedan con la genérica de su categoría.

| Lugar | Archivo | Página de origen | Archivo original |
|---|---|---|---|
| MD Turismo y Experiencias | `md-turismo-y-experiencias-tranvia-vinedo.jpg` | [mdturismoyexperiencias.com/productos/tranvia-tequisquiapan](https://www.mdturismoyexperiencias.com/productos/tranvia-tequisquiapan/) | [original](https://dcdn-us.mitiendanube.com/stores/004/612/648/products/img_20191223_143841-5d80635bf68a3a3ed217278931765170-1024-1024.webp) |
| MD Turismo y Experiencias | `md-turismo-y-experiencias-tram-43.jpg` | [mdturismoyexperiencias.com/productos/tranvia-tequisquiapan](https://www.mdturismoyexperiencias.com/productos/tranvia-tequisquiapan/) | [original](https://dcdn-us.mitiendanube.com/stores/004/612/648/products/_ago7223-99895ac6ac4309df6117257385263563-1024-1024.webp) |
| MD Turismo y Experiencias | `md-turismo-y-experiencias-tranvia-paseo.jpg` | [mdturismoyexperiencias.com/productos/tranvia-tequisquiapan](https://www.mdturismoyexperiencias.com/productos/tranvia-tequisquiapan/) (agregada el 16 nov 2026) | [original](https://dcdn-us.mitiendanube.com/stores/004/612/648/products/_ago7252-45b62451269a88bc8e17257377417833-1024-1024.webp) |
| MD Turismo y Experiencias | `md-turismo-y-experiencias-chocolate-vino.jpg` | [mdturismoyexperiencias.com, tour nocturno](https://www.mdturismoyexperiencias.com/productos/tour-nocturno-gastronomico-sabor-de-la-noche-en-tequisquiapan/) (agregada el 16 nov 2026) | [original](https://dcdn-us.mitiendanube.com/stores/004/612/648/products/vino-choco-d20b43725b2bc5debd17235086784460-1024-1024.webp) |
| TX Ecotours | `tx-ecotours-ruta-4x4.jpg` | [txecotours.com/rutas](https://txecotours.com/rutas) | [original](https://img1.wsimg.com/isteam/ip/35ea4618-6a4e-4e88-9f5b-ce672b680c30/Magia%20tres%20rzrs%20(2).jpg) |
| TX Ecotours | `tx-ecotours-mina-de-opalo.jpg` | [txecotours.com/rutas](https://txecotours.com/rutas) | [original](https://img1.wsimg.com/isteam/ip/35ea4618-6a4e-4e88-9f5b-ce672b680c30/79fb964d-678c-4b65-94d3-c7e5ccefeb47.jpg) |
| TX Ecotours | `tx-ecotours-presa-atardecer.jpg` | [txecotours.com/rutas](https://txecotours.com/rutas) | [original](https://img1.wsimg.com/isteam/ip/35ea4618-6a4e-4e88-9f5b-ce672b680c30/txe2.jpg) |
| Quesería La Vaca Feliz | `queseria-la-vaca-feliz-fachada-auditorio.jpg` | [lavacafeliz.com.mx/sucursales.html](https://lavacafeliz.com.mx/sucursales.html) | [original](https://lavacafeliz.com.mx/imgque/Heroes2.jpg) |
| Quesería La Vaca Feliz | `queseria-la-vaca-feliz-fachada-juarez.jpg` | [lavacafeliz.com.mx/sucursales.html](https://lavacafeliz.com.mx/sucursales.html) | [original](https://lavacafeliz.com.mx/imgque/Maridelfi2.jpg) |
| Quesería La Vaca Feliz | `queseria-la-vaca-feliz-quesos.jpg` | [lavacafeliz.com.mx](https://lavacafeliz.com.mx/) | [original](https://lavacafeliz.com.mx/img/IMG-20240811-WA0004.jpg) |
| Quesería La Vaca Feliz | `queseria-la-vaca-feliz-tabla.jpg` | [lavacafeliz.com.mx](https://lavacafeliz.com.mx/) | [original](https://lavacafeliz.com.mx/img/IMG-20240811-WA0011.jpg) |
| Xayu | `xayu-comedor.jpg` | [xayurestaurante.com](https://www.xayurestaurante.com/) | [original](https://static.wixstatic.com/media/5cc8ec_5370d735fad1493daa39f0441481f708~mv2.jpg) |
| Hotel Casa de Vino | `hotel-casa-de-vino-patio.jpg` | [hotelcasadevino.com](https://www.hotelcasadevino.com/) | [original](https://irp.cdn-website.com/f8909327/dms3rep/multi/opt/Hotel-casa-de-vino-tequisquiapan-queretaro+%281%29-1920w.webp) |
| Hotel Casa de Vino | `hotel-casa-de-vino-habitacion-superior-king.jpg` | [hotelcasadevino.com/habitaciones](https://www.hotelcasadevino.com/habitaciones) | [original](https://irp.cdn-website.com/f8909327/dms3rep/multi/opt/hotel-casa-de-vino-habitacion-superior-King-tequisquiapan+%2811%29-1920w.webp) |
| Hotel Casa de Vino | `hotel-casa-de-vino-jacuzzi.jpg` | [hotelcasadevino.com/restaurant](https://www.hotelcasadevino.com/restaurant) | [original](https://irp.cdn-website.com/f8909327/dms3rep/multi/opt/Casa+del+vino+Rose+y+brindis+%287%29-1920w.webp) |
| Hotel Casa de Vino | `hotel-casa-de-vino-habitacion-superior.jpg` | [hotelcasadevino.com/habitacion-superior](https://www.hotelcasadevino.com/habitacion-superior) | [original](https://irp.cdn-website.com/f8909327/dms3rep/multi/opt/HOTEL+CASA+DE+VINO-cb8a0814-1920w.webp) |
| Hotel Casa de Vino | `hotel-casa-de-vino-entrada.jpg` | [hotelcasadevino.com](https://www.hotelcasadevino.com/) | [original](https://irp.cdn-website.com/f8909327/dms3rep/multi/opt/Hotel-casa-de-vino-tequisquiapan-queretaro+%285%29-1920w.webp) |

## Viñedos: acomodo (11 nov 2026)

Misma regla y mismo destino (`/srv/tequis/uploads/lugares/`), aplicadas con `database/databasefix_vinedos_2026-11-11.sql`. Cuando la web propia está caída, en mantenimiento o el dominio ya no es del negocio, se vale su copia en el [Internet Archive](https://web.archive.org/) de cuando sí era suya (sigue siendo la web del negocio). No se usan agregadores (viñedosqueretaro.com, queretaro.travel), TripAdvisor ni Instagram.

| Lugar | Archivo | Página de origen | Archivo original |
|---|---|---|---|
| Los Rosales Viñedos | `los-rosales-vinedos-uvas.jpg` | [vinedoslosrosales.com.mx (archivo, 2018-12-08)](http://web.archive.org/web/20181208042339/http://vinedoslosrosales.com.mx/) | [original](http://web.archive.org/web/20181208042339im_/http://vinedoslosrosales.com.mx/images/slide_vinedo.jpg) |
| Los Rosales Viñedos | `los-rosales-vinedos-barricas.jpg` | [vinedoslosrosales.com.mx (archivo, 2018-07-28)](http://web.archive.org/web/20180728065556/http://vinedoslosrosales.com.mx/) | [original](http://web.archive.org/web/20180728065556im_/http://www.vinedoslosrosales.com.mx/images/slide_home_2.jpg) |
| Los Rosales Viñedos | `los-rosales-vinedos-botellas.jpg` | [vinedoslosrosales.com.mx (archivo, 2018-07-28)](http://web.archive.org/web/20180728070702/http://vinedoslosrosales.com.mx/) | [original](http://web.archive.org/web/20180728070702im_/http://www.vinedoslosrosales.com.mx/images/slide_home_3.jpg) |
| Los Rosales Viñedos | `los-rosales-vinedos-jardin.jpg` | [vinedoslosrosales.com.mx (archivo, 2018-12-08)](http://web.archive.org/web/20181208034443/http://vinedoslosrosales.com.mx/) | [original](http://web.archive.org/web/20181208034443im_/http://vinedoslosrosales.com.mx/images/slide_vinos.jpg) |
| Los Rosales Viñedos | `los-rosales-vinedos-barrica.jpg` | [vinedoslosrosales.com.mx (archivo, 2018-12-08)](http://web.archive.org/web/20181208033804/http://vinedoslosrosales.com.mx/) | [original](http://web.archive.org/web/20181208033804im_/http://vinedoslosrosales.com.mx/images/slide_nosotros.jpg) |

## Vinícola Tequisquiapan (16 nov 2026)

La ficha decía que no tenía web, pero sí la tiene. Tres fotos son de [vinicolatequisquiapanboutique.com](https://www.vinicolatequisquiapanboutique.com/) y la del patio es de su Instagram oficial, que da la misma dirección. Se descartaron las fotos donde el protagonista es un cliente, el render de una botella, la de la plaza del pueblo y la del patio durante un evento.

| Lugar | Archivo | Página de origen | Archivo original |
|---|---|---|---|
| Vinícola Tequisquiapan | `vinicola-tequisquiapan-salon.jpg` | [vinicolatequisquiapanboutique.com](https://www.vinicolatequisquiapanboutique.com/) | [original](https://www.vinicolatequisquiapanboutique.com/images/imagen-20de-20whatsapp-202024-06-05-20a-20las-2012.23.57_7119116c.jpg) |
| Vinícola Tequisquiapan | `vinicola-tequisquiapan-cata.jpg` | [vinicolatequisquiapanboutique.com/cataVinos](https://www.vinicolatequisquiapanboutique.com/cataVinos/index.html) | [original](https://www.vinicolatequisquiapanboutique.com/cataVinos/images/fotos5.png) (convertida a JPG) |
| Vinícola Tequisquiapan | `vinicola-tequisquiapan-desayuno.jpg` | [vinicolatequisquiapanboutique.com/desayunos](https://www.vinicolatequisquiapanboutique.com/desayunos/index.html) | [original](https://www.vinicolatequisquiapanboutique.com/images/img_6438-202-20-1-.jpg) (reducida a 1600 px) |
| Vinícola Tequisquiapan | `vinicola-tequisquiapan-patio.jpg` | [Instagram @vinicola_tequisquiapan_, 26 jul 2022](https://www.instagram.com/p/Cge-ts8JR5j/) | — |

## Vinícola San Patricio (16 nov 2026)

La ficha decía que su web no respondía; el 16 nov 2026 [vinicolasp.com.mx](https://www.vinicolasp.com.mx/) ya cargaba, con el mismo teléfono de queretaro.travel. Se descartaron las fotos de grupos y personas, los diseños gráficos y los logotipos.

| Lugar | Archivo | Página de origen | Archivo original |
|---|---|---|---|
| Vinícola San Patricio | `vinicola-san-patricio-barricas.jpg` | [vinicolasp.com.mx](https://www.vinicolasp.com.mx/) | [original](https://www.vinicolasp.com.mx/wp-content/uploads/2025/02/barricas.png) (convertida a JPG) |
| Vinícola San Patricio | `vinicola-san-patricio-fachada.jpg` | [vinicolasp.com.mx](https://www.vinicolasp.com.mx/) | [original](https://www.vinicolasp.com.mx/wp-content/uploads/2025/02/378388692_613815600961942_2015451979119934768_n-2.jpg) |
| Vinícola San Patricio | `vinicola-san-patricio-vinedo.jpg` | [vinicolasp.com.mx](https://www.vinicolasp.com.mx/) | [original](https://www.vinicolasp.com.mx/wp-content/uploads/2025/02/414106465_671552885188213_6995592898515857457_n.jpg) |
| Vinícola San Patricio | `vinicola-san-patricio-botellas.jpg` | [vinicolasp.com.mx](https://www.vinicolasp.com.mx/) | [original](https://www.vinicolasp.com.mx/wp-content/uploads/2025/07/IMG_6809-1.jpg) (reducida a 1920 px) |

## Norte B (16 nov 2026)

Cuatro fotos de [norteb.mx](https://norteb.mx/) que sustituyen la tira panorámica. Se descartaron las de personas como protagonistas y las panorámicas.

| Lugar | Archivo | Página de origen | Archivo original |
|---|---|---|---|
| Norte B | `norte-b-entrada.jpg` | [norteb.mx](https://norteb.mx/) | [original](https://norteb.mx/wp-content/uploads/2022/11/Norte-B-01.jpg) |
| Norte B | `norte-b-cervezas.jpg` | [norteb.mx/experiencias](https://norteb.mx/experiencias/) | [original](https://norteb.mx/wp-content/uploads/2022/11/japi-01.jpg) |
| Norte B | `norte-b-cata-vino.jpg` | [norteb.mx/experiencias](https://norteb.mx/experiencias/) | [original](https://norteb.mx/wp-content/uploads/2022/11/binu-03.jpg) |
| Norte B | `norte-b-quesos.jpg` | [norteb.mx/experiencias](https://norteb.mx/experiencias/) | [original](https://norteb.mx/wp-content/uploads/2022/11/zote-02.jpg) |

## Temazcal Tonatiu Iquzayampa (16 nov 2026)

De su web propia, [sites.google.com/view/temazcaltonatiuiquzayampa](https://sites.google.com/view/temazcaltonatiuiquzayampa) (portada). Google Sites solo sirve las imágenes con sesión iniciada, así que no hay enlace directo al original.

| Archivo | Qué es |
|---|---|
| `temazcal-tonatiu-interior.jpg` | Interior del temazcal (fondo de la cabecera), 1280×853 |
| `temazcal-tonatiu-fuego.jpg` | Piedra al rojo en olla de barro ("Fuego") |
| `temazcal-tonatiu-hierbas.jpg` | Hierbas y piedras ("Plantas") |
| `temazcal-tonatiu-vapor.jpg` | Vapor dentro del temazcal |

## Fotos de cuentas oficiales en redes (16 nov 2026)

Para negocios sin web propia. Una cuenta cuenta como oficial si su teléfono, dirección o web coinciden con los del negocio. Se descartan las imágenes que Facebook o Instagram marcan como "Contenido generado con IA", los carteles, las de banco y aquellas donde el protagonista es un cliente. Sin permiso escrito todavía, igual que las de webs propias.

| Lugar | Archivo | Página de origen | Cómo se confirmó la cuenta |
|---|---|---|---|
| Vinícola Terra Salvador | `terra-salvador-terraza.jpg` | [Facebook, foto de portada del 13 nov 2026](https://www.facebook.com/photo.php?fbid=1188738567060232) | Teléfono 414 140 9038 y correo iguales al DENUE y a tequis.travel; su Instagram @terrasalvador.vinicola enlaza a esa página |
| La Fromelier | `la-fromelier-tabla-plaza.jpg` | [Facebook, 8 jun 2026](https://www.facebook.com/photo.php?fbid=1016373204112678) | Dirección de Matamoros 17, igual que el DENUE; teléfono 427 212 0326 también en los carteles de su Instagram @lafromeliertx |
| La Fromelier | `la-fromelier-tabla-larga.jpg` | [Facebook, 25 mar 2026](https://www.facebook.com/photo.php?fbid=956409153442417) | Misma cuenta |
| La Biquette | `la-biquette-cava.jpg` | [Facebook, 16 abr 2025](https://www.facebook.com/photo.php?fbid=1229900732474619) | Teléfono 414 112 3575, el de tequis.travel; su Instagram @quesoslabiquette enlaza a su dominio |
| La Biquette | `la-biquette-quesos.jpg` | [Facebook, 4 may 2025](https://www.facebook.com/photo.php?fbid=1246190324178993) | Misma cuenta |
| La Biquette | `la-biquette-cabras.jpg` | [Facebook, 20 sep 2025](https://www.facebook.com/photo.php?fbid=1372870268177664) | Misma cuenta |
| Quesos Quiroz | `quesos-quiroz-quesos.jpg` | [Facebook, 1 ene 2026](https://www.facebook.com/photo.php?fbid=1365280678731695) | Andador Morelos 5 y 414 273 2315, iguales a Turismo y el DENUE; su Instagram @quesosquiroz repite el lema "pioneros del queso… desde 1972" |
| Quesos Quiroz | `quesos-quiroz-piocolo.jpg` | [Facebook, 20 nov 2025](https://www.facebook.com/photo.php?fbid=1334299061829857) | Misma cuenta |
| Queserías La Mexicana Olé | `la-mexicana-ole-carrizal.jpg` | [Instagram @lamexicanaoleoficial, 6 nov 2026](https://www.instagram.com/p/DfZ4ObRj6TG/) (fachada de Carrizal 4) | Su Instagram enlaza a lamexicanaole.com, que da el teléfono de la base |
| Viña Magal | `vina-magal-terraza.jpg` | [Facebook, 2 jul 2026](https://www.facebook.com/photo.php?fbid=1426564742612600) | Teléfono 427 229 0487, correo y dirección iguales a tequis.travel y queretaro.travel; su Instagram @vinamagal da el mismo número |
| Viña Magal | `vina-magal-tabla.jpg` | [Instagram @vinamagal, 19 oct 2026](https://www.instagram.com/p/DeribAyxTQx/) | Misma cuenta |
| Yoot Masajes y Bienestar | `yoot-masajes-cabina.jpg` | [Facebook, 15 jul 2024](https://www.facebook.com/photo.php?fbid=908954097910610) (recortada para quitar dos logos) | Teléfonos 55 3727 1001 / 1020, iguales al DENUE y a Turismo; su Instagram @yoottequisquiapan da los mismos |
| Yoot Masajes y Bienestar | `yoot-masajes-fachada.jpg` | [Facebook, 23 nov 2024](https://www.facebook.com/photo.php?fbid=1003306398475379) (recortada para quitar el marco y el texto) | Misma cuenta |
| Xantico Spa | `xantico-spa-jardin.jpg` | [Facebook, 1 sep 2025](https://www.facebook.com/photo.php?fbid=1630734908292314) ("Experiencia Xantico spa Garden") | Su botón de WhatsApp marca 414 114 0271, el del directorio de Turismo; su Instagram @spaxantico da el mismo |
| Xantico Spa | `xantico-spa-piedras.jpg` | [Facebook, 19 mar 2026](https://www.facebook.com/photo.php?fbid=1815437823155354) | Misma cuenta |
| Temazcal Tres Marías | `temazcal-tres-marias-temazcal.jpg` | [Facebook, 16 ene 2025](https://www.facebook.com/photo.php?fbid=1053300126602292) | Margarita 42, 427 182 4352 y su correo, iguales al DENUE y a Turismo |
| Temazcal Tres Marías | `temazcal-tres-marias-alberca.jpg` | [Facebook, 16 ene 2025](https://www.facebook.com/photo.php?fbid=1053300069935631) | Misma cuenta |
| Temazcal Tres Marías | `temazcal-tres-marias-jacuzzi.jpg` | [Facebook](https://www.facebook.com/photo.php?fbid=927620892503550) | Misma cuenta |
| Casa Gayatri | `casa-gayatri-temazcal.jpg` | [Facebook, 7 oct 2026](https://www.facebook.com/photo.php?fbid=1401153138883211) | 414 226 3552 y su correo, iguales a Turismo; su Instagram @casagayatri.temazcal enlaza al mismo WhatsApp |
| Casa Gayatri | `casa-gayatri-fuego.jpg` | [Facebook, 7 oct 2026](https://www.facebook.com/photo.php?fbid=1401153112216547) | Misma cuenta |
| Casa Gayatri | `casa-gayatri-camino.jpg` | [Facebook, 7 oct 2026](https://www.facebook.com/photo.php?fbid=1401153115549880) | Misma cuenta |
| Casa Gayatri | `casa-gayatri-jardin.jpg` | [Facebook, 7 oct 2026](https://www.facebook.com/photo.php?fbid=1401153132216545) | Misma cuenta |
| Vino Tours | `vino-tours-barricas.jpg` | [Facebook, 4 jul 2026](https://www.facebook.com/photo.php?fbid=1503530345119951) (Fiesta de la Vendimia) | Niños Héroes 42 y reservaciones@vinotours.mx, iguales al DENUE y a Turismo; su Instagram @vino_tours da la misma dirección |
| Delicias del Mar | `delicias-del-mar-tostadas.jpg` | [Facebook, 12 abr 2021](https://www.facebook.com/photo.php?fbid=4405831822779738) | 441 100 5676, igual a tequis.travel; sus carteles dan el 414 273 5511 del PDF de Turismo |
| Chiltepín | `chiltepin-mariscos-caldo.jpg` | [Instagram @chiltepin_seafood, 10 oct 2026](https://www.instagram.com/p/DeVFQpboyh_/) | 414 231 0019 y Plan de Guadalupe 58, iguales a tequis.travel y al DENUE; su Facebook da el mismo teléfono |
| Chiltepín | `chiltepin-mariscos-interior.jpg` | [Instagram, 12 sep 2026](https://www.instagram.com/p/DdMzu9NO4qm/) | Misma cuenta |
| Chiltepín | `chiltepin-mariscos-pescadillas.jpg` | [Instagram, 7 ago 2026](https://www.instagram.com/p/DbwDtqUOo91/) | Misma cuenta |
| Birria Los Compadres | `birria-los-compadres-birria.jpg` | [Instagram @birria_los_compadres_tequis, 7 nov 2026](https://www.instagram.com/p/DfdCuVRElIB/) | 414 104 3252 y el km 16.3 de la carretera, iguales al DENUE y a tequis.travel; su Facebook da lo mismo |
| La Ranchería | `la-rancheria-tomahawk.jpg` | [Facebook, 24 oct 2026](https://www.facebook.com/photo.php?fbid=1740380128097552) | 414 690 2303, igual a tequis.travel y al PDF de Turismo; misma carretera que el DENUE |
| La Ranchería | `la-rancheria-parrilla.jpg` | [Facebook, 24 oct 2026](https://www.facebook.com/photo.php?fbid=1740380134764218) | Misma cuenta |
| La Ranchería | `la-rancheria-parrillada.jpg` | [Facebook, 24 oct 2026](https://www.facebook.com/photo.php?fbid=1740380138097551) | Misma cuenta |
| Portal del Cabrito | `portal-del-cabrito-cabrito.jpg` | [cabrito.mx](https://cabrito.mx/) (Galería) | [original](https://cabrito.mx/images/cabrito-in-cast-iron-plate-6.jpg) |
| Portal del Cabrito | `portal-del-cabrito-comedor.jpg` | [cabrito.mx](https://cabrito.mx/) (Galería) | [original](https://cabrito.mx/images/restaurant-interior-1.jpg) |
| Portal del Cabrito | `portal-del-cabrito-horno.jpg` | [cabrito.mx](https://cabrito.mx/) (Galería) | [original](https://cabrito.mx/images/brick-oven-6.jpg) |
| Portal del Cabrito | `portal-del-cabrito-machitos.jpg` | [cabrito.mx](https://cabrito.mx/) (Galería) | [original](https://cabrito.mx/images/machitos-2.jpg) |
| Bucaneros Mariscos | `bucaneros-mariscos-pescado.jpg` | [Facebook, 21 jul 2026](https://www.facebook.com/photo.php?fbid=1630674089063986) | 442 391 0412, igual a tequis.travel; Andador Vista Hermosa, como el DENUE |
| Quekas TX | `quekas-tx-quesadillas.jpg` | [Facebook, 30 oct 2024](https://www.facebook.com/photo.php?fbid=1061554505976243) | 5 de Mayo 20, igual al DENUE y a Turismo |
| Quekas TX | `quekas-tx-fachada.jpg` | [Facebook, 1 abr 2024](https://www.facebook.com/photo.php?fbid=907379441393751) | Misma cuenta |
| Mi Cabaña | `mi-cabana-chile-en-nogada.jpg` | [Instagram @mi_cabana.tx, 23 ago 2026](https://www.instagram.com/p/DcZZXWkqzOi/) | Carretera a Querétaro, como el DENUE; su Facebook y su Instagram dan el mismo teléfono (427 195 0343) |
| Viajes y Enoturismo | `viajes-y-enoturismo-mina-redentor.jpg` | [viajesyenoturismo.com.mx, Tour a minas de ópalo](https://www.viajesyenoturismo.com.mx/tour-a-minas-de-%C3%B3palo/) | [original](https://image.jimcdn.com/app/cms/image/transf/dimension=1280x10000:format=jpg/path/sd7acf230e466b2e5/image/i97923ffae35e1342/version/1529349092/image.jpg) |
| Viajes y Enoturismo | `viajes-y-enoturismo-mina.jpg` | [viajesyenoturismo.com.mx, Tour a minas de ópalo](https://www.viajesyenoturismo.com.mx/tour-a-minas-de-%C3%B3palo/) | [original](https://image.jimcdn.com/app/cms/image/transf/dimension=1280x10000:format=jpg/path/sd7acf230e466b2e5/image/if2c0f136ec710ab1/version/1529349092/image.jpg) |
| Viajes y Enoturismo | `viajes-y-enoturismo-4x4.jpg` | [viajesyenoturismo.com.mx, Tour a minas de ópalo](https://www.viajesyenoturismo.com.mx/tour-a-minas-de-%C3%B3palo/) | [original](https://image.jimcdn.com/app/cms/image/transf/dimension=1280x10000:format=jpg/path/sd7acf230e466b2e5/image/i4bda6d6d4a0f5f1f/version/1529349093/image.jpg) |
| Balneario La Vega | `balneario-la-vega-albercas.jpg` | [Facebook, 20 may 2025](https://www.facebook.com/photo.php?fbid=122125243784819133) (también es su portada) | Teléfono 414 273 4534 y dirección iguales a su web, y enlaza a balneariolavega.mx. Tiene web, pero sin galería: "Galería" da 404 |

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

**No se pudo conseguir** (se quedan con la foto genérica de categoría): La Estancia Tequisquiapan (no se le encontró sitio ni redes sociales).

Estas fotos son hotlink directo a los sitios de los negocios (no se re-subieron a nuestra infraestructura). Si algún negocio pide que se quiten, hay que actualizar `thumbnail_url`/`image_urls` en `places` y borrar su fila de esta tabla.

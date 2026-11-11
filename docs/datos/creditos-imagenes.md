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
- **Telésforo Trejo, Guadalupano, Parador Colosio, El Oasis y Termas del Rey**: no tenían web el 5 nov (El Oasis y Termas del Rey sí la tienen; ver la sección del 9 nov). Usan las genéricas de categoría ya acreditadas.
- **Viñedos La Redonda**: su web está en mantenimiento y la tienda pide contraseña. Solo hay una imagen para redes con el logo encima, y su operación está suspendida.
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
| Balneario La Vega | `balneario-la-vega-jardin.jpg` | [balneariolavega.mx](https://balneariolavega.mx) | [original](https://balneariolavega.mx/templates/plantilla_balneario/imagenes/fondo-banner.jpg) |
| Vinícola San Juanito | `san-juanito-terraza.jpg` | [www.sanjuanito.com.mx](https://www.sanjuanito.com.mx) | [original](https://www.sanjuanito.com.mx/wp-content/uploads/2024/09/paisaje-bodega.webp) |
| Vinícola San Juanito | `san-juanito-cava.jpg` | [www.sanjuanito.com.mx](https://www.sanjuanito.com.mx) | [original](https://www.sanjuanito.com.mx/wp-content/uploads/2024/09/cava-vinos.webp) |
| Vinícola San Juanito | `san-juanito-cosecha.jpg` | [www.sanjuanito.com.mx](https://www.sanjuanito.com.mx) | [original](https://www.sanjuanito.com.mx/wp-content/uploads/2024/09/Uva-cosecha.webp) |
| Termas del Rey | `termas-del-rey-campamento.jpg` | [www.termasdelrey.com](https://www.termasdelrey.com) | [original](https://irp.cdn-website.com/32521487/dms3rep/multi/opt/camp-1920w.jpg) |
| Termas del Rey | `termas-del-rey-isla.jpg` | [www.termasdelrey.com](https://www.termasdelrey.com) | [original](https://irp.cdn-website.com/32521487/dms3rep/multi/opt/La+Isla-1920w.jpg) |

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
| Norte B | `norte-b-bodega.jpg` | [norteb.mx](https://norteb.mx) | [original](https://norteb.mx/wp-content/uploads/2020/02/seccion-vinos.jpg) |
| CR Vinos MX | `cr-vinos-mx-picnic.jpg` | [crvinosmx.com/enotourism/experiences](https://crvinosmx.com/enotourism/experiences) | [original](https://cdn.sanity.io/images/25ql29fy/production/378d1879e986d0d300b66f9620c3afc9c0e937cc-5184x3456.jpg) |
| CR Vinos MX | `cr-vinos-mx-tanques.jpg` | [crvinosmx.com/enotourism/experiences](https://crvinosmx.com/enotourism/experiences) | [original](https://cdn.sanity.io/images/25ql29fy/production/c02db05fdfa682998843f6b749a685902e90322d-1080x1080.jpg) |
| CR Vinos MX | `cr-vinos-mx-cartinto.jpg` | [crvinosmx.com/restaurant](https://crvinosmx.com/restaurant) | [original](https://cdn.sanity.io/images/25ql29fy/production/15f23ea55f168cfd49c6c14f1a363e966c13a63f-6240x4160.jpg) |
| Viñedo La Revuelta | `vinedo-la-revuelta-vinedo.jpg` | [larevuelta.com.mx](https://larevuelta.com.mx) | [original](https://img1.wsimg.com/isteam/ip/235efc7c-73f3-4650-85cd-ce9ee72e249b/IMG_9268.JPG) |
| Viñedo La Revuelta | `vinedo-la-revuelta-comedor.jpg` | [larevuelta.com.mx](https://larevuelta.com.mx) | [original](https://img1.wsimg.com/isteam/ip/235efc7c-73f3-4650-85cd-ce9ee72e249b/WhatsApp%20Image%202021-10-27%20at%2018.46.34.jpeg) |
| Viñedo La Revuelta | `vinedo-la-revuelta-platillo.jpg` | [larevuelta.com.mx/gran-reserva](https://larevuelta.com.mx/gran-reserva) | [original](https://img1.wsimg.com/isteam/ip/235efc7c-73f3-4650-85cd-ce9ee72e249b/WhatsApp%20Image%202021-10-27%20at%2018.47.12.jpeg) |

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

# Créditos de fotos

Todas las fotos de `places`/`events` vienen de Wikimedia Commons bajo licencias libres que exigen atribución. Son fotos **representativas por categoría** (p. ej. una foto genérica de "quesería" para todos los negocios de esa subcategoría), no necesariamente del negocio exacto — excepción hecha de las de la Plaza Miguel Hidalgo, la Iglesia y los globos, que sí son de Tequisquiapan/Querétaro específicamente.

La app muestra el crédito agregado en Perfil → Créditos de fotos (`ViewsProfileView.swift`). Si se reemplaza cualquiera de estas fotos por una real del negocio, hay que quitar su fila de aquí.

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

## Fotos reales de negocios específicos

Para un puñado de lugares destacados (`is_featured = true`) sí conseguimos la foto real del negocio, tomada de su propio sitio oficial (no de Google Maps ni redes — eso rompe términos de servicio o no es del negocio). Se revisó a mano uno por uno, no se hizo para los 50. Aplicado con `database/databaseseed_business_photos.sql`.

| Lugar | Foto | Fuente |
|---|---|---|
| Freixenet México | Cava con botellas de espumoso | [salavive.mx](https://salavive.mx) (sitio oficial actual; el `website` que tenía la DB, freixenet.com.mx, ya no resuelve) |
| Viñedos Puerta del Lobo | Viñedo con vista al valle | [puertadellobo.mx](https://puertadellobo.mx) |
| La Casa del Atrio | Habitación del hotel | [lacasadelatrio.com](https://lacasadelatrio.com) (vía su motor de reservas) |
| Globos Aerostáticos Tequisquiapan | Globos inflándose en Tequisquiapan | [vuelaenglobo.com/tequisquiapan](https://vuelaenglobo.com/tequisquiapan/) |

**No se pudo conseguir** (se quedan con la foto genérica de categoría): Viñedos La Redonda (su sitio, laredondavinos.com, está en mantenimiento) y La Estancia Tequisquiapan (no se le encontró sitio ni redes sociales).

Estas fotos son hotlink directo a los sitios de los negocios (no se re-subieron a nuestra infraestructura). Si algún negocio pide que se quiten, hay que actualizar `thumbnail_url`/`image_urls` en `places` y borrar su fila de esta tabla.

-- Asigna fotos reales de Tequisquiapan (Wikimedia Commons, CC BY-SA/CC BY) a places y events
-- que no tenían thumbnail_url. Ver database/IMAGE_CREDITS.md para autoría y licencia de cada foto.
-- Son fotos representativas por categoría/subcategoría, no necesariamente del negocio exacto.

-- turistico
UPDATE places SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Plaza_principal_en_Tequisquiapan.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/a/a6/Plaza_principal_en_Tequisquiapan.jpg']
WHERE category = 'turistico' AND subcategory = 'Plaza' AND thumbnail_url IS NULL;

UPDATE places SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Iglesia_Tequisquiapan.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/c/cd/Iglesia_Tequisquiapan.jpg']
WHERE category = 'turistico' AND subcategory = 'Templo' AND thumbnail_url IS NULL;

UPDATE places SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Portales_de_Tequisquiapan.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/f/f4/Portales_de_Tequisquiapan.jpg']
WHERE category = 'turistico' AND subcategory IN ('Grutas', 'Monumento', 'Museo', 'Naturaleza', 'Parque') AND thumbnail_url IS NULL;

-- experiencias
UPDATE places SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Globos_Quer%C3%A9taro.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/a/a6/Globos_Quer%C3%A9taro.jpg']
WHERE category = 'experiencias' AND subcategory = 'Globo Aerostático' AND thumbnail_url IS NULL;

UPDATE places SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg']
WHERE category = 'experiencias' AND subcategory = 'Quesería' AND thumbnail_url IS NULL;

UPDATE places SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg']
WHERE category = 'experiencias' AND subcategory IN ('Balneario', 'Spa') AND thumbnail_url IS NULL;

-- (no encontramos una foto de viñedo de Querétaro con licencia libre vigente; reusamos la de
-- cata de quesos y vino, coherente temáticamente, en vez de una foto de viñedo alpino genérico)
UPDATE places SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg']
WHERE category = 'experiencias' AND subcategory = 'Viñedo' AND thumbnail_url IS NULL;

UPDATE places SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Portales_de_Tequisquiapan.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/f/f4/Portales_de_Tequisquiapan.jpg']
WHERE category = 'experiencias' AND subcategory IN ('Taller', 'Tour') AND thumbnail_url IS NULL;

-- gastronomia (todas las subcategorías)
UPDATE places SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/7/7f/Gastronom%C3%ADa_mexicana.jpg']
WHERE category = 'gastronomia' AND thumbnail_url IS NULL;

-- hospedaje (todas las subcategorías)
UPDATE places SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/8/8f/Tequis_Hotel_Pool_%284%29_-_Flickr_-_Carl_Campbell.jpg']
WHERE category = 'hospedaje' AND thumbnail_url IS NULL;

-- compras (todas las subcategorías)
UPDATE places SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg']
WHERE category = 'compras' AND thumbnail_url IS NULL;

-- events
UPDATE events SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/d/d8/Cata_de_quesos_y_vino.jpg']
WHERE title IN ('Feria Nacional del Queso y Vino', 'Festival del Vino Joven');

UPDATE events SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Globos_Quer%C3%A9taro.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/a/a6/Globos_Quer%C3%A9taro.jpg']
WHERE title = 'Festival del Globo';

UPDATE events SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Iglesia_Tequisquiapan.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/c/cd/Iglesia_Tequisquiapan.jpg']
WHERE title = 'Semana Santa';

UPDATE events SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/4/42/Artesan%C3%ADas_en_Tequisquiapan.jpg']
WHERE title = 'Festival de la Cestería';

-- Plaza Miguel Hidalgo es el escenario real de estos tres (la foto de la plaza incluso muestra
-- decoración de Día de Muertos puesta ahí)
UPDATE events SET thumbnail_url = 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Plaza_principal_en_Tequisquiapan.jpg', image_urls = ARRAY['https://upload.wikimedia.org/wikipedia/commons/a/a6/Plaza_principal_en_Tequisquiapan.jpg']
WHERE title IN ('Fiestas Patrias', 'Año Nuevo en la Plaza', 'Día de Muertos');

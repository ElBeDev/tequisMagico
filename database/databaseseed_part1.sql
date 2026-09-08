-- Seed Data: 50 Lugares de Tequisquiapan
-- Ejecutar después del schema.sql

-- SITIOS TURÍSTICOS (6)
INSERT INTO places (name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, amenities, tags, rating, reviews_count, is_verified)
VALUES
('Plaza Miguel Hidalgo', 'turistico', 'Plaza', 20.5213, -99.8936, 'Centro Histórico, 76750 Tequisquiapan, Qro.', 'Corazón del pueblo mágico', 'Plaza principal rodeada de portales coloniales y fresnos centenarios. Kiosco central, bancas de cantera y fuente ornamental. Lugar perfecto para disfrutar de la arquitectura colonial y la vida local.', 'free', ARRAY['Bancas', 'Iluminación', 'WiFi gratuito', 'Baños públicos cercanos'], ARRAY['Histórico', 'Familiar', 'Fotogénico', 'Romántico'], 4.8, 1247, true),

('Templo de Santa María de la Asunción', 'turistico', 'Templo', 20.5217, -99.8931, 'Emiliano Zapata s/n, Centro, 76750', 'Templo neoclásico del siglo XVIII', 'Templo neoclásico con fachada de cantera rosa. Interior con retablos dorados y pinturas religiosas coloniales. Una joya arquitectónica del centro histórico.', 'free', ARRAY['Accesible', 'Histórico'], ARRAY['Histórico', 'Arquitectura Colonial', 'Religioso'], 4.7, 856, true),

('Ex Convento de San José', 'turistico', 'Museo', 20.5220, -99.8928, 'Juárez s/n, Centro', 'Construcción franciscana del siglo XVII', 'Antiguo convento franciscano que hoy alberga talleres culturales y exposiciones de arte. Arquitectura colonial impresionante con patios y claustros históricos.', 'budget', ARRAY['Museo', 'Talleres', 'Exposiciones'], ARRAY['Histórico', 'Museo', 'Arte', 'Cultural'], 4.5, 423, false),

('La Pila', 'turistico', 'Monumento', 20.5225, -99.8940, 'Calle Morelos esq. con Ezequiel Montes', 'Fuente histórica de cantera rosa', 'Monumento emblemático de Tequisquiapan. Fuente de cantera rosa que ha sido símbolo del municipio por generaciones. Lugar perfecto para fotografías.', 'free', ARRAY['Iluminación nocturna', 'Accesible'], ARRAY['Monumento', 'Fotogénico', 'Histórico'], 4.6, 678, false),

('Puente Colgante México-Querétaro', 'turistico', 'Monumento', 20.5190, -99.8915, 'Carretera a San Juan del Río', 'Puente histórico de 1910', 'Puente histórico construido en 1910 que ofrece vistas panorámicas del río y la vegetación circundante. Excelente para caminatas y fotografía.', 'free', ARRAY['Sendero peatonal', 'Vista panorámica'], ARRAY['Histórico', 'Naturaleza', 'Fotogénico', 'Caminata'], 4.4, 234, false),

('Mercado de Artesanías', 'compras', 'Mercado', 20.5208, -99.8945, 'Av. Independencia, Centro', 'Mercado con más de 100 locales', 'Mercado techado con más de 100 locales de artesanías, cestería, textiles y productos locales. El mejor lugar para comprar souvenirs y artesanías auténticas.', 'moderate', ARRAY['Baños', 'Cajeros', 'Estacionamiento cercano'], ARRAY['Compras', 'Artesanías', 'Tradicional', 'Souvenirs'], 4.3, 892, false);

-- VIÑEDOS (5)
INSERT INTO places (name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, phone_number, website, amenities, tags, rating, reviews_count, business_tier, is_verified, is_featured)
VALUES
('Freixenet México', 'experiencias', 'Viñedo', 20.5450, -99.8720, 'Carretera Ezequiel Montes-Cadereyta km 40.5', 'Cava más grande de América Latina', 'La cava más grande de América Latina. Tours por las cavas subterráneas, degustación de espumosos elaborados con método tradicional. Una experiencia imperdible.', 'moderate', '414-197-8080', 'https://freixenet.com.mx', ARRAY['Estacionamiento', 'Tienda', 'Restaurant', 'Accesible', 'Tours guiados'], ARRAY['Viñedo', 'Cata', 'Tour', 'Premium', 'Espumosos'], 4.7, 1534, 'premium', true, true),

('Viñedos La Redonda', 'experiencias', 'Viñedo', 20.5350, -99.8850, 'Camino a La Trinidad km 2', 'Viñedo boutique familiar', 'Viñedo boutique de propiedad familiar. Catas maridadas con productos artesanales, recorridos por los viñedos. Eventos privados y bodas disponibles.', 'expensive', '414-273-0400', NULL, ARRAY['Estacionamiento', 'Pet Friendly', 'Terraza', 'Eventos privados'], ARRAY['Viñedo', 'Cata', 'Boutique', 'Romántico', 'Maridaje'], 4.8, 687, 'premium', true, true),

('Viñedos Azteca', 'experiencias', 'Viñedo', 20.5280, -99.8780, 'Carretera Tequisquiapan-Ezequiel Montes km 8', 'Viñedo con arquitectura colonial', 'Viñedo con hermosa arquitectura colonial mexicana. Tours educativos, catas profesionales y restaurante gourmet con vista a los viñedos.', 'moderate', '414-273-1830', NULL, ARRAY['Estacionamiento', 'Restaurant', 'Terraza', 'Tours'], ARRAY['Viñedo', 'Gourmet', 'Colonial', 'Restaurant'], 4.6, 523, 'basic', false, false),

('Viñedos Puerta del Lobo', 'experiencias', 'Viñedo', 20.5400, -99.8650, 'Carretera Tequisquiapan-Cadereyta km 12', 'Viñedo moderno premium', 'Viñedo de arquitectura contemporánea. Vinos premium de alta gama, restaurante de autor con chef reconocido. Experiencia gastronómica única.', 'luxury', '414-273-2100', NULL, ARRAY['Estacionamiento', 'Restaurant de autor', 'Catas premium', 'Valet parking'], ARRAY['Viñedo', 'Premium', 'Moderno', 'Gourmet', 'Chef'], 4.9, 234, 'premium', true, true),

('Los Rosales Viñedos', 'experiencias', 'Viñedo', 20.5320, -99.8920, 'Carretera a San Juan del Río km 4', 'Viñedo familiar tradicional', 'Viñedo familiar con tradición de tres generaciones. Catas informales en ambiente relajado, ventas directas de vinos artesanales.', 'moderate', '414-273-0856', NULL, ARRAY['Estacionamiento', 'Ventas directas', 'Pet Friendly'], ARRAY['Viñedo', 'Familiar', 'Tradicional', 'Artesanal'], 4.4, 178, 'none', false, false);

-- QUESERÍAS (3)
INSERT INTO places (name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, phone_number, amenities, tags, rating, reviews_count, business_tier, is_verified)
VALUES
('Quesería Vai', 'experiencias', 'Quesería', 20.5240, -99.8960, 'Av. 5 de Mayo 24, Centro', 'Quesería artesanal galardonada', 'Quesería artesanal ganadora de múltiples premios. Quesos de leche de cabra, vaca y oveja. Degustaciones guiadas y ventas directas.', 'moderate', '414-273-0385', ARRAY['Degustaciones', 'Ventas', 'Envíos'], ARRAY['Quesería', 'Artesanal', 'Gourmet', 'Premiado'], 4.7, 445, 'basic', true),

('Quesos San Juanico', 'experiencias', 'Quesería', 20.5180, -99.8890, 'Carretera a San Juan del Río km 1', 'Más de 30 años de tradición', 'Quesería con más de 30 años de experiencia. Especialistas en quesos maduros, frescos y botaneros. Visitas guiadas a la fábrica disponibles.', 'budget', '414-273-0124', ARRAY['Tours', 'Ventas', 'Estacionamiento'], ARRAY['Quesería', 'Tradicional', 'Maduros', 'Familiar'], 4.5, 312, 'none', false),

('Quesos El Peregrino', 'experiencias', 'Quesería', 20.5300, -99.8870, 'Blvd. de las Américas 15', 'Fábrica artesanal con café', 'Fábrica de quesos artesanales con tours de producción. Incluye tienda y café donde puedes degustar los quesos con vinos locales.', 'moderate', NULL, ARRAY['Tours', 'Café', 'Ventas', 'Estacionamiento'], ARRAY['Quesería', 'Tours', 'Café', 'Artesanal'], 4.6, 267, 'none', false);

-- Confirmación parcial
SELECT COUNT(*) as lugares_insertados FROM places;

-- Seed Data Parte 2: Restaurantes, Cafeterías, Hoteles, Balnearios
-- Total: 23 lugares adicionales

-- RESTAURANTES (7)
INSERT INTO places (name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, phone_number, amenities, tags, rating, reviews_count, business_tier, is_verified, is_featured)
VALUES
('La Estancia Tequisquiapan', 'gastronomia', 'Restaurante', 20.5195, -99.8950, 'Morelos 8, Centro', 'Cocina mexicana contemporánea', 'Restaurante de alta cocina mexicana contemporánea. Terraza con vista privilegiada a la plaza principal, carta extensa de vinos nacionales e internacionales.', 'expensive', '414-273-0432', ARRAY['Terraza', 'WiFi', 'Pet Friendly (terraza)', 'Estacionamiento cercano', 'Reservaciones'], ARRAY['Gourmet', 'Terraza', 'Romántico', 'Vinos', 'Vista plaza'], 4.6, 1023, 'premium', true, true),

('Los Faroles', 'gastronomia', 'Restaurante', 20.5220, -99.8940, 'Portal Guerrero 5, Centro', 'Cocina tradicional queretana', 'Restaurante ubicado en los históricos portales. Especialidad en cocina tradicional queretana: enchiladas queretanas, cecina, nopalitos, gorditas. Ambiente familiar y auténtico.', 'moderate', '414-273-0063', ARRAY['WiFi', 'Familiar', 'Portales'], ARRAY['Tradicional', 'Queretana', 'Familiar', 'Enchiladas', 'Cecina'], 4.4, 876, 'basic', false, false),

('K''puchinos Restaurant', 'gastronomia', 'Restaurante', 20.5212, -99.8933, 'Andador 5 de Mayo 11, Centro', 'Fusión mexicana-internacional', 'Restaurante de fusión con jardín interior. Menú variado que incluye pastas, pizzas, pescados y platillos mexicanos. Música en vivo fines de semana.', 'moderate', '414-273-1901', ARRAY['Jardín', 'WiFi', 'Música en vivo', 'Bar'], ARRAY['Fusión', 'Jardín', 'Música', 'Pizzas', 'Pastas'], 4.5, 654, 'basic', false, false),

('Doña Juanita', 'gastronomia', 'Restaurante', 20.5225, -99.8938, 'Emiliano Zapata 6, Centro', 'Cocina casera queretana', 'Comedor tradicional con sazón casero. Ambiente familiar, comida abundante y precios accesibles. Especialidad en gorditas, barbacoa y tamales.', 'budget', '414-273-0245', ARRAY['Económico', 'Familiar', 'Comida corrida'], ARRAY['Casera', 'Económica', 'Gorditas', 'Barbacoa', 'Tamales'], 4.7, 432, 'none', false, false),

('El Vergel', 'gastronomia', 'Restaurante', 20.5189, -99.8922, 'Juárez 24, Centro', 'Jardín-restaurant con fuente', 'Hermoso jardín interior con fuente. Cocina mexicana tradicional, famoso por sus desayunos típicos: chilaquiles, molletes, café de olla.', 'moderate', NULL, ARRAY['Jardín', 'Fuente', 'Desayunos', 'WiFi'], ARRAY['Jardín', 'Desayunos', 'Chilaquiles', 'Tradicional'], 4.6, 567, 'none', false, false),

('La Fabbrica Italiana', 'gastronomia', 'Restaurante', 20.5203, -99.8947, 'Morelos 12, Centro', 'Auténtica cocina italiana', 'Restaurante italiano con chef napolitano. Pastas frescas hechas en casa, pizzas al horno de leña con ingredientes importados. Ambiente acogedor.', 'moderate', '414-273-2156', ARRAY['Horno de leña', 'Pastas frescas', 'Vinos italianos'], ARRAY['Italiana', 'Pizzas', 'Pastas', 'Auténtica'], 4.8, 389, 'basic', false, false),

('Sushi Roll Tequisquiapan', 'gastronomia', 'Restaurante', 20.5230, -99.8955, 'Ezequiel Montes 20', 'Sushi y comida japonesa', 'Cadena de sushi con ingredientes frescos. Rollos especiales, tepanyaki, ramen. Servicio a domicilio disponible.', 'moderate', NULL, ARRAY['Delivery', 'Para llevar', 'WiFi'], ARRAY['Sushi', 'Japonesa', 'Rollos', 'Tepanyaki'], 4.3, 512, 'none', false, false);

-- CAFETERÍAS (3)
INSERT INTO places (name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, amenities, tags, rating, reviews_count)
VALUES
('Café del Centro', 'gastronomia', 'Cafetería', 20.5215, -99.8935, 'Portal Guerrero 3, Centro', 'Café de especialidad en portales', 'Cafetería tradicional ubicada en los portales de la plaza. Café de especialidad de Veracruz, panadería artesanal, postres caseros. Perfecto para desayunar o merendar.', 'budget', ARRAY['WiFi', 'Terraza', 'Panadería'], ARRAY['Café', 'Desayunos', 'Postres', 'Portales'], 4.5, 678),

('La Nevería del Pueblo', 'gastronomia', 'Nevería', 20.5218, -99.8932, 'Andador Independencia, Centro', 'Nieves artesanales', 'Nieves y paletas artesanales con sabores tradicionales y exóticos: garambullo, tuna, guanábana, nuez, mezcal. Todos los ingredientes naturales.', 'budget', ARRAY['Para llevar', 'Terraza'], ARRAY['Nieves', 'Paletas', 'Artesanal', 'Postres'], 4.8, 823),

('Chocolatería Don Rafa', 'gastronomia', 'Cafetería', 20.5210, -99.8943, 'Juárez 8, Centro', 'Chocolates artesanales', 'Chocolatería artesanal mexicana. Bombones, trufas, chocolate caliente especiado. Cacao 100% mexicano de Tabasco y Chiapas.', 'budget', ARRAY['Tienda', 'Regalos', 'Envíos'], ARRAY['Chocolate', 'Artesanal', 'Bombones', 'Mexicano'], 4.7, 345);

-- HOTELES (5)
INSERT INTO places (name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, phone_number, website, amenities, tags, rating, reviews_count, business_tier, is_verified, is_featured)
VALUES
('La Casa del Atrio', 'hospedaje', 'Hotel Boutique', 20.5222, -99.8930, 'Guerrero 2, Centro', 'Hotel boutique 5 estrellas', 'Hotel boutique de lujo en casona colonial restaurada. 11 suites únicas, spa completo, alberca climatizada, restaurante gourmet. Servicio personalizado de excelencia.', 'luxury', '414-273-0400', 'https://lacasadelatrio.com', ARRAY['Spa', 'Alberca', 'WiFi', 'Estacionamiento', 'Restaurant', 'Pet Friendly', 'Concierge'], ARRAY['Lujo', 'Romántico', 'Colonial', 'Spa', 'Boutique'], 4.9, 456, 'premium', true, true),

('Hotel Museo La Casona', 'hospedaje', 'Hotel Boutique', 20.5199, -99.8925, 'Morelos 11, Centro', 'Hotel-museo con antigüedades', 'Hotel boutique que funciona como museo vivo. Cada habitación decorada con antigüedades auténticas. Arquitectura colonial, 14 habitaciones únicas.', 'expensive', '414-273-0132', NULL, ARRAY['WiFi', 'Desayuno incluido', 'Estacionamiento', 'Museo'], ARRAY['Boutique', 'Museo', 'Colonial', 'Único', 'Histórico'], 4.7, 298, 'none', false, false),

('Hotel Posada Tequisquiapan', 'hospedaje', 'Hotel', 20.5187, -99.8938, 'Moctezuma 8, Centro', 'Hotel tradicional con jardines', 'Hotel tradicional familiar con hermosos jardines y alberca. Ubicación céntrica a 3 cuadras de la plaza principal. Excelente relación calidad-precio.', 'moderate', '414-273-0021', NULL, ARRAY['Alberca', 'Jardín', 'Estacionamiento', 'WiFi', 'Desayuno'], ARRAY['Tradicional', 'Familiar', 'Jardín', 'Alberca'], 4.5, 621, 'none', false, false),

('Hotel Hidalgo', 'hospedaje', 'Hotel', 20.5205, -99.8941, 'Hidalgo 15, Centro', 'Hotel económico céntrico', 'Hotel sencillo y limpio en el corazón del centro histórico. Ideal para viajeros con presupuesto ajustado. Habitaciones básicas con baño privado.', 'budget', '414-273-0063', NULL, ARRAY['WiFi', 'Ubicación céntrica'], ARRAY['Económico', 'Céntrico', 'Básico'], 4.0, 234, 'none', false, false),

('Hotel El Relox', 'hospedaje', 'Hotel', 20.5228, -99.8945, '5 de Mayo 35, Centro', 'Hotel económico familiar', 'Hotel familiar con habitaciones sencillas. Precio accesible, ubicación cercana a la plaza. Atención amable y desayuno incluido.', 'budget', '414-273-0198', NULL, ARRAY['WiFi', 'Desayuno incluido', 'Familiar'], ARRAY['Económico', 'Familiar', 'Céntrico'], 4.2, 178, 'none', false, false);

-- BALNEARIOS Y SPAS (3)
INSERT INTO places (name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, phone_number, amenities, tags, rating, reviews_count, business_tier, is_verified)
VALUES
('Balneario El Oasis', 'experiencias', 'Balneario', 20.5145, -99.8810, 'Carretera a San Juan del Río km 3', 'Parque acuático con albercas termales', 'Parque acuático familiar con albercas de aguas termales, toboganes, chapoteaderos y amplias áreas verdes. Palapas y asadores disponibles para renta.', 'moderate', '414-273-0156', ARRAY['Albercas', 'Toboganes', 'Palapas', 'Restaurant', 'Estacionamiento', 'Áreas verdes'], ARRAY['Familiar', 'Albercas', 'Toboganes', 'Aguas termales'], 4.4, 892, 'basic', false),

('Balneario La Fuente', 'experiencias', 'Balneario', 20.5100, -99.8750, 'Camino a La Fuente s/n', 'Aguas termales naturales', 'Balneario con aguas termales naturales. Albercas familiares de diferentes temperaturas, área de camping, zonas para día de campo. Ambiente rústico y relajado.', 'budget', NULL, ARRAY['Camping', 'Palapas', 'Asadores', 'Albercas termales'], ARRAY['Camping', 'Natural', 'Familiar', 'Económico'], 4.2, 534, 'none', false),

('Spa Azteca', 'experiencias', 'Spa', 20.5192, -99.8912, 'Carretera a San Juan km 1.5', 'Spa completo con temazcal', 'Spa de servicio completo: masajes terapéuticos, faciales, vinoterapia, temazcal prehispánico. Terapeutas certificados, ambiente de lujo y relajación total.', 'expensive', '414-273-1845', ARRAY['Temazcal', 'Masajes', 'Faciales', 'Vinoterapia', 'Vapor', 'Jacuzzi'], ARRAY['Spa', 'Relajación', 'Temazcal', 'Masajes', 'Lujo'], 4.7, 267, 'premium', true);

-- EXPERIENCIAS (4)
INSERT INTO places (name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, phone_number, amenities, tags, rating, reviews_count, business_tier, is_verified, is_featured)
VALUES
('Globos Aerostáticos Tequisquiapan', 'experiencias', 'Globo Aerostático', 20.5250, -99.8800, 'Varios puntos de despegue', 'Vuelos en globo al amanecer', 'Experimenta Tequisquiapan desde el cielo. Vuelos en globo aerostático al amanecer con vistas panorámicas del pueblo mágico y los viñedos. Incluye transporte, brindis con espumoso y certificado de vuelo.', 'luxury', '414-120-8900', ARRAY['Transporte incluido', 'Brindis', 'Certificado', 'Fotos'], ARRAY['Aventura', 'Romántico', 'Amanecer', 'Vista aérea', 'Experiencia única'], 4.9, 445, 'premium', true, true),

('Talleres de Cestería', 'experiencias', 'Taller', 20.5216, -99.8927, 'Casa de la Cultura, Morelos s/n, Centro', 'Aprende cestería tradicional', 'Talleres de cestería con artesanos locales. Aprende la técnica ancestral de tejido de canastos y crea tu propia pieza. Experiencia cultural auténtica de 2 horas.', 'moderate', '414-273-0134', ARRAY['Materiales incluidos', 'Certificado', 'Pieza para llevar'], ARRAY['Cultural', 'Artesanal', 'Taller', 'Tradicional', 'Familiar'], 4.8, 189, 'none', false, false),

('Cicloturismo Tequisquiapan', 'experiencias', 'Tour', 20.5213, -99.8936, 'Punto de encuentro: Plaza Miguel Hidalgo', 'Tours en bicicleta por viñedos', 'Renta de bicicletas y tours guiados. Recorre los viñedos y el campo queretano en bicicleta. Tours de medio día y día completo disponibles. Incluye guía, equipo y refrigerios.', 'moderate', '442-195-7800', ARRAY['Bicicletas de montaña', 'Casco', 'Guía', 'Refrigerios'], ARRAY['Ciclismo', 'Naturaleza', 'Viñedos', 'Deportivo', 'Eco-turismo'], 4.6, 234, 'none', false, false),

('Paseos a Caballo Rancho San José', 'experiencias', 'Tour', 20.5050, -99.8950, 'Carretera a Bernal km 5', 'Cabalgatas por el campo', 'Paseos a caballo por el campo queretano y cerros con vistas panorámicas. Guías experimentados, caballos mansos. Tours de 1, 2 o 4 horas disponibles.', 'moderate', '414-273-2890', ARRAY['Guías certificados', 'Caballos mansos', 'Seguro incluido'], ARRAY['Cabalgata', 'Naturaleza', 'Aventura', 'Campo', 'Familia'], 4.5, 312, 'none', false, false);

SELECT COUNT(*) as total_lugares_ahora FROM places;

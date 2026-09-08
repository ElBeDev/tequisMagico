-- Seed Data Parte 3 FINAL: Compras, Naturaleza y Bares
-- Total: 14 lugares (completa los 50)

-- COMPRAS / ARTESANÍAS (4)
INSERT INTO places (name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, amenities, tags, rating, reviews_count)
VALUES
('Tienda de Artesanías Otomíes', 'compras', 'Artesanías', 20.5207, -99.8948, 'Independencia 20, Centro', 'Artesanías otomíes auténticas', 'Tienda especializada en artesanías otomíes auténticas: textiles bordados a mano, muñecas tradicionales, bolsas, blusas. Directamente de comunidades indígenas.', 'moderate', ARRAY['Envíos', 'Tarjetas', 'Certificados de autenticidad'], ARRAY['Artesanías', 'Textiles', 'Otomí', 'Auténtico', 'Bordados'], 4.7, 456),

('Cestería Don Luis', 'compras', 'Artesanías', 20.5198, -99.8943, 'Juárez 18, Centro', 'Taller-tienda de cestería', 'Taller familiar de cestería tradicional. Canastos de todos tamaños, muebles de mimbre, decoración para el hogar. Puedes ver a los artesanos trabajando.', 'moderate', ARRAY['Taller visible', 'Pedidos personalizados', 'Envíos'], ARRAY['Cestería', 'Mimbre', 'Artesanal', 'Tradicional', 'Hecho a mano'], 4.6, 289),

('La Casa del Mimbre', 'compras', 'Artesanías', 20.5231, -99.8952, 'Ezequiel Montes 28', 'Muebles y decoración de mimbre', 'Tienda especializada en muebles y artículos decorativos de mimbre y ratán. Desde pequeños detalles hasta muebles completos para terraza. Envíos a toda la República.', 'moderate', ARRAY['Envíos nacionales', 'Muebles a medida', 'Garantía'], ARRAY['Muebles', 'Mimbre', 'Decoración', 'Ratán'], 4.5, 198),

('Dulces Típicos La Abuelita', 'compras', 'Dulcería', 20.5214, -99.8937, 'Portal Guerrero 7', 'Dulces tradicionales mexicanos', 'Dulcería tradicional con amplio surtido: jamoncillos, ates de membrillo, palanquetas, alegrías, cocadas, muéganos. Productos frescos elaborados artesanalmente.', 'budget', ARRAY['Degustaciones', 'Paquetes regalo', 'Envíos'], ARRAY['Dulces', 'Tradicional', 'Artesanal', 'Regalo', 'Souvenirs'], 4.8, 634);

-- NATURALEZA Y ALREDEDORES (3)
INSERT INTO places (name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, amenities, tags, rating, reviews_count)
VALUES
('Parque La Pila', 'turistico', 'Parque', 20.5240, -99.8965, 'Av. Juárez s/n', 'Parque público familiar', 'Parque público con áreas verdes, juegos infantiles, canchas deportivas y zona de picnic. Ideal para familias y actividades al aire libre. Limpio y bien mantenido.', 'free', ARRAY['Juegos infantiles', 'Bancas', 'Iluminación', 'Canchas', 'Baños'], ARRAY['Parque', 'Familiar', 'Juegos', 'Deportes', 'Picnic'], 4.3, 445),

('Presa Centenario', 'turistico', 'Naturaleza', 20.5550, -99.9120, 'A 7 km del centro', 'Presa con paisaje natural', 'Presa rodeada de paisaje natural. Ideal para pesca deportiva, observación de aves y fotografía de naturaleza. Caminos para caminata. Tranquilo y relajante.', 'free', ARRAY['Pesca', 'Observación de aves', 'Senderos', 'Miradores'], ARRAY['Naturaleza', 'Pesca', 'Aves', 'Fotografía', 'Tranquilo'], 4.4, 289),

('Grutas Los Herrera', 'turistico', 'Grutas', 20.4980, -99.8650, 'Carretera a Ezequiel Montes km 12', 'Sistema de grutas naturales', 'Sistema de grutas con impresionantes formaciones rocosas: estalactitas y estalagmitas. Tours guiados de aproximadamente 45 minutos. Temperatura fresca constante. Experiencia fascinante.', 'budget', ARRAY['Tours guiados', 'Iluminación', 'Senderos señalizados', 'Estacionamiento'], ARRAY['Grutas', 'Naturaleza', 'Aventura', 'Geología', 'Tour'], 4.6, 567);

-- BARES Y VIDA NOCTURNA (3)
INSERT INTO places (name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, amenities, tags, rating, reviews_count)
VALUES
('La Cueva del Pirata', 'gastronomia', 'Bar', 20.5202, -99.8939, 'Juárez 10, Centro', 'Bar con música en vivo', 'Bar animado con terraza. Música en vivo los fines de semana (rock, blues, trova). Amplia selección de cervezas artesanales nacionales y cócteles clásicos. Ambiente relajado.', 'moderate', ARRAY['Terraza', 'Música en vivo', 'Cervezas artesanales', 'WiFi'], ARRAY['Bar', 'Música', 'Terraza', 'Cerveza artesanal', 'Noche'], 4.5, 423),

('Bar El Centenario', 'gastronomia', 'Bar', 20.5219, -99.8934, 'Andador 5 de Mayo 8', 'Bar tradicional mexicano', 'Bar tradicional con ambiente mexicano auténtico. Amplia selección de mezcales artesanales de Oaxaca, tequilas premium y cócteles. Botanero incluido. Ambiente casual y amigable.', 'budget', ARRAY['Botanero', 'Mezcales', 'Terraza pequeña'], ARRAY['Bar', 'Mezcal', 'Tequila', 'Tradicional', 'Botanero'], 4.4, 312),

('La Viña Wine Bar', 'gastronomia', 'Wine Bar', 20.5196, -99.8942, 'Morelos 15, Centro', 'Wine bar especializado', 'Wine bar elegante especializado en vinos de la región. Más de 50 etiquetas de viñedos locales disponibles por copa o botella. Tablas de quesos y charcutería. Ambiente sofisticado.', 'expensive', ARRAY['Vinos locales', 'Tablas', 'Sommelier', 'Terraza'], ARRAY['Wine bar', 'Vinos', 'Elegante', 'Quesos', 'Romántico'], 4.7, 267);

-- RESTAURANTES ADICIONALES para llegar a 50 (4 más)
INSERT INTO places (name, category, subcategory, latitude, longitude, address, short_description, full_description, price_range, phone_number, amenities, tags, rating, reviews_count)
VALUES
('Antojitos Doña Mary', 'gastronomia', 'Antojitos', 20.5235, -99.8950, 'Morelos esquina con Juárez', 'Antojitos mexicanos tradicionales', 'Puesto tradicional de antojitos mexicanos. Tacos, quesadillas, gorditas, sopes recién hechos. Salsas caseras picantes. Precios muy accesibles y sabor auténtico.', 'budget', NULL, ARRAY['Económico', 'Para llevar', 'Rápido'], ARRAY['Antojitos', 'Tacos', 'Económico', 'Callejero', 'Auténtico'], 4.6, 789),

('La Terraza del Centro', 'gastronomia', 'Restaurante', 20.5211, -99.8938, 'Portal Hidalgo 12', 'Restaurante con vista a la plaza', 'Restaurante ubicado en segundo piso con terraza panorámica a la plaza. Cocina mexicana e internacional, excelente para ver el atardecer. Bar completo.', 'moderate', '414-273-1234', ARRAY['Terraza', 'Bar', 'Vista panorámica', 'WiFi'], ARRAY['Terraza', 'Vista', 'Bar', 'Romántico', 'Atardecer'], 4.5, 445),

('Mariscos El Puerto', 'gastronomia', 'Mariscos', 20.5178, -99.8925, 'Ezequiel Montes 45', 'Mariscos frescos estilo Sinaloa', 'Restaurante especializado en mariscos estilo Sinaloa. Ceviche, aguachile, camarones al gusto, pescado zarandeado. Ingredientes frescos diarios.', 'moderate', '414-273-3456', ARRAY['Terraza', 'Cerveza', 'Para llevar'], ARRAY['Mariscos', 'Ceviche', 'Aguachile', 'Sinaloa', 'Pescado'], 4.4, 334),

('Pizzería Don Giovanni', 'gastronomia', 'Pizzería', 20.5245, -99.8960, 'Independencia 30', 'Pizzas artesanales al horno de leña', 'Pizzería familiar con horno de leña tradicional. Masa fermentada 24 horas, ingredientes frescos, recetas italianas auténticas. Ambiente casual.', 'budget', '414-273-5678', ARRAY['Horno de leña', 'Para llevar', 'Delivery', 'Familiar'], ARRAY['Pizzas', 'Italiana', 'Familiar', 'Horno de leña', 'Casual'], 4.5, 523);

-- VERIFICACIÓN FINAL
SELECT COUNT(*) as total_final FROM places;
SELECT category, COUNT(*) as cantidad FROM places GROUP BY category ORDER BY cantidad DESC;

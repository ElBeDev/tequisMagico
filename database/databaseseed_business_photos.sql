-- Reemplaza la foto genérica por categoría con la foto REAL del negocio (tomada de su propio
-- sitio oficial, no de Google Maps ni redes) para un puñado de lugares destacados.
-- Revisado a mano uno por uno — no se hizo para los 50 lugares. Ver database/IMAGE_CREDITS.md
-- para la fuente y justificación de cada una.
-- Nota: sólo se pudo hacer para 4 de los 6 lugares "is_featured"; Viñedos La Redonda (sitio en
-- mantenimiento) y La Estancia Tequisquiapan (sin sitio/redes localizables) se quedan con la
-- foto genérica por ahora.

UPDATE places SET
  thumbnail_url = 'https://salavive.mx/wp-content/uploads/2021/09/Botellas-de-vino-espumoso-en-cava-1024x683.jpg',
  image_urls = ARRAY['https://salavive.mx/wp-content/uploads/2021/09/Botellas-de-vino-espumoso-en-cava-1024x683.jpg'],
  website = 'https://salavive.mx'
WHERE name = 'Freixenet México';

UPDATE places SET
  thumbnail_url = 'https://puertadellobo.mx/wp-content/uploads/2023/06/puertadellobo-mirador-08.webp',
  image_urls = ARRAY['https://puertadellobo.mx/wp-content/uploads/2023/06/puertadellobo-mirador-08.webp'],
  website = 'https://puertadellobo.mx'
WHERE name = 'Viñedos Puerta del Lobo';

UPDATE places SET
  thumbnail_url = 'https://img.guruhotel.dev/insecure/rs:fill:800/g:sm/czM6Ly9ndXJ1aG90ZWxmaWxlcy9wcm9kdWN0aW9uLzY4MjBjNDZiLWNjNzQtNGUzYS1iNTYwLTllYTM3Y2ZkZWJkMC9pbWFnZS0xNzYwMDQyNjkxOTQ3LTg2Yzh6d25jYjJ2LmpwZw==.webp',
  image_urls = ARRAY['https://img.guruhotel.dev/insecure/rs:fill:800/g:sm/czM6Ly9ndXJ1aG90ZWxmaWxlcy9wcm9kdWN0aW9uLzY4MjBjNDZiLWNjNzQtNGUzYS1iNTYwLTllYTM3Y2ZkZWJkMC9pbWFnZS0xNzYwMDQyNjkxOTQ3LTg2Yzh6d25jYjJ2LmpwZw==.webp']
WHERE name = 'La Casa del Atrio';

UPDATE places SET
  thumbnail_url = 'https://vuelaenglobo.com/wp-content/uploads/2018/06/ale_3724.jpg',
  image_urls = ARRAY['https://vuelaenglobo.com/wp-content/uploads/2018/06/ale_3724.jpg', 'https://vuelaenglobo.com/wp-content/uploads/2018/06/ale_3736.jpg'],
  website = 'https://vuelaenglobo.com/tequisquiapan/'
WHERE name = 'Globos Aerostáticos Tequisquiapan';

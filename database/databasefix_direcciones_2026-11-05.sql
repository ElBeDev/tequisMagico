-- Correcciones de direcciones y pines, aplicadas el 2026-11-05 en la base del VPS.
-- Se corre después de databasefix_research_2026-11.sql. Solo toca lugares con fuente; los lugares
-- sin confirmar conservan su dirección porque no hay de dónde corregirla.
-- Los pines salen de OpenStreetMap (nombre del lugar en el mapa).
BEGIN;

-- K'puchinos: su web (kpuchinos.com.mx) dice "Independencia 7, Centro".
UPDATE places SET address = 'Independencia 7, Centro', latitude = 20.5229580, longitude = -99.8911750, updated_at = NOW()
WHERE id = 'ad124805-fa89-49fa-ab2c-2839d59ee840';

-- Vuela en Globo: su web (vuelaenglobo.com/tequisquiapan) publica este domicilio. Es su oficina;
-- los vuelos salen del globopuerto, con traslado desde el punto de reunión.
-- Pin APROXIMADO: OSM no tiene esa calle; va en la zona (Calle Hacienda Grande de la Asunción,
-- a 250 m de Plaza Pedregal). No confundir con "Paseo del Jazmín", que es otra calle.
UPDATE places SET address = 'Jazmín 35, Pedregal de Hacienda Grande, Tequisquiapan',
  latitude = 20.5267300,
  longitude = -99.8965350,
  updated_at = NOW()
WHERE id = 'b3aaa4ec-f45d-47ab-8b96-64c7c39e7633';

-- Parque La Pila: Ezequiel Montes 29 según tequis.travel (Históricos).
UPDATE places SET address = 'Ezequiel Montes 29, Centro', latitude = 20.5255980, longitude = -99.8913780, updated_at = NOW()
WHERE id = '2937462c-70fa-4aff-bf91-031146e071d0';

-- La Pila: la pila de 1567 se conserva dentro del parque (tequis.travel). OSM no la marca aparte,
-- así que lleva el pin del parque.
UPDATE places SET address = 'Dentro del Parque La Pila, Ezequiel Montes 29, Centro', latitude = 20.5255980, longitude = -99.8913780, updated_at = NOW()
WHERE id = '7ac9dd61-1eb9-44f7-aad7-5ed3faa19d12';

-- Presa Centenario: el pin caía 4 km al norte; la presa está al suroeste del centro.
UPDATE places SET address = 'Al suroeste del centro de Tequisquiapan', latitude = 20.5006900, longitude = -99.9046040, updated_at = NOW()
WHERE id = 'c147e79e-74a9-4cdf-995f-0960e8d53ef4';

-- Solo el pin: la dirección estaba bien.
UPDATE places SET latitude = 20.5231350, longitude = -99.8915870, updated_at = NOW()
WHERE id = '81c5c200-1fcb-4943-a4df-8cb6395f3e50'; -- Templo de Santa María de la Asunción
UPDATE places SET latitude = 20.5225310, longitude = -99.8916400, updated_at = NOW()
WHERE id = '955ec3b9-eb9e-42e9-a851-5791adf67eaa'; -- Plaza Miguel Hidalgo (junto al quiosco)
UPDATE places SET latitude = 20.6374070, longitude = -99.9037960, updated_at = NOW()
WHERE id = 'e83905fa-1335-4bc7-b117-a917d5246a53'; -- Viñedos La Redonda (viñedo "La Redonda" en OSM)

COMMIT;

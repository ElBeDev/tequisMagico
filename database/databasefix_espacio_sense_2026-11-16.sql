-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-sense.sql.
-- Espacio Sense Spa – La Casona: revisión con la web del hotel (16 nov 2026).
-- Fuentes: lacasonatequisquiapan.mx/es/espacio-sense y /es/spa (la página del spa se llama "Conoce Agave Spa, abierto a
--   todo público": no es solo para huéspedes). Teléfonos (414) 273 5635 y WhatsApp 414 226 2178, los de la base.
-- Spa: sala de espera, cabina individual y doble, sauna, temazcal, jacuzzi, regaderas y jardín. "Más de 20 tratamientos"
--   (página del spa; la de Espacio Sense dice "más de 30"): masajes, faciales y rituales con productos de agave y
--   "culturas mesoamericanas", con el temazcal tradicional al final. La lista de precios publicada es de 2018-19
--   (masajes de agave con obsidianas, exfoliación corporal de agave, sesiones de sauna, vapor artesanal y jacuzzi,
--   rituales): se usan los tipos, no los precios. Horario: "consulta disponibilidad de horarios".
-- Fotos de su web (galería de Espacio Sense): se agregan el temazcal (gal-sense-slider/image-10.jpg) y el sauna
--   (image-05.jpg), reducidas a 1600 px. Se quedan la cabina doble (image-04) y el jacuzzi del jardín (image-01).
-- content_verified: teléfono, dirección y servicios de la web propia del hotel.
BEGIN;
UPDATE places SET
  short_description = $v$Spa abierto al público, con temazcal, sauna y jacuzzi$v$,
  full_description = $v$Spa de La Casona Tequisquiapan Hotel & Spa, en su área Espacio Sense, abierto también a quien no se hospeda en el hotel. Tiene cabina de tratamiento individual y de pareja, sauna, temazcal tradicional, jacuzzi, regaderas y un jardín para descansar. Su menú tiene más de 20 tratamientos, individuales o en pareja: masajes, faciales y rituales hechos con productos de agave, como masajes con obsidianas, exfoliación corporal y sesiones de vapor artesanal, y suelen terminar en el temazcal. No publica horario ni precios vigentes: pregunta disponibilidad al reservar por teléfono o WhatsApp.$v$,
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/espacio-sense-cabina.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/espacio-sense-temazcal.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/espacio-sense-sauna.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/espacio-sense-jardin.jpg$v$]::text[],
  content_verified = true,
  updated_at = NOW()
WHERE id = '1121c798-c22b-58db-94ab-e0e8313661bd'; -- Espacio Sense Spa – La Casona
COMMIT;

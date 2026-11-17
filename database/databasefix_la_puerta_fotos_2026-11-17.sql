-- APLICADA el 2026-11-17 en la base del VPS, con respaldo previo en /root/respaldos/places-20261117-lapuerta.sql.
-- La Puerta: fotos de TripAdvisor (17 nov 2026), por decisión expresa del usuario: el restaurante no tiene web ni
--   redes propias (búsqueda por nombre y teléfono en Facebook y en la web), así que no hay foto oficial posible.
-- Excepción a la regla de fotos (CLAUDE.md): son fotos de clientes, no del negocio; crédito a quien las subió en
--   docs/datos/creditos-imagenes.md. Perfil: tripadvisor.com.mx, "La Puerta", Calle Juárez Poniente 5 (la dirección de la
--   base), no reclamado por el negocio.
-- Fotos: huevos en salsa verde (Mariana Espinosa De Los M, may 2018), fachada con el letrero "La Puerta, Restaurante
--   cafetería" (mavilesdelrio, ago 2013) y sándwich con papas y fruta (Any19, mar 2017).
-- Los datos no cambian y sigue con content_verified = false: no hay fuente oficial que los confirme.
BEGIN;
UPDATE places SET
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/la-puerta-huevos.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/la-puerta-fachada.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/la-puerta-sandwich.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/la-puerta-huevos.jpg$v$,
  updated_at = NOW()
WHERE id = '8cb4cb03-a520-519a-a8ca-ce88ef17f3a5'; -- La Puerta
COMMIT;

-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-vye.sql.
-- Viajes y Enoturismo: revisión con su web (16 nov 2026).
-- Web: viajesyenoturismo.com.mx (Jimdo). "Agencia creadora de la Ruta del queso y vino del Estado de Querétaro en el
--   año 2007". Tours diarios desde 2 personas, con salida de su oficina en Juárez 16 Poniente. /descripción-tours sigue
--   con "Precios válidos de enero a diciembre 2025" (ya lo decía la ficha). /reservar/reservar-un-tour: además de los de
--   queso y vino, tour con visita a Bernal (5 h), con paseo en tranvía por los viñedos (Uvabus), con comida maridaje en
--   La Quercia, y a las minas de ópalo (4.5 h, Mina El Redentor en La Trinidad).
-- Tienda de productos gourmet y artesanales en Andador Juárez 5, esquina con Guillermo Prieto, de 9 a 19 h. Hotel
--   propio: Bello Atardecer, a una cuadra de la plaza (10 % de descuento en el tour si te hospedas).
-- Correo (protegido por Cloudflare en la web): reservaciones@viajesyenoturismo.com.mx; tiene MX (Jimdo).
-- Fotos: tres de su página del tour a las minas de ópalo (Mina El Redentor, la mina y el 4x4 en el camino; 2018). Las
--   de los tours de queso y vino son carteles con fotos de banco. Antes usaba la genérica "Cata de quesos y vino".
BEGIN;
UPDATE places SET
  email = 'reservaciones@viajesyenoturismo.com.mx',
  full_description = $v$Agencia del centro de Tequis que se presenta como la creadora de la Ruta del Queso y Vino de Querétaro, en 2007. Organiza tours por la Ruta del Arte, Queso y Vino con transporte de ida y vuelta desde su oficina en Juárez 16 Poniente; salen todos los días a partir de 2 personas y, según el tour, visitan lugares como Cava Bocanegra, Bodegas De Cote, Freixenet, Viñedos Azteca y la quesería La Biquette, o suman Bernal o un paseo en tranvía por los viñedos. También lleva a la Mina El Redentor, en La Trinidad, a buscar ópalos (4.5 horas). En noviembre de 2026 su web seguía mostrando los precios de 2025: de $1,300 a $1,980 por adulto. Se reserva por WhatsApp con un anticipo del 30 %. Tiene una tienda de productos gourmet en Andador Juárez 5 (de 9 a 19 h) y un hotel de una habitación a una cuadra de la plaza.$v$,
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/viajes-y-enoturismo-mina-redentor.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/viajes-y-enoturismo-mina.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/viajes-y-enoturismo-4x4.jpg$v$]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/viajes-y-enoturismo-mina-redentor.jpg$v$,
  updated_at = NOW()
WHERE id = 'fe390085-9e2e-5ebc-a209-2738cc83206e'; -- Viajes y Enoturismo
COMMIT;

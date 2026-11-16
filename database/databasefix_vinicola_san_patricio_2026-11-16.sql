-- APLICADA el 2026-11-16 en la base del VPS, con respaldo previo en /root/respaldos/places-20261116-sanpatricio.sql.
-- Vinícola San Patricio con su web, su Facebook y fotos propias (16 nov 2026).
-- La ficha decía "su web no responde": hoy vinicolasp.com.mx (WordPress) sí carga. Es suya: teléfono 414-273-0038, el
-- mismo de queretaro.travel y del alta; enlaza a facebook.com/vinicolasanpatricio e instagram.com/vinicolasanpatricio.
-- Fuentes:
--   Web, ¿Quién somos?: empezó el 15 sep 1999 en Ezequiel Montes (familia Rodríguez); en 2001 "la primera vinícola en
--     Tequisquiapan"; recorridos guiados desde 2014; etiqueta "Santiago Apóstol"; "visitas al viñedo académico".
--   Web, Enoturismo: recorrido clásico $299 (cata de vinos más jerez y licor de damiana), con maridaje de quesos de la
--     región $399, cata a ciegas $599 (recomendable sin niños); niños $90 (jugo de uva, copa de plástico, libreta y
--     colores); recorridos cada hora de 11:00 a 16:00; reservar con 3 días de anticipación.
--   Web, inicio: experiencias $299/$399/$599; productos "vino, jerez, licor, frizante"; dirección "Carretera
--     Galeras-Huichapan, Guadalupe Victoria 47, Tierra Blanca, Magdalena"; teléfonos 414-232-2340 y 414-273-0038.
--   Facebook (publicación fijada del 24 nov 2025, "horarios oficiales"; página activa, última publicación 13 nov 2026):
--     recorridos de lunes a domingo, salidas cada hora de 11:00 a 4:30 p. m.; venta de vinos de lunes a domingo de
--     11:00 a 18:00; abre puentes y festivos. Ese horario (tienda) va a schedule_json.
-- Fotos de su web: barricas, fachada con el mural de Santiago Apóstol, viñedo con pérgola y botellas frente a las
--   barricas. Se descartaron las de grupos y personas, los diseños gráficos y los logotipos. Créditos en
--   docs/datos/creditos-imagenes.md. Antes de aplicar: copiar las 4 a /srv/tequis/uploads/lugares/.
-- content_verified = true: web propia con el mismo teléfono que queretaro.travel.
BEGIN;
UPDATE places SET
  short_description = $v$La primera vinícola de Tequis, con recorridos cada hora$v$,
  full_description = $v$Vinícola de la familia Rodríguez, que empezó en 1999 en Ezequiel Montes y desde 2001 es la primera de Tequisquiapan. Hace los vinos Santiago Apóstol (blanco, rosado y tintos secos y semidulces), además de jerez, licor de damiana y frizantes. Sus recorridos guiados por el viñedo y la bodega salen cada hora, de 11:00 a 16:30, todos los días. En noviembre de 2026 su web daba tres opciones: el clásico con cata ($299), con maridaje de quesos de la región ($399) y la cata a ciegas ($599, mejor sin niños). Los niños pagan $90 y reciben jugo de uva, libreta y colores. Pide reservar con tres días de anticipación. La tienda abre de 11 a 18 h todos los días, también en puentes y festivos. Teléfonos 414 273 0038 y 414 232 2340.$v$,
  address = $v$Carretera a Huichapan 47, Tierra Blanca, La Magdalena$v$,
  website = $v$https://www.vinicolasp.com.mx$v$,
  price_range = 'moderate',
  schedule_json = $j${"lunes": "11:00–18:00", "martes": "11:00–18:00", "miércoles": "11:00–18:00", "jueves": "11:00–18:00", "viernes": "11:00–18:00", "sábado": "11:00–18:00", "domingo": "11:00–18:00"}$j$::jsonb,
  amenities = ARRAY[$v$Tienda$v$, $v$Reservaciones$v$]::text[],
  tags = ARRAY[$v$Vino$v$, $v$Familiar$v$]::text[],
  image_urls = ARRAY[
    $v$https://panel.tequismagico.com/uploads/lugares/vinicola-san-patricio-barricas.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/vinicola-san-patricio-fachada.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/vinicola-san-patricio-vinedo.jpg$v$,
    $v$https://panel.tequismagico.com/uploads/lugares/vinicola-san-patricio-botellas.jpg$v$
  ]::text[],
  thumbnail_url = $v$https://panel.tequismagico.com/uploads/lugares/vinicola-san-patricio-barricas.jpg$v$,
  content_verified = true,
  updated_at = NOW()
WHERE id = '690c1a76-1e6e-5124-88f4-902488c9195c'; -- Vinícola San Patricio
COMMIT;

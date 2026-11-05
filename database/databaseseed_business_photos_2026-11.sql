-- Fotos reales tomadas a mano de la web oficial de cada negocio (2026-11-05). YA APLICADO.
-- Archivos en el servidor: /srv/tequis/uploads/lugares/. Origen de cada foto: docs/datos/creditos-imagenes.md.
-- Sin permiso escrito todavía. Si un negocio pide quitarlas, borra su archivo y regresa la foto anterior.
BEGIN;
-- K'puchinos Restaurant
UPDATE places SET image_urls = ARRAY['https://panel.tequismagico.com/uploads/lugares/kpuchinos-salon.jpg', 'https://panel.tequismagico.com/uploads/lugares/kpuchinos-entrada.jpg', 'https://panel.tequismagico.com/uploads/lugares/kpuchinos-terraza-la-luna.jpg', 'https://panel.tequismagico.com/uploads/lugares/kpuchinos-bar.jpg', 'https://panel.tequismagico.com/uploads/lugares/kpuchinos-platillos.jpg', 'https://panel.tequismagico.com/uploads/lugares/kpuchinos-escamoles.jpg'], thumbnail_url = 'https://panel.tequismagico.com/uploads/lugares/kpuchinos-salon.jpg', updated_at = NOW() WHERE id = 'ad124805-fa89-49fa-ab2c-2839d59ee840';
-- Viñedos Azteca
UPDATE places SET image_urls = ARRAY['https://panel.tequismagico.com/uploads/lugares/vinedos-azteca-fuente.jpg', 'https://panel.tequismagico.com/uploads/lugares/vinedos-azteca-lago.jpg'], thumbnail_url = 'https://panel.tequismagico.com/uploads/lugares/vinedos-azteca-fuente.jpg', updated_at = NOW() WHERE id = '3f47bf08-7a3d-4a3e-9aba-dc30785a0570';
-- Freixenet México
UPDATE places SET image_urls = ARRAY['https://panel.tequismagico.com/uploads/lugares/sala-vive-vinedo.jpg', 'https://panel.tequismagico.com/uploads/lugares/sala-vive-edificio.jpg', 'https://panel.tequismagico.com/uploads/lugares/sala-vive-cava.jpg', 'https://panel.tequismagico.com/uploads/lugares/sala-vive-cabalgata.jpg'], thumbnail_url = 'https://panel.tequismagico.com/uploads/lugares/sala-vive-vinedo.jpg', updated_at = NOW() WHERE id = 'db284afc-c328-4fca-9bec-2bbc453c222f';
-- Globos Aerostáticos Tequisquiapan
UPDATE places SET image_urls = ARRAY['https://panel.tequismagico.com/uploads/lugares/globos-tequis-hacienda.jpg', 'https://panel.tequismagico.com/uploads/lugares/globos-tequis-despegue.jpg', 'https://panel.tequismagico.com/uploads/lugares/globos-tequis-vinedo.jpg', 'https://panel.tequismagico.com/uploads/lugares/globos-tequis-valle.jpg', 'https://panel.tequismagico.com/uploads/lugares/globos-tequis-parroquia.jpg'], thumbnail_url = 'https://panel.tequismagico.com/uploads/lugares/globos-tequis-hacienda.jpg', updated_at = NOW() WHERE id = 'b3aaa4ec-f45d-47ab-8b96-64c7c39e7633';
COMMIT;

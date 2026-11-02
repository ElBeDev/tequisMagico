import { createHash } from 'node:crypto';

// Fotos editoriales del sitio (portada, secciones de historia y guía), todas de Wikimedia
// Commons con licencia que permite uso con atribución. Cada una aparece en /creditos.
// Si agregas una aquí, agrega su autor y licencia exactos tal como vienen en su página.

export type Photo = {
  src: string;
  page: string;
  title: string;
  author: string;
  license: 'CC BY-SA 4.0' | 'CC BY-SA 3.0' | 'CC BY-SA 2.0' | 'CC BY 3.0' | 'CC BY 2.0';
};

/**
 * Wikimedia guarda cada archivo en /<md5[0]>/<md5[0..1]>/ de su nombre; con `width` pide la
 * miniatura de ese ancho (más ligera que el original, que a veces pesa varios MB).
 */
function commons(file: string, title: string, author: string, license: Photo['license'], width = 1920): Photo {
  const name = file.replace(/ /g, '_');
  const md5 = createHash('md5').update(name).digest('hex');
  const dir = `${md5[0]}/${md5.slice(0, 2)}`;
  const enc = encodeURIComponent(name);
  return {
    src: `https://upload.wikimedia.org/wikipedia/commons/thumb/${dir}/${enc}/${width}px-${enc}`,
    page: `https://commons.wikimedia.org/wiki/File:${enc}`,
    title,
    author,
    license,
  };
}

// Las 8 fotos genéricas por categoría que ya usa la base (ver docs/datos/creditos-imagenes.md),
// más las fotos editoriales de Tequis.
export const PHOTOS = {
  plaza: commons('Plaza_principal_en_Tequisquiapan.jpg', 'Plaza principal en Tequisquiapan', 'A01651034 MaferGonzález', 'CC BY-SA 4.0'),
  iglesia: commons('Iglesia_Tequisquiapan.jpg', 'Iglesia Tequisquiapan', 'A01197141 Zuriel', 'CC BY-SA 4.0'),
  portales: commons('Portales_de_Tequisquiapan.jpg', 'Portales de Tequisquiapan', 'A01703787 Edith', 'CC BY-SA 4.0'),
  globos: commons('Globos_Querétaro.jpg', 'Globos Querétaro', 'Melissaromeroor', 'CC BY-SA 4.0'),
  cata: commons('Cata_de_quesos_y_vino.jpg', 'Cata de quesos y vino', 'Axel Ricardo Ramos Muñoz', 'CC BY-SA 4.0'),
  alberca: commons('Tequis_Hotel_Pool_(4)_-_Flickr_-_Carl_Campbell.jpg', 'Tequis Hotel Pool', 'Carl Campbell', 'CC BY 2.0'),
  gastronomia: commons('Gastronomía_mexicana.jpg', 'Gastronomía mexicana', 'Enrique Damián', 'CC BY-SA 4.0'),
  artesanias: commons('Artesanías_en_Tequisquiapan.jpg', 'Artesanías en Tequisquiapan', 'WikiMZC', 'CC BY-SA 4.0'),

  // Fotos de Tequis específicamente, revisadas una por una (autor y licencia contra la API de Commons, nov 2026).
  parroquiaAtardecer: commons('Tequis.jpg', 'Parroquia de Tequisquiapan al atardecer', 'Jjos2018', 'CC BY-SA 4.0'),
  parroquiaNoche: commons('TequisNoche.jpg', 'Parroquia de Tequisquiapan de noche', 'Jjos2018', 'CC BY-SA 4.0'),
  parroquiaTarde: commons('Una_tarde_en_la_Parroquia.JPG', 'Una tarde en la Parroquia', 'Christian Espino Cruz', 'CC BY-SA 4.0'),
  plazaLetras: commons('Tequis_Plaza_I_(31540630618).jpg', 'Tequis Plaza I', 'Carl Campbell', 'CC BY-SA 2.0'),
  temploMagdalena: commons('TemploSantaMaríaTequis.jpg', 'Templo de Santa María, Tequisquiapan', 'Thelmadatter', 'CC BY-SA 3.0'),
  quiosco: commons('PlazaKioskTequis.jpg', 'Plaza y quiosco de Tequisquiapan', 'AlejandroLinaresGarcia', 'CC BY-SA 3.0'),
  portalesPlaza: commons('PortalesTequis.jpg', 'Portales de la plaza de Tequisquiapan', 'AlejandroLinaresGarcia', 'CC BY-SA 3.0'),
  calleNinosHeroes: commons('Calle_Niños_Héroes,_Tequisquiapan.jpg', 'Calle Niños Héroes, Tequisquiapan', 'Diego Zamorano Pulido', 'CC BY-SA 4.0'),
  callejonPiojo: commons('Callejón_del_Piojo.jpg', 'Callejón del Piojo', 'Emanuel De Lucio', 'CC BY-SA 4.0'),
  globoValle: commons('Tequisquiapan,_Querétaro_(24461457671).jpg', 'Globo aerostático en Tequisquiapan', 'Comisión Mexicana de Filmaciones', 'CC BY-SA 2.0'),
  mercadoTequesquicalli: commons('Tequis009.jpg', 'Mercado de Artesanías Tequesquicalli', 'Thelmadatter', 'CC BY-SA 4.0'),
  pendulo: commons('Péndulo_de_Tequisquiapan.jpg', 'Péndulo del Centro Geográfico', 'Abril7j99', 'CC BY-SA 4.0', 1280),
  feriaQuesoVino: commons('FeriaQuesoVino01.jpg', 'Feria del Queso y el Vino', 'AlejandroLinaresGarcia', 'CC BY-SA 3.0'),
  vinedosDeCote: commons('De_Cote_-_Casa_Vitivinícola_-_Olivos_y_Viñedos.jpg', 'De Cote, Casa Vitivinícola: olivos y viñedos', 'Ruydiez', 'CC BY-SA 4.0'),
  penaBernal: commons('Peña_de_Bernal_(Querétaro).jpg', 'Peña de Bernal (Querétaro)', 'Juan Carlos Fonseca Mata', 'CC BY-SA 4.0'),
  penaBernalNoche: commons('Peña_de_Bernal,_Querétaro_(33184543251).jpg', 'Peña de Bernal de noche', 'Comisión Mexicana de Filmaciones', 'CC BY-SA 2.0'),

  // Pueblos cercanos (sección "Cerca de Tequis" de la portada), revisadas contra la API de Commons, nov 2026.
  cadereytaPlaza: commons('Plaza_Principal_de_Cadereyta_de_Montes,_Querétaro_(24172888469).jpg', 'Plaza principal de Cadereyta de Montes', 'Comisión Mexicana de Filmaciones', 'CC BY-SA 2.0', 960),
  ezequielMontesParroquia: commons('Parroquia_de_San_Sebastian_Martir,_Ezequiel_Montes,_Querétaro-_San_Sebastián_parish_(24457610941).jpg', 'Parroquia de San Sebastián Mártir, Ezequiel Montes', 'Comisión Mexicana de Filmaciones', 'CC BY-SA 2.0', 960),
  sanJuanDelRio: commons('Templo_de_San_Juan_de_Dios_SJR.JPG', 'Templo de San Juan de Dios, San Juan del Río', 'G2357', 'CC BY-SA 4.0', 960),
  acueductoQueretaro: commons('Acueducto_de_Querétaro_-_Santiago_de_Querétaro,_México.jpg', 'Acueducto de Querétaro', 'Juan Carlos Fonseca Mata', 'CC BY-SA 4.0', 960),
} satisfies Record<string, Photo>;

export const LICENSE_URLS: Record<Photo['license'], string> = {
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/deed.es',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/deed.es',
  'CC BY-SA 2.0': 'https://creativecommons.org/licenses/by-sa/2.0/deed.es',
  'CC BY 3.0': 'https://creativecommons.org/licenses/by/3.0/deed.es',
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/deed.es',
};

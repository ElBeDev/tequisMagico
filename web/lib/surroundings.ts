import { PHOTOS } from './photos';

// Pueblos y ciudades a menos de una hora de Tequis (sección "Cerca de Tequis" de la portada).
// Distancias aproximadas por carretera desde la plaza; coordenadas del centro de cada lugar.
// `via` es el lugar por el que pasa la carretera desde Tequis, para dibujar el esquema, y
// `label` de qué lado del punto va el nombre para que no se encimen.

export type Nearby = {
  key: string;
  name: string;
  km: number;
  lat: number;
  lng: number;
  via?: string;
  label: 'left' | 'right' | 'top';
  text: string;
  image: string;
  href?: string;
};

export const TEQUIS = { lat: 20.5218, lng: -99.8917 };

export const NEARBY: Nearby[] = [
  {
    key: 'bernal',
    name: 'Peña de Bernal',
    label: 'left',
    km: 35,
    lat: 20.7408,
    lng: -99.9406,
    via: 'ezequiel',
    text: 'El monolito de unos 350 metros sobre un Pueblo Mágico de calles empedradas. Sus tradiciones otomí-chichimecas son Patrimonio Inmaterial de la UNESCO.',
    image: PHOTOS.penaBernal.src,
    href: '/por-que-tequis#alrededores',
  },
  {
    key: 'ezequiel',
    name: 'Ezequiel Montes',
    label: 'left',
    km: 18,
    lat: 20.665,
    lng: -99.899,
    text: 'Viñedos y casas vitivinícolas a los lados de la carretera a Bernal: el corazón de la Ruta Arte, Queso y Vino.',
    image: PHOTOS.ezequielMontesParroquia.src,
  },
  {
    key: 'cadereyta',
    name: 'Cadereyta de Montes',
    label: 'right',
    km: 32,
    lat: 20.6953,
    lng: -99.8167,
    via: 'ezequiel',
    text: 'Pueblo Mágico con plaza de portales y la Quinta Schmoll, un jardín botánico dedicado a las cactáceas.',
    image: PHOTOS.cadereytaPlaza.src,
  },
  {
    key: 'sjr',
    name: 'San Juan del Río',
    label: 'left',
    km: 20,
    lat: 20.3886,
    lng: -99.9962,
    text: 'Ciudad virreinal sobre el Camino Real de Tierra Adentro, con templos, portales y el Puente de la Historia.',
    image: PHOTOS.sanJuanDelRio.src,
  },
  {
    key: 'queretaro',
    name: 'Santiago de Querétaro',
    label: 'top',
    km: 60,
    lat: 20.5888,
    lng: -100.3899,
    via: 'sjr',
    text: 'La capital del estado: su centro histórico, con el acueducto de 74 arcos, es Patrimonio Mundial de la UNESCO.',
    image: PHOTOS.acueductoQueretaro.src,
  },
];

// Menú principal: misma lógica de tres bloques que la referencia (por qué venir, organizar
// el viaje, guía práctica), con el contenido de Tequis.
export const NAV = [
  {
    label: '¿Por qué Tequis?',
    big: 'Descubre',
    links: [
      { href: '/por-que-tequis', label: 'Un Pueblo Mágico' },
      { href: '/por-que-tequis#historia', label: 'Historia' },
      { href: '/por-que-tequis#tradiciones', label: 'Cestería y tradiciones' },
      { href: '/por-que-tequis#sabores', label: 'Queso y vino' },
      { href: '/rutas', label: 'Rutas temáticas' },
    ],
  },
  {
    label: 'Planea tu visita',
    big: 'Planea',
    links: [
      { href: '/lugares', label: 'Qué hacer en Tequis' },
      { href: '/lugares/experiencias', label: 'Experiencias' },
      { href: '/lugares/gastronomia', label: 'Dónde comer' },
      { href: '/lugares/hospedaje', label: 'Dónde dormir' },
      { href: '/lugares/compras', label: 'Compras y artesanías' },
      { href: '/eventos', label: 'Eventos y fiestas' },
      { href: '/mapa', label: 'Mapa' },
    ],
  },
  {
    label: 'Guía práctica',
    big: 'Práctico',
    links: [
      { href: '/guia-practica#como-llegar', label: 'Cómo llegar' },
      { href: '/guia-practica#cuando-ir', label: 'Cuándo visitar' },
      { href: '/guia-practica#info-util', label: 'Información útil' },
      { href: '/app', label: 'La app' },
    ],
  },
] as const;

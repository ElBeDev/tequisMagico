import type { MetadataRoute } from 'next';

// Para instalar el sitio en el celular. Los íconos salen de docs/marca/gen_logo.py.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tequisquiapan Mágico',
    short_name: 'Tequis Mágico',
    description: 'Guía de Tequisquiapan, Pueblo Mágico de Querétaro.',
    start_url: '/',
    lang: 'es-MX',
    display: 'standalone',
    background_color: '#eeedea',
    theme_color: '#1f2a1a',
    icons: [
      { src: '/logo/icono-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/logo/icono-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/logo/icono-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}

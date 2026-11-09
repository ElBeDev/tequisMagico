import path from "node:path";
import type { NextConfig } from "next";
import { OPTIMIZED_HOSTS } from "./lib/images";

const nextConfig: NextConfig = {
  // El repo tiene varias apps con su propio package-lock.json (web/, web-admin/): sin esto
  // Turbopack toma la raíz del repo como raíz del proyecto.
  turbopack: { root: path.resolve(__dirname) },
  // app/[lang] es el layout raíz (español e inglés): la 404 global se arma aparte.
  experimental: { globalNotFound: true },
  // Las fotos se usan como <img> normales con los atributos de lib/images.ts: las de OPTIMIZED_HOSTS
  // y la copia de Commons (en panel.tequismagico.com/uploads/commons) pasan por el optimizador.
  async headers() {
    // El logo va en todas las páginas: un día de caché evita pedirlo en cada visita.
    return [{ source: '/logo/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=86400' }] }];
  },
  images: {
    remotePatterns: OPTIMIZED_HOSTS.map((hostname) => ({ protocol: 'https' as const, hostname })),
    // 30 días (Next usaría 4 h si el origen no manda Cache-Control, como Caddy en /uploads): las
    // fotos del panel tienen nombre aleatorio y la copia de Commons no cambia, así que nunca
    // cambian en la misma URL. Cada foto se procesa una vez y luego sale de .next/cache/images.
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;

import path from "node:path";
import type { NextConfig } from "next";
import { COMMONS_PREFIX, OPTIMIZED_HOSTS } from "./lib/images";

const nextConfig: NextConfig = {
  // El repo tiene varias apps con su propio package-lock.json (web/, web-admin/): sin esto
  // Turbopack toma la raíz del repo como raíz del proyecto.
  turbopack: { root: path.resolve(__dirname) },
  // app/[lang] es el layout raíz (español e inglés): la 404 global se arma aparte.
  experimental: { globalNotFound: true },
  // Las fotos se usan como <img> normales con los atributos de lib/images.ts: las de Commons y las
  // de OPTIMIZED_HOSTS pasan por el optimizador de Next (WebP, al ancho del srcset).
  async headers() {
    // El logo va en todas las páginas: un día de caché evita pedirlo en cada visita.
    return [{ source: '/logo/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=86400' }] }];
  },
  images: {
    remotePatterns: [
      ...OPTIMIZED_HOSTS.map((hostname) => ({ protocol: 'https' as const, hostname })),
      { protocol: 'https' as const, hostname: new URL(COMMONS_PREFIX).hostname, pathname: `${new URL(COMMONS_PREFIX).pathname}**` },
    ],
    // 30 días: Commons manda sus fotos sin Cache-Control (Next usaría 4 h) y las del panel tienen
    // nombre aleatorio, así que nunca cambian en la misma URL. Una foto se procesa una vez y luego
    // sale de .next/cache/images.
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;

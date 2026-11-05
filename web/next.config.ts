import path from "node:path";
import type { NextConfig } from "next";
import { OPTIMIZED_HOSTS } from "./lib/images";

const nextConfig: NextConfig = {
  // El repo tiene varias apps con su propio package-lock.json (web/, web-admin/): sin esto
  // Turbopack toma la raíz del repo como raíz del proyecto.
  turbopack: { root: path.resolve(__dirname) },
  // app/[lang] es el layout raíz (español e inglés): la 404 global se arma aparte.
  experimental: { globalNotFound: true },
  // Las fotos son hotlink (igual que en la app) y se usan como <img> normales con los atributos
  // de lib/images.ts: las de Commons usan los tamaños de Wikimedia y solo las de OPTIMIZED_HOSTS
  // pasan por el optimizador de Next.
  images: {
    remotePatterns: OPTIMIZED_HOSTS.map((hostname) => ({ protocol: 'https' as const, hostname })),
  },
};

export default nextConfig;

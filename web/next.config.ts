import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El repo tiene varias apps con su propio package-lock.json (web/, web-admin/): sin esto
  // Turbopack toma la raíz del repo como raíz del proyecto.
  turbopack: { root: path.resolve(__dirname) },
  // Las fotos son hotlink a Wikimedia Commons y a los sitios de los negocios (igual que en la
  // app), así que se usan como <img> normales y no pasan por el optimizador de imágenes.
  images: { unoptimized: true },
};

export default nextConfig;

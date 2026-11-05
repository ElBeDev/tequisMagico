import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // proxy.ts lee /api/upload: su límite de cuerpo (10 MB por defecto) truncaría una foto de 10 MB
  // más el sobre del multipart.
  experimental: { proxyClientMaxBodySize: '11mb' },
};

export default nextConfig;

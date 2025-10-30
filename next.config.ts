/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel maneja automáticamente el optimizado de imágenes
  images: {
    domains: [], // Agrega dominios externos si usas imágenes de otros sitios
  },
  // Habilitar todas las características de Next.js
  experimental: {
    appDir: true,
  },
  // Opcional: Configurar headers para mejor cache
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
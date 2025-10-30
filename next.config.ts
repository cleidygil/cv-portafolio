/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/tu-repositorio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/tu-repositorio/" : "",
  images: {
    unoptimized: true, // IMPORTANTE para GitHub Pages
  },
  // Deshabilitar características que no funcionan en static export
  experimental: {
    appDir: true,
  },

  // Optimizaciones para performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remover consoles en producción
  },
  // Para variables de entorno
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

module.exports = nextConfig;

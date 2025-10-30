/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
     unoptimized: true, // IMPORTANTE para GitHub Pages
    domains: ['images.unsplash.com', 'via.placeholder.com'], // Dominios para next/image
    formats: ['image/webp', 'image/avif'], // Formatos modernos
  },
  // Optimizaciones para performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remover consoles en producción
  },
  // Para variables de entorno
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  }
}

module.exports = nextConfig
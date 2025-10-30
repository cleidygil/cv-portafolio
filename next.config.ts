/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // domains: ['images.unsplash.com', 'via.placeholder.com'], // Dominios para next/image
    // formats: ['image/webp', 'image/avif'], // Formatos modernos
       unoptimized: true // IMPORTANTE para GitHub Pages
  },
  // Optimizaciones para performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remover consoles en producción
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig
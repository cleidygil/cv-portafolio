/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ← Esto es CRUCIAL para GitHub Pages
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/cv-portafolio' : '', // Reemplaza con tu repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cv-portafolio/' : '', // Reemplaza con tu repo name
  images: {
    unoptimized: true, // ← Necesario para static export
  },
  // Deshabilitar características que no funcionan con static export
  // experimental: {
  //   appDir: true,
  // },
   experimental: {
    useDeploymentId: true,
    // Optionally, use with Server Actions
    useDeploymentIdServerActions: true,
  },
}

module.exports = nextConfig
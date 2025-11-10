import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // ← Esto es CRUCIAL para GitHub Pages
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/cv-portafolio' : '', // Reemplaza con tu repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cv-portafolio/' : '', // Reemplaza con tu repo name
  images: {
    unoptimized: true, // ← Necesario para static export
  },
  // Deshabilitar características que no funcionan con static export
  // Si no necesitas las flags experimentales, puedes eliminarlas.
  experimental: ({
    useDeploymentId: true,
    // Optionally, use with Server Actions
    useDeploymentIdServerActions: true,
  } as unknown as Record<string, unknown>),
}

export default nextConfig
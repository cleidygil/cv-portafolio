import { NextConfig } from "next"

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = process.env.NEXT_PUBLIC_BASE_PATH // ⚠️ CAMBIA POR EL NOMBRE REAL DE TU REPOSITORIO

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true
  },
  experimental: { appDir: true } as any,
}

export default nextConfig
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'https://github.com/cleidygil/cv-portafolio'; // ⚠️ CAMBIA POR EL NOMBRE REAL

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true,
  }
};

module.exports = nextConfig;
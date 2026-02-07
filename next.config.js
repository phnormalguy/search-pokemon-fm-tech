/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.pokemondb.net', 'raw.githubusercontent.com'],
  },
}

module.exports = nextConfig

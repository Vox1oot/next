/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'mebel-urala.ru'],
      },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/couches',
            permanent: true,
          },
        ]
      },
}
  
module.exports = nextConfig

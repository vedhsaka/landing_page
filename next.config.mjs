/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Add this section:
    async rewrites() {
      return [
        {
          source: '/robots.txt',
          destination: '/api/robots'
        },
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap'
        }
      ]
    }
  }
  
export default nextConfig
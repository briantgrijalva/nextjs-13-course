/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: '**.example.com',
        hostname: '**.dicebear.com'
        // port: '',
        // pathname: '/6.x/pixel-art/**'
      }
    ]
  }
}

module.exports = nextConfig

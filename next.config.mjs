/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'links.papareact.com',
      'links.papareact.com',
    ],
  },
}
export default nextConfig

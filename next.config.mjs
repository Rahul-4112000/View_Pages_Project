/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'view.com.au',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'd126h31mg8tzcs.cloudfront.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.justvehicle.solutions',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/mobile',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

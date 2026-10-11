/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mdmgreece.gr',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

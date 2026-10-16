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
  async rewrites() {
    return [
      {
        source: '/dr-neha-arora-verma',
        destination: '/directors/dr-neha-arora-verma',
      },
      {
        source: '/dr-neha-verma',
        destination: '/directors/dr-neha-arora-verma',
      },
      {
        source: '/dr-ss-verma',
        destination: '/directors/dr-s-s-verma',
      },
      {
        source: '/coach-richha-arrora',
        destination: '/directors/coach-richha-arrora',
      },
      {
        source: '/coach-richa-arora',
        destination: '/directors/coach-richha-arrora',
      },
    ];
  },
};

export default nextConfig;

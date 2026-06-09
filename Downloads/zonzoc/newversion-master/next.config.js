/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/google-search-console',
        destination: '/seo-services',
        permanent: true,
      },
      {
        source: '/ai-seo',
        destination: '/seo-ai-search-optimization',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

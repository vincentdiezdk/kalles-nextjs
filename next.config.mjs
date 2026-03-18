/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nmfyyudgfkuzyuklmtfv.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'kaspermh.dk',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

// https://nextjs.org/docs/pages/building-your-application/upgrading/version-13

const nextConfig = {
  appDir: true,
  images: {
    minimumCacheTTL: 60,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },

  // async redirects() {
  //   return [
  //     {
  //       source: '/narro',
  //       destination: 'https://storyplaycreator.oopy.io/',
  //       permanent: false,
  //     },
  //   ];
  // },
}

module.exports = nextConfig

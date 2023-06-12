const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const devServerRewrites = async () => {
  return [
    {
      source: '/api/:path*',
      destination: `${process.env.WEBAPP_BACKEND_URL}/:path*`,
    },
  ];
};

module.exports = (phase, { defaultConfig }) => ({
  ...defaultConfig,
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  images: {
    unoptimized: true
  },
  output: 'standalone',
  experimental: {
    newNextLinkBehavior: false,
  },
  rewrites: phase === PHASE_DEVELOPMENT_SERVER ? devServerRewrites : undefined,
});

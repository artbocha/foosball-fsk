const nextConfig = {
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  images: {
    unoptimized: true
  },
  output: 'standalone',
};

module.exports = nextConfig;

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
};

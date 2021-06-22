module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    console.log(config);
    return config;
  },
};

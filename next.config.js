module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.externals = [...config.externals, 'pg-hstore']; 
    return config;
  },
};

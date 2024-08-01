const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  }
};
module.exports = withNextIntl(nextConfig);

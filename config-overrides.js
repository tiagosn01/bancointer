const { override, addWebpackPlugin } = require('customize-cra');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDelevelopment = process.env.NODE_ENV === 'development';

module.exports = override(
  isDelevelopment && addWebpackPlugin(new ReactRefreshPlugin()),
);

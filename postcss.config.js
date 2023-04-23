module.exports = {
  plugins: [
    // plugin for importing CSS files
    require('postcss-import'),
    // plugin for using modern CSS syntax
    require('postcss-preset-env'),
  ]
};
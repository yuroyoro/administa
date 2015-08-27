var webpack = require('webpack');
var config = require("./webpack.config.js");

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: {
        except: ['$super',  '$',  'jQuery', 'React', 'exports',  'require']
      },
      compress: {
        warnings: false,
        drop_console: true
      }
  })
);

module.exports = config;

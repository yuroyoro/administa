var webpack = require('webpack');

module.exports = {

  entry: {
    app:[ './js/app'],           // application js file
    vendors: ['react', 'jquery', 'flux', 'lodash']   // libraries js file
  },

  output: {
    filename: '[name].bundle.js',
    // We want to save the bundle into assets pipeline
    path: './app/assets/javascripts/administa/build',
    publicPath: 'administa/assets/build'
  },

  resolve: {
    modulesDirectories: ['node_modules', 'css', 'js'],
    alias: {
      adminlte:                   'admin-lte/dist/js/app.js',
      'adminlte.css':             'admin-lte/dist/css/AdminLTE.css',
      'adminlte-skins-blue.css':  'admin-lte/dist/css/skins/skin-blue.min.css',
      'adminlte-skins-black.css': 'admin-lte/dist/css/skins/skin-black.min.css',
      'bootstrap.css':            'bootstrap/dist/css/bootstrap.css',
      'jquery-datetimepicker.full.min.js':     'jquery-datetimepicker/build/jquery.datetimepicker.full.min.js',
      'jquery.datetimepicker.css': 'jquery-datetimepicker/jquery.datetimepicker.css',
      'jquery.notifyBar.css'     : 'jqnotifybar/css/jquery.notifyBar.css'
    }
  },

  plugins: [
    // take the vendors chunk and create a vendors.js from the "vendors" in entry section.
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

    // export to global
    new webpack.ProvidePlugin({
      $:      'jquery',
      jQuery: "jquery",
      _:      'lodash',
      React:  'react',
      Flux:   'flux',
      moment: 'moment'
    }),
  ],

  // Turns on source maps
  devtool: '#inline-source-map',

  module: {
    loaders: [
      // exports Administa object to global
      { test: require.resolve('./js/app'), loader: 'expose?Administa' },
      { test: require.resolve('./node_modules/jquery/dist/jquery'), loader: "expose?jQuery"},

      // babel-loader : the transpiler es6 to es5
      { test: /\.js$/, loader: 'babel-loader', exclude:  [/node_modules/],  },

      // css-loader
      { test: /\.css$/, loaders: ['style-loader', 'css-loader?sourceMap!'] },

      { test: /\.png$/,  loader: "url-loader?limit=100000&mimetype=image/png" },
      { test: /\.jpg$/,  loader: "file-loader" },
      { test: /\.gif$/,  loader: "file-loader" },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
    ],
    noParse: [/\.min\.js/]
  }
};

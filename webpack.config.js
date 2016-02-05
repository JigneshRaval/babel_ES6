var webpack = require('webpack');

module.exports = {
  entry : "./server.js",
  output : {
    filename : "./bundle.js"
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      test: /\.jsx?$/,
      query: {
    	   presets: ['es2015']
       },
     }]
  }
}

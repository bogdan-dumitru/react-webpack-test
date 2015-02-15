var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CSSExtractor = new ExtractTextPlugin('[name].css');
var SCSSExtractor = new ExtractTextPlugin('[name].scss');

module.exports = {
  entry: {
    anyroad_search: './components/anyroad/search',
    anyroad_other: './components/anyroad/other'
  },

  output: {
    path: __dirname+'/dist',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },

  module: {
    loaders: [
      { test: /\.jsx$/,
        loader: 'jsx-loader?harmony=true' },
      { test: /\.css$/,
        loader: CSSExtractor.extract("style-loader", "css-loader") },
      { test: /\.scss$/,
        loader: SCSSExtractor.extract("style-loader", "css-loader") }
    ]
  },

  resolve: {
    root: [
      path.resolve('./components/shared'),
      path.resolve('./components/anyroad')
    ],

    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin("common.js"),
    CSSExtractor,
    SCSSExtractor
  ]
}

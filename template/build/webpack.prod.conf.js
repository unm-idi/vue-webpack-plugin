var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders()
  },
  entry: './src/index.js',
  output: {
    library: '{{ library }}',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: '../dist/{{ name }}.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ]
})

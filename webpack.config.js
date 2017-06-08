/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  entry: './app-source/js/index.js',
  output: {
    path: path.resolve('app/js'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}

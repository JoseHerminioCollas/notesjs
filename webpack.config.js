var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'goatstone/notes/');

var config = {
  entry: APP_DIR + '/note.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

module.exports = config;

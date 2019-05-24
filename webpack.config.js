const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry:{
    firstComp: './assets/js/firstComp/index.js',
    vendor: ['react']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js/components')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
        }
    ]
  }
}

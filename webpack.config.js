var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './mirage/server.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'server.bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            //exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }

};
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
          query:{
              presets:['es2015']
          }
        }, 
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
  }
};
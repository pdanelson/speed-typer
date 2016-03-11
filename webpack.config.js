const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: path.join(PATHS.app, 'src', 'main.js'),
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        loader: 'eslint-loader',
        test: /\.js$/,
        include: PATHS.app
      }
    ],
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Speed Typer',
      filename: 'index.html'
    })
  ],
  devServer: {
    devtool: 'eval-source-map',
    contentBase: PATHS.dist,
    port: 3000
  }
};

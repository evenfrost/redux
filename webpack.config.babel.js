import { resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client',
    resolve(__dirname, 'client/index.js'),
  ],
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'client/index.jade'),
    }),
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus',
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.jade$/,
        loader: 'jade',
      },
    ],
  },
};

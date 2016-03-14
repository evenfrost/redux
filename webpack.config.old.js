import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  context: __dirname,
  entry: [
    // 'webpack/hot/dev-server',
    // 'webpack-hot-middleware/client',
    './client/index.js',
  ],
  output: {
    // path: path.resolve(__dirname, 'public'),
    // filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'client', 'index.html'),
    // }),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      // { test: /\.css$/, loader: 'style!css' },
      // { test: /\.styl$/, loader: 'style!css!stylus' },
      // {
      //   test: /\.js?$/,
      //   exclude: /node_modules/,
      //   loader: 'babel',
      //   query: {
      //     presets: ['react', 'es2015', 'stage-2'],
      //   },
      // },
    ],
  },
};

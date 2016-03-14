import path from 'path';
// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  context: __dirname,
  entry: [
    './client/index.js',
    'webpack/hot/dev-server',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
};

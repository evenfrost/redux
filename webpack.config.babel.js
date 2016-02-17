import path from 'path';
import webpack from 'webpack';

export default {
  entry: path.resolve(__dirname, 'client/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
};

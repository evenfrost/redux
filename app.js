/**
 * Require Browsersync along with webpack and middleware for it
 */
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

/**
 *  Make a bundler from required ./webpack.config.js.
 */
const bundler = webpack(webpackConfig);

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync({
  server: {
    baseDir: 'public',

    middleware: [
      webpackDevMiddleware(bundler, {
        // IMPORTANT: dev middleware can't access config, so we should
        // provide publicPath by ourselves
        publicPath: webpackConfig.output.publicPath,

        // pretty colored output
        stats: { colors: true },

        // for other settings see
        // http://webpack.github.io/docs/webpack-dev-middleware.html
      }),

      // bundler should be the same as above
      webpackHotMiddleware(bundler),
    ],
  },

  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: [
    'client/styles/**/*.styl',
  ],
});

import path from 'path';
import Koa from 'koa';
import convert from 'koa-convert';
import serve from 'koa-static';
import morgan from 'koa-morgan';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.babel';
import webpackDevMiddleware from 'koa-webpack-dev-middleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';

const app = new Koa();
const compiler = webpack(webpackConfig);

app.use(morgan('dev'));

app.use(convert(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
})));

app.use(convert(webpackHotMiddleware(compiler)));

app.use(convert(serve(path.resolve(__dirname, '..', 'public'))));

app.listen(5000);

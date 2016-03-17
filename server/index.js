import path from 'path';
import Koa from 'koa';
import serve from 'koa-static';
import convert from 'koa-convert';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.babel';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = new Koa();
const compiler = webpack(webpackConfig);

app.use(convert(serve(path.resolve(__dirname, '..', 'public'))));

app.use(async (ctx, next) => {
  await webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }).bind(null, ctx.req, ctx.res);

  await next();
});

app.use(async (ctx, next) => {
  await webpackHotMiddleware(compiler).bind(null, ctx.req, ctx.res);

  await next();
});

app.listen(5000);

import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as render from 'koa-ejs';
import * as path from 'path'

import router from "./router";
import viewRouter from './router/viewRouter';
import errorHandler from "./middleware/errorHandler";

const app = new Koa();

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'ejs',
    cache: false,
    debug: true
})
app.use(errorHandler);
app.use(bodyParser());

app.use(async (ctx, next) => {
    ctx.state = ctx.state || {};
    ctx.state.now = new Date();
    ctx.state.ip = ctx.ip;
    return next();
});
app.use(viewRouter.routes())
    .use(viewRouter.allowedMethods());
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);

console.log('app started at port 3000...');

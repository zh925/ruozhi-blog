import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as render from 'koa-ejs'
import * as serve from 'koa-static'
import * as path from 'path'

import router from './router'
import errorHandler from './middleware/errorHandler'

const app = new Koa()

app.use(serve(path.resolve(__dirname, 'static')))
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'ejs',
    cache: false,
    debug: true
})
app.use(errorHandler)
app.use(bodyParser())

app.use(async (ctx, next) => {
    ctx.state = ctx.state || {}
    ctx.state.now = new Date()
    ctx.state.ip = ctx.ip
    return next()
})

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)

console.log('app started at port 3000...')

import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as render from 'koa-ejs'
import * as serve from 'koa-static'
import * as path from 'path'
import logger from './middleware/log4js'

import router from './router'
import errorHandler from './middleware/errorHandler'

type AppState = {
    now: Date
    ip: string
    pathname: string
    title: string
}

const app = new Koa<AppState>()

app.keys = ['ruozhi blog']

app.use(serve(path.resolve(__dirname, 'static')))
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout/index',
    viewExt: 'ejs',
    cache: false,
    debug: true
})

app.use(bodyParser())

app.use(async (ctx, next) => {
    ctx.state = Object.assign({}, ctx.state, {
        now: new Date(),
        ip: ctx.ip,
        path: ctx.path,
        title: ''
    })
    return next()
})

app.use(logger)
app.use(errorHandler)

app.use(router.routes())
    .use(router.allowedMethods())


app.listen(3000)

console.log('app started at port 3000...')

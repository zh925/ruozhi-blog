import * as Router from 'koa-router'
const router = new Router()

router.get('/login', async (ctx) => {
    await ctx.render('user/login', {
        title: '登录',
        render: Object.assign({}, ctx.state.render, {
            header: false,
            footer: false
        })
    })
})

router.get('/register', async (ctx) => {
    await ctx.render('user/register', {
        title: '注册',
        render: Object.assign({}, ctx.state.render, {
            header: false,
            footer: false
        })
    })
})

router.get('/', async (ctx) => {
    await ctx.render('index', {
        title: '首页'
    })
})

export default router

import * as Router from 'koa-router'
import post from './post'
const router = new Router()

router.get('index', '/', async (ctx) => {
    await ctx.render('index', {
        title: '首页'
    })
})

router.get('login', '/login', async (ctx) => {
    await ctx.render('user/login', {
        title: '登录'
    })
})

router.get('register', '/register', async (ctx) => {
    await ctx.render('user/register', {
        title: '注册'
    })
})

router.use(post.routes())

export default router

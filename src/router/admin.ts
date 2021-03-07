import * as Router from 'koa-router'
import controller from '../controller'
const router = new Router({
    prefix: '/admin'
})

router.get('/login', async(ctx) => {
    await ctx.render('/admin/login', {
        title: '登录'
    })
})

router.get('/register', async(ctx) => {
    await ctx.render('/admin/register', {
        title: '注册'
    })
})

router.post('/login', controller.user.login)
router.post('/register', controller.user.register)
router.get('/info/:uid', controller.user.getUserInfo)

export default router

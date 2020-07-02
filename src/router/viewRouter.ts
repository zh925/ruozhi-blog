import * as Router from 'koa-router';
const router = new Router();

router.get('/login', async (ctx) => {
    await ctx.render('user/login', {
        title: '登录'
    })
})
router.get('/register', async (ctx) => {
    await ctx.render('user/register', {
        title: '注册'
    })
})

export default router;

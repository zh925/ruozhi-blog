import * as Router from 'koa-router';
const router = new Router();

router.get('/login', async (ctx) => {
    await ctx.render('user/login')
})
router.get('/register', async (ctx) => {
    await ctx.render('user/register')
})

export default router;

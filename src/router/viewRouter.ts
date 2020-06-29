import * as Router from 'koa-router';
const router = new Router();

router.get('/login', async (ctx) => {
    await ctx.render('user/login');
})

export default router;

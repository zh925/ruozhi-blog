import * as Router from 'koa-router'
import controller from '../controller'
const router = new Router()

router.get('/', async(ctx) => {
    const posts = await controller.post.getBlogIndex(ctx)
    console.log(posts)
    await ctx.render('/index', {
        posts
    })
})

export default router

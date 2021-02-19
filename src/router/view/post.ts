import * as Router from 'koa-router'
import postService from '../../service/postService'
const router = new Router({
    prefix: '/posts'
})

router.get('/', async (ctx) => {
})

router.get('postDetail', '/:id', async (ctx) => {
    const post = await postService.findById(ctx.params.id)
    await ctx.render('post', {
        title: '文章详情',
        post
    })
})

export default router

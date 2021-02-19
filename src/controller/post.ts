import postService from '../service/postService'
import * as ErrorConstants from '../common/errorConstants'

export default {
    async getPostById(ctx) {
        const { id } = ctx.params
        const post = await postService.findById(id)
        if (!post) {
            throw ErrorConstants.POST_NOT_EXISTS
        }
        ctx.status = 200
        ctx.body = {
            code: 200,
            data: post,
            msg: ''
        }
    },
    async postDetail() {}
}

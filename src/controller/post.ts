import postService from '../service/postService'
import * as ErrorConstants from '../common/errorConstants'

export default {
    async getBlogIndex(ctx) {
        const {pageNo, pageSize} = ctx.query
        return postService.getPostsPage(pageNo || 1, pageSize || 10)
    }
}

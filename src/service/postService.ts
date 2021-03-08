import Post from "../model/Post";

export default {
    async create(ctx) {
    },
    async getPostsPage(pageNo: number = 1, pageSize?: number): Promise<Post[]> {
        return Post.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            limit: pageSize,
            offset: (pageNo - 1) * pageSize
        })
    },
    findById (id: number) {
        return Post.findOne({
            where: { id }
        })
    }
}

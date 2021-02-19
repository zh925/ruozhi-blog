import Post from "../model/Post";

export default {
    async create(ctx) {
    },
    findById (id: number) {
        return Post.findOne({
            where: { id }
        })
    }
}

import * as Router from 'koa-router'
import admin from './admin'
import blog from './blog'

const router = new Router()

router.use(admin.routes())
router.use(blog.routes())

export default router

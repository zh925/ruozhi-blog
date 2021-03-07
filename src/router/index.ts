import * as Router from 'koa-router'
import admin from './admin'

const router = new Router()

router.use(admin.routes())

export default router

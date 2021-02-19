import * as Router from 'koa-router'
import api from './api'
import viewRouter from './view'

const router = new Router()

router.use(api.routes())
router.use(viewRouter.routes())

export default router

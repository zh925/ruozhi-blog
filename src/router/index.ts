import * as Router from 'koa-router';
import user from './user';

const router = new Router();

router.prefix('/api');
router.use('/user', user.routes());

export default router;

import * as Router from 'koa-router';
const router = new Router();
import controller from '../../controller';

router.prefix('/user');
router.post('/register', controller.user.register);
router.post('/login', controller.user.login);
router.get('/info/:uid', controller.user.getUserInfo);

export default router

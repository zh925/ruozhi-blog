import userService from '../service/userService';
import * as ErrorConstants from "../common/errorConstants";

export default {
    async register(ctx) {
        const hasUser = await userService.findByPhone(ctx.request.body.phone);
        if (hasUser) {
            throw ErrorConstants.USER_EXISTS;
        } else {
            const data = await userService.create(ctx);
            ctx.status = 200;
            ctx.body = {
                code: 200,
                data: data,
                msg: ''
            };
        }
    },
    async login(ctx) {
        const { body } = ctx.request;
        const user = await userService.findByPhone(body.phone);
        if (!user) {
            throw ErrorConstants.USER_NOT_EXISTS;
        }
        const token = userService.login(user, body.password);
        ctx.state.userInfo = {
            uid: user.id,
            token
        }
        ctx.status = 200;
        ctx.body = {
            code: 200,
            data: {
                uid: user.uid,
                token
            },
            msg: ''
        }
    },
    async getUserInfo(ctx) {
        const { uid } = ctx.params;
        const user = await userService.getUserInfo(uid);
        if (!user) {
            throw ErrorConstants.USER_NOT_EXISTS;
        }
        ctx.status = 200;
        ctx.body = {
            code: 200,
            data: {
                ...user.dataValues
            },
            msg: ''
        }
    }
}

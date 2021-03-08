import userService from '../service/userService'
import * as ErrorConstants from '../common/errorConstants'
import { isPhone } from '../utils/validate'
import notice from '../utils/notic'

export default {
    async login(ctx) {
        const { body } = ctx.request
        const user = await userService.findByPhone(body.phone)
        if (!user) {
            notice('用户不存在', 'danger', ctx)
            ctx.redirect('back')
            throw ErrorConstants.USER_NOT_EXISTS
        }
        const token = userService.login(user, body.password)
        ctx.state.token = token
        ctx.cookies.set('__blog_token', token, {
            expires: new Date(Date.now() + 7* 24* 60 * 60 * 1000),
            signed: true,
            httpOnly: true
        })
        ctx.body = 'login success'
    },
    async register(ctx) {
        const { body } = ctx.request
        if (!isPhone(body.phone)) {
            throw ErrorConstants.PHONE_ILLEGAL
        }
        if (body.password !== body.repassword) {
            throw ErrorConstants.REPASSWORD_ERROR
        }
        const hasUser = await userService.findByPhone(body.phone)
        if (hasUser) {
            notice('用户已存在', 'danger', ctx)
            ctx.redirect('back')
            throw ErrorConstants.USER_EXISTS
        } else {
            await userService.create(ctx)
            ctx.redirect('/admin/login')
        }
    }
}

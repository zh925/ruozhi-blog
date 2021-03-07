import HttpException from '../common/httpException'

export default async function errorHandler(ctx,next) {
    try {
        await next()
    } catch (err) {
        if (err instanceof HttpException) {
            // ctx.status = 200
            // ctx.body = {
            //     errCode: err.errCode,
            //     errMsg: err.msg,
            //     data: err.data || {}
            // }
            ctx.state = Object.assign({}, ctx.state, {
                alertMsg: {
                    msg: err.msg,
                    type: 'danger'
                }
            })
        } else {
            // ctx.status = 200
            // ctx.body = {
            //     errCode: 500,
            //     errMsg: err.message,
            //     data: {}
            // }
            ctx.state = Object.assign({}, ctx.state, {
                alertMsg: {
                    msg: err.message,
                    type: 'danger'
                }
            })
        }
    }
}

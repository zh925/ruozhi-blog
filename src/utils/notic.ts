export default function notice(msg: string, type = 'danger', ctx) {
    ctx.cookies.set('__blog_notice', encodeURIComponent(msg), {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        signed: false,
        httpOnly: false,
        path: ctx.path
    })
    ctx.cookies.set('__blog_notice_type', type, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        signed: false,
        httpOnly: false,
        path: ctx.path
    })
}

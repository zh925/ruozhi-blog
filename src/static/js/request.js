$(function () {
    window.ajax = async (opt) => {
        // todo: 发起请求时是否已经登录判断
        const url = opt.url
        const commonHeaders = {
            'Content-Type': 'application/json'
        }
        opt.headers = Object.assign({}, commonHeaders, opt.headers)
        delete opt.url
        try {
            const response = await fetch(url, {
                ...opt
            })
            const res = await response.json()
            if (res.code !== 200) {
                _alert.error(res.errMsg)
                return Promise.reject(res)
            }
            return res
        } catch (err) {
            window._alert.error(err.errMsg)
            throw err
        }
    }
})

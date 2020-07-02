;(function () {

    window.request = {}
    const _ajax = $.ajax
    $.ajax = function(opts) {
        const onAjaxError = (res) => {
            switch (res.errCode) {
                default:
                    _.alert(res.errMsg)
            }
        }
        _ajax({
            ...opts,
            success(res) {
                if (res.code !== 200) {
                    onAjaxError(res)
                    opts.error && opts.error(res)
                    return
                }
                opts.success && opts.success(res)
            },
            error(res) {
                opts.error && opts.error(res)
            },
            conplete(res) {
                opts.complete && opts.complete(res)
            },
        })
    }

    const _ = window._ || {}
    _.isPhone = (phone) =>  /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/.test(phone)
    _.isEmail = (email) => /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/.test(email)
    let timeId = null
    _.alert = function(message) {
        const alertBox = $('.alert-global')
        alertBox.find('.alert-content').html(message)
        alertBox.addClass('show')
        clearInterval(timeId)
        timeId = setInterval(function() {
            alertBox.removeClass('show')
            clearInterval(timeId)
        }, 2000)
    }
    window._ = _
})()

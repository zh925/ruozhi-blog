;(function () {
    let timeId = null
    window.alert = function(message) {
        $('.alert-content').html(message)
        $('.alert-global').addClass('show')
        clearInterval(timeId)
        timeId = setInterval(function() {
            $('.alert-global').removeClass('show')
            clearInterval(timeId)
        }, 2000)
    }

    function onAjaxError(res) {
        switch (res.errCode) {
            default:
                alert(res.errMsg)
        }
    }

    const _ajax = $.ajax
    $.ajax = function(opts) {
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
})()

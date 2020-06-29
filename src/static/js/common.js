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

    $.ajaxSetup({
        success(res) {
            if (res.errCode) {
                switch(res.errCode) {
                    default:
                        alert(res.errMsg)
                }
            }
        },
        error(err) {}
    })
})()

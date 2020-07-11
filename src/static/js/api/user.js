request.userLogin = function(data, opts) {
    $.ajax({
        url: '/api/user/login',
        method: 'POST',
        data,
        ...opts
    })
}

request.userRegister = function(data, opts) {
    $.ajax({
        url: '/api/user/register',
        method: 'POST',
        data,
        ...opts
    })
}

function userLogin(data, opts) {
    $.ajax({
        url: '/api/user/login',
        method: 'POST',
        data,
        ...opts
    })
}

function userRegister(data, opts) {
    $.ajax({
        url: '/api/user/register',
        method: 'POST',
        data,
        ...opts
    })
}
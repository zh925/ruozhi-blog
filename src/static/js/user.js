function userLogin(data, opts) {
    $.ajax({
        url: '/api/user/login',
        method: 'POST',
        data,
        ...opts
    })
}

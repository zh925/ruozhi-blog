// 用户登录
request.userLogin = (body, opts) => window.ajax({
    url: '/api/user/login',
    method: 'POST',
    body,
    ...opts
})

// 用户注册
request.userRegister = (body, opts) => window.ajax({
    url: '/api/user/register',
    method: 'POST',
    body,
    ...opts
})

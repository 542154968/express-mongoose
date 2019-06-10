var mongoose = require('mongoose')
var loginSchema = new mongoose.Schema({
    userName: { type: String, required: [true, '用户名不能为空'] },
    password: { type: String, required: [true, '密码不能为空'] },
    lastLoginDate: { type: Date, required: [true, '最后登录时间不能为空'] },
    IP: { type: String, required: [true, '最后登录IP不能为空'] }
})

mongoose.model('Login', loginSchema)

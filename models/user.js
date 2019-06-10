var mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
    uid: { type: Number, required: [true, '没有uid'] },
    username: { type: String, required: [true, '用户名不能为空'] },
    createTime: { type: Date, required: [true, '创建时间不能为空'] },
    lastLogin: Date
})

mongoose.model('User', userSchema)

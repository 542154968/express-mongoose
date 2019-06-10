var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Login = mongoose.model('Login')

router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express' })
})

router.post('/', async function(req, res, next) {
    try {
        var body = req.body
        var login = new Login({
            userName: body.userName,
            password: body.password,
            lastLoginDate: new Date(),
            IP: req.headers.origin
        })
        await login.save()
        res.redirect('/list')
    } catch (error) {
        return next(error.errors || error)
    }
})

module.exports = router

var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Login = mongoose.model('Login')

router.get('/', async function(req, res, next) {
    try {
        var datas = await Login.find()
        res.render('list', {
            datas: datas
        })
    } catch (error) {
        return next(error.errors || error)
    }
})

module.exports = router

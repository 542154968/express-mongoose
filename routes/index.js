var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var User = mongoose.model('User')
var { save } = require('../assets/utils')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' })
})

// router.get('/test', function(req, res, next) {
//     User.count(function(err, count) {
//         if (err) {
//             return next({ message: '获取异常' })
//         } else {
//             var user = new User({
//                 uid: count + 1,
//                 username: 'nuanfeng'
//             })
//             // save(user, next).then(() => {
//             //     User.find({}, function(err, docs) {
//             //         if (err) {
//             //             return next({ message: '查找失败' })
//             //         }

//             //         res.json(docs)
//             //     })
//             // })
//         }
//     })
// })

router.get('/test', async function(req, res, next) {
    try {
        var count = await User.count()
        var user = new User({
            uid: count + 1,
            username: 'nuanfeng',
            createTime: new Date()
        })
        // var status = await test()
        await user.save()
        var doc = await User.find()
        res.status(200)
        res.json(doc)
    } catch (error) {
        return next(error.errors || error)
    }
})

module.exports = router

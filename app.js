var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var mongoose = require('./config/mongoose.js')
var db = mongoose()

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var loginRouter = require('./routes/login')
var listRouter = require('./routes/list')

var app = express()
var router = express.Router()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// 中间件是按照当前代码从上往下这个顺序执行的
// 这里我们可以做token验证等
// 必须调用next 不然不到下个中间件中
// 如果这个中间件写在了路由的下面 那么这个中间件就无效了 因为先匹配了 /user啥的 没有next

app.use(function(req, res, next) {
    console.log('验证token')
    next()
})

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/list', listRouter)

// catch 404 and forward to error handler 都没有匹配的路由  当然404了
app.use(function(req, res, next) {
    next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
    console.log(err)
    // // set locals, only providing error in development
    // res.locals.message = err.message
    // res.locals.error = req.app.get('env') === 'development' ? err : {}
    // 这里可以根据路由去判断返回 json格式 还是页面
    // // render the error page
    // res.status(err.status || 500)
    // res.render('error')
    res.status(err.status || 500)
    res.json(err)
})

module.exports = app

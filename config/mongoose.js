var mongoose = require('mongoose')
var config = require('./config.js')

module.exports = function() {
    var db = mongoose.connect(config.mongodb, { useNewUrlParser: true })

    require('../models/user.js')
    require('../models/login.js')
    return db
}

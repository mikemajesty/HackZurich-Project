var mongoose = require('../connection');

var user = mongoose.Schema({
    name: String,
    fullNumber: String,
    macAdress: String,
    active: Boolean
});

var User = mongoose.model('User', user);

module.exports = User

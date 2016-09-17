var User = require('../data/model/user');

var save = function(users) {
  return User.insertMany(users).then(function(data, err) {
    if(err) console.log(err);
  });
}

module.exports = {
  save
}

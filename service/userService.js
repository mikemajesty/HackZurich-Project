var User = require('../data/model/user');

var save = function(users) {
    users.forEach((user) => {
        User.findOne({clientMac: user.clientMac}).then((userDB) => {
            if (userDB) {
                userDB.seenTime = user.seenTime;
            } else {
                userDB = new User(user);
            }

            userDB.save();
        });
    });
}

module.exports = {
  save
}

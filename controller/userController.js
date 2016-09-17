var userService = require('../service/userService');


var save = function (req, res) {
    var users = req.body;
    userService.save(users);

    res.status(200).send();
}

module.exports = {
  save
}

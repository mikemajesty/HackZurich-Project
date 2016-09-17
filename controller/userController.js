var userService = require('../service/userService');


var save = function (req, res) {
    var users = req.body;
    userService.save(users).then((data) => {
      res.json(data);
    });
}

module.exports = {
  save
}

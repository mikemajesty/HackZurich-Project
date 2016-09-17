var userService = require('../service/userService');


var save = function (req, res) {
    userService.save(req.body);

    res.status(200).send();
}

module.exports = {
  save
}

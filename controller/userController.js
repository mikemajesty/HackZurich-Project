var userService = require('../service/userService');


var save = function (req, res) {

    var user = {
                name: req.body.name ,
                fullNumber:  req.body.fullNumber,
                macAdress: req.body.macAdress,
                active: req.body.active
              }
    console.log(user);
    userService.save(user).then((data) => {
      res.json(data);
    });
}

module.exports = {
  save
}

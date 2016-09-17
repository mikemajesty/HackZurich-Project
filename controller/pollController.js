
const pollService = require('../service/pollService');

const save = (req, res) => {
    pollService.save(req.body);

    res.status(200).send();
}

module.exports = {
    save
}

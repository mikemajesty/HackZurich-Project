const clientService = require('../service/clientService');
const pollService = require('../service/pollService');

const save = (req, res) => {
    pollService.save(req.body, req.query.macAdress);
    clientService.savePhone(req.query.client_mac, req.body.phone);
    console.log(req.query.base_grant_url);
    console.log(req.query.user_continue_url);
    console.log(req.query.client_mac);

    res.redirect(req.query.base_grant_url + "?continue_url=" + req.query.user_continue_url);
}

module.exports = {
    save
}

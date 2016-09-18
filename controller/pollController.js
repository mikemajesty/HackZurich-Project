/**
 * Dependencies
 */
const clientService = require('../service/clientService');
const pollService = require('../service/pollService');

/**
 * Save 
 */
const save = (req, res) => {
    pollService.save(req.body, req.query.macAdress);
    clientService.savePhone(req.query.client_mac, req.body.phone);

    res.redirect(req.query.base_grant_url + "?continue_url=" + req.query.user_continue_url);
}

/**
 * Export methods
 */
module.exports = {
    save
}

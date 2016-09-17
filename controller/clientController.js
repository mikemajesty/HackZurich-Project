/**
 * Dependencies
 */
const clientService = require('../service/clientService');

/**
 * List all clients endpoint.
 */
const all = (req, res) => {
    clientService.all().then((clients) => {
        res.status(200).send(clients);
    });
}

/**
 * Save a list of clients from Cisco Meraki.
 */
const save = (req, res) => {
    console.log(req.body);
    clientService.save(req.body);

    res.status(200).send();
}

/**
 * Export apis.
 */
module.exports = {
    all,
    save
}

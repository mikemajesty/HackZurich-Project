/**
 * Dependencies
 */
const clientService = require('../service/clientService');

/**
 * List all clients endpoint.
 */
const all = (req, res) => {
    // var MINUTE = 5;
    var MINUTE = 600000;
    var myStartDate = new Date();
    myStartDate.setMinutes(myStartDate.getMinutes() - MINUTE);
    clientService.find({os:{ $in: [null, 'iOS', 'Android']}, seenTime: {$gte: myStartDate.toISOString()} }).limit(128)
    .then((clients) => {
        res.status(200).send(clients);
    });
}

/**
 * Save a list of clients from Cisco Meraki.
 */
const save = (req, res) => {
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

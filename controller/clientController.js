/**
 * Dependencies
 */
const clientService = require('../service/clientService');

/**
 * List all clients endpoint.
 */
const all = (req, res) => {
    var MS_PER_MINUTE = 60000;
    var myStartDate = new Date(new Date().getTime() - (5 * MS_PER_MINUTE));
    clientService.find({os:{ $in: [null, 'iOS', 'Android']}, seenTime: {$gte: myStartDate.toISOString()} })
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

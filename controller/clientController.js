/**
 * Dependencies
 */
const clientService = require('../service/clientService');

/**
 * List all clients endpoint.
 */
const all = (req, res) => {
    var MS_PER_MINUTE = 60000;
    var myStartDate = new Date(new Date() - (60000 * MS_PER_MINUTE));
    console.log(myStartDate);
    clientService.find({os:{ $in: [null, 'iOS', 'Android']}, seenTime: {$gte: new Date(), $lt: myStartDate} })
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

/**
 * Dependencies
 */
const clientService = require('../service/clientService');
const messageService = require('../service/messageService');

/**
 * Send a message to a list of clients
 */
const save = (req, res) => {
    clientService.find({_id: {$in: req.body.clients}}).then((clients) => {
        clients.forEach((client) => {
            if (client.phoneNumber) {
                messageService.sendSMS(client.phoneNumber, req.body.message);
            }
        })
        res.status(200).send();
    });
}

/**
 * Export apis.
 */
module.exports = {
    save
}

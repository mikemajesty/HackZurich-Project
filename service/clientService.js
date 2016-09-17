/**
 * Dependencies
 */
const Client = require('../data/model/client');

/**
 * Return all clients without pagination.
 */
const all = () => {
    return Client.find();
}

/**
 * Save a list of clients.
 */
const save = (clients) => {
    clients.forEach((client) => {
        Client.findOne({clientMac: client.clientMac}).then((clientDB) => {
            if (clientDB) {
                clientDB.seenTime = client.seenTime;
            } else {
                clientDB = new Client(client);
            }

            clientDB.save();
        });
    });
}

/**
 * Export methods
 */
module.exports = {
    all,
    save
}

/**
 * Dependencies
 */
const Client = require('../data/model/client');

/**
 * Return all clients without pagination
 */
const all = () => {
    return Client.find();
}

/**
 * Return by a criteria
 */
const find = (query) => {
    return Client.find(query);
}

/**
 * Preload data function
 */
const preload = () => {
    Client.findOne({clientMac: '30:cb:f8:ad:0f:1a'}).then((client) => {
        if (!client) {
            client = new Client({
                name: 'Celso Wo',
                phoneNumber: '+5511974048080',
                clientMac: '30:cb:f8:ad:0f:1a'
            });

            client.save();
        }
    });
}

/**
 * Save a list of clients
 */
const save = (clients) => {
    clients.forEach((client) => {
        Client.findOne({clientMac: client.clientMac}).then((clientDB) => {
            if (clientDB) {
                clientDB.seenTime = client.seenTime;
                clientDB.location = client.location;
                clientDB.os = client.os;
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
    find,
    preload,
    save
}

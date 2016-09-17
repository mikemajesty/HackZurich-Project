/**
 * Dependencies.
 */
const mongoose = require('../connection');

/**
 * Client document definition.
 */
const client = mongoose.Schema({
    name: String,
    phoneNumber: String,
    ipv4: String,
    location:
     { lat: Number,
       lng: Number,
       unc: Number,
       x: [Number],
       y: [Number]
    },
    seenTime: String,
    ssid: String,
    os: String,
    clientMac: String,
    seenEpoch: Number,
    rssi: Number,
    ipv6: String,
    manufacturer: String
});

client.index({ type: 1, clientMac: 1 }, { unique: true });

/**
 * Export client model.
 */
module.exports = mongoose.model('Client', client);

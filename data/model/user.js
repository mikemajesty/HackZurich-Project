var mongoose = require('../connection');

var user = mongoose.Schema({
    name: String,
    fullNumber: String,
    macAdress: String,
    active: Boolean,
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

var User = mongoose.model('User', user);

module.exports = User

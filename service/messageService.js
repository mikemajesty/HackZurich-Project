/**
 * Dependencies
 */
const http = require('http');
const request = require('request');
const twilio = require('twilio')('AC93c5aa2827d51b1bf4aacf1c109e09c1', '66e2dcff8104da3ce923ad7cf132837f');

/**
 * Send a message to a number by sms.
 */
const sendSMS = (to, message) => {
    tropo(to, message);
}

const sendTwilio = (to, message) => {
    twilio.messages.create({
        body: message,
        to: to,
        from: '+41798073645'
    }, function(err, data) {
        if (err) {
            console.error(err);
        } else {
            console.log('SMS sent to ' + to);
        }
    });
}

const tropo = (to, message) => {
    request({
        url: 'https://api.tropo.com/1.0/sessions',
        qs: {
            action: 'create',
            token: '5647704c6a516f69644350467a48484c536a6c6f7173454b797157787259767070624e586f6c417444706a70',
            phonenumber: to,
            msg: message
        }
    }, (err, resp, body) => {
        console.log("tropo:" + resp.statusCode);
    });
}

/**
 * Export methods
 */
module.exports = {
    sendSMS
};
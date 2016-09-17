/**
 * Dependencies
 */
const twilio = require('twilio')('AC93c5aa2827d51b1bf4aacf1c109e09c1', '66e2dcff8104da3ce923ad7cf132837f');

/**
 * Send a message to a number by sms.
 */
const sendSMS = (to, message) => {
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

/**
 * Export methods
 */
module.exports = {
    sendSMS
};
/**
 * Dependencies
 */
const mongoose = require('mongoose');

/**
 * Lookup for mongo connection url
 */
const mongoURL = 'mongodb://localhost/hackzurich';
if (process.env.PROD_MONGODB) {
    mongoURL = process.env.PROD_MONGODB;
}

/**
 * Create mongo connection
 */
mongoose.connect(mongoURL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection Ok!!");
});

/**
 * Export mongoose connection
 */
module.exports = mongoose

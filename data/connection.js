var mongoose = require('mongoose');

var mongoURL = 'mongodb://localhost/test';
// if (process.env.PROD_MONGODB) {
//     mongoURL = process.env.PROD_MONGODB;
// }

mongoose.connect(mongoURL);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection Ok!!");
});

module.exports = mongoose

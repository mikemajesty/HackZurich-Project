var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection Ok!!");
});

var test = mongoose.Schema({
    name: String,
    adress: String
});

var Test = mongoose.model('Test', test);

var test = new Test({ name: 'Silence', adress: 'um adress' });

test.save(function (err, test) {
  if (err) return console.error(err);
  console.log(test.name);
});


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var express = require('express');
var app = express();
var User = require('./data/model/user');
var userService = require('./service/userService');

var user = new User({ name: 'Gabrel Lima', fullNumber: '1532483712', macAdress: '3434234234324234', active: true });

userService.save([user]);


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/test', function(request, response) {
  Test.find({}, function(err, data) {
    response.send(data);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var express = require('express');
var app = express();
var User = require('./data/model/user');
var userService = require('./service/userService');

var user = new User({
    name: "",
    fullNumber: "",
    macAdress: "",
    active: true,
    ipv4: "",
    location:
     { lat: 245235,
       lng: 23452435,
       unc: 345665,
       x: [534657],
       y: [7968576]
    },
    seenTime: "gfdf",
    ssid: "String",
    os: "",
    clientMac: "",
    seenEpoch: 123456543,
    rssi: 1234567,
    ipv6: "",
    manufacturer: ""
});

userService.save([user]);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/test', function(request, response) {
  User.find({}, function(err, data) {
    response.send(data);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

/**
 * Dependencies
 */
const express = require('express');
const app = express();
const clientController = require('./controller/clientController');
const parser = require('body-parser');

app.use(parser());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

/**
 * API Endpoints
 */

app.post("/api/clients", clientController.save);
app.get('/api/clients', clientController.all);

/**
 * Server startup
 */
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

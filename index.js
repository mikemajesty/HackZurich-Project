/**
 * Dependencies
 */
const express = require('express');
const app = express();
const clientController = require('./controller/clientController');
const clientService = require('./service/clientService');
const messageController = require('./controller/messageController');
const bodyParser = require('body-parser');

/**
 * Preloaded data
 */

clientService.preload();


/**
 * Express Start
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));

app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/**
 * API Endpoints
 */

app.post("/api/clients", clientController.save);
app.get('/api/clients', clientController.all);

app.post("/api/messages", messageController.save);

/**
 * Server startup
 */
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

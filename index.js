/**
 * Dependencies
 */
const express = require('express');
const app = express();
const clientController = require('./controller/clientController');
const clientService = require('./service/clientService');
const messageController = require('./controller/messageController');
const pollController = require('./controller/pollController');
const bodyParser = require('body-parser');
const timeout = require('connect-timeout');

/**
 * Preloaded data
 */

clientService.preload();


/**
 * Express Start
 */
app.use(timeout(640000));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb', strict:false}));

app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/**
 * CMX
 */
app.get('/cmx', function (req, res) {
    res.status(200).send('c8b77133f4bd2218df387186212a6e946d5b4207');
});

app.post('/cmx', function (req, res) {
    if(req.body.secret == 'C1sco12345'){
        console.log("APMAC:" + req.body.data.apMac);
        clientService.save(req.body.data.observations);
    }else{
        console.log("Secret was invalid");
    }

    res.status(200);
});

/**
 * API Endpoints
 */

// app.post("/api/clients", clientController.save);
app.get('/api/clients', clientController.all);

app.post("/api/messages", messageController.save);


app.post('/poll/', pollController.save);
/**
 * Server startup
 */
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

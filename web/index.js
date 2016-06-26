const express = require('express');
const morgan = require('morgan');
const logger = require('./logger');

const port = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));

// TODO
app.get('/', function(req, res) { });

// TODO
app.post('/control-schema', function(req, res) { });
// TODO
app.get('/control-schema', function(req, res) { });

// TODO
app.post('/controls', function(req, res) { });
// TODO
app.get('/controls', function(req, res) { });

app.listen(port, function(error) {
  if (error) {
    logger.error(error);
  } else {
    logger.info(`==> Listening on port ${port}.`);
  }
});

// getting current input schema (called by user client)
// pushing new input schema (called by pattern generator)
// sending input values (called by user client)
// getting current values (called by pattern generator)

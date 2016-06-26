const express = require('express');
const morgan = require('morgan');
const logger = require('./logger');

const port = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));

const page          = require('./routes/page');
const controlSchema = require('./routes/control-schema');
const control       = require('./routes/control');

app.get('/', page.home);

app.post('/control-schema', controlSchema.create);
app.get('/control-schema', controlSchema.show);
app.post('/controls', control.create);
app.get('/controls', control.show);

app.listen(port, function(error) {
  if (error) {
    logger.error(error);
  } else {
    logger.info('==> Listening on port ' + port);
  }
});

// getting current input schema (called by user client)
// pushing new input schema (called by pattern generator)
// sending input values (called by user client)
// getting current values (called by pattern generator)

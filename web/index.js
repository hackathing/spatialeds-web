const app = require('./routes');
const morgan = require('morgan');
app.use(morgan('dev'));

const logger = require('./logger');
const port = process.env.PORT || 8080;
app.listen(port, function(error) {
  if (error) {
    logger.error(error);
  } else {
    logger.info('==> Listening on port ' + port);
  }
});

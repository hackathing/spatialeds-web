const logger = require('../../logger');

function randomTag() {
  return Math.round(Math.random() * 1000000)
}

module.exports = function tagUser(req, res, next) {
  if (!req.session.userID) {
    const tag = randomTag();
    logger.info('Tagging user ' + tag);
    req.session.userID = tag;
  }
  next();
}

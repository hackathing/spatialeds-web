function error(x) {
  (process.env.NODE_ENV !== 'test') && console.error('error:', x);
}

function warn(x) {
  (process.env.NODE_ENV !== 'test') && console.warn('warn:', x);
}

function info(x) {
  (process.env.NODE_ENV !== 'test') && console.log('info:', x);
}

function trace(x) {
  (process.env.NODE_ENV !== 'test') && console.trace('trace:', x);
}

module.exports = {
  error: error,
  warn: warn,
  info: info,
  trace: trace,
};

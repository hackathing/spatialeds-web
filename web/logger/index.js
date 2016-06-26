function error(x) {
  console.error('error:', x);
}

function warn(x) {
  console.warn('warn:', x);
}

function info(x) {
  console.log('info:', x);
}

function trace(x) {
  console.trace('trace:', x);
}

module.exports = {
  error: error,
  warn: warn,
  info: info,
  trace: trace,
};

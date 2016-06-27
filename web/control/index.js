var dfault = {}
var state = {};

exports.reset = function reset(values) {
  dfault = values;
  state = { default: values };
}

exports.push = function push(key, values) {
  state[key] = values;
}

exports.getValues = function getValues() {
  return state
}

exports.getAverage = function getAverage() {
  throw new Error('getAverage not implemented');
}

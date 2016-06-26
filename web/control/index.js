var state;

exports.put = function put(x) {
  state = x;
}

exports.get = function get() {
  return state
}

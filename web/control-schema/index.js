var schema;

function put(x) {
  schema = x;
}

function get() {
  return schema
}

module.exports = {
  put: put,
  get: get,
}

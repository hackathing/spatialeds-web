var schema;

exports.put = function put(x) {
  schema = x;
}

exports.get = function get() {
  return schema
}

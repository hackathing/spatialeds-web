var schema = [
  {
    label: 'Shininess',
    key: 'shininess',
    type: 'range',
    max: 100,
    min: 0,
  },
  {
    label: 'Loudness',
    key: 'loudness',
    type: 'range',
    max: 11,
    min: 0,
  },
];

exports.put = function put(x) {
  schema = x;
}

exports.get = function get() {
  return schema
}

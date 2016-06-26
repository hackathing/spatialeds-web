const path = require('path');

exports.home = function home(req, res) {
  const filePath = path.join(__dirname, '..', '..', 'index.html');
  res.sendFile(filePath);
}

exports.js = function js(req, res) {
  const filePath = path.join(__dirname, '..', '..', 'client.js');
  res.sendFile(filePath);
}

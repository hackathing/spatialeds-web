const path = require('path');

function home(req, res) {
  const filePath = path.join(__dirname, '..', '..', 'index.html');
  res.sendFile(filePath);
}

module.exports = {
  home: home,
};

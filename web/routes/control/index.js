const controls = require('../../control');

exports.show = function show(req, res) {
  const data = controls.getValues(); // TODO: use average
  res.status(200).json({ controls: data })
}

exports.create = function create(req, res) {
  const data = req.body.controls;
  if (data) {
    controls.push(req.session.userID, data);
    res.status(201).json({ status: 'created' })
  } else {
    res.status(400).json({ error: 'controls not supplied' })
  }
}

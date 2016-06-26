const controls = require('../../../control');

exports.show = function show(req, res) {
  const data = controls.get();
  res.status(200).json({ controls: data })
}

exports.create = function create(req, res) {
  const data = req.body.controls;
  if (data) {
    controls.put(data);
    res.status(201).json({ status: 'created' })
  } else {
    res.status(400).json({ error: 'controls not supplied' })
  }
}

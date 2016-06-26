const controlSchema = require('../../control-schema');

exports.show = function show(req, res) {
  const schema = controlSchema.get(schema);
  res.status(200).json({ schema: schema })
}

exports.create = function create(req, res) {
  const schema = req.body.schema;
  if (schema) {
    controlSchema.put(schema);
    res.status(201).json({ status: 'created' })
  } else {
    res.status(400).json({ error: 'schema not supplied' })
  }
}

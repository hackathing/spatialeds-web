const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const page          = require('./page');
const controlSchema = require('./control-schema');
const control       = require('./control');

app.get('/', page.home);
app.post('/control-schema', controlSchema.create);
app.get('/control-schema', controlSchema.show);
app.post('/controls', control.create);
app.get('/controls', control.show);

module.exports = app;

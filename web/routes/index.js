const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const tagUserMiddleware = require('../middleware/tag-user');

const app = express();

app.use(bodyParser.json());
app.use(cookieSession({ keys: ["Hack me, I don't care."] }));
app.use(tagUserMiddleware);

const page          = require('./page');
const controlSchema = require('./control-schema');
const control       = require('./control');

app.get('/', page.home);
app.get('/main.js', page.js);
app.post('/control-schema', controlSchema.create);
app.get('/control-schema', controlSchema.show);
app.post('/controls', control.create);
app.get('/controls', control.show);

module.exports = app;

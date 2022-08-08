const express = require('express');
require('dotenv').config();
const { pong } = require('./controllers/pong.controller');

const app = express();

const { log } = console;

const PORT = process.env.PORT || 3000;

app.get('/ping', pong);

app.listen(PORT, () => log(`Listening port ${PORT}`));

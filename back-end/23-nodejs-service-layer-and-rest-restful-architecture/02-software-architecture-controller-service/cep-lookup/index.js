const express = require('express');
const { pong } = require('./controllers/pong.controller');

const app = express();

const { log } = console;

const PORT = 3000;

app.get('/ping', pong);

app.listen(PORT, () => log(`Listening port ${PORT}`));

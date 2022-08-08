const express = require('express');
require('dotenv').config();
const { pong } = require('./controllers/pongController');
const cepController = require('./controllers/cepController');

const app = express();

const { log } = console;

const PORT = process.env.PORT || 3000;

app.get('/ping', pong);
app.get('/cep/:cep', cepController.getAddress);

app.listen(PORT, () => log(`Listening port ${PORT}`));

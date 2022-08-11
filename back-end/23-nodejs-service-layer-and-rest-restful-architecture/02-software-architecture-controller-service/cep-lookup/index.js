const express = require('express');
require('dotenv').config();
const { pong } = require('./controllers/pongController');
const cepController = require('./controllers/cepController');
const { isAddressValid } = require('./middlewares/cepMiddleware');

const app = express();
app.use(express.json());

const { log } = console;

const PORT = process.env.PORT || 3000;

app.get('/ping', pong);
app.get('/cep/:cep', cepController.getAddress);
app.post('/cep', isAddressValid, cepController.createAddress);

app.listen(PORT, () => log(`Listening port ${PORT}`));

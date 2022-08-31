const express = require('express');

const bookController = require('./src/controllers/book.controller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', bookController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
const express = require('express');
const booksModel = require('./models/books');
const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/books', async (_req, res) => {
  try {
    const books = await booksModel.getAll();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err.message)
  }
});

app.listen(PORT, () => console.log(`Listening port ${PORT}`));
const express = require('express');
const booksModel = require('./models/books');
const app = express();
app.use(express.json());

const PORT = 3001;

app.get('/books', async (_req, res) => {
  try {
    const books = await booksModel.getAll();
    return res.status(200).json(books);
  } catch (err) {
    return res.status(500).json(err.message)
  }
});

app.get('/books/:authorId', async (req, res) => {
  const { authorId } = req.params;
  try {
    const booksByAuthorId = await booksModel.getByAuthorId(authorId);
    if(booksByAuthorId.length < 1) {
      return res.status(404).json({message: 'Not found'});
    }
    return res.status(200).json(booksByAuthorId);
  } catch (err) {
    return res.status(500).json(err.message)
  }
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  try {
    if(!booksModel.validateNewBook(title, author_id)) {
      return res.status(400).json({message: 'Dados inválidos'});
    }
    await booksModel.addBook(title, author_id)
    return res.status(201).json({message: 'Livro criado com sucesso!'});
  } catch (err) {
    res.status(500).json(err.message)
  }
});

app.listen(PORT, () => console.log(`Listening port ${PORT}`));

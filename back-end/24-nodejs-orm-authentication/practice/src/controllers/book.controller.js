const express = require('express');
const bookService = require('../services/book.service');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const books = await bookService.findAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

module.exports = router;
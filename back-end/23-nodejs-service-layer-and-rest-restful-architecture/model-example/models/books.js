const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.authorId,
});

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM model_example.books;');
  return books.map(serialize);
};

module.exports = { getAll };
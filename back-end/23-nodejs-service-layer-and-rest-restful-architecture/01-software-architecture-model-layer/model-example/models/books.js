const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM books;');
  return books.map(serialize);
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute('SELECT * FROM books WHERE author_id = ?;', [id]);
  return books.map(serialize);
};

module.exports = { getAll, getByAuthorId };
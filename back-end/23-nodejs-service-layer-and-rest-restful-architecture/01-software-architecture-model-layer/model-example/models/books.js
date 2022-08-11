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

const validateNewBook = async (title, authorId) => {
  if (!title || title.length < 3) return false;
	if (!authorId || (await getByAuthorId(authorId)).length === 0) return false;

	return true;

}

const addBook = async (title, authorId) => {
  await connection.execute(
    'INSERT INTO books (title, author_id) VALUES(?, ?);',
    [title, authorId],
  );
}

module.exports = {
  getAll,
  getByAuthorId,
  validateNewBook,
  addBook,
};
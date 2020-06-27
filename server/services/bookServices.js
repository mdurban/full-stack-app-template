const { createBook, getBooks, deleteAllBooks } = require('../repository/books')

const getAllBooks = async () => {
  deleteAllBooks()
  createBook()

  const books = await getBooks()
  const booksSortedByTitle = books.sort((a, b) => a.title > b.title ? 1 : -1)

  return booksSortedByTitle
}

module.exports = { getAllBooks }
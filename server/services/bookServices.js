const { createBook, getBooks, deleteAllBooks } = require('../repository/books')

const getAllBooks = async () => {
  deleteAllBooks()
  createBook()

  return await getBooks()
}

module.exports = { getAllBooks }
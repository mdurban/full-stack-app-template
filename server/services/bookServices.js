const { getBooks, addBook, deleteBookWithTitle } = require('../repository/books')

const getAllBooks = async () => {
  const books = await getBooks()
  const booksSortedByTitle = books.sort((a, b) => a.title > b.title ? 1 : -1)

  return booksSortedByTitle
}

const createNewBook = async ({ title, firstName, lastName }) => {
  await addBook(title, firstName, lastName)
}

const removeBook = async (title) => {
  console.log('in service layer with: ', title)
  await deleteBookWithTitle(title)
}

module.exports = { getAllBooks, createNewBook, removeBook }
const { database } = require('../database/db')

const getBooks = async () => {
  const data = await database.query('SELECT * FROM Books')

  return data.rows
}

const addBook = async (bookTitle, author_first_name, author_last_name) => {
  await database.query('insert into books (title, author_first_name, author_last_name) values ($1, $2, $3)', [bookTitle, author_first_name, author_last_name])
}

module.exports = { getBooks, addBook }
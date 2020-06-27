const { database } = require('../database/db')

const createBook = () => {
  database.query("insert into books (title, author_first_name, author_last_name) values ('The Lion, The Witch and The Wardrobe', 'C.S.', 'Lewis');")
  database.query("insert into books (title, author_first_name, author_last_name) values ('The Hobbit', 'J.R.R.', 'Tolkien');")
}

const getBooks = async () => {
  const data = await database.query('SELECT * FROM Books')

  return data.rows
}

const deleteAllBooks = () => {
  database.query("delete from books;")
}

module.exports = { createBook, getBooks, deleteAllBooks }
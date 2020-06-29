const { database } = require('../database/db')

const getBooks = async () => {
  const data = await database.query('SELECT * FROM Books')

  return data.rows
}

const addBook = async (bookTitle, author_first_name, author_last_name) => {
  await database.query(`insert into books (title, author_first_name, author_last_name) values ('${bookTitle}', '${author_first_name}', '${author_last_name}');`)
}

const deleteBookWithTitle = async (bookTitle) => {
  console.log('deleting in repository layer: ', bookTitle)
  await database.query(`delete from books where title = '${bookTitle}'`)
}

module.exports = { getBooks, addBook, deleteBookWithTitle }
const { database } = require('../database/db')

const getBooks = async () => {
  const data = await database.query('SELECT * FROM Books')

  return data.rows
}

const addBook = async (bookTitle, author_first_name, author_last_name) => {
  // const data = await database.query(`INSERT into Books (title, author_first_name, author_last_name) values (title, first_name, last_name)`)
  await database.query(`insert into books (title, author_first_name, author_last_name) values ('${bookTitle}', '${author_first_name}', '${author_last_name}');`)
  // console.log('from save: ', data)
  console.log('adding book...')
}

module.exports = { getBooks, addBook }
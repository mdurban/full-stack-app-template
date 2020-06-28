const { Client } = require('pg')

const database = new Client({
  user: 'username',
  host: 'localhost',
  database: 'postgresdb',
  port: 5432,
})

const initializeDatabaseWithSampleData = database => {
  database.query("delete from books;")
  database.query("insert into books (title, author_first_name, author_last_name) values ('The Lion, The Witch and The Wardrobe', 'C.S.', 'Lewis');")
  database.query("insert into books (title, author_first_name, author_last_name) values ('The Hobbit', 'J.R.R.', 'Tolkien');")
}

module.exports = { database, initializeDatabaseWithSampleData }
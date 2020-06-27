const { database } = require('../database/db')

const getBooks = async () => {
  const data = await database.query('SELECT * FROM Books')

  return data.rows
}
module.exports = { getBooks }
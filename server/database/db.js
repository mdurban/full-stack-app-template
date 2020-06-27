const { Client } = require('pg')

const database = new Client({
  user: 'username',
  host: 'localhost',
  database: 'postgresdb',
  port: 5432,
})

module.exports = { database }
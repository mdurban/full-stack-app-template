const express = require('express')
const cors = require('cors')
const { database } = require('./database/db')
const { createBook, getBooks, deleteAllBooks } = require('./repository/books')
const bookRoutes = require('./routes/bookRoutes')

const app = express()

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`))

database.connect()

app.use(cors())

app.use('/books', bookRoutes)
const express = require('express')
const cors = require('cors')
const { database } = require('./database/db')
const { createBook, getBooks, deleteAllBooks } = require('./repository/books')
const bookRoutes = require('./routes/bookRoutes')

const app = express()

database.connect()

const port = process.env.PORT || 5000


app.use(cors())
app.listen(port, () => console.log(`Listening on port ${port}`))

// createBook()
// getBooks()
// deleteAllBooks()
// getBooks()

// app.use('/express_backend', bookRoutes)
app.use('/books', bookRoutes)
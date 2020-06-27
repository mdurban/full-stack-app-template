const express = require('express');
const router = express.Router();
const { createBook, getBooks, deleteAllBooks } = require('../repository/books')

router.get('/', async (req, res) => {
  deleteAllBooks()
  createBook()

  const books = await getBooks()

  res.send(books)
})

module.exports = router
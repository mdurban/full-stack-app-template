const { getAllBooks, createNewBook } = require('../services/bookServices')
const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await getAllBooks())
})

router.post('/', async (req, res) => {
  const newBook = await createNewBook(req.body)

  res.send(newBook)
})

module.exports = router
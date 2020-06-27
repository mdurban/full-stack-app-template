const { getAllBooks, createNewBook } = require('../services/bookServices')
const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await getAllBooks())
})

router.post('/', async (req, res) => {
  await createNewBook(req.body)

  res.sendStatus(200);
})

module.exports = router
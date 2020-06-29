const { getAllBooks, createNewBook, removeBook } = require('../services/bookServices')
const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await getAllBooks())
})

router.post('/', async (req, res) => {
  await createNewBook(req.body)

  res.sendStatus(200);
})

router.delete('/:id', async (req, res) => {
  console.log('removing ', req.params.id)
  await removeBook(req.params.id)

  res.sendStatus(200);
})

module.exports = router
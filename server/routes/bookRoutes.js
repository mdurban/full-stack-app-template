const { getAllBooks } = require('../services/bookServices')
const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await getAllBooks())
})

module.exports = router
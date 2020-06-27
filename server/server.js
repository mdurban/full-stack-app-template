const express = require('express')
const cors = require('cors')
const { database, initializeDatabaseWithSampleData } = require('./database/db')
const bookRoutes = require('./routes/bookRoutes')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`))

database.connect()
initializeDatabaseWithSampleData(database)

app.use(cors())

app.use('/books', bookRoutes)
var express = require('express')
var cors = require('cors')
var bodyparser = require('body-parser')
const db = require('./db')
const userRouter = require('./routes/userRouter')

var app = express()
var port = process.env.PORT || 9999

db()
app.use(express.static('assets'))
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`listening on ${port}`)
})

const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json());

// app.use(bodyParser.urlencoded({
//   extended: true 
// }))

consign()
  .include('./config/database.js')
  .then('./models')
  .then('./routes')
  .into(app)

module.exports = app
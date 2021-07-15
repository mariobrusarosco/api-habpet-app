const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
  name: String,
  description: String
})

module.exports = petSchema

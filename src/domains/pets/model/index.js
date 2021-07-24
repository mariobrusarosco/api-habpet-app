const mongoose = require('mongoose')
const petSchema = require('./schema')

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet

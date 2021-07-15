const mongoose = require('mongoose')
const petsSchema = require('./schema')

const Pets = mongoose.model('Pets', petsSchema)

module.exports = Pets

const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
  // id: String,
  pictureMoods: {
   level0 : String,
   level1 : String,
   level2 : String,
   level3 : String,
   level4 : String,
   level5 : String
  }
})

module.exports = petSchema

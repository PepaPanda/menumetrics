const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false, // disables `__v`
  }
)

module.exports = mongoose.model('Restaurant', RestaurantSchema)

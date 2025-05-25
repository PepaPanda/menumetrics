//Models
const Restaurant = require('../../models/restaurant')

//Helpers
const errorResponseHelper = require('../../helpers/errorResponse.helper')

//Messages
const errors = require('../../texts/errors')

//DB service. Expects already validated input from ZOD, returns error obj. or the requested DB entity
const getRestaurantService = async (id) => {
  const restaurant = await Restaurant.findById(id)
  if (!restaurant) return errorResponseHelper(errors.restaurant.notFound(id), 404)
  return restaurant
}

module.exports = getRestaurantService

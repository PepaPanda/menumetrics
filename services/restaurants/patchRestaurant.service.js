//Models
const Restaurant = require('../../models/restaurant')

//Helpers
const errorResponseHelper = require('../../helpers/errorResponse.helper')

//Messages
const errors = require('../../texts/errors')

//DB service. Expects already validated input from ZOD, returns error obj. or the patched DB entry
const patchRestaurantService = async (id, data) => {
  //Check if another restaurant has the same address
  const { address } = data
  const restaurantsWithTheSameAddress = await Restaurant.findOne({
    _id: { $ne: id },
    address: new RegExp(address, 'i'),
  })
  if (restaurantsWithTheSameAddress)
    return errorResponseHelper(
      errors.restaurant.sameAddressExists(address, restaurantsWithTheSameAddress.name),
      422
    )

  const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, { $set: data }, { new: true })
  if (!updatedRestaurant) return errorResponseHelper(errors.restaurant.notFound(id), 404)
  return updatedRestaurant
}

module.exports = patchRestaurantService

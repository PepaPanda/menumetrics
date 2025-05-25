//Models
const Restaurant = require('../../models/restaurant')

//Helpers
const errorResponseHelper = require('../../helpers/errorResponse.helper')

//Messages
const errors = require('../../texts/errors')

//DB service. Expects already validated input from ZOD, returns the created DB entry
const postRestaurantService = async (data) => {
  //Check if another restaurant has the same address
  const { address } = data
  const restaurantsWithTheSameAddress = await Restaurant.findOne({
    address: new RegExp(address, 'i'),
  })
  if (restaurantsWithTheSameAddress)
    return errorResponseHelper(
      errors.restaurant.sameAddressExists(address, restaurantsWithTheSameAddress.name),
      422
    )

  const newRestaurant = await new Restaurant(data).save()
  return newRestaurant
}

module.exports = postRestaurantService

// This duplicate validation is very basic. Would be cool to implement this: https://developer.mapy.cz/rest-api/funkce/geokodovani/
// but it's not in my use case/business description and I'm also lazy to do it now
// So I'm just gonna let this keyword here "TO DO" for my future-self :)

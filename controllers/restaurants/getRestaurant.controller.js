//Services
const getRestaurantService = require('../../services/restaurants/getRestaurant.service')

//Helpers
const isIdValidHelper = require('../../helpers/isIdValid.helper')
const getDataFromReqHelper = require('../../helpers/getDataFromReq.helper')

//texts
const errors = require('../../texts/errors')

const getRestaurantController = async (req, res) => {
  const { id } = getDataFromReqHelper(req)

  //Id from params validation
  if (!isIdValidHelper(id))
    return res.status(422).json({ error: errors.restaurant.notFoundInvalidIdFormat(id) })

  //Call DB service
  try {
    const restaurant = await getRestaurantService(id)
    if (restaurant.error)
      return res.status(restaurant.error.status).json({ error: restaurant.error.message })
    res.json(restaurant)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports = getRestaurantController

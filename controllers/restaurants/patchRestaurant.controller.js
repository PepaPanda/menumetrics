//Services
const patchRestaurantService = require('../../services/restaurants/patchRestaurant.service')

//Helpers
const isIdValidHelper = require('../../helpers/isIdValid.helper')
const getDataFromReqHelper = require('../../helpers/getDataFromReq.helper')
const validateBodyHelper = require('../../helpers/validateBody.helper')

//texts
const errors = require('../../texts/errors')

const patchRestaurantController = async (req, res) => {
  const { id, body } = getDataFromReqHelper(req)

  //Id from params validation
  if (!isIdValidHelper(id))
    return res.status(422).json({ error: errors.restaurant.notFoundInvalidIdFormat(id) })

  //Body Validation
  const { success, data, error } = validateBodyHelper(body, 'restaurant')
  if (!success) return res.status(422).json({ error: error })

  //Call DB service
  try {
    const updatedRestaurant = await patchRestaurantService(id, data)
    if (updatedRestaurant.error)
      return res
        .status(updatedRestaurant.error.status)
        .json({ error: updatedRestaurant.error.message })

    res.json(updatedRestaurant)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports = patchRestaurantController

//Services
const postMenuItemService = require('../../services/menuitems/postMenuItem.service')

//Helpers
const isIdValidHelper = require('../../helpers/isIdValid.helper')
const getDataFromReqHelper = require('../../helpers/getDataFromReq.helper')
const validateBodyHelper = require('../../helpers/validateBody.helper')

//texts
const errors = require('../../texts/errors')

const postMenuItemController = async (req, res) => {
  const { body, restaurantId } = getDataFromReqHelper(req)

  //Body validation
  const { success, data, error } = validateBodyHelper(body, 'menuItemWithRestaurantId')
  if (!success) return res.status(422).json({ error: error })

  //RestaurantId validation
  if (!isIdValidHelper(restaurantId))
    return res.status(422).json({ error: errors.restaurant.notFoundInvalidIdFormat(restaurantId) })

  //Call DB service
  try {
    const newMenuItem = await postMenuItemService(data)
    if (newMenuItem.error)
      return res.status(newMenuItem.error.status).json({ error: newMenuItem.error.message })
    res.status(201).json(newMenuItem)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports = postMenuItemController

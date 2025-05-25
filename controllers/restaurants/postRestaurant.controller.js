//Services
const postRestaurantService = require('../../services/restaurants/postRestaurant.service')

//Helpers
const getDataFromReqHelper = require('../../helpers/getDataFromReq.helper')
const validateBodyHelper = require('../../helpers/validateBody.helper')

const postRestaurantController = async (req, res) => {
  const { body } = getDataFromReqHelper(req)

  //Body validation
  const { success, data, error } = validateBodyHelper(body, 'restaurant')
  if (!success) return res.status(422).json({ error: error })

  try {
    const newRestaurant = await postRestaurantService(data)
    if (newRestaurant.error)
      return res.status(newRestaurant.error.status).json({ error: newRestaurant.error.message })
    res.status(201).json(newRestaurant)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports = postRestaurantController

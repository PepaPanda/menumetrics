//Services
const getAllRestaurantsService = require('../../services/restaurants/getAllRestaurants.service')

const getAllRestaurantsController = async (req, res) => {
  try {
    const restaurants = await getAllRestaurantsService()
    res.json(restaurants)
  } catch (e) {
    res.send(500).json({ message: e.message })
  }
}

module.exports = getAllRestaurantsController

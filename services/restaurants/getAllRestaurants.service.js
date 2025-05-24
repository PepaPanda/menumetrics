//Models
const Restaurant = require("../../models/restaurant")

//DB service. Returns the requested DB entities
const getAllRestaurantsService = async () => {
    const restaurants = await Restaurant.find()
    return restaurants
}

module.exports = getAllRestaurantsService
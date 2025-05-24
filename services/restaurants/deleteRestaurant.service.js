//Models
const Restaurant = require("../../models/restaurant")
const MenuItem = require("../../models/menuitem")

//Helpers
const errorResponseHelper = require("../../helpers/errorResponse.helper")

//texts
const errors = require("../../texts/errors")

//DB service. Expects already validated input from ZOD, 
//Returns error obj. or the deleted DB entry along with all deleted related records (menuItems)
const deleteRestaurantService = async (id) => {

    //First, delete all related menuItems
    const deletedRelatedMenuItems = await MenuItem.deleteMany({restaurantId: id})

    //Then continue deleting the restaurant
    const deletedRestaurant = await Restaurant.findByIdAndDelete(id)
    if (!deletedRestaurant)
        return errorResponseHelper(errors.restaurant.notFound(id), 404)
    return {
        deletedRestaurant,
        deletedRelatedMenuItems
    }
}

module.exports = deleteRestaurantService
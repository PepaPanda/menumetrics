//Models
const MenuItem = require("../../models/menuitem");
const Restaurant = require("../../models/restaurant");

//Helpers
const errorResponseHelper = require("../../helpers/errorResponse.helper")

//texts
const errors = require("../../texts/errors")

//DB service. Expects already validated input from ZOD, returns error obj. or new DB entry
const postMenuItemService = async (data) => {
    const { restaurantId } = data;

        const linkedRestaurant = await Restaurant.findById(restaurantId);
        if(!linkedRestaurant) 
            return errorResponseHelper(errors.restaurant.notFound(restaurantId), 422)

        const newMenuItem = await (new MenuItem(data)).save()
        return newMenuItem
}

module.exports = postMenuItemService
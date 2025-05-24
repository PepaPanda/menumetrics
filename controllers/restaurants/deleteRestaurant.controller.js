//Services
const deleteRestaurantService = require("../../services/restaurants/deleteRestaurant.service")

//Helpers
const isIdValidHelper = require("../../helpers/isIdValid.helper")
const getDataFromReqHelper = require("../../helpers/getDataFromReq.helper")

//texts
const errors = require("../../texts/errors")

const deleteRestaurantController = async (req, res) => {
    const { id } = getDataFromReqHelper(req)

    //Id from params validation
    if (!isIdValidHelper(id)) {
        return res.status(422).json({error: errors.restaurant.notFoundInvalidIdFormat(id)})
    }
    
    //Call DB service
    try {
        const deletedRestaurant = await deleteRestaurantService(id)
        if(deletedRestaurant.error) 
            return res.status(deletedRestaurant.error.status).json({error: deletedRestaurant.error.message})
        res.json(deletedRestaurant);
    } catch(e) {
        res.status(500).json({ message: e.message })
    }

}

module.exports = deleteRestaurantController;
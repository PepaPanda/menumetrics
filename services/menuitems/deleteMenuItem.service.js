//Models
const MenuItem = require("../../models/menuitem")

//Helpers
const errorResponseHelper = require("../../helpers/errorResponse.helper")

//texts
const errors = require("../../texts/errors")

//DB service. Expects already validated input from ZOD, returns error obj. or the deleted DB entity
const deleteMenuItemService = async (id) => {
        const deletedMenuItem = await MenuItem.findByIdAndDelete(id)
        if(!deletedMenuItem)
            return errorResponseHelper(errors.menuItem.notFound(id), 404)

        return deletedMenuItem
}

module.exports = deleteMenuItemService
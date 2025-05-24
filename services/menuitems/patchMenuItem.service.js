//Models
const MenuItem = require("../../models/menuitem")

//Helpers
const errorResponseHelper = require("../../helpers/errorResponse.helper")

//texts
const errors = require("../../texts/errors")

//DB service. Expects already validated input from ZOD, returns error obj. or patched DB entry
const patchMenuItemService = async (id, data) => {
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(id, {$set: data}, {new: true})
        if(!updatedMenuItem)
            return errorResponseHelper(errors.menuItem.notFound(id), 404)

        return updatedMenuItem
}

module.exports = patchMenuItemService
//Models
const MenuItem = require('../../models/menuitem')

//Helpers
const errorResponseHelper = require('../../helpers/errorResponse.helper')

//texts
const errors = require('../../texts/errors')

//DB service. Expects already validated input from ZOD, returns error obj. or the requested DB entity
const getMenuItemService = async (id) => {
  const menuItem = await MenuItem.findById(id)
  if (!menuItem) return errorResponseHelper(errors.menuItem.notFound(id), 404)
  return menuItem
}

module.exports = getMenuItemService

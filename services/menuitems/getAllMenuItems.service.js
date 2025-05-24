//Models
const MenuItem = require("../../models/menuitem")

//DB service. Returns the requested DB entities
const getAllMenuItemsService = async () => {
    const menuItems = await MenuItem.find();
    return menuItems
}

module.exports = getAllMenuItemsService
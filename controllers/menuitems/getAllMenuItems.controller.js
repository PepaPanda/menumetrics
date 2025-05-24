//Services
const getAllMenuItemsService = require("../../services/menuitems/getAllMenuItems.service")

const getAllMenuItemsController = async (req, res) => {
    try {
        const menuItems = await getAllMenuItemsService();
        res.json(menuItems);
    } catch(e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports = getAllMenuItemsController;
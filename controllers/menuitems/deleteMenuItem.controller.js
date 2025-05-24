//Services
const deleteMenuItemService = require("../../services/menuitems/deleteMenuItem.service")

//Helpers
const isIdValidHelper = require("../../helpers/isIdValid.helper")
const getDataFromReqHelper = require("../../helpers/getDataFromReq.helper")

//texts
const errors = require("../../texts/errors")

const deleteMenuItemController = async (req, res) => {
    const { id } = getDataFromReqHelper(req)

    //Id from params validation
    if (!isIdValidHelper(id))
        return res.status(422).json({error: errors.menuItem.notFoundInvalidIdFormat(id)})
    
    //Call DB service
    try {
        const deletedMenuItem = await deleteMenuItemService(id)
        if(deletedMenuItem.error)
            return res.status(deletedMenuItem.error.status).json({error: deletedMenuItem.error.message})
        res.json(deletedMenuItem);
    } catch(e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports = deleteMenuItemController;
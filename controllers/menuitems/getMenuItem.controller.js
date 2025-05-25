//Services
const getMenuItemService = require('../../services/menuitems/getMenuItem.service')

//Helpers
const isIdValidHelper = require('../../helpers/isIdValid.helper')
const getDataFromReqHelper = require('../../helpers/getDataFromReq.helper')

//texts
const errors = require('../../texts/errors')

const getMenuItemController = async (req, res) => {
  const { id } = getDataFromReqHelper(req)

  //Id from params validation
  if (!isIdValidHelper(id)) {
    return res.status(400).json({ error: errors.menuItem.notFoundInvalidIdFormat(id) })
  }

  //Call DB service
  try {
    const menuItem = await getMenuItemService(id)
    if (menuItem.error)
      return res.status(menuItem.error.status).json({ error: menuItem.error.message })
    res.json(menuItem)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports = getMenuItemController

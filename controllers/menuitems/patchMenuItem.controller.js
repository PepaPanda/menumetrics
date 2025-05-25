//Services
const patchMenuItemService = require('../../services/menuitems/patchMenuItem.service')

//Helpers
const isIdValidHelper = require('../../helpers/isIdValid.helper')
const getDataFromReqHelper = require('../../helpers/getDataFromReq.helper')
const validateBodyHelper = require('../../helpers/validateBody.helper')

//texts
const errors = require('../../texts/errors')

const patchMenuItemController = async (req, res) => {
  const { id, body } = getDataFromReqHelper(req)

  //Id from params validation
  if (!isIdValidHelper(id))
    return res.status(422).json({ error: errors.menuItem.notFoundInvalidIdFormat(id) })

  //Body Validation
  const { success, data, error } = validateBodyHelper(body, 'menuItem')
  if (!success) return res.status(422).json({ error: error })

  //Call DB service
  try {
    const updatedMenuItem = await patchMenuItemService(id, data)
    if (updatedMenuItem.error)
      return res.status(updatedMenuItem.error.status).json({ error: updatedMenuItem.error.message })
    res.json(updatedMenuItem)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports = patchMenuItemController

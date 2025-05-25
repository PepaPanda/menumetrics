//Modules
const express = require('express')
const router = express.Router()

//Controllers
const getMenuItemController = require('../controllers/menuitems/getMenuItem.controller')
const getAllMenuItemsController = require('../controllers/menuitems/getAllMenuItems.controller')
const postMenuItemController = require('../controllers/menuitems/postMenuItem.controller')
const patchMenuItemController = require('../controllers/menuitems/patchMenuItem.controller')
const deleteMenuItemController = require('../controllers/menuitems/deleteMenuItem.controller')

//GET all
router.get('/', getAllMenuItemsController)

//Get one
router.get('/:id', getMenuItemController)

//POST one
router.post('/', postMenuItemController)

//PATCH one
router.patch('/:id', patchMenuItemController)

//Delete one
router.delete('/:id', deleteMenuItemController)

module.exports = router

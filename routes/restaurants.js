//Modules
const express = require('express')
const router = express.Router()

//Controllers
const getRestaurantController = require('../controllers/restaurants/getRestaurant.controller')
const getAllRestaurantsController = require('../controllers/restaurants/getAllRestaurants.controller')
const postRestaurantController = require('../controllers/restaurants/postRestaurant.controller')
const patchRestaurantController = require('../controllers/restaurants/patchRestaurant.controller')
const deleteRestaurantController = require('../controllers/restaurants/deleteRestaurant.controller')

//GET all
router.get('/', getAllRestaurantsController)

//GET one
router.get('/:id', getRestaurantController)

//POST one
router.post('/', postRestaurantController)

//PATCH one
router.patch('/:id', patchRestaurantController)

//DELETE one
router.delete('/:id', deleteRestaurantController) //TO DO - add parameter to optionally list deleted menuItems

module.exports = router

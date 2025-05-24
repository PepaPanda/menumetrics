const mongoose = require("mongoose");


const RestaurantModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Restaurant", RestaurantModel)
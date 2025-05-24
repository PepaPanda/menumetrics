//Modules
const mongoose = require("mongoose");


const menuitemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    restaurantId: {
        type: String,
        required: true
    },
    rating: {
        type: Boolean,
        default:null
    },
    carbohydrates: {
        type: Number,
        default:null
    },
    sugars: {
        type: Number,
        default:null
    },
    fats: {
        type: Number,
        default:null
    },
    proteins: {
        type: Number,
        default:null
    },
    salts: {
        type: Number,
         default:null
    },
    fiber: {
        type: Number,
        default:null
    },
})

module.exports = mongoose.model("MenuItem", menuitemSchema)
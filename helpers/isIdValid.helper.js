//Modules
const mongoose = require('mongoose')

const isIdValidHelper = (id) => mongoose.Types.ObjectId.isValid(id)

module.exports = isIdValidHelper

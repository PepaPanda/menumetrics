//Schemes
const validationSchemas = require('../validation/schemas')

//Helpers
const isStringEmptyHelper = require('../helpers/isStringEmpty.helper')

//Constructor
const Validation = (success, data, error) => ({
  success,
  data,
  error,
})

//Uses ZOD validation - same principles
//success: bool; data: valid data that could be changed from input; error: error message
const validateBodyHelper = (body, schema) => {
  if (!body) return Validation(false, null, 'Body must not be empty')

  if (!schema || isStringEmptyHelper(schema))
    return Validation(false, null, 'An unknown error has occured')

  const validation = validationSchemas[schema]?.safeParse(body)
  return Validation(validation.success, validation.data, validation.error?.format())
}

module.exports = validateBodyHelper

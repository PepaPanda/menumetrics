const errorResponseHelper = (message, status = 400) => ({error: { message, status }})

module.exports = errorResponseHelper
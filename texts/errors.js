module.exports = {
    menuItem: {
        notFound: (id) => `The menu item with "${id}" was not found.`,
        notFoundInvalidIdFormat: (id) => `Menu item could not be found. Given id "${id}" has invalid format.`
    },
    restaurant: {
        notFound: (id) => `The restaurant with "${id}" was not found.`,
        notFoundInvalidIdFormat: (id) => `Restaurant could not be found. Given id "${id}" has invalid format.`,
        sameAddressExists: (address, alreadyExistingRestaurantName) => 
            `There is already a restaurant with the same address: "${address}". The name is "${alreadyExistingRestaurantName}".`
    }

}
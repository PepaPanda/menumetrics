const { z } = require('zod')

//For Patching
const menuItem = z.object({
  name: z.string().nonempty(),
  rating: z.boolean().optional().nullable(),
  carbohydrates: z.number().optional().nullable(),
  sugars: z.number().optional().nullable(),
  fats: z.number().optional().nullable(),
  proteins: z.number().optional().nullable(),
  salts: z.number().optional().nullable(),
  fiber: z.number().optional().nullable(),
})

//For Posting
const menuItemWithRestaurantId = menuItem.extend({
  restaurantId: z.string().nonempty(),
})

//For Posting & patching
const restaurant = z.object({
  name: z.string().nonempty(),
  address: z.string().nonempty(),
})

module.exports = {
  menuItem,
  menuItemWithRestaurantId,
  restaurant,
}

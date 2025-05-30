require('dotenv').config()

//Modules
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

//Init
const dbUrl = process.env.DATABASE_URL || 'mongodb://localhost/menumetrics'
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('connected to DB')
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })

app.use(express.json())
if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: 'http://localhost:5173' })); //Allow requests from vite dev server in development mode
}

//Menu items
const menuItemsRouter = require('./routes/menuitems')
app.use('/menuitems', menuItemsRouter)

//Restaurants
const restautantsRouter = require('./routes/restaurants')
app.use('/restaurants', restautantsRouter)

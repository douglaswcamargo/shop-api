import CategoryController from '../controllers/CategoryController'
import ItemController from '../controllers/ItemController'
import OrderController from '../controllers/OrderController'
import express from 'express'

const routes = express.Router()

// Category routes
routes.get('/categories', CategoryController.index)

// Item routes
routes.get('/items', ItemController.index)

// Order routes
routes.post('/orders', OrderController.create)

export default routes

import CategoryController from '../controllers/CategoryController'
import ItemController from '../controllers/ItemController'
import OrderController from '../controllers/OrderController'
import express, { Request, Response } from 'express'

const routes = express.Router()

// Category routes
routes.get('/categories', CategoryController.index)

// Item routes
routes.get('/items', ItemController.index)

// Order routes
routes.post('/orders', OrderController.create)

// Defaults to Not Found error
routes.get('*', (req: Request, res: Response) => res.status(404).json('Not found'))

export default routes

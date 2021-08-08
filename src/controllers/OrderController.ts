import Order from '../database/models/order'
import { Request, Response, NextFunction } from 'express'

const OrderController = {
  create (req: Request, res: Response, next: NextFunction) {
    Order
      .create(req.body, { include: ['items', 'payment'] })
      .then(order => res.json(order))
      .catch(error => next(error))
  }
}

export default OrderController

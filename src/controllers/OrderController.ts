import Order from '../database/models/order'
import { Request, Response, NextFunction } from 'express'
import { getMissingFieldErrorMessage } from '../utils'

const OrderController = {
  create (req: Request, res: Response, next: NextFunction) {
    if (!req.body.items) {
      return res.status(400).json(getMissingFieldErrorMessage('items'))
    }

    if (!req.body.payment) {
      return res.status(400).json(getMissingFieldErrorMessage('payment'))
    }

    Order
      .create(req.body, { include: ['items', 'payment'] })
      .then(order => res.json(order))
      .catch((error: Error) => {
        console.log(error.message)
        return res.status(500).json({
          status: 'error',
          message: 'Internal Server Error. It was not possible to create the order.'
        })
      })
  }
}

export default OrderController

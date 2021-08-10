import Item from '../database/models/item'
import Category from '../database/models/category'
import { Request, Response, NextFunction } from 'express'

const ItemController = {
  index (req: Request, res: Response, next: NextFunction) {
    Category
      .findAll({ include: Item })
      .then(items => res.json(items))
      .catch((error: Error) => {
        console.log(error.message)
        return res.status(500).json({
          status: 'error',
          message: 'Internal Server Error.'
        })
      })
  }
}

export default ItemController

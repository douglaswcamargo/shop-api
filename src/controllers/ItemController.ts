import Item from '../database/models/item'
import { Request, Response, NextFunction } from 'express'

const ItemController = {
  index (req: Request, res: Response, next: NextFunction) {
    Item
      .findAll()
      .then(items => res.json(items))
      .catch(error => next(error))
  }
}

export default ItemController

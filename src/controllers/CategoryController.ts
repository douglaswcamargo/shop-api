import Category from '../database/models/category'
import { Request, Response, NextFunction } from 'express'

const CategoryController = {
  index (req: Request, res: Response, next: NextFunction) {
    Category
      .findAll()
      .then(categories => res.json(categories))
      .catch(error => next(error))
  }
}

export default CategoryController

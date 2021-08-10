import Category from '../database/models/category'
import { Request, Response, NextFunction } from 'express'

const CategoryController = {
  index (req: Request, res: Response, next: NextFunction) {
    Category
      .findAll()
      .then(categories => res.json(categories))
      .catch((error: Error) => {
        console.log(error.message)
        return res.status(500).json({
          status: 'error',
          message: 'Internal Server Error.'
        })
      })
  }
}

export default CategoryController

import Category from '../database/models/category'
import { Request, Response, NextFunction } from 'express'

const CategoryController = {
  /**
   * Returns a list with all categories
   * @param  {Request} req
   * @param  {Response} res
   * @param  {NextFunction} next
   */
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

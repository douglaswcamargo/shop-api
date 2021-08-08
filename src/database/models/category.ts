import { Model, DataTypes, Optional } from 'sequelize'
import { sequelize } from '.'
import Item from './item'

interface CategoryAttributes {
  id: number
  name: string
  image_id: string
}

/*
*  In some cases we might want to explicitly define the ID,
*  instead of using the auto increment, so we make it optional
*/
interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, 'id'> {}

interface CategoryInstance
  extends Model<CategoryAttributes, CategoryCreationAttributes>,
  CategoryAttributes {
  createdAt?: Date
  updatedAt?: Date
}

const Category = sequelize.define<CategoryInstance>(
  'Category',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    image_id: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }
)

/*
*  Define the model relation to reflect the DB
*/
Category.hasMany(Item, {
  sourceKey: 'id',
  foreignKey: 'category_id'
})

Item.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category'
})

export default Category

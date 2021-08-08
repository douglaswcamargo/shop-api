import { Model, DataTypes, Optional } from 'sequelize'
import { sequelize } from '.'
import OrderItem from './orderItem'

interface ItemAttributes {
  id: number
  category_id: number
  name: string
  image_id: string
  price: number
}

/*
*  In some cases we might want to explicitly define the ID,
*  instead of using the auto increment, so we make it optional
*/
interface ItemCreationAttributes
  extends Optional<ItemAttributes, 'id'> {}

interface ItemInstance
  extends Model<ItemAttributes, ItemCreationAttributes>,
  ItemAttributes {
  createdAt?: Date
  updatedAt?: Date
}

const Item = sequelize.define<ItemInstance>(
  'Item',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    category_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    image_id: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    price: {
      allowNull: true,
      type: DataTypes.FLOAT
    }
  }
)

/*
*  Define the model relation to reflect the DB
*/
Item.hasMany(OrderItem, {
  sourceKey: 'id',
  foreignKey: 'item_id'
})

OrderItem.belongsTo(Item, {
  foreignKey: 'item_id',
  as: 'item'
})

export default Item

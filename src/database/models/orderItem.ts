import { Model, DataTypes } from 'sequelize'
import { sequelize } from '.'

interface OrderItemAttributes {
  id: number
  order_id: number
  item_id: number
  total: number
}

interface OrderItemInstance
  extends Model<OrderItemAttributes>,
  OrderItemAttributes {
  createdAt?: Date
  updatedAt?: Date
}

const OrderItem = sequelize.define<OrderItemInstance>(
  'OrderItem',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    order_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    item_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    total: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }
)

export default OrderItem

import { Model, DataTypes } from 'sequelize'
import { sequelize } from '.'
import OrderItem from './orderItem'
import Payment from './payment'

interface OrderAttributes {
  id: number
  email: string
}

interface OrderInstance
  extends Model<OrderAttributes>,
  OrderAttributes {
  createdAt?: Date
  updatedAt?: Date
}

const Order = sequelize.define<OrderInstance>(
  'Order',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }
)

/*
*  Define the model relation to reflect the DB
*/
Order.hasMany(OrderItem, {
  sourceKey: 'id',
  foreignKey: 'order_id',
  as: 'items'
})

Order.hasMany(Payment, {
  sourceKey: 'id',
  foreignKey: 'order_id',
  as: 'payment'
})

Payment.belongsTo(Order, {
  foreignKey: 'order_id',
  as: 'order'
})

OrderItem.belongsTo(Order, {
  foreignKey: 'order_id',
  as: 'order'
})

export default Order

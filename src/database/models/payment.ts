import { Model, DataTypes } from 'sequelize'
import { sequelize } from '.'

interface PaymentAttributes {
  id: number
  order_id: number
  name: string
  card_number: string
  cvv: string
}

interface PaymentInstance
  extends Model<PaymentAttributes>,
  PaymentAttributes {
  createdAt?: Date
  updatedAt?: Date
}

const Payment = sequelize.define<PaymentInstance>(
  'Payment',
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
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    card_number: {
      allowNull: false,
      type: DataTypes.STRING
    },
    cvv: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }
)

export default Payment

import { Sequelize } from 'sequelize'
import config from '../../config/db.config'

const {
  database,
  username,
  password
} = config

const sequelize = new Sequelize(database, username, password, config)

export { Sequelize, sequelize }

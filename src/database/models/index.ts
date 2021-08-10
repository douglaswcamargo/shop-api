import { Sequelize } from 'sequelize'
const config = require('../../config/db.config')

const {
  database,
  username,
  password
} = config

const sequelize = new Sequelize(database, username, password, config)

export { Sequelize, sequelize }

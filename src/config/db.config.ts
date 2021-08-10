import { Dialect } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

interface DbConfig {
  database: string
  username: string
  password: string
  host: string
  port: number
  dialect: Dialect
}
const dbPort = process.env.DB_PORT && !isNaN(Number(process.env.DB_PORT))
  ? +(process.env.DB_PORT)
  : 3306

const config: DbConfig = {
  database: process.env.DB_NAME ?? 'database_development',
  username: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  host: process.env.DB_HOST ?? '127.0.0.1',
  port: dbPort,
  dialect: 'mysql'
}

module.exports = config

import routes from './routes'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const app = express()
const PORT = process.env.SHOP_API_PORT ?? 3333

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.listen(PORT, () => console.log(`Shop API started on port ${PORT}.`))

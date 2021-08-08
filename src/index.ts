import routes from './routes'

const express = require('express')
const app = express()
const PORT = process.env.SHOP_API_PORT ?? 3333

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.listen(PORT, () => console.log(`Shop API started on port ${PORT}.`))

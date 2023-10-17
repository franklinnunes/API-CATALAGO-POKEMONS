const express = require('express')
const router = require('./router')

const app = express()
const PORTA = 3000

app.use(express.json())
app.use(router)

app.listen(PORTA, () => console.log(`Server running on port ${PORTA}`))

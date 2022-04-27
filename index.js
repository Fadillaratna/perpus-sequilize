const express = require('express')
const homeRouter = require('./routes/home') // <--
const authRouter = require('./routes/auth') // <--

const app = express()
app.use(express.json()) // <--

app.use('/', homeRouter) // <--
app.use('/', authRouter) // <--

app.listen(1000, function () {
    console.log('aplikasi berjalan pada port 1000')
})
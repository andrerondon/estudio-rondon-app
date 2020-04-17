const express = require('express')
const welcomeRouter = require('./routes/index')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs') 
app.set('views', 'views')

app.use('/', welcomeRouter)

const DOMAIN = '0.0.0.0'
const PORT = process.env.PORT || 3000;

app.listen(PORT, DOMAIN, () => {

  console.log(`Server is listening on ${DOMAIN}:${PORT}`)
})

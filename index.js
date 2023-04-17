//modules & globals
require('dotenv').config()
const express = require('express')
const app = express()

//define the view engine  - views
app.set('views', __dirname + "/views")

//controllers
app.use('/design', require('./controllers/design')) -- //import design.js


//Routes

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>You have reach a 404</h1>')
})

app.listen(process.env.PORT, () => {
    try {
    console.log('You Rock')
    } catch (err) {
        console.log('You dont rock')
    }
})
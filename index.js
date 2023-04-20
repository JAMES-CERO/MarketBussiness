//modules & globals
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

//define the view engine  - views
app.set('views', __dirname + "/views")

//controllers
app.use('/design', require('./controllers/design'))  //import design.js

//Engines & views 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//controllers
app.use('/design', require('./controllers/design'))  //import design.js

//Routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error')
})

app.listen(process.env.PORT, () => {
    try {
    console.log('You Rock on ' + process.env.PORT)
    } catch (err) {
        console.log('You dont rock')
    }
})
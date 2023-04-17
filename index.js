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
    res.render('home')
})
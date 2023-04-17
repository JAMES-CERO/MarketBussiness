//modules & globals
require('dotenv').config()
const express = require('express')
const app = express()

//define the view engine  - views
app.set('views', __dirname + "/views")

//controllers
app.use('/design', require('./controllers/design')) -- //import design.js

//Engines & views 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Routes
app.get('/', (req, res) => {
    res.render('Home')
})

app.get('*', (req, res) => {
    res.status(404).render('Error')
})

app.listen(process.env.PORT, () => {
    try {
    console.log('You Rock')
    } catch (err) {
        console.log('You dont rock')
    }
})
const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('checkout')
})

router.post('/', (req, res) => {

})

module.exports = router
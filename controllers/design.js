const router = require('express').Router()

router.get('/', (req, res) => {

    let design = [
        {
        name: 'Flor Roja',
        pic: '/images/flor-roja.jpeg',
        qualities:'',
        also:''
        },
        {
        name: 'Flor Roja',
        pic: '/images/flor-negra.jpeg',
        qualities:'',
        also:''
        }
    ]

    res.render('design/index', {design})
})



module.exports = router
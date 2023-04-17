const router = require('express').Router()

router.get('/', (req, res) => {
    let design = [
        {
        name: 'Flor Roja',
        pic: '',
        qualities:'',
        also:''
        },
        {
        name: 'Flor Roja',
        pic: '',
        qualities:'',
        also:''
        }
    ]

    res.render('design/index', {design})
})



module.exports = router
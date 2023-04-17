const router = require('express').Router()

router.get('/', (req, res) => {
    //GET route will eventually show a list of all places
    res.send('GET /design')



    // let design = [
    //     {
    //     name: 'Flor Roja',
    //     pic: '',
    //     qualities:'',
    //     also:''
    //     },
    //     {
    //     name: 'Flor Roja',
    //     pic: '',
    //     qualities:'',
    //     also:''
    //     }
    // ]

    res.render('design/index', {design})
})



module.exports = router
const router = require('express').Router()

router.get('/', (req, res) => {

    let design = [
        {
        name: 'Flor Roja',
        pic: 'https://media.istockphoto.com/id/916989044/es/foto/flor-de-gerbera-roja-brillante-aislado-en-fondo-blanco.jpg?b=1&s=170667a&w=0&k=20&c=WavQF_4DfE7kyrL4T2YzcczJQYs_lVEtuVUVh5YR0F0=',
        qualities:'',
        also:''
        },
        {
        name: 'Flor Roja',
        pic: 'https://q7t3k5t3.rocketcdn.me/wp-content/uploads/2020/01/rosas-negras-natural.jpg',
        qualities:'',
        also:''
        }
    ]

    res.render('design/index', {design})
})



module.exports = router
const router = require('express').Router()
const places = require('../models/place')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

module.exports = router



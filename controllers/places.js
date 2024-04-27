const router = require('express').Router()
const places = require('../models/place')

router.get('/:id', (req, res) => {
    res.render('places/index', {places})
})


module.exports = router



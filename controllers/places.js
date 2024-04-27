const router = require('express').Router()
const places = require('../models/place')

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    res.render('places/index', {places})
})

module.exports = router



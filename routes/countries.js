var express = require('express')
var router = express.Router()
var model = require('../models/index');

//Get all countries in DB
router.get('/', function(req, res, next){
    model.country.findAll({}).then(countries => res.json(countries))
});

//Get country by code

router.get('/:countryCode', function(req, res, next){
    let param = req.params.countryCode
    
    
})

module.exports = router;
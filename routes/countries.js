var express = require('express');
var router = express.Router();
var model = require('../models/index');
var city = require('../models').city;


//Get all countries in DB
router.get('/', function(req, res, next){
    model.country.findAll({
        include : [city]
    }).then(countries => res.json(countries))
});

//Get country by code
router.get('/:countryCode', function(req, res, next){
    model.country.findAll({
        where : {
            code : req.params.countryCode,
        }
}).then(country => res.json(country))
    
    
})

module.exports = router;
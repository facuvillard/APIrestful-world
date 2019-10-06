var express = require('express')
var router = express.Router()
var model = require('../models/index')
var country = require('../models').country;

//Get all cities in DB
router.get('/', function(req, res, next) {
    model.city.findAll({include : [country]}).then(cities => res.json(cities))
})

//Get city by id
router.get('/:cityId', function(req,res,next){
    model.city.findById(req.params.id).then(city =>  res.json(city))
})

module.exports = router;

var express = require('express')
var router = express.Router()
var model = require('../models/index');

router.get('/', function(req, res, next){
    model.country.findAll({ attributes: ['code', 'name', 'capital', 'continent', 'headOfState']}).then(countries => res.send(countries))
});

module.exports = router;
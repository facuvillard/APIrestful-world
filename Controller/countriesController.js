var Country = require('../Models/country.js')

exports.list_all_countries = function(req,res){
    Country.getAllCountries(function(err, country){
        console.log('countriesController')
        if (err) 
            res.send(err);
            console.log('res', country);
        res.send(country);
    })
};

exports.read_a_country = function(req, res){
    Country.getCountryById(req.params.countryId)
    if (err)
        res.send(err);
    res.json(country)
}

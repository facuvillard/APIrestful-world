var sql = require('./db.js');

var Country = function(country){
    this.code = country.code
    this.name = country.name
    this.continent = country.continent
    this.region = country.region
    this.surfaceArea = country.surfaceArea
    this.indepYear = country.indepYear
    this.population = country.population
    this.lifeExpectancy = country.lifeExpectancy
    this.gnp = country.gnp
    this.gnpOld = country.gnpOld
    this.localName = country.localName
    this.governmentForm = country.governmentForm
    this.headOfState = country.headOfState
    this.capital = country.capital
    this.code2 = country.cod2
};

Country.getAllCountries = function (result) {
    sql.query("SELECT * FROM country", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('tasks : ', res);  

             result(null, res);
            }
        });   
};

Country.getCountryById = function (countryId, result) {
    sql.query("Select country from country where code = " + countryId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};

module.exports = Country;
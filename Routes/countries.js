module.exports = function(app){
    var countriesController = require('../Controller/countriesController');

    app.route('/countries').get(countriesController.list_all_countries);

    app.route('/countries/:countryId').get(countriesController.read_a_country);
};


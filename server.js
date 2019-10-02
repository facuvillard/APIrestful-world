var express = require('express');
app = express();
bodyParser = require('body-parser');
port = process.env.PORT || 3000;

const mysql = require('mysql');

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'buchin',
    database: 'world'
})


mc.connect();

console.log('Servidor apiRestful inciadio en el puerto: ' + port);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(port);
var countriesRoutes = require('./Routes/countries.js');

countriesRoutes(app);
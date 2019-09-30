var express = require('express')
var http = require('http')
var app = express()

var users = ['oscar', 'juan', 'marcos']

app.get('/users', function(req,res){
    res.send(users)
})

app.post('/users', function(req,res){
    users.push('Facundo Villard')
    res.send('Nuevo usuario agregado')
})

app.get('/users/:username', function(req,res){
    if (users.indexOf(req.params.username) != -1)
    {
        res.send('hola' + req.params.username)
    } 
    else
    {
        res.send('No existe ese nobmre')
    }
})

app.get('/', function(req, res) {
    res.status(200).send("Bienvenido a mi API RESTful")
})

http.createServer(app).listen(8001, function(){
    console.log('Servidor inciado en http://localhost:8001');
});
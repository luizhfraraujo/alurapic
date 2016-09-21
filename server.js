var http = require('http');
var app = require('./config/express');
var db = require('./config/database');

//criar um servidor
http.createServer(app).listen(3000, function() {
    console.log('Servidor iniciado com sucesso');
});

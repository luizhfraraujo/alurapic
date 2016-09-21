var http = require('http');
var app = require('./config/express');
var db = require('./config/database')('mongodb://tir4y:tir4y@ds023912.mlab.com:23912/testes');

//criar um servidor
http.createServer(app).listen(3000, function() {
    console.log('Servidor iniciado com sucesso');
});

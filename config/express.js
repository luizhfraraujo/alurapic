var express = require('express');
var app = express();

//Módulo de configuração do express
app.use(express.static('./public'));

module.exports = app;

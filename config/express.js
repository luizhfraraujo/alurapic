var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var connection  = require('express-myconnection');
var mysql = require('mysql');

//Módulo de configuração do express
app.use(express.static('./public'));

app.use(bodyParser.json());
/*
app.use(
    connection(mysql,{
        host: 'STRAWBERRY.arvixe.com',
        user: 'tasks',
        password : 'tasks',
        port : 3306, //port mysql
        database:'tasks'
    },'request')
);*/

consign({ cwd: 'app' })
    .include('api')
    .then('routes')
    .into(app);

module.exports = app;

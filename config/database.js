var mongoose = require('mongoose');

mongoose.connect('mongodb://tir4y:tir4y@ds023912.mlab.com:23912/testes');

mongoose.connection.on('connected', function() {
    console.log('Conectado ao MongoDB');
});
/*
mongoose.connection.on('error', function(error) {
    console.log('Erro na Conexão ao MongoDB:' + error);
});

mongoose.connection.on('disconnected', function() {
    console.log('Desconectado do MongoDB');
});

process.on('SIGINT', function() {

    mongoose.connection.close(function() {
        console.log('Aplicação fechada. Conexão fechada pelo término da aplicação.');
        //process.exit(0);
    });
});*/

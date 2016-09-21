var mongoose = require('mongoose');

mongoose.connect('mongodb://tir4y:tir4y@ds023912.mlab.com:23912/testes');

mongoose.connection.on('connected', function(){
    console.log('Conectado ao MongoDB');
});

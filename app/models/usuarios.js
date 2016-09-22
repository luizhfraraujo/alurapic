var mongoose = require('mongoose');

//Função Construtora
var schema = mongoose.Schema({

    login: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
});

mongoose.model('Usuario', schema);

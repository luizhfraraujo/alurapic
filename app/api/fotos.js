var api = {};
var fotos = [
    {_id: 1, titulo: "Leão", url:"http://www.fundosanimais.com/Imagens/leao-por-do-sol.jpg"},
    {_id: 2, titulo: "Leão 2", url:"http://www.fundosanimais.com/Imagens/leao-por-do-sol.jpg"}
];
var contador = 2;

api.lista = function(req, res){

    res.json(fotos);
};

api.buscaPorId = function(req, res) {

    var foto = fotos.find(function(foto) {
        return foto._id == req.params.id;
    });

    res.json(foto);
};

api.atualizaPorId = function(req, res) {
    var foto = req.body;
    var fotoId = req.params.id;
    var indice = fotos.findIndex(function(foto) {
        return foto._id == fotoId;
    });

    fotos[indice] = foto;

    res.sendStatus(200);
};

api.removePorId = function(req, res) {

    fotos = fotos.filter(function(foto) {
        return foto._id != req.params.id;
    });

    res.sendStatus(204);
};

api.adicionar = function(req, res) {
    var foto = req.body;
    foto._id = ++contador;
    fotos.push(foto);

    res.json(foto);
};

module.exports = api;

var api = {};

api.lista = function(req, res){
    var fotos = [
        {_id: 1, titulo: "Leão", url:"http://www.fundosanimais.com/Imagens/leao-por-do-sol.jpg"},
        {_id: 2, titulo: "Leão 2", url:"http://www.fundosanimais.com/Imagens/leao-por-do-sol.jpg"}
    ];
    res.json(fotos);
};

module.exports = api;

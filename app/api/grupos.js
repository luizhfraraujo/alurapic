var api = {};

api.lista = function(req, res) {
    var grupos = [
        {_id: 1, nome: "Esportes"},
        {_id: 2, nome: "Lugares"},
        {_id: 3, nome: "Animais"}
    ];
    res.json(grupos);
};

module.exports = api;

module.exports = function(app) {

    var api = app.api.fotos;

    app.route('/v1/fotos')
        .get(api.lista)
        .post(api.adicionar);

    app.route('/v1/fotos/:id')
        .put(api.atualizaPorId)
        .get(api.buscaPorId)
        .delete(api.removePorId);
}

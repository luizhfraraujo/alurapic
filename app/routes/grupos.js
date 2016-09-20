module.exports = function(app) {
    //Get dos grupos
    var api = app.api.grupos;
    app.get('/v1/grupos', api.lista);
}

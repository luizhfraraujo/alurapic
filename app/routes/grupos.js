var api = require('../api/grupos');

module.exports = function(app) {
    //Get dos grupos
    app.get('/v1/grupos', api.lista);
}

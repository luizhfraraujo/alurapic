angular.module('alurapic').factory('tokenInterceptor', function($window) {
    var interceptor = {};

    interceptor.response = function(response) {
        var token = response.headers('x-access-token');
        if(token){
            $window.sessionStorage.token = token;
        }
        return response;
    };

    interceptor.request = function(config) {
        config.headers = config.headers || {};
        if($window.sessionStorage.token) {
            config.headers['x-access-token'] = $window.sessionStorage.token;
            console.log('Adicionando token no Header da requisição a ser enviada para o servidor')
        }
        return config;
    };

    return interceptor;
});

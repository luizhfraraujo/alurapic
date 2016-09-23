angular.module('alurapic').factory('tokenInterceptor', function($window, $q, $location) {
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

    interceptor.responseError = function(rejection) {
        if(rejection != null && rejection.status == 401) {
            //redireciontar para a parcial de login
            delete $window.sessionStorage.token;
            $location.path('/login');
        }

        return $q.reject(rejection);
    };

    return interceptor;
});

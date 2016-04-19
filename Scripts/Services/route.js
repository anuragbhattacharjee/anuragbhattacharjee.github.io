(function(){
    angular
        .module('myPortfolio')
        .config(function($routeProvider){
            $routeProvider
                .when('/home',{
                    templateUrl: 'Views/home.html',
                    controller: 'myController',
                    controllerAs: 'homeCtrl'
                })
                .otherwise({
                    redirectTo : '/home'
                });
        })
})();
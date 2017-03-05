app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/search', {
        controller: 'searchController',
        templateUrl: './app/templates/searchPage.html'
    }).otherwise({redirectTo:'/'})
}]);
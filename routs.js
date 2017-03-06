app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/search', {
        controller: 'searchController',
        templateUrl: './app/templates/searchPage.html'
    }).when('/list', {
        controller: 'searchController',
        templateUrl: './app/templates/list.html'
    }).otherwise({redirectTo:'/'})
}]);
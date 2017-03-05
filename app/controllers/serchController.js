app.controller('searchController',  function ($scope,  API) {
    $scope.searchedName = [];

    $scope.searchIt = function () {
        API.GetSearch($scope.searchedName).then(function(dataB){
            console.log(dataB);
            $scope.searchResult = dataB;
            console.log(2);
            alert('wow!')
        });
    };
    $scope.searchResult = []

});
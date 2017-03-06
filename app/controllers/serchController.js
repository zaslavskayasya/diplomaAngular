app.controller('searchController',  function ($scope,  API) {
    $scope.searchedName = [];

    $scope.searchIt = function () {
        API.GetSearch($scope.searchedName).then(function(dataB){
            console.log(dataB);
            $scope.searchResult = dataB;
            console.log(2);
        });
    };

    $scope.addToList = function (toList) {
        $scope.MyList = toList;
        console.log(toList);
        console.log($scope.MyList)

    };
    $scope.searchResult = [];
    $scope.MyList = [];

});
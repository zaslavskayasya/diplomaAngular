app.service('API', function ( $http, $q  ) {
    var def = $q.defer();
    return{
        GetSearch : function(searchedName) {
            console.log(searchedName);
            var url = "http://it-ebooks-api.info/v1/search/" + searchedName;
            console.log(url)
            $http({
                method: 'GET',
                url: url
            }).then(function (data) {
               var dataB = data.data.Books;
                console.log(dataB);
                    def.resolve(dataB);
                    console.log(1);                }
            );
            return def.promise;
        }
    }
});
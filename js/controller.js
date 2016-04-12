angular.module('alumniApp', [])
.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
                $http.get("http://iness.simplon.co/alumnis.json").success(        function(data, status, headers) {
                  console.log(data);
                  $scope.alumnis = data;
                });
}]);

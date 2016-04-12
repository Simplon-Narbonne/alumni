var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){

	$routeProvider.when('/',{
		template:'Welcome user!'
	}).when('/Olivier',{
		template:'Je mappel olivier!' 
	}).otherwise({
		redirectTo:'/'
	});

}]);


//le route provider fonctionne grace a la dependance ngRoute / sans sa ne fontcionne pas . 
// !!!!!!!! le crochet du config se ferme a la fin !!! car config est une methode qui prend UN aray comme parametre donc ->
//config(['$routeProvider',function($routeprovider){...instruction}])
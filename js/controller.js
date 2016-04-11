angular.module('alumniApp', [])
.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.alumnis = [
    {
    "lastname": "Dude",
    "firstname": "Abdallah",
    "description": "Symfony, Magento",
    "cvlink": "https://www.doyoubuzz.com/fr/p/modeles-cv/classic"
    },
    {
    "lastname": "Dude",
    "firstname": "Aladine",
    "description": "NodeJS, React",
    "cvlink": "https://www.doyoubuzz.com/fr/p/modeles-cv/classic"
    },
    {
    "lastname": "Dude",
    "firstname": "Alix",
    "description": "SPIP, Wordpress",
    "cvlink": "https://www.doyoubuzz.com/fr/p/modeles-cv/classic"
    },
    {
    "lastname": "Dude",
    "firstname": "André",
    "description": "PHP7",
    "cvlink": "https://www.doyoubuzz.com/fr/p/modeles-cv/classic"
    },
  ];
}]);

angular.module('alumniApp', [])
.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.alumnis = [
    {
    "lastname": "Dude",
    "fisrtname": "Abdallah",
    "description": "Symfony, Magento",
    "cvlink": "https://www.doyoubuzz.com/fr/p/modeles-cv/classic"
    },
    {
    "lastname": "Dude",
    "fisrtname": "Aladine",
    "description": "NodeJS, React",
    "cvlink": "https://www.doyoubuzz.com/fr/p/modeles-cv/classic"
    },
    {
    "lastname": "Dude",
    "fisrtname": "Alix",
    "description": "SPIP, Wordpress",
    "cvlink": "https://www.doyoubuzz.com/fr/p/modeles-cv/classic"
    },
    {
    "lastname": "Dude",
    "fisrtname": "André",
    "description": "PHP7",
    "cvlink": "https://www.doyoubuzz.com/fr/p/modeles-cv/classic"
    },
  ];
}]);

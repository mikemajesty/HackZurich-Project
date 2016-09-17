(function(angular) {
  'use strict';
  angular.module("yoruba", [])

  .controller('AppCtrl', ['$scope', function($scope) {
    console.log('ctrl loaded');

    $scope.basicMessage = '';

    //get clients
    //$http.get('/api/clients').then(function (clients) {
    //  $scope.clients = clients;
    //  return;
    //});

    $scope.clients = [
      {
        area: '+55',
        number: '15996441056',
        mac: 'b3:ed:45:79:a2:58'
      },
      {
        area: '+55',
        number: '15996441056',
        mac: 'b3:ed:45:79:a2:58'
      },
      {
        area: '+55',
        number: '15996441056',
        mac: 'b3:ed:45:79:a2:58'
      },
      {
        area: '+55',
        number: '15996441056',
        mac: 'b3:ed:45:79:a2:58'
      },
    ];

    $scope.sendBasicMessage = function() {
      console.log('basicMessage: ', $scope.basicMessage);
    };

    console.log($scope.clients);
  }]);

})(angular);

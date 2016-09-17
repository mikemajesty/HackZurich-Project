(function(angular) {
  'use strict';
  angular.module("yoruba", ['ngMap'])

  .controller('AppCtrl', ['$http', '$interval', '$scope', function($http, $interval, $scope) {
    console.log('ctrl loaded');

    $scope.basicMessage = '';

    //get clients
    //$http.get('/api/clients').then(function (clients) {
    //  $scope.clients = clients;
    //  return;
    //});

    $scope.clients = [
    ];

    $interval(() => {
        $http.get('/api/clients').then((res) => {
            $scope.clients = res.data;
        }, (error) => {
            console.log(error);
        });
    }, 10000, 0);

    $scope.sendBasicMessage = function() {
      //$http.post('/api/basicMessage', { users: $scope.clients, message: $scope.basicMessage } )
      //  .then(function(res) {
      //    console.log(res.data);
      //  });

      console.log('basicMessage: ', $scope.basicMessage);
    };

    console.log($scope.clients);
  }]);

})(angular);

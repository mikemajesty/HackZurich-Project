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
            if (!$scope.clients.length) {
              $scope.clients = res.data;
              return;
            }

            res.data.forEach(function(newClient) {
              $scope.clients.forEach(function(currentClient) {
                if (newClient.clientMac == currentClient.clientMac) {
                  currentClient.Location = currentClient.Location;
                }
              });
            });

            // .filter((element) => {
            //     return element.clientMac === '30:cb:f8:ad:0f:1a';
            // });
        }, (error) => {
            console.log(error);
        });
    }, 5000, 0);

    $scope.sendBasicMessage = function() {
      //$http.post('/api/basicMessage', { users: $scope.clients, message: $scope.basicMessage } )
      //  .then(function(res) {
      //    console.log(res.data);
      //  });

      console.log('basicMessage: ', $scope.basicMessage);
    };
  }]);

})(angular);

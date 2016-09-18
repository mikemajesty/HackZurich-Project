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

    $scope.clients = [];

    var MINUTE = 2;
    var myStartDate = new Date();
    myStartDate.setMinutes(myStartDate.getMinutes() - MINUTE);
    $scope.date = myStartDate.toISOString();

    $interval(() => {
        $http.get('/api/clients').then((res) => {
            $scope.clients.filter((client) => {
                return client.visible || client.selected;
            }).forEach((client) => {
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].clientMac == client.clientMac) {
                        res.data[i].selected = client.selected;
                        res.data[i].visible = client.visible;

                        break;
                    } 
                }
            });

            $scope.clients = res.data;

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

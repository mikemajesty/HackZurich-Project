(function(angular) {
  'use strict';
  angular.module("yoruba", ['ngMap'])

  .controller('AppCtrl', ['$http', '$interval', '$scope', function($http, $interval, $scope) {
    console.log('ctrl loaded');

    $scope.message = "";

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

    $scope.sendBasicMessage = function(clients, message) {
        var clientIds = clients.filter((client) => {
            return client.selected;
        }).map((client) => {
            return client._id;
        });

        $http.post('/api/messages', { clients: clientIds, message: message } )
        .then(function(res) {
            $scope.message = "";
        });
    };

    $scope.onCheckAll = function(checkAll) {
      $scope.clients.forEach((client) => {
          client.selected = checkAll;
      });
    };

    $scope.onVisibleAll = function(visibleAll) {
      $scope.clients.forEach((client) => {
          client.visible = visibleAll;
      });
    };
  }]);

})(angular);

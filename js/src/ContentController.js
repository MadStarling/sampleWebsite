var app = angular.module('app', []);

app.controller('ContentController', function($scope){
    $scope.watch($('.navbar').lenght, function(newValue) {
        if(newValue === 0){
            $('.content').css('display', 'none')            
        }
    })
});
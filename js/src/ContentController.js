app.controller('ContentController', function($scope){
    $scope.$watch(function() {
        return window.showContent;
    }, function(newValue) {
        if(!newValue){
            $('.content').css('display', 'none');           
        } else {
            $('.content').css('display', 'initial');
        }
    })
});
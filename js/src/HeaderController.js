app.controller('HeaderController', function($scope){
    $scope.title = 'madStarling';
    $scope.subtitle = 'Developer by passion';

    $scope.pageIndex = 0;
    window.showContent = false;

    $scope.menuItems = [
        {
            src: 'images/contact.svg',
            index: 2
        },
        {
            src: 'images/about.svg',
            index: 1
        },
        {
            src: 'images/home.svg',
            index: 0
        }
    ];

    $scope.getPage = function(){
        return $scope.pageIndex;
    };

    $scope.changePage = function(newIndex) {
        $scope.pageIndex = newIndex;

        window.showContent = newIndex === 0 ? false : true;
    };

    $scope.$watch('pageIndex', function(newIndex) {
        if (newIndex > 0) {
            $scope.title = 'mS';
        } else {
            $scope.title = 'madStarling'
        }
    });
});
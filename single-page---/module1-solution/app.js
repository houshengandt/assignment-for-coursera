(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.lunch = "";
        $scope.checkLunch = function () {
            var msg = "";
            var dishesString = $scope.lunch.trim();
            if(dishesString == ""){
                msg = "Please enter some data!";
            }else {
                var dishArray = dishesString.split(',');
                var countdishes = 0;
                for(var i=0;i<dishArray.length;i++){
                    if(dishArray[i].trim() != ""){
                        countdishes++;
                    }
                }
                if(countdishes <= 3){
                    msg = "Enjoy";
                }else{
                    msg = "Too much";
                }
            }
            $scope.message = msg;
        };
    };
})();
hrApp.controller('MathController', ['$scope','MathService', function($scope, MathService){
    
    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
        var a = $scope.numberA;
        var b = $scope.numberB;
        $scope.op1 = MathService.add(a,b);
        $scope.op2 = MathService.substract(a,b);
        $scope.op3 = MathService.multiply(a,b);
        $scope.op4 = MathService.divide(a,b);

//        TODO #13 refactor your calculations using MathService
    }

}]);

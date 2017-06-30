/**
 * Created by ginel.guiu on 6/30/2017.
 */
hrApp.controller('FormsController', ['$scope', function($scope){

    $scope.submit = function(){
        if($scope.myForm.input.$valid == true) {
            $scope.user = $scope.userType;
            alert('Userul '+$scope.user+' a fost creat');
        }
    }
}]);
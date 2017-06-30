/**
 * Created by ginel.guiu on 6/30/2017.
 */
hrApp.controller('ColorsController', ['$scope', '$location', function($scope, $location){
    $scope.colors = [
        {
            "text" : "muted",
            "class": "text-muted",
            "type" : "strong"
},
    {
        "text" : "primary",
        "class": "text-primary",
	    "type" : "strong"
    },
    {
        "text" : "success",
        "class": "text-success",
	      "type" : "strong"
    },
    {
        "text" : "info",
        "class": "text-info",
        "type" : "boring"
    },
    {
        "text" : "warning",
        "class": "text-warning",
	    "type" : "boring"
    },
    {
        "text" : "danger",
        "class": "text-danger",
	    "type" : "boring"
    }
    ];
    $scope.changeColor=function(){
        $scope.colorClass = $scope.myColor;
    }

}]);



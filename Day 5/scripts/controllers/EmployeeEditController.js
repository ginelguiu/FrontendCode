hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5

        $scope.departments = [];
        $scope.jobs = [];
        $scope.managersUnfiltered = [];
        $scope.managersNotUnique=[];
        $scope.managers=[];

        $http.get(CommonResourcesFactory.findAllJobsUrl)
            .success(function(data, status, headers, config){
                $scope.jobs=data;
            }).error(function(data, status, headers, config){
            alert("Error"+status);
        });
        $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
            .success(function(data, status, headers, config){
                $scope.departments=data;
            }).error(function(data, status, headers, config){
            alert("Error"+status);
        });
        $http.get(CommonResourcesFactory.findAllEmployeesUrl)
            .success(function(data, status, headers, config){
                $scope.managersUnfiltered=data;
                for(var i in $scope.managersUnfiltered)
                {
                    if($scope.managersUnfiltered[i].managerId!=null) {
                        var ok = 0;
                        for (var j in $scope.managers) {
                            if ($scope.managersUnfiltered[i].managerId.employeeId == $scope.managers[j].employeeId)
                                ok = 1;
                        }
                        if (ok == 0) {
                            $scope.managers.push(angular.copy($scope.managersUnfiltered[i].managerId));
                        }
                    }
                }
            }).error(function(data, status, headers, config){
            alert("Error"+status);
        });
        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.edit = function (editEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: editEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);
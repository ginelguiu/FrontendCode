/**
 * Created by ginel.guiu on 7/3/2017.
 */
hrApp.controller('JobsListController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    function($scope, $http, $location, CommonResourcesFactory) {
        $scope.job = {};

        //TODO #HR1

        $scope.jobs = [];

        $http.get(CommonResourcesFactory.findAllJobsUrl)
            .success(function(data, status, headers, config){
                $scope.jobs=data;
            }).error(function(data, status, headers, config){
            alert("Error"+status);
        });
        $scope.viewJob = function (jobId) {
            $location.url('/jobView/' + jobId);
        };
    }]);